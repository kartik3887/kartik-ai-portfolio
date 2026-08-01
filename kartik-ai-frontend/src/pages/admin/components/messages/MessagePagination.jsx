import { motion } from "framer-motion";
import {
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const MessagePagination = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  if (totalPages <= 1) return null;

  const pages = Array.from(
    { length: totalPages },
    (_, index) => index + 1
  );

  return (
    <div
      className="
        mt-6
        flex
        flex-col
        items-center
        justify-between
        gap-4
        rounded-2xl
        border
        border-white/10
        bg-zinc-900/60
        p-4
        backdrop-blur-xl
        sm:flex-row
      "
    >
      <p className="text-sm text-zinc-400">
        Page{" "}
        <span className="font-semibold text-white">
          {currentPage}
        </span>{" "}
        of{" "}
        <span className="font-semibold text-white">
          {totalPages}
        </span>
      </p>

      <div className="flex items-center gap-2">
        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          disabled={currentPage === 1}
          onClick={() => onPageChange(currentPage - 1)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-zinc-800/60
            text-zinc-300
            transition
            hover:border-cyan-500
            hover:text-cyan-400
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronLeft size={18} />
        </motion.button>

        {pages.map((page) => (
          <motion.button
            key={page}
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onPageChange(page)}
            className={`
              h-10
              w-10
              rounded-xl
              border
              text-sm
              font-medium
              transition
              ${
                currentPage === page
                  ? "border-cyan-500 bg-cyan-500/10 text-cyan-400"
                  : "border-white/10 bg-zinc-800/60 text-zinc-300 hover:border-cyan-500 hover:text-cyan-400"
              }
            `}
          >
            {page}
          </motion.button>
        ))}

        <motion.button
          whileHover={{ y: -2 }}
          whileTap={{ scale: 0.95 }}
          disabled={currentPage === totalPages}
          onClick={() => onPageChange(currentPage + 1)}
          className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-xl
            border
            border-white/10
            bg-zinc-800/60
            text-zinc-300
            transition
            hover:border-cyan-500
            hover:text-cyan-400
            disabled:cursor-not-allowed
            disabled:opacity-40
          "
        >
          <ChevronRight size={18} />
        </motion.button>
      </div>
    </div>
  );
};

export default MessagePagination;