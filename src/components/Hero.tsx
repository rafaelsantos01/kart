import { Trophy } from "lucide-react";
import { Button } from "./ui/button";
import heroImage from "@/assets/hero-kart.jpg";

const Hero = () => {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-linear-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Speed Lines Animation */}
      <div className="absolute inset-0 bg-speed-gradient animate-speed-lines opacity-30" />

      {/* Content */}
      <div className="relative z-10 flex h-full flex-col items-center justify-center px-4 text-center">
        <div className="mb-6 flex items-center gap-3">
          <Trophy className="h-12 w-12 text-accent animate-pulse-slow" />
          <h1 className="text-6xl font-black tracking-tight md:text-8xl">
            <span className="bg-racing-gradient bg-clip-text text-transparent">
              KART
            </span>
            <span className="text-foreground"> RACING</span>
          </h1>
        </div>

        <p className="mb-8 max-w-2xl text-xl text-muted-foreground md:text-2xl">
          Acompanhe a emoção das corridas e a performance dos pilotos na nossa
          temporada de kart!
        </p>

        <div className="flex gap-4">
          <Button size="lg" className="bg-racing-gradient text-lg font-bold hover:opacity-90">
            <a href="#podium">Ver Rankings</a>
          </Button>
          <Button size="lg" variant="outline" className="border-primary text-lg font-bold hover:bg-primary/10">
            <a href="#ultimo-podium">Últimas Corridas</a>
          </Button>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-3 gap-8 md:gap-16">
          <div className="text-center">
            <div className="text-4xl font-black text-primary md:text-5xl">8</div>
            <div className="text-sm text-muted-foreground md:text-base">Pilotos</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-accent md:text-5xl">12</div>
            <div className="text-sm text-muted-foreground md:text-base">Corridas</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-foreground md:text-5xl">2025</div>
            <div className="text-sm text-muted-foreground md:text-base">Temporada</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
