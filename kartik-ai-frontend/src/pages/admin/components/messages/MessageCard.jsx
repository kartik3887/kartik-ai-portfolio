import { motion } from "framer-motion";
import {
  Mail,
  Calendar,
  Eye,
  Trash2,
  Circle,
} from "lucide-react";

const MessageCard = ({
  message,
  onView,
  onDelete,
}) => {
  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25 }}
      className="
        rounded-3xl
        border
        border-white/10
        bg-zinc-900/60
        p-5
        backdrop-blur-xl
        transition-all
        hover:border-cyan-500/40
        hover:shadow-lg
        hover:shadow-cyan-500/10
      "
    >
      {/* Header */}

      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4">
          <div
            className="
              flex
              h-14
              w-14
              items-center
              justify-center
              rounded-full
              bg-cyan-500/10
              text-lg
              font-bold
              text-cyan-400
            "
          >
            {message?.name?.charAt(0)?.toUpperCase()}
          </div>

          <div>
            <div className="flex items-center gap-2">
              <h3 className="font-semibold text-white">
                {message?.name}
              </h3>

              {!message?.isRead && (
                <Circle
                  size={10}
                  fill="currentColor"
                  className="text-cyan-400"
                />
              )}
            </div>

            <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
              <Mail size={14} />

              <span className="truncate">
                {message?.email}
              </span>
            </div>
          </div>
        </div>

        <span
          className={`
            rounded-full
            px-3
            py-1
            text-xs
            font-medium
            ${
              message?.isRead
                ? "bg-green-500/10 text-green-400"
                : "bg-cyan-500/10 text-cyan-400"
            }
          `}
        >
          {message?.isRead ? "Read" : "New"}
        </span>
      </div>

      {/* Subject */}

      <div className="mt-5">
        <p className="text-xs uppercase tracking-wider text-zinc-500">
          Subject
        </p>

        <p className="mt-1 font-medium text-white">
          {message?.subject}
        </p>
      </div>

      {/* Preview */}

      <div className="mt-4">
        <p className="line-clamp-2 text-sm leading-6 text-zinc-400">
          {message?.message}
        </p>
      </div>

      {/* Footer */}

      <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4">
        <div className="flex items-center gap-2 text-sm text-zinc-500">
          <Calendar size={15} />

          {message?.createdAt}
        </div>

        <div className="flex gap-2">
          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onView}
            className="
              rounded-xl
              border
              border-white/10
              p-2.5
              text-cyan-400
              transition
              hover:border-cyan-500
              hover:bg-cyan-500/10
            "
          >
            <Eye size={18} />
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.95 }}
            onClick={onDelete}
            className="
              rounded-xl
              border
              border-red-500/20
              p-2.5
              text-red-400
              transition
              hover:bg-red-500/10
            "
          >
            <Trash2 size={18} />
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default MessageCard;