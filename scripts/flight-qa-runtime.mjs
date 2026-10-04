import {createRequire} from 'node:module';
import {existsSync,mkdirSync,readdirSync} from 'node:fs';
import {homedir,tmpdir} from 'node:os';
import path from 'node:path';
const require=createRequire(import.meta.url);
const runtime=process.env.FLIGHT_QA_NODE_MODULES||path.join(homedir(),'.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules');
let playwright;try{playwright=require('playwright');}catch{playwright=require(path.join(runtime,'playwright'));}
export const {chromium}=playwright;
function browserPath(){
  if(process.env.FLIGHT_QA_BROWSER)return process.env.FLIGHT_QA_BROWSER;
  const chrome='/Applications/Google Chrome.app/Contents/MacOS/Google Chrome';if(existsSync(chrome))return chrome;
  if(existsSync(chromium.executablePath()))return chromium.executablePath();
  const cache=path.join(homedir(),'Library/Caches/ms-playwright');if(existsSync(cache))for(const folder of readdirSync(cache).filter(n=>n.startsWith('chromium-')).reverse()){const candidate=path.join(cache,folder,'chrome-mac-arm64/Google Chrome for Testing.app/Contents/MacOS/Google Chrome for Testing');if(existsSync(candidate))return candidate;}
  throw new Error('Set FLIGHT_QA_BROWSER to an installed Chromium executable. No browser is installed by this test.');
}
export const launchOptions={headless:true,executablePath:browserPath(),args:[process.platform==='darwin'?'--use-angle=metal':'--use-angle=swiftshader','--enable-unsafe-swiftshader','--disable-background-timer-throttling','--disable-renderer-backgrounding','--disable-backgrounding-occluded-windows']};
export const outputDir=path.resolve(process.env.FLIGHT_QA_OUTPUT||path.join(tmpdir(),'dear-passengers-v2-qa'));
mkdirSync(outputDir,{recursive:true});
