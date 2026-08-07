import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  BriefcaseBusiness,
  CircleCheck,
} from "lucide-react";

import {
  FaReact,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaGithub,
  FaDocker,
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiJavascript,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiMysql,
} from "react-icons/si";

// Reduced icon sizes in the mapping
const techIcons = {
  React: <FaReact className="text-sky-400 text-base md:text-lg" />,
  JavaScript: <SiJavascript className="text-yellow-400 text-base md:text-lg" />,
  TypeScript: <SiTypescript className="text-blue-400 text-base md:text-lg" />,
  NodeJS: <FaNodeJs className="text-green-400 text-base md:text-lg" />,
  Express: <SiExpress className="text-gray-300 text-base md:text-lg" />,
  MongoDB: <SiMongodb className="text-green-500 text-base md:text-lg" />,
  MySQL: <SiMysql className="text-blue-500 text-base md:text-lg" />,
  TailwindCSS: <SiTailwindcss className="text-cyan-400 text-base md:text-lg" />,
  HTML: <FaHtml5 className="text-orange-500 text-base md:text-lg" />,
  CSS: <FaCss3Alt className="text-blue-500 text-base md:text-lg" />,
  Git: <FaGitAlt className="text-orange-500 text-base md:text-lg" />,
  GitHub: <FaGithub className="text-white text-base md:text-lg" />,
  Docker: <FaDocker className="text-sky-500 text-base md:text-lg" />,
};

