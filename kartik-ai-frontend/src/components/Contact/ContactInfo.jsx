import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  ArrowUpRight,
  Sparkles,
} from "lucide-react";

const ContactInfo = ({ profile }) => {
  const contactItems = [
    {
      icon: Mail,
      title: "Email",
      value: profile?.email,
      href: `mailto:${profile?.email}`,
    },
    {
      icon: Phone,
      title: "Phone",
      value: profile?.phone,
      href: `tel:${profile?.phone}`,
    },
    {
      icon: MapPin,
      title: "Location",
      value: profile?.location,
    },
    {
      icon: Github,
      title: "GitHub",
      value: profile?.socials?.github,
      href: profile?.socials?.github,
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: profile?.socials?.linkedin,
      href: profile?.socials?.linkedin,
    },
  ];


  return (
    <motion.div
      initial={{ opacity: 0, x: -30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className="space-y-4"
    >


      {/* Availability Card */}

      <div
        className="
        rounded-xl
        border
        border-cyan-400/20
        bg-gradient-to-br
        from-cyan-500/10
        to-transparent
        p-4
        backdrop-blur-xl
        "
      >

        <div className="flex items-center gap-3">

          <div
            className="
            flex
            h-10
            w-10
            items-center
            justify-center
            rounded-lg
            bg-cyan-400/10
            text-cyan-300
            "
          >
            <Sparkles size={18}/>
          </div>


          <div>

            <h3 className="text-base font-bold text-white">
              Open For Opportunities
            </h3>


            <p className="text-xs text-slate-400 mt-1">
              Frontend, Full Stack & AI Projects
            </p>

          </div>

        </div>


        <div className="mt-4">

          <span
            className={`
            inline-flex
            items-center
            gap-2
            rounded-full
            px-3
            py-1.5
            text-xs
            border
            ${
              profile?.availableForWork
              ?
              "bg-emerald-500/10 border-emerald-400/20 text-emerald-300"
              :
              "bg-red-500/10 border-red-400/20 text-red-300"
            }
            `}
          >

            <span
              className={`
              h-2
              w-2
              rounded-full
              ${
                profile?.availableForWork
                ?
                "bg-emerald-400"
                :
                "bg-red-400"
              }
              `}
            />

            {
              profile?.availableForWork
              ?
              "Currently Available"
              :
              "Not Available"
            }

          </span>

        </div>

      </div>



      {/* Contact Cards */}

      {
        contactItems.map((item,index)=>{

          if(!item.value) return null;

          const Icon = item.icon;


          const Card = (

            <div
              className="
              group
              flex
              items-center
              justify-between
              rounded-xl
              border
              border-white/10
              bg-white/[0.04]
              p-3
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.05]
              "
            >


              <div className="flex items-center gap-3">


                <div
                  className="
                  flex
                  h-9
                  w-9
                  items-center
                  justify-center
                  rounded-lg
                  bg-cyan-400/10
                  text-cyan-300
                  "
                >

                  <Icon size={17}/>

                </div>



                <div>

                  <p className="text-[11px] text-slate-500">
                    {item.title}
                  </p>


                  <p
                    className="
                    mt-1
                    max-w-[180px]
                    truncate
                    text-xs
                    font-semibold
                    text-white
                    "
                  >
                    {item.value}
                  </p>


                </div>


              </div>



              {
                item.href &&
                <ArrowUpRight
                  size={16}
                  className="
                  text-slate-500
                  transition-all
                  group-hover:text-cyan-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                  "
                />
              }


            </div>

          );


          return (

            <motion.div
              key={index}
              whileHover={{y:-3}}
            >

              {
                item.href
                ?
                <a
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {Card}
                </a>
                :
                Card
              }

            </motion.div>

          )

        })
      }


    </motion.div>
  );
};


export default ContactInfo;