import { HERO_DATA } from "./heroData";

const HeroContent = () => {
  return (
    <div
      className="
        mx-auto
        w-full
        max-w-xl

        lg:mx-0
        lg:max-w-2xl
      "
    >
      {/* ================= Badge ================= */}

      <div
        className="
          mb-3
          inline-flex
          items-center
          gap-2

          rounded-full
          border
          border-cyan-400/20
          bg-cyan-400/[0.08]

          px-3
          py-1.5

          backdrop-blur-xl

          transition-all
          duration-300

          hover:border-cyan-400/40

          sm:mb-3
          sm:px-3
        "
      >
        <span
          className="
            h-1.5
            w-1.5
            shrink-0
            rounded-full
            bg-cyan-400
            shadow-[0_0_10px_#22d3ee]
            animate-pulse

            sm:h-1.5
            sm:w-1.5
          "
        />

        <span
          className="
            text-[10px]
            font-medium
            uppercase
            tracking-[0.12em]
            text-cyan-300

            sm:text-[11px]
            sm:tracking-wide
          "
        >
          {HERO_DATA.badge}
        </span>
      </div>

      {/* ================= Name ================= */}

      <h1
        id="hero-heading"
        className="
          font-black
          leading-[0.98]
          tracking-[-0.045em]
          text-white

          text-[clamp(2.25rem,9vw,3rem)]

          sm:text-[clamp(2.6rem,6vw,3.5rem)]

          lg:text-[clamp(3rem,4.5vw,3.8rem)]

          xl:text-[4rem]
        "
      >
        {HERO_DATA.name}
      </h1>

      {/* ================= Role ================= */}

      <h2
        className="
          mt-2.5

          bg-gradient-to-r
          from-cyan-400
          via-sky-400
          to-violet-500

          bg-clip-text
          text-transparent

          font-extrabold

          leading-tight
          tracking-[-0.025em]

          text-[clamp(1rem,3.5vw,1.3rem)]

          sm:mt-2.5
          sm:text-[clamp(1.1rem,2.5vw,1.5rem)]

          lg:mt-3
          lg:text-[1.6rem]
        "
      >
        {HERO_DATA.role}
      </h2>

      {/* ================= Description ================= */}

      <p
        className="
          mx-auto
          mt-3

          max-w-lg

          text-[13px]
          leading-5

          text-slate-300

          sm:mt-3.5
          sm:text-sm
          sm:leading-6

          lg:mx-0
          lg:mt-4
          lg:max-w-xl
          lg:text-[15px]
          lg:leading-6

          xl:text-base
          xl:leading-6
        "
      >
        {HERO_DATA.description}
      </p>
    </div>
  );
};

export default HeroContent;
