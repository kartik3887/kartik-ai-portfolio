import { Mail, Phone, MapPin, UserRound } from "lucide-react";

import { motion } from "framer-motion";

const ContactSection = () => {
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
      {/* Glow */}

      <div
        className="
          absolute
          -right-20
          bottom-0
          h-40
          w-40
          rounded-full
          bg-cyan-500/20
          blur-3xl
        "
      />

      {/* Header */}

      <div
        className="
          relative
          mb-5
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
          <UserRound size={20} />
        </div>

        <div>
          <h2
            className="
              text-base
              font-semibold
              text-white

              sm:text-lg
            "
          >
            Contact Details
          </h2>

          <p
            className="
              text-xs
              text-gray-400

              sm:text-sm
            "
          >
            Manage communication information
          </p>
        </div>
      </div>

      <div
        className="
        relative
        space-y-4
      "
      >
        <InputBox
          icon={<Mail size={17} />}
          label="Email"
          placeholder="example@gmail.com"
        />

        <InputBox
          icon={<Phone size={17} />}
          label="Phone"
          placeholder="+91 0000000000"
        />

        <InputBox
          icon={<MapPin size={17} />}
          label="Location"
          placeholder="Mumbai, India"
        />
      </div>
    </motion.div>
  );
};

const InputBox = ({ icon, label, placeholder }) => {
  return (
    <div>
      <label
        className="
          mb-2
          block
          text-xs
          text-gray-400

          sm:text-sm
        "
      >
        {label}
      </label>

      <div
        className="
          relative
        "
      >
        <div
          className="
            absolute
            left-3
            top-1/2
            -translate-y-1/2
            text-cyan-400
          "
        >
          {icon}
        </div>

        <input
          placeholder={placeholder}
          className="
            h-11
            w-full

            rounded-xl

            border
            border-white/10

            bg-slate-900/50

            pl-10
            pr-4

            text-sm

            text-white

            outline-none

            transition-all
            duration-300

            hover:border-white/20

            focus:border-cyan-400/60

            focus:ring-2

            focus:ring-cyan-400/20
          "
        />
      </div>
    </div>
  );
};

export default ContactSection;
