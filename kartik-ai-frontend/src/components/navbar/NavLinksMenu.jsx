import { navLinks } from "./navLinks";

const NavLinksMenu = ({ mobile = false, onLinkClick }) => {
  return (
    <nav
      className={
        mobile
          ? `
            flex
            flex-col
            gap-6
          `
          : `
            hidden
            items-center
            gap-8
            lg:flex
          `
      }
    >
      {navLinks.map((link) => (
        <a
          key={link.id}
          href={link.href}
          aria-label={link.label}
          onClick={onLinkClick}
          className={`
            group
            relative
            whitespace-nowrap

            font-medium
            transition-all
            duration-300

            ${
              mobile
                ? `
                  text-lg
                  text-slate-300
                  hover:translate-x-1
                `
                : `
                  text-[15px]
                  text-slate-300
                `
            }

            hover:text-cyan-300
          `}
        >
          {link.label}

          <span
            className={`
              absolute
              left-0
              ${mobile ? "-bottom-1" : "-bottom-2"}

              h-[2px]
              w-0

              rounded-full

              ${
                mobile
                  ? "bg-cyan-400"
                  : "bg-gradient-to-r from-cyan-400 to-violet-500"
              }

              transition-all
              duration-300

              group-hover:w-full
            `}
          />
        </a>
      ))}
    </nav>
  );
};

export default NavLinksMenu;
