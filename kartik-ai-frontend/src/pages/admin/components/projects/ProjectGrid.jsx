import ProjectCard from "./ProjectCard";

const ProjectGrid = ({ projects, onEdit, onDelete, onPublish, onFeatured }) => {
  if (!projects.length) {
    return (
      <div
        className="
        flex
        flex-col
        items-center
        justify-center

        py-14

        text-center

        text-gray-400
        "
      >
        <div
          className="
          w-14
          h-14

          rounded-xl

          flex
          items-center
          justify-center

          bg-white/5

          border

          border-white/10

          text-2xl
          "
        >
          📂
        </div>

        <h3
          className="
          mt-4

          text-lg

          font-semibold

          text-white
          "
        >
          No Projects Found
        </h3>

        <p
          className="
          mt-1

          text-xs

          text-gray-400
          "
        >
          Start by adding your first portfolio project
        </p>
      </div>
    );
  }

  return (
    <div
      className="
 grid
 grid-cols-1
 lg:grid-cols-3
 gap-4
 "
    >
      {projects.map((project) => (
        <ProjectCard
          key={project._id}
          project={project}
          onEdit={onEdit}
          onDelete={onDelete}
          onPublish={onPublish}
          onFeatured={onFeatured}
        />
      ))}
    </div>
  );
};

export default ProjectGrid;
