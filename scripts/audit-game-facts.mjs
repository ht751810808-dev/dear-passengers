import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const registryPath = path.join(dirname, '..', 'data', 'game-facts.json');
const appPath = path.join(dirname, '..', 'app');
const registry = JSON.parse(fs.readFileSync(registryPath, 'utf8'));

const errors = [];
const allowedStatuses = new Set(['confirmed', 'observed', 'inference', 'unknown']);
const allowedSourceKinds = new Set([
  'official-store',
  'official-developer-channel',
  'first-party-interview',
  'official-video',
  'hands-on-test',
  'platform-documentation',
]);
const allowedTones = new Set(['confirmed', 'planned', 'open']);
const datePattern = /^\d{4}-\d{2}-\d{2}$/;

const requiredFactIds = [
  'identity.developer',
  'identity.publisher',
  'release.window',
  'release.exactDate',
  'release.price',
  'release.fullGameAvailability',
  'access.publicDemoPlan',
  'access.publicDemoAvailability',
  'platform.windows',
  'playMode.singlePlayer',
  'playMode.onlineCoop',
  'multiplayer.maximumPlayers',
  'languages.interface',
  'requirements.minimum',
];

function fail(message) {
  errors.push(message);
}

function requireDate(value, label) {
  if (typeof value !== 'string' || !datePattern.test(value)) {
    fail(`${label} must be a valid YYYY-MM-DD date`);
    return;
  }

  const [year, month, day] = value.split('-').map(Number);
  const parsed = new Date(Date.UTC(year, month - 1, day));
  if (parsed.toISOString().slice(0, 10) !== value) fail(`${label} must be a valid YYYY-MM-DD date`);
}

function requireRoute(value, label) {
  if (typeof value !== 'string' || !value.startsWith('/')) {
    fail(`${label} must start with /`);
    return;
  }

  const normalized = value === '/' ? '' : value.replace(/^\//, '').replace(/\/$/, '');
  const pagePath = path.join(appPath, normalized, 'page.tsx');
  if (!fs.existsSync(pagePath)) fail(`${label} does not resolve to an App Router page: ${value}`);
}

if (registry.schemaVersion !== 1) fail('schemaVersion must be 1');
requireDate(registry.registryRevision, 'registryRevision');
requireDate(registry.lastReviewedAt, 'lastReviewedAt');

if (!registry.game || registry.game.steamAppId !== '4534960') {
  fail('game.steamAppId must identify the official Steam app 4534960');
}

const sources = registry.sources ?? {};
const facts = registry.facts ?? {};

for (const [sourceId, source] of Object.entries(sources)) {
  if (!source.label) fail(`source ${sourceId} is missing a label`);
  if (!allowedSourceKinds.has(source.kind)) fail(`source ${sourceId} has unsupported kind ${source.kind}`);
  try {
    const url = new URL(source.url);
    if (url.protocol !== 'https:') fail(`source ${sourceId} must use https`);
  } catch {
    fail(`source ${sourceId} has an invalid URL`);
  }
  requireDate(source.lastCheckedAt, `source ${sourceId}.lastCheckedAt`);
}

for (const factId of requiredFactIds) {
  if (!facts[factId]) fail(`required fact ${factId} is missing`);
}

for (const [factId, fact] of Object.entries(facts)) {
  if (!fact.label || !fact.summary || !fact.shortValue) fail(`fact ${factId} is missing display copy`);
  if (!allowedStatuses.has(fact.status)) fail(`fact ${factId} has unsupported status ${fact.status}`);
  if (fact.status === 'unknown' && fact.value !== null) fail(`unknown fact ${factId} must use a null value`);
  if (fact.status !== 'unknown' && fact.value === null) fail(`non-unknown fact ${factId} must provide a value`);
  requireDate(fact.verifiedAt, `fact ${factId}.verifiedAt`);
  if (fact.verifiedAt > registry.lastReviewedAt) fail(`fact ${factId}.verifiedAt cannot be later than lastReviewedAt`);

  if (!Array.isArray(fact.sourceIds) || fact.sourceIds.length === 0) fail(`fact ${factId} needs at least one source`);
  for (const sourceId of fact.sourceIds ?? []) {
    if (!sources[sourceId]) fail(`fact ${factId} references missing source ${sourceId}`);
  }

  if (!Array.isArray(fact.ownerRoutes) || fact.ownerRoutes.length === 0) fail(`fact ${factId} needs an owner route`);
  for (const [index, route] of (fact.ownerRoutes ?? []).entries()) requireRoute(route, `fact ${factId}.ownerRoutes[${index}]`);
  for (const [index, route] of (fact.affectedRoutes ?? []).entries()) requireRoute(route, `fact ${factId}.affectedRoutes[${index}]`);
}

const board = registry.statusBoard;
requireDate(board?.revision, 'statusBoard.revision');
requireDate(board?.lastVerifiedAt, 'statusBoard.lastVerifiedAt');
if (board?.revision > board?.lastVerifiedAt) fail('statusBoard.revision cannot be later than lastVerifiedAt');

const cardCodes = new Set();
for (const [index, card] of (board?.cards ?? []).entries()) {
  if (cardCodes.has(card.code)) fail(`statusBoard card code ${card.code} is duplicated`);
  cardCodes.add(card.code);
  if (!allowedTones.has(card.tone)) fail(`statusBoard card ${card.code} has unsupported tone ${card.tone}`);
  requireRoute(card.href, `statusBoard.cards[${index}].href`);
  if (!Array.isArray(card.factIds) || card.factIds.length === 0) fail(`statusBoard card ${card.code} needs factIds`);
  for (const factId of card.factIds ?? []) {
    if (!facts[factId]) fail(`statusBoard card ${card.code} references missing fact ${factId}`);
  }
}

const latestUpdate = registry.latestOfficialUpdate;
requireDate(latestUpdate?.publishedAt, 'latestOfficialUpdate.publishedAt');
requireRoute(latestUpdate?.ownerRoute, 'latestOfficialUpdate.ownerRoute');
for (const sourceId of latestUpdate?.sourceIds ?? []) {
  if (!sources[sourceId]) fail(`latestOfficialUpdate references missing source ${sourceId}`);
}
for (const factId of latestUpdate?.factIds ?? []) {
  if (!facts[factId]) fail(`latestOfficialUpdate references missing fact ${factId}`);
}

if (errors.length > 0) {
  console.error(`Game Fact Registry audit failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(
  `Game Fact Registry audit passed: ${Object.keys(facts).length} facts, ${Object.keys(sources).length} sources, ${board.cards.length} status cards.`,
);
