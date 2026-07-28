import { Outlet } from "react-router-dom";
import { motion } from "framer-motion";
import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";

const AdminLayout = () => {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="
      h-screen
      flex
      overflow-hidden
      bg-[#050505]
      text-white
      "
    >
      {/* AI Background Effects */}

      <div
        className="
        fixed
        top-0
        left-0
        md:left-64

        w-64
        md:w-72

        h-64
        md:h-72

        bg-blue-600/15

        blur-[90px]
        md:blur-[110px]

        rounded-full

        pointer-events-none
        "
      />

      <div
        className="
        fixed

        bottom-0
        right-0

        w-64
        md:w-72

        h-64
        md:h-72

        bg-purple-600/15

        blur-[90px]
        md:blur-[110px]

        rounded-full

        pointer-events-none
        "
      />

      {/* Sidebar */}

      <Sidebar open={open} setOpen={setOpen} />

      {/* Mobile Overlay */}

      {open && (
        <div
          onClick={() => setOpen(false)}
          className="
          fixed
          inset-0

          bg-black/60

          backdrop-blur-sm

          z-40

          lg:hidden
          "
        />
      )}

      {/* Main Wrapper */}

      <div
        className="
        flex-1
        flex
        flex-col

        min-w-0

        overflow-hidden
        "
      >
        <Topbar setOpen={setOpen} />

        <motion.main
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.35,
          }}
          className="
          relative

          flex-1

          overflow-y-auto

          dashboard-scroll

          p-4

          lg:p-5
          "
        >
          {/* AI Grid */}

          <div
            className="
            absolute

            inset-0

            opacity-[0.02]

            pointer-events-none

            bg-[linear-gradient(to_right,#fff_1px,transparent_1px),linear-gradient(to_bottom,#fff_1px,transparent_1px)]

            bg-[size:32px_32px]
            "
          />

          <div
            className="
            relative
            z-10

            w-full

            max-w-[1400px]

            mx-auto
            "
          >
            <Outlet />
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default AdminLayout;
