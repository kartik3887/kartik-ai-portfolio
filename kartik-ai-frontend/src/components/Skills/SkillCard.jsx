import { motion } from "framer-motion";
import { getSkills } from "@/api/skill.api";
import { useEffect, useState } from "react";

import { skillIcons } from "./skillIcons";

const SkillCards = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await getSkills();
        setSkills(response.data);
      } catch (error) {
        console.error("Failed to load skills:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div className="py-10 text-center text-slate-400">Loading skills...</div>
    );
  }
  return (
    <div
      className="
        grid
        gap-3

        sm:grid-cols-2
        sm:gap-4

        lg:grid-cols-4
        xl:grid-cols-6
      "
    >
      {skills.map((skill, index) => {
        const Icon = skillIcons[skill.icon];

        return (
          <motion.div
            key={skill.name}
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
              margin: "-50px",
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.06,
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
              duration-400

              hover:-translate-y-1.5
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]

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

            {/* Icon */}

            <div
              className="
                flex
                h-12
                w-12
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

                sm:h-14
                sm:w-14
              "
            >
              {Icon && (
                <Icon
                  className="text-3xl sm:text-4xl"
                  style={{ color: skill.color }}
                />
              )}
            </div>

            {/* Name */}

            <h3
              className="
                mt-3
                text-center
                text-sm
                font-semibold
                text-white

                sm:mt-4
                sm:text-base
              "
            >
              {skill.name}
            </h3>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SkillCards;
