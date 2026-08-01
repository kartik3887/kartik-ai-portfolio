import { motion } from "framer-motion";
import { Eye, Trash2, Mail, Calendar } from "lucide-react";

import MessageCard from "./MessageCard";

const MessageTable = ({ messages = [], onView, onDelete }) => {
  // Format MongoDB createdAt date for UI
  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleDateString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  // Return Tailwind classes based on message status
  const getStatusStyles = (status) => {
    switch (status) {
      case "unread":
        return "bg-cyan-500/10 text-cyan-400";

      case "read":
        return "bg-green-500/10 text-green-400";

      case "replied":
        return "bg-purple-500/10 text-purple-400";

      default:
        return "bg-zinc-500/10 text-zinc-400";
    }
  };

  // Convert backend status into readable UI text
  const getStatusLabel = (status) => {
    switch (status) {
      case "unread":
        return "Unread";

      case "read":
        return "Read";

      case "replied":
        return "Replied";

      default:
        return "Unknown";
    }
  };

  return (
    <>
      {/* Desktop Table */}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="
          hidden
          overflow-hidden
          rounded-3xl
          border
          border-white/10
          bg-zinc-900/60
          backdrop-blur-xl
          lg:block
        "
      >
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="border-b border-white/10 bg-white/5">
              <tr>
                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">
                  Sender
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">
                  Message
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">
                  Date
                </th>

                <th className="px-6 py-5 text-left text-sm font-semibold text-zinc-300">
                  Status
                </th>

                <th className="px-6 py-5 text-right text-sm font-semibold text-zinc-300">
                  Actions
                </th>
              </tr>
            </thead>

            <tbody>
              {messages.map((message) => (
                <motion.tr
                  key={message._id}
                  whileHover={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                  }}
                  className="border-b border-white/5"
                >
                  {/* Sender */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-4">
                      {/* Avatar */}

                      <div
                        className="
                          flex
                          h-12
                          w-12
                          shrink-0
                          items-center
                          justify-center
                          rounded-full
                          bg-cyan-500/10
                          font-bold
                          text-cyan-400
                        "
                      >
                        {message.name?.charAt(0).toUpperCase() || "?"}
                      </div>

                      {/* Name + Email */}

                      <div className="min-w-0">
                        <h4 className="truncate font-semibold text-white">
                          {message.name || "Unknown"}
                        </h4>

                        <div className="mt-1 flex items-center gap-2 text-sm text-zinc-400">
                          <Mail size={14} className="shrink-0" />

                          <span className="truncate">
                            {message.email || "-"}
                          </span>
                        </div>
                      </div>
                    </div>
                  </td>

                  {/* Message */}

                  <td className="max-w-md px-6 py-5">
                    <p className="line-clamp-2 text-sm text-zinc-300">
                      {message.message || "-"}
                    </p>
                  </td>

                  {/* Date */}

                  <td className="px-6 py-5">
                    <div className="flex items-center gap-2 whitespace-nowrap text-zinc-400">
                      <Calendar size={15} />

                      <span>{formatDate(message.createdAt)}</span>
                    </div>
                  </td>

                  {/* Status */}

                  <td className="px-6 py-5">
                    <span
                      className={`
                        inline-flex
                        rounded-full
                        px-3
                        py-1
                        text-xs
                        font-semibold
                        ${getStatusStyles(message.status)}
                      `}
                    >
                      {getStatusLabel(message.status)}
                    </span>
                  </td>

                  {/* Actions */}

                  <td className="px-6 py-5">
                    <div className="flex justify-end gap-2">
                      {/* View */}

                      <button
                        type="button"
                        onClick={() => onView(message)}
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
                        aria-label="View message"
                      >
                        <Eye size={18} />
                      </button>

                      {/* Delete */}

                      <button
                        type="button"
                        onClick={() => onDelete(message)}
                        className="
                          rounded-xl
                          border
                          border-red-500/20
                          p-2.5
                          text-red-400
                          transition
                          hover:bg-red-500/10
                        "
                        aria-label="Delete message"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Mobile */}

      <div className="space-y-4 lg:hidden">
        {messages.map((message) => (
          <MessageCard
            key={message._id}
            message={message}
            onView={() => onView(message)}
            onDelete={() => onDelete(message)}
          />
        ))}
      </div>
    </>
  );
};

export default MessageTable;
