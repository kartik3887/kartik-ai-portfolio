import { motion } from "framer-motion";

import SkillProgress from "./SkillProgress";
import SkillHighlights from "./SkillHighlights";
import SkillCards from "./SkillCard";



const Skills = () => {

  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        bg-[#050816]
        py-10
        sm:py-12
        lg:py-14
      "
    >
      {/* ================= Background Glow ================= */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute
            right-0
            top-16
            h-52
            w-52
            rounded-full
            bg-cyan-500/15
            blur-[100px]
            sm:h-64
            sm:w-64
          "
        />

        <div
          className="
            absolute
            bottom-16
            left-0
            h-52
            w-52
            rounded-full
            bg-violet-600/15
            blur-[100px]
            sm:h-64
            sm:w-64
          "
        />

        <div
          className="
            absolute
            left-1/3
            top-1/3
            h-72
            w-72
            rounded-full
            bg-cyan-500/5
            blur-[150px]
          "
        />

        <div
          className="
            absolute
            bottom-1/4
            right-1/4
            h-72
            w-72
            rounded-full
            bg-violet-500/5
            blur-[150px]
          "
        />
      </div>

      {/* ================= Container ================= */}

      <div
        className="
          relative
          mx-auto
          max-w-7xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= Heading ================= */}

        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            margin: "-50px",
          }}
          transition={{
            duration: 0.6,
          }}
          className="text-center"
        >
          {/* Badge */}

          <span
            className="
              inline-flex
              rounded-full
              border
              border-cyan-400/20
              bg-cyan-400/10
              px-3.5
              py-1
              text-[11px]
              font-medium
              uppercase
              tracking-[0.18em]
              text-cyan-400

              sm:px-4
              sm:py-1.5
              sm:text-xs
            "
          >
            Skills
          </span>

          {/* Heading */}

          <h2
            className="
              mt-3
              text-2xl
              font-extrabold
              leading-tight
              tracking-tight
              text-white

              sm:mt-4
              sm:text-3xl

              lg:text-4xl
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

          {/* Description */}

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-xs
              leading-5
              text-slate-400

              sm:mt-4
              sm:text-sm
              sm:leading-6
            "
          >
            A collection of technologies and tools I use to build fast,
            scalable, responsive and AI-powered web applications with modern
            development practices.
          </p>
        </motion.div>

        {/* ================= Skill Progress ================= */}

        <div
          className="
            mt-8
            sm:mt-10
            lg:mt-12
          "
        >
          <SkillProgress />
        </div>

        {/* ================= Skill Cards ================= */}

        <div
          className="
    mt-10
    sm:mt-12
    lg:mt-14
  "
        >
          <SkillCards />
        </div>

        {/* ================= Highlights ================= */}

        <div
          className="
            mt-12
            sm:mt-14
            lg:mt-16
          "
        >
          <SkillHighlights />
        </div>
      </div>
    </section>
  );
};

export default Skills;
