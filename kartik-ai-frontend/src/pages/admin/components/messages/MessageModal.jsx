import { AnimatePresence, motion } from "framer-motion";
import { X, User, Mail, Calendar, FileText, Reply } from "lucide-react";

const MessageModal = ({ open, setOpen, message, loading = false }) => {
  if (!message) return null;

  const formatDate = (date) => {
    if (!date) return "-";

    return new Date(date).toLocaleString("en-IN", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

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

            p-3

            backdrop-blur-md

            lg:pl-72
          "
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none

              absolute

              h-80
              w-80

              rounded-full

              bg-cyan-500/20

              blur-[120px]
            "
          />

          {/* Modal */}

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
              w-full
              max-w-3xl
              flex-col

              max-h-[82vh]

              overflow-hidden

              rounded-2xl

              border
              border-white/10

              bg-[#080d1a]/95

              shadow-2xl

              backdrop-blur-xl
            "
          >
            {/* HEADER */}

            <div
              className="
                flex

                items-center
                justify-between

                border-b
                border-white/10

                bg-[#080d1a]/90

                px-4
                py-3
              "
            >
              <div>
                <p
                  className="
                    text-[10px]

                    uppercase

                    tracking-[0.3em]

                    text-cyan-400
                  "
                >
                  CONTACT CMS
                </p>

                <h2
                  className="
                    mt-1

                    text-lg

                    font-bold

                    text-white
                  "
                >
                  Message Details
                </h2>
              </div>

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  flex

                  h-9
                  w-9

                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-white/10

                  bg-white/5

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
              <div className="space-y-4">
                {/* Sender + Email */}

                <div className="grid gap-4 md:grid-cols-2">
                  {/* Sender */}

                  <div
                    className="
                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[0.03]

                      p-5
                    "
                  >
                    <div className="mb-2 flex items-center gap-2 text-cyan-400">
                      <User size={18} />

                      <span className="font-medium">Sender</span>
                    </div>

                    <p className="text-lg font-semibold text-white">
                      {message.name || "-"}
                    </p>
                  </div>

                  {/* Email */}

                  <div
                    className="
                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[0.03]

                      p-5
                    "
                  >
                    <div className="mb-2 flex items-center gap-2 text-cyan-400">
                      <Mail size={18} />

                      <span className="font-medium">Email</span>
                    </div>

                    <p className="break-all text-white">
                      {message.email || "-"}
                    </p>
                  </div>
                </div>

                {/* Status + Date */}

                <div className="grid gap-4 md:grid-cols-2">
                  {/* Status */}

                  <div
                    className="
                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[0.03]

                      p-5
                    "
                  >
                    <div className="mb-3 flex items-center gap-2 text-cyan-400">
                      <FileText size={18} />

                      <span className="font-medium">Status</span>
                    </div>

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
                  </div>

                  {/* Date */}

                  <div
                    className="
                      rounded-2xl

                      border
                      border-white/10

                      bg-white/[0.03]

                      p-5
                    "
                  >
                    <div className="mb-2 flex items-center gap-2 text-cyan-400">
                      <Calendar size={18} />

                      <span className="font-medium">Date</span>
                    </div>

                    <p className="text-white">
                      {formatDate(message.createdAt)}
                    </p>
                  </div>
                </div>

                {/* Message */}

                <div
                  className="
                    rounded-2xl

                    border
                    border-white/10

                    bg-white/[0.03]

                    p-5
                  "
                >
                  <h3 className="mb-4 text-lg font-semibold text-white">
                    Message
                  </h3>

                  <p
                    className="
                      whitespace-pre-line

                      leading-7

                      text-zinc-300
                    "
                  >
                    {message.message || "-"}
                  </p>
                </div>
              </div>
            </div>

            {/* FOOTER */}

            <div
              className="
                flex

                flex-col-reverse
                gap-3

                border-t
                border-white/10

                bg-[#080d1a]/90

                p-4

                sm:flex-row
                sm:justify-end
              "
            >
              {/* Close */}

              <button
                type="button"
                onClick={() => setOpen(false)}
                className="
                  flex

                  h-11

                  items-center
                  justify-center

                  rounded-xl

                  border
                  border-white/10

                  px-6

                  text-white

                  transition

                  hover:bg-white/5
                "
              >
                Close
              </button>

              {/* Reply */}

              <a
                href={`mailto:${message.email}?subject=Re: Contact Message`}
                className="
                  flex

                  h-11

                  items-center
                  justify-center

                  gap-2

                  rounded-xl

                  bg-cyan-500

                  px-6

                  font-semibold

                  text-black

                  transition

                  hover:bg-cyan-400
                "
              >
                <Reply size={18} />
                Reply
              </a>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MessageModal;
