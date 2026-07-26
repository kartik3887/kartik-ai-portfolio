import { ArrowUpRight } from "lucide-react";

const ResumeButton = () => {
  return (
    <a
      href="/resume.pdf"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Open resume"
      className="

        group

        relative

        inline-flex

        items-center

        gap-2


        overflow-hidden


        rounded-full


        border

        border-cyan-400/30


        bg-gradient-to-r

        from-cyan-400/10

        via-white/5

        to-violet-500/10


        px-6

        py-2.5


        text-sm

        font-semibold

        text-white


        backdrop-blur-xl


        transition-all

        duration-500


        hover:-translate-y-1


        hover:border-cyan-400/70


        hover:shadow-[0_0_35px_rgba(34,211,238,0.35)]

      "
    >
      {/* Shine Effect */}

      <span
        className="
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

      <span
        className="
          relative
          z-10
        "
      >
        Resume
      </span>

      <ArrowUpRight
        size={16}
        className="
          relative
          z-10

          transition-transform

          duration-300

          group-hover:translate-x-1

          group-hover:-translate-y-1
        "
      />
    </a>
  );
};

export default ResumeButton;
