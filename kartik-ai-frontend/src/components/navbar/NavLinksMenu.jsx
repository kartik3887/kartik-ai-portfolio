import { motion } from "framer-motion";
import { navLinks } from "./navLinks";

const NavLinksMenu = ({ mobile = false, onLinkClick }) => {
  return (
    <nav
      className={
        mobile
          ? `
            flex
            flex-col
            gap-5
            w-full
          `
          : `
            hidden
            lg:flex
            items-center
            gap-3
          `
      }
    >
      {navLinks.map((link, index) => (
        <motion.a
          key={link.id}
          href={link.href}
          aria-label={link.label}
          onClick={onLinkClick}
          initial={{
            opacity: 0,
            y: -10,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            delay: index * 0.08,
            duration: 0.35,
          }}
          whileHover={{
            y: -2,
          }}
          whileTap={{
            scale: 0.97,
          }}
          className={`
            group
            relative
            overflow-hidden

            ${
              mobile
                ? `
                    px-4
                    py-3
                    rounded-xl
                    text-lg
                  `
                : `
                    px-4
                    py-2.5
                    rounded-full
                    text-[15px]
                  `
            }

            font-medium
            tracking-wide
            text-slate-300

            transition-all
            duration-300

            hover:text-cyan-300
            hover:bg-cyan-500/10
            hover:border-cyan-400/20
            hover:shadow-[0_0_20px_rgba(34,211,238,0.18)]

            border
            border-transparent

            backdrop-blur-sm
          `}
        >
          {/* Glow Background */}
          <span
            className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
              bg-gradient-to-r
              from-cyan-500/5
              via-sky-400/10
              to-violet-500/5
            "
          />

          {/* Text */}
          <span
            className="
              relative
              z-10
              transition-all
              duration-300
              group-hover:text-cyan-300
            "
          >
            {link.label}
          </span>

          {/* Bottom Animated Line */}
          <span
            className="
              absolute
              left-1/2
              -translate-x-1/2
              bottom-0

              h-[2px]
              w-0

              rounded-full

              bg-gradient-to-r
              from-cyan-400
              via-sky-400
              to-violet-500

              transition-all
              duration-300

              group-hover:w-[70%]
            "
          />

          {/* Top Glow */}
          <span
            className="
              absolute
              top-0
              left-1/2
              -translate-x-1/2

              h-px
              w-0

              bg-cyan-300

              opacity-80

              transition-all
              duration-300

              group-hover:w-10
            "
          />
        </motion.a>
      ))}
    </nav>
  );
};

export default NavLinksMenu;