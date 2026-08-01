import { ArrowUpRight } from "lucide-react";
import { getResume } from "@/api/resume.api";
import { useEffect, useState } from "react";

const ResumeButton = () => {
  const [resumeUrl, setResumeUrl] = useState([]);
  useEffect(() => {
    const fetchResume = async () => {
      console.log("Fetching Resume...");

      try {
        const response = await getResume();

        console.log("API Response:", response);

        setResumeUrl(response.resume.fileUrl);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResume();
  }, []);

  return (
    <a
      href={resumeUrl}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open Resume"
      className="
        group
        relative

        inline-flex
        items-center
        gap-2

        overflow-hidden

        rounded-full

        border
        border-cyan-400/25

        bg-gradient-to-r
        from-cyan-400/10
        via-white/[0.04]
        to-violet-500/10

        px-5
        py-2.5

        text-sm
        font-semibold
        text-white

        backdrop-blur-xl

        transition-all
        duration-300

        hover:-translate-y-0.5
        hover:border-cyan-400/45
        hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]

        active:scale-95
      "
    >
      {/* Shine */}

      <span
        className="
          pointer-events-none

          absolute
          inset-0

          -translate-x-full

          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent

          transition-transform
          duration-700

          group-hover:translate-x-full
        "
      />

      {/* Text */}

      <span className="relative z-10">Resume</span>

      {/* Icon */}

      <ArrowUpRight
        size={16}
        className="
          relative
          z-10

          transition-transform
          duration-300

          group-hover:translate-x-0.5
          group-hover:-translate-y-0.5
        "
      />
    </a>
  );
};

export default ResumeButton;
