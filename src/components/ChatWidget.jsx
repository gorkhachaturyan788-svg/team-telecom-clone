import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MessageCircle, X, Send, Mic, Square, Trash2 } from "lucide-react";

import {
  doc,
  setDoc,
  addDoc,
  deleteDoc,
  collection,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
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

async function uploadToCloudinary(audioBlob) {
  const formData = new FormData();

  formData.append("file", audioBlob);
  formData.append("upload_preset", "voice_upload");

  const res = await fetch(
    "https://api.cloudinary.com/v1_1/t0eyfav7/video/upload",
    {
      method: "POST",
      body: formData,
    }
  );

  const data = await res.json();

  if (!data.secure_url) {
    console.log(data);
    throw new Error("Cloudinary upload failed");
  }

  return data.secure_url;
}


export default function ChatWidget({ user }) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const [recording, setRecording] = useState(false);
  const [uploading, setUploading] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);
  const bodyRef = useRef(null);

  const isLoggedIn = !!user;

  const currentUser = isLoggedIn
    ? {
      name: user.displayName || user.email?.split("@")[0] || "Օգտատեր",
      email: user.email || "",
    }
    : null;

  useEffect(() => {
    if (!isLoggedIn) {
      setMessages([]);
      return;
    }

    setDoc(
      doc(db, "chats", user.uid),
      {
        name: currentUser.name,
        email: currentUser.email,
        updatedAt: serverTimestamp(),
      },
      { merge: true }
    );

    const messagesRef = collection(db, "chats", user.uid, "messages");
    const q = query(messagesRef, orderBy("createdAt", "asc"));

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const msgs = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
      setMessages(msgs);
    });

    return () => unsubscribe();
  }, [isLoggedIn, user?.uid]);

  useEffect(() => {
    if (bodyRef.current) {
      bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }
  }, [messages, open]);


  async function deleteMessage(messageId) {
    if (!isLoggedIn) return;

    try {
      await deleteDoc(
        doc(db, "chats", user.uid, "messages", messageId)
      );
    } catch (err) {
      console.error(err);
    }
  }

  async function sendTextMessage() {
    const text = input.trim();
    if (!text || !isLoggedIn) return;
    setInput("");

    const messagesRef = collection(db, "chats", user.uid, "messages");
    await addDoc(messagesRef, {
      type: "text",
      text,
      sender: "user",
      createdAt: serverTimestamp(),
    });

    await setDoc(
      doc(db, "chats", user.uid),
      { lastMessage: text, updatedAt: serverTimestamp() },
      { merge: true }
    );
  }


  async function sendVoiceMessage(audioBlob) {
    if (!isLoggedIn) return;

    setUploading(true);

    try {
      const audioUrl = await uploadToCloudinary(audioBlob);

      await addDoc(
        collection(db, "chats", user.uid, "messages"),
        {
          type: "audio",
          audioUrl,
          sender: "user",
          createdAt: serverTimestamp(),
        }
      );

      await setDoc(
        doc(db, "chats", user.uid),
        {
          lastMessage: "🎤 Ձայնային հաղորդագրություն",
          updatedAt: serverTimestamp(),
        },
        { merge: true }
      );

    } catch (err) {
      console.error(err);
      alert("Voice upload error");
    } finally {
      setUploading(false);
    }
  }


  async function toggleMic() {
    if (!navigator.mediaDevices?.getUserMedia || !window.MediaRecorder) {
      alert(
        "Ձեր բրաուզերը ձայնագրման աջակցություն չունի։ Խորհուրդ ենք տալիս Chrome կամ Edge։"
      );
      return;
    }

    if (recording) {
      mediaRecorderRef.current?.stop();
      setRecording(false);
      return;
    }

    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      audioChunksRef.current = [];

      mediaRecorder.ondataavailable = (e) => {
        if (e.data.size > 0) audioChunksRef.current.push(e.data);
      };

      mediaRecorder.onstop = async () => {
        stream.getTracks().forEach((track) => track.stop());
        const audioBlob = new Blob(audioChunksRef.current, {
          type: "audio/webm",
        });
        if (audioBlob.size > 0) {
          await sendVoiceMessage(audioBlob);
        }
      };

      mediaRecorder.start();
      mediaRecorderRef.current = mediaRecorder;
      setRecording(true);
    } catch (err) {
      alert("Խնդրում ենք թույլատրել մկրոֆոնի օգտագործումը բրաուզերում։");
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
          className="fixed bottom-24 right-6 w-[300px] h-[450px] rounded-2xl flex flex-col overflow-hidden z-50"
          style={{
            background: COLORS.bgPanel,
            boxShadow: "0 16px 48px rgba(30,27,46,0.18)",
          }}
        >

          <div
            className="flex items-center gap-3 px-4 py-3"
            style={{
              background: `linear-gradient(120deg, ${COLORS.accent}, ${COLORS.accentDark})`,
              color: "#fff",
            }}
          >
            <div
              className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-semibold text-sm"
              style={{ background: "rgba(255,255,255,0.22)" }}
            >
              {isLoggedIn ? currentUser.name.charAt(0).toUpperCase() : "?"}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-sm font-semibold leading-tight">
                {isLoggedIn ? currentUser.name : "Բարև, հյուր"}
              </div>
              {isLoggedIn && (
                <div className="text-xs opacity-85 leading-tight truncate">
                  {currentUser.email}
                </div>
              )}
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Փակել"
              className="border-0 bg-transparent cursor-pointer opacity-85"
              style={{ color: "#fff" }}
            >
              <X size={18} />
            </button>
          </div>

          {!isLoggedIn && (
            <div className="flex-1 flex flex-col items-center justify-center gap-3 px-5 py-7 text-center">
              <p className="text-sm m-0" style={{ color: COLORS.textSoft }}>
                Չաթից օգտվելու համար անհրաժեշտ է մուտք գործել կամ գրանցվել։
              </p>
              <button
                onClick={() => {
                  setOpen(false);
                  navigate("/login");
                }}
                className="border-0 rounded-lg px-5 py-2 text-sm font-semibold cursor-pointer"
                style={{ background: COLORS.accent, color: "#fff" }}
              >
                Մուտք գործել
              </button>
            </div>
          )}

          {isLoggedIn && (
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
                    Գրեք կամ ձայնագրեք Ձեր առաջին հաղորդագրությունը 👋
                  </div>
                )}
                {messages.map((m) => (
                  <div
                    key={m.id}
                    className="max-w-[78%] rounded-2xl leading-snug"
                    style={{
                      alignSelf:
                        m.sender === "user" ? "flex-end" : "flex-start",
                      background:
                        m.sender === "user" ? COLORS.accent : COLORS.bubbleBot,
                      color: m.sender === "user" ? "#fff" : COLORS.textMain,
                      borderBottomRightRadius:
                        m.sender === "user" ? 4 : undefined,
                      borderBottomLeftRadius:
                        m.sender === "admin" ? 4 : undefined,
                      padding: m.type === "audio" ? "6px 8px" : "9px 12px",
                    }}
                  >
                    {m.type === "audio" ? (
                      <audio
                        controls
                        src={m.audioUrl}
                        style={{ width: 190, height: 32, display: "block" }}
                      />
                    ) : (
                      m.text
                    )}

                    <button
                      onClick={() => deleteMessage(m.id)}
                      title="Ջնջել"
                      style={{
                        marginTop: "6px",
                        background: "transparent",
                        border: "none",
                        color: "#ffb3b3",
                        cursor: "pointer",
                        padding: "2px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Trash2 size={15} />
                    </button>

                  </div>
                ))}
                {uploading && (
                  <div
                    className="text-xs self-end"
                    style={{ color: COLORS.textSoft }}
                  >
                    Ձայնագրությունն ուղարկվում է...
                  </div>
                )}
              </div>

              <div
                className="flex items-center gap-2 p-2"
                style={{ borderTop: `1px solid ${COLORS.border}` }}
              >
                <button
                  onClick={toggleMic}
                  disabled={uploading}
                  aria-label={recording ? "Կանգնեցնել ձայնագրումը" : "Ձայնագրել հաղորդագրություն"}
                  className="w-9 h-9 rounded-full border-0 flex items-center justify-center flex-shrink-0 cursor-pointer"
                  style={{
                    background: recording ? COLORS.danger : COLORS.bubbleBot,
                    color: recording ? "#fff" : COLORS.accentDark,
                    opacity: uploading ? 0.5 : 1,
                  }}
                >
                  {recording ? <Square size={14} /> : <Mic size={16} />}
                </button>
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => e.key === "Enter" && sendTextMessage()}
                  placeholder={
                    recording ? "Ձայնագրում է... սեղմեք կանգնեցնելու համար" : "Գրեք հաղորդագրություն..."
                  }
                  disabled={recording}
                  className="flex-1 rounded-full px-4 py-2 text-sm outline-none"
                  style={{ border: `1px solid ${COLORS.border}` }}
                />
                <button
                  onClick={sendTextMessage}
                  disabled={recording}
                  aria-label="Ուղարկել"
                  className="w-9 h-9 rounded-full border-0 flex items-center justify-center flex-shrink-0 cursor-pointer"
                  style={{ background: COLORS.accent, color: "#fff", opacity: recording ? 0.5 : 1 }}
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