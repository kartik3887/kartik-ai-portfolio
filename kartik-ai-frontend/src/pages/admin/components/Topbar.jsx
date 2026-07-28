import { LogOut, ShieldCheck, Circle, Menu } from "lucide-react";

import { useAuth } from "@/context/AuthContext";

const Topbar = ({ setOpen }) => {
  const { user, logout } = useAuth();

  return (
    <header
      className="
      h-16

      px-4
      lg:px-5

      flex
      items-center
      justify-between

      border-b
      border-white/10

      bg-black/30

      backdrop-blur-xl

      sticky
      top-0

      z-30
      "
    >
      {/* Left */}

      <div
        className="
        flex
        items-center
        gap-3
        "
      >
        {/* Mobile Menu */}

        <button
          onClick={() => setOpen(true)}
          className="
          lg:hidden

          p-2

          rounded-lg

          bg-white/5

          border
          border-white/10
          "
        >
          <Menu size={18} />
        </button>

        <div>
          <div
            className="
            flex
            items-center
            gap-2
            "
          >
            <h2
              className="
              text-base
              sm:text-lg

              font-semibold

              text-white

              whitespace-nowrap
              "
            >
              AI Command Center
            </h2>

            <div
              className="
              hidden
              sm:flex

              items-center

              gap-1

              px-2

              py-0.5

              rounded-full

              bg-green-500/10

              border
              border-green-500/20
              "
            >
              <Circle
                size={7}
                className="
                fill-green-400
                text-green-400
                "
              />

              <span
                className="
                text-[11px]

                text-green-400
                "
              >
                Online
              </span>
            </div>
          </div>

          <p
            className="
            hidden
            sm:block

            text-[11px]

            text-gray-400
            "
          >
            Manage your KARTIK.AI ecosystem
          </p>
        </div>
      </div>

      {/* Right */}

      <div
        className="
        flex
        items-center
        gap-2
        "
      >
        {/* User */}

        <div
          className="
          hidden
          md:flex

          items-center

          gap-2

          px-3

          py-1.5

          rounded-xl

          bg-white/5

          border
          border-white/10
          "
        >
          <div
            className="
            w-8
            h-8

            rounded-full

            bg-blue-600/30

            flex
            items-center
            justify-center

            text-blue-300

            text-sm

            font-bold
            "
          >
            {user?.name?.charAt(0) || "K"}
          </div>

          <div>
            <p
              className="
              text-xs

              text-white

              font-medium
              "
            >
              {user?.name}
            </p>

            <div
              className="
              flex
              items-center
              gap-1
              "
            >
              <ShieldCheck size={12} className="text-blue-400" />

              <p
                className="
                text-[11px]

                text-gray-400
                "
              >
                {user?.role}
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Avatar */}

        <div
          className="
          md:hidden

          w-8
          h-8

          rounded-full

          bg-blue-600/30

          flex
          items-center
          justify-center

          text-blue-300

          text-sm

          font-bold
          "
        >
          {user?.name?.charAt(0) || "K"}
        </div>

        {/* Logout */}

        <button
          onClick={logout}
          className="
          flex
          items-center
          gap-2

          px-3

          py-1.5

          rounded-lg

          bg-red-500/10

          border
          border-red-500/20

          text-red-400

          text-sm

          hover:bg-red-500

          hover:text-white

          transition
          "
        >
          <LogOut size={15} />

          <span className="hidden sm:block">Logout</span>
        </button>
      </div>
    </header>
  );
};

export default Topbar;
