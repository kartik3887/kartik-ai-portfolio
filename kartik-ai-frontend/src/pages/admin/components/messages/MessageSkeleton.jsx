import { motion } from "framer-motion";

const MessageSkeleton = () => {
  return (
    <>
      {/* Desktop */}

      <div
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
        {[1, 2, 3, 4, 5].map((item) => (
          <motion.div
            key={item}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="flex items-center justify-between border-b border-white/5 p-6"
          >
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-zinc-800" />

              <div>
                <div className="h-4 w-40 rounded bg-zinc-800" />
                <div className="mt-2 h-3 w-52 rounded bg-zinc-800" />
              </div>
            </div>

            <div className="h-4 w-52 rounded bg-zinc-800" />

            <div className="h-4 w-24 rounded bg-zinc-800" />

            <div className="h-7 w-16 rounded-full bg-zinc-800" />

            <div className="flex gap-2">
              <div className="h-10 w-10 rounded-xl bg-zinc-800" />
              <div className="h-10 w-10 rounded-xl bg-zinc-800" />
            </div>
          </motion.div>
        ))}
      </div>

      {/* Mobile */}

      <div className="space-y-4 lg:hidden">
        {[1, 2, 3].map((item) => (
          <motion.div
            key={item}
            animate={{ opacity: [0.4, 1, 0.4] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
            }}
            className="
              rounded-3xl
              border
              border-white/10
              bg-zinc-900/60
              p-5
            "
          >
            <div className="mb-4 h-5 w-40 rounded bg-zinc-800" />

            <div className="mb-3 h-4 w-full rounded bg-zinc-800" />

            <div className="mb-6 h-4 w-2/3 rounded bg-zinc-800" />

            <div className="flex gap-3">
              <div className="h-10 flex-1 rounded-xl bg-zinc-800" />

              <div className="h-10 flex-1 rounded-xl bg-zinc-800" />
            </div>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default MessageSkeleton;