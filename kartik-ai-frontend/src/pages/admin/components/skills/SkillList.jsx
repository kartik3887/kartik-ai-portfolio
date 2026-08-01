import { motion } from "framer-motion";
import SkillCard from "./SkillCard";

const SkillList = ({
  skills = [],
  loading = false,
  onEdit,
  onDelete,
  onPublish,
}) => {
  if (loading) {
    return (
      <div
        className="
        grid
        grid-cols-1
        md:grid-cols-2
        xl:grid-cols-3
        gap-4
        "
      >
        {Array.from({ length: 6 }).map((_, index) => (
          <div
            key={index}
            className="
            h-[230px]
            rounded-2xl
            border
            border-white/10
            bg-white/5
            animate-pulse
            "
          />
        ))}
      </div>
    );
  }

  if (!skills.length) {
    return (
      <div
        className="
        flex
        flex-col
        items-center
        justify-center
        py-16
        text-center
        text-gray-400
        "
      >
        <div
          className="
          w-14
          h-14
          rounded-xl
          flex
          items-center
          justify-center
          bg-white/5
          border
          border-white/10
          text-2xl
          "
        >
          💻
        </div>

        <h3
          className="
          mt-4
          text-lg
          font-semibold
          text-white
          "
        >
          No Skills Found
        </h3>

        <p
          className="
          mt-1
          text-xs
          text-gray-400
          max-w-sm
          "
        >
          Start by adding your first technical skill to your portfolio.
        </p>
      </div>
    );
  }

  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      className="
      grid
      grid-cols-1
      md:grid-cols-2
      xl:grid-cols-3
      gap-4
      "
    >
      {skills.map((skill, index) => (
        <motion.div
          key={skill._id}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.05,
          }}
        >
          <SkillCard
            skill={skill}
            onEdit={onEdit}
            onDelete={onDelete}
            onPublish={onPublish}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default SkillList;