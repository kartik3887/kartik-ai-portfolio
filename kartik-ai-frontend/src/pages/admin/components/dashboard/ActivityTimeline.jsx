import { Plus, Code2, MessageSquare, Rocket, Activity } from "lucide-react";

import { motion } from "framer-motion";

/*
=========================================
Icon Mapping
=========================================
*/

const iconMap = {
  Plus,
  Code2,
  MessageSquare,
  Rocket,
};

/*
=========================================
Activity Timeline
=========================================
*/

const ActivityTimeline = ({ activities = [] }) => {
  return (
    <div
      className="
        relative
        ml-2
        space-y-6
      "
    >
      {activities.length === 0 ? (
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
          No recent activity
        </div>
      ) : (
        activities.map((activity, index) => {
          const Icon = iconMap[activity.icon] || Activity;

          return (
            <motion.div
              key={activity.id || index}
              initial={{
                opacity: 0,
                x: -15,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                delay: index * 0.1,
              }}
              className="
                relative
                flex
                gap-4
              "
            >
              {/* =================================
                  Timeline Line
              ================================= */}

              {index !== activities.length - 1 && (
                <div
                  className="
                    absolute

                    left-4
                    top-8

                    h-full
                    w-px

                    bg-white/10
                  "
                />
              )}

              {/* =================================
                  Icon
              ================================= */}

              <div
                className="
                  relative
                  z-10

                  flex
                  h-8
                  w-8
                  shrink-0

                  items-center
                  justify-center

                  rounded-full

                  border
                  border-blue-500/20

                  bg-blue-500/20

                  text-blue-400
                "
              >
                <Icon size={15} />
              </div>

              {/* =================================
                  Content
              ================================= */}

              <div className="min-w-0 flex-1">
                <h3
                  className="
                    text-sm
                    font-semibold
                    text-white
                  "
                >
                  {activity.title}
                </h3>

                <p
                  className="
                    mt-1

                    text-xs

                    text-gray-400
                  "
                >
                  {activity.description}
                </p>

                <span
                  className="
                    mt-2
                    block

                    text-[11px]

                    text-blue-400
                  "
                >
                  {activity.time
                    ? new Date(activity.time).toLocaleString()
                    : "Unknown time"}
                </span>
              </div>
            </motion.div>
          );
        })
      )}
    </div>
  );
};

export default ActivityTimeline;
