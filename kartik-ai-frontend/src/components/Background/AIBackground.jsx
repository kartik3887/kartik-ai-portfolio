import { motion } from "framer-motion";
import { useMemo } from "react";

const AIBackground = () => {
  const particles = useMemo(() => Array.from({ length: 45 }), []);

  return (
    <div
      className="
        absolute
        inset-0
        z-0
        overflow-hidden
        pointer-events-none
      "
    >
      {/* Ambient Cyan Glow */}

      <div
        className="
          absolute
          left-1/2
          top-1/2

          h-[650px]
          w-[650px]

          -translate-x-1/2
          -translate-y-1/2

          rounded-full

          bg-cyan-500/10

          blur-[140px]
        "
      />

      {/* Violet Glow */}

      <div
        className="
          absolute
          right-[-100px]
          top-20

          h-[350px]
          w-[350px]

          rounded-full

          bg-violet-500/10

          blur-[120px]
        "
      />

      {/* Bottom Glow */}

      <div
        className="
          absolute
          bottom-[-120px]
          left-20

          h-[300px]
          w-[300px]

          rounded-full

          bg-cyan-400/10

          blur-[100px]
        "
      />

      {/* AI Grid */}

      <div
        className="
          absolute
          inset-0

          bg-[linear-gradient(rgba(34,211,238,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.08)_1px,transparent_1px)]

          bg-[size:60px_60px]

          opacity-30
        "
      />

      {/* Floating Particles */}

      {particles.map((_, index) => (
        <motion.span
          key={index}
          initial={{
            opacity: 0,
          }}
          animate={{
            y: [0, -80, 0],

            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 5 + (index % 5),

            repeat: Infinity,

            delay: index * 0.15,

            ease: "easeInOut",
          }}
          className="
              absolute

              h-1
              w-1

              rounded-full

              bg-cyan-300

              shadow-[0_0_12px_rgba(34,211,238,0.8)]
            "
          style={{
            left: `${(index * 37) % 100}%`,

            top: `${(index * 53) % 100}%`,
          }}
        />
      ))}
    </div>
  );
};

export default AIBackground;
