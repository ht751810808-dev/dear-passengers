import assert from 'node:assert/strict';
import {
  createCareer, parseCareer, settleFlight, upgradeCareer, crewRank,
  type FlightSettlement,
} from '../lib/flight-career';

let checks = 0;
function check(name: string, fn: () => void) {
  fn();
  checks++;
  console.log(`PASS ${name}`);
}
const flight = (overrides: Partial<FlightSettlement> = {}): FlightSettlement => ({
  id: 'career-test-flight', route: 0, mission: 0, won: true, score: 2000,
  riskyCargo: false, difficulty: 'standard',
  debrief: { service: 100, safety: 95, handling: 90, time: 70 },
  ...overrides,
});

check('v1 save preserves credits, upgrades, language and completed routes', () => {
  const migrated = parseCareer(JSON.stringify({
    version: 1, credits: 880, wins: 3, flights: 5,
    bestScores: [500, 800, 200], completions: [2, 1, 0],
    upgrades: { hull: 1, service: 2, handling: 0 },
    settings: { locale: 'zh', muted: true },
  }));
  assert.equal(migrated.version, 2);
  assert.equal(migrated.credits, 880);
  assert.deepEqual(migrated.upgrades, { hull: 1, service: 2, handling: 0 });
  assert.equal(migrated.contracts[0].completions, 2);
  assert.equal(migrated.contracts[2].completions, 1);
  assert.equal(migrated.contracts[2].bestScore, 800);
  assert.equal(migrated.contracts[1].completions, 0);
  assert.equal(migrated.settings.locale, 'zh');
  assert.equal(migrated.settings.muted, true);
  assert.equal(migrated.xp, 600);
});

check('Missing, malformed and unsupported saves safely start a new career', () => {
  for (const raw of [null, '', '{broken', 'null', '[]', '42', '{"version":99}']) {
    assert.deepEqual(parseCareer(raw), createCareer());
  }
});

check('Untrusted save values cannot create negative credits or oversized upgrades', () => {
  const parsed = parseCareer(JSON.stringify({
    version: 2, credits: -9, xp: null, wins: '100',
    upgrades: { hull: 500, service: -4, handling: '3' },
    contracts: [{ bestScore: -2, completions: null, bestGrade: 'INVALID' }],
    settings: { difficulty: 'INVALID', locale: 'INVALID' },
    history: [{ id: '', reward: 10 }, { id: 'valid', mission: 1000, score: -50 }],
  }));
  assert.equal(parsed.credits, 0);
  assert.equal(parsed.xp, 0);
  assert.equal(parsed.wins, 0);
  assert.deepEqual(parsed.upgrades, { hull: 3, service: 0, handling: 0 });
  assert.equal(parsed.contracts[0].bestGrade, null);
  assert.equal(parsed.settings.difficulty, 'standard');
  assert.equal(parsed.settings.locale, 'en');
  assert.equal(parsed.history.length, 1);
  assert.equal(parsed.history[0].mission, 5);
  assert.equal(parsed.history[0].score, 0);
});

check('A first safe arrival pays the contract, performance and first-clear bonuses', () => {
  const career = createCareer();
  const result = settleFlight(career, flight());
  assert.equal(result.basePay, 450);
  assert.equal(result.performancePay, 240);
  assert.equal(result.firstClearPay, 113);
  assert.equal(result.reward, 803);
  assert.equal(result.career.credits, 803);
  assert.equal(result.firstClear, true);
  assert.equal(result.career.contracts[0].standard, 1);
  assert.equal(result.career.wins, 1);
  assert.equal(career.credits, 0, 'Settlement must not mutate the previous save');
  const replay = settleFlight(result.career, flight({ id: 'second-flight' }));
  assert.equal(replay.firstClearPay, 0, 'First-clear pay must not repeat on a later win');
});

check('Safe arrivals unlock contracts and earned XP advances crew rank', () => {
  const first = settleFlight(createCareer(), flight());
  assert.deepEqual(first.newlyUnlocked, [2]);
  const second = settleFlight(first.career, flight({ id: 'second', mission: 1 }));
  assert.deepEqual(second.newlyUnlocked, [3]);
  assert.equal(second.newRank, true);
  assert.equal(crewRank(second.career.xp).level, 1);
});

check('Repeated settlement of the same flight cannot pay or count twice', () => {
  const result = settleFlight(createCareer(), flight());
  const duplicate = settleFlight(result.career, flight({ mission: 5, score: 999999 }));
  assert.equal(duplicate.career, result.career);
  assert.equal(duplicate.reward, 0);
  assert.equal(duplicate.xp, 0);
  assert.equal(duplicate.career.history.length, 1);
  assert.equal(duplicate.career.wins, 1);
});

check('Practice logs the flight but cannot change credits, XP or contract progression', () => {
  const career = settleFlight(createCareer(), flight()).career;
  const result = settleFlight(career, flight({ id: 'practice', route: 2, mission: 5, score: 9000, practice: true, difficulty: 'training' }));
  assert.equal(result.reward, 0);
  assert.equal(result.xp, 0);
  assert.equal(result.career.credits, career.credits);
  assert.equal(result.career.xp, career.xp);
  assert.equal(result.career.wins, career.wins);
  assert.equal(result.career.flights, career.flights);
  assert.deepEqual(result.career.contracts, career.contracts);
  assert.deepEqual(result.career.completions, career.completions);
  assert.equal(result.career.practices, 1);
  assert.equal(result.career.history.at(-1)?.practice, true);
});

check('Upgrades charge once per level and cannot overdraw or exceed maximum level', () => {
  const empty = createCareer();
  assert.equal(upgradeCareer(empty, 'hull'), empty);
  let career = { ...empty, credits: 5000 };
  career = upgradeCareer(career, 'hull');
  assert.equal(career.credits, 4650);
  assert.equal(career.upgrades.hull, 1);
  career = upgradeCareer(upgradeCareer(career, 'hull'), 'hull');
  assert.equal(career.upgrades.hull, 3);
  assert.equal(career.credits, 2750);
  assert.equal(upgradeCareer(career, 'hull'), career);
});

check('A saved v2 career round-trips without losing results or preferences', () => {
  const result = settleFlight(createCareer(), flight());
  const career = {
    ...result.career,
    settings: { ...result.career.settings, locale: 'zh' as const, compactChecklist: false, muted: true },
  };
  assert.deepEqual(parseCareer(JSON.stringify(career)), career);
});

check('A failed flight records failure without a landing, cash or contract completion', () => {
  const result = settleFlight(createCareer(), flight({ won: false, score: 500 }));
  assert.equal(result.grade, 'F');
  assert.equal(result.reward, 0);
  assert.equal(result.firstClear, false);
  assert.equal(result.career.wins, 0);
  assert.equal(result.career.flights, 1);
  assert.equal(result.career.contracts[0].completions, 0);
  assert.equal(result.career.history[0].won, false);
  assert.deepEqual(result.newlyUnlocked, []);
});

console.log(`${checks} career checks passed`);
