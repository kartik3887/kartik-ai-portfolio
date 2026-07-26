import { motion } from "framer-motion";

import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
} from "react-icons/fa";

import {
  SiJavascript,
  SiExpress,
  SiMongodb,
  SiTailwindcss,
} from "react-icons/si";

const technologies = [
  {
    name: "React",
    icon: FaReact,
    color: "text-cyan-400",
  },
  {
    name: "JavaScript",
    icon: SiJavascript,
    color: "text-yellow-400",
  },
  {
    name: "Node.js",
    icon: FaNodeJs,
    color: "text-green-400",
  },
  {
    name: "Express",
    icon: SiExpress,
    color: "text-slate-300",
  },
  {
    name: "MongoDB",
    icon: SiMongodb,
    color: "text-green-500",
  },
  {
    name: "Tailwind CSS",
    icon: SiTailwindcss,
    color: "text-sky-400",
  },
  {
    name: "Git",
    icon: FaGitAlt,
    color: "text-orange-500",
  },
  {
    name: "GitHub",
    icon: FaGithub,
    color: "text-white",
  },
];

const TechStack = () => {
  return (
    <div>
     
      <div className="mt-12 grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4">
        {technologies.map((tech, index) => {
          const Icon = tech.icon;

          return (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: index * 0.08,
              }}
              className="
                group
                relative
                overflow-hidden
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-6
                backdrop-blur-xl
                transition-all
                duration-500
                hover:-translate-y-2
                hover:border-cyan-400/40
                hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
              "
            >
              {/* Glow */}
              <div
                className="
                  absolute
                  inset-0
                  -z-10
                  rounded-2xl
                  bg-gradient-to-br
                  from-violet-500/20
                  via-cyan-500/10
                  to-transparent
                  opacity-0
                  blur-xl
                  transition
                  duration-500
                  group-hover:opacity-100
                "
              />

              <div
                className="
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-white/10
                  bg-gradient-to-br
                  from-cyan-500/10
                  to-violet-500/10
                  transition-all
                  duration-300
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >
                <Icon className={`${tech.color} text-4xl`} />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-white">
                {tech.name}
              </h3>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default TechStack;