import { createRequire } from 'node:module';
import { mkdtempSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import path from 'node:path';
import { execFileSync } from 'node:child_process';
const require=createRequire(import.meta.url);
const {buildSync}=createRequire(require.resolve('wrangler'))('esbuild');
const directory=mkdtempSync(path.join(tmpdir(),'flight-systems-'));
try {
  for(const name of ['simulation','career']){
    const outfile=path.join(directory,`${name}.cjs`);
    buildSync({entryPoints:[`scripts/test-flight-${name}.ts`],bundle:true,platform:'node',outfile,logLevel:'silent'});
    execFileSync(process.execPath,[outfile],{stdio:'inherit'});
  }
} finally {rmSync(directory,{recursive:true,force:true});}
