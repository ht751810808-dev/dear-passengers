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
  const germanRoutes = files.map((file) => `/${relative(out, file).replace(/index\.html$/, '').replaceAll('\\', '/')}`.replace(/\/+/g, '/')).filter((route) => route.startsWith('/de/'));
  const turkishRoutes = files.map((file) => `/${relative(out, file).replace(/index\.html$/, '').replaceAll('\\', '/')}`.replace(/\/+/g, '/')).filter((route) => route.startsWith('/tr/'));
  const localizedRoutes = [...germanRoutes, ...turkishRoutes];
  const orphaned = localizedRoutes.filter((route) => (incoming.get(route)?.size || 0) < 2);
  if (orphaned.length) {
    console.error(`Localized pages with fewer than two incoming pages:\n${orphaned.join('\n')}`);
    process.exitCode = 1;
  } else {
    console.log(`Internal-link audit passed: ${files.length} rendered pages, 0 broken links, ${germanRoutes.length} German and ${turkishRoutes.length} Turkish pages with at least two incoming pages.`);
  }
}
