import { useEffect, useState } from "react";

import {
  RefreshCw,
  Activity,
  Sparkles,
  FolderKanban,
  Code2,
  Briefcase,
  MessageSquare,
  Star,
  Mail,
} from "lucide-react";

import { motion } from "framer-motion";

import StatsCard from "./components/StatsCard";

import { getDashboardStats } from "@/api/dashboard.api";

const Dashboard = () => {
  const [stats, setStats] = useState({
    totalProjects: 0,
    totalSkills: 0,
    totalExperience: 0,
    totalMessages: 0,
    featuredProjects: 0,
    unreadMessages: 0,
  });

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  useEffect(() => {
    loadDashboard();
  }, []);

  const loadDashboard = async () => {
    try {
      setLoading(true);

      setError("");

      const response = await getDashboardStats();

      if (response.success) {
        setStats(response.stats);
      }
    } catch (error) {
      console.error(error);

      setError(error.response?.data?.message || "Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
        className="
        min-h-[60vh]

        flex
        items-center
        justify-center
        "
      >
        <div
          className="
          flex
          items-center
          gap-2

          text-sm
          text-gray-400
          "
        >
          <Sparkles size={18} className="animate-pulse" />
          Loading AI Dashboard...
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div
        className="
        min-h-[60vh]

        flex
        flex-col
        items-center
        justify-center

        gap-4
        "
      >
        <p className="text-red-400 text-sm">{error}</p>

        <button
          onClick={loadDashboard}
          className="
          flex
          items-center
          gap-2

          px-4
          py-2

          rounded-lg

          bg-blue-600

          text-white

          text-sm

          hover:bg-blue-700

          transition
          "
        >
          <RefreshCw size={15} />
          Retry
        </button>
      </div>
    );
  }

  return (
    <div
      className="
      relative

      space-y-5

      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute

        -top-20
        -right-20

        w-64
        h-64

        bg-blue-600/10

        blur-[90px]

        rounded-full
        "
      />

      <div
        className="
        absolute

        -bottom-20
        -left-20

        w-64
        h-64

        bg-purple-600/10

        blur-[90px]

        rounded-full
        "
      />

      {/* Header */}

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

        p-4

        rounded-2xl

        bg-white/5

        backdrop-blur-xl

        border
        border-white/10
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

              text-blue-400

              font-medium

              tracking-wider
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
          onClick={loadDashboard}
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

      {/* Stats */}

      <div
        className="
        relative

        grid

        grid-cols-1

        sm:grid-cols-2

        xl:grid-cols-3

        gap-4
        "
      >
        <StatsCard
          title="Projects"
          value={stats.totalProjects}
          icon={FolderKanban}
        />

        <StatsCard title="Skills" value={stats.totalSkills} icon={Code2} />

        <StatsCard
          title="Experience"
          value={stats.totalExperience}
          icon={Briefcase}
        />

        <StatsCard
          title="Messages"
          value={stats.totalMessages}
          icon={MessageSquare}
        />

        <StatsCard
          title="Featured Projects"
          value={stats.featuredProjects}
          icon={Star}
        />

        <StatsCard
          title="Unread Messages"
          value={stats.unreadMessages}
          icon={Mail}
        />
      </div>
    </div>
  );
};

export default Dashboard;
