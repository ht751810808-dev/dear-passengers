import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

async function updateHtmlLanguage(directory, language, direction) {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(entries.map(async (entry) => {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await updateHtmlLanguage(filePath, language, direction);
      return;
    }

    if (!entry.name.endsWith('.html')) return;

    const source = await readFile(filePath, 'utf8');
    const localized = source.replace('<html lang="en"', `<html lang="${language}"${direction ? ` dir="${direction}"` : ''}`);

    if (localized === source) {
      throw new Error(`Expected English html language marker in ${filePath}`);
    }

    await writeFile(filePath, localized, 'utf8');
  }));
}

const localizedOutputs = [
  { directory: join(process.cwd(), 'out', 'zh-cn'), language: 'zh-CN' },
  { directory: join(process.cwd(), 'out', 'de'), language: 'de' },
  { directory: join(process.cwd(), 'out', 'ar'), language: 'ar', direction: 'rtl' },
  { directory: join(process.cwd(), 'out', 'tr'), language: 'tr' },
  { directory: join(process.cwd(), 'out', 'pt-br'), language: 'pt-BR' },
  { directory: join(process.cwd(), 'out', 'es'), language: 'es' },
  { directory: join(process.cwd(), 'out', 'my'), language: 'my-MM' },
  { directory: join(process.cwd(), 'out', 'ru'), language: 'ru' },
];

for (const output of localizedOutputs) {
  await updateHtmlLanguage(output.directory, output.language, output.direction);
  console.log(`Updated exported pages in ${output.directory} to lang="${output.language}".`);
}
