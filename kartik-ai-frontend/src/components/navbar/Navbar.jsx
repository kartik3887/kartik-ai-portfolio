import { useState } from "react";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";

import Logo from "./Logo";
import NavLinks from "./NavLinksMenu";
import ResumeButton from "./ResumeButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Header */}
      <header
        className="
          fixed
          inset-x-0
          top-3
          z-[9999]

          flex
          justify-center

          px-3

          sm:px-5
        "
      >
        {/* Glass Navbar */}

        <motion.div
          initial={{
            opacity: 0,
            y: -20,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.6,
          }}
          whileHover={{
            y: -2,
          }}
          className="
            group
            relative

            flex
            h-16
            w-full
            max-w-7xl

            items-center
            justify-between

            overflow-hidden

            rounded-full

            border
            border-cyan-400/15

            bg-slate-950/70

            px-5

            backdrop-blur-3xl

            transition-all
            duration-500

            hover:border-cyan-400/30

            lg:h-[70px]
            lg:px-8

            shadow-[0_20px_60px_rgba(0,0,0,0.45)]
          "
        >
          {/* Animated Top Border */}

          <div
            className="
              absolute
              top-0
              left-0

              h-[2px]
              w-full

              bg-gradient-to-r
              from-transparent
              via-cyan-400
              to-transparent
            "
          />

          {/* Animated Glow */}

          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              repeat: Infinity,
              duration: 22,
              ease: "linear",
            }}
            className="
              absolute

              -top-40
              -right-40

              h-[350px]
              w-[350px]

              rounded-full

              bg-gradient-to-r
              from-cyan-400/10
              via-sky-400/5
              to-violet-500/10

              blur-[100px]
            "
          />

          {/* Bottom Glow */}

          <div
            className="
              absolute

              -bottom-40
              -left-40

              h-[320px]
              w-[320px]

              rounded-full

              bg-violet-500/10

              blur-[100px]
            "
          />

          {/* Inner Border */}

          <div
            className="
              pointer-events-none

              absolute
              inset-[1px]

              rounded-full

              border
              border-white/5
            "
          />

          {/* Ambient Overlay */}

          <div
            className="
              absolute
              inset-0

              bg-gradient-to-r
              from-cyan-500/5
              via-transparent
              to-violet-500/5

              opacity-70
            "
          />
          {/* Logo */}

          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.15,
              duration: 0.45,
            }}
            className="
              relative
              z-10

              flex
              shrink-0
              items-center
            "
          >
            <Logo />
          </motion.div>

          {/* Desktop Navigation */}

          <motion.nav
            initial={{
              opacity: 0,
              y: -10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.25,
              duration: 0.45,
            }}
            className="
              relative
              z-10

              hidden

              flex-1
              justify-center

              lg:flex
            "
          >
            <NavLinks />
          </motion.nav>

          {/* Right Actions */}

          <motion.div
            initial={{
              opacity: 0,
              x: 20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.35,
              duration: 0.45,
            }}
            className="
              relative
              z-10

              flex
              shrink-0
              items-center

              gap-3
            "
          >
            {/* Resume Button */}

            <div className="hidden lg:block">
              <ResumeButton />
            </div>
            {/* Mobile Menu Button */}

            <motion.button
              type="button"
              aria-label="Open Menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
              whileHover={{
                scale: 1.08,
                rotate: 8,
              }}
              whileTap={{
                scale: 0.92,
              }}
              className="
                relative

                flex
                h-11
                w-11

                items-center
                justify-center

                overflow-hidden

                rounded-full

                border
                border-cyan-400/20

                bg-white/5

                text-white

                backdrop-blur-xl

                transition-all
                duration-300

                hover:border-cyan-400/50
                hover:bg-cyan-400/10
                hover:text-cyan-300
                hover:shadow-[0_0_25px_rgba(34,211,238,0.25)]

                lg:hidden
              "
            >
              {/* Glow */}

              <span
                className="
                  absolute
                  inset-0

                  opacity-0

                  bg-gradient-to-r
                  from-cyan-500/10
                  via-transparent
                  to-violet-500/10

                  transition-opacity
                  duration-300

                  group-hover:opacity-100
                "
              />

              <Menu
                size={20}
                className="
                  relative
                  z-10
                "
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </header>

      {/* Mobile Menu */}

      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
