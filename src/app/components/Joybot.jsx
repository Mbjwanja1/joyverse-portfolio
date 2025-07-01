"use client";

import { useEffect, useRef, useState } from "react";
import { FaRobot, FaPaperPlane, FaTimes } from "react-icons/fa";

export default function JoyBot() {
  /* ───────── STATE ───────── */
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { from: "bot", text: "Hi! I’m JoyBot. Ask me anything ✨" },
  ]);
  const [input, setInput] = useState("");
  const endRef = useRef(null);

  /* ───────── SCROLL TO LAST MSG ───────── */
  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  /* ───────── SEND HANDLER ───────── */
  async function handleSend() {
    if (!input.trim()) return;

    const userText = input.trim();
    setInput("");
    setMessages((m) => [...m, { from: "user", text: userText }]);

    try {
      const res = await fetch("/api/ask", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt: userText }),
      });
      const { reply } = await res.json();
      setMessages((m) => [...m, { from: "bot", text: reply }]);
    } catch (err) {
      setMessages((m) => [
        ...m,
        { from: "bot", text: "I’m offline right now 💤 — try again later." },
      ]);
    }
  }

  /* ───────── RENDER ───────── */
  return (
    <>
      {/* Floating button */}
      {!open && (
        <button
          onClick={() => setOpen(true)}
          className="fixed bottom-6 right-6 bg-purple-700 text-white p-4 rounded-full shadow-lg hover:bg-purple-800 transition"
          aria-label="Open JoyBot chat"
        >
          <FaRobot size={24} />
        </button>
      )}

      {/* Chat window */}
      {open && (
        <div className="fixed bottom-6 right-6 w-80 sm:w-96 h-96 bg-black/90 border border-purple-700 rounded-xl flex flex-col shadow-lg backdrop-blur-md">
          {/* Header */}
          <div className="flex items-center justify-between p-3 border-b border-purple-700">
            <span className="font-semibold text-purple-300">JoyBot</span>
            <button
              onClick={() => setOpen(false)}
              className="text-purple-300"
              aria-label="Close chat"
            >
              <FaTimes />
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-3 py-2 space-y-2 text-sm">
            {messages.map((m, i) => (
              <div
                key={i}
                className={
                  m.from === "user"
                    ? "text-right text-purple-100"
                    : "text-left text-purple-300"
                }
              >
                {m.text}
              </div>
            ))}
            <div ref={endRef} />
          </div>

          {/* Input */}
          <div className="p-3 border-t border-purple-700 flex gap-2">
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && handleSend()}
              className="flex-1 bg-black text-white text-sm px-3 py-2 border border-purple-700 rounded-md focus:outline-none"
              placeholder="Ask me something…"
            />
            <button
              onClick={handleSend}
              className="p-2 bg-purple-700 rounded-md hover:bg-purple-800 text-white"
              aria-label="Send message"
            >
              <FaPaperPlane size={14} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}
