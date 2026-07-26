import { motion } from "framer-motion";
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Sparkles,
  ArrowUpRight,
} from "lucide-react";

import { contactInfo } from "./contactData";


const icons = {
  email: Mail,
  location: MapPin,
  github: Github,
  linkedin: Linkedin,
};


const ContactInfo = () => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        x: -50,
      }}
      whileInView={{
        opacity: 1,
        x: 0,
      }}
      viewport={{
        once:true,
        amount:0.3,
      }}
      transition={{
        duration:0.8,
      }}

      className="
        space-y-6
      "
    >


      {/* Availability Card */}

      <div
        className="
          group
          relative
          overflow-hidden
          rounded-3xl
          border
          border-cyan-400/20
          bg-gradient-to-br
          from-cyan-400/15
          via-white/[0.05]
          to-transparent
          p-7
          backdrop-blur-2xl
          transition-all
          duration-500
          hover:-translate-y-2
          hover:border-cyan-400/40
          hover:shadow-[0_0_50px_rgba(34,211,238,0.15)]
        "
      >


        {/* Shine */}

        <div
          className="
            absolute
            -left-20
            top-0
            h-full
            w-20
            rotate-12
            bg-white/20
            blur-xl
            transition-all
            duration-700
            group-hover:left-[120%]
          "
        />


        {/* Glow */}

        <div
          className="
            absolute
            right-0
            top-0
            h-40
            w-40
            rounded-full
            bg-cyan-400/20
            blur-3xl
          "
        />



        <div
          className="
            relative
            flex
            items-center
            gap-3
          "
        >

          <motion.div
            animate={{
              rotate:[0,10,0]
            }}
            transition={{
              duration:3,
              repeat:Infinity
            }}
          >

            <Sparkles
              size={24}
              className="text-cyan-300"
            />

          </motion.div>



          <h3
            className="
              text-lg
              font-bold
              text-white
            "
          >
            Available For Opportunities
          </h3>


        </div>



        <p
          className="
            relative
            mt-4
            text-sm
            leading-7
            text-slate-300
          "
        >
          Open to frontend development roles, freelance projects,
          and exciting collaborations. Let's build something impactful.
        </p>


        <div
          className="
            mt-5
            inline-flex
            items-center
            gap-2
            rounded-full
            bg-emerald-400/10
            px-4
            py-2
            text-xs
            font-semibold
            text-emerald-300
            border
            border-emerald-400/20
          "
        >

          <span
            className="
              h-2
              w-2
              rounded-full
              bg-emerald-400
              animate-pulse
            "
          />

          Currently Available

        </div>


      </div>





      {/* Contact Cards */}


      {
        contactInfo.map((item,index)=>{


          const Icon = icons[item.type];


          return (

            <motion.a

              key={item.type}

              href={item.link}

              target={
                item.external
                ? "_blank"
                : undefined
              }

              rel={
                item.external
                ? "noopener noreferrer"
                : undefined
              }


              initial={{
                opacity:0,
                y:20
              }}

              whileInView={{
                opacity:1,
                y:0
              }}

              viewport={{
                once:true
              }}

              transition={{
                delay:index*0.1
              }}


              whileHover={{
                y:-6
              }}


              className="
                group
                relative
                flex
                items-center
                gap-5
                overflow-hidden
                rounded-3xl
                border
                border-white/10
                bg-white/[0.05]
                p-6
                backdrop-blur-2xl
                transition-all
                duration-500
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
                hover:shadow-[0_0_35px_rgba(34,211,238,0.12)]
              "

            >


              {/* Icon */}

              <div
                className="
                  flex
                  h-14
                  w-14
                  shrink-0
                  items-center
                  justify-center
                  rounded-2xl
                  border
                  border-cyan-400/20
                  bg-cyan-400/10
                  text-cyan-300
                  transition-all
                  duration-500
                  group-hover:scale-110
                  group-hover:rotate-6
                "
              >

                <Icon size={24}/>

              </div>




              {/* Text */}

              <div
                className="
                  flex-1
                "
              >

                <p
                  className="
                    text-sm
                    text-slate-400
                  "
                >
                  {item.label}
                </p>


                <p
                  className="
                    mt-1
                    font-semibold
                    text-white
                    transition-colors
                    group-hover:text-cyan-300
                  "
                >
                  {item.value}
                </p>

              </div>



              <ArrowUpRight
                size={18}
                className="
                  text-slate-400
                  transition-all
                  duration-300
                  group-hover:-translate-y-1
                  group-hover:translate-x-1
                  group-hover:text-cyan-300
                "
              />


            </motion.a>

          )

        })
      }


    </motion.div>
  );
};


export default ContactInfo;