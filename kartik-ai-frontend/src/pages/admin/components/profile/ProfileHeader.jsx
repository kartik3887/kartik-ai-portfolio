import { Sparkles, CheckCircle2, Clock3 } from "lucide-react";

import { motion } from "framer-motion";

const ProfileHeader = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-5
        backdrop-blur-xl

        sm:p-6

        hover:border-cyan-400/30
        transition-all
        duration-500
      "
    >
      {/* AI Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-cyan-500/20
          blur-3xl

          group-hover:bg-cyan-400/30
          transition
        "
      />

      <div
        className="
          relative
          flex
          flex-col
          gap-5

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Left Content */}

        <div>
          <div
            className="
              flex
              items-center
              gap-3
            "
          >
            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                bg-cyan-500/15
                text-cyan-400
              "
            >
              <Sparkles size={20} />
            </div>

            <h1
              className="
                text-lg
                font-semibold
                text-white

                sm:text-xl
                lg:text-2xl
              "
            >
              Profile Management
            </h1>
          </div>

          <p
            className="
              mt-3
              max-w-xl
              text-xs
              leading-relaxed
              text-gray-400

              sm:text-sm
            "
          >
            Manage your portfolio identity, personal information and AI profile
            system.
          </p>

          <div
            className="
              mt-3
              flex
              items-center
              gap-2
              text-xs
              text-gray-500
            "
          >
            <Clock3 size={14} />
            Last updated recently
          </div>
        </div>

        {/* Status */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="
            flex
            w-fit
            items-center
            gap-3
            rounded-xl
            border
            border-green-400/20
            bg-green-400/10
            px-4
            py-2.5
          "
        >
          <CheckCircle2
            size={20}
            className="
              text-green-400
            "
          />

          <div>
            <p
              className="
                text-sm
                font-medium
                text-green-400
              "
            >
              Active
            </p>

            <p
              className="
                text-[11px]
                text-gray-400
              "
            >
              Online
            </p>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ProfileHeader;
