import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Loader2, Briefcase } from "lucide-react";

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

  // Premium Loading State
  if (loading) {
    return (
      <div className="flex min-h-[400px] w-full flex-col items-center justify-center gap-4 rounded-[30px] border border-white/5 bg-white/[0.02] backdrop-blur-sm">
        <Loader2 className="h-10 w-10 animate-spin text-cyan-400" />
        <p className="text-sm font-medium tracking-widest text-slate-400 uppercase">
          Loading Timeline
        </p>
      </div>
    );
  }

  // Premium Empty State
  if (!experiences.length) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="flex min-h-[400px] w-full flex-col items-center justify-center gap-5 rounded-[30px] border border-dashed border-white/10 bg-white/[0.01] backdrop-blur-sm"
      >
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-slate-800/50 text-slate-500 shadow-inner">
          <Briefcase size={28} />
        </div>
        <p className="text-sm font-medium text-slate-400">
          No experiences documented yet.
        </p>
      </motion.div>
    );
  }

  return (
    <div className="relative mx-auto max-w-5xl">
      {/* ================= Timeline Line ================= */}
      {/* Positioned exactly in the center of the 48px (w-12) node -> 24px - 1px (half line width) = 23px */}
      <motion.div
        initial={{ height: 0 }}
        whileInView={{ height: "100%" }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{
          duration: 1.5,
          ease: [0.22, 1, 0.36, 1], // Matched with card easing
        }}
        className="absolute bottom-0 left-[23px] top-6 hidden w-[2px] bg-gradient-to-b from-cyan-400 via-violet-500/40 to-transparent md:block"
      />

      {/* ================= Experience List ================= */}
      <div className="space-y-12 md:space-y-16">
        {experiences.map((experience, index) => (
          <div
            key={experience._id}
            className="group relative flex items-start gap-0 md:gap-8"
          >
            {/* ================= Timeline Node ================= */}
            <motion.div
              initial={{ opacity: 0, scale: 0.3 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
                ease: [0.34, 1.56, 0.64, 1], // Springy pop effect
              }}
              className="relative z-10 hidden h-12 w-12 shrink-0 items-center justify-center rounded-full border border-cyan-400/20 bg-[#020617] shadow-[0_0_20px_rgba(34,211,238,0.1)] transition-colors duration-500 group-hover:border-cyan-400/50 md:flex"
            >
              {/* Pulse */}
              <span className="absolute inset-0 animate-ping rounded-full bg-cyan-400/20 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Core Node */}
              <span className="relative h-3 w-3 rounded-full bg-cyan-400 shadow-[0_0_15px_rgba(34,211,238,0.8)] transition-all duration-500 group-hover:scale-125 group-hover:bg-white group-hover:shadow-[0_0_25px_rgba(255,255,255,0.8)]" />
            </motion.div>

            {/* ================= Card Wrapper ================= */}
            {/* Note: Removed the nested motion.div here because ExperienceCard already handles its own premium entry animation perfectly. Wrapping it in a second motion.div creates a jerky double-animation effect. */}
            <div className="min-w-0 flex-1">
              <ExperienceCard experience={experience} index={index} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceTimeline;