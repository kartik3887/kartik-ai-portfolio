import { motion } from "framer-motion";

const categories = [
  "All",
  "React",
  "Full Stack",
  "AI",
  "Frontend",
  "Backend",
];

const ProjectFilter = ({
  active,
  setActive,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
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
      }}
      className="
        flex
        flex-wrap
        justify-center
        gap-3

        sm:gap-4
      "
    >
      {categories.map((category) => {
        const isActive = active === category;

        return (
          <motion.button
            key={category}
            whileHover={{
              y: -3,
            }}
            whileTap={{
              scale: 0.97,
            }}
            onClick={() => setActive(category)}
            className={`
              relative
              overflow-hidden
              rounded-full
              border
              px-6
              py-3
              text-sm
              font-semibold
              backdrop-blur-xl
              transition-all
              duration-300
              focus:outline-none
              focus:ring-2
              focus:ring-cyan-400

              ${
                isActive
                  ? `
                    border-cyan-400
                    bg-cyan-400
                    text-slate-900
                    shadow-[0_0_30px_rgba(34,211,238,0.35)]
                  `
                  : `
                    border-white/10
                    bg-white/[0.05]
                    text-slate-300
                    hover:border-cyan-400/40
                    hover:bg-cyan-400/10
                    hover:text-cyan-300
                  `
              }
            `}
          >
            {isActive && (
              <motion.span
                layoutId="project-filter"
                transition={{
                  type: "spring",
                  stiffness: 350,
                  damping: 28,
                }}
                className="
                  absolute
                  inset-0
                  rounded-full
                  bg-gradient-to-r
                  from-cyan-300
                  to-cyan-400
                "
              />
            )}

            <span className="relative z-10">
              {category}
            </span>
          </motion.button>
        );
      })}
    </motion.div>
  );
};

export default ProjectFilter;