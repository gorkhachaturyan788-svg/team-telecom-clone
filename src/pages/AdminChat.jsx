import React, { useState, useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import {
  collection,
  doc,
  addDoc,
  setDoc,
  onSnapshot,
  query,
  orderBy,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import { Send } from "lucide-react";

const ADMIN_EMAIL = "gorkhachaturyan788@gmail.com";

const COLORS = {
  accent: "#5b4bff",
  accentDark: "#4636d1",
  border: "#e6e4f2",
  textMain: "#1e1b2e",
  textSoft: "#6b6780",
  bubbleUser: "#f0eefc",
  bg: "#f7f6fc",
};

export default function AdminChat({ user }) {
  const navigate = useNavigate();
  const [chats, setChats] = useState([]);
  const [activeId, setActiveId] = useState(null);
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState("");
  const bodyRef = useRef(null);

  const isAdmin = user?.email === ADMIN_EMAIL;

  // Ոչ ադմին օգտատերերին ուղղորդում ենք /account, ոչ թե render-ի ընթացքում
  // (navigate() render-ի ժամանակ կանչելը սխալ է React-ում և crash է առաջացնում)
  useEffect(() => {
    if (!user) return;
    if (!isAdmin) {
      navigate("/account");
    }
  }, [user, isAdmin, navigate]);

  useEffect(() => {
    if (!isAdmin) return;
    const q = query(collection(db, "chats"), orderBy("updatedAt", "desc"));
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        const list = snapshot.docs.map((d) => ({ id: d.id, ...d.data() }));
        setChats(list);
      },
      (err) => console.error("Chats listener error:", err)
    );
    return () => unsubscribe();
  }, [isAdmin]);

  useEffect(() => {
    if (!activeId) {
      setMessages([]);
      return;
    }
    const q = query(
      collection(db, "chats", activeId, "messages"),
      orderBy("createdAt", "asc")
    );
    const unsubscribe = onSnapshot(
      q,
      (snapshot) => {
        setMessages(snapshot.docs.map((d) => ({ id: d.id, ...d.data() })));
      },
      (err) => console.error("Admin messages listener error:", err)
    );
    return () => unsubscribe();
  }, [activeId]);

  useEffect(() => {
    if (bodyRef.current) bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
  }, [messages]);

  async function sendReply() {
    const text = input.trim();
    if (!text || !activeId) return;
    setInput("");

    try {
      await addDoc(collection(db, "chats", activeId, "messages"), {
        type: "text",
        text,
        sender: "admin",
        createdAt: serverTimestamp(),
      });

      await setDoc(
        doc(db, "chats", activeId),
        { lastMessage: text, updatedAt: serverTimestamp() },
        { merge: true }
      );
    } catch (err) {
      console.error("Failed to send admin reply:", err);
      setInput(text);
    }
  }

  if (!user) {
    return (
      <div className="p-10 text-center" style={{ color: COLORS.textSoft }}>
        Այս էջը հասանելի է միայն մուտք գործած ադմինին։
      </div>
    );
  }

  if (!isAdmin) {
    // useEffect-ը արդեն ուղղորդում է /account, բայց մինչ այդ ցույց ենք տալիս հաղորդագրություն
    return (
      <div className="p-10 text-center" style={{ color: COLORS.textSoft }}>
        Ձեր հաշիվը այս էջ մուտք գործելու իրավունք չունի։
      </div>
    );
  }

  const activeChat = chats.find((c) => c.id === activeId);

  return (
    <div
      className="flex"
      style={{ height: "calc(100vh - 0px)", background: COLORS.bg }}
    >
      <div
        className="w-72 flex-shrink-0 overflow-y-auto"
        style={{ borderRight: `1px solid ${COLORS.border}`, background: "#fff" }}
      >
        <div
          className="px-4 py-3 font-semibold text-sm"
          style={{ borderBottom: `1px solid ${COLORS.border}`, color: COLORS.textMain }}
        >
          Զրույցներ ({chats.length})
        </div>
        {chats.length === 0 && (
          <div className="px-4 py-6 text-xs text-center" style={{ color: COLORS.textSoft }}>
            Դեռ ոչ մի հաղորդագրություն չկա
          </div>
        )}
        {chats.map((c) => (
          <button
            key={c.id}
            onClick={() => setActiveId(c.id)}
            className="w-full text-left px-4 py-3 cursor-pointer border-0"
            style={{
              background: activeId === c.id ? COLORS.bubbleUser : "transparent",
              borderBottom: `1px solid ${COLORS.border}`,
            }}
          >
            <div className="text-sm font-semibold" style={{ color: COLORS.textMain }}>
              {c.name || "Անանուն"}
            </div>
            <div className="text-xs truncate" style={{ color: COLORS.textSoft }}>
              {c.email}
            </div>
            {c.lastMessage && (
              <div className="text-xs mt-1 truncate" style={{ color: COLORS.textSoft }}>
                {c.lastMessage}
              </div>
            )}
          </button>
        ))}
      </div>

      <div className="flex-1 flex flex-col min-w-0">
        {!activeId && (
          <div className="flex-1 flex items-center justify-center text-sm" style={{ color: COLORS.textSoft }}>
            Ընտրեք զրույց ձախից՝ խոսակցությունը տեսնելու համար
          </div>
        )}

        {activeId && (
          <>
            <div
              className="px-5 py-3 flex-shrink-0"
              style={{ borderBottom: `1px solid ${COLORS.border}`, background: "#fff" }}
            >
              <div className="text-sm font-semibold" style={{ color: COLORS.textMain }}>
                {activeChat?.name}
              </div>
              <div className="text-xs" style={{ color: COLORS.textSoft }}>
                {activeChat?.email}
              </div>
            </div>

            <div ref={bodyRef} className="flex-1 overflow-y-auto px-5 py-4 flex flex-col gap-2">
              {messages.map((m) => (
                <div
                  key={m.id}
                  className="max-w-md rounded-2xl text-sm leading-snug"
                  style={{
                    alignSelf: m.sender === "admin" ? "flex-end" : "flex-start",
                    background: m.sender === "admin" ? COLORS.accent : "#fff",
                    color: m.sender === "admin" ? "#fff" : COLORS.textMain,
                    border: m.sender === "admin" ? "none" : `1px solid ${COLORS.border}`,
                    padding: m.type === "audio" ? "6px 8px" : "8px 12px",
                  }}
                >
                  {m.type === "audio" ? (
                    <audio
                      controls
                      src={m.audioUrl}
                      style={{ width: 220, height: 32, display: "block" }}
                    />
                  ) : (
                    m.text
                  )}
                </div>
              ))}
            </div>

            <div
              className="flex items-center gap-2 px-4 py-3 flex-shrink-0"
              style={{ borderTop: `1px solid ${COLORS.border}`, background: "#fff" }}
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendReply()}
                placeholder="Գրեք պատասխանը..."
                className="flex-1 rounded-full px-4 py-2 text-sm outline-none"
                style={{ border: `1px solid ${COLORS.border}` }}
              />
              <button
                onClick={sendReply}
                aria-label="Ուղարկել"
                className="w-9 h-9 rounded-full border-0 flex items-center justify-center flex-shrink-0 cursor-pointer"
                style={{ background: COLORS.accent, color: "#fff" }}
              >
                <Send size={16} />
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}