import React, { useState, useRef, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  X,
  Send,
  Mic,
  Square,
  Trash2,
  Users,
  ArrowLeft,
  Phone,
  Video,
  UserPlus,
  PhoneOff,
  LogOut,
} from "lucide-react";

import {
  doc,
  setDoc,
  getDoc,
  addDoc,
  deleteDoc,
  updateDoc,
  collection,
  onSnapshot,
  query,
  where,
  orderBy,
  serverTimestamp,
  arrayRemove,
} from "firebase/firestore";

import { db } from "../firebase";

const COLORS = {
  accent: "#5b4bff",
  accentDark: "#4636d1",
  bgPanel: "#ffffff",
  textMain: "#1e1b2e",
  textSoft: "#6b6780",
  border: "#e6e4f2",
  danger: "#ff5b6a",
  bubbleBot: "#f0eefc",
};

function getChatRoomId(uid1, uid2) {
  return [uid1, uid2].sort().join("_");
}

async function uploadToCloudinary(audioBlob) {
  const formData = new FormData();
  formData.append("file", audioBlob);
  formData.append("upload_preset", "voice_upload");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/t0eyfav7/video/upload",
    { method: "POST", body: formData }
  );

  const data = await res.json();
  if (!data.secure_url) throw new Error("Cloudinary upload failed");
  return data.secure_url;
}

