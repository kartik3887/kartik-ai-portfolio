import { motion } from "framer-motion";
import logo from "@/assets/logo.png";

const Logo = () => {
  return (
    <motion.a
      href="#home"
      aria-label="Kartik.AI Home"
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="
        group
        flex
        items-center
        gap-3
        select-none
      "
    >
      {/* Logo Container */}

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
          border-cyan-400/20

          bg-slate-900/70

          backdrop-blur-2xl

          transition-all
          duration-500

          group-hover:border-cyan-400/50
          group-hover:shadow-[0_0_30px_rgba(34,211,238,0.30)]
        "
      >
        {/* Animated Glow */}

        <div
          className="
            absolute
            -inset-5

            rounded-full

            bg-gradient-to-r
            from-cyan-400/25
            via-sky-400/10
            to-violet-500/25

            blur-xl

            opacity-0

            transition-all
            duration-500

            group-hover:opacity-100
          "
        />

        {/* Rotating Gradient */}

        <motion.div
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
          className="
            absolute
            inset-0

            rounded-2xl

            bg-gradient-to-tr
            from-cyan-400/10
            via-transparent
            to-violet-500/15
          "
        />

        {/* Shine */}

        <span
          className="
            absolute
            inset-0

            -translate-x-full

            bg-gradient-to-r
            from-transparent
            via-white/20
            to-transparent

            group-hover:translate-x-full

            transition-transform
            duration-1000
          "
        />

        {/* Logo */}

        <motion.img
          src={logo}
          alt="Kartik.AI Logo"
          whileHover={{
            rotate: 8,
            scale: 1.08,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
            relative
            z-10

            h-9
            w-9

            object-contain
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
            text-[18px]
            font-black
            tracking-tight

            text-white

            transition-all
            duration-300

            group-hover:text-cyan-100
          "
        >
          Kartik
          <span
            className="
              ml-0.5

              bg-gradient-to-r
              from-cyan-300
              via-sky-400
              to-violet-400

              bg-clip-text
              text-transparent
            "
          >
            .AI
          </span>
        </h1>

        <span
          className="
            mt-1

            text-[9px]

            font-semibold

            uppercase

            tracking-[0.35em]

            text-slate-400

            transition-colors
            duration-300

            group-hover:text-cyan-300
          "
        >
          AI • FULL STACK
        </span>
      </div>
    </motion.a>
  );
};

export default Logo;