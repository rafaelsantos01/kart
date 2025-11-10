// Utilitário para calcular estatísticas e pontos dos pilotos baseado no histórico de corridas

import racesData from '@/data/races.json';

export interface DriverStats {
  id: number;
  name: string;
  number: number;
  totalPoints: number;
  wins: number;
  podiums: number;
  bestPosition: number;
  races: number;
  lastRace?: {
    position: number;
    time: string;
    totalTime: string;
    laps: number;
    date: string;
    track: string;
    raceNumber: string;
  };
}

export interface RaceResult {
  driverId: number;
  position: number;
  bestLapTime: string;
  totalTime: string;
  laps: number;
  points?: number;
}

export interface Race {
  id: number;
  raceNumber: string;
  date: string;
  track: string;
  class: string;
  results: RaceResult[];
}

// Lista de pilotos (cadastro base)
const driversRegistry = [
  { id: 1, name: "Leonardo", number: 25 },
  { id: 2, name: "Luiz", number: 5 },
  { id: 3, name: "Matheus", number: 9 },
  { id: 4, name: "Rubens", number: 14 },
  { id: 5, name: "Rafael", number: 2 },
  { id: 6, name: "Samuel", number: 7 },
  { id: 7, name: "Alexander", number: 15 },
  { id: 8, name: "William", number: 29 },
  { id: 9, name: "Vilmar", number: 11 },
];

/**
 * Calcula as estatísticas de todos os pilotos baseado no histórico de corridas
 */
export function calculateDriverStats(): DriverStats[] {
  const stats = new Map<number, DriverStats>();

  // Inicializar estatísticas para todos os pilotos
  driversRegistry.forEach(driver => {
    stats.set(driver.id, {
      id: driver.id,
      name: driver.name,
      number: driver.number,
      totalPoints: 0,
      wins: 0,
      podiums: 0,
      bestPosition: 999,
      races: 0,
    });
  });

  // Processar cada corrida
  racesData.races.forEach((race: Race) => {
    race.results.forEach((result: RaceResult) => {
      const driverStats = stats.get(result.driverId);
      if (!driverStats) return;

      // Adicionar pontos
      const points = racesData.pointsSystem[String(result.position) as keyof typeof racesData.pointsSystem] || 0;
      driverStats.totalPoints += points;
      driverStats.races += 1;

      // Atualizar vitórias
      if (result.position === 1) {
        driverStats.wins += 1;
      }

      // Atualizar pódios (top 3)
      if (result.position <= 3) {
        driverStats.podiums += 1;
      }

      // Atualizar melhor posição
      if (result.position < driverStats.bestPosition) {
        driverStats.bestPosition = result.position;
      }

      // Guardar dados da última corrida (assumindo que as corridas estão em ordem cronológica)
      driverStats.lastRace = {
        position: result.position,
        time: result.bestLapTime,
        totalTime: result.totalTime,
        laps: result.laps,
        date: race.date,
        track: race.track,
        raceNumber: race.raceNumber,
      };
    });
  });

  // Converter Map para Array e ordenar por pontos
  return Array.from(stats.values()).sort((a, b) => b.totalPoints - a.totalPoints);
}

/**
 * Retorna os dados da última corrida
 */
export function getLastRace(): Race | undefined {
  return racesData.races[racesData.races.length - 1];
}

/**
 * Retorna o histórico completo de corridas
 */
export function getAllRaces(): Race[] {
  return racesData.races;
}

/**
 * Retorna as estatísticas de um piloto específico
 */
export function getDriverStats(driverId: number): DriverStats | undefined {
  const allStats = calculateDriverStats();
  return allStats.find(stat => stat.id === driverId);
}
