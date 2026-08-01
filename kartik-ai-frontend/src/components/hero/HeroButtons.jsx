import { HERO_DATA } from "./heroData";
import { ArrowRight, Download } from "lucide-react";

const HeroButtons = () => {
  return (
    <div
      className="
        mt-4
        flex
        w-full
        flex-col
        gap-2.5

        sm:mt-4
        sm:w-auto
        sm:flex-row
        sm:items-center
        sm:gap-3
      "
    >
      {/* ================= Primary CTA ================= */}

      <a
        href={HERO_DATA.buttons.primary.href}
        className="
          group

          flex
          h-10
          w-full
          items-center
          justify-center
          gap-2

          rounded-full

          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-violet-600

          px-5

          text-[13px]
          font-bold
          text-white

          shadow-[0_8px_28px_rgba(34,211,238,0.22)]

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-[0_12px_38px_rgba(34,211,238,0.32)]

          active:scale-[0.97]

          sm:h-10
          sm:w-auto
          sm:px-5
        "
      >
        <span>{HERO_DATA.buttons.primary.text}</span>

        <ArrowRight
          size={15}
          strokeWidth={2.2}
          className="
            transition-transform
            duration-300
            group-hover:translate-x-1
          "
        />
      </a>

      {/* ================= Secondary CTA ================= */}

      <a
        href={HERO_DATA.buttons.secondary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          group

          flex
          h-10
          w-full
          items-center
          justify-center
          gap-2

          rounded-full

          border
          border-white/10

          bg-white/[0.04]

          px-5

          text-[13px]
          font-semibold
          text-slate-200

          backdrop-blur-xl

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-cyan-400/40
          hover:bg-cyan-400/10

          active:scale-[0.97]

          sm:h-10
          sm:w-auto
          sm:px-5
        "
      >
        <Download
          size={15}
          strokeWidth={2}
          className="
            transition-transform
            duration-300
            group-hover:-translate-y-1
          "
        />

        <span>{HERO_DATA.buttons.secondary.text}</span>
      </a>
    </div>
  );
};

export default HeroButtons;
