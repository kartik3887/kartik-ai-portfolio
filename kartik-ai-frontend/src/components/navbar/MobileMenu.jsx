import { X, Sparkles } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

import NavLinks from "./NavLinksMenu";
import ResumeButton from "./ResumeButton";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="
            fixed
            inset-0
            z-[9998]
            lg:hidden
          "
        >
          {/* Backdrop */}

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="
              absolute
              inset-0

              bg-black/80

              backdrop-blur-xl
            "
          />

          {/* Premium Panel */}

          <motion.aside
            initial={{
              x: "110%",
              opacity: 0,
            }}
            animate={{
              x: 0,
              opacity: 1,
            }}
            exit={{
              x: "110%",
              opacity: 0,
            }}
            transition={{
              type: "spring",
              stiffness: 170,
              damping: 20,
            }}
            className="
              absolute

              top-20
              right-4
              bottom-4

              w-[88%]
              max-w-[380px]

              overflow-hidden

              rounded-[32px]

              border
              border-cyan-400/20

              bg-gradient-to-b
              from-slate-900/95
              via-slate-950/95
              to-black/95

              backdrop-blur-3xl

              shadow-[0_25px_80px_rgba(0,0,0,0.55),0_0_40px_rgba(34,211,238,0.15)]
            "
          >
            {/* Top Accent Line */}

            <div
              className="
                absolute
                top-0
                left-0

                h-[2px]
                w-full

                bg-gradient-to-r
                from-transparent
                via-cyan-400
                to-transparent
              "
            />

            {/* Rotating Glow */}

            <motion.div
              animate={{
                rotate: 360,
              }}
              transition={{
                repeat: Infinity,
                duration: 25,
                ease: "linear",
              }}
              className="
                absolute

                -top-44
                -right-44

                h-[420px]
                w-[420px]

                rounded-full

                bg-gradient-to-r
                from-cyan-400/10
                via-sky-400/5
                to-violet-500/10

                blur-[120px]
              "
            />

            {/* Bottom Glow */}

            <div
              className="
                absolute

                -bottom-40
                -left-32

                h-[340px]
                w-[340px]

                rounded-full

                bg-violet-500/10

                blur-[120px]
              "
            />

            {/* Floating Particles */}

            <div
              className="
                absolute
                inset-0

                pointer-events-none
                overflow-hidden
              "
            >
              <div
                className="
                  absolute
                  top-16
                  left-10

                  h-1
                  w-1

                  rounded-full

                  bg-cyan-400

                  animate-pulse
                "
              />

              <div
                className="
                  absolute
                  top-44
                  right-12

                  h-1
                  w-1

                  rounded-full

                  bg-violet-400

                  animate-pulse
                "
              />

              <div
                className="
                  absolute
                  bottom-32
                  left-16

                  h-1
                  w-1

                  rounded-full

                  bg-sky-400

                  animate-pulse
                "
              />
            </div>
            {/* Header */}

            <div
              className="
                relative
                z-10

                flex
                items-center
                justify-between

                border-b
                border-white/10

                px-6
                py-5
              "
            >
              <div>
                <div className="flex items-center gap-2">
                  <Sparkles size={15} className="text-cyan-400 animate-pulse" />

                  <span
                    className="
                      text-[11px]
                      font-semibold

                      uppercase

                      tracking-[0.28em]

                      text-cyan-300
                    "
                  >
                    AI Navigation
                  </span>
                </div>

                <h2
                  className="
                    mt-2

                    bg-gradient-to-r
                    from-white
                    via-cyan-200
                    to-cyan-400

                    bg-clip-text

                    text-2xl
                    font-black

                    text-transparent
                  "
                >
                  Kartik.AI
                </h2>

                <p
                  className="
                    mt-1

                    text-xs

                    text-slate-400
                  "
                >
                  AI Portfolio Operating System
                </p>
              </div>

              {/* Close Button */}

              <motion.button
                whileHover={{
                  rotate: 90,
                  scale: 1.08,
                }}
                whileTap={{
                  scale: 0.92,
                }}
                onClick={onClose}
                aria-label="Close Menu"
                className="
                  flex

                  h-11
                  w-11

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-cyan-400/20

                  bg-white/5

                  text-slate-300

                  backdrop-blur-xl

                  transition-all
                  duration-300

                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:text-white
                  hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]
                "
              >
                <X size={18} />
              </motion.button>
            </div>

            {/* Navigation */}

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
                delay: 0.2,
                duration: 0.5,
              }}
              className="
                relative
                z-10

                flex-1

                overflow-y-auto

                px-7
                py-8
              "
            >
              <NavLinks mobile onLinkClick={onClose} />
            </motion.div>
            {/* Footer */}

            <div
              className="
                relative
                z-10

                border-t
                border-white/10

                bg-gradient-to-r
                from-cyan-500/5
                via-transparent
                to-violet-500/5

                p-6
              "
            >
              {/* Resume Button */}

              <div className="flex justify-center">
                <ResumeButton />
              </div>

              {/* Status */}

              <div
                className="
                  mt-6

                  flex
                  items-center
                  justify-center
                  gap-2

                  text-xs
                  font-medium

                  text-cyan-300/80
                "
              >
                <span className="relative flex h-2.5 w-2.5">
                  <span
                    className="
                      absolute
                      inline-flex
                      h-full
                      w-full

                      rounded-full

                      bg-cyan-400

                      opacity-75

                      animate-ping
                    "
                  />

                  <span
                    className="
                      relative
                      inline-flex

                      h-2.5
                      w-2.5

                      rounded-full

                      bg-cyan-400
                    "
                  />
                </span>

                <span>AI Portfolio OS Online</span>
              </div>

              {/* Bottom Label */}

              <p
                className="
                  mt-4

                  text-center

                  text-[11px]

                  tracking-[0.18em]
                  uppercase

                  text-slate-500
                "
              >
                Futuristic • AI • Full Stack
              </p>
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
