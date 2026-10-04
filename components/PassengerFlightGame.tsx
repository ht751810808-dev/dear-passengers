'use client';

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import type { CabinEngine, FlightSnapshot } from '@/lib/cabin-engine';
import { CAREER_STORAGE_KEY, FLIGHT_ROUTES, UPGRADES, createCareer, parseCareer, settleFlight, upgradeCareer, type Career, type CareerLocale, type UpgradeKey } from '@/lib/flight-career';
import styles from './PassengerFlightGame.module.css';

type IconName = 'plane' | 'arrow' | 'sound' | 'mute' | 'fullscreen' | 'pause' | 'play' | 'close' | 'check' | 'lock' | 'coffee' | 'shield' | 'map' | 'help' | 'wrench' | 'fire' | 'cargo' | 'door' | 'belt' | 'spark' | 'chevron' | 'settings';
function Icon({ name, className }: { name: IconName; className?: string }) {
  const paths: Record<IconName, React.ReactNode> = {
    plane: <path d="m21 3-7.5 18-3.1-7.4L3 10.5 21 3Zm0 0L10.4 13.6" />,
    arrow: <path d="M4 12h16m-6-6 6 6-6 6" />,
    sound: <><path d="m11 4-6 5H2v6h3l6 5V4Z" /><path d="M15 8a6 6 0 0 1 0 8m3-11a10 10 0 0 1 0 14" /></>,
    mute: <><path d="m11 4-6 5H2v6h3l6 5V4Z" /><path d="m16 9 6 6m0-6-6 6" /></>,
    fullscreen: <path d="M8 3H3v5m13-5h5v5M3 16v5h5m8 0h5v-5" />,
    pause: <><path d="M8 5v14M16 5v14" strokeWidth="4" /></>,
    play: <path d="m7 4 13 8-13 8V4Z" />,
    close: <path d="m6 6 12 12M6 18 18 6" />,
    check: <path d="m5 12 4 4L19 6" />,
    lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3m-4 4v3" /></>,
    coffee: <><path d="M4 8h12v9a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4V8Zm12 1h2a3 3 0 0 1 0 6h-2M7 2v2m4-2v2m4-2v2" /></>,
    shield: <path d="m12 2 8 3v6c0 5-4 9-8 11-4-2-8-6-8-11V5l8-3Zm-4 9 3 3 5-5" />,
    map: <><path d="m3 5 6-2 6 3 6-2v16l-6 2-6-3-6 2V5Zm6-2v16m6-13v16" /></>,
    help: <><circle cx="12" cy="12" r="9" /><path d="M9 9a3 3 0 0 1 6 0c0 2-3 2-3 4m0 3h.01" /></>,
    wrench: <path d="m14 6 4 4 4-4a6 6 0 0 1-8 8l-7 7a3 3 0 0 1-4-4l7-7a6 6 0 0 1 8-8l-4 4Z" />,
    fire: <path d="M12 2c2 5-1 6 2 9l3-4c1 3 4 5 4 8a9 9 0 0 1-18 0c0-6 7-7 9-13Zm0 11c-4 4-4 7 0 8 4-1 4-4 0-8Z" />,
    cargo: <><rect x="4" y="6" width="16" height="15" rx="2" /><path d="M8 6V3h8v3M8 10v7m8-7v7" /></>,
    door: <><path d="M4 21h16M6 21V3h12v18m-4-9h.01" /></>,
    belt: <><path d="m3 3 7 7m4 4 7 7M3 21l7-7m4-4 7-7" /><rect x="8" y="8" width="8" height="8" rx="1" transform="rotate(45 12 12)" /></>,
    spark: <path d="m12 2 2.5 7.5L22 12l-7.5 2.5L12 22l-2.5-7.5L2 12l7.5-2.5L12 2Z" />,
    chevron: <path d="m9 5 7 7-7 7" />,
    settings: <><path d="M4 7h16M4 17h16" /><circle cx="8" cy="7" r="3" /><circle cx="16" cy="17" r="3" /></>,
  };
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const radio: Record<string, [string, string]> = {
  welcome: ['Welcome aboard. Your passengers are counting on you.', '欢迎登机。乘客们的安全，就交给你了。'],
  coffee: ['Cabin crew: check seatbelts, then collect coffee from the rear galley.', '乘务员请检查安全带，然后到后舱取咖啡。'],
  getCoffee: ['Coffee is in the rear galley. Turn around and head to the back.', '咖啡在后舱备餐间。转过身，走到客舱后方。'],
  cargo: ['Turbulence ahead. Secure the loose luggage near the front rows.', '前方气流不稳。请固定前排松脱的行李。'],
  cargoDone: ['Luggage secured. That is one less thing flying around.', '行李已固定。这下总算不会到处乱飞了。'],
  fire: ['Smoke in the cabin! Grab the extinguisher from the rear, on the right.', '客舱发现烟雾！灭火器在后舱右侧。'],
  getExtinguisher: ['You need an extinguisher. Find the red cylinder in the rear galley.', '需要灭火器。到后舱寻找红色罐体。'],
  fireDone: ['Fire is out. Nicely handled. Check the rest of the cabin.', '火已扑灭。干得不错，请继续检查客舱。'],
  door: ['Cabin pressure warning. Close the loose emergency door at the rear left.', '舱压报警。请关闭后舱左侧松脱的应急门。'],
  doorDone: ['Door secured. Cabin pressure is returning to normal.', '舱门已固定。舱压正在恢复正常。'],
  serviceDone: ['Coffee service complete. Keep an eye on the flight checklist.', '咖啡服务已完成。请继续关注航班任务清单。'],
  finishCabin: ['Finish the cabin checklist before taking the controls.', '接管驾驶前，请先完成所有客舱任务。'],
  approach: ['Your aircraft. Use A and D to hold the wings level for ten seconds.', '飞机交给你了。使用 A、D 保持机翼水平十秒。'],
  repair: ['Technical fault. Pick up the wrench in the rear and repair the service panel.', '机舱设备故障。到后舱取扳手，修复故障面板。'],
  getWrench: ['The repair needs a wrench. It is waiting in the rear galley.', '维修需要扳手。工具就在后舱备餐间。'],
  repairDone: ['Systems restored. Finish your checklist and head for the cockpit.', '设备恢复正常。完成清单后，请前往驾驶舱。'],
  beltsDone: ['Seatbelts checked. Now let us get those coffees out.', '安全带检查完成。接下来给乘客送咖啡吧。'],
};

function clock(seconds: number) { const t = Math.max(0, Math.ceil(seconds)); return `${Math.floor(t / 60).toString().padStart(2, '0')}:${(t % 60).toString().padStart(2, '0')}`; }

function TouchStick({ onMove, label }: { onMove: (x: number, y: number) => void; label: string }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const pointer = useRef<number | null>(null);
  const update = (event: ReactPointerEvent<HTMLDivElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    let x = event.clientX - rect.left - rect.width / 2, y = event.clientY - rect.top - rect.height / 2;
    const ratio = Math.max(1, Math.hypot(x, y) / 38); x /= ratio; y /= ratio;
    setPosition({ x, y }); onMove(x / 38, y / 38);
  };
  const reset = () => { pointer.current = null; setPosition({ x: 0, y: 0 }); onMove(0, 0); };
  return <div className={styles.joystick} role="button" aria-label={label} tabIndex={-1}
    onPointerDown={event => { event.preventDefault(); pointer.current = event.pointerId; event.currentTarget.setPointerCapture(event.pointerId); update(event); }}
    onPointerMove={event => { if (pointer.current === event.pointerId) update(event); }}
    onPointerUp={reset} onPointerCancel={reset} onLostPointerCapture={reset}>
    <span className={styles.stickArrows}>＋</span><span className={styles.stickKnob} style={{ transform: `translate(${position.x}px, ${position.y}px)` }} />
  </div>;
}

function CabinMap({ locale }: { locale: CareerLocale }) {
  const zh = locale === 'zh';
  return <div className={styles.cabinMap}>
    <div className={styles.mapNose}><Icon name="plane" /><strong>{zh ? '前方 · 驾驶舱' : 'FRONT · COCKPIT'}</strong><span>{zh ? '完成清单后接管驾驶' : 'Take the controls after your checklist'}</span></div>
    <div className={styles.mapCabin}>
      {Array.from({ length: 4 }, (_, i) => <div className={styles.mapRow} key={i}><span /><span /><em>{i + 1}</em><span /><span /></div>)}
      <span className={styles.mapAisle}>{zh ? '客舱过道' : 'CABIN AISLE'}</span>
      <span className={styles.mapCargo}><Icon name="cargo" />{zh ? '行李' : 'Luggage'}</span>
      <span className={styles.mapRepair}><Icon name="wrench" />{zh ? '维修面板' : 'Service panel'}</span>
    </div>
    <div className={styles.mapGalley}><span><Icon name="door" />{zh ? '应急门 · 左侧' : 'Door · left'}</span><span><Icon name="fire" />{zh ? '灭火器 · 右侧' : 'Extinguisher · right'}</span><strong><Icon name="coffee" />{zh ? '后舱 · 咖啡和扳手' : 'REAR · COFFEE & WRENCH'}</strong><small>{zh ? '你从这里出发，背对备餐间' : 'You start here, facing away from the galley'}</small></div>
  </div>;
}

function Manual({ locale }: { locale: CareerLocale }) {
  const zh = locale === 'zh';
  return <div className={styles.manual}>
    <p className={styles.manualIntro}>{zh ? '一个人照顾整架飞机。先把乘客安排好，再处理意外，最后亲手降落。' : 'One crew member. An entire aircraft. Look after your passengers, handle the chaos, and bring everyone home.'}</p>
    <ol className={styles.manualSteps}>
      <li><span>01</span><div><strong>{zh ? '先检查安全带' : 'Seatbelts first'}</strong><p>{zh ? '走近带标记的乘客，看向他们，按 E 系好安全带。' : 'Walk to marked passengers, look at them, and press E to fasten their belts.'}</p></div></li>
      <li><span>02</span><div><strong>{zh ? '咖啡在你身后' : 'Coffee is behind you'}</strong><p>{zh ? '转身到后舱取咖啡，再给乘客送上。用完可随时回去补充。' : 'Turn around to the rear galley, collect coffee, then serve each passenger. Refill whenever needed.'}</p></div></li>
      <li><span>03</span><div><strong>{zh ? '听广播，处理突发事件' : 'Listen for trouble'}</strong><p>{zh ? '固定行李、扑灭火焰、关闭舱门、维修面板。灭火器和扳手都在后舱。' : 'Secure luggage, put out a fire, shut the door, and repair the panel. Tools are at the rear.'}</p></div></li>
      <li><span>04</span><div><strong>{zh ? '把大家安全送到' : 'Bring everyone home'}</strong><p>{zh ? '全部完成后进入前方驾驶舱。按 A、D 将倾角保持在 ±8° 内，累计十秒即可降落。' : 'Enter the front cockpit when the list is complete. Use A / D to keep bank within ±8° for ten seconds.'}</p></div></li>
    </ol>
    <div className={styles.controlGrid}><span><kbd>W A S D</kbd>{zh ? '移动' : 'Move'}</span><span><kbd>Mouse</kbd>{zh ? '拖动 / 点击锁定视角' : 'Drag / click to look'}</span><span><kbd>E</kbd>{zh ? '交互' : 'Interact'}</span><span><kbd>Q</kbd>{zh ? '放下道具' : 'Drop item'}</span><span><kbd>Shift</kbd>{zh ? '快走' : 'Hurry'}</span><span><kbd>Esc / P</kbd>{zh ? '暂停' : 'Pause'}</span></div>
    <p className={styles.touchNote}>{zh ? '手机：左侧摇杆移动，拖动右侧场景观察，点击 E 交互。横屏能看得更清楚。' : 'On mobile: move with the left stick, drag the right side to look, and tap E. Landscape gives you more room.'}</p>
  </div>;
}

export default function PassengerFlightGame() {
  const root = useRef<HTMLElement>(null), host = useRef<HTMLDivElement>(null), engine = useRef<CabinEngine | null>(null), dialog = useRef<HTMLDivElement>(null);
  const [snapshot, setSnapshot] = useState<FlightSnapshot | null>(null);
  const [career, setCareer] = useState<Career>(createCareer);
  const careerRef = useRef<Career>(career);
  const [engineReady, setEngineReady] = useState(false), [error, setError] = useState(''), [saveError, setSaveError] = useState(false);
  const [tab, setTab] = useState<'departures' | 'hangar' | 'manual'>('departures');
  const [pausePanel, setPausePanel] = useState<'pause' | 'map' | 'manual'>('pause');
  const [selectedRoute, setSelectedRoute] = useState(0), [riskyCargo, setRiskyCargo] = useState(false);
  const [fullscreen, setFullscreen] = useState(false), [notice, setNotice] = useState('');
  const [receipt, setReceipt] = useState<{ reward: number; newlyUnlocked: number[] } | null>(null);
  const flightId = useRef(''), settledId = useRef(''), activeRisk = useRef(false), activeRoute = useRef(0), phaseRef = useRef('ready');
  const locale = career.settings.locale, zh = locale === 'zh', phase = snapshot?.phase ?? 'ready';
  const tr = (en: string, cn: string) => zh ? cn : en;
  const route = FLIGHT_ROUTES[selectedRoute];
  const flyingRoute = FLIGHT_ROUTES[activeRoute.current];

  const commitCareer = useCallback((next: Career) => {
    careerRef.current = next; setCareer(next);
    try { localStorage.setItem(CAREER_STORAGE_KEY, JSON.stringify(next)); setSaveError(false); } catch { setSaveError(true); }
  }, []);

  useEffect(() => {
    let cancelled = false;
    let saved = createCareer();
    try { saved = parseCareer(localStorage.getItem(CAREER_STORAGE_KEY)); } catch { setSaveError(true); }
    careerRef.current = saved; setCareer(saved);
    const overflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    import('@/lib/cabin-engine').then(({ CabinEngine: Engine, INITIAL_FLIGHT }) => {
      if (cancelled || !host.current) return;
      setSnapshot(INITIAL_FLIGHT);
      try {
        const preferences = careerRef.current.settings;
        engine.current = new Engine(host.current, state => { phaseRef.current = state.phase; setSnapshot(state); }, preferences.locale);
        if (preferences.muted) engine.current.mute();
        if (preferences.lowQuality) engine.current.quality();
        setEngineReady(true);
      } catch { setError('Your browser could not start the 3D cabin. Enable hardware acceleration or try a current browser.'); }
    }).catch(() => { if (!cancelled) setError('The cabin could not load. Check your connection and reload to try again.'); });
    const onFullscreen = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFullscreen);
    return () => { cancelled = true; engine.current?.dispose(); engine.current = null; document.body.style.overflow = overflow; document.removeEventListener('fullscreenchange', onFullscreen); };
  }, []);

  useEffect(() => {
    if (!snapshot || snapshot.phase !== 'result' || !flightId.current || settledId.current === flightId.current) return;
    settledId.current = flightId.current;
    const settlement = settleFlight(careerRef.current, { id: flightId.current, route: activeRoute.current, won: snapshot.won, score: snapshot.score, riskyCargo: activeRisk.current });
    commitCareer(settlement.career); setReceipt({ reward: settlement.reward, newlyUnlocked: settlement.newlyUnlocked });
  }, [snapshot, commitCareer]);

  useEffect(() => {
    const onKey = (event: KeyboardEvent) => {
      if (event.target instanceof HTMLInputElement || event.target instanceof HTMLSelectElement) return;
      if ((event.code === 'KeyM' || event.code === 'KeyH') && phaseRef.current === 'playing') {
        event.preventDefault(); setPausePanel(event.code === 'KeyM' ? 'map' : 'manual'); engine.current?.pause();
      }
      if (event.code === 'Tab' && dialog.current && ['paused', 'result'].includes(phaseRef.current)) {
        const items = Array.from(dialog.current.querySelectorAll<HTMLElement>('button:not(:disabled), a[href], input:not(:disabled), [tabindex="0"]'));
        if (!items.length) return;
        const first = items[0], last = items[items.length - 1];
        if (event.shiftKey && (document.activeElement === first || !dialog.current.contains(document.activeElement))) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && (document.activeElement === last || !dialog.current.contains(document.activeElement))) { event.preventDefault(); first.focus(); }
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  useEffect(() => {
    if (phase === 'paused' || phase === 'result') dialog.current?.querySelector<HTMLElement>('button:not(:disabled)')?.focus({ preventScroll: true });
  }, [phase, pausePanel]);

  useEffect(() => { if (engineReady && phase === 'ready') engine.current?.previewRoute(selectedRoute); }, [engineReady, selectedRoute, phase]);

  const startFlight = () => {
    if (!engine.current || careerRef.current.wins < route.requiredWins) return;
    const current = careerRef.current;
    activeRoute.current = selectedRoute; activeRisk.current = riskyCargo;
    flightId.current = typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    settledId.current = ''; setReceipt(null); setPausePanel('pause');
    if (!current.settings.tutorialSeen) commitCareer({ ...current, settings: { ...current.settings, tutorialSeen: true } });
    engine.current.start({ route: selectedRoute, upgradeHull: current.upgrades.hull, upgradeService: current.upgrades.service, upgradeHandling: current.upgrades.handling, riskyCargo });
  };
  const backToDesk = () => { engine.current?.resetToReady(); setPausePanel('pause'); setTab('departures'); setReceipt(null); };
  const setLocale = () => { const next = locale === 'en' ? 'zh' : 'en'; commitCareer({ ...careerRef.current, settings: { ...careerRef.current.settings, locale: next } }); engine.current?.setLocale(next); };
  const toggleMute = () => { const muted = engine.current?.mute() ?? !career.settings.muted; commitCareer({ ...careerRef.current, settings: { ...careerRef.current.settings, muted } }); };
  const toggleQuality = () => { const lowQuality = engine.current?.quality() ?? !career.settings.lowQuality; commitCareer({ ...careerRef.current, settings: { ...careerRef.current.settings, lowQuality } }); };
  const toggleFullscreen = async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else if (root.current?.requestFullscreen) await root.current.requestFullscreen(); else setNotice(tr('This browser already uses all available screen space.', '当前浏览器已使用可用屏幕空间。')); }
    catch { setNotice(tr('Fullscreen is unavailable. You can keep playing in this window.', '无法进入全屏，你仍可在当前窗口继续游戏。')); }
  };
  const buyUpgrade = (key: UpgradeKey) => { const next = upgradeCareer(careerRef.current, key); if (next !== careerRef.current) { commitCareer(next); setNotice(tr('Upgrade installed. Ready for your next flight.', '升级已安装，将在下一趟航班生效。')); } };
  const openPause = (panel: 'pause' | 'manual' | 'map' = 'pause') => { setPausePanel(panel); engine.current?.pause(); };
  const resume = () => { setPausePanel('pause'); engine.current?.resume(); };

  useEffect(() => { if (!notice) return; const timer = window.setTimeout(() => setNotice(''), 4000); return () => window.clearTimeout(timer); }, [notice]);

  const settings = <div className={styles.settingsControls}>
    <button type="button" onClick={setLocale} className={styles.languageButton} title={tr('Switch to Chinese', '切换到英文')}>{zh ? 'EN' : '中文'}</button>
    <button type="button" onClick={toggleMute} disabled={!engineReady} aria-label={tr(career.settings.muted ? 'Unmute audio' : 'Mute audio', career.settings.muted ? '开启声音' : '静音')} title={tr(career.settings.muted ? 'Unmute audio' : 'Mute audio', career.settings.muted ? '开启声音' : '静音')}><Icon name={career.settings.muted ? 'mute' : 'sound'} /></button>
    <button type="button" className={styles.qualityButton} onClick={toggleQuality} disabled={!engineReady} aria-label={tr(`Quality: ${career.settings.lowQuality ? 'Low' : 'High'}`, `画质：${career.settings.lowQuality ? '流畅' : '高'}`)} title={tr('Toggle graphics quality', '切换画质')}>{career.settings.lowQuality ? 'LQ' : 'HQ'}</button>
    <button type="button" onClick={toggleFullscreen} aria-label={tr(fullscreen ? 'Exit fullscreen' : 'Enter fullscreen', fullscreen ? '退出全屏' : '进入全屏')} title={tr('Fullscreen', '全屏')}><Icon name="fullscreen" /></button>
  </div>;

  const needed = snapshot?.requiredServed ?? flyingRoute.passengers;
  const beltsNeeded = snapshot?.requiredBelts ?? flyingRoute.passengers;
  const objectives: Array<{ icon: IconName; name: string; detail: string; done: boolean; active: boolean }> = snapshot ? [
    { icon: 'belt', name: tr('Seatbelt check', '检查安全带'), detail: `${snapshot.belts ?? 0}/${beltsNeeded}`, done: (snapshot.belts ?? 0) >= beltsNeeded, active: true },
    { icon: 'coffee', name: tr('Coffee service', '咖啡服务'), detail: `${snapshot.served}/${needed}`, done: snapshot.served >= needed, active: true },
    { icon: 'cargo', name: tr('Secure luggage', '固定行李'), detail: '', done: snapshot.cargo, active: snapshot.elapsed >= 22 },
    { icon: 'fire', name: tr('Put out the fire', '扑灭火焰'), detail: '', done: snapshot.fire, active: snapshot.elapsed >= 48 },
    { icon: 'door', name: tr('Seal cabin door', '关闭舱门'), detail: '', done: snapshot.door, active: snapshot.elapsed >= 78 },
    { icon: 'wrench', name: tr('Repair the panel', '维修面板'), detail: '', done: snapshot.repaired ?? false, active: snapshot.elapsed >= 105 },
    { icon: 'plane', name: tr('Land the aircraft', '驾驶着陆'), detail: '', done: snapshot.landed, active: snapshot.piloting || ((snapshot.repaired ?? false) && snapshot.served >= needed && snapshot.cargo && snapshot.fire && snapshot.door && (snapshot.belts ?? 0) >= beltsNeeded) },
  ] : [];
  const completed = objectives.filter(objective => objective.done).length;
  const radioText = radio[snapshot?.announcement ?? 'welcome'] ?? radio.welcome;

  return <main id="main-content" ref={root} className={`${styles.game} ${phase === 'ready' ? styles.atDesk : ''}`} data-game-root="passenger-flight" lang={zh ? 'zh-CN' : 'en'}>
    <div ref={host} className={styles.world} data-game-canvas="true" />
    <div className={styles.vignette} aria-hidden="true" />
    <div className={styles.filmGrain} aria-hidden="true" />

    {phase === 'ready' && <>
      <div className={styles.deskShade} aria-hidden="true" />
      <header className={styles.menuHeader}><a className={styles.airlineBrand} href="/dear-passengers-demo/" aria-label={tr('Back to the Dear Passengers guide', '返回 Dear Passengers 指南')}><span className={styles.brandMark}><Icon name="plane" /></span><span>DP AIRLINES<small>{tr('Passenger happiness. Eventually.', '让每一位乘客……最终满意。')}</small></span></a>{settings}</header>
      <section className={styles.departureDesk} aria-label={tr('Flight departure desk', '航班出发台')}>
        <div className={styles.eyebrow}><span className={styles.liveDot} />{tr('CABIN CREW, REPORT FOR DUTY', '乘务员，请就位')}<span>EST. 2026</span></div>
        <h1 className={styles.wordmark}><span>DEAR</span><span>PASSENGERS<span className={styles.titlePeriod}>.</span></span></h1>
        <p className={styles.tagline}>{tr('A perfectly ordinary flight.', '本来，是一趟平常的航班。')}<br /><span>{tr('Until you clock in.', '直到你开始值班。')}</span></p>
        <div className={styles.deskTabs} role="tablist" aria-label={tr('Flight desk', '航班出发台')}>
          {(['departures', 'hangar', 'manual'] as const).map((value, i) => <button key={value} type="button" role="tab" aria-selected={tab === value} aria-controls={`desk-${value}`} id={`tab-${value}`} tabIndex={tab === value ? 0 : -1} onKeyDown={event => { const tabs = ['departures', 'hangar', 'manual'] as const; const index = tabs.indexOf(tab); const next = event.key === 'ArrowRight' ? (index + 1) % 3 : event.key === 'ArrowLeft' ? (index + 2) % 3 : event.key === 'Home' ? 0 : event.key === 'End' ? 2 : -1; if (next >= 0) { event.preventDefault(); setTab(tabs[next]); document.getElementById(`tab-${tabs[next]}`)?.focus(); } }} onClick={() => setTab(value)} className={tab === value ? styles.activeTab : ''}><span>0{i + 1}</span>{value === 'departures' ? tr('Departures', '出发航班') : value === 'hangar' ? tr('Hangar', '机库升级') : tr('Flight manual', '乘务手册')}</button>)}
        </div>
        {tab === 'departures' && <div className={styles.departurePanel} role="tabpanel" id="desk-departures" aria-labelledby="tab-departures">
          <div className={styles.sectionLabel}><span>{tr('SELECT YOUR NEXT FLIGHT', '选择下一趟航班')}</span><span>{tr(`${career.wins} SAFE LANDINGS`, `${career.wins} 次安全降落`)}</span></div>
          <div className={styles.routeList}>
            {FLIGHT_ROUTES.map(flight => { const locked = career.wins < flight.requiredWins; return <button type="button" key={flight.id} disabled={locked} className={`${styles.routeRow} ${selectedRoute === flight.id ? styles.selectedRoute : ''}`} onClick={() => setSelectedRoute(flight.id)} aria-pressed={selectedRoute === flight.id}>
              <span className={styles.routeNumber}>{locked ? <Icon name="lock" /> : <span>0{flight.id + 1}</span>}</span>
              <span className={styles.routeInfo}><strong>{flight.name[locale]}</strong><small>{locked ? tr(`${flight.requiredWins} safe landings to unlock`, `安全降落 ${flight.requiredWins} 次后解锁`) : `${flight.flight} · ${clock(flight.duration)} · ${tr(`${flight.passengers} passengers`, `${flight.passengers} 位乘客`)}`}</small></span>
              <span className={styles.routeDestination}>{flight.from}<Icon name="arrow" />{flight.to}</span>
              <span className={styles.routeSelected}>{locked ? '' : career.completions[flight.id] > 0 ? <Icon name="check" /> : <Icon name="chevron" />}</span>
            </button>; })}
          </div>
          <label className={styles.cargoToggle}><input type="checkbox" checked={riskyCargo} onChange={event => setRiskyCargo(event.target.checked)} /><span className={styles.checkbox}><Icon name="check" /></span><span><strong>{tr('Take the risky cargo', '接下危险货物')}</strong><small>{tr('A tougher flight. A better payday.', '更大的挑战，更高的报酬。')}</small></span><b>+{route.riskyReward} <span>CR</span></b></label>
          <button className={styles.boardButton} type="button" onClick={startFlight} disabled={!engineReady || Boolean(error)}><span><Icon name="plane" />{!engineReady && !error ? tr('Preparing cabin…', '正在准备客舱…') : tr('Board flight', '登机出发')}</span><span>{route.flight}<Icon name="arrow" /></span></button>
          <div className={styles.boardFootnote}><span>{tr('YOUR BOARDING PASS IS READY', '你的登机牌已准备就绪')}</span><span>{route.reward}+ CR {tr('on arrival', '安全抵达奖励')}</span></div>
        </div>}
        {tab === 'hangar' && <div className={styles.hangarPanel} role="tabpanel" id="desk-hangar" aria-labelledby="tab-hangar">
          <div className={styles.sectionLabel}><span>{tr('A LITTLE LESS CHAOS, NEXT TIME', '为下一趟航班，多做一点准备')}</span><span className={styles.creditHighlight}>{career.credits.toLocaleString()} CR</span></div>
          {UPGRADES.map(upgrade => { const level = career.upgrades[upgrade.key], maxed = level >= 3, cost = upgrade.costs[level]; return <div className={styles.upgradeRow} key={upgrade.key}><span className={styles.upgradeIcon}><Icon name={upgrade.icon} /></span><div className={styles.upgradeCopy}><strong>{upgrade.name[locale]}</strong><p>{upgrade.description[locale]}</p><div className={styles.upgradeLevels}>{[0, 1, 2].map(i => <i key={i} className={level > i ? styles.levelFilled : ''} />)}<span>{level}/3</span></div></div><button type="button" disabled={maxed || career.credits < cost} onClick={() => buyUpgrade(upgrade.key)}>{maxed ? <Icon name="check" /> : `${cost} CR`}<small>{maxed ? tr('MAX LEVEL', '已满级') : career.credits < cost ? tr('KEEP FLYING', '余额不足') : tr('UPGRADE', '升级')}</small></button></div>; })}
          <p className={styles.hangarNote}>{tr('Earn credits by landing safely. Upgrades stay with you between flights.', '安全降落即可赚取积分。升级会一直保留，陪你飞下一程。')}</p>
        </div>}
        {tab === 'manual' && <div role="tabpanel" id="desk-manual" aria-labelledby="tab-manual"><Manual locale={locale} /></div>}
        <div className={styles.careerStrip}><span><b>{career.credits.toLocaleString()}</b> {tr('CREDITS', '积分')}</span><span><b>{career.wins}</b> {tr('LANDINGS', '安全降落')}</span><span className={saveError ? styles.saveWarning : styles.savedDot}><i />{saveError ? tr('SESSION ONLY', '仅当前会话') : tr('CAREER SAVED ON THIS DEVICE', '生涯保存在此设备')}</span></div>
        <footer className={styles.menuFooter}><span>{tr('Unofficial fan game · Single player', '非官方同人游戏 · 单人体验')}</span><a href="https://store.steampowered.com/app/4534960/Dear_Passengers/" target="_blank" rel="noopener noreferrer">{tr('Official game on Steam', 'Steam 官方游戏')} ↗</a></footer>
      </section>
      <aside className={styles.cabinPreview} aria-hidden="true"><span><i />{tr('LIVE FROM THE CABIN', '实时客舱画面')}</span><div className={styles.previewCoordinates}>35,000 FT<br />{tr('EVERYTHING IS UNDER CONTROL*', '一切都在掌控之中*')}</div><div className={styles.previewTicket}><div><span>{tr('NEXT DESTINATION', '下一目的地')}</span><strong>{route.destination[locale]}</strong><p>{route.description[locale]}</p></div><span className={styles.ticketStamp}>DP<br />{route.id === 0 ? '101' : route.id === 1 ? '204' : '808'}</span></div><small>*{tr('Approximately.', '大概吧。')}</small></aside>
    </>}

    {snapshot && phase !== 'ready' && <div className={styles.hud}>
      <header className={styles.flightHeader}><div className={styles.flightIdentity}><span className={styles.brandMark}><Icon name="plane" /></span><span><strong>{flyingRoute.flight}</strong><small>{flyingRoute.from} <span>→</span> {flyingRoute.to}</small></span></div><div className={`${styles.flightTimer} ${snapshot.remaining < 45 ? styles.urgent : ''}`}><span>{tr('TIME TO LAND', '剩余时间')}</span><strong>{clock(snapshot.remaining)}</strong></div><div className={styles.hullIndicator}><span><Icon name="shield" />{tr('AIRCRAFT', '机体状态')}<b>{Math.ceil(snapshot.health)}%</b></span><div><i style={{ width: `${snapshot.health}%`, background: snapshot.health < 35 ? 'var(--warning)' : undefined }} /></div></div><div className={styles.flightTools}><button type="button" onClick={() => openPause('map')} aria-label={tr('Cabin map', '客舱地图')} title={tr('Cabin map · M', '客舱地图 · M')}><Icon name="map" /></button><button type="button" onClick={() => openPause()} aria-label={tr('Pause flight', '暂停航班')} title={tr('Pause · Esc', '暂停 · Esc')}><Icon name="pause" /></button></div></header>
      <section className={styles.objectives} aria-label={tr('Flight checklist', '航班任务清单')}><div className={styles.objectiveHeading}><span>{tr('FLIGHT CHECKLIST', '航班任务清单')}</span><b>{completed}/7</b></div>{objectives.map((objective) => <div className={`${styles.objective} ${objective.done ? styles.objectiveDone : objective.active ? styles.objectiveActive : styles.objectiveWaiting}`} key={objective.name}><span className={styles.objectiveIcon}><Icon name={objective.done ? 'check' : objective.icon} /></span><span>{objective.name}</span><b>{objective.done ? '' : objective.detail || (objective.active ? '!' : '·')}</b></div>)}</section>
      <div className={styles.flightScore}><span>{tr('FLIGHT SCORE', '航班得分')}</span><strong>{snapshot.score.toLocaleString()}</strong></div>
      {snapshot.turbulence && phase === 'playing' && <div className={styles.turbulenceWarning}><Icon name="plane" />{tr('TURBULENCE · WATCH YOUR STEP', '颠簸气流 · 注意脚下')}</div>}
      {!snapshot.piloting && phase === 'playing' && <span className={`${styles.crosshair} ${snapshot.target ? styles.crosshairTarget : ''}`} aria-hidden="true" />}
      {phase === 'playing' && <>
        {!snapshot.piloting && <div className={styles.radio} role="status" aria-live="polite" aria-atomic="true"><span className={styles.radioLabel}><i />{tr('FLIGHT DECK', '驾驶舱广播')}</span><p>{radioText[zh ? 1 : 0]}</p></div>}
        {snapshot.elapsed < 22 && <div className={styles.firstFlightHint}>{tr('Look at a marked passenger and press E. Coffee is behind you.', '看向带标记的乘客，按 E 交互。咖啡就在你身后。')}</div>}
        {!snapshot.piloting && <div className={`${styles.interactPrompt} ${snapshot.prompt ? styles.promptVisible : ''}`}><kbd>E</kbd><span>{snapshot.prompt || tr('Look around the cabin', '环顾客舱')}</span></div>}
        {snapshot.piloting && <div className={styles.landingPanel}><div className={styles.landingTitle}><span>{tr('YOU HAVE CONTROL', '你已接管驾驶')}</span><b>{tr('FINAL APPROACH', '最后进近')}</b></div><div className={styles.bankInstrument}><span className={styles.bankLeft}>−30°</span><div className={styles.bankScale}><i className={styles.bankSafeZone} /><i className={styles.bankNeedle} style={{ left: `${50 + snapshot.bank / 45 * 50}%` }} /><span>0°</span></div><span className={styles.bankRight}>+30°</span></div><div className={styles.landingProgress}><i style={{ width: `${Math.min(100, snapshot.approach * 10)}%` }} /></div><div className={styles.landingInstructions}><span><kbd>A</kbd> <kbd>D</kbd> {tr('Keep the wings level', '保持机翼水平')}</span><strong>{snapshot.approach.toFixed(1)} / 10s</strong></div><p>{tr('Keep the marker in the green zone. On touch, steer with the left stick.', '让标记保持在绿色区域内。触屏请用左侧摇杆控制。')}</p></div>}
        <div className={styles.inventory}><span className={styles.itemIcon}><Icon name={snapshot.item === 'coffee' ? 'coffee' : snapshot.item === 'wrench' ? 'wrench' : snapshot.item === 'extinguisher' ? 'fire' : 'spark'} /></span><div><small>{tr('IN YOUR HAND', '手中道具')}</small><strong>{snapshot.item === 'coffee' ? tr(`Coffee · ${snapshot.cups} cups`, `咖啡 · ${snapshot.cups} 杯`) : snapshot.item === 'extinguisher' ? tr('Fire extinguisher', '灭火器') : snapshot.item === 'wrench' ? tr('Repair wrench', '维修扳手') : tr('Hands free', '双手空闲')}</strong></div>{snapshot.item && <kbd>Q</kbd>}</div>
        <div className={styles.keyboardHints}><span><kbd>W A S D</kbd>{tr('MOVE', '移动')}</span><span><kbd>MOUSE</kbd>{tr('LOOK', '观察')}</span><span><kbd>E</kbd>{tr('INTERACT', '交互')}</span><span><kbd>Q</kbd>{tr('DROP', '放下')}</span><button type="button" onClick={() => openPause('manual')}><Icon name="help" />{tr('Need a hand?', '需要帮助？')}</button></div>
        <div className={styles.touchControls}><TouchStick label={tr('Move through cabin', '在客舱中移动')} onMove={(x, y) => engine.current?.move(x, y)} /><div className={styles.touchLookHint}>{tr('DRAG TO LOOK', '拖动观察')}</div><div className={styles.touchActions}><button type="button" className={styles.touchDrop} disabled={!snapshot.item || snapshot.piloting} onClick={() => engine.current?.drop()} aria-label={tr('Drop held item', '放下手中道具')}>Q</button><button type="button" className={styles.touchInteract} disabled={snapshot.piloting} onClick={() => engine.current?.interact()} aria-label={tr('Interact', '交互')}>E<span>{tr('ACT', '交互')}</span></button></div></div>
      </>}
    </div>}

    {snapshot && phase === 'paused' && <div className={styles.modalBackdrop}><div ref={dialog} className={`${styles.flightDialog} ${pausePanel !== 'pause' ? styles.wideDialog : ''}`} role="dialog" aria-modal="true" aria-labelledby="pause-title"><div className={styles.dialogTopline}><span>{flyingRoute.flight} / {tr('CREW BREAK', '乘务休息')}</span><button type="button" onClick={resume} aria-label={tr('Close pause menu', '关闭暂停菜单')}><Icon name="close" /></button></div><h2 id="pause-title">{pausePanel === 'map' ? tr('Know your cabin.', '熟悉你的客舱。') : pausePanel === 'manual' ? tr('You have got this.', '你一定能行。') : tr('A moment to breathe.', '先喘一口气。')}</h2><p className={styles.dialogLead}>{tr('Your flight is paused. Nobody is spilling any more coffee.', '航班已暂停。放心，不会再有人把咖啡洒出来。')}</p>
      {pausePanel === 'map' ? <CabinMap locale={locale} /> : pausePanel === 'manual' ? <Manual locale={locale} /> : <><div className={styles.pauseSummary}><span>{tr('Remaining', '剩余时间')}<b>{clock(snapshot.remaining)}</b></span><span>{tr('Aircraft', '机体状态')}<b>{Math.ceil(snapshot.health)}%</b></span><span>{tr('Checklist', '任务清单')}<b>{completed}/7</b></span></div><div className={styles.pauseShortcuts}><button type="button" onClick={() => setPausePanel('map')}><Icon name="map" />{tr('Cabin map', '客舱地图')}<Icon name="chevron" /></button><button type="button" onClick={() => setPausePanel('manual')}><Icon name="help" />{tr('Flight manual', '乘务手册')}<Icon name="chevron" /></button></div><div className={styles.pauseSettings}><span>{tr('FLIGHT SETTINGS', '航班设置')}</span>{settings}</div></>}
      <button type="button" className={styles.dialogPrimary} onClick={resume}><Icon name="play" />{tr('Resume flight', '继续航班')}<span>↗</span></button><div className={styles.dialogSecondary}><button type="button" onClick={startFlight}>{tr('Restart flight', '重新开始航班')}</button><button type="button" onClick={backToDesk}>{tr('Back to departures', '返回出发台')}</button></div></div></div>}

    {snapshot && phase === 'result' && <div className={styles.modalBackdrop}><div ref={dialog} className={`${styles.flightDialog} ${styles.resultDialog}`} role="dialog" aria-modal="true" aria-labelledby="result-title"><div className={styles.resultIcon}><Icon name={snapshot.won ? 'plane' : 'wrench'} /></div><div className={styles.resultEyebrow}>{flyingRoute.flight} · {snapshot.won ? tr('ARRIVED SAFELY', '安全抵达') : tr('FLIGHT INTERRUPTED', '航班未完成')}</div><h2 id="result-title">{snapshot.won ? tr('Welcome home, captain.', '欢迎落地，机长。') : tr('Rough day at work.', '今天值班不太顺。')}</h2><p className={styles.dialogLead}>{snapshot.won ? tr('Everyone made it. Even the coffee. Your next adventure is waiting.', '大家都平安抵达，咖啡也是。下一趟冒险正在等你。') : snapshot.health <= 0 ? tr('The aircraft took too much damage. Tackle urgent hazards early and try again.', '机体损伤过重。下次优先处理紧急故障，再试一次吧。') : tr('Time ran out. Finish the cabin checklist, then head straight to the cockpit.', '时间用完了。完成客舱任务后，尽快前往驾驶舱。')}</p><div className={styles.resultGrade}><span>{tr('FLIGHT RATING', '航班评级')}</span><strong>{snapshot.won ? snapshot.health >= 85 ? 'S' : snapshot.health >= 60 ? 'A' : 'B' : '—'}</strong><div><b>{snapshot.score.toLocaleString()}</b><small>{tr('TOTAL SCORE', '总得分')}</small></div></div><div className={styles.resultStats}><span>{tr('Passengers served', '已服务乘客')}<b>{snapshot.served}/{needed}</b></span><span>{tr('Aircraft condition', '机体状态')}<b>{Math.ceil(snapshot.health)}%</b></span><span>{tr('Time remaining', '剩余时间')}<b>{clock(snapshot.remaining)}</b></span></div><div className={styles.rewardLine}><span>{tr('FLIGHT EARNINGS', '航班收入')}</span><strong>+{receipt?.reward.toLocaleString() ?? '0'} <small>CR</small></strong></div>{Boolean(receipt?.newlyUnlocked.length) && <div className={styles.unlockNotice}><Icon name="spark" /><span>{tr('NEW ROUTE UNLOCKED', '新航线已解锁')}<strong>{receipt?.newlyUnlocked.map(id => FLIGHT_ROUTES[id].name[locale]).join(' · ')}</strong></span></div>}<button type="button" className={styles.dialogPrimary} onClick={backToDesk}>{tr('Back to departures', '返回出发台')}<Icon name="arrow" /></button><button type="button" className={styles.replayButton} onClick={startFlight}>{tr('Fly this route again', '再飞一次这条航线')}</button><p className={styles.resultSaveNote}>{saveError ? tr('Storage is unavailable. Progress is kept for this session only.', '无法使用本地存储，进度仅在当前会话保留。') : tr('Career saved automatically on this device.', '生涯已自动保存在此设备。')}</p></div></div>}

    {error && <div className={styles.errorPanel} role="alert"><Icon name="settings" /><strong>{tr('The cabin needs a moment.', '客舱暂时无法启动。')}</strong><p>{zh ? '无法加载 3D 客舱。请检查网络、启用浏览器硬件加速，或使用更新的浏览器重试。' : error}</p><button type="button" onClick={() => window.location.reload()}>{tr('Reload cabin', '重新加载客舱')}</button><a href="/dear-passengers-demo/">{tr('Return to guide', '返回游戏指南')}</a></div>}
    {notice && <div className={styles.toast} role="status">{notice}</div>}
    {!engineReady && !error && <div className={styles.loadingBadge} role="status"><span />{tr('Opening the cabin doors…', '正在打开客舱门…')}</div>}
  </main>;
}
