import { FLIGHT_MISSIONS, getFlightDifficulty, getFlightMission, type FlightDifficulty } from './flight-missions';

export type CareerLocale = 'en' | 'zh';
export type UpgradeKey = 'hull' | 'service' | 'handling';
export type FlightGrade = 'S' | 'A' | 'B' | 'C' | 'D' | 'F';
export type DebriefScores = { service: number; safety: number; handling: number; time: number };
export type ContractRecord = { completions: number; bestScore: number; bestGrade: FlightGrade | null; training: number; standard: number; expert: number };
export type CareerFlightRecord = { id: string; mission: number; won: boolean; practice: boolean; difficulty: FlightDifficulty; score: number; reward: number; grade: FlightGrade };
export type Career = {
  version: 2; credits: number; flights: number; wins: number; xp: number; practices: number;
  bestScores: number[]; completions: number[];
  contracts: ContractRecord[];
  upgrades: Record<UpgradeKey, number>;
  settledFlights: string[];
  history: CareerFlightRecord[];
  settings: { locale: CareerLocale; muted: boolean; lowQuality: boolean; tutorialSeen: boolean; difficulty: FlightDifficulty; compactChecklist: boolean };
};

export const CAREER_STORAGE_KEY = 'dear-passengers-flight-career-v2';
export const LEGACY_CAREER_STORAGE_KEY = 'dear-passengers-flight-career-v1';
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


const emptyContract = (): ContractRecord => ({ completions: 0, bestScore: 0, bestGrade: null, training: 0, standard: 0, expert: 0 });
export function createCareer(): Career {
  return { version: 2, credits: 0, flights: 0, wins: 0, xp: 0, practices: 0, bestScores: [0, 0, 0], completions: [0, 0, 0], contracts: FLIGHT_MISSIONS.map(emptyContract), upgrades: { hull: 0, service: 0, handling: 0 }, settledFlights: [], history: [], settings: { locale: 'en', muted: false, lowQuality: false, tutorialSeen: false, difficulty: 'standard', compactChecklist: true } };
}

const object = (value: unknown): Record<string, unknown> => value !== null && typeof value === 'object' && !Array.isArray(value) ? value as Record<string, unknown> : {};
const integer = (value: unknown, max = 1_000_000_000): number => typeof value === 'number' && Number.isFinite(value) ? Math.min(max, Math.max(0, Math.floor(value))) : 0;
const difficultyValue = (value: unknown): FlightDifficulty => value === 'training' || value === 'expert' ? value : 'standard';
const GRADES: FlightGrade[] = ['F', 'D', 'C', 'B', 'A', 'S'];
const gradeValue = (value: unknown): FlightGrade | null => GRADES.includes(value as FlightGrade) ? value as FlightGrade : null;

/** Safely imports v1 saves without losing money, upgrades, completed routes or settings. */
export function parseCareer(raw: string | null): Career {
  if (!raw) return createCareer();
  try {
    const data = object(JSON.parse(raw));
    if (data.version !== 1 && data.version !== 2) return createCareer();
    const upgrades = object(data.upgrades), settings = object(data.settings);
    const scores = Array.isArray(data.bestScores) ? data.bestScores : [];
    const completions = Array.isArray(data.completions) ? data.completions : [];
    const wins = integer(data.wins);
    const contractData = Array.isArray(data.contracts) ? data.contracts : [];
    const contracts = FLIGHT_MISSIONS.map((mission, i) => {
      if (data.version === 1) {
        const legacyRoute = [0, 2, 4].indexOf(mission.id);
        return legacyRoute < 0 ? emptyContract() : { ...emptyContract(), completions: integer(completions[legacyRoute]), standard: integer(completions[legacyRoute]), bestScore: integer(scores[legacyRoute]) };
      }
      const record = object(contractData[i]);
      return { completions: integer(record.completions), bestScore: integer(record.bestScore), bestGrade: gradeValue(record.bestGrade), training: integer(record.training), standard: integer(record.standard), expert: integer(record.expert) };
    });
    const history: CareerFlightRecord[] = [];
    if (Array.isArray(data.history)) for (const item of data.history.slice(-10)) {
      const record = object(item);
      if (typeof record.id !== 'string' || record.id.length === 0 || record.id.length > 99) continue;
      history.push({ id: record.id, mission: integer(record.mission, 5), won: record.won === true, practice: record.practice === true, difficulty: difficultyValue(record.difficulty), score: integer(record.score), reward: integer(record.reward), grade: gradeValue(record.grade) ?? 'F' });
    }
    return {
      version: 2, credits: integer(data.credits), flights: Math.max(wins, integer(data.flights)), wins,
      xp: data.version === 1 ? wins * 200 : integer(data.xp), practices: integer(data.practices),
      bestScores: [0, 1, 2].map(i => integer(scores[i])), completions: [0, 1, 2].map(i => integer(completions[i])), contracts,
      upgrades: { hull: integer(upgrades.hull, 3), service: integer(upgrades.service, 3), handling: integer(upgrades.handling, 3) },
      settledFlights: Array.isArray(data.settledFlights) ? data.settledFlights.filter((v): v is string => typeof v === 'string' && v.length > 0 && v.length < 100).slice(-64) : [], history,
      settings: { locale: settings.locale === 'zh' ? 'zh' : 'en', muted: settings.muted === true, lowQuality: settings.lowQuality === true, tutorialSeen: settings.tutorialSeen === true, difficulty: difficultyValue(settings.difficulty), compactChecklist: settings.compactChecklist !== false },
    };
  } catch { return createCareer(); }
}

