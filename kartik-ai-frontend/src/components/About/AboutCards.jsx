import { motion } from "framer-motion";
import {
  Code2,
  BrainCircuit,
  Rocket,
  Zap,
} from "lucide-react";

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
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
      {cards.map((card, index) => {
        const Icon = card.icon;

        return (
          <motion.div
            key={card.title}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.15,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-6
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-400/40
              hover:shadow-[0_0_40px_rgba(34,211,238,0.12)]
            "
          >
            {/* Background Glow */}
            <div
              className="
                absolute
                inset-0
                -z-10
                rounded-3xl
                bg-gradient-to-br
                from-violet-600/20
                via-cyan-500/10
                to-transparent
                opacity-0
                blur-xl
                transition
                duration-500
                group-hover:opacity-100
              "
            />

            {/* Icon */}
            <div
              className="
                flex
                h-14
                w-14
                items-center
                justify-center
                rounded-2xl
                border
                border-cyan-400/20
                bg-gradient-to-br
                from-cyan-500/20
                to-violet-500/20
                transition-all
                duration-300
                group-hover:scale-110
                group-hover:rotate-6
              "
            >
              <Icon
                size={28}
                className="text-cyan-400"
              />
            </div>

            {/* Content */}
            <h3 className="mt-6 text-xl font-bold text-white">
              {card.title}
            </h3>

            <p className="mt-4 text-sm leading-7 text-slate-400">
              {card.description}
            </p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AboutCards;