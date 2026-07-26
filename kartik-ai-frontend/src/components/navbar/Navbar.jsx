import { useState } from "react";
import { Menu } from "lucide-react";

import Logo from "./Logo";
import NavLinks from "./NavLinksMenu";
import ResumeButton from "./ResumeButton";
import MobileMenu from "./MobileMenu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className="
          fixed
          inset-x-0
          top-4
          z-[9999]
          flex
          justify-center
          px-4
          sm:px-6
        "
      >
        <div
          className="
            group
            relative

            flex
            h-[72px]

            w-full
            max-w-7xl

            items-center
            justify-between

            rounded-full

            border
            border-white/10

            bg-[#050816]/80

            px-5
            sm:px-8

            backdrop-blur-2xl

            shadow-[0_20px_60px_rgba(0,0,0,0.45)]

            transition-all
            duration-500

            hover:border-cyan-400/30
          "
        >
          {/* Glow */}

          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full

              bg-gradient-to-r
              from-cyan-400/10
              via-transparent
              to-violet-500/10

              blur-xl
              opacity-70
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

          {/* Logo */}

          <div className="relative z-10 shrink-0">
            <Logo />
          </div>

          {/* Desktop Menu */}

          <div className="relative z-10 hidden lg:block">
            <NavLinks />
          </div>

          {/* Right */}

          <div className="relative z-10 flex items-center gap-3">
            <div className="hidden lg:block">
              <ResumeButton />
            </div>

            <button
              onClick={() => setIsOpen(true)}
              aria-label="Open Menu"
              aria-expanded={isOpen}
              className="
                flex

                h-11
                w-11

                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-white/5

                text-white

                transition-all
                duration-300

                hover:-translate-y-0.5
                hover:border-cyan-400/40
                hover:bg-cyan-400/10
                hover:text-cyan-300

                active:scale-95

                lg:hidden
              "
            >
              <Menu size={22} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default Navbar;