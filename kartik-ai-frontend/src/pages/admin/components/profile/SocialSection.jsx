import { Github, Linkedin, Instagram, Twitter, Globe } from "lucide-react";

import { motion } from "framer-motion";

const socials = [
  {
    name: "Github",
    icon: Github,
    placeholder: "https://github.com/username",
  },

  {
    name: "LinkedIn",
    icon: Linkedin,
    placeholder: "https://linkedin.com/in/username",
  },

  {
    name: "Instagram",
    icon: Instagram,
    placeholder: "https://instagram.com/username",
  },

  {
    name: "Twitter",
    icon: Twitter,
    placeholder: "https://twitter.com/username",
  },
];

const SocialSection = () => {
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
          top-0
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
          <Globe size={20} />
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
            Social Connections
          </h2>

          <p
            className="
              text-xs
              text-gray-400

              sm:text-sm
            "
          >
            Connect your professional networks
          </p>
        </div>
      </div>

      {/* Social Inputs */}

      <div
        className="
          relative
          grid
          grid-cols-1
          gap-4

          sm:grid-cols-2
        "
      >
        {socials.map((social) => {
          const Icon = social.icon;

          return (
            <motion.div
              key={social.name}
              whileHover={{
                y: -3,
              }}
              className="
                  rounded-xl
                  border
                  border-white/10
                  bg-slate-900/40
                  p-3

                  transition

                  hover:border-cyan-400/40
                "
            >
              <div
                className="
                    mb-2
                    flex
                    items-center
                    gap-2
                    text-cyan-400
                  "
              >
                <Icon size={16} />

                <span
                  className="
                      text-xs
                      text-gray-300
                    "
                >
                  {social.name}
                </span>
              </div>

              <input
                placeholder={social.placeholder}
                className="
                    h-10
                    w-full

                    rounded-lg

                    border
                    border-white/10

                    bg-black/20

                    px-3

                    text-xs

                    text-white

                    outline-none

                    transition

                    focus:border-cyan-400/50

                    focus:ring-2

                    focus:ring-cyan-400/20
                  "
              />
            </motion.div>
          );
        })}
      </div>
    </motion.div>
  );
};

export default SocialSection;
