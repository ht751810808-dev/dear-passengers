import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(dirname, '..');
const appPath = path.join(projectRoot, 'app');
const kitPath = path.join(projectRoot, 'launch-observations');
const recordsPath = path.join(kitPath, 'records');
const templatePath = path.join(kitPath, 'template.json');

const errors = [];
const allowedEventTypes = new Set(['full-release', 'early-access', 'demo', 'playtest', 'major-announcement']);
const allowedRecordStatuses = new Set(['draft', 'verified', 'published', 'superseded']);
const allowedEvidenceStatuses = new Set(['confirmed', 'observed', 'inference', 'unknown']);
const allowedDecisions = new Set(['research-only', 'upgrade-owner', 'create-route', 'correct-facts']);
const allowedPublicationStatuses = new Set(['not-started', 'in-progress', 'deployed', 'failed', 'rolled-back']);
const bannedKeyPattern = /^(participantName|participantNames|email|discord|discordHandle|steamId|ipAddress)$/i;
const requiredPublishedChecks = [
  'factAudit',
  'typecheck',
  'productionBuild',
  'internalLinks',
  'hreflang',
  'desktopVisual',
  'mobile390Visual',
  'structuredData',
];

function fail(file, message) {
  errors.push(`${file}: ${message}`);
}

function isObject(value) {
  return value !== null && typeof value === 'object' && !Array.isArray(value);
}

function requireObject(file, value, label) {
  if (!isObject(value)) fail(file, `${label} must be an object`);
}

function requireArray(file, value, label) {
  if (!Array.isArray(value)) fail(file, `${label} must be an array`);
}

function isIsoTimestamp(value) {
  return typeof value === 'string' && !Number.isNaN(Date.parse(value)) && new Date(value).toISOString() === value;
}

function requireHttpsUrls(file, values, label) {
  requireArray(file, values, label);
  for (const [index, value] of (values ?? []).entries()) {
    try {
      const url = new URL(value);
      if (url.protocol !== 'https:') fail(file, `${label}[${index}] must use https`);
    } catch {
      fail(file, `${label}[${index}] must be a valid URL`);
    }
  }
}

function requireRelativePaths(file, values, label) {
  requireArray(file, values, label);
  for (const [index, value] of (values ?? []).entries()) {
    if (typeof value !== 'string' || value.length === 0 || path.isAbsolute(value) || value.split('/').includes('..')) {
      fail(file, `${label}[${index}] must be a repository-relative path without .. segments`);
    }
  }
}

