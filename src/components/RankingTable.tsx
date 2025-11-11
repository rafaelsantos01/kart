import { Trophy, Medal } from "lucide-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { calculateDriverStats } from "@/lib/raceStats";

// Calcular estatísticas automaticamente a partir do histórico de corridas
const drivers = calculateDriverStats();

const RankingTable = () => {
  const getPositionIcon = (position: number) => {
    if (position === 1) return <Trophy className="h-5 w-5 text-accent" />;
    if (position === 2) return <Medal className="h-5 w-5 text-muted-foreground" />;
    if (position === 3) return <Medal className="h-5 w-5 text-amber-700" />;
    return null;
  };

  return (
    <section className="py-20 px-4" id="podium">
      <div className="container mx-auto">
        <div className="mb-10 text-center">
          <h2 className="mb-4 text-4xl font-black tracking-tight md:text-5xl">
            RANKING DA TEMPORADA
          </h2>
          <p className="text-lg text-muted-foreground">
            Classificação atual dos pilotos
          </p>
        </div>

        <div className="overflow-hidden rounded-xl border border-border bg-card">
          <Table>
            <TableHeader>
              <TableRow className="border-border hover:bg-transparent">
                <TableHead className="w-20 text-center font-bold">POS</TableHead>
                <TableHead className="font-bold">PILOTO</TableHead>
                <TableHead className="text-center font-bold">PONTOS</TableHead>
                <TableHead className="text-center font-bold">VITÓRIAS</TableHead>
                <TableHead className="text-center font-bold">PÓDIOS</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {drivers.map((driver, index) => {
                const position = index + 1;
                return (
                  <TableRow
                    key={driver.id}
                    className={`border-border transition-colors hover:bg-muted/50 ${position <= 3 ? 'bg-muted/30' : ''
                      }`}
                  >
                    <TableCell className="text-center">
                      <div className="flex items-center justify-center gap-2">
                        <div className="min-w-4">
                          {getPositionIcon(position)}
                        </div>
                        <span className="text-lg font-bold">{position}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-lg font-semibold">
                      {driver.name}
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-lg font-bold text-primary">
                        {driver.totalPoints}
                      </span>
                    </TableCell>
                    <TableCell className="text-center text-lg font-semibold">
                      {driver.wins}
                    </TableCell>
                    <TableCell className="text-center text-lg font-semibold">
                      {driver.podiums}
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </section>
  );
};

export default RankingTable;
