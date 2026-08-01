import { motion } from "framer-motion";
import ExperienceTimeline from "./ExperienceTimeline";

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
        py-16
        sm:py-20
        lg:py-24
      "
    >
      {/* ================= Background Effects ================= */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        {/* Grid */}

        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
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
            h-72
            w-72
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-[120px]

            sm:h-80
            sm:w-80
          "
        />

        {/* Violet Glow */}

        <div
          className="
            absolute
            bottom-0
            right-0
            h-72
            w-72
            rounded-full
            bg-violet-500/10
            blur-[120px]

            sm:h-80
            sm:w-80
          "
        />

        {/* Bottom Cyan Glow */}

        <div
          className="
            absolute
            bottom-10
            left-0
            h-64
            w-64
            rounded-full
            bg-cyan-400/5
            blur-[110px]
          "
        />
      </div>

      {/* ================= Container ================= */}

      <div
        className="
          relative
          mx-auto
          max-w-6xl
          px-5
          sm:px-6
          lg:px-8
        "
      >
        {/* ================= Header ================= */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{
            duration: 0.6,
            ease: "easeOut",
          }}
          className="
            mx-auto
            max-w-2xl
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
              px-4
              py-1.5
              text-xs
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
              mt-5
              text-3xl
              font-extrabold
              leading-tight
              tracking-tight
              text-white

              sm:text-4xl

              lg:text-5xl
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
              mt-5
              max-w-2xl
              text-sm
              leading-7
              text-slate-400

              sm:text-base
            "
          >
            Transforming ideas into scalable web applications through
            modern frontend technologies, clean architecture, reusable
            components, and real-world software development experience.
          </p>
        </motion.div>

        {/* ================= Timeline ================= */}

        <div className="mt-16">
          <ExperienceTimeline />
        </div>
      </div>
    </section>
  );
};

export default Experience;