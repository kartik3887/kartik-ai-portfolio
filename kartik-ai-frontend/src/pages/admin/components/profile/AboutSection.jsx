import { FileText, Sparkles, Code2, Plus, X } from "lucide-react";

import { motion } from "framer-motion";

const AboutSection = () => {
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
          -left-20
          top-20
          h-40
          w-40
          rounded-full
          bg-blue-500/20
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
          <FileText size={20} />
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
            About Information
          </h2>

          <p
            className="
              text-xs
              text-gray-400

              sm:text-sm
            "
          >
            Configure your portfolio story
          </p>
        </div>
      </div>

      <div
        className="
        relative
        space-y-5
      "
      >
        <TextAreaField
          icon={<Sparkles size={17} />}
          label="Hero Description"
          placeholder="Your first impression..."
        />

        <TextAreaField
          icon={<FileText size={17} />}
          label="About Description"
          placeholder="Tell your professional journey..."
        />

        {/* Roles */}

        <div>
          <label
            className="
              mb-3
              block
              text-xs
              text-gray-400

              sm:text-sm
            "
          >
            Roles
          </label>

          <div
            className="
              rounded-xl
              border
              border-white/10
              bg-slate-900/50
              p-3
            "
          >
            <div
              className="
                flex
                flex-wrap
                gap-2
              "
            >
              {["React Developer", "Node.js Developer", "AI Engineer"].map(
                (role) => (
                  <motion.span
                    whileHover={{
                      scale: 1.05,
                    }}
                    key={role}
                    className="
                      flex
                      items-center
                      gap-2

                      rounded-full

                      border
                      border-cyan-400/20

                      bg-cyan-400/10

                      px-3
                      py-1.5

                      text-xs

                      text-cyan-300
                    "
                  >
                    {role}

                    <X size={12} />
                  </motion.span>
                ),
              )}
            </div>

            <button
              className="
                mt-3
                flex
                items-center
                gap-2
                text-xs
                text-cyan-400
              "
            >
              <Plus size={14} />
              Add Role
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const TextAreaField = ({ icon, label, placeholder }) => {
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
          rows={4}
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

            duration-300

            focus:border-cyan-400/60

            focus:ring-2

            focus:ring-cyan-400/20
          "
        />
      </div>
    </div>
  );
};

export default AboutSection;
