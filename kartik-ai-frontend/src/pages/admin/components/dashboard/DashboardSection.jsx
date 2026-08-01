import { motion } from "framer-motion";

const DashboardSection = ({ title, icon: Icon, children, className = "" }) => {
  return (
    <motion.section
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className={`
      relative

      overflow-hidden

      p-5

      rounded-2xl

      bg-white/5

      backdrop-blur-xl

      border
      border-white/10

      ${className}
      `}
    >
      {/* Background Glow */}

      <div
        className="
        absolute

        -top-16
        -right-16

        w-40
        h-40

        bg-blue-500/10

        blur-3xl

        rounded-full
        "
      />

      {/* Header */}

      <div
        className="
        relative

        flex

        items-center

        gap-3

        mb-5
        "
      >
        {Icon && (
          <div
            className="
              flex

              items-center

              justify-center

              p-2

              rounded-lg

              bg-blue-500/20

              border
              border-blue-500/20

              text-blue-400
              "
          >
            <Icon size={17} />
          </div>
        )}

        <h2
          className="
          text-sm

          font-semibold

          text-white

          tracking-wide
          "
        >
          {title}
        </h2>
      </div>

      {/* Content */}

      <div
        className="
        relative
        "
      >
        {children}
      </div>
    </motion.section>
  );
};

export default DashboardSection;
