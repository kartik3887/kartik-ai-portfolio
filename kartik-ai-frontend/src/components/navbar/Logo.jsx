import logo from "@/assets/logo.png";

const Logo = () => {
  return (
    <a
      href="#home"
      className="
        group
        flex
        items-center
        gap-3
      "
      aria-label="Kartik.AI Home"
    >
      {/* Logo Icon */}

      <div
        className="
          relative

          flex
          h-12
          w-12

          items-center
          justify-center

          overflow-hidden

          rounded-2xl

          border
          border-white/10

          bg-white/[0.06]

          backdrop-blur-xl

          transition-all
          duration-500

          group-hover:scale-110

          group-hover:border-cyan-400/50

          group-hover:shadow-[0_0_30px_rgba(34,211,238,0.35)]
        "
      >
        {/* Glow */}

        <div
          className="
            absolute
            inset-0

            rounded-2xl

            bg-gradient-to-br

            from-cyan-400/30

            via-transparent

            to-violet-500/30

            opacity-0

            blur-xl

            transition-all

            duration-500

            group-hover:opacity-100
          "
        />

        {/* Logo Image */}

        <img
          src={logo}
          alt="Kartik.AI Logo"
          className="
            relative
            z-10

            h-10
            w-10

            object-contain

            transition-all

            duration-500

            group-hover:rotate-6

            group-hover:scale-110
          "
        />
      </div>

      {/* Brand Text */}

      <div
        className="
          flex
          flex-col

          leading-none
        "
      >
        <span
          className="
            text-lg

            font-black

            tracking-tight

            text-white
          "
        >
          Kartik
          <span
            className="
              text-cyan-400
            "
          >
            .AI
          </span>
        </span>

        <span
          className="
            mt-1

            text-[10px]

            uppercase

            tracking-[0.28em]

            text-cyan-300/90
          "
        >
          Software Engineer
        </span>
      </div>
    </a>
  );
};

export default Logo;
