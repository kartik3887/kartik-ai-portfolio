import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Send, X, Sparkles } from "lucide-react";

import { getAIResponse } from "./aiResponse";

const AIChat = ({ closeChat, initialQuestion }) => {
  const [message, setMessage] = useState("");

  const [isThinking, setIsThinking] = useState(false);

  const [messages, setMessages] = useState([
    {
      role: "ai",
      text: "👋 Hello! I'm Kartik.AI Core. I can help you explore skills, projects, experience, education and contact information.",
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

    const userText = text.trim();

    setMessages((prev) => [
      ...prev,

      {
        role: "user",
        text: userText,
      },
    ]);

    setMessage("");

    setIsThinking(true);

    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          role: "ai",
          text: getAIResponse(userText),
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
          scale: 0.9,
          y: 40,
        }}
        animate={{
          opacity: 1,
          scale: 1,
          y: 0,
        }}
        exit={{
          opacity: 0,
          scale: 0.9,
          y: 40,
        }}
        transition={{
          duration: 0.35,
        }}
        className="fixed bottom-5 right-5 z-[9999]

flex
flex-col


w-[calc(100vw-2rem)]

sm:w-[430px]


h-[75vh]

max-h-[720px]


overflow-hidden


rounded-[32px]


border

border-cyan-400/20


bg-[#020617]/90


backdrop-blur-3xl


shadow-[0_30px_100px_rgba(34,211,238,.25)]

"
      >
        {/* Scanner */}

        <div
          className="
absolute

top-0

left-0

h-[2px]

w-full

bg-gradient-to-r

from-transparent

via-cyan-400

to-transparent

"
        />

        {/* HEADER */}

        {/* ================= HEADER ================= */}

        <div
          className="
    relative
    flex
    items-center
    justify-between

    border-b
    border-white/10

    px-6
    py-5

    bg-gradient-to-r
    from-cyan-500/5
    via-transparent
    to-violet-500/5
  "
        >
          {/* Left */}

          <div className="flex items-center gap-4">
            <div
              className="
        relative
        flex
        h-12
        w-12
        items-center
        justify-center

        rounded-2xl

        border
        border-cyan-400/20

        bg-gradient-to-br
        from-cyan-400/10
        to-blue-500/10

        shadow-[0_0_25px_rgba(34,211,238,.15)]
      "
            >
              <Sparkles size={22} className="text-cyan-300" />

              <span
                className="
          absolute
          -top-1
          -right-1

          h-3
          w-3

          rounded-full

          bg-emerald-400

          animate-pulse
        "
              />
            </div>

            <div>
              <h3
                className="
          text-lg
          font-black
          tracking-wide
          text-white
        "
              >
                KARTIK.AI
              </h3>

              <p
                className="
          mt-0.5
          text-[10px]
          uppercase
          tracking-[3px]
          text-cyan-300
        "
              >
                Neural Assistant Online
              </p>
            </div>
          </div>

          {/* Close Button */}

          <motion.button
            whileHover={{
              rotate: 90,
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.92,
            }}
            onClick={closeChat}
            className="
      group

      flex
      h-11
      w-11
      items-center
      justify-center

      rounded-xl

      border
      border-white/10

      bg-white/5

      text-slate-400

      transition-all
      duration-300

      hover:border-red-400/40
      hover:bg-red-500/10
      hover:text-red-400
      hover:shadow-[0_0_20px_rgba(248,113,113,.25)]
    "
          >
            <X size={18} className="transition-transform duration-300" />
          </motion.button>
        </div>
        {/* MESSAGES */}

        <div
          className="
relative

flex-1

overflow-y-auto


space-y-4


px-5

py-5

"
        >
          <div
            className="
absolute

inset-0

pointer-events-none

bg-[radial-gradient(circle_at_top,rgba(34,211,238,.12),transparent_40%)]

"
          />

          {messages.map((msg, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 15,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              className={
                msg.role === "user" ? "flex justify-end" : "flex justify-start"
              }
            >
              <div
                className={`

max-w-[85%]

rounded-2xl

px-4

py-3

text-sm

leading-6


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


bg-gradient-to-br

from-white/10

to-cyan-500/5


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

          {/* THINKING */}

          {isThinking && (
            <motion.div
              animate={{
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
              className="
flex

items-center

gap-2

text-xs

text-cyan-300

"
            >
              <span>◉</span>

              <span>Analyzing neural data...</span>
            </motion.div>
          )}

          <div ref={messageEndRef} />
        </div>

        {/* INPUT */}

        <div
          className="
border-t

border-white/10


p-4

bg-black/20

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

"
          >
            <input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") sendMessage();
              }}
              placeholder="Enter AI command..."
              className="
flex-1

bg-transparent

py-3

text-sm

text-white

outline-none

placeholder:text-slate-500

"
            />

            <motion.button
              whileHover={{
                scale: 1.1,
              }}
              whileTap={{
                scale: 0.9,
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

to-blue-600


text-black

"
            >
              <Send size={18} />
            </motion.button>
          </div>

          <p
            className="
mt-3

text-center

text-[10px]

tracking-widest

text-slate-500

"
          >
            POWERED BY <span className="text-cyan-300">KARTIK.AI</span>
          </p>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default AIChat;
