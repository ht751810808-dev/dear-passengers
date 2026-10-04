export type CareerLocale = 'en' | 'zh';
export type UpgradeKey = 'hull' | 'service' | 'handling';
export type Career = {
  version: 1;
  credits: number;
  flights: number;
  wins: number;
  bestScores: number[];
  completions: number[];
  upgrades: Record<UpgradeKey, number>;
  settledFlights: string[];
  settings: { locale: CareerLocale; muted: boolean; lowQuality: boolean; tutorialSeen: boolean };
};

export const CAREER_STORAGE_KEY = 'dear-passengers-flight-career-v1';
export const FLIGHT_ROUTES = [
  { id: 0, flight: 'DP 101', from: 'BAY', to: 'SUN', name: { en: 'Coastal hop', zh: '海岸短途' }, description: { en: 'Blue skies. Three coffee orders. What could go wrong?', zh: '蓝天、海岸、三杯咖啡。这趟应该很轻松……' }, destination: { en: 'Sunset Bay', zh: '日落湾' }, duration: 240, requiredWins: 0, reward: 450, riskyReward: 125, passengers: 3 },
  { id: 1, flight: 'DP 204', from: 'SUN', to: 'ALP', name: { en: 'Mountain crossing', zh: '穿越群山' }, description: { en: 'A longer cabin checklist. Keep your cool above the peaks.', zh: '更长的客舱清单。飞越群山，也要稳住阵脚。' }, destination: { en: 'Alpine Heights', zh: '阿尔卑斯高地' }, duration: 270, requiredWins: 1, reward: 700, riskyReward: 175, passengers: 4 },
  { id: 2, flight: 'DP 808', from: 'ALP', to: 'MET', name: { en: 'Red-eye express', zh: '红眼快线' }, description: { en: 'Five passengers to serve. One aircraft counting on you.', zh: '五位待服务乘客。一整架飞机，都指望着你。' }, destination: { en: 'Metro Central', zh: '都会中心' }, duration: 300, requiredWins: 3, reward: 1000, riskyReward: 250, passengers: 5 },
] as const;

export const UPGRADES: Array<{ key: UpgradeKey; name: Record<CareerLocale, string>; description: Record<CareerLocale, string>; costs: number[]; icon: 'shield' | 'coffee' | 'plane' }> = [
  { key: 'hull', name: { en: 'Reinforced cabin', zh: '加固客舱' }, description: { en: 'Reduce damage when a flight gets a little too exciting.', zh: '面对客舱突发事件，降低机体损伤。' }, costs: [350, 700, 1200], icon: 'shield' },
  { key: 'service', name: { en: 'Service training', zh: '服务训练' }, description: { en: 'Improve your coffee service and keep passengers happy.', zh: '提升咖啡服务能力，让乘客满意。' }, costs: [300, 600, 1000], icon: 'coffee' },
  { key: 'handling', name: { en: 'Flight stabilizer', zh: '飞行稳定器' }, description: { en: 'A steadier aircraft makes that final approach easier.', zh: '让飞机更稳定，进近着陆更从容。' }, costs: [400, 750, 1250], icon: 'plane' },
];

export function createCareer(): Career {
  return { version: 1, credits: 0, flights: 0, wins: 0, bestScores: [0, 0, 0], completions: [0, 0, 0], upgrades: { hull: 0, service: 0, handling: 0 }, settledFlights: [], settings: { locale: 'en', muted: false, lowQuality: false, tutorialSeen: false } };
}

const object = (value: unknown): Record<string, unknown> => value !== null && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
const integer = (value: unknown, max = 1_000_000_000): number => typeof value === 'number' && Number.isFinite(value) ? Math.min(max, Math.max(0, Math.floor(value))) : 0;

/** Bad, stale, or manually edited local saves must never prevent boarding. */
export function parseCareer(raw: string | null): Career {
  if (!raw) return createCareer();
  try {
    const data = object(JSON.parse(raw));
    if (data.version !== 1) return createCareer();
    const upgrades = object(data.upgrades), settings = object(data.settings);
    const scores = Array.isArray(data.bestScores) ? data.bestScores : [];
    const completions = Array.isArray(data.completions) ? data.completions : [];
    const wins = integer(data.wins);
    return {
      version: 1, credits: integer(data.credits), flights: Math.max(wins, integer(data.flights)), wins,
      bestScores: [0, 1, 2].map(i => integer(scores[i])), completions: [0, 1, 2].map(i => integer(completions[i])),
      upgrades: { hull: integer(upgrades.hull, 3), service: integer(upgrades.service, 3), handling: integer(upgrades.handling, 3) },
      settledFlights: Array.isArray(data.settledFlights) ? data.settledFlights.filter((v): v is string => typeof v === 'string' && v.length > 0 && v.length < 100).slice(-32) : [],
      settings: { locale: settings.locale === 'zh' ? 'zh' : 'en', muted: settings.muted === true, lowQuality: settings.lowQuality === true, tutorialSeen: settings.tutorialSeen === true },
    };
  } catch { return createCareer(); }
}

export function upgradeCareer(career: Career, key: UpgradeKey): Career {
  const definition = UPGRADES.find(upgrade => upgrade.key === key);
  const level = career.upgrades[key];
  if (!definition || level >= definition.costs.length || career.credits < definition.costs[level]) return career;
  return { ...career, credits: career.credits - definition.costs[level], upgrades: { ...career.upgrades, [key]: level + 1 } };
}

export type FlightSettlement = { id: string; route: number; won: boolean; score: number; riskyCargo: boolean };
export function settleFlight(career: Career, flight: FlightSettlement): { career: Career; reward: number; newlyUnlocked: number[] } {
  if (!flight.id || career.settledFlights.includes(flight.id)) return { career, reward: 0, newlyUnlocked: [] };
  const route = FLIGHT_ROUTES[Math.max(0, Math.min(2, Math.floor(flight.route)))];
  const score = integer(flight.score);
  const reward = flight.won ? route.reward + Math.floor(score * .12) + (flight.riskyCargo ? route.riskyReward : 0) : 0;
  const wins = career.wins + (flight.won ? 1 : 0);
  const next: Career = {
    ...career,
    flights: career.flights + 1, wins, credits: Math.min(1_000_000_000, career.credits + reward),
    bestScores: career.bestScores.map((best, i) => i === route.id ? Math.max(best, score) : best),
    completions: career.completions.map((count, i) => i === route.id && flight.won ? count + 1 : count),
    settledFlights: [...career.settledFlights, flight.id].slice(-32),
  };
  return { career: next, reward, newlyUnlocked: FLIGHT_ROUTES.filter(r => career.wins < r.requiredWins && wins >= r.requiredWins).map(r => r.id) };
}
