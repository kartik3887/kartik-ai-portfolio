import { motion } from "framer-motion";
import ExperienceTimeline from "./ExperienceTimeline";
import { experiences } from "./experienceData";

const Experience = () => {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#050816]
        py-24
        lg:py-32
      "
    >
      {/* Background Effects */}
      <div className="absolute inset-0 -z-10 overflow-hidden">

        {/* Grid */}
        <div
          className="
            absolute
            inset-0
            opacity-[0.03]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
        />

        {/* Cyan Glow */}
        <div
          className="
            absolute
            left-1/2
            top-10
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />

        {/* Violet Glow */}
        <div
          className="
            absolute
            bottom-0
            right-0
            h-96
            w-96
            rounded-full
            bg-violet-500/10
            blur-[150px]
          "
        />

        {/* Bottom Cyan Glow */}
        <div
          className="
            absolute
            bottom-20
            left-0
            h-72
            w-72
            rounded-full
            bg-cyan-400/5
            blur-[130px]
          "
        />
      </div>


      <div className="mx-auto max-w-7xl px-6 lg:px-8">


        {/* Section Header */}
        <motion.div
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
            amount: 0.3,
          }}
          transition={{
            duration: 0.8,
            ease: "easeOut",
          }}
          className="
            mx-auto
            max-w-3xl
            text-center
          "
        >

          {/* Badge */}
          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-5
              py-2
              text-sm
              font-medium
              tracking-wide
              text-cyan-300
              backdrop-blur-md
            "
          >
            Professional Journey
          </span>


          {/* Title */}
          <h2
            id="experience-heading"
            className="
              mt-6
              text-4xl
              font-black
              tracking-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Building My{" "}

            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                via-blue-400
                to-violet-400
                bg-clip-text
                text-transparent
              "
            >
              Experience
            </span>

          </h2>


          {/* Description */}
          <p
            className="
              mx-auto
              mt-6
              max-w-2xl
              text-base
              leading-8
              text-slate-400
              md:text-lg
            "
          >
            Transforming ideas into scalable web experiences using modern
            frontend technologies, clean architecture, and real-world
            problem solving.
          </p>

        </motion.div>



        {/* Timeline */}
        <div className="mt-20">
          <ExperienceTimeline experiences={experiences} />
        </div>


      </div>

    </section>
  );
};


export default Experience;