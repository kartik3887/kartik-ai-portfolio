import { Save, RotateCcw, Sparkles } from "lucide-react";

import { motion } from "framer-motion";

const ProfileActions = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 20,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.5,
      }}
      className="
        relative
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/5
        p-4
        backdrop-blur-xl

        sm:p-5
      "
    >
      {/* AI Glow */}

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-0
          h-40
          w-40
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      <div
        className="
          relative
          flex
          flex-col
          gap-3

          sm:flex-row
          sm:justify-end
        "
      >
        {/* Reset */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            flex
            h-11
            items-center
            justify-center
            gap-2

            rounded-xl

            border
            border-white/10

            bg-white/5

            px-5

            text-sm

            text-gray-300

            transition

            hover:bg-white/10
          "
        >
          <RotateCcw size={16} />
          Reset Changes
        </motion.button>

        {/* Save */}

        <motion.button
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            group
            relative
            flex
            h-11
            items-center
            justify-center
            gap-2

            overflow-hidden

            rounded-xl

            bg-gradient-to-r
            from-cyan-500
            to-blue-500

            px-7

            text-sm

            font-semibold

            text-white

            shadow-lg

            shadow-cyan-500/30

          "
        >
          {/* Shine */}

          <span
            className="
              absolute
              inset-0
              -translate-x-full
              bg-gradient-to-r
              from-transparent
              via-white/30
              to-transparent

              transition

              duration-700

              group-hover:translate-x-full
            "
          />

          <Save
            size={17}
            className="
              relative
            "
          />

          <span className="relative">Save Profile</span>

          <Sparkles
            size={15}
            className="
              relative
            "
          />
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProfileActions;
