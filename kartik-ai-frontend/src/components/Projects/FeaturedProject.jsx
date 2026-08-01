import {
  ArrowUpRight,
  Github,
  Sparkles,
} from "lucide-react";

const FeaturedProject = ({
  title,
  description,
  image,
  techStack = [],
  github,
  liveDemo,
}) => {
  return (
    <article
      className="
        group
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-2xl
        transition-all
        duration-500
        hover:-translate-y-1
        hover:border-cyan-400/30
        hover:shadow-[0_25px_70px_rgba(34,211,238,0.15)]
      "
    >
      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-24
          -top-24
          h-72
          w-72
          rounded-full
          bg-cyan-400/15
          blur-[100px]
          transition-all
          duration-500
          group-hover:bg-cyan-400/25
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

      <div
        className="
          relative
          grid
          lg:grid-cols-2
        "
      >
        {/* Image */}

        <div
          className="
            relative
            overflow-hidden
            lg:min-h-[420px]
          "
        >
          <img
            src={image?.url}
            alt={title}
            loading="lazy"
            decoding="async"
            className="
              h-72
              w-full
              object-cover
              object-top
              transition-transform
              duration-700
              group-hover:scale-105

              sm:h-80

              lg:h-full
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

          <div
            className="
              absolute
              left-6
              top-6
              inline-flex
              items-center
              gap-2
              rounded-full
              border
              border-cyan-400/30
              bg-[#050816]/70
              px-4
              py-2
              text-sm
              font-semibold
              text-cyan-300
              backdrop-blur-xl
            "
          >
            <Sparkles size={16} />
            Featured Project
          </div>
        </div>

        {/* Content */}

        <div
          className="
            flex
            flex-col
            justify-center
            p-7

            sm:p-8

            lg:p-10
          "
        >
          <h3
            className="
              text-3xl
              font-bold
              leading-tight
              tracking-tight
              text-white

              lg:text-4xl
            "
          >
            {title}
          </h3>

          <p
            className="
              mt-5
              text-base
              leading-8
              text-slate-400
            "
          >
            {description}
          </p>

          {techStack.length > 0 && (
            <div
              className="
                mt-8
                flex
                flex-wrap
                gap-3
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
                    px-4
                    py-2
                    text-sm
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

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
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
                  gap-2
                  rounded-xl
                  bg-cyan-400
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-slate-900
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_0_30px_rgba(34,211,238,0.4)]
                "
              >
                Live Demo
                <ArrowUpRight size={18} />
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
                  gap-2
                  rounded-xl
                  border
                  border-white/10
                  bg-white/5
                  px-6
                  py-3
                  text-sm
                  font-semibold
                  text-white
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:text-cyan-300
                "
              >
                <Github size={18} />
                Source Code
              </a>
            )}
          </div>
        </div>
      </div>
    </article>
  );
};

export default FeaturedProject;