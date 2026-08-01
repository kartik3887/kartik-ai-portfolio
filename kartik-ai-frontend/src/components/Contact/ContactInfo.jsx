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

const contactItems = [
  {
    icon: Mail,
    title: "Email",
    value: "your-email@gmail.com",
    href: "mailto:your-email@gmail.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+91 98765 43210",
    href: "tel:+919876543210",
  },
  {
    icon: MapPin,
    title: "Location",
    value: "Mumbai, India",
  },
  {
    icon: Github,
    title: "GitHub",
    value: "github.com/yourusername",
    href: "https://github.com/yourusername",
  },
  {
    icon: Linkedin,
    title: "LinkedIn",
    value: "linkedin.com/in/yourusername",
    href: "https://linkedin.com/in/yourusername",
  },
];

const ContactInfo = () => {
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
          p-5
          backdrop-blur-xl
        "
      >
        <div className="flex items-center gap-3">

          <div
            className="
              flex
              h-11
              w-11
              items-center
              justify-center
              rounded-lg
              bg-cyan-400/10
              text-cyan-300
            "
          >
            <Sparkles size={20} />
          </div>

          <div>

            <h3 className="text-xl font-bold text-white">
              Available For Opportunities
            </h3>

            <p className="mt-1 text-sm text-slate-400">
              Open to frontend, full stack and freelance projects.
            </p>

          </div>

        </div>

        <div className="mt-5">
          <span
            className="
              inline-flex
              items-center
              gap-2
              rounded-full
              bg-emerald-500/10
              border
              border-emerald-400/20
              px-4
              py-2
              text-sm
              font-medium
              text-emerald-300
            "
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Currently Available
          </span>
        </div>
      </div>

      {/* Contact Cards */}

      {contactItems.map((item, index) => {
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
              p-2
              backdrop-blur-xl
              transition-all
              duration-300
              hover:border-cyan-400/30
              hover:bg-cyan-400/[0.04]
            "
          >
            <div className="flex items-center gap-4">

              <div
                className="
                  flex
                  h-8
                  w-11
                  items-center
                  justify-center
                  rounded-lg
                  bg-cyan-400/10
                  text-cyan-300
                "
              >
                <Icon size={20} />
              </div>

              <div>

                <p className="text-xs text-slate-500">
                  {item.title}
                </p>

                <p
                  className="
                    mt-1
                    text-xs
                    font-semibold
                    text-white
                    
                  "
                >
                  {item.value}
                </p>

              </div>

            </div>

            {item.href && (
              <ArrowUpRight
                size={18}
                className="
                  text-slate-500
                  transition-all
                  group-hover:text-cyan-300
                  group-hover:translate-x-1
                  group-hover:-translate-y-1
                "
              />
            )}
          </div>
        );

        return (
          <motion.div
            key={index}
            whileHover={{ y: -3 }}
          >
            {item.href ? (
              <a
                href={item.href}
                target="_blank"
                rel="noreferrer"
              >
                {Card}
              </a>
            ) : (
              Card
            )}
          </motion.div>
        );
      })}
    </motion.div>
  );
};

export default ContactInfo;