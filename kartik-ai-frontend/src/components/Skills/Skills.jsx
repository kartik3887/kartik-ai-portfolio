import { motion } from "framer-motion";

import SkillProgress from "./SkillProgress";
import SkillHighlights from "./SkillHighlights";

const Skills = () => {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#050816]
        py-24
        lg:py-32
      "
    >
      {/* Background Glow */}

      <div className="absolute inset-0 -z-10">

        <div
          className="
            absolute
            top-20
            right-10
            h-72
            w-72
            rounded-full
            bg-cyan-500/15
            blur-[120px]
          "
        />

        <div
          className="
            absolute
            bottom-20
            left-10
            h-72
            w-72
            rounded-full
            bg-violet-600/15
            blur-[120px]
          "
        />

        {/* Extra Glow */}

        <div
          className="
            absolute
            left-1/4
            top-1/3
            h-96
            w-96
            rounded-full
            bg-cyan-500/5
            blur-[180px]
          "
        />

        <div
          className="
            absolute
            right-1/4
            bottom-1/4
            h-96
            w-96
            rounded-full
            bg-violet-500/5
            blur-[180px]
          "
        />

      </div>

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >

        {/* Heading */}

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
          }}
          transition={{
            duration: 0.7,
          }}
          className="text-center"
        >

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-5
              py-2
              text-sm
              font-medium
              uppercase
              tracking-[0.25em]
              text-cyan-400
            "
          >
            Skills
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-extrabold
              leading-tight
              text-white
              sm:text-5xl
              lg:text-6xl
            "
          >
            Technologies &

            <span
              className="
                block
                bg-gradient-to-r
                from-cyan-400
                via-violet-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              Development Skills
            </span>

          </h2>

          <p
            className="
              mx-auto
              mt-6
              max-w-3xl
              text-lg
              leading-8
              text-slate-400
            "
          >
            A collection of technologies and tools I use to build
            fast, scalable, responsive and AI-powered web
            applications with modern development practices.
          </p>

        </motion.div>

        {/* Progress */}

        <div className="mt-20">
          <SkillProgress />
        </div>

        {/* Technologies */}

    

        {/* Highlights */}

        <div className="mt-24">
          <SkillHighlights />
        </div>

      </div>

    </section>
  );
};

export default Skills;