import { HERO_DATA } from "./heroData";

const HeroStats = () => {
  return (
    <div
      className="
        mt-12

        grid
        grid-cols-2
        lg:grid-cols-3

        gap-4

        w-full
        max-w-2xl
      "
    >
      {HERO_DATA.stats.map((stat) => (
        <div
          key={stat.label}
          className="
            group
            relative

            overflow-hidden

            rounded-2xl

            border
            border-white/10

            bg-white/[0.05]

            backdrop-blur-xl

            p-5
            sm:p-6

            transition-all
            duration-300

            hover:-translate-y-1
            hover:border-cyan-400/40
            hover:bg-white/[0.08]
            hover:shadow-[0_10px_40px_rgba(34,211,238,0.15)]
          "
        >
          {/* Glow */}
          <div
            className="
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
                text-[clamp(1.8rem,4vw,2.5rem)]

                font-extrabold

                leading-none

                bg-gradient-to-r
                from-cyan-300
                to-violet-400

                bg-clip-text

                text-transparent
              "
            >
              {stat.value}
            </h3>

            {/* Label */}
            <p
              className="
                mt-3

                text-xs
                sm:text-sm

                font-medium

                tracking-wide

                text-slate-400
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