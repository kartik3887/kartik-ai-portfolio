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
    <div className="mt-24">

      {/* Heading */}

      <div className="text-center">

        <span className="inline-flex rounded-full border border-violet-500/20 bg-violet-500/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
          Highlights
        </span>

        <h2 className="mt-5 text-3xl font-bold text-white sm:text-4xl">
          What I Focus On
        </h2>

      </div>

      {/* Cards */}

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

        {highlights.map((item, index) => (

          <motion.div
            key={item}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.08,
            }}
            className="
              group
              flex
              items-center
              gap-4
              rounded-2xl
              border
              border-white/10
              bg-white/5
              p-5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-2
              hover:border-cyan-400/40
              hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]
            "
          >

            <div
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-xl
                bg-gradient-to-br
                from-cyan-500/20
                to-violet-500/20
              "
            >
              <CheckCircle2
                size={24}
                className="text-cyan-400"
              />
            </div>

            <h3 className="font-semibold text-white">
              {item}
            </h3>

          </motion.div>

        ))}

      </div>

    </div>
  );
};

export default SkillHighlights;