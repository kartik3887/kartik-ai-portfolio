import { motion } from "framer-motion";

const StatsCard = ({ title, value = 0, icon: Icon }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 8,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -2,
        scale: 1.02,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
        group
        relative
        overflow-hidden

        rounded-xl

        border
        border-white/10

        bg-white/[0.04]

        px-3
        py-3

        backdrop-blur-xl

        transition-all
        duration-300

        hover:border-cyan-400/30
        hover:shadow-[0_8px_25px_rgba(34,211,238,0.12)]
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-8
          -top-8

          h-16
          w-16

          rounded-full

          bg-cyan-400/15

          blur-2xl

          transition-all
          duration-300

          group-hover:bg-cyan-400/25
        "
      />

      <div
        className="
          relative

          flex
          items-center
          justify-between

          gap-3
        "
      >
        <div>
          <p
            className="
              text-[10px]
              font-medium

              uppercase

              tracking-[0.18em]

              text-slate-400
            "
          >
            {title}
          </p>

          <h2
            className="
              mt-1

              text-xl
              font-bold

              text-white

              md:text-2xl
            "
          >
            {value}
          </h2>

          <p
            className="
              mt-0.5

              text-[10px]

              text-cyan-400/80
            "
          >
            AI Portfolio
          </p>
        </div>

        {Icon && (
          <div
            className="
              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-lg

              border
              border-cyan-400/20

              bg-cyan-400/10

              text-cyan-400

              transition-all
              duration-300

              group-hover:scale-110
              group-hover:rotate-6
            "
          >
            <Icon size={16} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StatsCard;