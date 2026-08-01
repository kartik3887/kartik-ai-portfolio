import { motion } from "framer-motion";

import { UserRound, FolderKanban, Code2, Briefcase } from "lucide-react";

const PortfolioProgress = ({ stats = {} }) => {
  /*
  =========================================
  Safe Stats
  =========================================
  */

  const totalProjects = Number(stats.totalProjects || 0);

  const publishedProjects = Number(stats.publishedProjects || 0);

  const totalSkills = Number(stats.totalSkills || 0);

  const publishedSkills = Number(stats.publishedSkills || 0);

  const totalExperience = Number(stats.totalExperience || 0);

  const publishedExperience = Number(stats.publishedExperience || 0);

  /*
  =========================================
  Percentage Helper
  =========================================
  */

  const calculatePercentage = (published, total) => {
    if (!total) return 0;

    return Math.min(Math.round((published / total) * 100), 100);
  };

  /*
  =========================================
  Progress Data
  =========================================
  */

  const progressData = [
    {
      title: "Profile Completion",
      value: 85,
      icon: UserRound,
    },

    {
      title: "Projects Published",
      value: calculatePercentage(publishedProjects, totalProjects),
      icon: FolderKanban,
    },

    {
      title: "Skills Published",
      value: calculatePercentage(publishedSkills, totalSkills),
      icon: Code2,
    },

    {
      title: "Experience Published",
      value: calculatePercentage(publishedExperience, totalExperience),
      icon: Briefcase,
    },
  ];

  return (
    <div className="space-y-5">
      {progressData.map((item, index) => {
        const Icon = item.icon;

        return (
          <div key={item.title}>
            {/* Header */}

            <div
              className="
                mb-2

                flex
                items-center
                justify-between
              "
            >
              <div
                className="
                  flex
                  items-center
                  gap-2
                "
              >
                <div
                  className="
                    rounded-lg

                    bg-blue-500/20

                    p-1.5

                    text-blue-400
                  "
                >
                  <Icon size={15} />
                </div>

                <span
                  className="
                    text-sm

                    text-gray-300
                  "
                >
                  {item.title}
                </span>
              </div>

              <span
                className="
                  text-sm

                  font-semibold

                  text-white
                "
              >
                {item.value}%
              </span>
            </div>

            {/* Progress Bar */}

            <div
              className="
                h-2

                overflow-hidden

                rounded-full

                bg-white/10
              "
            >
              <motion.div
                initial={{
                  width: 0,
                }}
                animate={{
                  width: `${item.value}%`,
                }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: "easeOut",
                }}
                className="
                  h-full

                  rounded-full

                  bg-blue-500
                "
              />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default PortfolioProgress;
