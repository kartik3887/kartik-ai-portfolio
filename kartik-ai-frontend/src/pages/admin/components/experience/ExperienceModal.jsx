import { X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

import ExperienceForm from "./ExperienceForm";

const ExperienceModal = ({ open, setOpen, experience, onSubmit, loading }) => {
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
          onClick={() => setOpen(false)}
          className="
          fixed

          top-20
          bottom-0
          left-0
          right-0

          z-[999]

          flex

          items-center

          justify-center

          bg-black/70

          backdrop-blur-md

          p-3

          lg:pl-72
          "
        >
          {/* Glow */}

          <div
            className="
            absolute

            w-80

            h-80

            rounded-full

            bg-blue-500/20

            blur-[120px]

            pointer-events-none
            "
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
              y: 20,
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

            max-h-[82vh]

            rounded-2xl

            overflow-hidden

            border

            border-white/10

            bg-[#080d1a]/95

            backdrop-blur-xl

            shadow-2xl
            "
          >
            {/* HEADER */}

            <div
              className="
              flex

              items-center

              justify-between

              px-4

              py-3

              border-b

              border-white/10

              bg-[#080d1a]/90

              "
            >
              <div>
                <p
                  className="
                  text-[10px]

                  uppercase

                  tracking-[0.3em]

                  text-blue-400
                  "
                >
                  EXPERIENCE CMS
                </p>

                <h2
                  className="
                  mt-1

                  text-lg

                  font-bold

                  text-white
                  "
                >
                  {experience ? "Update Experience" : "Add Experience"}
                </h2>
              </div>

              <button
                onClick={() => setOpen(false)}
                className="
                flex

                h-9

                w-9

                items-center

                justify-center

                rounded-xl

                bg-white/5

                border

                border-white/10

                text-gray-400

                transition

                hover:bg-red-500

                hover:text-white
                "
              >
                <X size={18} />
              </button>
            </div>

            {/* BODY */}

            <div
              className="
              flex-1

              overflow-y-auto

              p-4

              dashboard-scroll
              "
            >
              <ExperienceForm
                experience={experience}
                loading={loading}
                onSubmit={onSubmit}
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ExperienceModal;
