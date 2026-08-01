import { User, BriefcaseBusiness, Sparkles } from "lucide-react";

import { motion } from "framer-motion";

const PersonalInfoSection = () => {
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
          -top-20
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
          mb-6
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
          <User size={20} />
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
            Personal Information
          </h2>

          <p
            className="
              text-xs
              text-gray-400

              sm:text-sm
            "
          >
            Manage your profile identity
          </p>
        </div>
      </div>

      {/* Form */}

      <div
        className="
          relative
          space-y-4
        "
      >
        <InputField
          icon={<User size={17} />}
          label="Full Name"
          placeholder="Enter your name"
        />

        <InputField
          icon={<BriefcaseBusiness size={17} />}
          label="Professional Title"
          placeholder="Full Stack Developer"
        />

        <InputArea
          icon={<Sparkles size={17} />}
          label="Subtitle"
          placeholder="Building scalable AI applications..."
        />
      </div>
    </motion.div>
  );
};

const InputField = ({ icon, label, placeholder }) => {
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
          group/input
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

            focus:border-cyan-400/60

            focus:ring-2

            focus:ring-cyan-400/20

            hover:border-white/20
          "
        />
      </div>
    </div>
  );
};

const InputArea = ({ icon, label, placeholder }) => {
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
            top-3
            text-cyan-400
          "
        >
          {icon}
        </div>

        <textarea
          rows={3}
          placeholder={placeholder}
          className="
            w-full

            resize-none

            rounded-xl

            border
            border-white/10

            bg-slate-900/50

            py-3
            pl-10
            pr-4

            text-sm

            text-white

            outline-none

            transition-all

            focus:border-cyan-400/60

            focus:ring-2

            focus:ring-cyan-400/20
          "
        />
      </div>
    </div>
  );
};

export default PersonalInfoSection;
