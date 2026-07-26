import { useState } from "react";
import { TypeAnimation } from "react-type-animation";

import AIOrb from "./AIOrb";
import AIChat from "./AIChat";

const suggestions = [
  {
    label: "🚀 Projects",
    question: "Show me projects",
  },
  {
    label: "💻 Skills",
    question: "What are your skills?",
  },
  {
    label: "👨‍💻 Experience",
    question: "Tell me about experience",
  },
  {
    label: "📄 Resume",
    question: "Show resume",
  },
];

const AIAssistant = () => {
  const [openChat, setOpenChat] = useState(false);
  const [initialQuestion, setInitialQuestion] = useState("");
  const [orbActive, setOrbActive] = useState(false);

  const handleSuggestion = (question) => {
    setInitialQuestion(question);
    setOpenChat(true);
  };

  return (
    <>
      <div
        className="
          flex
          w-full
          max-w-[420px]
          flex-col
          items-center
          justify-center
          gap-8
        "
      >
        {/* AI Orb */}
        <div className="relative flex justify-center">
          <div className="absolute inset-0 rounded-full bg-cyan-400/20 blur-[90px]" />

          <AIOrb
            onActivated={() => {
              setOrbActive(true);
              setOpenChat(true);
            }}
          />
        </div>

        {/* Glass Card */}
        <div
          className="
            relative
            w-full
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.06]
            p-5
            sm:p-6
            backdrop-blur-2xl
            shadow-[0_20px_80px_rgba(0,0,0,0.45)]
            overflow-hidden
          "
        >
          {/* Glow */}
          <div
            className="
              absolute
              inset-x-0
              top-0
              h-40
              bg-gradient-to-b
              from-cyan-400/10
              via-cyan-300/5
              to-transparent
            "
          />

          <div className="relative">
            {/* Status */}
            <div className="flex items-center justify-center gap-2">
              <span
                className="
                  h-3
                  w-3
                  rounded-full
                  bg-emerald-400
                  shadow-[0_0_15px_#34d399]
                  animate-pulse
                "
              />

              <span
                className="
                  text-xs
                  sm:text-sm
                  font-medium
                  tracking-wide
                  text-emerald-300
                "
              >
                {orbActive ? "AI Listening..." : "AI System Online"}
              </span>
            </div>

            {/* Title */}
            <h2
              className="
                mt-5
                text-center
                text-2xl
                sm:text-3xl
                font-extrabold
                bg-gradient-to-r
                from-cyan-300
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Kartik AI
            </h2>

            {/* Typing */}
            <div
              className="
                mt-5
                min-h-[64px]
                text-center
                text-sm
                sm:text-[15px]
                leading-7
                text-slate-400
              "
            >
              <TypeAnimation
                sequence={[
                  "Initializing AI System...",
                  1500,
                  "Loading Kartik's Skills...",
                  1500,
                  "Analyzing Projects...",
                  1500,
                  "Hello 👋 I'm Kartik AI Assistant",
                  3000,
                ]}
                speed={50}
                repeat={Infinity}
              />
            </div>

                        {/* Suggestions */}
            <div
              className="
                mt-6
                grid
                grid-cols-2
                gap-3
              "
            >
              {suggestions.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleSuggestion(item.question)}
                  className="
                    rounded-xl
                    border
                    border-white/10
                    bg-white/5
                    px-3
                    py-3
                    text-xs
                    sm:text-sm
                    font-medium
                    text-slate-200
                    transition-all
                    duration-300
                    hover:-translate-y-1
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/10
                  "
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Talk Button */}
            <button
              onClick={() => {
                setInitialQuestion("");
                setOpenChat(true);
              }}
              className="
                mt-6
                flex
                w-full
                items-center
                justify-center
                rounded-full
                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-violet-500
                py-3.5
                text-sm
                sm:text-base
                font-semibold
                text-white
                shadow-lg
                shadow-cyan-500/20
                transition-all
                duration-300
                hover:scale-[1.02]
                active:scale-[0.98]
              "
            >
              🎙️ Talk With AI
            </button>
          </div>
        </div>
      </div>

      {/* AI Chat */}
      {openChat && (
        <AIChat
          closeChat={() => setOpenChat(false)}
          initialQuestion={initialQuestion}
        />
      )}
    </>
  );
};

export default AIAssistant;