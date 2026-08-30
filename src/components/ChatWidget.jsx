import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  MessageCircle,
  X,
  Send,
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
  addDoc,
  deleteDoc,
  updateDoc,
  collection,
  onSnapshot,
  query,
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

export default function DirectChatWidget({ user }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const [allUsers, setAllUsers] = useState([]);
  const [activePartner, setActivePartner] = useState(null);

  const [groups, setGroups] = useState([]);
  const [creatingGroup, setCreatingGroup] = useState(false);
  const [groupName, setGroupName] = useState("");
  const [selectedMembers, setSelectedMembers] = useState([]);

  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");

  // Զանգերի վիճակներ
  const [activeCall, setActiveCall] = useState(null); // { type, callerName, callId, isIncoming }
  const localVideoRef = useRef(null);
  const localStreamRef = useRef(null);

  const bodyRef = useRef(null);
  const isLoggedIn = !!user;

  // Օգտատիրոջ գրանցում
  useEffect(() => {
    if (!isLoggedIn || !user?.uid) return;
    setDoc(
      doc(db, "users", user.uid),
      {
        uid: user.uid,
        name: user.displayName || user.email?.split("@")[0] || "Օգտատեր",
        email: user.email || "",
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    ).catch((err) => console.error("Failed to upsert user profile:", err));
  }, [isLoggedIn, user]);

  // Բոլոր օգտատերերի բեռնում
  useEffect(() => {
    if (!isLoggedIn || !user?.uid) return;
    const unsubscribe = onSnapshot(
      collection(db, "users"),
      (snapshot) => {
        const usersList = snapshot.docs
          .map((d) => d.data())
          .filter((u) => u.uid !== user.uid);
        setAllUsers(usersList);
      },
      (err) => console.error("Users listener error:", err)
    );
    return () => unsubscribe();
  }, [isLoggedIn, user?.uid]);

  // Խմբերի բեռնում
  useEffect(() => {
    if (!isLoggedIn || !user?.uid) return;
    const unsubscribe = onSnapshot(
      collection(db, "group_chats"),
      (snapshot) => {
        const groupsList = snapshot.docs
          .map((d) => ({ id: d.id, ...d.data() }))
          .filter((g) => g.participants?.includes(user.uid));
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
    const unsubscribe = onSnapshot(callDocRef, (docSnap) => {
      if (docSnap.exists()) {
        const callData = docSnap.data();
        if (callData && callData.status === "ringing") {
          setActiveCall({
            callId: user.uid,
            callerName: callData.callerName,
            type: callData.type,
            isIncoming: true,
          });
        }
      } else {
        if (activeCall?.isIncoming) {
          endCallCleanup();
        }
      }
    });
    return () => unsubscribe();
  }, [isLoggedIn, user?.uid, activeCall]);

  // Հաղորդագրությունների լսում
  useEffect(() => {
    if (!isLoggedIn || !user?.uid || !activePartner) {
      setMessages([]);
      return;
    }

    const isGroup = activePartner.isGroup;
    const roomId = isGroup ? activePartner.id : getChatRoomId(user.uid, activePartner.uid);
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
      (err) => console.error("Messages listener error:", err)
    );

    return () => unsubscribe();
  }, [isLoggedIn, user?.uid, activePartner]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);

  // --- ԶԱՆԳԻ ՍԿՍՈՒՄ ---
  async function startCall(type) {
    if (!activePartner || activePartner.isGroup) return;

    const partnerName = activePartner.name || "Զրուցակից";
    setActiveCall({
      callId: activePartner.uid,
      callerName: partnerName,
      type,
      isIncoming: false,
    });

    try {
      await setDoc(doc(db, "active_calls", activePartner.uid), {
        callerUid: user.uid,
        callerName: user.displayName || user.email?.split("@")[0] || "Օգտատեր",
        type,
        status: "ringing",
        createdAt: serverTimestamp(),
      });

      const constraints = { audio: true, video: type === "video" };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      localStreamRef.current = stream;
      if (type === "video" && localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
    } catch (err) {
      console.error("Call start error:", err);
      alert("Չհաջողվեց միացնել տեսախցիկը կամ միկրոֆոնը։");
      endCallCleanup();
    }
  }

  async function acceptCall() {
    try {
      const constraints = { audio: true, video: activeCall.type === "video" };
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      localStreamRef.current = stream;
      if (activeCall.type === "video" && localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      setActiveCall((prev) => ({ ...prev, isIncoming: false, connected: true }));
    } catch (err) {
      console.error("Accept call error:", err);
      endCallCleanup();
    }
  }

  async function endCallCleanup() {
    if (localStreamRef.current) {
      localStreamRef.current.getTracks().forEach((track) => track.stop());
      localStreamRef.current = null;
    }
    setActiveCall(null);

    try {
      if (user?.uid) await deleteDoc(doc(db, "active_calls", user.uid));
      if (activePartner?.uid) await deleteDoc(doc(db, "active_calls", activePartner.uid));
    } catch (err) {}
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
      setActivePartner({ id: newGroupRef.id, name: groupName.trim(), isGroup: true, participants, createdBy: user.uid });
    } catch (err) {
      console.error("Failed to create group:", err);
    }
  }

  // --- ԽՄԲԻՑ ԴՈՒՐՍ ԳԱԼԿԱՄ ՋՆՋԵԼ ---
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

  async function sendTextMessage() {
    const text = input.trim();
    if (!text || !isLoggedIn || !user?.uid || !activePartner) return;
    setInput("");

    const isGroup = activePartner.isGroup;
    const roomId = isGroup ? activePartner.id : getChatRoomId(user.uid, activePartner.uid);
    const collectionPath = isGroup ? "group_chats" : "direct_chats";

    try {
      await addDoc(collection(db, collectionPath, roomId, "messages"), {
        type: "text",
        text,
        senderUid: user.uid,
        senderName: user.displayName || user.email?.split("@")[0] || "Օգտատեր",
        createdAt: serverTimestamp(),
      });
    } catch (err) {
      setInput(text);
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
        {open ? <X color="#fff" size={30} /> : <MessageCircle color="#fff" size={32} />}
      </button>

      {open && (
        <div
          className="fixed bottom-24 right-6 w-[350px] h-[520px] rounded-2xl flex flex-col overflow-hidden z-50"
          style={{ background: COLORS.bgPanel, boxShadow: "0 16px 48px rgba(30,27,46,0.18)" }}
        >
          {/* VIBER STYLE CALL MODAL */}
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
                  <video ref={localVideoRef} autoPlay playsInline muted className="w-full h-full object-cover" />
                </div>
              )}

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
                  onClick={endCallCleanup}
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
            style={{ background: `linear-gradient(120deg, ${COLORS.accent}, ${COLORS.accentDark})` }}
          >
            {activePartner || creatingGroup ? (
              <button
                onClick={() => { setActivePartner(null); setCreatingGroup(false); }}
                className="bg-transparent border-0 text-white cursor-pointer p-0 mr-1"
              >
                <ArrowLeft size={20} />
              </button>
            ) : null}

            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold truncate">
                {creatingGroup ? "Նոր խումբ" : activePartner ? activePartner.name : "Զրույցներ"}
              </div>
            </div>

            {activePartner && activePartner.isGroup && (
              <button
                onClick={leaveOrDeleteGroup}
                className="bg-transparent border-0 text-white cursor-pointer p-1 opacity-90 hover:opacity-100 mr-1"
                title={activePartner.createdBy === user.uid ? "Ջնջել խումբը" : "Դուրս գալ խմբից"}
              >
                <LogOut size={18} />
              </button>
            )}

            {activePartner && !activePartner.isGroup && !creatingGroup && (
              <div className="flex items-center gap-1.5 mr-1">
                <button onClick={() => startCall("audio")} className="bg-transparent border-0 text-white cursor-pointer p-1" title="Զանգ">
                  <Phone size={16} />
                </button>
                <button onClick={() => startCall("video")} className="bg-transparent border-0 text-white cursor-pointer p-1" title="Տեսազանգ">
                  <Video size={18} />
                </button>
              </div>
            )}

            <button onClick={() => setOpen(false)} className="border-0 bg-transparent cursor-pointer text-white opacity-80">
              <X size={18} />
            </button>
          </div>

          {!isLoggedIn ? (
            <div className="flex-1 flex flex-col items-center justify-center gap-3 px-5 text-center">
              <p className="text-sm m-0" style={{ color: COLORS.textSoft }}>Մուտք գործեք շփվելու համար։</p>
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
              <div className="text-xs font-semibold text-gray-500">Ընտրել մասնակիցներին:</div>
              <div className="flex-1 overflow-y-auto flex flex-col gap-1">
                {allUsers.map((u) => {
                  const isSelected = selectedMembers.includes(u.uid);
                  return (
                    <div
                      key={u.uid}
                      onClick={() => setSelectedMembers(isSelected ? selectedMembers.filter(id => id !== u.uid) : [...selectedMembers, u.uid])}
                      className={`flex items-center justify-between p-2 rounded-lg cursor-pointer border ${isSelected ? "bg-indigo-50 border-indigo-200" : "border-gray-100"}`}
                    >
                      <div>
                        <div className="text-sm text-gray-800">{u.name}</div>
                        <div className="text-xs text-gray-400">{u.email}</div>
                      </div>
                      <div className="text-xs text-indigo-600">{isSelected ? "Ընտրված է" : "Ընտրել"}</div>
                    </div>
                  );
                })}
              </div>
              <button onClick={createGroup} className="w-full py-2 rounded-lg text-white text-sm font-semibold border-0 cursor-pointer" style={{ background: COLORS.accent }}>
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
                  <div className="w-8 h-8 rounded-full bg-purple-100 text-purple-700 flex items-center justify-center font-bold text-xs">👥</div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 truncate">{g.name}</div>
                    <div className="text-xs text-gray-400">Խումբ ({g.participants?.length} մասնակից)</div>
                  </div>
                </div>
              ))}

              <div className="text-xs font-semibold px-1 text-gray-500 mt-2">Անհատական ({allUsers.length})</div>
              {allUsers.map((u) => (
                <div
                  key={u.uid}
                  onClick={() => setActivePartner({ ...u, isGroup: false })}
                  className="flex items-center gap-3 p-2.5 rounded-xl border border-gray-100 hover:bg-indigo-50 cursor-pointer"
                >
                  <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                    {u.name.charAt(0).toUpperCase()}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-medium text-gray-800 truncate">{u.name}</div>
                    <div className="text-xs text-gray-400 truncate">{u.email}</div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="flex flex-col flex-1 min-h-0">
              <div ref={bodyRef} className="flex-1 overflow-y-auto flex flex-col gap-2 px-3 py-3 text-sm">
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
                      <span>{m.text}</span>
                    </div>
                  );
                })}
              </div>

              <div className="flex items-center gap-2 p-2" style={{ borderTop: `1px solid ${COLORS.border}` }}>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendTextMessage()}
                  placeholder="Գրեք..."
                  className="flex-1 rounded-full px-4 py-2 text-sm outline-none border border-gray-200"
                />
                <button
                  onClick={sendTextMessage}
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