import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X } from "lucide-react";

import { getAIResponse } from "./aiResponse";

const AIChat = ({ closeChat, initialQuestion }) => {
  const [message, setMessage] = useState("");
  const [isThinking, setIsThinking] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Hello! I'm Kartik.AI, your personal portfolio assistant. Ask me anything about Kartik's skills, projects, experience, education or contact details.",
    },
  ]);

  const messageEndRef = useRef(null);

  const scrollToBottom = () => {
    messageEndRef.current?.scrollIntoView({
      behavior: "smooth",
    });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isThinking]);

  const sendMessage = (text = message) => {
    if (!text.trim()) return;

    const userMessage = text.trim();

    setMessages((prev) => [
      ...prev,
      {
        role: "user",
        text: userMessage,
      },
    ]);

    setMessage("");
    setIsThinking(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: getAIResponse(userMessage),
        },
      ]);

      setIsThinking(false);
    }, 1000);
  };

  useEffect(() => {
    if (!initialQuestion) return;

    const timer = setTimeout(() => {
      sendMessage(initialQuestion);
    }, 400);

    return () => clearTimeout(timer);
  }, [initialQuestion]);
    return (
    <AnimatePresence>
      <motion.div
        initial={{
          opacity: 0,
          y: 30,
          scale: 0.95,
        }}
        animate={{
          opacity: 1,
          y: 0,
          scale: 1,
        }}
        exit={{
          opacity: 0,
          y: 30,
          scale: 0.95,
        }}
        transition={{
          duration: 0.35,
        }}
        className="
          fixed

          bottom-4
          right-4

          z-[9999]

          flex
          flex-col

          w-[calc(100vw-1.5rem)]

          sm:w-[430px]
          md:w-[460px]

          h-[78vh]
          max-h-[760px]

          overflow-hidden

          rounded-3xl

          border
          border-white/10

          bg-[#050816]/90

          backdrop-blur-3xl

          shadow-[0_30px_80px_rgba(0,0,0,0.55)]
        "
      >
        {/* ================= Header ================= */}

        <div
          className="
            flex
            items-center
            justify-between

            border-b
            border-white/10

            px-5
            py-5

            bg-gradient-to-r
            from-cyan-500/5
            via-transparent
            to-violet-500/5
          "
        >
          <div className="flex items-center gap-3">
            <span
              className="
                h-3
                w-3

                rounded-full

                bg-emerald-400

                animate-pulse

                shadow-[0_0_15px_#34d399]
              "
            />

            <div>
              <h3
                className="
                  text-base

                  font-bold

                  text-white
                "
              >
                Kartik.AI
              </h3>

              <p
                className="
                  mt-0.5

                  text-xs

                  text-cyan-300
                "
              >
                AI Portfolio Assistant • Online
              </p>
            </div>
          </div>

          <button
            onClick={closeChat}
            className="
              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/5

              text-slate-400

              transition-all
              duration-300

              hover:bg-red-500/10
              hover:text-red-400
            "
          >
            <X size={18} />
          </button>
        </div>
                {/* ================= Messages ================= */}

        <div
          className="
            flex-1

            overflow-y-auto

            px-5
            py-5

            space-y-4

            scrollbar-thin
            scrollbar-thumb-cyan-500/20
            scrollbar-track-transparent
          "
        >
          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 12,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.25,
              }}
              className={
                msg.role === "user"
                  ? "flex justify-end"
                  : "flex justify-start"
              }
            >
              <div
                className={`
                  max-w-[85%]

                  rounded-2xl

                  px-4
                  py-3

                  text-sm

                  leading-7

                  shadow-lg

                  ${
                    msg.role === "user"
                      ? `
                        bg-gradient-to-r
                        from-cyan-400
                        to-blue-500

                        text-black

                        rounded-br-md
                      `
                      : `
                        border
                        border-white/10

                        bg-white/10

                        text-slate-200

                        rounded-bl-md

                        backdrop-blur-xl
                      `
                  }
                `}
              >
                {msg.text}
              </div>
            </motion.div>
          ))}

          {/* ================= Thinking ================= */}

          {isThinking && (
            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              className="flex justify-start"
            >
              <div
                className="
                  rounded-2xl

                  border
                  border-white/10

                  bg-white/10

                  backdrop-blur-xl

                  px-4
                  py-3
                "
              >
                <div className="flex items-center gap-1">
                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.6,
                    }}
                  >
                    ●
                  </motion.span>

                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.6,
                      delay: 0.15,
                    }}
                  >
                    ●
                  </motion.span>

                  <motion.span
                    animate={{ y: [0, -4, 0] }}
                    transition={{
                      repeat: Infinity,
                      duration: 0.6,
                      delay: 0.3,
                    }}
                  >
                    ●
                  </motion.span>
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messageEndRef} />
        </div>
                {/* ================= Input ================= */}

        <div
          className="
            border-t
            border-white/10

            bg-[#050816]/80

            p-4

            backdrop-blur-xl
          "
        >
          <div
            className="
              flex
              items-center

              gap-3

              rounded-2xl

              border
              border-white/10

              bg-white/5

              px-4
              py-2

              transition-all

              focus-within:border-cyan-400/40
              focus-within:bg-white/10
            "
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  sendMessage();
                }
              }}
              placeholder="Ask Kartik.AI anything..."
              className="
                flex-1

                bg-transparent

                py-2

                text-sm
                text-white

                outline-none

                placeholder:text-slate-500
              "
            />

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              onClick={() => sendMessage()}
              className="
                flex

                h-11
                w-11

                items-center
                justify-center

                rounded-xl

                bg-gradient-to-r
                from-cyan-400
                via-sky-500
                to-blue-600

                text-black

                shadow-[0_0_20px_rgba(34,211,238,0.35)]

                transition-all
              "
            >
              <Send size={18} />
            </motion.button>
          </div>

          <p
            className="
              mt-3

              text-center

              text-[11px]

              text-slate-500
            "
          >
            Powered by <span className="text-cyan-300">Kartik.AI</span>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIChat;

