import fs from 'node:fs';
import path from 'node:path';

const OUTPUT_DIR = path.resolve('out');
const ADSENSE_LOADER = 'pagead2.googlesyndication.com/pagead/js/adsbygoogle.js';

function walk(directory) {
  return fs.readdirSync(directory, { withFileTypes: true }).flatMap((entry) => {
    const fullPath = path.join(directory, entry.name);
    return entry.isDirectory() ? walk(fullPath) : [fullPath];
  });
}

function routeFor(filePath) {
  const relative = path.relative(OUTPUT_DIR, filePath).split(path.sep).join('/');
  if (relative === 'index.html') return '/';
  return `/${relative.replace(/index\.html$/, '')}`;
}

if (!fs.existsSync(OUTPUT_DIR)) {
  throw new Error('AdSense build audit requires the static out/ directory.');
}

const htmlFiles = walk(OUTPUT_DIR).filter((filePath) => filePath.endsWith('.html'));
const failures = [];
let adBearingPages = 0;
let excludedMyanmarPages = 0;

for (const filePath of htmlFiles) {
  const route = routeFor(filePath);
  const html = fs.readFileSync(filePath, 'utf8');
  const hasAdSenseLoader = html.includes(ADSENSE_LOADER);
  const isMyanmarPage = route === '/my/' || route.startsWith('/my/');

  if (hasAdSenseLoader) adBearingPages += 1;

  if (isMyanmarPage) {
    excludedMyanmarPages += 1;
    if (hasAdSenseLoader) {
      failures.push(`${route} loads AdSense on unsupported Burmese/Myanmar content`);
    }
  }
}

if (!fs.readFileSync(path.join(OUTPUT_DIR, 'index.html'), 'utf8').includes(ADSENSE_LOADER)) {
  failures.push('/ does not contain the AdSense loader');
}

if (fs.existsSync(path.join(OUTPUT_DIR, 'adsterra-native', 'index.html'))) {
  failures.push('/adsterra-native/ is a retired blank advertising page and must not be published');
}

if (excludedMyanmarPages === 0) {
  failures.push('no Myanmar pages were found, so the unsupported-language exclusion was not verified');
}

if (failures.length > 0) {
  console.error('AdSense build audit failed:');
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log(
  `AdSense build audit passed: ${adBearingPages} ad-bearing pages; ` +
    `${excludedMyanmarPages} Myanmar pages verified without Google ad code.`,
);
