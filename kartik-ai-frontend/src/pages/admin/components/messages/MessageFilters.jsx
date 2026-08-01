import { motion } from "framer-motion";
import { Inbox, Mail, MailOpen } from "lucide-react";

const MessageFilters = ({
  activeFilter,
  onFilterChange,
  total,
  unread,
  read,
}) => {
  const filters = [
    {
      id: "all",
      label: "All",
      icon: Inbox,
      count: total,
    },
    {
      id: "unread",
      label: "Unread",
      icon: Mail,
      count: unread,
    },
    {
      id: "read",
      label: "Read",
      icon: MailOpen,
      count: read,
    },
  ];

  return (
    <div className="flex flex-wrap gap-3">
      {filters.map((filter) => {
        const Icon = filter.icon;

        const active = activeFilter === filter.id;

        return (
          <motion.button
            key={filter.id}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => onFilterChange(filter.id)}
            className={`
              relative
              flex
              items-center
              gap-2
              rounded-xl
              border
              px-5
              py-2.5
              text-sm
              font-medium
              transition-all
              ${
                active
                  ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                  : "border-white/10 bg-zinc-900/60 text-zinc-300 hover:border-cyan-500/40 hover:bg-zinc-800"
              }
            `}
          >
            {active && (
              <motion.div
                layoutId="messageFilter"
                className="absolute inset-0 rounded-xl border border-cyan-500/30"
              />
            )}

            <Icon size={17} />

            <span>{filter.label}</span>

            <span className="rounded-full bg-white/10 px-2 py-0.5 text-xs">
              {filter.count}
            </span>
          </motion.button>
        );
      })}
    </div>
  );
};

export default MessageFilters;