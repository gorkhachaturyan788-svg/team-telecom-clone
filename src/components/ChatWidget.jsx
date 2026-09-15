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

// --- Ringtone/dial-tone գեներատոր Web Audio API-ով ---
// Չենք օգտագործում արտաքին mp3 ֆայլ, որպեսզի կախված չլինենք ցանցից
// կամ hosting-ից. փոխարենը ուղղակի Web Audio API-ով գեներացնում ենք
// պարզ, կրկնվող tone, որը մոտ է սովորական հեռախոսազանգի ձայնին։
function createToneEngine() {
  let audioCtx = null;
  let intervalId = null;

  function ensureCtx() {
    if (!audioCtx) {
      const AC = window.AudioContext || window.webkitAudioContext;
      audioCtx = new AC();
    }
    if (audioCtx.state === "suspended") {
      audioCtx.resume().catch(() => {});
    }
    return audioCtx;
  }

  function playBeepPair(freq1, freq2, duration) {
    const ctx = ensureCtx();
    const now = ctx.currentTime;

    [freq1, freq2].forEach((freq) => {
      if (!freq) return;
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sine";
      osc.frequency.value = freq;
      gain.gain.setValueAtTime(0, now);
      gain.gain.linearRampToValueAtTime(0.15, now + 0.02);
      gain.gain.linearRampToValueAtTime(0, now + duration);
      osc.connect(gain);
      gain.connect(ctx.destination);
      osc.start(now);
      osc.stop(now + duration + 0.05);
    });
  }

  return {
    // incoming call ringtone — ավանդական երկտոն "ring-ring" զույգ
    startRingtone() {
      if (intervalId) return;
      const ring = () => playBeepPair(950, 1400, 0.4);
      ring();
      intervalId = setInterval(ring, 1200);
    },
    // outgoing call dial/ringback tone — ավելի մեղմ, երկար tone
    startDialTone() {
      if (intervalId) return;
      const tone = () => playBeepPair(440, 480, 1.0);
      tone();
      intervalId = setInterval(tone, 2000);
    },
    stop() {
      if (intervalId) {
        clearInterval(intervalId);
        intervalId = null;
      }
    },
  };
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
  // render են եղել DOM-ում, մենք հնարավորություն ունենանք dedicated
  // useEffect-ով նորից "ամրացնել" stream-ը element-ներին, հենց նրանք
  // հասանելի դառնան։
  const remoteStreamRef = useRef(null);

  // Կանխում ենք startCall/acceptCall-ի կրկնակի/համընկնող կանչերը
  // (օր. արագ կրկնակի սեղմումով, կամ React StrictMode-ի կրկնակի
  // effect-ից), որոնք կստեղծեին ԵՐԿՐՈՐԴ RTCPeerConnection/getUserMedia
  // stream, մինչ առաջինը դեռ ընթացքի մեջ է. հենց սա էր հիմնական
  // պատճառը, թե ինչու զանգի ժամանակ ձայնն ու video-ն աշխատում էին
  // ասիմետրիկ (մի կողմից լսվում/երևում էր, մյուս կողմից՝ ոչ) — երկրորդ
  // peer connection-ը փոխարինում էր առաջինին, մինչ ontrack listener-ը
  // մնում էր հին, այլևս չօգտագործվող pc-ի վրա, կամ track-երը
  // ավելացվում էին pc-ին սխալ հերթականությամբ/ասինխրոն, ինչի
  // արդյունքում m-line-երը mismatch էին լինում caller/callee միջև։
  const startingCallRef = useRef(false);
  const acceptingCallRef = useRef(false);

  // Ringtone/dial-tone engine — մեկ instance ամբողջ component-ի կյանքի
  // ընթացքում
  const toneEngineRef = useRef(null);
  if (!toneEngineRef.current) {
    toneEngineRef.current = createToneEngine();
  }

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

  // --- ՁԱՅՆԻ ԿԱՌԱՎԱՐՈՒՄ (ringtone / dial tone) ---
  // Incoming call, որը դեռ ընդունված չէ → ringtone (կրկնվող "ring-ring")
  // Outgoing call, որը դեռ ոչ connected → dial/ringback tone
  // Երբ connected դառնում է, կամ զանգն ավարտվում է → stop
  useEffect(() => {
    const engine = toneEngineRef.current;

    if (activeCall?.isIncoming && !activeCall?.connected) {
      engine.startRingtone();
    } else if (
      activeCall &&
      !activeCall.isIncoming &&
      !activeCall.connected
    ) {
      engine.startDialTone();
    } else {
      engine.stop();
    }

    return () => {
      // Չենք stop անում cleanup-ում ամեն render-ի դեպքում, որովհետև
      // engine.stop() ինքն իր մեջ idempotent է. պարզապես նորից
      // կանչվում է վերևի պայմաններից՝ հաջորդ render-ին
    };
  }, [activeCall?.isIncoming, activeCall?.connected, activeCall?.callId]);

  // Անվերապահ երաշխիք. component-ի unmount-ի ժամանակ էլ դադարեցնել
  // ցանկացած հնչող tone
  useEffect(() => {
    return () => {
      toneEngineRef.current?.stop();
    };
  }, []);

  // Օգնական ֆունկցիա, որը հեռավոր stream-ը (եթե արդեն ստացվել է)
  // ամրացնում է <audio>/<video> element-երին և explicit .play()
  // է կանչում։ Browser-ները հաճախ ԼՌԵԼՅԱՅՆ ԱՐԳԵԼԱՓԱԿՈՒՄ ԵՆ
  // autoplay-ը, եթե srcObject-ը դրվում է ասինխրոն, ուստի պարզապես
  // srcObject սահմանելը հաճախ բավարար չէ. պետք է նաև explicit
  // .play() կանչել։
  //
  // ԹԱՐՄԱՑՈՒՄ. tryAttachAudio/tryAttachVideo-ն այժմ բաժանված են
  // առանձին ֆունկցիաների և ամեն մեկն ինքնուրույն ստուգում է իր
  // element-ի առկայությունը՝ առանց մյուսից կախված լինելու։ Եթե
  // element-ը դեռ null է (դեռ render չի եղել DOM-ում), ուղղակի
  // լուռ ելքում ենք, փոխարենը հենվելով ստորև ավելացված retry
  // interval-ի վրա, որը նորից կկանչի attachRemoteStream()-ը մինչև
  // element-երը հասանելի դառնան։ play() error-ները միշտ լուռ
  // կուլ ենք տալիս (.catch(() => {})), որպեսզի abort-ից բխող
  // մրցակցող (race) error-ները չընդհատեն հաջորդ փորձերը։
  const attachRemoteStream = useCallback(() => {
    const streams = remoteStreamRef.current;
    if (!streams) return;

    const tryAttachAudio = () => {
      const el = remoteAudioRef.current;
      if (!el) return;
      if (el.srcObject !== streams.audio) {
        el.srcObject = streams.audio;
      }
      el.play().catch(() => {});
    };

    const tryAttachVideo = () => {
      const el = remoteVideoRef.current;
      if (!el || activeCallRef.current?.type !== "video") return;
      el.muted = true;
      if (el.srcObject !== streams.video) {
        el.srcObject = streams.video;
      }
      el.play().catch(() => {});
    };

    tryAttachAudio();
    tryAttachVideo();
  }, []);

  // Երբ activeCall-ը փոփոխվում է (օր. incoming -> accepted, կամ
  // connected դառնում է true), <audio>/<video> element-երը կարող են
  // նոր հասանելի լինել DOM-ում։ Այս effect-ը վերաամրացնում է արդեն
  // ստացված remote stream-ը այդ նոր element-ներին։
  useEffect(() => {
    attachRemoteStream();
  }, [activeCall?.connected, activeCall?.type, activeCall?.isIncoming, attachRemoteStream]);

  // ԿԱՐԵՎՈՐ (նոր). retry-ով useEffect, որը կանգնեցնում է race
  // condition-ը pc.ontrack-ի և <audio>/<video> element-երի DOM
  // render-ի միջև։ Քանի դեռ զանգը connected է, ամեն 500ms-ը մեկ
  // նորից փորձում ենք attach անել remote stream-ը՝ անկախ նրանից,
  // թե ontrack-ը կրակել է element-ների mount-ից առաջ, թե հետո։
  // attachRemoteStream()-ն ինքնին idempotent է (ստուգում է
  // srcObject-ը արդեն նույնն է, թե ոչ), ուստի կրկնվող կանչերը
  // անվնաս են։
  useEffect(() => {
    if (!activeCall?.connected) return;
    const id = setInterval(attachRemoteStream, 500);
    return () => clearInterval(id);
  }, [activeCall?.connected, attachRemoteStream]);

  // Զանգի ավարտի cleanup — useCallback, որպեսզի stale closure չառաջանա
  const endCallCleanup = useCallback(async () => {
    toneEngineRef.current?.stop();

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
    startingCallRef.current = false;
    acceptingCallRef.current = false;
    setActiveCall(null);
    activeCallRef.current = null;

    try {
      if (user?.uid) await deleteDoc(doc(db, "active_calls", user.uid));
    } catch (err) {
      console.error("Failed to clear own active_calls doc:", err);
    }
  }, [user?.uid]);

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

    // ԿԱՐԵՎՈՐ. pc.ontrack-ը կրակում է ԱՌԱՆՁԻՆ յուրաքանչյուր track-ի
    // համար (մեկ անգամ՝ աուդիո track-ի, մեկ անգամ՝ video track-ի
    // համար)։ Որոշ browser-ներում event.streams[0]-ը այս երկու
    // դեպքերում ՆՈՒՅՆ object reference-ը չէ, ուստի srcObject-ը
    // վերագրելը երկրորդ անգամ, մինչ առաջին .play()-ը դեռ pending է,
    // կարող է play()-ի error առաջացնել կամ track-երից մեկը կորցնել։
    // Լուծումը. ստեղծում ենք ՄԵԿ մշտական MediaStream ինքներս և
    // ուղղակի ավելացնում ենք դրան ստացված track-երը մեկ-մեկ։ Այդպես
    // srcObject-ը video/audio element-ներին վերագրվում է ՄԻԱՅՆ ՄԵԿ
    // ԱՆԳԱՄ, անկախ նրանից՝ քանի track-ի ontrack կկանչվի, և ոչ մի
    // track չի կորչում։
    // ԿԱՐԵՎՈՐ ՈՒՂՂՈՒՄ ("խնգնխնգոց"/distortion ձայնի փոխարեն մարդու
    // ձայնի). նախկինում մեկ ընդհանուր MediaStream էինք օգտագործում
    // և՛ <audio>, և՛ <video> element-ների համար։ Video track-ը
    // ավելացնելիս video element-ը կարող էր կարճ պահով ստանալ նաև
    // audio track-ը (նույն stream reference-ի պատճառով), ինչը
    // create-ում էր ԵՐԿՈՒ ԱՐՏԱԾՄԱՆ ԿԵՏ նույն audio track-ի համար
    // (audio element + video element), ինչը browser/echo-cancellation
    // մակարդակում խեղաթյուրում/distortion/"ծնգծնգոց" էր առաջացնում,
    // հատկապես speaker-ից speaker feedback-ի պատճառով։
    //
    // Լուծումը. ունենում ենք ԵՐԿՈՒ առանձին MediaStream object.
    // մեկը՝ միայն աուդիո track-երի համար (միշտ գնում է <audio>
    // element-ին), մյուսը՝ միայն video track-երի համար (գնում է
    // <video> element-ին, միշտ muted, քանի որ ձայնն արդեն նվագարկվում
    // է առանձին)։ Այս երկուսը երբեք չեն կիսում track reference-ներ։
    if (!remoteStreamRef.current) {
      remoteStreamRef.current = {
        audio: new MediaStream(),
        video: new MediaStream(),
      };
    }

    pc.ontrack = (event) => {
      const streams = remoteStreamRef.current;
      if (event.track.kind === "audio") {
        if (!streams.audio.getTracks().includes(event.track)) {
          streams.audio.addTrack(event.track);
        }
      } else if (event.track.kind === "video") {
        if (!streams.video.getTracks().includes(event.track)) {
          streams.video.addTrack(event.track);
        }
      }
      // ԿԱՐԵՎՈՐ (ուղղում). attachRemoteStream()-ը ուղիղ կանչելու
      // փոխարեն օգտագործում ենք setTimeout(..., 0), որպեսզի
      // React-ը հասցնի reconcile անել DOM-ը (օր. <video> element-ը
      // mount անել activeCall.type === "video" պայմանով render-ից
      // հետո), նախքան attach-ի փորձը։ Առանց սրա, ontrack-ը հաճախ
      // կրակում էր ավելի վաղ, քան element-ը գոյություն ուներ
      // DOM-ում, ինչի հետևանքով stream-ը երբեք չէր կցվում։
      setTimeout(attachRemoteStream, 0);
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
            setActiveCall((prev) => {
              // Չկրկնօրինակել, եթե արդեն ունենք ակտիվ incoming զանգ
              if (prev && prev.isIncoming && prev.callId === user.uid) {
                return prev;
              }
              return {
                callId: user.uid,
                callerName: callData.callerName,
                callerUid: callData.callerUid,
                type: callData.type,
                isIncoming: true,
              };
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
  //
  // ԿԱՐԵՎՈՐ. այս listener-ը սկսում է աշխատել անմիջապես, երբ
  // activeCall.callId-ը սահմանվում է (startCall()-ի սկզբում), ԲԱՅՑ
  // active_calls/{roomId} document-ն ինքը ստեղծվում է ԱՎԵԼԻ ՈՒՇ՝
  // getUserMedia()-ից և offer-ի ստեղծումից հետո։ Հետևաբար այս
  // listener-ի ԱՌԱՋԻՆ snapshot-ը գրեթե միշտ գալիս է "document-ը
  // գոյություն չունի" վիճակով, նույնիսկ եթե ամեն ինչ նորմալ է
  // ընթանում. հետևում ենք՝ արդյոք document-ն ԱՐԴԵՆ ՄԵԿ ԱՆԳԱՄ հաստատված
  // է եղել գոյություն ունենալ (callDocConfirmedRef), որպեսզի
  // endCallCleanup()-ը կանչենք ՄԻԱՅՆ իրական մերժման/կտրման դեպքում։
  const callDocConfirmedRef = useRef(false);

  useEffect(() => {
    if (!isLoggedIn || !activeCall || activeCall.isIncoming) return;

    // Նոր ելքային զանգ ենք սկսում՝ զրոյացնում ենք confirmation flag-ը
    callDocConfirmedRef.current = false;

    const partnerCallDocRef = doc(db, "active_calls", activeCall.callId);
    const unsubscribe = onSnapshot(
      partnerCallDocRef,
      async (docSnap) => {
        if (docSnap.exists()) {
          callDocConfirmedRef.current = true;
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
        } else if (callDocConfirmedRef.current) {
          // Document-ը ԱՌԱՋ գոյություն ուներ, հիմա՝ ոչ. սա իրական
          // մերժում/կտրում է մյուս կողմից
          endCallCleanup();
        }
        // else. document-ը դեռ պարզապես չի ստեղծվել — ոչինչ չենք
        // անում, սպասում ենք
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
    // ԿԱՐԵՎՈՐ. pcRef.current-ի ստուգումն էլ ավելացվեց, որպեսզի
    // երբեք չստեղծվի երկրորդ RTCPeerConnection, քանի դեռ առաջինը
    // դեռ բաց է. հենց սա էր ասիմետրիկ ձայնի/video-ի հիմնական
    // պատճառը։
    if (startingCallRef.current || activeCall || pcRef.current) return;
    startingCallRef.current = true;

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

      // Track-երն ավելացնում ենք ՆՈՒՅՆ, կանխատեսելի հերթականությամբ
      // (նախ audio, հետո video, եթե կա) — սա պետք է համընկնի
      // callee-ի կողմում ավելացվող հերթականության հետ, հակառակ
      // դեպքում m-line-երը mismatch կլինեն և մի ուղղությամբ media-ն
      // կկորչի։
      stream
        .getTracks()
        .sort((a, b) => (a.kind === "audio" ? -1 : 1))
        .forEach((track) => pc.addTrack(track, stream));

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
    } finally {
      startingCallRef.current = false;
    }
  }

  // --- ԶԱՆԳԻ ԸՆԴՈՒՆՈՒՄ (WebRTC answer ուղարկելով) ---
  async function acceptCall() {
    // ԿԱՐԵՎՈՐ. կանխում ենք կրկնակի acceptCall կանչ (օր. կրկնակի
    // սեղմում կոճակին, կամ StrictMode-ի կրկնակի invoke), որը
    // կստեղծեր երկրորդ RTCPeerConnection/getUserMedia stream, մինչ
    // առաջինն արդեն ընթացքի մեջ է. սա էլ էր ասիմետրիկ ձայնի/video-ի
    // պատճառներից մեկը։
    if (acceptingCallRef.current || pcRef.current) return;
    acceptingCallRef.current = true;

    // ԿԱՐԵՎՈՐ. ringtone-ը կանգնեցնում ենք ՀԵՆՑ ԱՅՍՏԵՂ, սինխրոն կերպով,
    // անմիջապես երբ օգտատերը սեղմում է Accept կոճակը։ Մենք չենք
    // սպասում activeCall.connected state-ի փոփոխությանը (որը տեղի է
    // ունենում մի քանի տող ներքև, setActiveCall-ով) և դրանից բխող
    // useEffect-ի վերագործարկմանը, քանի որ React-ի state update-ը և
    // հաջորդ effect-ի աշխատանքը ասինխրոն են ու կարող են մի քանի
    // render-ցիկլ տևել, մինչդեռ ստորև getUserMedia/WebRTC handshake-ը
    // արդեն սկսում է աշխատել։ Առանց այս ուղիղ կանչի, ringtone-ը
    // շարունակում էր հնչել Accept սեղմելուց հետո՝ մինչև connected
    // state-ը վերջապես reconcile-վեր, ինչը հաճախ նկատելիորեն ուշացած
    // էր օգտատիրոջ համար։
    toneEngineRef.current?.stop();

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

      // ՆՈՒՅՆ հերթականությունը (audio, հետո video) ինչ caller-ի
      // կողմում՝ ինչպես startCall()-ում։ Ավելացնում ենք track-երը
      // ՆԱԽՔԱՆ remote description-ը սահմանելը, որպեսզի Answer-ը
      // ստեղծվի local track-երն արդեն pc-ին կցված վիճակում։
      stream
        .getTracks()
        .sort((a, b) => (a.kind === "audio" ? -1 : 1))
        .forEach((track) => pc.addTrack(track, stream));

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
    } finally {
      acceptingCallRef.current = false;
    }
  }

  async function hangUp() {
    toneEngineRef.current?.stop();

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
    startingCallRef.current = false;
    acceptingCallRef.current = false;
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
                    muted
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
                Այս <audio> element-ը ՄԻՇՏ render է լինում՝ անկախ
                զանգի տեսակից (video/audio), որպեսզի pc.ontrack-ը
                միշտ ունենա վավեր target՝ remote ձայնը նվագարկելու
                համար, նույնիսկ եթե video element-ի autoplay-ը
                արգելափակված է browser-ի կողմից։
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