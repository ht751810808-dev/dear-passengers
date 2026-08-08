import { readdir, readFile, stat } from 'node:fs/promises';
import { join, relative } from 'node:path';

async function collectHtml(directory) {
  const files = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) files.push(...await collectHtml(path));
    else if (entry.name === 'index.html') files.push(path);
  }
  return files;
}

const out = join(process.cwd(), 'out');
const files = await collectHtml(out);
const incoming = new Map();
const broken = [];

for (const file of files) {
  const sourceRoute = `/${relative(out, file).replace(/index\.html$/, '').replaceAll('\\', '/')}`.replace(/\/+/g, '/');
  const html = await readFile(file, 'utf8');
  for (const match of html.matchAll(/href="([^"]+)"/g)) {
    let href = match[1];
    if (href.startsWith('https://dearpassengers.net')) href = href.slice('https://dearpassengers.net'.length) || '/';
    if (!href.startsWith('/') || href.startsWith('//')) continue;
    const route = href.split(/[?#]/)[0];
    if (/\.[a-z0-9]{2,5}$/i.test(route) || route.startsWith('/_next/')) continue;
    const normalized = route === '/' ? '/' : `${route.replace(/\/+$/, '')}/`;
    const target = normalized === '/' ? join(out, 'index.html') : join(out, normalized, 'index.html');
    try {
      if (!(await stat(target)).isFile()) broken.push(`${sourceRoute} -> ${normalized}`);
    } catch {
      broken.push(`${sourceRoute} -> ${normalized}`);
    }
    if (normalized !== sourceRoute) incoming.set(normalized, (incoming.get(normalized) || new Set()).add(sourceRoute));
  }
}

if (broken.length) {
  console.error(`Broken internal links (${broken.length}):\n${[...new Set(broken)].join('\n')}`);
  process.exitCode = 1;
} else {
  const renderedRoutes = files.map((file) => `/${relative(out, file).replace(/index\.html$/, '').replaceAll('\\', '/')}`.replace(/\/+/g, '/'));
  const localePrefixes = ['/de/', '/ar/', '/tr/', '/pt-br/', '/es/', '/my/', '/ru/', '/cs/', '/zh-cn/'];
  const localeCounts = new Map(localePrefixes.map((prefix) => [prefix, renderedRoutes.filter((route) => route.startsWith(prefix)).length]));
  const localizedRoutes = renderedRoutes.filter((route) => localePrefixes.some((prefix) => route.startsWith(prefix)));
  const orphaned = localizedRoutes.filter((route) => (incoming.get(route)?.size || 0) < 2);
  if (orphaned.length) {
    console.error(`Localized pages with fewer than two incoming pages:\n${orphaned.join('\n')}`);
    process.exitCode = 1;
  } else {
    const localeSummary = [...localeCounts].map(([prefix, count]) => `${count} ${prefix.slice(1, -1)}`).join(', ');
    console.log(`Internal-link audit passed: ${files.length} rendered pages, 0 broken links, and every localized page has at least two incoming pages (${localeSummary}).`);
  }
}
