import { HERO_DATA } from "./heroData";

const HeroStats = () => {
  return (
    <div
      className="
        mt-4

        grid
        w-full
        max-w-xl
        grid-cols-3

        gap-2.5

        sm:mt-4
        sm:gap-3
      "
    >
      {HERO_DATA.stats.map((stat) => (
        <div
          key={stat.label}
          className="
            group
            relative
            overflow-hidden

            rounded-xl

            border
            border-white/10

            bg-white/[0.04]

            p-2.5

            sm:p-3

            backdrop-blur-xl

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-cyan-400/30
            hover:bg-white/[0.07]
            hover:shadow-[0_8px_24px_rgba(34,211,238,0.15)]
          "
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0

              bg-gradient-to-br
              from-cyan-400/10
              via-transparent
              to-violet-500/10

              opacity-0

              transition-opacity
              duration-300

              group-hover:opacity-100
            "
          />

          <div className="relative">
            {/* Value */}

            <h3
              className="
                bg-gradient-to-r
                from-cyan-300
                to-violet-400

                bg-clip-text
                text-transparent

                text-lg
                font-black

                leading-none
                tracking-tight

                sm:text-xl
              "
            >
              {stat.value}
            </h3>

            {/* Label */}

            <p
              className="
                mt-1.5

                text-[9px]
                font-medium
                tracking-wide

                text-slate-400

                sm:text-[10px]
              "
            >
              {stat.label}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HeroStats;