import { AnimatePresence, motion } from "framer-motion";
import {
  AlertTriangle,
  Trash2,
  X,
} from "lucide-react";

const DeleteMessageModal = ({
  open,
  setOpen,
  message,
  loading = false,
  onDelete,
}) => {
  if (!message) return null;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setOpen(false)}
          className="
            fixed
            inset-0
            z-[100]
            flex
            items-center
            justify-center
            bg-black/70
            p-4
            backdrop-blur-sm
          "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.95,
            }}
            transition={{
              duration: 0.25,
            }}
            onClick={(e) => e.stopPropagation()}
            className="
              w-full
              max-w-md
              rounded-3xl
              border
              border-white/10
              bg-zinc-900
              p-8
              shadow-2xl
            "
          >
            <div className="flex justify-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-red-500/10">
                <AlertTriangle className="h-10 w-10 text-red-400" />
              </div>
            </div>

            <h2 className="mt-6 text-center text-2xl font-bold text-white">
              Delete Message?
            </h2>

            <p className="mt-3 text-center text-zinc-400">
              Delete message from
              <span className="font-semibold text-white">
                {" "}
                {message.name}
              </span>
              ?
            </p>

            <div className="mt-8 flex flex-col-reverse gap-3 sm:flex-row">

              <button
                onClick={() => setOpen(false)}
                className="
                  flex
                  h-11
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  text-white
                  transition
                  hover:bg-white/5
                "
              >
                <X size={18} />
                Cancel
              </button>

              <button
                onClick={onDelete}
                disabled={loading}
                className="
                  flex
                  h-11
                  flex-1
                  items-center
                  justify-center
                  gap-2
                  rounded-xl
                  bg-red-500
                  font-semibold
                  text-white
                  transition
                  hover:bg-red-600
                  disabled:opacity-50
                "
              >
                <Trash2 size={18} />

                {loading
                  ? "Deleting..."
                  : "Delete"}
              </button>

            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default DeleteMessageModal;