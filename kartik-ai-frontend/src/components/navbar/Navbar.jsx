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
      {/* Header */}
      <header
        className="
          fixed
          inset-x-0
          top-2
          z-[9999]

          flex
          justify-center

          px-3

          sm:top-3
          sm:px-4
        "
      >
        {/* Navbar */}
        <div
          className="
            group
            relative

            flex
            h-14
            w-full
            max-w-7xl

            items-center
            justify-between

            rounded-full

            border
            border-white/10

            bg-slate-950/75

            px-4

            sm:h-15
            sm:px-5

            lg:h-16
            lg:px-7

            backdrop-blur-xl

            shadow-[0_10px_35px_rgba(0,0,0,0.25)]

            transition-all
            duration-300

            hover:border-cyan-400/20
          "
        >
          {/* Ambient Glow */}
          <div
            className="
              pointer-events-none
              absolute
              inset-0
              rounded-full

              bg-gradient-to-r
              from-cyan-400/5
              via-transparent
              to-violet-500/5

              opacity-60
              blur-xl
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

          {/* Desktop Navigation */}
          <nav className="relative z-10 hidden lg:block">
            <NavLinks />
          </nav>

          {/* Right Actions */}
          <div className="relative z-10 flex items-center gap-2.5 lg:gap-3">
            {/* Resume */}
            <div className="hidden lg:block">
              <ResumeButton />
            </div>

            {/* Mobile Menu */}
            <button
              type="button"
              aria-label="Open Menu"
              aria-expanded={isOpen}
              onClick={() => setIsOpen(true)}
              className="
                flex
                h-9
                w-9
                items-center
                justify-center

                rounded-full

                border
                border-white/10

                bg-white/5

                text-white

                transition-all
                duration-300

                hover:border-cyan-400/40
                hover:bg-cyan-400/10
                hover:text-cyan-300

                active:scale-95

                sm:h-10
                sm:w-10

                lg:hidden
              "
            >
              <Menu size={19} />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <MobileMenu isOpen={isOpen} onClose={() => setIsOpen(false)} />
    </>
  );
};

export default Navbar;