function appRouteExists(route) {
  if (typeof route !== 'string' || !route.startsWith('/')) return false;
  const normalized = route === '/' ? '' : route.replace(/^\//, '').replace(/\/$/, '');
  return fs.existsSync(path.join(appPath, normalized, 'page.tsx'));
}

function checkForBannedKeys(file, value, location = 'record') {
  if (Array.isArray(value)) {
    value.forEach((item, index) => checkForBannedKeys(file, item, `${location}[${index}]`));
    return;
  }
  if (!isObject(value)) return;
  for (const [key, child] of Object.entries(value)) {
    if (bannedKeyPattern.test(key)) fail(file, `${location}.${key} is prohibited personal data`);
    checkForBannedKeys(file, child, `${location}.${key}`);
  }
}

function validateCoreShape(file, record) {
  if (record.schemaVersion !== 1) fail(file, 'schemaVersion must be 1');
  if (!allowedRecordStatuses.has(record.recordStatus)) fail(file, `invalid recordStatus ${record.recordStatus}`);
  requireObject(file, record.verifier, 'verifier');
  requireObject(file, record.activation, 'activation');
  requireObject(file, record.activation?.firstPartySignal, 'activation.firstPartySignal');
  requireObject(file, record.activation?.publicAccess, 'activation.publicAccess');
  requireObject(file, record.build, 'build');
  requireObject(file, record.testEnvironment, 'testEnvironment');
  requireObject(file, record.controls, 'controls');
  requireObject(file, record.multiplayer, 'multiplayer');
  requireObject(file, record.performance, 'performance');
  requireArray(file, record.issues, 'issues');
  requireArray(file, record.media, 'media');
  requireArray(file, record.demandEvidence, 'demandEvidence');
  requireObject(file, record.contentDecision, 'contentDecision');
  requireObject(file, record.publication, 'publication');
  requireArray(file, record.unknowns, 'unknowns');

  if (record.build?.steamAppId !== '4534960') fail(file, 'build.steamAppId must be 4534960');
  if (!allowedDecisions.has(record.contentDecision?.decision)) fail(file, `invalid contentDecision.decision ${record.contentDecision?.decision}`);
  if (!allowedPublicationStatuses.has(record.publication?.status)) fail(file, `invalid publication.status ${record.publication?.status}`);

  const multiplayerStatuses = [
    ['maximumLobbySizeStatus', record.multiplayer?.maximumLobbySizeStatus],
    ['matchmaking.status', record.multiplayer?.matchmaking?.status],
    ['joinInProgress.status', record.multiplayer?.joinInProgress?.status],
    ['localCoop.status', record.multiplayer?.localCoop?.status],
    ['splitScreen.status', record.multiplayer?.splitScreen?.status],
    ['crossplay.status', record.multiplayer?.crossplay?.status],
    ['voiceChat.status', record.multiplayer?.voiceChat?.status],
  ];
  for (const [label, status] of multiplayerStatuses) {
    if (!allowedEvidenceStatuses.has(status)) fail(file, `multiplayer.${label} has invalid status ${status}`);
  }

  checkForBannedKeys(file, record);
}

function validateEvidenceEntries(file, record) {
  requireRelativePaths(file, record.activation?.publicAccess?.evidencePaths, 'activation.publicAccess.evidencePaths');
  requireRelativePaths(file, record.controls?.evidencePaths, 'controls.evidencePaths');
  requireRelativePaths(file, record.multiplayer?.evidencePaths, 'multiplayer.evidencePaths');
  requireRelativePaths(file, record.performance?.evidencePaths, 'performance.evidencePaths');

  for (const [index, control] of (record.controls?.keyboardMouse ?? []).entries()) {
    if (!control.action || !control.binding || !control.context || !control.buildId) fail(file, `controls.keyboardMouse[${index}] is incomplete`);
    requireRelativePaths(file, control.evidencePaths, `controls.keyboardMouse[${index}].evidencePaths`);
  }

  for (const [index, controller] of (record.controls?.controllers ?? []).entries()) {
    if (!controller.model || !controller.connection || !controller.status || !controller.buildId) fail(file, `controls.controllers[${index}] is incomplete`);
    requireRelativePaths(file, controller.evidencePaths, `controls.controllers[${index}].evidencePaths`);
  }

  for (const [index, run] of (record.performance?.runs ?? []).entries()) {
    if (!run.environmentId || !run.buildId || !run.resolution || !run.preset || !run.durationSeconds || !run.scene) {
      fail(file, `performance.runs[${index}] is incomplete`);
    }
    requireRelativePaths(file, run.evidencePaths, `performance.runs[${index}].evidencePaths`);
  }

  for (const [index, issue] of (record.issues ?? []).entries()) {
    if (!issue.issueId || !issue.title || !issue.status || !issue.severity || !issue.buildId) fail(file, `issues[${index}] is incomplete`);
    requireArray(file, issue.steps, `issues[${index}].steps`);
    requireHttpsUrls(file, issue.officialSourceUrls, `issues[${index}].officialSourceUrls`);
    requireRelativePaths(file, issue.evidencePaths, `issues[${index}].evidencePaths`);
  }

  for (const [index, media] of (record.media ?? []).entries()) {
    if (!media.path || !media.type || typeof media.official !== 'boolean' || !media.rights || !media.alt) fail(file, `media[${index}] is incomplete`);
    if (!Number.isInteger(media.width) || media.width <= 0 || !Number.isInteger(media.height) || media.height <= 0) {
      fail(file, `media[${index}] needs positive integer width and height`);
    }
    if (!isIsoTimestamp(media.capturedAt)) fail(file, `media[${index}].capturedAt must be an ISO timestamp`);
    if ((media.type === 'screenshot' || media.type === 'video') && !media.buildId) fail(file, `media[${index}] needs a buildId`);
    if (media.official === true && !media.sourceUrl) fail(file, `official media[${index}] needs a sourceUrl`);
    requireRelativePaths(file, [media.path], `media[${index}].path`);
  }

  for (const [index, demand] of (record.demandEvidence ?? []).entries()) {
    if (!demand.channel || !demand.queryOrQuestion || !isIsoTimestamp(demand.observedAt)) {
      fail(file, `demandEvidence[${index}] needs channel, queryOrQuestion, and observedAt`);
    }
    if (demand.sourceUrl) requireHttpsUrls(file, [demand.sourceUrl], `demandEvidence[${index}].sourceUrl`);
  }
}

function validateRecord(file, record) {
  validateCoreShape(file, record);
  validateEvidenceEntries(file, record);

  if (record.isTemplate !== false) fail(file, 'records must set isTemplate to false');
  if (!/^[a-z0-9][a-z0-9-]{2,79}$/.test(record.recordId ?? '')) fail(file, 'recordId has an invalid format');
  if (`${record.recordId}.json` !== path.basename(file)) fail(file, 'filename must match recordId');
  if (!allowedEventTypes.has(record.eventType)) fail(file, `invalid eventType ${record.eventType}`);
  if (!isIsoTimestamp(record.detectedAt)) fail(file, 'detectedAt must be an ISO timestamp');
  if (record.build?.accessType !== record.eventType) fail(file, 'build.accessType must match eventType');

  const isVerified = record.recordStatus === 'verified' || record.recordStatus === 'published';
  if (isVerified) {
    if (!isIsoTimestamp(record.verifiedAt)) fail(file, 'verified records need verifiedAt');
    if (isIsoTimestamp(record.verifiedAt) && record.verifiedAt < record.detectedAt) fail(file, 'verifiedAt cannot be earlier than detectedAt');
    if (!record.verifier?.role || !record.verifier?.initials) fail(file, 'verified records need verifier role and initials');
    if (record.activation?.firstPartySignal?.confirmed !== true) fail(file, 'verified records need a confirmed first-party signal');
    requireHttpsUrls(file, record.activation?.firstPartySignal?.sourceUrls, 'activation.firstPartySignal.sourceUrls');
    if ((record.activation?.firstPartySignal?.sourceUrls ?? []).length === 0) fail(file, 'verified records need at least one first-party source URL');
    if (!isIsoTimestamp(record.activation?.firstPartySignal?.capturedAt)) fail(file, 'verified records need activation.firstPartySignal.capturedAt');
  }

  const playableEvents = new Set(['full-release', 'early-access', 'demo', 'playtest']);
  if (isVerified && playableEvents.has(record.eventType)) {
    if (record.activation?.publicAccess?.confirmed !== true || record.activation?.publicAccess?.purchaseOrInstallAvailable !== true) {
      fail(file, 'verified playable events need confirmed public purchase or install access');
    }
    if (!record.activation?.publicAccess?.storefront || !record.activation?.publicAccess?.storeRegion) {
      fail(file, 'verified playable events need storefront and region');
    }
    if (!record.build?.buildId) fail(file, 'verified playable events need a buildId');
  }

  if (record.multiplayer?.tested === true && record.multiplayer?.participantConsentConfirmed !== true) {
    fail(file, 'multiplayer tests need participant consent confirmation');
  }
  if (record.multiplayer?.tested === true) {
    if (!record.build?.buildId) fail(file, 'multiplayer tests need a buildId');
    if (!Number.isInteger(record.multiplayer?.participantCount) || record.multiplayer.participantCount < 2) {
      fail(file, 'multiplayer tests need participantCount of at least 2');
    }
  }

  if (record.controls?.tested === true) {
    if (!record.build?.buildId) fail(file, 'control tests need a buildId');
    if (!isIsoTimestamp(record.controls?.testStartedAt) || !isIsoTimestamp(record.controls?.testEndedAt)) {
      fail(file, 'control tests need ISO start and end timestamps');
    }
  }

  if (record.performance?.tested === true) {
    if (!record.testEnvironment?.environmentId || !record.performance?.methodology) {
      fail(file, 'performance tests need an environmentId and methodology');
    }
    if ((record.performance?.runs ?? []).length === 0) fail(file, 'performance tests need at least one run');
  }

  const selectedRoute = record.contentDecision?.selectedOwnerRoute;
  if (selectedRoute && !appRouteExists(selectedRoute)) fail(file, `selectedOwnerRoute does not exist: ${selectedRoute}`);
  const candidateRoute = record.contentDecision?.candidateNewRoute;
  if (candidateRoute && (typeof candidateRoute !== 'string' || !candidateRoute.startsWith('/'))) {
    fail(file, 'candidateNewRoute must start with /');
  }
  if (record.contentDecision?.decision === 'create-route' && !record.contentDecision?.independentIntentConfirmed) {
    fail(file, 'create-route decisions need independent intent evidence');
  }

  if (record.recordStatus === 'published') {
    if (record.publication?.status !== 'deployed') fail(file, 'published records need publication.status=deployed');
    if (!record.publication?.gitCommit || !record.publication?.branch || !record.publication?.deploymentUrl) {
      fail(file, 'published records need commit, branch, and deployment URL');
    }
    if (!/^[0-9a-f]{7,40}$/i.test(record.publication?.gitCommit ?? '')) fail(file, 'published records need a valid Git commit hash');
    requireHttpsUrls(file, [record.publication?.deploymentUrl], 'publication.deploymentUrl');
    requireHttpsUrls(file, record.publication?.productionUrls, 'publication.productionUrls');
    if ((record.publication?.productionUrls ?? []).length === 0) fail(file, 'published records need at least one production URL');
    if (!selectedRoute || !appRouteExists(selectedRoute)) fail(file, 'published records need an existing selectedOwnerRoute');
    if (!Array.isArray(record.publication?.modifiedRoutes) || record.publication.modifiedRoutes.length === 0) {
      fail(file, 'published records need modifiedRoutes');
    }
    for (const route of record.publication?.modifiedRoutes ?? []) {
      if (!appRouteExists(route)) fail(file, `published modified route does not exist: ${route}`);
    }
    for (const check of requiredPublishedChecks) {
      if (record.publication?.checks?.[check] !== true) fail(file, `published records need publication.checks.${check}=true`);
    }
  }
}

let template;
try {
  template = JSON.parse(fs.readFileSync(templatePath, 'utf8'));
  validateCoreShape('template.json', template);
  validateEvidenceEntries('template.json', template);
  if (template.isTemplate !== true || template.recordId !== 'template') fail('template.json', 'template identity is invalid');
  if (template.eventType !== null || template.detectedAt !== null) fail('template.json', 'template event fields must remain null');
} catch (error) {
  fail('template.json', `cannot be read: ${error.message}`);
}

const recordFiles = fs.existsSync(recordsPath)
  ? fs.readdirSync(recordsPath).filter((file) => file.endsWith('.json')).sort()
  : [];

for (const filename of recordFiles) {
  const fullPath = path.join(recordsPath, filename);
  try {
    validateRecord(filename, JSON.parse(fs.readFileSync(fullPath, 'utf8')));
  } catch (error) {
    fail(filename, `cannot be read: ${error.message}`);
  }
}

if (errors.length > 0) {
  console.error(`Launch Observation Kit audit failed with ${errors.length} error(s):`);
  for (const error of errors) console.error(`- ${error}`);
  process.exit(1);
}

console.log(`Launch Observation Kit audit passed: template valid, ${recordFiles.length} observation record(s).`);
