import { motion } from "framer-motion";
import ExperienceCard from "./ExperienceCard";

const ExperienceTimeline = ({ experiences }) => {
  return (
    <div className="relative mt-20">

      {/* Timeline Line */}
      <motion.div
        initial={{
          height: 0,
        }}
        whileInView={{
          height: "100%",
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 1.5,
          ease: "easeOut",
        }}
        className="
          absolute
          left-5
          top-0
          hidden
          w-[2px]
          bg-gradient-to-b
          from-cyan-400
          via-violet-400/50
          to-transparent
          lg:block
        "
      />


      <div
        className="
          space-y-14
          lg:space-y-16
        "
      >

        {experiences.map((experience, index) => (

          <div
            key={experience.id}
            className="
              relative
              flex
              items-start
              gap-8
            "
          >

            {/* Timeline Node */}
            <motion.div
              initial={{
                opacity:0,
                scale:0.5,
              }}
              whileInView={{
                opacity:1,
                scale:1,
              }}
              viewport={{
                once:true,
                amount:0.5,
              }}
              transition={{
                duration:0.5,
                delay:index * 0.15,
              }}
              className="
                relative
                z-10
                hidden
                h-10
                w-10
                flex-shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-cyan-400/30
                bg-[#050816]
                shadow-[0_0_25px_rgba(34,211,238,0.15)]
                lg:flex
              "
            >

              {/* Pulse Ring */}
              <span
                className="
                  absolute
                  inset-0
                  animate-ping
                  rounded-full
                  bg-cyan-400/20
                "
              />


              <span
                className="
                  relative
                  h-3
                  w-3
                  rounded-full
                  bg-cyan-400
                  shadow-[0_0_20px_rgba(34,211,238,0.9)]
                "
              />

            </motion.div>



            {/* Experience Card Wrapper */}
            <motion.div
              initial={{
                opacity:0,
                x:40,
              }}
              whileInView={{
                opacity:1,
                x:0,
              }}
              viewport={{
                once:true,
                amount:0.3,
              }}
              transition={{
                duration:0.7,
                delay:index * 0.15,
                ease:"easeOut",
              }}
              className="
                flex-1
              "
            >

              <ExperienceCard
                experience={experience}
                index={index}
              />

            </motion.div>


          </div>

        ))}

      </div>

    </div>
  );
};


export default ExperienceTimeline;