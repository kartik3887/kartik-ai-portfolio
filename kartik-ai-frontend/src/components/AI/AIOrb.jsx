import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AIOrb = ({ onActivated }) => {
  const [active, setActive] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [18, -18]);
  const rotateY = useTransform(mouseX, [-200, 200], [-18, 18]);

  const speechRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  // ------------------------------------
  // AI Welcome Voice
  // ------------------------------------
  const speakWelcome = () => {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
      "Hello! I'm Kartik AI Assistant. Welcome to my portfolio. How can I help you today?"
    );

    speech.lang = "en-US";
    speech.rate = 0.95;
    speech.pitch = 1;
    speech.volume = 1;

    // ✅ Open chat only after voice completes
    speech.onend = () => {
      if (typeof onActivated === "function") {
        onActivated();
      }
    };

    const loadVoice = () => {
      const voices = window.speechSynthesis.getVoices();

      const preferred =
        voices.find(
          (voice) =>
            voice.lang.startsWith("en") &&
            (voice.name.includes("Google") ||
              voice.name.includes("Microsoft") ||
              voice.name.includes("Samantha"))
        ) || voices.find((voice) => voice.lang.startsWith("en"));

      if (preferred) {
        speech.voice = preferred;
      }

      speechRef.current = speech;
      window.speechSynthesis.speak(speech);
    };

    if (window.speechSynthesis.getVoices().length === 0) {
      window.speechSynthesis.onvoiceschanged = loadVoice;
    } else {
      loadVoice();
    }
  };

  // ------------------------------------
  // Activate AI
  // ------------------------------------
  const handleActivate = () => {
    if (!active) {
      setActive(true);
      speakWelcome();
    } else {
      window.speechSynthesis.cancel();
      setActive(false);
    }
  };

  useEffect(() => {
    return () => {
      window.speechSynthesis.cancel();
    };
  }, []);

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      style={{ perspective: 1000 }}
      className="
        relative
        flex
        items-center
        justify-center
        w-28 h-28
        sm:w-36 sm:h-36
        md:w-40 md:h-40
        lg:w-44 lg:h-44
      "
    >
      {/* Ambient Glow */}

      <motion.div
        animate={{
          scale: active ? [1, 1.3, 1] : [1, 1.15, 1],
          opacity: active ? [0.35, 0.75, 0.35] : [0.25, 0.5, 0.25],
        }}
        transition={{
          duration: active ? 1.6 : 3,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="
          absolute
          w-44 h-44
          sm:w-60 sm:h-60
          md:w-64 md:h-64
          lg:w-72 lg:h-72
          rounded-full
          bg-gradient-to-r
          from-cyan-400/30
          via-sky-500/20
          to-violet-500/30
          blur-3xl
        "
      />

      {/* Rotating Ring */}

      <motion.div
        animate={{ rotate: 360 }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-32 h-32
          sm:w-44 sm:h-44
          md:w-48 md:h-48
          lg:w-52 lg:h-52
          rounded-full
          border
          border-cyan-400/30
        "
      />

      {/* Dashed Ring */}

      <motion.div
        animate={{ rotate: -360 }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute
          w-36 h-36
          sm:w-48 sm:h-48
          md:w-52 md:h-52
          lg:w-56 lg:h-56
          rounded-full
          border
          border-violet-400/30
          border-dashed
        "
      />
            {/* AI Core */}

      <motion.div
        onClick={handleActivate}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.08,
        }}
        whileTap={{
          scale: 0.96,
        }}
        animate={{
          scale: active ? 1.08 : 1,
          boxShadow: active
            ? "0 0 120px rgba(34,211,238,.8)"
            : "0 0 70px rgba(34,211,238,.45)",
        }}
        transition={{
          type: "spring",
          stiffness: 220,
          damping: 16,
        }}
        className="
          relative
          flex
          items-center
          justify-center
          cursor-pointer
          w-24 h-24
          sm:w-32 sm:h-32
          md:w-36 md:h-36
          lg:w-40 lg:h-40
          rounded-full
          bg-gradient-to-br
          from-cyan-300
          via-blue-500
          to-violet-600
        "
      >
        <motion.div
          animate={{
            scale: [1, 1.06, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="
            flex
            flex-col
            items-center
            justify-center
            w-16 h-16
            sm:w-24 sm:h-24
            md:w-28 md:h-28
            rounded-full
            bg-black/80
            border
            border-white/10
            backdrop-blur-xl
            text-white
            font-black
          "
        >
          <motion.span
            animate={
              active
                ? {
                    rotate: [0, 8, -8, 0],
                    scale: [1, 1.15, 1],
                  }
                : {}
            }
            transition={{
              duration: 0.8,
              repeat: Infinity,
            }}
            className="text-base sm:text-xl md:text-2xl"
          >
            🤖
          </motion.span>

          <span
            className={`
              mt-1
              text-[9px]
              sm:text-[11px]
              md:text-xs
              font-semibold
              tracking-wide
              transition-all
              duration-300
              ${
                active
                  ? "text-cyan-300"
                  : "text-slate-300 animate-pulse"
              }
            `}
          >
            {active ? "AI Activated" : "Activate AI"}
          </span>
        </motion.div>

        {/* Inner Glow */}
        <motion.div
          animate={{
            opacity: active ? [0.4, 0.9, 0.4] : [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            inset-2
            rounded-full
            bg-cyan-400/10
            blur-xl
            pointer-events-none
          "
        />
      </motion.div>
    </motion.div>
  );
};

export default AIOrb;