import { Card, CardContent } from "./ui/card";
import { Trophy, TrendingUp } from "lucide-react";
import driversData from "@/data/drivers.json";

interface Driver {
  id: number;
  name: string;
  number: number;
  points: number;
  bestPosition: number;
}

const drivers: Driver[] = driversData.drivers;

const DriversGrid = () => {
  return (
    <section className="py-20 px-4">
      <div className="container mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            PILOTOS
          </h2>
          <p className="text-lg text-muted-foreground">
            Conheça os competidores da temporada
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {drivers.map((driver) => (
            <Card
              key={driver.id}
              className="group overflow-hidden border-border bg-card transition-all hover:scale-105 hover:border-primary"
            >
              <CardContent className="p-6">
                <div className="mb-4 flex items-start justify-between">
                  <div className="flex h-16 w-16 items-center justify-center rounded-lg bg-primary/10 text-3xl font-black text-primary">
                    {driver.number}
                  </div>
                  <Trophy className="h-5 w-5 text-accent" />
                </div>

                <h3 className="mb-3 text-xl font-bold">{driver.name}</h3>

                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Pontos</span>
                    <span className="font-bold text-primary">{driver.points}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Melhor Pos.</span>
                    <div className="flex items-center gap-1">
                      <TrendingUp className="h-4 w-4 text-accent" />
                      <span className="font-bold">{driver.bestPosition}°</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DriversGrid;
