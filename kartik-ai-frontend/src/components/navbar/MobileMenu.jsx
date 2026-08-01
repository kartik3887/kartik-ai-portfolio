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

              bg-black/75

              backdrop-blur-xl
            "
          />

          {/* Panel */}

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
              damping: 26,
              stiffness: 240,
            }}
            className="
              absolute

              top-20
              right-4
              bottom-4

              w-[88%]
              max-w-[370px]

              overflow-hidden

              rounded-[30px]

              border
              border-white/10

              bg-slate-950/90

              backdrop-blur-2xl

              shadow-[0_25px_80px_rgba(0,0,0,0.45)]
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none

                absolute

                -top-24
                right-0

                h-64
                w-64

                rounded-full

                bg-cyan-400/15

                blur-[100px]
              "
            />

            <div
              className="
                pointer-events-none

                absolute

                -bottom-24
                -left-10

                h-64
                w-64

                rounded-full

                bg-violet-500/10

                blur-[100px]
              "
            />

            {/* Header */}

            <div
              className="
                relative

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
                  <Sparkles size={14} className="text-cyan-400" />

                  <span
                    className="
                      text-[11px]

                      uppercase

                      tracking-[0.25em]

                      text-cyan-300
                    "
                  >
                    Navigation
                  </span>
                </div>

                <h2
                  className="
                    mt-2

                    text-2xl

                    font-black

                    text-white
                  "
                >
                  Kartik.AI
                </h2>
              </div>

              <button
                onClick={onClose}
                aria-label="Close Menu"
                className="
                  flex

                  h-10
                  w-10

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-white/10

                  bg-white/5

                  text-slate-400

                  transition-all
                  duration-300

                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:text-white

                  active:scale-95
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* Navigation */}

            <div
              className="
                relative

                flex-1

                overflow-y-auto

                px-7
                py-8
              "
            >
              <NavLinks mobile onLinkClick={onClose} />
            </div>

            {/* Footer */}

            <div
              className="
                border-t
                border-white/10

                bg-white/[0.02]

                p-6
              "
            >
              <ResumeButton />
            </div>
          </motion.aside>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
