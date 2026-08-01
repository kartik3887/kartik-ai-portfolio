import { motion } from "framer-motion";
import { Code2, BrainCircuit, Rocket, Zap } from "lucide-react";

const cards = [
  {
    icon: Code2,
    title: "Full Stack Developer",
    description:
      "Building scalable web applications using modern frontend and backend technologies.",
  },
  {
    icon: BrainCircuit,
    title: "AI Engineer",
    description:
      "Creating intelligent AI-powered experiences with modern tools and technologies.",
  },
  {
    icon: Rocket,
    title: "Fast Learner",
    description:
      "Continuously learning new technologies and improving development skills every day.",
  },
  {
    icon: Zap,
    title: "Problem Solver",
    description:
      "Transforming real-world challenges into efficient and user-friendly digital solutions.",
  },
];

const AboutCards = () => {
  return (
    <div
      className="
        grid
        gap-2.5
        sm:grid-cols-2
        sm:gap-3
        lg:grid-cols-4
        lg:gap-3
      "
    >
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{
              once: true,
              margin: "-40px",
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.08,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              p-3.5
              backdrop-blur-xl
              transition-all
              duration-300
              hover:-translate-y-1.5
              hover:border-cyan-400/30
              hover:bg-white/[0.07]
              hover:shadow-[0_8px_30px_rgba(34,211,238,0.10)]
              sm:rounded-2xl
              sm:p-4
            "
          >
            {/* Glow */}

            <div
              className="
                pointer-events-none
                absolute
                inset-0
                -z-10
                bg-gradient-to-br
                from-violet-600/15
                via-cyan-500/10
                to-transparent
                opacity-0
                blur-xl
                transition
                duration-300
                group-hover:opacity-100
              "
            />

            {/* Icon */}

            <div
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-xl
                border
                border-cyan-400/20
                bg-gradient-to-br
                from-cyan-500/20
                to-violet-500/20
                transition-all
                duration-300
                group-hover:scale-105
                group-hover:rotate-3
                sm:h-11
                sm:w-11
              "
            >
              <Icon
                size={20}
                className="text-cyan-400 sm:h-[21px] sm:w-[21px]"
              />
            </div>

            {/* Content */}

            <h3
              className="
                mt-3
                text-[15px]
                font-bold
                leading-tight
                text-white
                sm:text-base
              "
            >
              {card.title}
            </h3>

            <p
              className="
                mt-2
                text-[11px]
                leading-5
                text-slate-400
                sm:text-xs
                sm:leading-5
              "
            >
              {card.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AboutCards;
