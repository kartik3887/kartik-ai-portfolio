import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 24,
    scale: 0.98,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
};

const ProjectGrid = ({ projects = [] }) => {
  if (!projects.length) {
    return (
      <div className="py-14 text-center text-slate-400">
        No projects available.
      </div>
    );
  }

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{
        once: true,
        amount: 0.1,
      }}
      className="
  grid
  grid-cols-1
  gap-4

  md:grid-cols-2

  lg:grid-cols-3
"
    >
      {projects.map((project) => (
        <motion.div
          key={project._id ?? project.slug}
          variants={cardVariants}
          className="min-w-0 h-full"
        >
          <ProjectCard
            title={project.title}
            description={project.description}
            image={project.image}
            techStack={project.techStack}
            github={project.github}
            liveDemo={project.liveDemo}
          />
        </motion.div>
      ))}
    </motion.div>
  );
};

export default ProjectGrid;
