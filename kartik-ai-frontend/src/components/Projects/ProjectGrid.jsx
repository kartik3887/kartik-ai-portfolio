import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";


const containerVariants = {
  hidden: {},

  visible: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};



const cardVariants = {
  hidden: {
    opacity: 0,
    y: 50,
    scale: 0.96,
  },

  visible: {
    opacity: 1,
    y: 0,
    scale: 1,

    transition: {
      duration: 0.7,
      ease: "easeOut",
    },
  },
};



const ProjectGrid = ({ projects }) => {

  return (

    <motion.div

      variants={containerVariants}

      initial="hidden"

      whileInView="visible"

      viewport={{
        once: true,
        amount: 0.15,
      }}

      className="
        grid
        grid-cols-1
        gap-6

        sm:gap-8

        md:grid-cols-2

        xl:grid-cols-3
      "

    >

      {projects.map((project) => (

        <motion.div

          key={project.id}

          variants={cardVariants}

        >

          <ProjectCard
            {...project}
          />

        </motion.div>

      ))}


    </motion.div>

  );

};


export default ProjectGrid;