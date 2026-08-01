import {
  SquarePen,
  Trash,
  Eye,
  EyeOff,
  Code2,
} from "lucide-react";

import { motion } from "framer-motion";

const SkillCard = ({
  skill,
  onEdit,
  onDelete,
  onPublish,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-4
      "
    >
      {/* Glow */}

      <div
        className="
        absolute
        -top-10
        -right-10
        w-32
        h-32
        rounded-full
        blur-3xl
        opacity-0
        group-hover:opacity-100
        transition
        "
        style={{
          background: skill.color,
        }}
      />

      <div className="relative">

        {/* Header */}

        <div className="flex items-start justify-between">

          <div className="flex items-center gap-3">

            <div
              className="
              w-14
              h-14
              rounded-xl
              overflow-hidden
              border
              border-white/10
              bg-white/5
              flex
              items-center
              justify-center
              "
            >
              {skill.icon?.url ? (
                <img
                  src={skill.icon.url}
                  alt={skill.name}
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />
              ) : (
                <Code2
                  size={26}
                  style={{
                    color: skill.color,
                  }}
                />
              )}
            </div>

            <div>

              <h3
                className="
                text-lg
                font-semibold
                text-white
                "
              >
                {skill.name}
              </h3>

              <p
                className="
                text-xs
                text-gray-400
                mt-1
                "
              >
                {skill.category}
              </p>

            </div>

          </div>

          <span
            className={`
            px-2.5
            py-1
            rounded-full
            text-[11px]
            border
            ${
              skill.isPublished
                ? "bg-green-500/20 border-green-400/20 text-green-300"
                : "bg-yellow-500/20 border-yellow-400/20 text-yellow-300"
            }
            `}
          >
            {skill.isPublished ? "Published" : "Draft"}
          </span>

        </div>

        {/* Progress */}

        <div className="mt-5">

          <div className="flex justify-between mb-2">

            <span className="text-xs text-gray-400">
              Skill Level
            </span>

            <span
              className="text-sm font-semibold"
              style={{
                color: skill.color,
              }}
            >
              {skill.level}%
            </span>

          </div>

          <div
            className="
            h-2
            rounded-full
            bg-white/10
            overflow-hidden
            "
          >
            <motion.div
              initial={{
                width: 0,
              }}
              animate={{
                width: `${skill.level}%`,
              }}
              transition={{
                duration: 0.8,
              }}
              className="h-full rounded-full"
              style={{
                background: skill.color,
              }}
            />
          </div>

        </div>

        {/* Footer */}

        <div
          className="
          flex
          items-center
          justify-between
          mt-5
          pt-3
          border-t
          border-white/10
          "
        >

          <span
            className="
            text-xs
            text-gray-500
            "
          >
            Order #{skill.order}
          </span>

          <div className="flex gap-2">

            <button
              onClick={() => onPublish(skill._id)}
              className="
              p-2
              rounded-lg
              bg-green-500/10
              border
              border-green-400/20
              "
            >
              {skill.isPublished ? (
                <Eye
                  size={15}
                  className="text-green-400"
                />
              ) : (
                <EyeOff
                  size={15}
                  className="text-gray-500"
                />
              )}
            </button>

            <button
              onClick={() => onEdit(skill)}
              className="
              p-2
              rounded-lg
              bg-blue-500/10
              border
              border-blue-400/20
              "
            >
              <SquarePen
                size={15}
                className="text-blue-400"
              />
            </button>

            <button
              onClick={() => onDelete(skill._id)}
              className="
              p-2
              rounded-lg
              bg-red-500/10
              border
              border-red-400/20
              "
            >
              <Trash
                size={15}
                className="text-red-400"
              />
            </button>

          </div>

        </div>

      </div>
    </motion.div>
  );
};

export default SkillCard;