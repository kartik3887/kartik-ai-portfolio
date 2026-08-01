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
          relative

          flex
          w-full
          max-w-[340px]

          flex-col
          items-center
          justify-center

          gap-2

          lg:max-w-[360px]
          lg:-translate-y-2

          xl:max-w-[380px]
        "
      >
        {/* ================= ORB ================= */}

        <div className="relative flex items-center justify-center">
          <div
            className="
              pointer-events-none
              absolute
              inset-0

              rounded-full

              bg-cyan-400/25

              blur-[70px]
            "
          />

          <AIOrb
            onActivated={() => {
              setOrbActive(true);
              setOpenChat(true);
            }}
          />
        </div>

        {/* ================= HUD PANEL ================= */}

        <div
          className="
            relative

            w-full

            overflow-hidden

            rounded-[24px]

            border
            border-white/10

            bg-black/30

            p-4

            backdrop-blur-2xl

            shadow-[0_20px_60px_rgba(0,0,0,.45)]
          "
        >
          {/* Scanner line */}

          <div
            className="
              pointer-events-none
              absolute
              left-0
              top-0

              h-[2px]
              w-full

              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
            "
          />

          <div className="relative">
            {/* ================= STATUS ================= */}

            <div
              className="
                flex
                items-center
                justify-center
                gap-2
              "
            >
              <span
                className="
                  h-1.5
                  w-1.5

                  rounded-full

                  bg-emerald-400

                  shadow-[0_0_12px_#34d399]

                  animate-pulse
                "
              />

              <p
                className="
                  text-[10px]
                  uppercase
                  tracking-[2.5px]
                  text-emerald-300
                "
              >
                {orbActive ? "Listening" : "System Online"}
              </p>
            </div>

            {/* ================= TITLE ================= */}

            <h2
              className="
                mt-2

                text-center

                text-2xl

                font-black

                bg-gradient-to-r
                from-cyan-300
                via-blue-400
                to-purple-400

                bg-clip-text
                text-transparent
              "
            >
              Kartik.AI
            </h2>

            {/* ================= TYPING ================= */}

            <div
              className="
                mt-1

                min-h-[32px]

                text-center

                text-xs

                leading-5

                text-slate-400
              "
            >
              <TypeAnimation
                sequence={[
                  "Initializing neural core...",
                  1500,
                  "Scanning portfolio data...",
                  1500,
                  "Ready to assist you 🚀",
                  3000,
                ]}
                speed={45}
                repeat={Infinity}
              />
            </div>

            {/* ================= QUICK COMMANDS ================= */}

            <div
              className="
                mt-3

                grid
                grid-cols-2

                gap-1.5
              "
            >
              {suggestions.map((item) => (
                <button
                  key={item.label}
                  onClick={() => handleSuggestion(item.question)}
                  className="
                    rounded-lg

                    border
                    border-white/10

                    bg-white/5

                    py-2

                    text-[11px]

                    text-slate-200

                    transition

                    hover:border-cyan-400/40
                    hover:bg-cyan-400/10
                  "
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* ================= CTA ================= */}

            <button
              onClick={() => {
                setInitialQuestion("");
                setOpenChat(true);
              }}
              className="
                mt-3

                w-full

                rounded-full

                bg-gradient-to-r
                from-cyan-400
                via-blue-500
                to-violet-600

                py-2.5

                text-xs

                font-bold
                text-white

                shadow-[0_10px_30px_rgba(34,211,238,.28)]

                transition

                hover:-translate-y-1

                active:scale-95
              "
            >
              🎙 Talk With Kartik AI
            </button>
          </div>
        </div>
      </div>

      {/* ================= AI CHAT ================= */}

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
