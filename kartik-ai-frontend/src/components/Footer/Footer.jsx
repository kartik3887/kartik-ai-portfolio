import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ArrowUpRight } from "lucide-react";
import Logo from "../Navbar/Logo";
import useProfile from "@/hooks/useProfile";

const Footer = () => {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return (
      <section className="flex h-screen items-center justify-center bg-[#050816]">
        Loading...
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex h-screen items-center justify-center bg-[#050816] text-red-400">
        Failed to load profile
      </section>
    );
  }

  const links = [
    {
      name: "Home",
      href: "#home",
    },
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "Contact",
      href: "#contact",
    },
  ];

  const socials = [
    {
      icon: Github,
      href: profile?.socials?.github,
    },
    {
      icon: Linkedin,
      href: profile?.socials?.linkedin,
    },
    {
      icon: Mail,
      href: `mailto:${profile?.email}`,
    },
  ];

  return (
    <footer className="relative overflow-hidden bg-[#050816] pt-20 pb-8">
      <div
        className="
absolute
inset-0
pointer-events-none
"
      >
        <div
          className="
absolute
left-1/2
top-0
h-[300px]
w-[300px]
-translate-x-1/2
rounded-full
bg-cyan-400/10
blur-[120px]
"
        />

        <div
          className="
absolute
right-0
bottom-0
h-[250px]
w-[250px]
rounded-full
bg-violet-500/10
blur-[120px]
"
        />
      </div>

      <div
        className="
relative
mx-auto
max-w-7xl
px-5
sm:px-6
lg:px-8
"
      >
        <motion.div
          initial={{
            opacity: 0,
            y: 40,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="
rounded-3xl
border
border-white/10
bg-white/[0.05]
p-6
backdrop-blur-2xl
sm:p-10
"
        >
          <div
            className="
grid
gap-10
md:grid-cols-2
lg:grid-cols-4
"
          >
            {/* Brand */}

            <div className="lg:col-span-2">
              <Logo />

              <p
                className="
mt-5
max-w-md
text-sm
leading-7
text-slate-400
"
              >
                {profile?.heroDescription ||
                  "Building modern web experiences with React, AI technologies and scalable solutions."}
              </p>

              <div
                className="
mt-5
inline-flex
rounded-full
border
border-cyan-400/20
bg-cyan-400/10
px-4
py-2
text-xs
text-cyan-300
"
              >
                {profile?.title || "Software Developer"} • AI Enthusiast
              </div>
            </div>

            {/* Navigation */}

            <div>
              <h3 className="text-sm font-bold uppercase tracking-widest text-white">
                Navigation
              </h3>

              <ul className="mt-5 space-y-3">
                {links.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{
                      opacity: 0,
                      x: -10,
                    }}
                    whileInView={{
                      opacity: 1,
                      x: 0,
                    }}
                    viewport={{
                      once: true,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >
                    <a
                      href={link.href}
                      className="
text-sm
text-slate-400
transition
hover:text-cyan-300
"
                    >
                      {link.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Connect */}

            <div>
              <h3
                className="
text-sm
font-bold
uppercase
tracking-widest
text-white
"
              >
                Connect
              </h3>

              <div
                className="
mt-5
flex
gap-3
"
              >
                {socials.map((social, index) => {
                  const Icon = social.icon;

                  return (
                    <a
                      key={index}
                      href={social.href || "#"}
                      target="_blank"
                      rel="noreferrer"
                      className="
flex
h-11
w-11
items-center
justify-center
rounded-xl
border
border-white/10
bg-white/5
text-white
transition
hover:border-cyan-400
hover:text-cyan-300
hover:-translate-y-2
"
                    >
                      <Icon size={20} />
                    </a>
                  );
                })}
              </div>

              <a
                href="#contact"
                className="
mt-6
inline-flex
items-center
gap-2
text-sm
font-semibold
text-cyan-300
"
              >
                Let's Work Together
                <ArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </motion.div>

        <div
          className="
mt-8
flex
flex-col
items-center
justify-between
gap-3
border-t
border-white/10
pt-6
text-center
sm:flex-row
"
        >
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Kartik.AI. All rights reserved.
          </p>

          <p className="text-sm text-slate-500">
            Designed & Built with ❤️ using React
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
