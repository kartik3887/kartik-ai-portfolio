import { motion } from "framer-motion";

const skills = [
  {
    title: "Frontend Development",
    value: 95,
    color: "from-cyan-500 to-blue-500",
  },
  {
    title: "Backend Development",
    value: 90,
    color: "from-violet-500 to-fuchsia-500",
  },
  {
    title: "Database",
    value: 85,
    color: "from-emerald-500 to-green-500",
  },
  {
    title: "AI & Tools",
    value: 88,
    color: "from-orange-500 to-yellow-500",
  },
];

const SkillProgress = () => {
  return (
    <div
      className="
        grid
        gap-4
        sm:gap-5
        lg:grid-cols-2
        lg:gap-5
      "
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: 0.45,
            delay: index * 0.1,
          }}
          className="
            group
            relative
            overflow-hidden
            rounded-2xl
            border
            border-white/10
            bg-white/5
            p-4
            backdrop-blur-xl
            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-cyan-400/30
            hover:bg-white/[0.07]
            hover:shadow-[0_0_30px_rgba(34,211,238,0.10)]

            sm:p-5
          "
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              -z-10
              bg-gradient-to-br
              from-cyan-500/10
              via-transparent
              to-violet-500/10
              opacity-0
              transition-opacity
              duration-300
              group-hover:opacity-100
            "
          />

          {/* Heading */}

          <div className="mb-3 flex items-center justify-between gap-4">
            <h3
              className="
                text-sm
                font-semibold
                text-white

                sm:text-base
              "
            >
              {skill.title}
            </h3>

            <span
              className="
                shrink-0
                text-sm
                font-bold
                text-cyan-400

                sm:text-base
              "
            >
              {skill.value}%
            </span>
          </div>

          {/* Progress Track */}

          <div
            className="
              h-2
              overflow-hidden
              rounded-full
              bg-slate-800/80
            "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${skill.value}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1,
                delay: index * 0.12,
                ease: "easeOut",
              }}
              className={`
                h-full
                rounded-full
                bg-gradient-to-r
                ${skill.color}
              `}
            />
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default SkillProgress;