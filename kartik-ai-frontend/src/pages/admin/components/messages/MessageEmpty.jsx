import { motion } from "framer-motion";
import { Inbox } from "lucide-react";

const MessageEmpty = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.95,
      }}
      animate={{
        opacity: 1,
        scale: 1,
      }}
      className="
        rounded-3xl
        border
        border-dashed
        border-white/10
        bg-zinc-900/60
        px-6
        py-20
        text-center
        backdrop-blur-xl
      "
    >
      <div
        className="
          mx-auto
          flex
          h-24
          w-24
          items-center
          justify-center
          rounded-full
          bg-cyan-500/10
        "
      >
        <Inbox
          size={42}
          className="text-cyan-400"
        />
      </div>

      <h2 className="mt-6 text-3xl font-bold text-white">
        No Messages Found
      </h2>

      <p className="mx-auto mt-3 max-w-md text-zinc-400">
        Contact form submissions will appear here.
        Once visitors send you a message, you'll
        be able to manage them from this dashboard.
      </p>
    </motion.div>
  );
};

export default MessageEmpty;