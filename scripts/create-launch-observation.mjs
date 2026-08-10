import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const dirname = path.dirname(fileURLToPath(import.meta.url));
const projectRoot = path.join(dirname, '..');
const templatePath = path.join(projectRoot, 'launch-observations', 'template.json');
const recordsPath = path.join(projectRoot, 'launch-observations', 'records');
const allowedEventTypes = new Set(['full-release', 'early-access', 'demo', 'playtest', 'major-announcement']);

function readArgument(name) {
  const inline = process.argv.find((argument) => argument.startsWith(`${name}=`));
  if (inline) return inline.slice(name.length + 1);
  const index = process.argv.indexOf(name);
  return index >= 0 ? process.argv[index + 1] : undefined;
}

function usage() {
  console.log('Usage: pnpm create:observation -- --event <type> [--id <record-id>] [--detected-at <ISO>] [--dry-run]');
  console.log(`Event types: ${[...allowedEventTypes].join(', ')}`);
}

if (process.argv.includes('--help')) {
  usage();
  process.exit(0);
}

const eventType = readArgument('--event');
if (!allowedEventTypes.has(eventType)) {
  console.error(`Missing or invalid --event: ${eventType ?? 'not provided'}`);
  usage();
  process.exit(1);
}

const detectedAtInput = readArgument('--detected-at');
const detectedAt = detectedAtInput ? new Date(detectedAtInput) : new Date();
if (Number.isNaN(detectedAt.getTime())) {
  console.error('--detected-at must be a valid ISO date-time');
  process.exit(1);
}

const detectedAtIso = detectedAt.toISOString();
const generatedId = `${detectedAtIso.slice(0, 19).replace(/[-:T]/g, '')}z-${eventType}`;
const recordId = readArgument('--id') ?? generatedId;
if (!/^[a-z0-9][a-z0-9-]{2,79}$/.test(recordId)) {
  console.error('--id must be 3-80 lowercase letters, numbers, or hyphens and cannot start with a hyphen');
  process.exit(1);
}

const observation = JSON.parse(fs.readFileSync(templatePath, 'utf8'));
observation.isTemplate = false;
observation.recordId = recordId;
observation.eventType = eventType;
observation.detectedAt = detectedAtIso;
observation.build.accessType = eventType;

const serialized = `${JSON.stringify(observation, null, 2)}\n`;
if (process.argv.includes('--dry-run')) {
  console.log(serialized);
  process.exit(0);
}

fs.mkdirSync(recordsPath, { recursive: true });
const outputPath = path.join(recordsPath, `${recordId}.json`);
try {
  fs.writeFileSync(outputPath, serialized, { flag: 'wx' });
} catch (error) {
  if (error && error.code === 'EEXIST') {
    console.error(`Refusing to overwrite existing observation: ${path.relative(projectRoot, outputPath)}`);
    process.exit(1);
  }
  throw error;
}

console.log(`Created ${path.relative(projectRoot, outputPath)}`);
console.log('Keep recordStatus=draft until the activation and evidence gates are verified.');
