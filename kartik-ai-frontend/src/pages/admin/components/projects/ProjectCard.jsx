import {
  SquarePen,
  Trash,
  Sparkles,
  Rocket,
  Github,
  ExternalLink,
} from "lucide-react";

import { motion } from "framer-motion";

const ProjectCard = ({
  project,
  onEdit,
  onDelete,
  onPublish,
  onFeatured,
}) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 15,
      }}
      animate={{
        opacity: 1,
        y: 0,
      }}
      whileHover={{
        y: -3,
      }}
      transition={{
        duration: 0.25,
      }}
      className="
      group

      relative

      overflow-hidden

      rounded-2xl

      bg-white/5

      backdrop-blur-xl

      border
      border-white/10

      hover:border-blue-500/40

      hover:shadow-lg

      hover:shadow-blue-500/10

      transition

      p-4
      "
    >

      {/* AI Glow */}

      <div
        className="
        absolute

        -top-10
        -right-10

        w-32
        h-32

        bg-blue-500/20

        blur-3xl

        rounded-full

        opacity-70

        group-hover:bg-blue-500/40

        transition
        "
      />


      <div className="relative">


        {/* Image */}

        <div
          className="
          relative

          overflow-hidden

          rounded-xl
          "
        >

          <img
            src={
              project.image?.url ||
              "https://placehold.co/600x400"
            }
            alt={project.title}
            className="
            w-full

            h-40

            object-cover

            brightness-90

            group-hover:brightness-100

            group-hover:scale-110

            transition

            duration-500
            "
          />


          {/* Status */}

          <div
            className="
            absolute

            top-2

            left-2

            flex

            gap-2
            "
          >

            {project.featured && (

              <span
                className="
                flex

                items-center

                gap-1

                px-2

                py-1

                rounded-full

                text-[11px]

                bg-yellow-500/20

                border

                border-yellow-400/20

                text-yellow-300

                shadow-sm

                shadow-yellow-500/20
                "
              >
                <Sparkles size={11}/>
                Featured
              </span>

            )}



            {project.isPublished && (

              <span
                className="
                flex

                items-center

                gap-1

                px-2

                py-1

                rounded-full

                text-[11px]

                bg-green-500/20

                border

                border-green-400/20

                text-green-300

                shadow-sm

                shadow-green-500/20
                "
              >
                <Rocket size={11}/>
                Live
              </span>

            )}

          </div>

        </div>



        {/* Content */}


        <div className="mt-4">


          <h2
            className="
            text-lg

            font-semibold

            text-white

            truncate
            "
          >
            {project.title}
          </h2>



          <p
            className="
            mt-1

            text-xs

            text-gray-400

            line-clamp-2
            "
          >
            {project.description}
          </p>




          {/* Tech Stack */}


          <div
            className="
            flex

            flex-wrap

            gap-1.5

            mt-3
            "
          >

            {project.techStack
              ?.slice(0,4)
              .map((tech)=>(

              <span
                key={tech}
                className="
                px-2

                py-1

                rounded-lg

                text-[11px]

                bg-blue-500/10

                border

                border-blue-400/20

                text-blue-300
                "
              >
                {tech}
              </span>

            ))}

          </div>




          {/* Links */}


          <div
            className="
            flex

            gap-2

            mt-4
            "
          >


            {project.github && (

              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="
                flex

                items-center

                gap-1

                px-3

                py-1.5

                rounded-lg

                bg-white/5

                border

                border-white/10

                text-xs

                text-gray-300

                hover:text-white

                hover:bg-white/10

                hover:scale-105

                transition
                "
              >
                <Github size={13}/>
                Code
              </a>

            )}




            {project.liveDemo && (

              <a
                href={project.liveDemo}
                target="_blank"
                rel="noreferrer"
                className="
                flex

                items-center

                gap-1

                px-3

                py-1.5

                rounded-lg

                bg-blue-500/20

                border

                border-blue-400/20

                text-xs

                text-blue-300

                hover:bg-blue-500/30

                hover:scale-105

                transition
                "
              >
                <ExternalLink size={13}/>
                Demo
              </a>

            )}


          </div>





          {/* Actions */}


          <div
            className="
            flex

            items-center

            justify-between

            mt-4

            pt-3

            border-t

            border-white/10
            "
          >



            <div className="flex gap-2">


              <button
                onClick={()=>onFeatured(project._id)}
                className="
                p-2

                rounded-lg

                bg-yellow-500/10

                border

                border-yellow-400/20

                hover:bg-yellow-500/20

                hover:scale-110

                transition
                "
              >

                <Sparkles
                  size={15}
                  className={
                    project.featured
                    ?
                    "text-yellow-400 fill-yellow-400"
                    :
                    "text-gray-500"
                  }
                />

              </button>





              <button
                onClick={()=>onPublish(project._id)}
                className="
                p-2

                rounded-lg

                bg-green-500/10

                border

                border-green-400/20

                hover:bg-green-500/20

                hover:scale-110

                transition
                "
              >

                <Rocket
                  size={15}
                  className={
                    project.isPublished
                    ?
                    "text-green-400"
                    :
                    "text-gray-500"
                  }
                />

              </button>


            </div>





            <div className="flex gap-2">


              <button
                onClick={()=>onEdit(project)}
                className="
                p-2

                rounded-lg

                bg-blue-500/10

                border

                border-blue-400/20

                hover:bg-blue-500/20

                hover:scale-110

                transition
                "
              >

                <SquarePen
                  size={15}
                  className="text-blue-400"
                />

              </button>





              <button
                onClick={()=>onDelete(project)}
                className="
                p-2

                rounded-lg

                bg-red-500/10

                border

                border-red-400/20

                hover:bg-red-500/20

                hover:scale-110

                transition
                "
              >

                <Trash
                  size={15}
                  className="text-red-400"
                />

              </button>


            </div>


          </div>


        </div>


      </div>


    </motion.div>
  );
};


export default ProjectCard;