import {
  Plus,
  Code2,
  Briefcase,
  MessageSquare,
  ExternalLink,
} from "lucide-react";

import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const QuickActions = () => {
  const navigate = useNavigate();

  const actions = [
    {
      title: "Add Project",
      description: "Create new portfolio project",
      icon: Plus,
      path: "/admin/projects",
    },

    {
      title: "Add Skill",
      description: "Update your skill stack",
      icon: Code2,
      path: "/admin/skills",
    },

    {
      title: "Add Experience",
      description: "Add work experience",
      icon: Briefcase,
      path: "/admin/experience",
    },

    {
      title: "Messages",
      description: "Manage contact messages",
      icon: MessageSquare,
      path: "/admin/messages",
    },

    {
      title: "View Portfolio",
      description: "Open live portfolio",
      icon: ExternalLink,
      path: "/",
      external: true,
    },
  ];

  const handleAction = (action) => {
    if (action.external) {
      window.open(action.path, "_blank", "noopener,noreferrer");
      return;
    }

    navigate(action.path);
  };

  return (
    <div
      className="
      grid

      grid-cols-1

      sm:grid-cols-2

      lg:grid-cols-5

      gap-4
      "
    >
      {actions.map((action, index) => {
        const Icon = action.icon;

        return (
          <motion.button
            key={action.title}
            type="button"
            onClick={() => handleAction(action)}
            whileHover={{
              y: -4,
            }}
            whileTap={{
              scale: 0.98,
            }}
            transition={{
              duration: 0.2,
            }}
            className="
              text-left

              p-4

              rounded-xl

              bg-white/5

              border
              border-white/10

              hover:border-blue-500/40

              hover:bg-white/10

              transition

              group

              cursor-pointer
              "
          >
            <div
              className="
                flex

                items-center

                justify-between

                mb-4
                "
            >
              <div
                className="
                  p-2

                  rounded-lg

                  bg-blue-500/20

                  text-blue-400

                  group-hover:scale-110

                  transition
                  "
              >
                <Icon size={18} />
              </div>
            </div>

            <h3
              className="
                text-sm

                font-semibold

                text-white
                "
            >
              {action.title}
            </h3>

            <p
              className="
                text-xs

                text-gray-400

                mt-1
                "
            >
              {action.description}
            </p>
          </motion.button>
        );
      })}
    </div>
  );
};

export default QuickActions;
