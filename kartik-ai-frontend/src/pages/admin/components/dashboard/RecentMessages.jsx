import { Mail, Clock } from "lucide-react";

import { motion } from "framer-motion";

const RecentMessages = ({ messages = [] }) => {
  return (
    <div className="space-y-3">
      {messages.length === 0 ? (
        <div
          className="
            flex
            min-h-32
            items-center
            justify-center

            rounded-xl

            border
            border-white/10

            bg-white/5

            text-sm
            text-gray-400
          "
        >
          No messages yet
        </div>
      ) : (
        messages.map((item, index) => (
          <motion.div
            key={item._id || index}
            initial={{
              opacity: 0,
              x: -10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="
              rounded-xl

              border
              border-white/10

              bg-white/5

              p-4

              transition

              hover:border-blue-500/30
            "
          >
            {/* Top */}

            <div
              className="
                flex
                items-start
                justify-between

                gap-3
              "
            >
              {/* Sender */}

              <div
                className="
                  flex
                  gap-3
                "
              >
                <div
                  className="
                    rounded-lg

                    bg-blue-500/20

                    p-2

                    text-blue-400
                  "
                >
                  <Mail size={16} />
                </div>

                <div>
                  <h3
                    className="
                      text-sm
                      font-semibold
                      text-white
                    "
                  >
                    {item.name}
                  </h3>

                  <p
                    className="
                      text-xs
                      text-gray-400
                    "
                  >
                    {item.email}
                  </p>
                </div>
              </div>

              {/* Status */}

              {item.status === "unread" && (
                <span
                  className="
                    rounded-full

                    bg-blue-500/20

                    px-2
                    py-1

                    text-[10px]

                    text-blue-400
                  "
                >
                  New
                </span>
              )}
            </div>

            {/* Subject */}

            {item.subject && (
              <p
                className="
                  mt-3

                  text-sm
                  font-medium

                  text-gray-200
                "
              >
                {item.subject}
              </p>
            )}

            {/* Message */}

            <p
              className="
                mt-1

                line-clamp-2

                text-sm

                text-gray-400
              "
            >
              {item.message}
            </p>

            {/* Date */}

            <div
              className="
                mt-3

                flex
                items-center
                gap-2

                text-xs
                text-gray-500
              "
            >
              <Clock size={13} />

              {item.createdAt
                ? new Date(item.createdAt).toLocaleString()
                : "Unknown date"}
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default RecentMessages;
