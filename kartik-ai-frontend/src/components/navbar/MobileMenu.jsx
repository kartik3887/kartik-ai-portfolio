import { X } from "lucide-react";

import NavLinks from "./NavLinksMenu";
import ResumeButton from "./ResumeButton";

const MobileMenu = ({ isOpen, onClose }) => {
  return (
    <div
      className={`
        fixed
        inset-0
        z-[9998]
        lg:hidden
        transition-all
        duration-300
        ${
          isOpen
            ? "visible opacity-100"
            : "invisible opacity-0 pointer-events-none"
        }
      `}
    >
      {/* Backdrop */}

      <div
        onClick={onClose}
        className="
          absolute
          top-0
          left-0
          right-0
          bottom-0
          bg-black/70
          backdrop-blur-lg
        "
      />

      {/* Sliding Panel */}

      <aside
        className={`
          absolute
          top-[92px]
          right-4
          bottom-4

          w-[85%]
          max-w-sm

          rounded-3xl

          border
          border-white/10

          bg-[#050816]/95

          backdrop-blur-2xl

          shadow-[0_30px_80px_rgba(0,0,0,0.6)]

          flex
          flex-col

          overflow-hidden

          transition-transform
          duration-500
          ease-out

          ${isOpen ? "translate-x-0" : "translate-x-[120%]"}
        `}
      >
        {/* Header */}

        <div
          className="
            flex
            items-center
            justify-between

            px-6
            py-6

            border-b
            border-white/10
          "
        >
          <div>
            <h2 className="text-xl font-bold text-white">
              Kartik.AI
            </h2>

            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-cyan-300">
              Navigation
            </p>
          </div>

          <button
            onClick={onClose}
            aria-label="Close Menu"
            className="
              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/5

              text-slate-400

              transition-all

              hover:border-cyan-400/40
              hover:bg-cyan-400/10
              hover:text-white
            "
          >
            <X size={20} />
          </button>
        </div>

        {/* Navigation */}

        <div className="flex-1 overflow-y-auto px-6 py-8">
          <NavLinks mobile onLinkClick={onClose} />
        </div>

        {/* Resume */}

        <div
          className="
            border-t
            border-white/10

            p-6
          "
        >
          <ResumeButton />
        </div>
      </aside>
    </div>
  );
};

export default MobileMenu;