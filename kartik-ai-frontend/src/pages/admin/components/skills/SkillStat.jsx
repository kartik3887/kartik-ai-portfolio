import { motion } from "framer-motion";

const SkillStat = ({
  title,
  value,
  icon,
  color = "blue",
}) => {
  const styles = {
    blue: {
      bg: "bg-blue-500/10",
      border: "border-blue-400/20",
      text: "text-blue-400",
    },

    green: {
      bg: "bg-green-500/10",
      border: "border-green-400/20",
      text: "text-green-400",
    },

    purple: {
      bg: "bg-purple-500/10",
      border: "border-purple-400/20",
      text: "text-purple-400",
    },

    yellow: {
      bg: "bg-yellow-500/10",
      border: "border-yellow-400/20",
      text: "text-yellow-400",
    },
  };

  const style = styles[color];

  return (
    <motion.div
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      rounded-2xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-xl
      p-4
      "
    >
      <div
        className="
        flex
        items-center
        justify-between
        "
      >
        <div>
          <p
            className="
            text-[11px]
            uppercase
            tracking-[0.18em]
            text-gray-400
            "
          >
            {title}
          </p>

          <h2
            className="
            mt-2
            text-3xl
            font-bold
            text-white
            "
          >
            {value}
          </h2>
        </div>

        <div
          className={`
          h-11
          w-11
          rounded-xl
          flex
          items-center
          justify-center
          border
          ${style.bg}
          ${style.border}
          ${style.text}
          `}
        >
          {icon}
        </div>
      </div>
    </motion.div>
  );
};

export default SkillStat;