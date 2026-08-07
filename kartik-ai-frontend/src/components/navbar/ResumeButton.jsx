import { ArrowUpRight } from "lucide-react";
import { getResume } from "@/api/resume.api";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ResumeButton = () => {
  const [resumeUrl, setResumeUrl] = useState("");

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const response = await getResume();
        setResumeUrl(response.resume.fileUrl);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResume();
  }, []);

  return (
    <motion.a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Resume"
      whileHover={{
        y: -3,
        scale: 1.02,
      }}
      whileTap={{
        scale: 0.97,
      }}
      className="
        group
        relative
        inline-flex
        items-center
        gap-3

        overflow-hidden

        rounded-full

        border
        border-cyan-400/25

        bg-slate-900/70
        backdrop-blur-2xl

        px-6
        py-3

        text-[15px]
        font-semibold
        text-white

        transition-all
        duration-500

        hover:border-cyan-400/50
        hover:shadow-[0_0_35px_rgba(34,211,238,0.25)]
      "
    >
      {/* Animated Background */}
      <span
        className="
          absolute
          inset-0

          opacity-0
          group-hover:opacity-100

          transition-all
          duration-500

          bg-gradient-to-r
          from-cyan-500/10
          via-sky-400/15
          to-violet-500/10
        "
      />

      {/* Shine */}
      <span
        className="
          absolute
          inset-0

          -translate-x-full

          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent

          group-hover:translate-x-full

          transition-transform
          duration-1000
        "
      />

      {/* Pulse Dot */}
      <span className="relative z-10 flex h-2.5 w-2.5">
        <span
          className="
            absolute
            inline-flex
            h-full
            w-full
            rounded-full
            bg-cyan-400
            opacity-75
            animate-ping
          "
        />
        <span
          className="
            relative
            inline-flex
            h-2.5
            w-2.5
            rounded-full
            bg-cyan-400
          "
        />
      </span>

      {/* Text */}
      <span
        className="
          relative
          z-10

          transition-colors
          duration-300

          group-hover:text-cyan-300
        "
      >
        Resume
      </span>

      {/* Icon */}
      <ArrowUpRight
        size={18}
        className="
          relative
          z-10

          transition-all
          duration-300

          group-hover:translate-x-1
          group-hover:-translate-y-1
          group-hover:rotate-12
        "
      />

      {/* Bottom Glow */}
      <span
        className="
          absolute
          bottom-0
          left-1/2

          h-[2px]
          w-0

          -translate-x-1/2

          rounded-full

          bg-gradient-to-r
          from-cyan-400
          via-sky-400
          to-violet-500

          transition-all
          duration-500

          group-hover:w-[75%]
        "
      />
    </motion.a>
  );
};

export default ResumeButton;