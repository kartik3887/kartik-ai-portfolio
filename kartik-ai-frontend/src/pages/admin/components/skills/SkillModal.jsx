import { useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

const SkillModal = ({ open, title, children, onClose }) => {
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (open) {
      document.addEventListener("keydown", handleEscape);

      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);

      document.body.style.overflow = "auto";
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
          }}
          exit={{
            opacity: 0,
          }}
          onClick={onClose}
          className="
        fixed

        top-16
        bottom-0
        left-0
        right-0

        z-[999]

        flex

        items-center

        justify-center

        md:pl-72

        bg-black/80

        backdrop-blur-md

        p-3
        sm:p-5
        "
        >
          {/* Glow */}

          <div
            className="
          absolute

          w-[500px]
          h-[500px]

          rounded-full

          bg-cyan-500/20

          blur-[140px]

          pointer-events-none
          "
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 30,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
          relative

          flex

          flex-col

          w-full

          max-w-3xl

          h-[calc(100vh-7rem)]

          rounded-3xl

          overflow-hidden

          bg-[#080d1a]/95

          backdrop-blur-2xl

          border

          border-white/10

          shadow-[0_25px_80px_rgba(0,0,0,0.6)]

          "
          >
            {/* HEADER */}

            <div
              className="
            sticky

            top-0

            z-20

            flex

            items-center

            justify-between

            px-5
            sm:px-7

            py-4

            shrink-0

            border-b

            border-white/10

            bg-[#080d1a]/95

            backdrop-blur-xl

            "
            >
              <div>
                <p
                  className="
                text-[11px]

                uppercase

                tracking-[0.35em]

                text-cyan-400

                "
                >
                  AI SKILL MANAGEMENT
                </p>

                <h2
                  className="
                mt-1

                text-xl
                sm:text-2xl

                font-bold

                text-white

                "
                >
                  {title}
                </h2>
              </div>

              <button
                onClick={onClose}
                className="
              w-10
              h-10

              flex
              items-center
              justify-center

              rounded-xl

              bg-white/5

              border

              border-white/10

              text-gray-400

              hover:bg-red-500

              hover:text-white

              hover:rotate-90

              transition-all

              duration-300

              "
              >
                <X size={20} />
              </button>
            </div>

            {/* BODY */}

            <div
              className="
            flex-1

            overflow-y-auto

            px-5
            sm:px-7

            py-5

            scrollbar-thin

            scrollbar-thumb-white/20

            scrollbar-track-transparent

            "
            >
              {children}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SkillModal;
