import { User, Camera, UploadCloud } from "lucide-react";

import { motion } from "framer-motion";

const ProfileImageUpload = () => {
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

        hover:border-cyan-400/30
        transition-all
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          -bottom-20
          left-1/2
          h-40
          w-40
          -translate-x-1/2
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
          items-center
        "
      >
        {/* Avatar Wrapper */}

        <motion.div
          whileHover={{
            scale: 1.05,
          }}
          className="
            relative
          "
        >
          {/* Animated Ring */}

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
              inset-[-6px]
              rounded-full
              border
              border-dashed
              border-cyan-400/40
            "
          />

          {/* Avatar */}

          <div
            className="
              relative
              flex

              h-36
              w-36

              sm:h-44
              sm:w-44

              items-center
              justify-center

              overflow-hidden
              rounded-full

              border-2
              border-cyan-400/50

              bg-slate-900

              shadow-lg
              shadow-cyan-500/20
            "
          >
            <User
              className="
                text-gray-500
              "
              size={60}
            />
          </div>

          {/* Camera Button */}

          <motion.button
            whileHover={{
              scale: 1.15,
              rotate: 10,
            }}
            className="
              absolute
              bottom-2
              right-2

              flex
              h-10
              w-10

              items-center
              justify-center

              rounded-full

              bg-cyan-500

              text-white

              shadow-lg
              shadow-cyan-500/40
            "
          >
            <Camera size={18} />
          </motion.button>
        </motion.div>

        {/* Text */}

        <h3
          className="
            mt-6
            text-base
            font-semibold
            text-white

            sm:text-lg
          "
        >
          Profile Image
        </h3>

        <p
          className="
            mt-2
            max-w-xs
            text-center
            text-xs
            leading-relaxed
            text-gray-400

            sm:text-sm
          "
        >
          Upload your professional image for portfolio identity.
        </p>

        {/* Upload Button */}

        <motion.button
          whileHover={{
            scale: 1.03,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className="
            mt-5

            flex
            items-center
            gap-2

            rounded-xl

            border
            border-cyan-400/30

            bg-cyan-500/10

            px-5
            py-2.5

            text-sm

            text-cyan-400

            transition

            hover:bg-cyan-500/20
          "
        >
          <UploadCloud size={17} />
          Change Image
        </motion.button>
      </div>
    </motion.div>
  );
};

export default ProfileImageUpload;
