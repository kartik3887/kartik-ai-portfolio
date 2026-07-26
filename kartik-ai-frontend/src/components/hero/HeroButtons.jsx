import { HERO_DATA } from "./heroData";
import { ArrowRight, Download } from "lucide-react";

const HeroButtons = () => {
  return (
    <div
      className="
        mt-10

        flex
        flex-col
        sm:flex-row

        items-center
        justify-center
        lg:justify-start

        gap-4

        w-full
      "
    >
      {/* Primary Button */}
      <a
        href={HERO_DATA.buttons.primary.href}
        className="
          group

          flex
          items-center
          justify-center
          gap-2

          w-full
          sm:w-auto

          rounded-full

          bg-gradient-to-r
          from-cyan-400
          via-blue-500
          to-violet-500

          px-7
          sm:px-8

          py-3.5

          text-sm
          sm:text-base

          font-semibold

          text-white

          shadow-lg
          shadow-cyan-500/20

          transition-all
          duration-300

          hover:-translate-y-1
          hover:shadow-cyan-500/40

          active:scale-[0.98]

          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400/50
        "
      >
        {HERO_DATA.buttons.primary.text}

        <ArrowRight
          size={18}
          className="
            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        />
      </a>

      {/* Secondary Button */}
      <a
        href={HERO_DATA.buttons.secondary.href}
        target="_blank"
        rel="noopener noreferrer"
        className="
          flex
          items-center
          justify-center
          gap-2

          w-full
          sm:w-auto

          rounded-full

          border
          border-white/15

          bg-white/5

          backdrop-blur-xl

          px-7
          sm:px-8

          py-3.5

          text-sm
          sm:text-base

          font-semibold

          text-slate-200

          transition-all
          duration-300

          hover:-translate-y-1
          hover:border-cyan-400/40
          hover:bg-cyan-400/10

          active:scale-[0.98]

          focus:outline-none
          focus:ring-2
          focus:ring-cyan-400/40
        "
      >
        <Download size={18} />

        {HERO_DATA.buttons.secondary.text}
      </a>
    </div>
  );
};

export default HeroButtons;