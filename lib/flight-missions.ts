export type FlightDifficulty = 'training' | 'standard' | 'expert';
export type FlightStage = 'boarding' | 'takeoff' | 'cruise' | 'approach' | 'landed';
export type FlightHazard = 'cargo' | 'fire' | 'door' | 'repair';
export type FlightWeather = 'clear' | 'crosswind' | 'storm' | 'night';
export type FlightCargo = 'standard' | 'fragile' | 'priority' | 'hazardous';
export type LocalizedFlightText = { en: string; zh: string };

export type FlightMission = {
  id: number;
  route: number;
  flight: string;
  from: string;
  to: string;
  name: LocalizedFlightText;
  destination: LocalizedFlightText;
  briefing: LocalizedFlightText;
  duration: number;
  passengers: number;
  requiredWins: number;
  reward: number;
  xp: number;
  weather: FlightWeather;
  cargo: FlightCargo;
  risk: 1 | 2 | 3 | 4 | 5;
  /** Nominal seconds after takeoff starts, varied by up to seven seconds per flight; null means absent. */
  hazards: Record<FlightHazard, number | null>;
};

/** The simulation and departure board read the same contract manifest. */
export const FLIGHT_MISSIONS: readonly FlightMission[] = [
  {
    id: 0, route: 0, flight: 'DP 101', from: 'BAY', to: 'SUN',
    name: { en: 'Coastal welcome', zh: '海岸迎新' }, destination: { en: 'Sunset Bay', zh: '日落湾' },
    briefing: { en: 'A clear-sky service run. Check three seatbelts, deliver coffee, and secure the cabin before landing.', zh: '晴空下的服务航班。检查三位乘客的安全带、送上咖啡，并在着陆前确保客舱安全。' },
    duration: 300, passengers: 3, requiredWins: 0, reward: 450, xp: 180, weather: 'clear', cargo: 'standard', risk: 1,
    hazards: { cargo: 65, fire: null, door: 110, repair: null },
  },
  {
    id: 1, route: 0, flight: 'DP 118', from: 'SUN', to: 'CAY',
    name: { en: 'Island express', zh: '海岛快线' }, destination: { en: 'Coral Cay', zh: '珊瑚岛' },
    briefing: { en: 'Five coffee orders and a tight arrival slot. Keep fragile cargo secure and respond to a galley fire.', zh: '五份咖啡订单，紧凑的抵达时限。固定易碎货物，并及时处理备餐间火情。' },
    duration: 270, passengers: 5, requiredWins: 0, reward: 650, xp: 240, weather: 'clear', cargo: 'fragile', risk: 2,
    hazards: { cargo: 40, fire: 80, door: null, repair: null },
  },
  {
    id: 2, route: 1, flight: 'DP 204', from: 'SUN', to: 'ALP',
    name: { en: 'Alpine relief', zh: '高山补给' }, destination: { en: 'Alpine Heights', zh: '阿尔卑斯高地' },
    briefing: { en: 'Crosswinds over the mountains. Protect priority cargo, seal a loose door, and restore the electrical panel.', zh: '飞越群山时遭遇侧风。保护优先货物，关闭松脱舱门，并恢复电路面板。' },
    duration: 330, passengers: 4, requiredWins: 1, reward: 850, xp: 310, weather: 'crosswind', cargo: 'priority', risk: 3,
    hazards: { cargo: 45, fire: null, door: 85, repair: 120 },
  },
  {
    id: 3, route: 1, flight: 'DP 267', from: 'ALP', to: 'RID',
    name: { en: 'Storm courier', zh: '风暴信使' }, destination: { en: 'Ridge Outpost', zh: '山脊前哨' },
    briefing: { en: 'Hazardous cargo in rough weather. All four cabin systems may need your attention. Prioritize the emergency.', zh: '在恶劣天气中运送危险货物。四类客舱故障都可能出现，请优先处理紧急事件。' },
    duration: 360, passengers: 3, requiredWins: 2, reward: 1050, xp: 380, weather: 'storm', cargo: 'hazardous', risk: 4,
    hazards: { cargo: 30, fire: 65, door: 95, repair: 130 },
  },
  {
    id: 4, route: 2, flight: 'DP 808', from: 'ALP', to: 'MET',
    name: { en: 'Night shift', zh: '夜航值班' }, destination: { en: 'Metro Central', zh: '都会中心' },
    briefing: { en: 'Five passengers on the last flight home. Watch cabin pressure and keep the lights on through the night.', zh: '五位乘客搭乘末班航班归家。关注舱压，处理火情，并让夜航设备保持运转。' },
    duration: 330, passengers: 5, requiredWins: 3, reward: 1150, xp: 420, weather: 'night', cargo: 'priority', risk: 4,
    hazards: { cargo: null, fire: 60, door: 115, repair: 90 },
  },
  {
    id: 5, route: 2, flight: 'DP 999', from: 'MET', to: 'HAV',
    name: { en: 'Atlantic emergency', zh: '大西洋应急航班' }, destination: { en: 'Haven International', zh: '海文国际机场' },
    briefing: { en: 'Storms, demanding passengers, and hazardous cargo. Your final contract calls for a calm head and a precise landing.', zh: '风暴、繁忙服务和危险货物接踵而至。最后一份合约考验你的应变与着陆技术。' },
    duration: 360, passengers: 5, requiredWins: 4, reward: 1500, xp: 550, weather: 'storm', cargo: 'hazardous', risk: 5,
    hazards: { cargo: 25, fire: 58, door: 92, repair: 125 },
  },
];

