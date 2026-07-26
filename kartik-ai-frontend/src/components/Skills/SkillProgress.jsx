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
    <div className="grid gap-8 lg:grid-cols-2">
      {skills.map((skill, index) => (
        <motion.div
          key={skill.title}
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.5,
            delay: index * 0.15,
          }}
          className="
            rounded-3xl
            border
            border-white/10
            bg-white/5
            p-6
            backdrop-blur-xl
          "
        >
          {/* Heading */}

          <div className="mb-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold text-white">
              {skill.title}
            </h3>

            <span className="font-bold text-cyan-400">
              {skill.value}%
            </span>
          </div>

          {/* Progress Track */}

          <div className="h-3 overflow-hidden rounded-full bg-slate-800">
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
                duration: 1.2,
                delay: index * 0.2,
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