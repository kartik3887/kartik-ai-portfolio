import { HERO_DATA } from "./heroData";

const HeroContent = () => {
  return (
    <div
      className="
        mx-auto
        max-w-2xl
        lg:mx-0
      "
    >
      {/* Badge */}
      <div
        className="
          mb-6

          inline-flex
          items-center
          gap-2

          rounded-full

          border
          border-cyan-400/20

          bg-cyan-400/10

          px-4
          py-2

          backdrop-blur-xl

          shadow-lg
          shadow-cyan-500/10
        "
      >
        <span
          className="
            h-2.5
            w-2.5

            rounded-full

            bg-cyan-400

            shadow-[0_0_12px_#22d3ee]

            animate-pulse
          "
        />

        <span
          className="
            text-xs
            sm:text-sm

            font-medium

            tracking-wide

            text-cyan-300
          "
        >
          {HERO_DATA.badge}
        </span>
      </div>

      {/* Heading */}
      <h1
        className="
          font-black

          leading-[1.05]

          tracking-tight

          text-white

          text-[clamp(2.8rem,7vw,5.5rem)]
        "
      >
        {HERO_DATA.name}
      </h1>

      {/* Role */}
      <h2
        className="
          mt-5

          bg-gradient-to-r
          from-cyan-400
          via-blue-400
          to-violet-500

          bg-clip-text

          text-transparent

          font-extrabold

          tracking-wide

          text-[clamp(1.3rem,3vw,2.1rem)]
        "
      >
        {HERO_DATA.role}
      </h2>

      {/* Description */}
      <p
        className="
          mt-7

          max-w-[65ch]

          text-slate-300

          leading-8

          text-[15px]
          sm:text-base
          lg:text-lg
        "
      >
        {HERO_DATA.description}
      </p>
    </div>
  );
};

export default HeroContent;