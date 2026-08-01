import { motion, useMotionValue, useTransform } from "framer-motion";
import { useEffect, useRef, useState } from "react";

const AIOrb = ({ onActivated }) => {
  const [active, setActive] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useTransform(mouseY, [-200, 200], [15, -15]);
  const rotateY = useTransform(mouseX, [-200, 200], [-15, 15]);

  const speechRef = useRef(null);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();

    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const speakWelcome = () => {
    window.speechSynthesis.cancel();

    const speech = new SpeechSynthesisUtterance(
      "Hello! I'm Kartik AI Assistant. Welcome to my portfolio. How can I help you today?",
    );

    speech.lang = "en-US";
    speech.rate = 0.95;

    speech.onend = () => {
      if (onActivated) {
        onActivated();
      }
    };

    speechRef.current = speech;

    window.speechSynthesis.speak(speech);
  };

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
      style={{
        perspective: 1200,
      }}
      animate={{
        y: [0, -5, 0],
      }}
      transition={{
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      }}
      className="
        relative
        flex
        items-center
        justify-center

        w-52
        h-52

        sm:w-56
        sm:h-56

        lg:w-56
        lg:h-56

        xl:w-60
        xl:h-60
      "
    >
      {/* ================= Main Glow ================= */}

      <motion.div
        animate={{
          scale: active ? [1, 1.25, 1] : [1, 1.1, 1],
          opacity: active ? [0.5, 0.8, 0.5] : [0.25, 0.42, 0.25],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
        }}
        className="
          absolute

          w-52
          h-52

          sm:w-56
          sm:h-56

          xl:w-60
          xl:h-60

          rounded-full

          bg-gradient-to-r
          from-cyan-400/40
          via-blue-500/30
          to-purple-500/40

          blur-3xl
        "
      />

      {/* ================= Outer Energy Ring ================= */}

      <motion.div
        animate={{
          rotate: 360,
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          w-48
          h-48

          sm:w-52
          sm:h-52

          lg:w-52
          lg:h-52

          xl:w-56
          xl:h-56

          rounded-full

          border
          border-cyan-400/40
        "
      />

      {/* ================= Second Ring ================= */}

      <motion.div
        animate={{
          rotate: -360,
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
        }}
        className="
          absolute

          w-40
          h-40

          sm:w-44
          sm:h-44

          lg:w-44
          lg:h-44

          xl:w-48
          xl:h-48

          rounded-full

          border
          border-dashed
          border-purple-400/40
        "
      />

      {/* ================= Core ================= */}

      <motion.div
        onClick={handleActivate}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{
          scale: 1.06,
        }}
        whileTap={{
          scale: 0.95,
        }}
        animate={{
          boxShadow: active
            ? "0 0 90px rgba(34,211,238,.85)"
            : "0 0 55px rgba(34,211,238,.45)",
        }}
        className="
          relative

          flex
          items-center
          justify-center

          cursor-pointer

          w-32
          h-32

          sm:w-36
          sm:h-36

          lg:w-36
          lg:h-36

          xl:w-40
          xl:h-40

          rounded-full

          bg-gradient-to-br
          from-cyan-300
          via-blue-600
          to-violet-700
        "
      >
        {/* ================= Inner Glass ================= */}

        <div
          className="
            flex
            flex-col
            items-center
            justify-center

            w-24
            h-24

            sm:w-28
            sm:h-28

            xl:w-28
            xl:h-28

            rounded-full

            bg-black/80

            border
            border-white/20

            backdrop-blur-xl
          "
        >
          <span
            className="
              text-3xl

              sm:text-4xl
            "
          >
            🤖
          </span>

          <span
            className={`
              mt-1

              text-[9px]

              sm:text-[10px]

              font-semibold

              tracking-widest

              ${active ? "text-cyan-300" : "text-slate-300"}
            `}
          >
            {active ? "AI ONLINE" : "KARTIK.AI"}
          </span>
        </div>

        {/* ================= Core Pulse ================= */}

        <motion.div
          animate={{
            scale: active ? [1, 1.3, 1] : [1, 1.15, 1],
            opacity: [0.2, 0.55, 0.2],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
          }}
          className="
            absolute
            inset-4

            rounded-full

            bg-cyan-400/20

            blur-xl
          "
        />
      </motion.div>

      {/* ================= Status ================= */}

      <div
        className="
          absolute
          bottom-1

          rounded-full

          border
          border-white/10

          bg-black/60

          px-2.5
          py-0.5

          backdrop-blur-xl

          text-[8px]

          sm:text-[9px]

          tracking-[0.16em]

          text-cyan-300

          whitespace-nowrap
        "
      >
        ● AI ASSISTANT READY
      </div>
    </motion.div>
  );
};

export default AIOrb;