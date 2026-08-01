import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const highlights = [
  "Clean Code",
  "Responsive Design",
  "REST APIs",
  "JWT Authentication",
  "UI / UX Focus",
  "Performance Optimization",
  "AI Integration",
  "Problem Solving",
];

const SkillHighlights = () => {
  return (
    <div>
      {/* ================= Heading ================= */}

      <div className="text-center">
        <span
          className="
            inline-flex
            rounded-full
            border
            border-violet-500/20
            bg-violet-500/10
            px-3.5
            py-1
            text-[11px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-violet-400

            sm:px-4
            sm:py-1.5
            sm:text-xs
          "
        >
          Highlights
        </span>

        <h2
          className="
            mt-3
            text-2xl
            font-bold
            text-white

            sm:mt-4
            sm:text-3xl
          "
        >
          What I Focus On
        </h2>
      </div>

      {/* ================= Cards ================= */}

      <div
        className="
          mt-7
          grid
          gap-3

          sm:mt-8
          sm:grid-cols-2
          sm:gap-4

          lg:grid-cols-4
        "
      >
        {highlights.map((item, index) => (
          <motion.div
            key={item}
            initial={{
              opacity: 0,
              y: 20,
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
              duration: 0.4,
              delay: index * 0.07,
            }}
            className="
              group
              flex
              items-center
              gap-3
              rounded-xl
              border
              border-white/10
              bg-white/5
              p-3.5
              backdrop-blur-xl
              transition-all
              duration-300

              hover:-translate-y-1
              hover:border-cyan-400/40
              hover:bg-white/[0.07]
              hover:shadow-[0_0_25px_rgba(34,211,238,0.10)]

              sm:p-4
            "
          >
            {/* Icon */}

            <div
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-xl
                border
                border-white/10
                bg-gradient-to-br
                from-cyan-500/15
                to-violet-500/15
                transition-all
                duration-300

                group-hover:scale-105
              "
            >
              <CheckCircle2
                size={20}
                className="text-cyan-400"
              />
            </div>

            {/* Text */}

            <h3
              className="
                text-xs
                font-semibold
                leading-tight
                text-white

                sm:text-sm
              "
            >
              {item}
            </h3>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default SkillHighlights;