export const FLIGHT_DIFFICULTIES: ReadonlyArray<{ id: FlightDifficulty; name: LocalizedFlightText; description: LocalizedFlightText; timeMultiplier: number; damageMultiplier: number; rewardMultiplier: number; xpMultiplier: number }> = [
  { id: 'training', name: { en: 'Training', zh: '训练' }, description: { en: 'More time, gentler damage. 65% contract rewards.', zh: '更多时间，较低损伤。获得 65% 合约奖励。' }, timeMultiplier: 1.4, damageMultiplier: .45, rewardMultiplier: .65, xpMultiplier: .7 },
  { id: 'standard', name: { en: 'Standard', zh: '标准' }, description: { en: 'The full crew experience. Standard contract rewards.', zh: '完整乘务体验，获得标准合约奖励。' }, timeMultiplier: 1, damageMultiplier: 1, rewardMultiplier: 1, xpMultiplier: 1 },
  { id: 'expert', name: { en: 'Expert', zh: '专家' }, description: { en: 'Less time, sharper consequences. 150% contract rewards.', zh: '时间更紧，故障更棘手。获得 150% 合约奖励。' }, timeMultiplier: .85, damageMultiplier: 1.45, rewardMultiplier: 1.5, xpMultiplier: 1.4 },
];

export const WEATHER_NAMES: Record<FlightWeather, LocalizedFlightText> = {
  clear: { en: 'Clear skies', zh: '晴空' }, crosswind: { en: 'Crosswind', zh: '侧风' }, storm: { en: 'Storm front', zh: '风暴' }, night: { en: 'Night flight', zh: '夜航' },
};
export const CARGO_NAMES: Record<FlightCargo, LocalizedFlightText> = {
  standard: { en: 'Standard cargo', zh: '普通货物' }, fragile: { en: 'Fragile cargo', zh: '易碎货物' }, priority: { en: 'Priority cargo', zh: '优先货物' }, hazardous: { en: 'Hazardous cargo', zh: '危险货物' },
};
export const STAGE_NAMES: Record<FlightStage, LocalizedFlightText> = {
  boarding: { en: 'Boarding', zh: '登机准备' }, takeoff: { en: 'Takeoff', zh: '起飞' }, cruise: { en: 'Cruise', zh: '巡航' }, approach: { en: 'Approach', zh: '进近' }, landed: { en: 'Landed', zh: '落地' },
};
export function getFlightMission(id = 0): FlightMission { return FLIGHT_MISSIONS.find(mission => mission.id === id) ?? FLIGHT_MISSIONS[0]; }
export function getFlightDifficulty(id: FlightDifficulty = 'standard') { return FLIGHT_DIFFICULTIES.find(difficulty => difficulty.id === id) ?? FLIGHT_DIFFICULTIES[1]; }
export function missionDuration(mission: FlightMission, difficulty: FlightDifficulty): number { return Math.round(mission.duration * getFlightDifficulty(difficulty).timeMultiplier); }
