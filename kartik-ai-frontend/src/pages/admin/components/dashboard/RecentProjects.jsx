import { FolderKanban, ExternalLink } from "lucide-react";

import { motion } from "framer-motion";

const RecentProjects = ({ projects = [] }) => {
  return (
    <div className="space-y-4">
      {projects.length === 0 ? (
        <div
          className="
            flex
            min-h-32
            items-center
            justify-center

            rounded-xl

            border
            border-white/10

            bg-white/5

            text-sm
            text-gray-400
          "
        >
          No projects yet
        </div>
      ) : (
        projects.map((project, index) => (
          <motion.div
            key={project._id || index}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: index * 0.1,
            }}
            whileHover={{
              y: -3,
            }}
            className="
              flex
              gap-4

              rounded-xl

              border
              border-white/10

              bg-white/5

              p-4

              transition

              hover:border-blue-500/30
            "
          >
            {/* Project Image */}

            <div className="shrink-0">
              {project.image?.url ? (
                <img
                  src={project.image.url}
                  alt={project.title}
                  className="
                    h-20
                    w-20

                    rounded-xl

                    border
                    border-white/10

                    object-cover
                  "
                />
              ) : (
                <div
                  className="
                    flex
                    h-20
                    w-20

                    items-center
                    justify-center

                    rounded-xl

                    border
                    border-white/10

                    bg-blue-500/10

                    text-blue-400
                  "
                >
                  <FolderKanban size={22} />
                </div>
              )}
            </div>

            {/* Project Content */}

            <div className="min-w-0 flex-1">
              {/* Title + Link */}

              <div
                className="
                  flex
                  items-start
                  justify-between

                  gap-3
                "
              >
                <div className="min-w-0">
                  <h3
                    className="
                      truncate

                      text-sm
                      font-semibold

                      text-white
                    "
                  >
                    {project.title}
                  </h3>

                  <p
                    className="
                      mt-1

                      line-clamp-2

                      text-xs

                      text-gray-400
                    "
                  >
                    {project.description}
                  </p>
                </div>

                {/* Live / GitHub Link */}

                {(project.liveDemo || project.github) && (
                  <a
                    href={project.liveDemo || project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="
                      shrink-0

                      text-gray-400

                      transition

                      hover:text-blue-400
                    "
                    title="Open project"
                  >
                    <ExternalLink size={15} />
                  </a>
                )}
              </div>

              {/* Tech Stack */}

              {project.techStack?.length > 0 && (
                <div
                  className="
                    mt-3

                    flex
                    flex-wrap

                    gap-2
                  "
                >
                  {project.techStack.slice(0, 4).map((tech, techIndex) => (
                    <span
                      key={`${tech}-${techIndex}`}
                      className="
                          rounded-full

                          border
                          border-blue-500/20

                          bg-blue-500/10

                          px-2
                          py-1

                          text-[10px]

                          text-blue-300
                        "
                    >
                      {tech}
                    </span>
                  ))}

                  {project.techStack.length > 4 && (
                    <span
                      className="
                        rounded-full

                        border
                        border-white/10

                        bg-white/5

                        px-2
                        py-1

                        text-[10px]

                        text-gray-400
                      "
                    >
                      +{project.techStack.length - 4}
                    </span>
                  )}
                </div>
              )}

              {/* Status */}

              <div
                className="
                  mt-3

                  flex
                  items-center
                  gap-2
                "
              >
                <FolderKanban size={13} className="text-blue-400" />

                <span
                  className={`
                    text-xs

                    ${
                      project.isPublished ? "text-green-400" : "text-yellow-400"
                    }
                  `}
                >
                  {project.isPublished ? "Published" : "Draft"}
                </span>

                {project.featured && (
                  <>
                    <span className="text-gray-600">•</span>

                    <span
                      className="
                        text-xs
                        text-purple-400
                      "
                    >
                      Featured
                    </span>
                  </>
                )}
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default RecentProjects;
