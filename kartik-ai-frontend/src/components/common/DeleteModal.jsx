import { motion, AnimatePresence } from "framer-motion";
import { TriangleAlert } from "lucide-react";

const DeleteModal = ({
  open,
  title = "Delete Item",
  message = "Are you sure you want to delete this item?",
  loading,
  onClose,
  onConfirm,
}) => {
  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          <motion.div
            initial={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              scale: 0.9,
              y: 20,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              fixed
              left-1/2
              top-1/2
              -translate-x-1/2
              -translate-y-1/2
              z-50
              w-full
              max-w-md
              rounded-2xl
              border
              border-white/10
              bg-[#111]
              p-8
              shadow-2xl
            "
          >
            <div className="flex flex-col items-center text-center">
              <div
                className="
                  mb-5
                  flex
                  h-16
                  w-16
                  items-center
                  justify-center
                  rounded-full
                  bg-red-500/20
                "
              >
                <TriangleAlert
                  size={32}
                  className="text-red-400"
                />
              </div>

              <h2 className="text-2xl font-bold text-white">
                {title}
              </h2>

              <p className="mt-3 text-gray-400">
                {message}
              </p>

              <div className="mt-8 flex w-full gap-4">
                <button
                  onClick={onClose}
                  className="
                    flex-1
                    rounded-xl
                    border
                    border-white/10
                    py-3
                    text-white
                    hover:bg-white/10
                  "
                >
                  Cancel
                </button>

                <button
                  onClick={onConfirm}
                  disabled={loading}
                  className="
                    flex-1
                    rounded-xl
                    bg-red-600
                    py-3
                    text-white
                    hover:bg-red-700
                    disabled:opacity-50
                  "
                >
                  {loading
                    ? "Deleting..."
                    : "Delete"}
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default DeleteModal;