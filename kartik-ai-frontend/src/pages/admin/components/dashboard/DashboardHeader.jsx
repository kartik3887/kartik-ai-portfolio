import { motion } from "framer-motion";
import { Activity, RefreshCw } from "lucide-react";

const DashboardHeader = ({ onRefresh }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: -10,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      transition={{
        duration: 0.3,
      }}
      className="
      relative

      flex
      flex-col
      sm:flex-row

      sm:items-center
      sm:justify-between

      gap-4

      p-5

      rounded-2xl

      bg-white/5

      backdrop-blur-xl

      border
      border-white/10
       hover:border-blue-500/40

      hover:shadow-lg

      hover:shadow-blue-500/10

      transition
      "
    >
      <div>
        <div
          className="
          flex
          items-center
          gap-2

          mb-2
          "
        >
          <div
            className="
            p-2

            rounded-lg

            bg-blue-500/20

            text-blue-400
            "
          >
            <Activity size={17} />
          </div>

          <span
            className="
            text-[11px]

            font-medium

            tracking-wider

            text-blue-400
            "
          >
            AI COMMAND CENTER
          </span>
        </div>

        <h1
          className="
          text-xl
          sm:text-2xl

          font-bold

          text-white
          "
        >
          Dashboard
        </h1>

        <p
          className="
          text-xs

          text-gray-400

          mt-1
          "
        >
          Welcome back, Kartik 👋 Manage your AI portfolio ecosystem.
        </p>
      </div>

      <button
        onClick={onRefresh}
        className="
        flex
        items-center
        justify-center

        gap-2

        px-4
        py-2

        rounded-lg

        bg-blue-600/20

        border
        border-blue-500/30

        text-blue-300

        text-sm

        hover:bg-blue-600

        hover:text-white

        transition
        "
      >
        <RefreshCw size={15} />
        Refresh
      </button>
    </motion.div>
  );
};

export default DashboardHeader;
