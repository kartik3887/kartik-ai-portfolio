import { motion } from "framer-motion";
import { useEffect, useState } from "react";

import { getAdminExperiences } from "@/api/experience.api";
import ExperienceCard from "./ExperienceCard";

const ExperienceTimeline = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchExperiences = async () => {
      try {
        const response = await getAdminExperiences();

        const data = response?.data || [];

        data.sort((a, b) => a.order - b.order);

        setExperiences(data);
      } catch (error) {
        console.error("Failed to load experiences:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchExperiences();
  }, []);

  if (loading) {
    return (
      <div className="py-12 text-center text-slate-400">
        Loading experiences...
      </div>
    );
  }

  if (!experiences.length) {
    return (
      <div className="py-12 text-center text-slate-400">
        No experiences found.
      </div>
    );
  }

  return (
    <div className="relative">
      {/* ================= Timeline Line ================= */}

      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true }}
        transition={{
          duration: 1.2,
          ease: "easeOut",
        }}
        className="
          absolute
          left-6
          top-0
          hidden
          w-[2px]
          bg-gradient-to-b
          from-cyan-400
          via-violet-400/50
          to-transparent
          lg:block
        "
      />

      {/* ================= Experience List ================= */}

      <div
        className="
          space-y-12

          lg:space-y-14
        "
      >
        {experiences.map((experience, index) => (
          <div
            key={experience._id}
            className="
              relative
              flex
              items-start
              gap-6

              lg:gap-8
            "
          >
            {/* ================= Timeline Node ================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.5,
              }}
              whileInView={{
                opacity: 1,
                scale: 1,
              }}
              viewport={{
                once: true,
                amount: 0.4,
              }}
              transition={{
                duration: 0.4,
                delay: index * 0.1,
              }}
              className="
                relative
                z-10
                hidden
                h-12
                w-12
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/30
                bg-[#050816]
                shadow-[0_0_25px_rgba(34,211,238,0.18)]

                lg:flex
              "
            >
              {/* Pulse */}

              <span
                className="
                  absolute
                  inset-0
                  animate-ping
                  rounded-full
                  bg-cyan-400/15
                "
              />

              {/* Core */}

              <span
                className="
                  relative
                  h-3
                  w-3
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_20px_rgba(34,211,238,0.9)]
                "
              />
            </motion.div>

            {/* ================= Card ================= */}

            <motion.div
              initial={{
                opacity: 0,
                x: 25,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              viewport={{
                once: true,
                amount: 0.2,
              }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className="min-w-0 flex-1"
            >
              <ExperienceCard
                experience={experience}
                index={index}
              />
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;