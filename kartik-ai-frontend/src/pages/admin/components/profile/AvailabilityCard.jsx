import { BriefcaseBusiness, Check, Zap } from "lucide-react";

import { motion } from "framer-motion";

const AvailabilityCard = () => {
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

      "
    >
      {/* AI Glow */}

      <div
        className="
          absolute
          -right-20
          top-0
          h-44
          w-44
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
          gap-5

          sm:flex-row
          sm:items-center
          sm:justify-between
        "
      >
        {/* Left */}

        <div
          className="
            flex
            items-center
            gap-4
          "
        >
          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-xl
              bg-cyan-500/15
              text-cyan-400
            "
          >
            <BriefcaseBusiness size={21} />
          </div>

          <div>
            <h3
              className="
                text-base
                font-semibold
                text-white
              "
            >
              Work Availability
            </h3>

            <p
              className="
                mt-1
                text-xs
                text-gray-400

                sm:text-sm
              "
            >
              Let recruiters know your current status
            </p>
          </div>
        </div>

        {/* Status Toggle */}

        <motion.div
          whileHover={{
            scale: 1.03,
          }}
          className="
            flex
            items-center
            gap-3

            rounded-xl

            border
            border-green-400/20

            bg-green-400/10

            px-4
            py-3

          "
        >
          {/* Pulse Dot */}

          <span
            className="
              relative
              flex
              h-3
              w-3
            "
          >
            <span
              className="
                absolute
                inline-flex
                h-full
                w-full
                animate-ping
                rounded-full
                bg-green-400
                opacity-75
              "
            />

            <span
              className="
                relative
                inline-flex
                h-3
                w-3
                rounded-full
                bg-green-400
              "
            />
          </span>

          <div>
            <p
              className="
                text-sm
                font-medium
                text-green-400
              "
            >
              Available
            </p>

            <p
              className="
                flex
                items-center
                gap-1
                text-[11px]
                text-gray-400
              "
            >
              <Zap size={11} />
              Open for opportunities
            </p>
          </div>

          <div
            className="
              ml-2
              flex
              h-6
              w-6
              items-center
              justify-center
              rounded-full
              bg-green-400/20
            "
          >
            <Check
              size={14}
              className="
                text-green-400
              "
            />
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AvailabilityCard;