export function upgradeCareer(career: Career, key: UpgradeKey): Career {
  const definition = UPGRADES.find(upgrade => upgrade.key === key);
  const level = career.upgrades[key];
  if (!definition || level >= definition.costs.length || career.credits < definition.costs[level]) return career;
  return { ...career, credits: career.credits - definition.costs[level], upgrades: { ...career.upgrades, [key]: level + 1 } };
}

export const CREW_RANKS = [
  { xp: 0, name: { en: 'Trainee', zh: '见习乘务员' } },
  { xp: 400, name: { en: 'Cabin crew', zh: '正式乘务员' } },
  { xp: 1100, name: { en: 'Senior crew', zh: '资深乘务员' } },
  { xp: 2200, name: { en: 'Purser', zh: '乘务长' } },
  { xp: 4000, name: { en: 'Flight director', zh: '航班主管' } },
] as const;
export function crewRank(xp: number) {
  let level = 0;
  CREW_RANKS.forEach((rank, i) => { if (xp >= rank.xp) level = i; });
  const current = CREW_RANKS[level], next = CREW_RANKS[level + 1];
  return { level, current, next, progress: next ? Math.max(0, Math.min(1, (xp - current.xp) / (next.xp - current.xp))) : 1 };
}
export function debriefGrade(won: boolean, scores: DebriefScores): FlightGrade {
  if (!won) return 'F';
  const value = scores.service * .3 + scores.safety * .35 + scores.handling * .25 + scores.time * .1;
  return value >= 90 ? 'S' : value >= 75 ? 'A' : value >= 60 ? 'B' : value >= 45 ? 'C' : 'D';
}

export type FlightSettlement = { id: string; route: number; mission?: number; won: boolean; score: number; riskyCargo: boolean; practice?: boolean; difficulty?: FlightDifficulty; debrief?: DebriefScores };
export type FlightReceipt = { reward: number; xp: number; grade: FlightGrade; scores: DebriefScores; newlyUnlocked: number[]; firstClear: boolean; newRank: boolean; practice: boolean; basePay: number; performancePay: number; firstClearPay: number };
export function settleFlight(career: Career, flight: FlightSettlement): { career: Career } & FlightReceipt {
  const difficulty = getFlightDifficulty(flight.difficulty);
  const mission = getFlightMission(flight.mission ?? [0, 2, 4][integer(flight.route, 2)]);
  const score = integer(flight.score);
  const scores: DebriefScores = { service: integer(flight.debrief?.service ?? (flight.won ? 100 : 0), 100), safety: integer(flight.debrief?.safety ?? (flight.won ? 85 : 0), 100), handling: integer(flight.debrief?.handling ?? (flight.won ? 80 : 0), 100), time: integer(flight.debrief?.time ?? (flight.won ? 60 : 0), 100) };
  const grade = debriefGrade(flight.won, scores);
  const empty: FlightReceipt = { reward: 0, xp: 0, grade, scores, newlyUnlocked: [], firstClear: false, newRank: false, practice: flight.practice === true, basePay: 0, performancePay: 0, firstClearPay: 0 };
  if (!flight.id || career.settledFlights.includes(flight.id)) return { career, ...empty };
  const practice = flight.practice === true;
  const firstClear = !practice && flight.won && career.contracts[mission.id].completions === 0;
  const basePay = !practice && flight.won ? Math.round(mission.reward * difficulty.rewardMultiplier) : 0;
  const performancePay = !practice && flight.won ? Math.floor(score * .12 * difficulty.rewardMultiplier) : 0;
  const firstClearPay = firstClear ? Math.round(mission.reward * .25) : 0;
  const reward = basePay + performancePay + firstClearPay;
  const xp = !practice ? Math.round(mission.xp * difficulty.xpMultiplier * (flight.won ? 1 : scores.service / 100 * .12)) : 0;
  const wins = career.wins + (flight.won && !practice ? 1 : 0);
  const contracts = career.contracts.map((record, i) => {
    if (practice || i !== mission.id) return record;
    const nextGrade = !record.bestGrade || GRADES.indexOf(grade) > GRADES.indexOf(record.bestGrade) ? grade : record.bestGrade;
    return { ...record, completions: record.completions + (flight.won ? 1 : 0), bestScore: Math.max(record.bestScore, score), bestGrade: nextGrade, [difficulty.id]: record[difficulty.id] + (flight.won ? 1 : 0) };
  });
  const next: Career = {
    ...career, flights: career.flights + (practice ? 0 : 1), practices: career.practices + (practice ? 1 : 0), wins, xp: Math.min(1_000_000_000, career.xp + xp), credits: Math.min(1_000_000_000, career.credits + reward), contracts,
    bestScores: career.bestScores.map((best, i) => i === mission.route && !practice ? Math.max(best, score) : best),
    completions: career.completions.map((count, i) => i === mission.route && flight.won && !practice ? count + 1 : count),
    settledFlights: [...career.settledFlights, flight.id].slice(-64),
    history: [...career.history, { id: flight.id, mission: mission.id, won: flight.won, practice, difficulty: difficulty.id, score, reward, grade }].slice(-10),
  };
  return { career: next, reward, xp, grade, scores, newlyUnlocked: FLIGHT_MISSIONS.filter(r => career.wins < r.requiredWins && wins >= r.requiredWins).map(r => r.id), firstClear, newRank: crewRank(next.xp).level > crewRank(career.xp).level, practice, basePay, performancePay, firstClearPay };
}
