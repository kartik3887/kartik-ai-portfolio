import { motion } from "framer-motion";
import { useMemo, useState } from "react";

import FeaturedProject from "./FeaturedProject";
import ProjectGrid from "./ProjectGrid";
import ProjectFilter from "./ProjectFilter";
import { projects } from "./projectsData";


const Projects = () => {

  const [activeCategory, setActiveCategory] = useState("All");


  const featuredProject = projects.find(
    (project) => project.featured
  );


  const otherProjects = useMemo(() => {

    const filtered =
      activeCategory === "All"
        ? projects
        : projects.filter(
            (project) =>
              project.category === activeCategory
          );


    return filtered.filter(
      (project) => !project.featured
    );

  }, [activeCategory]);


  return (

    <section
      id="projects"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#050816]
        py-24
        lg:py-32
      "
    >


      {/* Background */}
      <div
        className="
          absolute
          inset-0
          -z-10
        "
      >

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
            top-20
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

      </div>




      <div
        className="
          mx-auto
          max-w-7xl
          px-6
          lg:px-8
        "
      >



        {/* Heading */}

        <motion.div

          initial={{
            opacity:0,
            y:40,
          }}

          whileInView={{
            opacity:1,
            y:0,
          }}

          viewport={{
            once:true,
            amount:0.3,
          }}

          transition={{
            duration:0.8,
            ease:"easeOut",
          }}

          className="
            mx-auto
            max-w-3xl
            text-center
          "
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
              tracking-wide
              text-cyan-300
            "
          >
            Featured Projects
          </span>




          <h2
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

            Projects I{" "}

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
              Built
            </span>

          </h2>



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

            A collection of modern applications focused on
            clean architecture, responsive design, AI
            integration, and real-world problem solving.

          </p>


        </motion.div>




        {/* Featured */}

        {featuredProject && (

          <motion.div

            initial={{
              opacity:0,
              y:60,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:true,
              amount:0.2,
            }}

            transition={{
              duration:0.9,
            }}

            className="
              mt-20
            "
          >

            <FeaturedProject

              title={featuredProject.title}

              description={featuredProject.description}

              image={featuredProject.image}

              tech={featuredProject.tech}

              github={featuredProject.github}

              live={featuredProject.live}

            />

          </motion.div>

        )}






        {/* Other Projects */}

        {otherProjects.length > 0 && (

          <motion.div

            initial={{
              opacity:0,
              y:40,
            }}

            whileInView={{
              opacity:1,
              y:0,
            }}

            viewport={{
              once:true,
              amount:0.2,
            }}

            transition={{
              duration:0.8,
              delay:0.2,
            }}

            className="
              mt-28
            "

          >


            <h3
              className="
                mb-8
                text-3xl
                font-black
                text-white
              "
            >
              More Projects
            </h3>



            <ProjectFilter

              active={activeCategory}

              setActive={setActiveCategory}

            />



            <div className="mt-10">

              <ProjectGrid
                projects={otherProjects}
              />

            </div>


          </motion.div>

        )}


      </div>


    </section>

  );

};


export default Projects;