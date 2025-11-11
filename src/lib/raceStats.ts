// Utilitário para calcular estatísticas e pontos dos pilotos baseado no histórico de corridas

import { RACES, POINTS_SYSTEM, DRIVERS, type Race, type RaceResult } from '@/data/races';

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

// Converter DRIVERS object para array
const driversRegistry = Object.values(DRIVERS);

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
  RACES.forEach((race: Race) => {
    race.results.forEach((result: RaceResult) => {
      const driverStats = stats.get(result.driver.id);
      if (!driverStats) return;

      // Adicionar pontos
      const points = POINTS_SYSTEM[result.position as keyof typeof POINTS_SYSTEM] || 0;
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
  return RACES[RACES.length - 1];
}

/**
 * Retorna o histórico completo de corridas
 */
export function getAllRaces(): Race[] {
  return RACES;
}

/**
 * Retorna as estatísticas de um piloto específico
 */
export function getDriverStats(driverId: number): DriverStats | undefined {
  const allStats = calculateDriverStats();
  return allStats.find(stat => stat.id === driverId);
}
