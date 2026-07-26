import {
  ArrowUpRight,
  Github,
  Sparkles,
} from "lucide-react";

const FeaturedProject = ({
  title,
  description,
  image,
  tech,
  github,
  live,
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

        hover:-translate-y-2
        hover:border-cyan-400/30
        hover:shadow-[0_25px_80px_rgba(34,211,238,0.18)]
      "
    >

      {/* Glow Effect */}
      <div
        className="
          absolute
          -right-20
          -top-20
          h-64
          w-64
          rounded-full
          bg-cyan-400/20
          blur-3xl
          transition-all
          duration-700
          group-hover:bg-cyan-400/30
        "
      />


      {/* Top Gradient Line */}
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


        {/* Image Section */}

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
            className="
              h-[300px]
              w-full
              object-cover
              transition-transform
              duration-700

              group-hover:scale-110

              lg:h-full
            "
          />


          {/* Image Overlay */}
          <div
            className="
              absolute
              inset-0
              bg-gradient-to-tr
              from-[#050816]
              via-transparent
              to-transparent
            "
          />



          {/* Badge */}
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
              bg-[#050816]/60
              px-4
              py-2
              text-sm
              font-semibold
              text-cyan-300
              backdrop-blur-xl
            "
          >

            <Sparkles
              size={16}
            />

            Featured Build

          </div>


        </div>





        {/* Content */}

        <div
          className="
            flex
            flex-col
            justify-center
            p-6

            sm:p-8

            lg:p-12
          "
        >


          <h3
            className="
              text-3xl
              font-black
              tracking-tight
              text-white

              lg:text-4xl
            "
          >
            {title}
          </h3>




          <p
            className="
              mt-6
              leading-8
              text-slate-400
            "
          >
            {description}
          </p>




          {/* Tech */}
          <div
            className="
              mt-8
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





          {/* Actions */}

          <div
            className="
              mt-10
              flex
              flex-wrap
              gap-4
            "
          >

            {/* Live */}
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
                px-6
                py-3
                font-bold
                text-slate-900

                transition-all
                duration-300

                hover:-translate-y-1
                hover:shadow-[0_0_35px_rgba(34,211,238,0.5)]
              "
            >

              Live Preview

              <ArrowUpRight
                size={18}
                className="
                  transition-transform
                  group-hover:translate-x-1
                "
              />

            </a>





            {/* Github */}
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
                font-bold
                text-white

                transition-all
                duration-300

                hover:-translate-y-1
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
              "
            >

              <Github size={18}/>

              Source Code

            </a>


          </div>


        </div>


      </div>


    </article>
  );
};


export default FeaturedProject;