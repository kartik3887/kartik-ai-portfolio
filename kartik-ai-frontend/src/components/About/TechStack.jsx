import { motion } from "framer-motion";

import {
  FaReact,
  // FaNodeJs,
  // FaGitAlt,
  // FaGithub,
  // FaHtml5,
  // FaCss3Alt,
  FaDocker,
  FaAws, // Recommended alternative for AWS
} from "react-icons/fa";

import {
  // SiJavascript,
  // SiExpress,
  // SiMongodb,
  // SiTailwindcss,
  // SiTypescript,
  // SiRedux,
  // SiNextdotjs,
  // SiMysql,
  SiLinux,
  SiKubernetes,
  SiGooglecloud,
  SiGithubactions,
  // The correct Simple Icons name for AWS
} from "react-icons/si";

import { TbCode, TbBrandVisualStudio,  } from "react-icons/tb";

const technologies = [
  // Roles
  {
    name: "Software Developer",
    icon: TbBrandVisualStudio, // Note: Use TbBrandVscode if you meant VS Code instead of Visual Studio
    color: "text-cyan-400",
  },
  {
    name: "Software Engineer",
    icon: TbCode,
    color: "text-violet-400",
  },

  {
    name: "MERN Stack Developer",
    icon: FaReact,
    color: "text-cyan-400",
  },

   // DevOps
  {
    name: "Linux",
    icon: SiLinux,
    color: "text-yellow-300",
  },
  {
    name: "Docker",
    icon: FaDocker,
    color: "text-sky-500",
  },
  {
    name: "Kubernetes",
    icon: SiKubernetes,
    color: "text-blue-500",
  },
  {
    name: "CI/CD",
    icon: SiGithubactions,
    color: "text-indigo-400",
  },
  {
    name: "AWS",
    icon: FaAws, // Corrected from SiAmazonaws (or use FaAws)
    color: "text-orange-400",
  },
  {
    name: "Cloud",
    icon: SiGooglecloud, // Consider 'FaCloud' if you want a generic cloud icon instead of Google Cloud
    color: "text-sky-400",
  },
  // // Frontend
  // {
  //   name: "React",
  //   icon: FaReact,
  //   color: "text-cyan-400",
  // },
  // {
  //   name: "JavaScript",
  //   icon: SiJavascript,
  //   color: "text-yellow-400",
  // },
  // {
  //   name: "TypeScript",
  //   icon: SiTypescript,
  //   color: "text-blue-500",
  // },
  // {
  //   name: "Next.js",
  //   icon: SiNextdotjs,
  //   color: "text-white",
  // },
  // {
  //   name: "Redux",
  //   icon: SiRedux,
  //   color: "text-violet-500",
  // },
  // {
  //   name: "Tailwind CSS",
  //   icon: SiTailwindcss,
  //   color: "text-sky-400",
  // },

  // // Backend
  // {
  //   name: "Node.js",
  //   icon: FaNodeJs,
  //   color: "text-green-400",
  // },
  // {
  //   name: "Express",
  //   icon: SiExpress,
  //   color: "text-slate-300",
  // },
  // {
  //   name: "MongoDB",
  //   icon: SiMongodb,
  //   color: "text-green-500",
  // },
  // {
  //   name: "MySQL",
  //   icon: SiMysql,
  //   color: "text-blue-400",
  // },

 

  // // Tools
  // {
  //   name: "Git",
  //   icon: FaGitAlt,
  //   color: "text-orange-500",
  // },
  // {
  //   name: "GitHub",
  //   icon: FaGithub,
  //   color: "text-white",
  // },
];

const TechStack = () => {
  return (
    <div
      className="
        grid
        grid-cols-2
        gap-2.5
        sm:grid-cols-3
        sm:gap-3
        lg:grid-cols-4
      "
    >
      {technologies.map((tech, index) => {
        const Icon = tech.icon;

        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: "-40px",
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.06,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              p-3.5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1.5
              hover:border-cyan-400/30
              hover:bg-white/[0.07]
              hover:shadow-[0_8px_30px_rgba(34,211,238,0.10)]
              sm:rounded-2xl
              sm:p-4
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
                from-violet-500/15
                via-cyan-500/10
                to-transparent
                opacity-0
                blur-xl
                transition
                duration-300
                group-hover:opacity-100
              "
            />

            {/* Icon */}

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-gradient-to-br
                from-cyan-500/10
                to-violet-500/10
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:rotate-3
                sm:h-12
                sm:w-12
              "
            >
              <Icon
                className={`
                  ${tech.color}
                  text-2xl
                  sm:text-3xl
                `}
              />
            </div>

            {/* Name */}

            <h3
              className="
                mt-2.5
                text-[13px]
                font-semibold
                text-white
                sm:mt-3
                sm:text-sm
              "
            >
              {tech.name}
            </h3>
          </motion.div>
        );
      })}
    </div>
  );
};

export default TechStack;
