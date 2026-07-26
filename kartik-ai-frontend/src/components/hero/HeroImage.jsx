import { Brain, Code2, Database, MapPin, Server } from "lucide-react";
import { motion } from "framer-motion";

const technologies = [
  {
    id: 1,
    icon: Code2,
    label: "React",
  },
  {
    id: 2,
    icon: Server,
    label: "Node.js",
  },
  {
    id: 3,
    icon: Database,
    label: "MongoDB",
  },
  {
    id: 4,
    icon: Brain,
    label: "AI",
  },
];

const HeroImage = () => {
  return (
    <motion.div
      className="relative flex items-center justify-center"
      animate={{
        y: [0, -12, 0],
      }}
      transition={{
        duration: 5,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    >
      {/* Animated Glow */}
      <motion.div
        className="absolute h-[380px] w-[380px] rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-3xl"
        animate={{
          scale: [1, 1.08, 1],
          opacity: [0.45, 0.75, 0.45],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Card */}
      <motion.div
        whileHover={{
          y: -10,
          scale: 1.02,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
          relative
          w-[360px]
          rounded-3xl
          border
          border-white/10
          bg-white/5
          p-8
          backdrop-blur-2xl
          shadow-[0_20px_60px_rgba(0,0,0,0.35)]
        "
      >
        {/* Available Badge */}
        <motion.div
          className="mb-6 flex justify-center"
          animate={{
            scale: [1, 1.05, 1],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <span
            className="
              rounded-full
              border
              border-emerald-400/20
              bg-emerald-400/10
              px-4
              py-2
              text-xs
              font-semibold
              tracking-wide
              text-emerald-300
            "
          >
            🟢 Available for Work
          </span>
        </motion.div>

        {/* Avatar */}
   <div className="relative mx-auto h-36 w-36">
  {/* Rotating Glow Ring */}
  <motion.div
    className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400 p-[3px]"
    animate={{
      rotate: 360,
    }}
    transition={{
      duration: 10,
      repeat: Infinity,
      ease: "linear",
    }}
  >
    <div className="h-full w-full rounded-full bg-[#0B1120]" />
  </motion.div>

  {/* Profile Image */}
  <img
    src="/profile.jpeg"
    alt="Kartik Deore"
    className="
      absolute
      inset-[6px]
      h-[calc(100%-12px)]
      w-[calc(100%-12px)]
      rounded-full
      object-cover
      shadow-[0_0_30px_rgba(34,211,238,0.25)]
    "
  />
</div>

        {/* Name */}
        <h3 className="mt-6 text-center text-3xl font-bold text-white">
          Kartik Deore
        </h3>

        {/* Role */}
        <p className="mt-2 text-center text-zinc-400">
          AI Full Stack Developer
        </p>

        {/* Tech Stack */}
        <div className="mt-8 grid grid-cols-2 gap-4">
          {technologies.map((tech) => {
            const Icon = tech.icon;

            return (
              <motion.div
                key={tech.id}
                whileHover={{
                  y: -6,
                  scale: 1.05,
                }}
                transition={{
                  duration: 0.2,
                }}
                className="
                  flex
                  items-center
                  gap-3
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  p-3
                  transition-all
                "
              >
                <Icon
                  size={18}
                  className="text-cyan-400"
                />

                <span className="text-sm font-medium text-white">
                  {tech.label}
                </span>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom */}
        <div className="mt-8 flex items-center justify-between border-t border-white/10 pt-5">
          <div className="flex items-center gap-2 text-sm text-zinc-400">
            <MapPin size={16} />
            <span>India</span>
          </div>

          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400 shadow-[0_0_12px_#4ade80]" />
            <span className="text-sm font-medium text-emerald-400">
              Open to Work
            </span>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default HeroImage;