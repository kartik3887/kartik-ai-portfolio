import { motion } from "framer-motion";

const StatsCard = ({ title, value = 0, icon: Icon }) => {
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
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-4
        backdrop-blur-xl
        transition
        hover:border-blue-500/40
        hover:shadow-lg
        hover:shadow-blue-500/10
      "
    >
      {/* Glow */}

      <div
        className="
          absolute
          -right-10
          -top-10
          h-24
          w-24
          rounded-full
          bg-blue-500/15
          blur-3xl
          transition
          group-hover:bg-blue-500/30
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
              mt-1
              text-2xl
              font-bold
              text-white
              md:text-3xl
            "
          >
            {value}
          </h2>

          <p
            className="
              mt-1
              text-[11px]
              text-blue-400
            "
          >
            AI Portfolio Data
          </p>
        </div>

        {Icon && (
          <div
            className="
              rounded-xl
              border
              border-blue-500/20
              bg-blue-500/20
              p-2
              text-blue-400
              transition
              group-hover:scale-110
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
