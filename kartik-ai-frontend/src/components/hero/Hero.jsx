import HeroButtons from "./HeroButtons";
import HeroContent from "./HeroContent";
import HeroStats from "./HeroStats";
import AIAssistant from "../AI/AIAssistant";

import SoftAurora from "@/components/ui/SoftAurora";
import AIBackground from "../Background/AIBackground";

const Hero = () => {
  return (
    <section
      id="home"
      aria-labelledby="hero-heading"
      className="
        relative
        min-h-screen
        overflow-hidden
        bg-[#050816]
      "
    >
      {/* ================= Soft Aurora ================= */}

      <div
        className="
          absolute
          inset-0
          z-0
          opacity-80
        "
      >
        <SoftAurora
          speed={0.5}
          scale={1.8}
          brightness={1.5}
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

      <div
        className="
          absolute
          inset-0
          z-0
          opacity-40
        "
      >
        <AIBackground />
      </div>

      {/* ================= Glow Layers ================= */}

      <div
        className="
          pointer-events-none
          absolute
          left-1/2
          top-20
          z-0
          h-96
          w-96
          -translate-x-1/2
          rounded-full
          bg-cyan-400/20
          blur-[120px]
        "
      />

      <div
        className="
          pointer-events-none
          absolute
          right-0
          top-1/3
          z-0
          h-80
          w-80
          rounded-full
          bg-violet-500/20
          blur-[140px]
        "
      />

      {/* ================= Overlay ================= */}

      <div
        className="
          absolute
          inset-0
          z-10
          bg-gradient-to-b
          from-[#050816]/40
          via-[#050816]/60
          to-[#050816]
        "
      />

      {/* ================= Main Content ================= */}

      <div
        className="
          relative
          z-20
          mx-auto
          max-w-7xl
          px-6
          sm:px-8
          lg:px-10
          pt-28
          sm:pt-32
          lg:pt-36
          pb-20
        "
      >
        <div
          className="
            grid
            min-h-[calc(100svh-9rem)]
            grid-cols-1
            items-center
            gap-12
            lg:grid-cols-[1.1fr_0.9fr]
            lg:gap-10
          "
        >
          {/* ================= AI Assistant ================= */}

          <div
            className="
              order-1

              flex
              w-full
              items-center
              justify-center

              mb-8

              lg:order-2
              lg:mb-0
              lg:justify-end
            "
          >
            <AIAssistant />
          </div>

          {/* ================= Hero Content ================= */}

          <div
            className="
              order-2

              mx-auto
              flex
              max-w-2xl
              flex-col
              justify-center

              text-center

              lg:order-1
              lg:mx-0
              lg:text-left
            "
          >
            <HeroContent />

            <div className="mt-8">
              <HeroButtons />
            </div>

            <div className="mt-10">
              <HeroStats />
            </div>
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
          h-40
          w-full
          bg-gradient-to-t
          from-[#050816]
          to-transparent
        "
      />
    </section>
  );
};

export default Hero;