import {
  FolderKanban,
  Code2,
  Briefcase,
  MessageSquare,
  Star,
  Mail,
} from "lucide-react";

import StatsCard from "../StatsCard";

const StatsGrid = ({ stats = {} }) => {
  const statsData = [
    {
      title: "Projects",
      value: stats.totalProjects ?? 0,
      icon: FolderKanban,
    },

    {
      title: "Skills",
      value: stats.totalSkills ?? 0,
      icon: Code2,
    },

    {
      title: "Experience",
      value: stats.totalExperience ?? 0,
      icon: Briefcase,
    },

    {
      title: "Messages",
      value: stats.totalMessages ?? 0,
      icon: MessageSquare,
    },

    {
      title: "Featured Projects",
      value: stats.featuredProjects ?? 0,
      icon: Star,
    },

    {
      title: "Unread Messages",
      value: stats.unreadMessages ?? 0,
      icon: Mail,
    },
  ];

  return (
    <div
      className="
        grid
    grid-cols-1
    gap-4

    sm:grid-cols-2

    lg:grid-cols-4
      "
    >
      {statsData.map((item) => (
        <StatsCard
          key={item.title}
          title={item.title}
          value={item.value}
          icon={item.icon}
        />
      ))}
    </div>
  );
};

export default StatsGrid;