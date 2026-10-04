import {createRequire} from 'node:module';
import {mkdirSync,readFileSync,writeFileSync} from 'node:fs';
import {tmpdir} from 'node:os';
import path from 'node:path';
const require=createRequire(import.meta.url),{buildSync}=createRequire(require.resolve('wrangler'))('esbuild');
const directory=path.resolve(process.env.FLIGHT_QA_FIXTURE_DIRECTORY||path.join(tmpdir(),'flight-v2-engine-qa'));mkdirSync(directory,{recursive:true});
buildSync({entryPoints:['scripts/flight-engine-fixture.ts'],bundle:true,format:'iife',globalName:'Flight',outfile:path.join(directory,'engine.js')});
writeFileSync(path.join(directory,'index.html'),readFileSync('scripts/flight-engine-fixture.html'));
console.log(directory);