export default function DirectChatWidget({ user }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [allUsers, setAllUsers] = useState([]);
  const [activePartner, setActivePartner] = useState(null);

  // Խմբերի վիճակներ
  const [groups, setGroups] = useState([]);
  const [creatingGroup, setCreatingGroup] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);

  // Հաղորդագրություններ և ձայնագրում
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [recording, setRecording] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [sendError, setSendError] = useState("");

  // Զանգերի վիճակներ
  const [activeCall, setActiveCall] = useState(null);
  const localVideoRef = useRef(null);
  const localStreamRef = useRef(null);
  const remoteAudioRef = useRef(null);
  const remoteVideoRef = useRef(null);

  // WebRTC peer connection և ICE candidate-ների ժամանակավոր հերթ
  const pcRef = useRef(null);
  const pendingCandidatesRef = useRef([]);
  const remoteDescSetRef = useRef(false);

  // ԿԱՐԵՎՈՐ. պահում ենք ամենավերջին remote stream-ը, որպեսզի եթե
  // ontrack-ը կրակի ավելի վաղ, քան <audio>/<video> element-երը
  // render են եղել DOM-ում (օրինակ activeCall.connected-ի փոփոխման
  // ընթացքում, incoming call -> accept -> re-render race condition),
  // մենք հնարավորություն ունենանք dedicated useEffect-ով նորից
  // "ամրացնել" stream-ը element-ներին, հենց նրանք հասանելի դառնան։
  const remoteStreamRef = useRef(null);

  const ICE_SERVERS = [
    { urls: "stun:stun.l.google.com:19302" },
    { urls: "stun:stun1.l.google.com:19302" },
  ];

  // Ref-ով ենք հետևում ընթացիկ activeCall-ին, որպեսզի listener-ի
  // useEffect-ը ՉԼԻՆԻ activeCall-ից կախված (սա էր անընդհատ
  // resubscribe-ի և Firestore 400 սխալների պատճառը)
  const activeCallRef = useRef(null);
  useEffect(() => {
    activeCallRef.current = activeCall;
  }, [activeCall]);

  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const micStreamRef = useRef(null);
  const bodyRef = useRef(null);

  const isLoggedIn = !!user;

  // Օգնական ֆունկցիա, որը հեռավոր stream-ը (եթե արդեն ստացվել է)
  // ամրացնում է <audio>/<video> element-երին և explicit .play()
  // է կանչում։ Browser-ները (հատկապես Chrome/Safari) հաճախ ԼՌԵԼՅԱՅՆ
  // ԱՐԳԵԼԱՓԱԿՈՒՄ ԵՆ autoplay-ը, եթե srcObject-ը դրվում է ասինխրոն
  // (Firestore/WebRTC callback-ի ներսում), ուստի պարզապես srcObject
  // սահմանելը հաճախ բավարար չէ. պետք է նաև explicit .play() կանչել։
  const attachRemoteStream = useCallback(() => {
    const stream = remoteStreamRef.current;
    if (!stream) return;

    if (remoteAudioRef.current && remoteAudioRef.current.srcObject !== stream) {
      remoteAudioRef.current.srcObject = stream;
      remoteAudioRef.current
        .play()
        .catch((err) => console.error("remoteAudio play() failed:", err));
    }

    if (
      activeCallRef.current?.type === "video" &&
      remoteVideoRef.current &&
      remoteVideoRef.current.srcObject !== stream
    ) {
      remoteVideoRef.current.srcObject = stream;
      remoteVideoRef.current
        .play()
        .catch((err) => console.error("remoteVideo play() failed:", err));
    }
  }, []);

  // Երբ activeCall-ը փոփոխվում է (օր. incoming -> accepted, կամ
  // connected դառնում է true), <audio>/<video> element-երը կարող են
  // նոր հասանելի լինել DOM-ում։ Այս effect-ը վերաամրացնում է արդեն
  // ստացված remote stream-ը այդ նոր element-ներին։
  useEffect(() => {
    attachRemoteStream();
  }, [activeCall?.connected, activeCall?.type, activeCall?.isIncoming, attachRemoteStream]);

  // Զանգի ավարտի cleanup — useCallback, որպեսզի stale closure չառաջանա
  const endCallCleanup = useCallback(async () => {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      localStreamRef.current = null;
    }
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null;
    }
    if (remoteAudioRef.current) {
      remoteAudioRef.current.srcObject = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
    if (pcRef.current) {
      pcRef.current.close();
      pcRef.current = null;
    }
    pendingCandidatesRef.current = [];
    remoteDescSetRef.current = false;
    remoteStreamRef.current = null;
    setActiveCall(null);
    activeCallRef.current = null;

    try {
      if (user?.uid) await deleteDoc(doc(db, "active_calls", user.uid));
    } catch (err) {
      console.error("Failed to clear own active_calls doc:", err);
    }
  }, [user?.uid]);

  // --- WEBRTC ՕԳՆԱԿԱՆ ՖՈՒՆԿՑԻԱՆԵՐ ---
  // callDocPath-ը միշտ zանգողի uid-ով document-ն է (active_calls/{calleeUid}),
  // քանի որ startCall-ը հենց այնտեղ է գրում ringing/offer/answer info-ն։
  function getSignalRoomId() {
    // Signaling info-ն պահում ենք ինքը՝ active_calls collection-ի
    // callee-ի document-ում, որպեսզի երկու կողմն էլ արդեն գիտեն այս
    // path-ը (նույն document-ը, որով ուղարկվում է ringing/accepted)։
    return activeCall?.callId;
  }

  function createPeerConnection(roomId, isCaller) {
    const pc = new RTCPeerConnection({ iceServers: ICE_SERVERS });

    pc.onicecandidate = (event) => {
      if (event.candidate) {
        const subcol = isCaller ? "callerCandidates" : "calleeCandidates";
        addDoc(
          collection(db, "active_calls", roomId, subcol),
          event.candidate.toJSON()
        ).catch((err) => console.error("Failed to send ICE candidate:", err));
      }
    };

    // ԿԱՐԵՎՈՐ ՈՒՂՂՈՒՄ. նախկինում ձայնը երբեմն չէր լսվում, քանի որ.
    //   1) video զանգի ժամանակ <audio> element-ը ընդհանրապես render
    //      չէր լինում DOM-ում (պայմանական rendering-ի պատճառով), և
    //      remoteAudioRef.current-ը null էր՝ ուստի ոչինչ չէր ամրացվում,
    //   2) նույնիսկ երբ srcObject-ը դրվում էր, browser-ը (հատկապես
    //      Chrome/Safari) լռելյայն արգելափակում է media-ի autoplay-ը,
    //      երբ դա տեղի է ունենում ասինխրոն event handler-ի ներսում,
    //      եթե չկա explicit .play() կանչ։
    // Այժմ pc.ontrack-ը պահում է stream-ը ref-ում և կանչում է
    // attachRemoteStream()-ը, որը և՛ միշտ ամրացնում է audio element-ին
    // (անկախ զանգի տեսակից), և՛ explicit .play() է անում։
    pc.ontrack = (event) => {
      const [remoteStream] = event.streams;
      remoteStreamRef.current = remoteStream;
      attachRemoteStream();
    };

    pc.onconnectionstatechange = () => {
      if (
        pc.connectionState === "failed" ||
        pc.connectionState === "disconnected" ||
        pc.connectionState === "closed"
      ) {
        console.warn("Peer connection state:", pc.connectionState);
      }
    };

    return pc;
  }

  async function flushPendingCandidates() {
    if (!pcRef.current) return;
    const queued = pendingCandidatesRef.current;
    pendingCandidatesRef.current = [];
    for (const candidate of queued) {
      try {
        await pcRef.current.addIceCandidate(new RTCIceCandidate(candidate));
      } catch (err) {
        console.error("Failed to add queued ICE candidate:", err);
      }
    }
  }

  // Օգտատիրոջ գրանցում/թարմացում բազայում
  useEffect(() => {
    if (!isLoggedIn || !user?.uid) return;

    const validPhoto =
      user.photoURL && user.photoURL.startsWith("http") ? user.photoURL : "";

    setDoc(
      doc(db, "users", user.uid),
      {
        uid: user.uid,
        name: user.displayName || user.email?.split("@")[0] || "Օգտատեր",
        email: user.email || "",
        photoURL: validPhoto,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    ).catch((err) => console.error("Failed to upsert user profile:", err));
  }, [isLoggedIn, user?.uid]);

  // Բոլոր օգտատերերի բեռնում
  useEffect(() => {
    if (!isLoggedIn || !user?.uid) return;

    const unsubscribe = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        const usersList = snapshot.docs
          .map((d) => ({
            id: d.id,
            ...d.data(),
          }))
          .filter((u) => u.uid !== user.uid && u.email !== user.email);

        setAllUsers(usersList);
      },
      (err) => console.error("Users listener error:", err)
    );
    return () => unsubscribe();
  }, [isLoggedIn, user?.uid, user?.email]);

  // Խմբերի բեռնում
  useEffect(() => {
    if (!isLoggedIn || !user?.uid) return;
    const groupsQuery = query(
      collection(db, "group_chats"),
      where("participants", "array-contains", user.uid)
    );
    const unsubscribe = onSnapshot(
      groupsQuery,
      (snapshot) => {
        const groupsList = snapshot.docs.map((d) => ({
          id: d.id,
          ...d.data(),
        }));
        setGroups(groupsList);
      },
      (err) => console.error("Groups listener error:", err)
    );
    return () => unsubscribe();
  }, [isLoggedIn, user?.uid]);

  // Մուտքային զանգերի լսում
  useEffect(() => {
    if (!isLoggedIn || !user?.uid) return;

    const callDocRef = doc(db, "active_calls", user.uid);
    const unsubscribe = onSnapshot(
      callDocRef,
      (docSnap) => {
        if (docSnap.exists()) {
          const callData = docSnap.data();
          if (callData && callData.status === "ringing") {
            setActiveCall({
              callId: user.uid,
              callerName: callData.callerName,
              callerUid: callData.callerUid,
              type: callData.type,
              isIncoming: true,
            });
          }
        } else {
          if (activeCallRef.current?.isIncoming) {
            endCallCleanup();
          }
        }
      },
      (err) => console.error("Active call listener error:", err)
    );

    return () => unsubscribe();
  }, [isLoggedIn, user?.uid, endCallCleanup]);

  // Ելքային զանգի կարգավիճակի լսում (զանգողի կողմից)
  useEffect(() => {
    if (!isLoggedIn || !activeCall || activeCall.isIncoming) return;

    const partnerCallDocRef = doc(db, "active_calls", activeCall.callId);
    const unsubscribe = onSnapshot(
      partnerCallDocRef,
      async (docSnap) => {
        if (docSnap.exists()) {
          const data = docSnap.data();
          if (data?.status === "accepted") {
            setActiveCall((prev) =>
              prev && !prev.isIncoming ? { ...prev, connected: true } : prev
            );
          }
          if (data?.answer && pcRef.current && !remoteDescSetRef.current) {
            try {
              await pcRef.current.setRemoteDescription(
                new RTCSessionDescription(data.answer)
              );
              remoteDescSetRef.current = true;
              await flushPendingCandidates();
            } catch (err) {
              console.error("Failed to set remote description (answer):", err);
            }
          }
        } else {
          endCallCleanup();
        }
      },
      (err) => console.error("Outgoing call status listener error:", err)
    );

    return () => unsubscribe();
  }, [isLoggedIn, activeCall?.callId, activeCall?.isIncoming, endCallCleanup]);

  // Callee-ի candidate-ների լսում (զանգողի կողմից)
  useEffect(() => {
    if (!isLoggedIn || !activeCall || activeCall.isIncoming) return;
    const roomId = activeCall.callId;
    const unsubscribe = onSnapshot(
      collection(db, "active_calls", roomId, "calleeCandidates"),
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const candidate = change.doc.data();
            if (pcRef.current && remoteDescSetRef.current) {
              pcRef.current
                .addIceCandidate(new RTCIceCandidate(candidate))
                .catch((err) =>
                  console.error("Failed to add callee ICE candidate:", err)
                );
            } else {
              pendingCandidatesRef.current.push(candidate);
            }
          }
        });
      },
      (err) => console.error("Callee candidates listener error:", err)
    );
    return () => unsubscribe();
  }, [isLoggedIn, activeCall?.callId, activeCall?.isIncoming]);

  // Caller-ի candidate-ների լսում (callee-ի կողմից)
  useEffect(() => {
    if (!isLoggedIn || !activeCall || !activeCall.isIncoming || !activeCall.connected)
      return;
    const roomId = activeCall.callId;
    const unsubscribe = onSnapshot(
      collection(db, "active_calls", roomId, "callerCandidates"),
      (snapshot) => {
        snapshot.docChanges().forEach((change) => {
          if (change.type === "added") {
            const candidate = change.doc.data();
            if (pcRef.current && remoteDescSetRef.current) {
              pcRef.current
                .addIceCandidate(new RTCIceCandidate(candidate))
                .catch((err) =>
                  console.error("Failed to add caller ICE candidate:", err)
                );
            } else {
              pendingCandidatesRef.current.push(candidate);
            }
          }
        });
      },
      (err) => console.error("Caller candidates listener error:", err)
    );
    return () => unsubscribe();
  }, [
    isLoggedIn,
    activeCall?.callId,
    activeCall?.isIncoming,
    activeCall?.connected,
  ]);

  // Հաղորդագրությունների լսում
  useEffect(() => {
    if (!isLoggedIn || !user?.uid || !activePartner) {
      setMessages([]);
      return;
    }

    const isGroup = activePartner.isGroup;
    const roomId = isGroup
      ? activePartner.id
      : getChatRoomId(user.uid, activePartner.uid);
    const collectionPath = isGroup ? "group_chats" : "direct_chats";

    const q = query(
      collection(db, collectionPath, roomId, "messages"),
      orderBy("createdAt", "asc")
    );

    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const msgs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setMessages(msgs);
      },
      (err) => {
        console.error("Messages listener error:", err);
        setSendError("Հաղորդագրությունները չհաջողվեց բեռնել։");
      }
    );

    return () => unsubscribe();
  }, [isLoggedIn, user?.uid, activePartner]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  // --- ԶԱՆԳԻ ՍԿՍՈՒՄ (WebRTC offer ուղարկելով) ---
  async function startCall(type) {
    if (!activePartner || activePartner.isGroup) return;

    const partnerName = activePartner.name || "Զրուցակից";
    const roomId = activePartner.uid;
    setActiveCall({
      callId: roomId,
      callerName: partnerName,
      callerUid: activePartner.uid,
      type,
      isIncoming: false,
    });

    try {
      const constraints = { audio: true, video: type === "video" };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      localStreamRef.current = stream;
      if (type === "video" && localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      const pc = createPeerConnection(roomId, true);
      pcRef.current = pc;
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));

      const offer = await pc.createOffer();
      await pc.setLocalDescription(offer);

      await setDoc(doc(db, "active_calls", roomId), {
        callerUid: user.uid,
        callerName:
          user.displayName || user.email?.split("@")[0] || "Օգտատեր",
        type,
        status: "ringing",
        offer: { type: offer.type, sdp: offer.sdp },
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Call start error:", err);
      alert("Չհաջողվեց միացնել տեսախցիկը կամ միկրոֆոնը։");
      endCallCleanup();
    }
  }

  // --- ԶԱՆԳԻ ԸՆԴՈՒՆՈՒՄ (WebRTC answer ուղարկելով) ---
  async function acceptCall() {
    const roomId = activeCall.callId; // սեփական uid-ը (callee)
    try {
      const constraints = { audio: true, video: activeCall.type === "video" };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      localStreamRef.current = stream;
      if (activeCall.type === "video" && localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }

      const callDocSnap = await getDoc(doc(db, "active_calls", roomId));
      const callData = callDocSnap.data();
      if (!callData?.offer) throw new Error("Offer not found");

      const pc = createPeerConnection(roomId, false);
      pcRef.current = pc;
      stream.getTracks().forEach((track) => pc.addTrack(track, stream));

      await pc.setRemoteDescription(new RTCSessionDescription(callData.offer));
      remoteDescSetRef.current = true;

      const answer = await pc.createAnswer();
      await pc.setLocalDescription(answer);

      setActiveCall((prev) => ({
        ...prev,
        isIncoming: false,
        connected: true,
      }));

      await updateDoc(doc(db, "active_calls", roomId), {
        status: "accepted",
        answer: { type: answer.type, sdp: answer.sdp },
      });

      await flushPendingCandidates();
    } catch (err) {
      console.error("Accept call error:", err);
      endCallCleanup();
    }
  }

  async function hangUp() {
    const myUid = user?.uid;
    const otherUid = activeCall?.callerUid || activePartner?.uid;
    const roomId = activeCall?.callId;

    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      localStreamRef.current = null;
    }
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null;
    }
    if (remoteAudioRef.current) {
      remoteAudioRef.current.srcObject = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
    if (pcRef.current) {
      pcRef.current.close();
      pcRef.current = null;
    }
    pendingCandidatesRef.current = [];
    remoteDescSetRef.current = false;
    remoteStreamRef.current = null;
    setActiveCall(null);
    activeCallRef.current = null;

    const deletions = [];
    if (myUid) {
      deletions.push(
        deleteDoc(doc(db, "active_calls", myUid)).catch((err) =>
          console.error("Failed to clear own active_calls doc:", err)
        )
      );
    }
    if (otherUid) {
      deletions.push(
        deleteDoc(doc(db, "active_calls", otherUid)).catch((err) =>
          console.error("Failed to clear partner active_calls doc:", err)
        )
      );
    }
    await Promise.all(deletions);
  }

  // --- ԽՄԲԻ ՍՏԵՂԾՈՒՄ ---
  async function createGroup() {
    if (!groupName.trim() || selectedMembers.length === 0) {
      alert("Գրեք խմբի անունը և ընտրեք գոնե մեկ մասնակից։");
      return;
    }

    try {
      const participants = [...selectedMembers, user.uid];
      const newGroupRef = await addDoc(collection(db, "group_chats"), {
        name: groupName.trim(),
        participants,
        createdBy: user.uid,
        createdAt: serverTimestamp(),
        updatedAt: serverTimestamp(),
      });

      setCreatingGroup(false);
      setGroupName("");
      setSelectedMembers([]);
      setActivePartner({
        id: newGroupRef.id,
        name: groupName.trim(),
        isGroup: true,
        participants,
        createdBy: user.uid,
      });
    } catch (err) {
      console.error("Failed to create group:", err);
    }
  }

  async function leaveOrDeleteGroup() {
    if (!activePartner || !activePartner.isGroup) return;

    const isCreator = activePartner.createdBy === user.uid;

    if (isCreator) {
      if (window.confirm("Ցանկանո՞ւ եք ջնջել այս խումբը բոլորի համար։")) {
        try {
          await deleteDoc(doc(db, "group_chats", activePartner.id));
          setActivePartner(null);
        } catch (err) {
          console.error("Failed to delete group:", err);
        }
      }
    } else {
      if (window.confirm("Ցանկանո՞ւ եք դուրս գալ այս խմբից։")) {
        try {
          await updateDoc(doc(db, "group_chats", activePartner.id), {
            participants: arrayRemove(user.uid),
          });
          setActivePartner(null);
        } catch (err) {
          console.error("Failed to leave group:", err);
        }
      }
    }
  }

  async function deleteMessage(messageId) {
    if (!isLoggedIn || !user?.uid || !activePartner) return;
    const isGroup = activePartner.isGroup;
    const roomId = isGroup
      ? activePartner.id
      : getChatRoomId(user.uid, activePartner.uid);
    const collectionPath = isGroup ? "group_chats" : "direct_chats";

    try {
      await deleteDoc(doc(db, collectionPath, roomId, "messages", messageId));
    } catch (err) {
      console.error("Failed to delete message:", err);
      setSendError("Հաղորդագրությունը չհաջողվեց ջնջել։");
    }
  }

  async function ensureRoomDoc(roomId, partnerUid) {
    try {
      await setDoc(
        doc(db, "direct_chats", roomId),
        {
          participants: [user.uid, partnerUid].sort(),
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );
    } catch (err) {
      console.error("Failed to ensure room doc:", err);
    }
  }

  async function sendTextMessage() {
    const text = input.trim();
    if (!text || !isLoggedIn || !user?.uid || !activePartner) return;
    setInput("");
    setSendError("");

    const isGroup = activePartner.isGroup;
    const roomId = isGroup
      ? activePartner.id
      : getChatRoomId(user.uid, activePartner.uid);
    const collectionPath = isGroup ? "group_chats" : "direct_chats";

    try {
      if (!isGroup) await ensureRoomDoc(roomId, activePartner.uid);
      await addDoc(collection(db, collectionPath, roomId, "messages"), {
        type: "text",
        text,
        senderUid: user.uid,
        senderName:
          user.displayName || user.email?.split("@")[0] || "Օգտատեր",
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Failed to send message:", err);
      setSendError("Հաղորդագրությունը չուղարկվեց։");
      setInput(text);
    }
  }

  async function sendVoiceMessage(audioBlob) {
    if (!isLoggedIn || !user?.uid || !activePartner) return;
    setUploading(true);
    setSendError("");

    try {
      const isGroup = activePartner.isGroup;
      const roomId = isGroup
        ? activePartner.id
        : getChatRoomId(user.uid, activePartner.uid);
      const collectionPath = isGroup ? "group_chats" : "direct_chats";

      if (!isGroup) await ensureRoomDoc(roomId, activePartner.uid);
      const audioUrl = await uploadToCloudinary(audioBlob);

      await addDoc(collection(db, collectionPath, roomId, "messages"), {
        type: "audio",
        audioUrl,
        senderUid: user.uid,
        senderName:
          user.displayName || user.email?.split("@")[0] || "Օգտատեր",
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      console.error("Failed to send voice message:", err);
      setSendError("Ձայնային հաղորդագրությունը չուղարկվեց։");
    } finally {
      setUploading(false);
    }
  }

  async function toggleMic() {
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      alert("Ձեր բրաուզերը ձայնագրման աջակցություն չունի։");
      return;
    }

    if (recording) {
      mediaRecorderRef.current?.stop();
      setRecording(false);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      micStreamRef.current = stream;
      const mediaRecorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        if (micStreamRef.current) {
          micStreamRef.current.getTracks().forEach((track) => track.stop());
          micStreamRef.current = null;
        }
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        if (audioBlob.size > 0) await sendVoiceMessage(audioBlob);
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setRecording(true);
    } catch (err) {
      alert("Խնդրում ենք թույլատրել միկրոֆոնի օգտագործումը։");
    }
  }

  return (
    <div style={{ fontFamily: "Segoe UI, Arial, sans-serif" }}>
      <button
        onClick={() => setOpen((o) => !o)}
        aria-label="Բացել չաթը"
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full flex items-center justify-center border-0 cursor-pointer z-50"
        style={{
          background: `linear-gradient(145deg, ${COLORS.accent}, ${COLORS.accentDark})`,
          boxShadow: "0 8px 24px rgba(91,75,255,0.35)",
        }}
      >
        {open ? (
          <X color="#fff" size={30} />
        ) : (
          <MessageCircle color="#fff" size={32} />
        )}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 w-[350px] h-[520px] rounded-2xl flex flex-col overflow-hidden z-50"
          style={{
            background: COLORS.bgPanel,
            boxShadow: "0 16px 48px rgba(30,27,46,0.18)",
          }}
        >
          {/* CALL MODAL */}
          {activeCall && (
            <div className="absolute inset-0 bg-gray-900 z-50 flex flex-col items-center justify-between p-6 text-white text-center">
              <div className="mt-6">
                <div className="text-xs uppercase tracking-widest text-indigo-300">
                  {activeCall.type === "video" ? "Տեսազանգ" : "Աուդիո զանգ"}
                </div>
                <div className="text-2xl font-bold mt-2">
                  {activeCall.callerName}
                </div>
                <div className="text-xs text-gray-400 mt-1">
                  {activeCall.isIncoming
                    ? "Մուտքային զանգ..."
                    : activeCall.connected
                    ? "Խոսակցություն ընթացքի մեջ է..."
                    : "Զանգահարում է..."}
                </div>
              </div>

              {activeCall.type === "video" && (
                <div className="w-full h-48 bg-black rounded-xl overflow-hidden relative border border-gray-700">
                  <video
                    ref={remoteVideoRef}
                    autoPlay
                    playsInline
                    className="w-full h-full object-cover"
                  />
                  <video
                    ref={localVideoRef}
                    autoPlay
                    playsInline
                    muted
                    className="absolute bottom-2 right-2 w-16 h-20 object-cover rounded-lg border border-gray-500"
                  />
                </div>
              )}

              {/*
                ԿԱՐԵՎՈՐ ՈՒՂՂՈՒՄ. այս <audio> element-ը այժմ ՄԻՇՏ render է
                լինում՝ անկախ զանգի տեսակից (video/audio)։ Նախկինում այն
                render էր միայն "audio" տեսակի զանգերի ժամանակ, ինչի
                պատճառով video զանգերում remoteAudioRef.current-ը null
                էր, և pc.ontrack-ը ոչինչ չէր կարողանում ամրացնել այնտեղ։
                Video element-ի ինքնուրույն autoplay-ն էլ browser-ների
                կողմից հաճախ արգելափակվում է, ուստի այս hidden <audio>
                element-ը ծառայում է որպես հուսալի fallback՝ ձայնի
                նվագարկման համար բոլոր դեպքերում։
              */}
              <audio
                ref={remoteAudioRef}
                autoPlay
                playsInline
                style={{ display: "none" }}
              />

              <div className="flex items-center gap-6 mb-4">
                {activeCall.isIncoming && !activeCall.connected && (
                  <button
                    onClick={acceptCall}
                    className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center cursor-pointer border-0 shadow-lg animate-bounce"
                  >
                    <Phone size={24} color="#fff" />
                  </button>
                )}
                <button
                  onClick={hangUp}
                  className="w-14 h-14 rounded-full bg-red-500 flex items-center justify-center cursor-pointer border-0 shadow-lg"
                >
                  <PhoneOff size={24} color="#fff" />
                </button>
              </div>
            </div>
          )}

          {/* Header */}
          <div
            className="flex items-center gap-2 px-4 py-3 text-white"
            style={{
              background: `linear-gradient(120deg, ${COLORS.accent}, ${COLORS.accentDark})`,
            }}
          >
            {activePartner || creatingGroup ? (
              <button
                onClick={() => {
                  setActivePartner(null);
                  setCreatingGroup(false);
                }}
                className="bg-transparent border-0 text-white cursor-pointer p-0 mr-1"
              >
                <ArrowLeft size={20} />
              </button>
            ) : null}

            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">
                {creatingGroup
                  ? "Նոր խումբ"
                  : activePartner
                  ? activePartner.name
                  : "Զրույցներ"}
              </div>
              <div className="text-xs opacity-80 truncate">
                {activePartner && !activePartner.isGroup
                  ? activePartner.email
                  : ""}
              </div>
            </div>

            {activePartner && activePartner.isGroup && (
              <button
                onClick={leaveOrDeleteGroup}
                className="bg-transparent border-0 text-white cursor-pointer p-1 opacity-90 hover:opacity-100 mr-1"
                title={
                  activePartner.createdBy === user?.uid
                    ? "Ջնջել խումբը"
                    : "Դուրս գալ խմբից"
                }
              >
                <LogOut size={18} />
              </button>
            )}

            {activePartner && !activePartner.isGroup && !creatingGroup && (
              <div className="flex items-center gap-1.5 mr-1">
                <button
                  onClick={() => startCall("audio")}
                  className="bg-transparent border-0 text-white cursor-pointer p-1"
                  title="Զանգ"
                >
                  <Phone size={16} />
                </button>
                <button
                  onClick={() => startCall("video")}
                  className="bg-transparent border-0 text-white cursor-pointer p-1"
                  title="Տեսազանգ"
                >
                  <Video size={18} />
                </button>
              </div>
            )}

            <button
              onClick={() => setOpen(false)}
              className="border-0 bg-transparent cursor-pointer text-white opacity-80"
            >
              <X size={18} />
            </button>
          </div>

          {!isLoggedIn ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-3 px-5 text-center">
              <p className="text-sm m-0" style={{ color: COLORS.textSoft }}>
                Մյուսների հետ շփվելու համար անհրաժեշտ է մուտք գործել։
              </p>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
                className="border-0 rounded-lg px-5 py-2 text-sm font-semibold cursor-pointer text-white"
                style={{ background: COLORS.accent }}
              >
                Մուտք գործել
              </button>
            </div>
          ) : creatingGroup ? (
            <div className="flex-1 flex flex-col p-3 gap-3 overflow-y-auto">
              <input
                type="text"
                placeholder="Խմբի անունը..."
                value={groupName}
                onChange={(e) => setGroupName(e.target.value)}
                className="w-full px-3 py-2 text-sm border border-gray-200 rounded-lg outline-none"
              />
              <div className="text-xs font-semibold text-gray-500">
                Ընտրել մասնակիցներին:
              </div>
              <div className="flex-1 overflow-y-auto flex flex-col gap-1">
                {allUsers.map((u) => {
                  const isSelected = selectedMembers.includes(u.uid);
                  return (
                    <div
                      key={u.uid}
                      onClick={() =>
                        setSelectedMembers(
                          isSelected
                            ? selectedMembers.filter((id) => id !== u.uid)
                            : [...selectedMembers, u.uid]
                        )
                      }
                      className={`flex items-center justify-between p-2 rounded-lg cursor-pointer border ${
                        isSelected
                          ? "bg-indigo-50 border-indigo-200"
                          : "border-gray-100"
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {u.photoURL && u.photoURL.startsWith("http") ? (
                          <img
                            src={u.photoURL}
                            alt=""
                            className="w-7 h-7 rounded-full object-cover"
                            onError={(e) => {
                              e.target.style.display = "none";
                            }}
                          />
                        ) : (
                          <div className="w-7 h-7 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-[10px]">
                            {u.name ? u.name.charAt(0).toUpperCase() : "Օ"}
                          </div>
                        )}
                        <div>
                          <div className="text-sm text-gray-800">{u.name}</div>
                          <div className="text-xs text-gray-400">{u.email}</div>
                        </div>
                      </div>
                      <div className="text-xs text-indigo-600">
                        {isSelected ? "Ընտրված է" : "Ընտրել"}
                      </div>
                    </div>
                  );
                })}
              </div>
              <button
                onClick={createGroup}
                className="w-full py-2 rounded-lg text-white text-sm font-semibold border-0 cursor-pointer"
                style={{ background: COLORS.accent }}
              >
                Ստեղծել խումբ
              </button>
            </div>
          ) : !activePartner ? (
            <div className="flex-1 overflow-y-auto p-3 flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="text-xs font-semibold text-gray-500 flex items-center gap-1">
                  <Users size={14} /> Խմբեր ({groups.length})
                </div>
                <button
                  onClick={() => setCreatingGroup(true)}
                  className="flex items-center gap-1 text-xs border-0 bg-indigo-50 text-indigo-600 px-2.5 py-1 rounded-md cursor-pointer font-medium"
                >
                  <UserPlus size={13} /> Նոր խումբ
                </button>
              </div>

              {groups.map((g) => (
                <div
                  key={g.id}
                  onClick={() => setActivePartner({ ...g, isGroup: true })}
                  className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:bg-indigo-50 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">
                    👥
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 truncate">
                      {g.name}
                    </div>
                    <div className="text-xs text-gray-400">
                      Խումբ ({g.participants?.length} մասնակից)
                    </div>
                  </div>
                </div>
              ))}

              <div className="text-xs font-semibold px-1 text-gray-500 mt-2">
                Անհատական ({allUsers.length})
              </div>
              {allUsers.map((u) => (
                <div
                  key={u.uid}
                  onClick={() => setActivePartner({ ...u, isGroup: false })}
                  className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:bg-indigo-50 cursor-pointer"
                >
                  {u.photoURL && u.photoURL.startsWith("http") ? (
                    <img
                      src={u.photoURL}
                      alt=""
                      className="w-8 h-8 rounded-full object-cover"
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  ) : (
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                      {u.name ? u.name.charAt(0).toUpperCase() : "Օ"}
                    </div>
                  )}
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 truncate">
                      {u.name}
                    </div>
                    <div className="text-xs text-gray-400 truncate">
                      {u.email}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col flex-1 min-h-0">
              <div
                ref={bodyRef}
                className="flex-1 overflow-y-auto flex flex-col gap-2 px-3 py-3 text-sm"
              >
                {messages.length === 0 && (
                  <div
                    className="text-xs text-center mt-4"
                    style={{ color: COLORS.textSoft }}
                  >
                    Գրեք Ձեր առաջին հաղորդագրությունը 👋
                  </div>
                )}
                {messages.map((m) => {
                  const isMe = m.senderUid === user.uid;
                  return (
                    <div
                      key={m.id}
                      className="max-w-[78%] rounded-2xl leading-snug p-2.5 flex flex-col"
                      style={{
                        alignSelf: isMe ? "flex-end" : "flex-start",
                        background: isMe ? COLORS.accent : COLORS.bubbleBot,
                        color: isMe ? "#fff" : COLORS.textMain,
                      }}
                    >
                      {activePartner.isGroup && !isMe && (
                        <div className="text-[10px] font-semibold opacity-75 mb-0.5 text-indigo-600">
                          {m.senderName}
                        </div>
                      )}
                      {m.type === "audio" ? (
                        <audio
                          controls
                          src={m.audioUrl}
                          style={{ width: 180, height: 32 }}
                        />
                      ) : (
                        <span>{m.text}</span>
                      )}
                      {isMe && (
                        <button
                          onClick={() => deleteMessage(m.id)}
                          className="self-end mt-1 bg-transparent border-0 cursor-pointer opacity-60 hover:opacity-100 text-red-200"
                        >
                          <Trash2 size={13} />
                        </button>
                      )}
                    </div>
                  );
                })}
                {uploading && (
                  <div
                    className="text-xs self-end"
                    style={{ color: COLORS.textSoft }}
                  >
                    Ուղարկվում է...
                  </div>
                )}
              </div>

              {sendError && (
                <div
                  className="text-xs px-3 py-1"
                  style={{ color: COLORS.danger }}
                >
                  {sendError}
                </div>
              )}

              <div
                className="flex items-center gap-2 p-2"
                style={{ borderTop: `1px solid ${COLORS.border}` }}
              >
                <button
                  onClick={toggleMic}
                  disabled={uploading}
                  className="w-9 h-9 rounded-full border-0 flex items-center justify-center cursor-pointer"
                  style={{
                    background: recording ? COLORS.danger : COLORS.bubbleBot,
                    color: recording ? "#fff" : COLORS.accentDark,
                  }}
                >
                  {recording ? <Square size={14} /> : <Mic size={16} />}
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendTextMessage()}
                  placeholder={recording ? "Ձայնագրում է..." : "Գրեք..."}
                  disabled={recording}
                  className="flex-1 rounded-full px-4 py-2 text-sm outline-none border border-gray-200"
                />
                <button
                  onClick={sendTextMessage}
                  disabled={recording}
                  className="w-9 h-9 rounded-full border-0 flex items-center justify-center cursor-pointer text-white"
                  style={{ background: COLORS.accent }}
                >
                  <Send size={16} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}