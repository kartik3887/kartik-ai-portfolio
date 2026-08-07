import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import AIAssistant from "../AI/AIAssistant";

import SoftAurora from "@/components/ui/SoftAurora";
import AIBackground from "../Background/AIBackground";
import useProfile from "@/hooks/useProfile";

const Hero = () => {
  const { profile, loading, error } = useProfile();

  if (loading) {
    return (
      <section className="flex h-screen items-center justify-center bg-[#050816]">
        Loading...
      </section>
    );
  }

  if (error) {
    return (
      <section className="flex h-screen items-center justify-center bg-[#050816] text-red-400">
        Failed to load profile
      </section>
    );
  }
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        px-4
        relative
        h-screen
        w-full
        overflow-hidden
        bg-[#050816]
      "
    >
      {/* ================= Soft Aurora ================= */}

      <div className="absolute inset-0 z-0 opacity-55">
        <SoftAurora
          speed={0.5}
          scale={1.8}
          brightness={1.2}
          color1="#22d3ee"
          color2="#8b5cf6"
          noiseFrequency={2}
          noiseAmplitude={1}
          bandHeight={0.45}
          bandSpread={1}
          octaveDecay={0.15}
          layerOffset={0}
          colorSpeed={0.8}
          enableMouseInteraction
          mouseInfluence={0.2}
        />
      </div>

      {/* ================= AI Background ================= */}

      <div className="absolute inset-0 z-0 opacity-20">
        <AIBackground />
      </div>

      {/* ================= Ambient Glow ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          z-0
          h-56
          w-56
          -translate-x-1/2
          rounded-full
          bg-cyan-400/15
          blur-[80px]
          sm:h-72
          sm:w-72
          lg:h-64
          lg:w-64
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-[-4rem]
          top-1/3
          z-0
          h-56
          w-56
          rounded-full
          bg-violet-500/15
          blur-[80px]
          sm:right-[-2rem]
          sm:h-64
          sm:w-64
          lg:right-0
        "
      />

      {/* ================= Overlay ================= */}

      <div
        className="
          pointer-events-none
          absolute
          inset-0
          z-10
          bg-gradient-to-b
          from-slate-950/20
          via-slate-950/50
          to-slate-950
        "
      />

      {/* ================= Main Content ================= */}

      <div
        className="
          relative
          z-20
          mx-auto
          flex
          h-full
          w-full
          max-w-7xl
          items-center
          px-4
          pt-20
          pb-4
          sm:px-6
          sm:pt-20
          sm:pb-5
          lg:px-8
          lg:pt-16
          lg:pb-4
          xl:px-10
        "
      >
        <div
          className="
            grid
            h-full
            w-full
            grid-cols-1
            items-center
            lg:grid-cols-[1.05fr_0.95fr]
            lg:gap-6
            xl:gap-8
          "
        >
          {/* ================= LEFT CONTENT ================= */}

          <div
            className="
              order-2
              mx-auto
              flex
              w-full
              max-w-2xl
              flex-col
              justify-center
              py-2
              text-center
              lg:order-1
              lg:mx-0
              lg:py-0
              lg:text-left
            "
          >
            <HeroContent profile={profile} />

            <HeroButtons />

            <HeroStats />
          </div>

          {/* ================= AI ASSISTANT ================= */}

          <div
            className="
              order-1
              flex
              w-full
              items-center
              justify-center
              py-2
              lg:order-2
              lg:h-full
              lg:justify-end
              lg:py-0
            "
          >
            <AIAssistant />
          </div>
        </div>
      </div>

      {/* ================= Bottom Fade ================= */}

      <div
        className="
          pointer-events-none
          absolute
          bottom-0
          left-0
          z-20
          h-8
          w-full
          bg-gradient-to-t
          from-slate-950
          to-transparent
          sm:h-10
          lg:h-10
        "
      />
    </section>
  );
};

export default Hero;
