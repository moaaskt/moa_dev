import { HeroContent } from "@/components/sub/hero-content";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-160px] sm:top-[-280px] md:top-[-340px] left-0 w-full h-[450px] md:h-full object-cover -z-20"
        style={{ 
          filter: "hue-rotate(-110deg) saturate(1.1) brightness(0.95)",
          maskImage: "linear-gradient(to bottom, transparent 0px, black 40px)",
          WebkitMaskImage: "linear-gradient(to bottom, transparent 0px, black 40px)"
        }}
      >
        <source src="/videos/blackhole.webm" type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
