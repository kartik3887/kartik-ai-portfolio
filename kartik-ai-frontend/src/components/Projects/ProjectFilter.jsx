import { motion } from "framer-motion";


const categories = [
  "All",
  "React",
  "Full Stack",
  "AI",
  "Frontend",
  "Backend",
];


const ProjectFilter = ({
  active,
  setActive,
}) => {

  return (

    <motion.div

      initial={{
        opacity:0,
        y:25,
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
        duration:0.6,
      }}

      className="
        mt-16
        flex
        flex-wrap
        justify-center
        gap-3
      "

    >

      {categories.map((category)=>{

        const isActive =
          active === category;


        return (

          <motion.button

            key={category}

            type="button"

            whileHover={{
              y:-3,
            }}

            whileTap={{
              scale:0.95,
            }}

            onClick={() =>
              setActive(category)
            }

            aria-label={`Filter projects by ${category}`}

            aria-pressed={isActive}


            className={`
              relative
              overflow-hidden
              rounded-full
              border
              px-5
              py-2.5
              text-sm
              font-semibold

              backdrop-blur-xl

              transition-all
              duration-300


              focus-visible:outline-none
              focus-visible:ring-2
              focus-visible:ring-cyan-400


              ${
                isActive

                ?

                `
                border-cyan-400
                bg-cyan-400
                text-slate-900

                shadow-[0_0_35px_rgba(34,211,238,0.45)]
                `

                :

                `
                border-white/10
                bg-white/5
                text-slate-300

                hover:border-cyan-400/40
                hover:bg-cyan-400/10
                hover:text-cyan-300
                `
              }
            `}

          >

            {/* Active Glow */}

            {isActive && (

              <motion.span

                layoutId="activeFilter"

                className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-cyan-300
                  to-cyan-400
                  -z-10
                "

              />

            )}


            <span
              className="
                relative
                z-10
              "
            >
              {category}
            </span>


          </motion.button>

        );

      })}


    </motion.div>

  );

};


export default ProjectFilter;