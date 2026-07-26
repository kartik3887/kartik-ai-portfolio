import React from "react";
import {
  ArrowUpRight,
  Github,
} from "lucide-react";


const ProjectCard = ({
  title,
  description,
  image,
  tech = [],
  github,
  live,
}) => {


  const headingId = `project-${title
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "")}`;


  return (

    <article
      aria-labelledby={headingId}
      className="
        group/card
        relative
        overflow-hidden
        rounded-3xl
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-2xl

        transition-all
        duration-500

        hover:-translate-y-2
        hover:border-cyan-400/30
        hover:shadow-[0_20px_60px_rgba(34,211,238,0.15)]
      "
    >


      {/* Top Accent */}
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



      {/* Glow */}

      <div
        className="
          pointer-events-none
          absolute
          -right-20
          -top-20
          h-48
          w-48
          rounded-full
          bg-cyan-400/20
          blur-3xl

          opacity-0
          transition-opacity
          duration-500

          group-hover/card:opacity-100
        "
      />




      {/* Image */}

      <div
        className="
          relative
          overflow-hidden
        "
      >

        <img
          src={image}
          alt={title}
          loading="lazy"
          decoding="async"
          draggable={false}
          className="
            aspect-[16/10]
            w-full
            object-cover
            object-top

            transition-transform
            duration-700

            group-hover/card:scale-110
          "
        />



        {/* Overlay */}

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
          relative
          flex
          h-full
          flex-col
          p-6
        "
      >


        <h3
          id={headingId}
          className="
            text-2xl
            font-black
            tracking-tight
            text-white
          "
        >
          {title}
        </h3>




        <p
          className="
            mt-4
            line-clamp-3
            text-sm
            leading-7
            text-slate-400
          "
        >
          {description}
        </p>





        {/* Tech Stack */}

        {tech.length > 0 && (

          <div
            className="
              mt-6
              flex
              flex-wrap
              gap-2
            "
          >

            {tech.map((item)=>(

              <span
                key={item}
                className="
                  rounded-full
                  border
                  border-white/10
                  bg-white/5
                  px-3
                  py-1.5
                  text-xs
                  font-medium
                  text-slate-300

                  transition-all
                  duration-300

                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  hover:text-cyan-300
                "
              >
                {item}
              </span>

            ))}


          </div>

        )}






        {/* Buttons */}

        <div
          className="
            mt-8
            flex
            flex-wrap
            gap-3
          "
        >



          {live && (

            <a
              href={live}
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex
                items-center
                gap-2
                rounded-xl
                bg-cyan-400
                px-5
                py-2.5
                text-sm
                font-bold
                text-slate-900

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_0_30px_rgba(34,211,238,0.45)]
              "
            >

              Live Preview

              <ArrowUpRight
                size={16}
              />

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
                px-5
                py-2.5
                text-sm
                font-bold
                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
              "
            >

              <Github
                size={16}
              />

              Source Code

            </a>

          )}


        </div>


      </div>


    </article>

  );

};


export default React.memo(ProjectCard);