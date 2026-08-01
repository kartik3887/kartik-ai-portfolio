import logo from "@/assets/logo.png";

const Logo = () => {
  return (
    <a
      href="#home"
      aria-label="Kartik.AI Home"
      className="
        group
        flex
        items-center
        gap-3
        select-none
      "
    >
      {/* Logo Icon */}

      <div
        className="
          relative

          flex
          h-11
          w-11

          items-center
          justify-center

          overflow-hidden

          rounded-xl

          border
          border-white/10

          bg-white/[0.05]

          backdrop-blur-xl

          transition-all
          duration-300

          group-hover:scale-105
          group-hover:border-cyan-400/40
          group-hover:shadow-[0_0_20px_rgba(34,211,238,0.20)]
        "
      >
        {/* Ambient Glow */}

        <div
          className="
            pointer-events-none

            absolute
            inset-0

            rounded-xl

            bg-gradient-to-br

            from-cyan-400/15
            via-transparent
            to-violet-500/15

            opacity-0

            blur-lg

            transition-opacity
            duration-300

            group-hover:opacity-100
          "
        />

        {/* Logo */}

        <img
          src={logo}
          alt="Kartik.AI Logo"
          className="
            relative
            z-10

            h-9
            w-9

            object-contain

            transition-transform
            duration-300

            group-hover:scale-105
            group-hover:rotate-3
          "
        />
      </div>

      {/* Brand */}

      <div
        className="
          flex
          flex-col

          leading-none
        "
      >
        <h1
          className="
            text-[17px]
            font-black

            tracking-[-0.02em]

            text-white
          "
        >
          Kartik
          <span className="text-cyan-400">.AI</span>
        </h1>

        <span
          className="
            mt-1

            text-[9px]

            font-medium

            uppercase

            tracking-[0.32em]

            text-cyan-300/80
          "
        >
          AI FULL STACK
        </span>
      </div>
    </a>
  );
};

export default Logo;
