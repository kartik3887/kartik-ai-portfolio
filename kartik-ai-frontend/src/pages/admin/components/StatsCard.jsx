import { motion } from "framer-motion";

const StatsCard = ({ title, value, icon: Icon }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -2,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      relative

      overflow-hidden

      p-4

      rounded-2xl

      bg-white/5

      backdrop-blur-xl

      border
      border-white/10

      hover:border-blue-500/40

      hover:shadow-lg

      hover:shadow-blue-500/10

      transition

      group
      "
    >
      {/* Glow */}

      <div
        className="
        absolute

        -top-10

        -right-10

        w-24

        h-24

        bg-blue-500/15

        blur-3xl

        rounded-full

        group-hover:bg-blue-500/30

        transition
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
            text-[11px]

            uppercase

            tracking-wider

            text-gray-400
            "
          >
            {title}
          </p>

          <h2
            className="
            text-2xl
            md:text-3xl

            font-bold

            text-white

            mt-1
            "
          >
            {value}
          </h2>

          <p
            className="
            text-[11px]

            text-blue-400

            mt-1
            "
          >
            AI Portfolio Data
          </p>
        </div>

        {Icon && (
          <div
            className="
              p-2

              rounded-xl

              bg-blue-500/20

              border
              border-blue-500/20

              text-blue-400

              group-hover:scale-110

              transition
              "
          >
            <Icon size={18} />
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default StatsCard;
