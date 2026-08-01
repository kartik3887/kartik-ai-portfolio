import { motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";

import FeaturedProject from "./FeaturedProject";
import ProjectGrid from "./ProjectGrid";

import { getAdminProjects } from "@/api/project.api";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await getAdminProjects();

        console.log("Projects Response:", response);

        const projectList = Array.isArray(response.data)
          ? response.data
          : response.data?.data || [];

        setProjects(projectList);
      } catch (error) {
        console.error("Failed to load projects", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const featuredProject = useMemo(() => {
    return projects.find((project) => project.featured);
  }, [projects]);

  const publishedProjects = useMemo(() => {
    return projects.filter((project) => project.isPublished);
  }, [projects]);

  if (loading) {
    return (
      <section
        id="projects"
        className="bg-[#050816] py-24 text-center text-slate-400"
      >
        Loading Projects...
      </section>
    );
  }

  return (
    <section
      id="projects"
      className="
        relative
        isolate
        overflow-hidden
        bg-[#050816]
        py-20
        sm:py-24
        lg:py-28
      "
    >
      {/* Background */}

      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div
          className="
            absolute
            inset-0
            opacity-[0.025]
            bg-[linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
            bg-[size:40px_40px]
          "
        />

        <div
          className="
            absolute
            left-1/2
            top-0
            h-96
            w-96
            -translate-x-1/2
            rounded-full
            bg-cyan-500/10
            blur-[140px]
          "
        />

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
          relative
          mx-auto
        max-w-[1350px]
          px-6
          lg:px-8
        "
      >
        {/* Header */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl text-center"
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
              tracking-[0.15em]
              text-cyan-300
            "
          >
            MY WORK
          </span>

          <h2
            className="
              mt-6
              text-4xl
              font-black
              leading-tight
              text-white
              md:text-5xl
            "
          >
            Projects I've{" "}
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
              text-lg
              leading-8
              text-slate-400
            "
          >
            A collection of modern web applications focused on
            performance, clean architecture and real-world solutions.
          </p>
        </motion.div>

        {/* Featured */}

        {featuredProject && (
          <div className="mt-16">
            <FeaturedProject
              title={featuredProject.title}
              description={featuredProject.description}
              image={featuredProject.image}
              techStack={featuredProject.techStack}
              github={featuredProject.github}
              liveDemo={featuredProject.liveDemo}
            />
          </div>
        )}

        {/* Grid */}

        <div className="mt-20">
          <ProjectGrid projects={publishedProjects} />
        </div>
      </div>
    </section>
  );
};

export default Projects;