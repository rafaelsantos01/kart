// Registro de pilotos com referências tipadas
export const DRIVERS = {
  Leonardo: { id: 1, name: "Leonardo", number: 25 },
  Luiz: { id: 2, name: "Luiz", number: 5 },
  Matheus: { id: 3, name: "Matheus", number: 9 },
  Rubens: { id: 4, name: "Rubens", number: 14 },
  Rafael: { id: 5, name: "Rafael", number: 2 },
  Samuel: { id: 6, name: "Samuel", number: 7 },
  Alexander: { id: 7, name: "Alexander", number: 15 },
  William: { id: 8, name: "William", number: 29 },
  Vilmar: { id: 9, name: "Vilmar", number: 11 },
  Gustavo: { id: 10, name: "Gustavo", number: 21 },
} as const;

export type DriverKey = keyof typeof DRIVERS;

export interface RaceResult {
  driver: typeof DRIVERS[DriverKey];
  position: number;
  bestLapTime: string;
  totalTime: string;
  laps: number;
}

export interface Race {
  id: number;
  raceNumber: string;
  date: string;
  track: string;
  class: string;
  results: RaceResult[];
}

// Sistema de pontuação
export const POINTS_SYSTEM = {
  1: 25,
  2: 18,
  3: 15,
  4: 12,
  5: 10,
  6: 8,
  7: 6,
  8: 4,
  9: 0,
  10: 0,
} as const;

// Histórico de corridas
export const RACES: Race[] = [
  {
    id: 1,
    raceNumber: "01",
    date: "09/11/2025",
    track: "VelociKart Racing",
    class: "Classe 2",
    results: [
      {
        driver: DRIVERS.Leonardo,
        position: 1,
        bestLapTime: "00:00:28.18",
        totalTime: "00:15:42.02",
        laps: 35,
      },
      {
        driver: DRIVERS.Luiz,
        position: 2,
        bestLapTime: "00:00:29.00",
        totalTime: "00:15:36.67",
        laps: 34,
      },
      {
        driver: DRIVERS.Matheus,
        position: 3,
        bestLapTime: "00:00:30.00",
        totalTime: "00:15:18.65",
        laps: 33,
      },
      {
        driver: DRIVERS.Rubens,
        position: 4,
        bestLapTime: "00:00:30.00",
        totalTime: "00:15:12.69",
        laps: 33,
      },
      {
        driver: DRIVERS.Rafael,
        position: 5,
        bestLapTime: "00:00:30.00",
        totalTime: "00:15:11.35",
        laps: 33,
      },
      {
        driver: DRIVERS.Samuel,
        position: 6,
        bestLapTime: "00:00:31.00",
        totalTime: "00:15:34.03",
        laps: 32,
      },
      {
        driver: DRIVERS.Alexander,
        position: 7,
        bestLapTime: "00:00:31.00",
        totalTime: "00:15:30.43",
        laps: 21,
      },
      {
        driver: DRIVERS.William,
        position: 8,
        bestLapTime: "00:00:38.00",
        totalTime: "00:15:30.43",
        laps: 21,
      },
      {
        driver: DRIVERS.Vilmar,
        position: 9,
        bestLapTime: "00:00:00.00",
        totalTime: "00:00:00.00",
        laps: 21,
      },
      {
        driver: DRIVERS.Gustavo,
        position: 10,
        bestLapTime: "00:00:00.00",
        totalTime: "00:00:00.00",
        laps: 21,
      },
    ],
  },
];
