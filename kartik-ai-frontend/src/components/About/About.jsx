import { useEffect, useState } from "react";
import AboutCards from "./AboutCards";
import TechStack from "./TechStack";
import useProfile from "@/hooks/useProfile";

import { FolderGit2, Code2, MonitorSmartphone } from "lucide-react";
import { getResume } from "@/api/resume.api";

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
  const [resumeUrl, setResumeUrl] = useState([]);
   const { profile, loading, error } = useProfile();
  useEffect(() => {
    const fetchResume = async () => {
      console.log("Fetching Resume...");

      try {
        const response = await getResume();

        console.log("API Response:", response);

        setResumeUrl(response.resume.fileUrl);
      } catch (err) {
        console.error(err);
      }
    };

    fetchResume();
  }, []);

  const handleDownloadResume = () => {
    if (!resumeUrl) return;

    window.open(resumeUrl, "_blank");
  };
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#050816]
        py-8
        sm:py-10
        lg:py-12
      "
    >
      {/* ================= Background Glow ================= */}

      <div className="pointer-events-none absolute inset-0 -z-10">
        <div
          className="
            absolute
            left-0
            top-16
            h-52
            w-52
            rounded-full
            bg-violet-600/15
            blur-[100px]
            sm:h-64
            sm:w-64
          "
        />

        <div
          className="
            absolute
            bottom-16
            right-0
            h-52
            w-52
            rounded-full
            bg-cyan-500/15
            blur-[100px]
            sm:h-64
            sm:w-64
          "
        />
      </div>

      {/* ================= Container ================= */}

      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          sm:px-6
          lg:px-8
          xl:px-10
        "
      >
        {/* ================= Heading ================= */}

        <div className="text-center">
          {/* Badge */}

          <span
            className="
              inline-flex
              items-center
              rounded-full
              border
              border-violet-500/30
              bg-violet-500/10
              px-3
              py-1
              text-[10px]
              font-medium
              uppercase
              tracking-[0.12em]
              text-violet-400
              sm:px-3
              sm:py-1.5
              sm:text-[11px]
            "
          >
            About Me
          </span>

          {/* Heading */}

          <h2
            className="
              mt-3
              font-black
              leading-[0.98]
              tracking-[-0.035em]
              text-white
              text-[clamp(1.8rem,7vw,2.5rem)]
              sm:mt-3
              sm:text-[clamp(2.1rem,5vw,3rem)]
              lg:text-[3rem]
            "
          >
            Building Modern
            <span
              className="
                block
                bg-gradient-to-r
                from-violet-400
                via-cyan-400
                to-blue-500
                bg-clip-text
                text-transparent
              "
            >
              AI-Powered Experiences
            </span>
          </h2>

          {/* Description */}

          <p
            className="
              mx-auto
              mt-3
              max-w-xl
              text-[12px]
              leading-5
              text-slate-300
              sm:mt-3.5
              sm:text-sm
              sm:leading-6
              lg:text-[15px]
              lg:leading-6
            "
          >
            Passionate Full Stack Developer creating scalable, responsive and
            intelligent web applications using modern technologies.
          </p>
        </div>

        {/* ================= Main About ================= */}

        <div
          className="
            mt-8
            grid
            items-center
            gap-8
            sm:mt-10
            sm:gap-10
            lg:mt-12
            lg:grid-cols-[0.9fr_1.1fr]
            lg:gap-10
            xl:gap-14
          "
        >
          {/* ================= Profile ================= */}

          <div className="flex justify-center">
            <div
              className="
                group
                relative
                w-full
                max-w-[250px]
                rounded-2xl
                border
                border-white/10
                bg-white/5
                p-2
                backdrop-blur-2xl
                shadow-[0_20px_60px_rgba(0,0,0,0.25)]
                transition-all
                duration-500
                hover:-translate-y-1
                hover:border-cyan-400/40
                sm:max-w-[280px]
                sm:rounded-3xl
                sm:p-2.5
                lg:max-w-[300px]
                lg:p-3
              "
            >
              {/* Glow */}

              <div
                className="
                  pointer-events-none
                  absolute
                  inset-0
                  -z-10
                  rounded-3xl
                  bg-gradient-to-r
                  from-violet-600/25
                  to-cyan-500/25
                  blur-2xl
                  opacity-0
                  transition
                  duration-500
                  group-hover:opacity-100
                "
              />

              {/* Image */}

              <div
                className="
                  overflow-hidden
                  rounded-xl
                  border
                  border-white/10
                  sm:rounded-2xl
                "
              >
                <img
                  src={profile?.profileImage?.fileUrl}
                  alt="Kartik Deore"
                  className="
                    h-[260px]
                    w-full
                    object-cover
                    object-top
                    transition
                    duration-700
                    group-hover:scale-105
                    sm:h-[300px]
                    lg:h-[320px]
                  "
                />
              </div>

              {/* Availability */}

              <div
                className="
                  absolute
                  bottom-3
                  left-1/2
                  -translate-x-1/2
                  whitespace-nowrap
                  rounded-full
                  border
                  border-emerald-400/20
                  bg-slate-900/85
                  px-3
                  py-1
                  backdrop-blur-lg
                  sm:bottom-4
                  sm:px-3.5
                  sm:py-1.5
                "
              >
                <div className="flex items-center gap-1.5">
                  <span
                    className="
                      h-1.5
                      w-1.5
                      animate-pulse
                      rounded-full
                      bg-emerald-400
                    "
                  />

                  <span
                    className="
                      text-[10px]
                      text-emerald-300
                      sm:text-[11px]
                    "
                  >
                    Available for Work
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* ================= Content ================= */}

          <div
            className="
              mx-auto
              w-full
              max-w-xl
              lg:mx-0
            "
          >
            {/* Intro */}

            <span
              className="
                text-[11px]
                font-medium
                text-cyan-400
                sm:text-xs
                lg:text-sm
              "
            >
              👋 Hello, I'm
            </span>

            <h3
              className="
                mt-1.5
                text-2xl
                font-black
                leading-tight
                tracking-tight
                text-white
                sm:text-3xl
              "
            >
             {profile?.fullName}
            </h3>

            {/* Roles */}

            <div className="mt-3 flex flex-wrap gap-2">
              <span
                className="
                  rounded-full
                  border
                  border-cyan-400/20
                  bg-gradient-to-br
                  from-cyan-500/20
                  to-violet-500/20
                  px-3
                  py-1
                  text-[10px]
                  font-medium
                  text-cyan-300
                  sm:text-[11px]
                "
              >
                ⚛ Full Stack Developer
              </span>

              <span
                className="
                  rounded-full
                  border
                  border-violet-400/20
                  bg-violet-500/10
                  px-3
                  py-1
                  text-[10px]
                  font-medium
                  text-violet-300
                  sm:text-[11px]
                "
              >
                🤖 AI Engineer
              </span>
            </div>

            {/* Description */}

            <div className="mt-4 space-y-2">
              <p
                className="
                  text-[12px]
                  leading-5
                  text-slate-300
                  sm:text-sm
                  sm:leading-6
                "
              >
              {profile?.aboutDescription}
              </p>

              <p
                className="
                  text-[12px]
                  leading-5
                  text-slate-400
                  sm:text-sm
                  sm:leading-6
                "
              >
             
              </p>
            </div>

            {/* Actions */}

            <div
              className="
                mt-4
                flex
                flex-col
                gap-2.5
                sm:flex-row
                sm:items-center
                sm:gap-3
              "
            >
              <button
                type="button"
                className="
                  flex
                  h-10
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  bg-gradient-to-r
                  from-violet-600
                  to-cyan-500
                  px-5
                  text-[13px]
                  font-bold
                  text-white
                  shadow-[0_8px_28px_rgba(34,211,238,0.18)]
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:shadow-[0_12px_35px_rgba(34,211,238,0.25)]
                  active:scale-[0.97]
                  sm:w-auto
                "
                onClick={handleDownloadResume}
              >
                Download Resume
              </button>

              <button
                className="
                  flex
                  h-10
                  w-full
                  items-center
                  justify-center
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  text-[13px]
                  font-semibold
                  text-slate-200
                  backdrop-blur-xl
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-cyan-400/40
                  hover:bg-cyan-400/10
                  active:scale-[0.97]
                  sm:w-auto
                "
              >
                Contact Me
              </button>
            </div>

            {/* Stats */}

            <div
              className="
                mt-4
                grid
                w-full
                grid-cols-3
                gap-2.5
                sm:mt-4
                sm:gap-3
              "
            >
              {stats.map((item) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.label}
                    className="
                      group
                      relative
                      overflow-hidden
                      rounded-xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-2.5
                      backdrop-blur-xl
                      transition-all
                      duration-300
                      hover:-translate-y-1
                      hover:border-cyan-400/30
                      hover:bg-white/[0.07]
                      hover:shadow-[0_8px_24px_rgba(34,211,238,0.12)]
                      sm:p-3
                    "
                  >
                    <div
                      className="
                        pointer-events-none
                        absolute
                        inset-0
                        bg-gradient-to-br
                        from-cyan-400/10
                        via-transparent
                        to-violet-500/10
                        opacity-0
                        transition-opacity
                        duration-300
                        group-hover:opacity-100
                      "
                    />

                    <div className="relative">
                      <Icon
                        size={17}
                        className="mb-1.5 text-cyan-400 sm:h-[18px] sm:w-[18px]"
                      />

                      <h5
                        className="
                          bg-gradient-to-r
                          from-cyan-300
                          to-violet-400
                          bg-clip-text
                          text-lg
                          font-black
                          leading-none
                          tracking-tight
                          text-transparent
                          sm:text-xl
                        "
                      >
                        {item.number}
                      </h5>

                      <p
                        className="
                          mt-1.5
                          text-[9px]
                          font-medium
                          tracking-wide
                          text-slate-400
                          sm:text-[10px]
                        "
                      >
                        {item.label}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* ================= About Cards ================= */}

        <div className="mt-10 sm:mt-12 lg:mt-14">
          <AboutCards />
        </div>

        {/* ================= Tech Stack ================= */}

        <div className="mt-12 sm:mt-14 lg:mt-16">
          <div className="mb-6 text-center sm:mb-7">
            <span
              className="
                inline-flex
                rounded-full
                border
                border-cyan-500/20
                bg-cyan-500/10
                px-3
                py-1
                text-[10px]
                font-medium
                uppercase
                tracking-[0.12em]
                text-cyan-400
                sm:px-3
                sm:py-1.5
                sm:text-[11px]
              "
            >
              Technologies
            </span>

            <h3
              className="
                mt-3
                text-2xl
                font-black
                leading-tight
                tracking-tight
                text-white
                sm:text-3xl
              "
            >
              My Tech Stack
            </h3>

            <p
              className="
                mx-auto
                mt-2
                max-w-lg
                text-[12px]
                leading-5
                text-slate-400
                sm:text-sm
                sm:leading-6
              "
            >
              Technologies I use to build modern, scalable and high-performance
              web applications.
            </p>
          </div>

          <TechStack />
        </div>
      </div>
    </section>
  );
};

export default About;
