import { useEffect, useState } from "react";

import { Sparkles } from "lucide-react";

import DashboardHeader from "./components/dashboard/DashboardHeader";
import StatsGrid from "./components/dashboard/StatsGrid";

import QuickActions from "./components/dashboard/QuickActions";
import PortfolioProgress from "./components/dashboard/PortfolioProgress";
import RecentMessages from "./components/dashboard/RecentMessages";
import RecentProjects from "./components/dashboard/RecentProjects";
import ActivityTimeline from "./components/dashboard/ActivityTimeline";
import SystemStatus from "./components/dashboard/SystemStatus";
import PortfolioPreview from "./components/dashboard/PortfolioPreview";

import { getDashboardStats } from "@/api/dashboard.api";

const Dashboard = () => {
  /*
  =========================================
  Dashboard State
  =========================================
  */

  const [stats, setStats] = useState({
    totalProjects: 0,
    totalSkills: 0,
    totalExperience: 0,
    totalMessages: 0,
    publishedProjects: 0,
    featuredProjects: 0,
    publishedSkills: 0,
    publishedExperience: 0,
    unreadMessages: 0,
  });

  const [recentMessages, setRecentMessages] = useState([]);

  const [recentProjects, setRecentProjects] = useState([]);

  const [activities, setActivities] = useState([]);

  const [loading, setLoading] = useState(true);

  const [error, setError] = useState("");

  /*
  =========================================
  Load Dashboard
  =========================================
  */

  const loadDashboard = async () => {
    try {
      setLoading(true);

      setError("");

      const response = await getDashboardStats();

      /*
      ================================
      API Response
      ================================

      response.data = {
        stats,
        recentMessages,
        recentProjects,
        activities
      }
      */

      if (response.success) {
        const dashboard = response.data;

        setStats(
          dashboard.stats || {
            totalProjects: 0,
            totalSkills: 0,
            totalExperience: 0,
            totalMessages: 0,
            publishedProjects: 0,
            featuredProjects: 0,
            publishedSkills: 0,
            publishedExperience: 0,
            unreadMessages: 0,
          },
        );

        setRecentMessages(dashboard.recentMessages || []);

        setRecentProjects(dashboard.recentProjects || []);

        setActivities(dashboard.activities || []);
      }
    } catch (error) {
      console.error("Dashboard Load Error:", error);

      setError(error.response?.data?.message || "Failed to load dashboard");
    } finally {
      setLoading(false);
    }
  };

  /*
  =========================================
  Initial Load
  =========================================
  */

  useEffect(() => {
    loadDashboard();
  }, []);

  /*
  =========================================
  Loading State
  =========================================
  */

  if (loading) {
    return (
      <div
        className="
          min-h-[60vh]

          flex
          items-center
          justify-center

          text-gray-400
        "
      >
        <Sparkles
          size={18}
          className="
            mr-2
            animate-pulse
            text-blue-400
          "
        />
        Loading Dashboard...
      </div>
    );
  }

  /*
  =========================================
  Error State
  =========================================
  */

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

          text-red-400
        "
      >
        <p>{error}</p>

        <button
          onClick={loadDashboard}
          className="
            rounded-lg

            border
            border-red-500/30

            bg-red-500/10

            px-4
            py-2

            text-sm

            text-red-300

            transition

            hover:bg-red-500/20
          "
        >
          Try Again
        </button>
      </div>
    );
  }

  /*
  =========================================
  Dashboard UI
  =========================================
  */

  return (
    <div
      className="
        relative

        space-y-6

        overflow-hidden
      "
    >
      {/* =================================
          Background Glow
      ================================= */}

      <div
        className="
          pointer-events-none

          absolute

          -right-20
          -top-20

          h-72
          w-72

          rounded-full

          bg-blue-500/10

          blur-[100px]
        "
      />

      <div
        className="
          pointer-events-none

          absolute

          -bottom-20
          -left-20

          h-72
          w-72

          rounded-full

          bg-purple-500/10

          blur-[100px]
        "
      />

      {/* =================================
          Header
      ================================= */}

      <DashboardHeader onRefresh={loadDashboard} />

      {/* =================================
          Stats
      ================================= */}

      <StatsGrid stats={stats} />

      {/* =================================
          Quick Actions
      ================================= */}

      <QuickActions />

      {/* =================================
          Portfolio Progress
      ================================= */}

      <PortfolioProgress stats={stats} />

      {/* =================================
          Recent Data
      ================================= */}

      <div
        className="
          grid

          gap-6

          lg:grid-cols-2
        "
      >
        <RecentMessages messages={recentMessages} />

        <RecentProjects projects={recentProjects} />
      </div>

      {/* =================================
          Activity + System
      ================================= */}

      <div
        className="
          grid

          gap-6

          lg:grid-cols-2
        "
      >
        <ActivityTimeline activities={activities} />

        <SystemStatus />
      </div>

      {/* =================================
          Portfolio Preview
      ================================= */}

      <PortfolioPreview />
    </div>
  );
};

export default Dashboard;
