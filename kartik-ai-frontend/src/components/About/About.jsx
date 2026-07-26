import AboutCards from "./AboutCards";
import TechStack from "./TechStack";
import profile from "/profile.jpeg";

import {
  FolderGit2,
  Code2,
  MonitorSmartphone,
} from "lucide-react";

const stats = [
  {
    number: "2+",
    label: "Projects",
    icon: FolderGit2,
  },
  {
    number: "10+",
    label: "Technologies",
    icon: Code2,
  },
  {
    number: "100%",
    label: "Responsive",
    icon: MonitorSmartphone,
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[#050816] py-24 lg:py-32"
    >
      {/* Background Glow */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-10 top-20 h-72 w-72 rounded-full bg-violet-600/20 blur-[120px]" />
        <div className="absolute bottom-20 right-10 h-72 w-72 rounded-full bg-cyan-500/20 blur-[120px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="text-center">

          <span className="inline-flex rounded-full border border-violet-500/30 bg-violet-500/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-violet-400">
            About Me
          </span>

          <h2 className="mt-6 text-4xl font-extrabold leading-tight text-white sm:text-5xl lg:text-6xl">
            Building Modern
            <span className="block bg-gradient-to-r from-violet-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              AI-Powered Experiences
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-400 sm:text-lg">
            Passionate Full Stack Developer creating scalable,
            responsive and intelligent web applications using
            modern technologies.
          </p>

        </div>

        {/* Main */}

        <div className="mt-20 grid items-center gap-16 lg:grid-cols-2">

          {/* Profile */}

          <div className="flex justify-center">

            <div
              className="
              group
              relative
              w-full
              max-w-[380px]
              rounded-3xl
              border
              border-white/10
              bg-white/5
              p-4
              backdrop-blur-xl
              transition-all
              duration-500
              hover:-translate-y-3
              hover:border-cyan-400/40
            "
            >

              {/* Glow */}

              <div
                className="
                absolute
                inset-0
                -z-10
                rounded-3xl
                bg-gradient-to-r
                from-violet-600/30
                to-cyan-500/30
                blur-2xl
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
              "
              />

              <div className="overflow-hidden rounded-2xl border border-white/10">

                <img
                  src={profile}
                  alt="Kartik Deore"
                  className="
                  h-[420px]
                  w-full
                  object-cover
                  object-top
                  transition
                  duration-700
                  group-hover:scale-105
                "
                />

              </div>

              {/* Badge */}

              <div
                className="
                absolute
                bottom-6
                left-1/2
                -translate-x-1/2
                rounded-full
                border
                border-emerald-400/20
                bg-slate-900/80
                px-5
                py-2
                backdrop-blur-lg
              "
              >

                <div className="flex items-center gap-2">

                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />

                  <span className="text-sm text-emerald-300">
                    Available for Work
                  </span>

                </div>

              </div>

            </div>

          </div>

          {/* Right */}

          <div className="max-w-xl">

            <span className="font-medium text-cyan-400">
              👋 Hello, I'm
            </span>

            <h3 className="mt-3 text-4xl font-bold text-white lg:text-5xl">
              Kartik Deore
            </h3>

            <div className="mt-5 flex flex-wrap gap-3">

              <span className="rounded-full border border-cyan-400/20 bg-gradient-to-br from-cyan-500/20 to-violet-500/20 px-4 py-2 text-sm font-medium text-cyan-300">
                ⚛ Full Stack Developer
              </span>

              <span className="rounded-full border border-violet-400/20 bg-violet-500/10 px-4 py-2 text-sm font-medium text-violet-300">
                🤖 AI Engineer
              </span>

            </div>

            <p className="mt-6 leading-8 text-slate-400">
              I build responsive, scalable and AI-powered web
              applications using React, Node.js, Express and
              MongoDB.
            </p>

            <p className="mt-5 leading-8 text-slate-400">
              I enjoy solving real-world problems through clean UI,
              modern architecture and continuous learning.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">

              <button
                className="
                rounded-xl
                bg-gradient-to-r
                from-violet-600
                to-cyan-500
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:shadow-xl
              "
              >
                Download Resume
              </button>

              <button
                className="
                rounded-xl
                border
                border-white/10
                bg-white/5
                px-6
                py-3
                font-semibold
                text-white
                transition-all
                duration-300
                hover:-translate-y-1
                hover:border-cyan-400
                hover:bg-cyan-500/10
                hover:text-cyan-300
                hover:shadow-lg
              "
              >
                Contact Me
              </button>

            </div>

                        {/* Stats */}

            <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3">

              {stats.map((item) => {

                const Icon = item.icon;

                return (

                  <div
                    key={item.label}
                    className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/5
                      p-5
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:-translate-y-2
                      hover:border-cyan-400/40
                      hover:bg-white/10
                    "
                  >

                    <Icon
                      size={26}
                      className="mb-4 text-cyan-400"
                    />

                    <h5 className="text-3xl font-bold text-cyan-400">
                      {item.number}
                    </h5>

                    <p className="mt-2 text-sm text-slate-400">
                      {item.label}
                    </p>

                  </div>

                );

              })}

            </div>

          </div>

        </div>

        {/* About Cards */}

        <div className="mt-24">
          <AboutCards />
        </div>

        {/* Tech Stack */}

        <div className="mt-28">

          <div className="mb-12 text-center">

            <span className="inline-flex rounded-full border border-cyan-500/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium uppercase tracking-[0.25em] text-cyan-400">
              Technologies
            </span>

            <h3 className="mt-5 text-4xl font-bold text-white">
              My Tech Stack
            </h3>

            <p className="mx-auto mt-4 max-w-2xl text-slate-400">
              Technologies I use to build modern, scalable and
              high-performance web applications.
            </p>

          </div>

          <TechStack />

        </div>

      </div>

    </section>
  );
};

export default About;