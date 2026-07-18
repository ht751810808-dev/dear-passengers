import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const chineseOutputDirectory = join(process.cwd(), 'out', 'zh-cn');

async function updateHtmlLanguage(directory) {
  const entries = await readdir(directory, { withFileTypes: true });

  await Promise.all(entries.map(async (entry) => {
    const filePath = join(directory, entry.name);

    if (entry.isDirectory()) {
      await updateHtmlLanguage(filePath);
      return;
    }

    if (!entry.name.endsWith('.html')) return;

    const source = await readFile(filePath, 'utf8');
    const localized = source.replace('<html lang="en"', '<html lang="zh-CN"');

    if (localized === source) {
      throw new Error(`Expected English html language marker in ${filePath}`);
    }

    await writeFile(filePath, localized, 'utf8');
  }));
}

await updateHtmlLanguage(chineseOutputDirectory);
console.log('Updated exported Simplified Chinese pages to lang="zh-CN".');