const ExperienceCard = ({ experience, index }) => {
  const status = experience.currentlyWorking ? "Current" : "Completed";

  const duration = `${new Date(experience.startDate).toLocaleDateString(
    "en-US",
    {
      month: "short",
      year: "numeric",
    }
  )} - ${
    experience.currentlyWorking
      ? "Present"
      : new Date(experience.endDate).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })
  }`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 40, scale: 0.97 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.65,
        delay: index * 0.12,
        ease: [0.22, 1, 0.36, 1],
      }}
      // Reduced overall padding
      className="group relative w-full rounded-2xl md:rounded-[24px] bg-[#020617] p-4 md:p-6 transition-all duration-500 hover:-translate-y-1.5 hover:scale-[1.01]"
    >
      <div
        className="absolute inset-0 rounded-2xl md:rounded-[24px] border border-transparent opacity-0 transition-all duration-500 group-hover:opacity-100"
        style={{
          background:
            "linear-gradient(#020617,#020617) padding-box, linear-gradient(135deg,#22d3ee,#8b5cf6,#22d3ee) border-box",
        }}
      />
      
      {/* Glow */}
      <div className="absolute right-5 top-5 h-2 w-2 rounded-full bg-cyan-400 shadow-[0_0_20px_#22d3ee] animate-pulse" />

      {/* Top Border */}
      <div className="absolute left-0 top-0 h-[3px] w-full bg-gradient-to-r from-cyan-400 via-violet-500 to-cyan-400" />

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
          {/* Left */}
          <div className="flex items-center gap-4">
            {/* Logo - Reduced Size */}
            <div className="relative h-14 w-14 md:h-16 md:w-16 shrink-0 overflow-hidden rounded-2xl border border-cyan-400/20 bg-gradient-to-br from-cyan-500/10 to-violet-500/10 p-2 md:p-2.5 shadow-[0_0_30px_rgba(34,211,238,.12)]">
              <div className="absolute inset-0 bg-cyan-400/10 blur-xl md:blur-2xl" />
              <img
                src={
                  experience.companyLogo.url ||
                  "https://placehold.co/120x120/020617/22d3ee?text=AI"
                }
                alt={experience.company}
                className="relative h-full w-full object-contain transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
            </div>

            {/* Details - Scaled down text */}
            <div>
              <h3 className="text-lg md:text-xl font-bold tracking-tight text-white">
                {experience.role}
              </h3>
              <div className="mt-1 flex items-center gap-1.5 text-cyan-300">
                <BriefcaseBusiness size={14} className="md:w-4 md:h-4" />
                <span className="text-sm md:text-base font-semibold">
                  {experience.company}
                </span>
              </div>
            </div>
          </div>

          {/* Status */}
          <motion.div
            animate={
              status === "Current"
                ? {
                    boxShadow: [
                      "0 0 10px rgba(16,185,129,.2)",
                      "0 0 20px rgba(16,185,129,.5)",
                      "0 0 10px rgba(16,185,129,.2)",
                    ],
                  }
                : {}
            }
            transition={{
              repeat: Infinity,
              duration: 2,
            }}
            // Tighter padding for status pill
            className={`inline-flex h-fit items-center gap-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold ${
              status === "Current"
                ? "border-emerald-400/20 bg-emerald-500/10 text-emerald-300"
                : "border-cyan-400/20 bg-cyan-500/10 text-cyan-300"
            }`}
          >
            <span className="h-1.5 w-1.5 md:h-2 md:w-2 rounded-full bg-current" />
            {status}
          </motion.div>
        </div>

        {/* Premium Meta - Reduced margin and padding */}
        <div className="mt-6 grid gap-2.5 sm:grid-cols-2 lg:grid-cols-3 md:gap-3">
          {/* Duration */}
          <div className="group/meta rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300">
                <CalendarDays size={16} />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-slate-500">
                  Duration
                </p>
                <h4 className="mt-0.5 text-xs md:text-sm font-semibold leading-tight text-white">
                  {duration}
                </h4>
              </div>
            </div>
          </div>

          {/* Location */}
          <div className="group/meta rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05]">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-violet-500/10 text-violet-300">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-slate-500">
                  Location
                </p>
                <h4 className="mt-0.5 text-xs md:text-sm font-semibold text-white">
                  {experience.location || "Remote"}
                </h4>
              </div>
            </div>
          </div>

          {/* Work Type */}
          <div className="group/meta rounded-xl border border-white/10 bg-white/[0.04] p-3 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-400/[0.05] sm:col-span-2 lg:col-span-1">
            <div className="flex items-center gap-2.5">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-500/10 text-emerald-300">
                <BriefcaseBusiness size={16} />
              </div>
              <div>
                <p className="text-[9px] md:text-[10px] uppercase tracking-[0.15em] text-slate-500">
                  Employment
                </p>
                <h4 className="mt-0.5 text-xs md:text-sm font-semibold text-white">
                  {experience.employmentType}
                </h4>
              </div>
            </div>
          </div>
        </div>

        {/* ===========================
            Key Contributions
        =========================== */}
        {experience.description?.length > 0 && (
          <div className="mt-6 md:mt-8">
            <div className="mb-3 md:mb-4 flex items-center gap-2.5">
              <div className="h-[2px] w-6 md:w-8 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
              <h4 className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Key Contributions
              </h4>
            </div>

            {/* Reduced spacing between items */}
            <div className="space-y-2.5">
              {experience.description.map((item, i) => (
                <motion.div
                  key={i}
                  whileHover={{ x: 6, scale: 1.01 }}
                  transition={{ duration: 0.25 }}
                  className="group/item relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.04] p-3 md:p-3.5 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/30 hover:bg-cyan-500/[0.05]"
                >
                  <div className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-violet-500 opacity-0 transition-all duration-300 group-hover/item:opacity-100" />
                  <div className="flex items-start gap-3">
                    <div className="flex h-7 w-7 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-lg bg-cyan-500/10 text-cyan-300 transition-all duration-300 group-hover/item:scale-110 group-hover/item:bg-cyan-500/20">
                      <CircleCheck size={16} />
                    </div>
                    <p className="text-[13px] md:text-sm leading-relaxed text-slate-300">
                      {item}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}

        {/* Bottom Divider - tighter margins */}
        {experience.technologies?.length > 0 && (
          <div className="my-6 md:my-8 h-px w-full bg-gradient-to-r from-transparent via-cyan-400/30 to-transparent" />
        )}

        {/* ===========================
            Technology Stack
        =========================== */}
        {experience.technologies?.length > 0 && (
          <div>
            <div className="mb-3 md:mb-4 flex items-center gap-2.5">
              <div className="h-[2px] w-6 md:w-8 rounded-full bg-gradient-to-r from-cyan-400 to-violet-500" />
              <h4 className="text-[11px] md:text-xs font-bold uppercase tracking-[0.2em] text-cyan-300">
                Technology Stack
              </h4>
            </div>

            <div className="flex flex-wrap gap-2 md:gap-2.5">
              {experience.technologies.map((tech, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3, scale: 1.05 }}
                  transition={{ duration: 0.25 }}
                  className="group/tech relative overflow-hidden rounded-lg border border-cyan-400/15 bg-gradient-to-br from-cyan-500/[0.08] via-slate-900/60 to-violet-500/[0.08] px-2.5 py-1.5 md:px-3 md:py-2 backdrop-blur-xl transition-all duration-300 hover:border-cyan-400/40 hover:shadow-[0_8px_25px_rgba(34,211,238,.15)]"
                >
                  <div className="absolute -bottom-32 -left-20 h-56 w-56 rounded-full bg-violet-500/10 blur-[100px] transition-all duration-700 group-hover:bg-violet-500/20" />
                  
                  <div className="relative flex items-center gap-2">
                    <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/5">
                      {techIcons[tech] || (
                        <div className="h-1.5 w-1.5 rounded-full bg-cyan-400" />
                      )}
                    </div>
                    <span className="text-[11px] md:text-xs font-medium text-slate-300 group-hover/tech:text-white transition-colors">
                      {tech}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ExperienceCard;