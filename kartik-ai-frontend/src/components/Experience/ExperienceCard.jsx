import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  BriefcaseBusiness,
  CircleCheck,
} from "lucide-react";

const ExperienceCard = ({ experience, index }) => {
  const status = experience.currentlyWorking ? "Current" : "Completed";

  const duration = `${new Date(
    experience.startDate
  ).toLocaleDateString("en-US", {
    month: "short",
    year: "numeric",
  })} - ${
    experience.currentlyWorking
      ? "Present"
      : new Date(experience.endDate).toLocaleDateString("en-US", {
          month: "short",
          year: "numeric",
        })
  }`;

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: "easeOut",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        p-6
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.12)]

        sm:p-7

        lg:p-8
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-44
          w-44
          rounded-full
          bg-cyan-400/15
          blur-[90px]
          transition-all
          duration-500
          group-hover:bg-cyan-400/25
        "
      />

      {/* Top Border */}

      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-full
          bg-gradient-to-r
          from-cyan-400
          via-violet-400
          to-transparent
        "
      />

      <div className="relative">

        {/* Status */}

        <div className="flex items-center justify-between">
          <span
            className={`
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              px-4
              py-1.5
              text-xs
              font-semibold

              ${
                status === "Current"
                  ? "border-emerald-400/20 bg-emerald-400/10 text-emerald-300"
                  : "border-cyan-400/20 bg-cyan-400/10 text-cyan-300"
              }
            `}
          >
            <span className="h-2 w-2 rounded-full bg-current" />
            {status}
          </span>
        </div>

        {/* Role */}

        <h3
          className="
            mt-6
            text-xl
            font-bold
            leading-tight
            text-white

            sm:text-2xl
          "
        >
          {experience.role}
        </h3>

        {/* Company */}

        <div
          className="
            mt-3
            flex
            items-center
            gap-2
            text-lg
            font-semibold
            text-cyan-300
          "
        >
          <BriefcaseBusiness size={18} />

          <span>{experience.company}</span>
        </div>

        {/* Employment Type */}

        <p className="mt-2 text-sm text-slate-400">
          {experience.employmentType}
        </p>

        {/* Meta */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-x-6
            gap-y-3
            text-sm
            text-slate-400
          "
        >
          <div className="flex items-center gap-2">
            <CalendarDays size={16} />
            <span>{duration}</span>
          </div>

          <div className="flex items-center gap-2">
            <MapPin size={16} />
            <span>{experience.location || "Remote"}</span>
          </div>
        </div>

        {/* Description */}

        {experience.description?.length > 0 && (
          <div className="mt-8">
            <h4
              className="
                mb-4
                text-sm
                font-semibold
                uppercase
                tracking-[0.2em]
                text-cyan-300
              "
            >
              Key Contributions
            </h4>

            <ul className="space-y-4">
              {experience.description.map((item, i) => (
                <li
                  key={i}
                  className="
                    flex
                    items-start
                    gap-3
                    text-base
                    leading-7
                    text-slate-300
                  "
                >
                  <CircleCheck
                    size={18}
                    className="
                      mt-1
                      shrink-0
                      text-cyan-400
                    "
                  />

                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {/* Technologies */}

        {experience.technologies?.length > 0 && (
          <div
            className="
              mt-8
              flex
              flex-wrap
              gap-3
            "
          >
            {experience.technologies.map((tech, i) => (
              <span
                key={i}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-4
                  py-2
                  text-sm
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300

                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:text-cyan-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        )}
      </div>
    </motion.article>
  );
};

export default ExperienceCard;