import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

import {
  LayoutDashboard,
  FolderKanban,
  UserRound,
  Code2,
  Briefcase,
  FileText,
  MessageSquare,
  Cpu,
  Circle,
  X,
} from "lucide-react";

const menu = [
  {
    name: "Dashboard",
    path: "/admin/dashboard",
    icon: LayoutDashboard,
  },
  {
    name: "Profile",
    path: "/admin/profile",
    icon:UserRound,
  },
  {
    name: "Projects",
    path: "/admin/projects",
    icon: FolderKanban,
  },
  {
    name: "Skills",
    path: "/admin/skills",
    icon: Code2,
  },
  {
    name: "Experience",
    path: "/admin/experience",
    icon: Briefcase,
  },
  {
    name: "Resume",
    path: "/admin/resume",
    icon: FileText,
  },
  {
    name: "Messages",
    path: "/admin/messages",
    icon: MessageSquare,
  },
];

const Sidebar = ({ open, setOpen }) => {
  return (
    <motion.aside
      initial={{
        x: -300,
        opacity: 0,
      }}
      animate={{
        x: open || window.innerWidth >= 1024 ? 0 : -300,
        opacity: 1,
      }}
      transition={{
        duration: 0.35,
        ease: "easeOut",
      }}
      className={`
      fixed
      lg:relative

      z-50

      top-0
      left-0

      w-64
      h-screen

      p-4

      bg-black/60
      lg:bg-black/40

      backdrop-blur-2xl

      border-r
      border-white/10

      sidebar-scroll

      overflow-y-auto

      transition-transform
      duration-300

      ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >
      {/* Mobile Close */}

      <button
        type="button"
        onClick={() => setOpen(false)}
        className="
        lg:hidden

        absolute

        top-4
        right-4

        z-[100]

        p-2

        rounded-lg

        bg-white/10

        border
        border-white/10

        text-white

        hover:bg-white/20

        transition
        "
      >
        <X size={18} />
      </button>

      {/* Sidebar Glow */}

      <div
        className="
        absolute

        top-0
        left-0

        w-48
        h-48

        bg-blue-600/15

        blur-[80px]

        rounded-full
        "
      />

      <div className="relative z-10">
        {/* Logo */}

        <div
          className="
          flex
          items-center
          gap-3

          mb-7
          "
        >
          <div
            className="
            w-10
            h-10

            rounded-xl

            bg-blue-600/20

            border
            border-blue-500/30

            flex
            items-center
            justify-center

            text-blue-400
            "
          >
            <Cpu size={22} />
          </div>

          <div>
            <h1
              className="
              text-xl
              font-bold
              tracking-wide
              "
            >
              KARTIK
              <span className="text-blue-500">.AI</span>
            </h1>

            <p
              className="
              text-[11px]
              text-gray-400
              "
            >
              AI Portfolio CMS
            </p>
          </div>
        </div>

        {/* Menu */}

        <div className="space-y-2">
          {menu.map((item) => {
            const Icon = item.icon;

            return (
              <NavLink
                key={item.name}
                to={item.path}
                onClick={() => setOpen(false)}
                className={({ isActive }) => `

                relative

                flex
                items-center

                gap-3

                px-3
                py-2.5

                rounded-xl

                text-sm

                transition-all

                duration-300

                group


                ${
                  isActive
                    ? "bg-blue-600/20 text-white border border-blue-500/30"
                    : "text-gray-400 hover:text-white hover:bg-white/5"
                }

                `}
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <div
                        className="
                        absolute

                        left-0

                        w-1

                        h-6

                        bg-blue-500

                        rounded-r-full
                        "
                      />
                    )}

                    <Icon
                      size={18}
                      className={
                        isActive ? "text-blue-400" : "group-hover:text-blue-400"
                      }
                    />

                    <span className="font-medium">{item.name}</span>
                  </>
                )}
              </NavLink>
            );
          })}
        </div>

        {/* System Status */}

        <div className="mt-7">
          <div
            className="
            p-3

            rounded-xl

            bg-white/5

            border
            border-white/10

            backdrop-blur-xl
            "
          >
            <div
              className="
              flex
              items-center
              gap-2

              mb-1
              "
            >
              <Circle
                size={8}
                className="
                fill-green-400
                text-green-400
                "
              />

              <span
                className="
                text-xs
                text-green-400
                font-medium
                "
              >
                System Online
              </span>
            </div>

            <p
              className="
              text-[11px]
              text-gray-400
              "
            >
              KARTIK.AI Core Engine
            </p>
          </div>
        </div>
      </div>
    </motion.aside>
  );
};

export default Sidebar;
