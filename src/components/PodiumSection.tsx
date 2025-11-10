import { Trophy } from "lucide-react";
import { Card } from "./ui/card";
import driversData from "@/data/drivers.json";

interface PodiumDriver {
  position: number;
  name: string;
  time: string;
}

// Pegar os 3 primeiros do pódio da última corrida (ordenados por lastRace.position)
const podiumDrivers: PodiumDriver[] = driversData.drivers
  .filter((driver) => driver.lastRace.position <= 3)
  .sort((a, b) => a.lastRace.position - b.lastRace.position)
  .map((driver) => ({
    position: driver.lastRace.position,
    name: driver.name,
    time: driver.lastRace.time,
  }));

// Reordenar para exibir: 2º, 1º, 3º (formato pódio visual)
const visualPodium = [podiumDrivers[1], podiumDrivers[0], podiumDrivers[2]];

const PodiumSection = () => {
  const getPodiumHeight = (position: number) => {
    if (position === 1) return "h-64";
    if (position === 2) return "h-52";
    return "h-44";
  };

  const getPodiumColor = (position: number) => {
    if (position === 1) return "bg-gold-gradient";
    if (position === 2) return "bg-gradient-to-b from-muted to-muted/50";
    return "bg-gradient-to-b from-secondary to-secondary/50";
  };

  return (
    <section className="bg-secondary/30 py-20 px-4" id="ultimo-podium">
      <div className="container mx-auto">
        <div className="mb-16 text-center">
          <div className="mb-4 flex items-center justify-center gap-3">
            <Trophy className="h-10 w-10 text-accent" />
            <h2 className="text-4xl font-black tracking-tight md:text-5xl">
              ÚLTIMA CORRIDA
            </h2>
          </div>
          <p className="text-lg text-muted-foreground">
            {driversData.drivers[0].lastRace.track} - {driversData.drivers[0].lastRace.date}
          </p>
        </div>

        <div className="mx-auto max-w-4xl">
          <div className="flex items-end justify-center gap-4">
            {visualPodium.map((driver) => (
              <div
                key={driver.position}
                className="flex flex-1 flex-col items-center"
              >
                <Card className="mb-4 w-full border-border bg-card p-4 text-center">
                  <div className="mb-2 text-3xl font-black text-accent">
                    {driver.position}°
                  </div>
                  <div className="mb-1 text-lg font-bold">{driver.name}</div>
                  <div className="text-sm text-muted-foreground">
                    {driver.time}
                  </div>
                </Card>
                <div
                  className={`w-full rounded-t-lg ${getPodiumHeight(
                    driver.position
                  )} ${getPodiumColor(driver.position)} flex items-center justify-center transition-all hover:scale-105`}
                >
                  <div className="text-6xl font-black text-foreground/20">
                    {driver.position}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PodiumSection;
