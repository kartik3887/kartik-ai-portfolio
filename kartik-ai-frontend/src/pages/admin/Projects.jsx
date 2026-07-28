import { useState } from "react";
import { motion } from "framer-motion";

import { Plus, FolderKanban, Star, Globe, Trash2 } from "lucide-react";

import useProjects from "@/hooks/useProjects";

import ProjectGrid from "./components/projects/ProjectGrid";
import ProjectModal from "./components/projects/ProjectModal";
import ProjectForm from "./components/projects/ProjectForm";

const Projects = () => {
  const {
    projects,
    loading,

    createProject,
    updateProject,
    deleteProject,

    togglePublish,
    toggleFeatured,
  } = useProjects();

  const [openModal, setOpenModal] = useState(false);

  const [selectedProject, setSelectedProject] = useState(null);

  const [deleteModal, setDeleteModal] = useState(false);

  const [projectToDelete, setProjectToDelete] = useState(null);

  const publishedProjects = projects.filter((item) => item.isPublished).length;

  const featuredProjects = projects.filter((item) => item.featured).length;

  const handleDeleteClick = (project) => {
    setProjectToDelete(project);

    setDeleteModal(true);
  };

  const handleDeleteConfirm = async () => {
    if (!projectToDelete) return;

    const success = await deleteProject(projectToDelete._id);

    if (success) {
      setDeleteModal(false);

      setProjectToDelete(null);
    }
  };

  return (
    <div
      className="
      relative

      space-y-5

      overflow-hidden
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute

        -top-20
        -right-20

        w-64
        h-64

        bg-blue-600/10

        blur-[90px]

        rounded-full

        pointer-events-none
        "
      />

      <div
        className="
        absolute

        -bottom-20
        -left-20

        w-64
        h-64

        bg-purple-600/10

        blur-[90px]

        rounded-full

        pointer-events-none
        "
      />

      {/* Header */}

      <motion.div
        initial={{
          opacity: 0,
          y: -10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="
        relative

        p-4

        rounded-2xl

        bg-white/5

        backdrop-blur-xl

        border
        border-white/10
        "
      >
        <div
          className="
          flex

          flex-col

          lg:flex-row

          lg:items-center

          lg:justify-between

          gap-4
          "
        >
          <div>
            <div
              className="
              flex
              items-center
              gap-3
              "
            >
              <div
                className="
                p-2

                rounded-xl

                bg-blue-500/20

                border
                border-blue-500/20

                text-blue-400
                "
              >
                <FolderKanban size={20} />
              </div>

              <div>
                <p
                  className="
                  text-[11px]

                  uppercase

                  tracking-wider

                  text-blue-400
                  "
                >
                  Portfolio CMS
                </p>

                <h1
                  className="
                  text-2xl

                  font-bold

                  text-white
                  "
                >
                  Projects
                </h1>
              </div>
            </div>

            <p
              className="
              text-xs

              text-gray-400

              mt-2

              max-w-lg
              "
            >
              Manage your AI portfolio projects, publish work and highlight your
              best creations.
            </p>
          </div>

          <button
            onClick={() => {
              setSelectedProject(null);

              setOpenModal(true);
            }}
            className="
            flex

            items-center

            justify-center

            gap-2

            px-4

            py-2

            rounded-lg

            bg-blue-600/20

            border

            border-blue-500/30

            text-blue-300

            text-sm

            hover:bg-blue-600

            hover:text-white

            transition
            "
          >
            <Plus size={16} />
            Add Project
          </button>
        </div>

        {/* Stats */}

        <div
          className="
          grid

          grid-cols-1

          md:grid-cols-3

          gap-4

          mt-5
          "
        >
          <StatCard
            title="Total Projects"
            value={projects.length}
            icon={<FolderKanban size={18} />}
            iconStyle="text-blue-400 bg-blue-500/20"
          />

          <StatCard
            title="Published"
            value={publishedProjects}
            icon={<Globe size={18} />}
            iconStyle="text-green-400 bg-green-500/20"
          />

          <StatCard
            title="Featured"
            value={featuredProjects}
            icon={<Star size={18} className="fill-yellow-400" />}
            iconStyle="text-yellow-400 bg-yellow-500/20"
          />
        </div>
      </motion.div>

      {/* Project Grid */}

      <motion.div
        initial={{
          opacity: 0,
          y: 10,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        className="
        rounded-2xl

        border

        border-white/10

        bg-white/5

        backdrop-blur-xl

        p-4
        "
      >
        <ProjectGrid
          projects={projects}
          loading={loading}
          onEdit={(project) => {
            setSelectedProject(project);

            setOpenModal(true);
          }}
          onDelete={handleDeleteClick}
          onPublish={togglePublish}
          onFeatured={toggleFeatured}
        />
      </motion.div>

      {/* Create/Edit Modal */}

      <ProjectModal
        open={openModal}
        title={selectedProject ? "Edit Project" : "Create Project"}
        onClose={() => {
          setOpenModal(false);

          setSelectedProject(null);
        }}
      >
        <ProjectForm
          loading={loading}
          project={selectedProject}
          onSubmit={async (data) => {
            let success;

            if (selectedProject) {
              success = await updateProject(selectedProject._id, data);
            } else {
              success = await createProject(data);
            }

            if (success) {
              setOpenModal(false);

              setSelectedProject(null);
            }
          }}
        />
      </ProjectModal>

      {/* Delete Modal */}

      {deleteModal && (
        <div
          className="
            fixed

            inset-0

            z-[999]

            flex

            items-center

            justify-center

            bg-black/70

            backdrop-blur-md

            p-4
            "
        >
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.95,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            className="
              w-full

              max-w-sm

              rounded-2xl

              border

              border-white/10

              bg-[#080d1a]

              p-5
              "
          >
            <Trash2
              size={28}
              className="
                text-red-400
                mb-3
                "
            />

            <h2
              className="
                text-lg

                font-bold

                text-white
                "
            >
              Delete Project?
            </h2>

            <p
              className="
                text-sm

                text-gray-400

                mt-2
                "
            >
              This action cannot be undone.
            </p>

            <div
              className="
                flex

                gap-3

                mt-5
                "
            >
              <button
                onClick={() => setDeleteModal(false)}
                className="
                  flex-1

                  py-2

                  rounded-lg

                  border

                  border-white/10

                  text-sm

                  text-white
                  "
              >
                Cancel
              </button>

              <button
                onClick={handleDeleteConfirm}
                className="
                  flex-1

                  py-2

                  rounded-lg

                  bg-red-600

                  text-sm

                  text-white
                  "
              >
                Delete
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
};

const StatCard = ({ title, value, icon, iconStyle }) => {
  return (
    <div
      className="
      p-4

      rounded-2xl

      bg-white/5

      border

      border-white/10

      hover:border-blue-500/30

      transition
      "
    >
      <div
        className="
        flex

        items-center

        justify-between
        "
      >
        <div>
          <p
            className="
            text-[11px]

            uppercase

            text-gray-400
            "
          >
            {title}
          </p>

          <h2
            className="
            text-2xl

            font-bold

            text-white

            mt-1
            "
          >
            {value}
          </h2>
        </div>

        <div
          className={`
          p-2

          rounded-xl

          ${iconStyle}
          `}
        >
          {icon}
        </div>
      </div>
    </div>
  );
};

export default Projects;
