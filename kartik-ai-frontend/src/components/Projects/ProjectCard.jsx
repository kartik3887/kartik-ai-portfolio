import React from "react";
import { ArrowUpRight, Github } from "lucide-react";

const ProjectCard = ({
  title,
  description,
  image,
  techStack = [],
  github,
  liveDemo,
}) => {
  const headingId = `project-${title
    ?.toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;

  return (
    <article
      aria-labelledby={headingId}
      className="
        group
        relative
        flex
        h-full
        flex-col
        overflow-hidden
        rounded-2xl
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:shadow-[0_15px_45px_rgba(34,211,238,0.12)]
      "
    >
      {/* Glow */}
      <div
        className="
          pointer-events-none
          absolute
          -right-16
          -top-16
          h-40
          w-40
          rounded-full
          bg-cyan-400/10
          blur-[80px]
          opacity-0
          transition-all
          duration-500
          group-hover:opacity-100
        "
      />

      {/* Top Border */}
      <div
        className="
          absolute
          left-0
          top-0
          h-[2px]
          w-full
          bg-gradient-to-r
          from-cyan-400
          via-violet-400
          to-transparent
        "
      />

      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={image?.url}
          alt={title}
          loading="lazy"
          draggable={false}
          className="
h-40
w-full
object-cover
object-top
transition-transform
duration-700
group-hover:scale-105

sm:h-44
lg:h-48
"
        />

        <div
          className="
            absolute
            inset-0
            bg-gradient-to-t
            from-[#050816]
            via-transparent
            to-transparent
          "
        />
      </div>

      {/* Content */}

      <div
        className="
          flex
          flex-1
          flex-col
          p-4
        "
      >
        {/* Title */}

        <h3
          id={headingId}
          className="
            text-lg
sm:text-xl
            font-bold
            leading-tight
            tracking-tight
            text-white
          "
        >
          {title}
        </h3>

        {/* Description */}

        <p
          className="
          
            line-clamp-3
           mt-2.5
text-[13px]
leading-5
            text-slate-400
          "
        >
          {description}
        </p>

        {/* Tech Stack */}

        {techStack.length > 0 && (
          <div
            className="
              mt-4
              flex
              flex-wrap
              gap-2
            "
          >
            {techStack.map((tech) => (
              <span
                key={tech}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                 px-2.5
py-1
text-[10px]
                  font-medium
                  text-slate-300
                  transition-all
                  duration-300
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:text-cyan-300
                "
              >
                {tech}
              </span>
            ))}
          </div>
        )}

        <div className="flex-1" />

        {/* Buttons */}

        <div
          className="
            mt-6
            flex
            flex-wrap
            gap-2
          "
        >
          {liveDemo && (
            <a
              href={liveDemo}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                bg-cyan-400
               px-3.5
py-1.5
text-[11px]
                font-semibold
                text-slate-900
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-[0_0_20px_rgba(34,211,238,0.35)]
              "
            >
              Live Demo
              <ArrowUpRight size={15} />
            </a>
          )}

          {github && (
            <a
              href={github}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-1.5
                rounded-lg
                border
                border-white/10
                bg-white/5
                px-4
                py-2
                text-xs
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
                hover:text-cyan-300
              "
            >
              <Github size={15} />
              Source
            </a>
          )}
        </div>
      </div>
    </article>
  );
};

export default React.memo(ProjectCard);
