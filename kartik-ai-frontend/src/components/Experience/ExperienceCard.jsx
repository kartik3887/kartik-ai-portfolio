import { motion } from "framer-motion";
import {
  CalendarDays,
  MapPin,
  BriefcaseBusiness,
  CircleCheck,
} from "lucide-react";

const ExperienceCard = ({ experience, index }) => {
  const {
    company,
    role,
    duration,
    location,
    status,
    description,
    technologies,
    achievements,
  } = experience;

  return (
    <motion.article
      initial={{
        opacity: 0,
        y: 40,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.25,
      }}
      transition={{
        duration: 0.7,
        delay: index * 0.15,
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

        sm:p-8

        hover:-translate-y-2
        hover:border-cyan-400/30
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]
      "
    >

      {/* Animated Glow */}
      <div
        className="
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-cyan-400/20
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-cyan-400/30
        "
      />


      {/* Top Gradient Line */}
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
          opacity-60
        "
      />



      <div className="relative">


        {/* Status */}
        <div className="flex justify-between">

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

            <span
              className="
                h-2
                w-2
                rounded-full
                bg-current
              "
            />

            {status}

          </span>

        </div>



        {/* Role */}
        <h3
          className="
            mt-6
            text-2xl
            font-black
            text-white
            sm:text-3xl
          "
        >
          {role}
        </h3>



        {/* Company */}
        <div
          className="
            mt-3
            flex
            items-center
            gap-2
            text-cyan-300
          "
        >

          <BriefcaseBusiness size={18}/>

          <span
            className="
              font-semibold
            "
          >
            {company}
          </span>

        </div>



        {/* Meta Information */}
        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-4
            text-sm
            text-slate-400
          "
        >

          <div className="flex items-center gap-2">
            <CalendarDays size={16}/>
            {duration}
          </div>


          <div className="flex items-center gap-2">
            <MapPin size={16}/>
            {location}
          </div>

        </div>



        {/* Description */}
        <p
          className="
            mt-6
            leading-8
            text-slate-400
          "
        >
          {description}
        </p>




        {/* Achievements */}
        <div className="mt-8">

          <h4
            className="
              mb-4
              text-sm
              font-bold
              uppercase
              tracking-widest
              text-cyan-300
            "
          >
            Key Contributions
          </h4>


          <ul className="space-y-3">

            {achievements.map((item)=>(
              <li
                key={item}
                className="
                  flex
                  items-start
                  gap-3
                  text-sm
                  leading-7
                  text-slate-300
                "
              >

                <CircleCheck
                  size={18}
                  className="
                    mt-1
                    flex-shrink-0
                    text-cyan-400
                  "
                />

                {item}

              </li>
            ))}

          </ul>

        </div>




        {/* Tech Stack */}
        <div
          className="
            mt-8
            flex
            flex-wrap
            gap-2
          "
        >

          {technologies.map((tech)=>(
            <span
              key={tech}
              className="
                rounded-full
                border
                border-white/10
                bg-white/5
                px-3
                py-1.5
                text-xs
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


      </div>

    </motion.article>
  );
};


export default ExperienceCard;