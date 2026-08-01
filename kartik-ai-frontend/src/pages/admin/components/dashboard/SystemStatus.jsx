import { Server, Database, Cloud, Monitor } from "lucide-react";

import { motion } from "framer-motion";

const SystemStatus = () => {
  const systems = [
    {
      name: "Backend API",
      status: "Online",
      icon: Server,
    },

    {
      name: "MongoDB Database",
      status: "Connected",
      icon: Database,
    },

    {
      name: "Cloudinary Storage",
      status: "Active",
      icon: Cloud,
    },

    {
      name: "Frontend",
      status: "Running",
      icon: Monitor,
    },
  ];

  return (
    <div
      className="
      grid

      grid-cols-1

      gap-3
      "
    >
      {systems.map((item, index) => {
        const Icon = item.icon;

        return (
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              x: 10,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
            className="
              flex

              items-center

              justify-between

              p-4

              rounded-xl

              bg-white/5

              border

              border-white/10

              hover:border-green-500/30

              transition
              "
          >
            <div
              className="
                flex

                items-center

                gap-3
                "
            >
              <div
                className="
                  p-2

                  rounded-lg

                  bg-green-500/20

                  text-green-400
                  "
              >
                <Icon size={17} />
              </div>

              <div>
                <h3
                  className="
                    text-sm

                    font-medium

                    text-white
                    "
                >
                  {item.name}
                </h3>

                <p
                  className="
                    text-xs

                    text-gray-400

                    mt-1
                    "
                >
                  System Service
                </p>
              </div>
            </div>

            <div
              className="
                flex

                items-center

                gap-2
                "
            >
              <span
                className="
                  w-2

                  h-2

                  rounded-full

                  bg-green-400

                  animate-pulse
                  "
              />

              <span
                className="
                  text-xs

                  text-green-400

                  font-medium
                  "
              >
                {item.status}
              </span>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default SystemStatus;
