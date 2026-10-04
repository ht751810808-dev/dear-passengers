'use client';

import { useCallback, useEffect, useRef, useState, type PointerEvent as ReactPointerEvent } from 'react';
import type { CabinEngine, FlightSnapshot } from '@/lib/cabin-engine';
import { CAREER_STORAGE_KEY, LEGACY_CAREER_STORAGE_KEY, UPGRADES, createCareer, parseCareer, settleFlight, upgradeCareer, crewRank, type Career, type CareerLocale, type UpgradeKey, type FlightReceipt, type DebriefScores } from '@/lib/flight-career';
import { FLIGHT_MISSIONS, FLIGHT_DIFFICULTIES, WEATHER_NAMES, CARGO_NAMES, STAGE_NAMES, getFlightMission, getFlightDifficulty, missionDuration, type FlightDifficulty, type FlightStage, type FlightHazard } from '@/lib/flight-missions';
import styles from './PassengerFlightGame.module.css';
import FlightCrewRoom from './FlightCrewRoom';
import { DEFAULT_FLIGHT_ROOM_URL, type FlightRoomSession } from '@/lib/flight-network';

type IconName = 'plane' | 'arrow' | 'sound' | 'mute' | 'fullscreen' | 'pause' | 'play' | 'close' | 'check' | 'lock' | 'coffee' | 'shield' | 'map' | 'help' | 'wrench' | 'fire' | 'cargo' | 'door' | 'belt' | 'spark' | 'chevron' | 'settings' | 'fuel' | 'pressure' | 'smile' | 'food' | 'log' | 'chevronDown' | 'grip';
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
    fuel: <><path d="M5 21V4h9v17M3 21h13M5 10h9m0-3 5 3v7a2 2 0 0 0 4 0v-6l-4-5" /></>,
    pressure: <><circle cx="12" cy="12" r="9" /><path d="m12 12 4-5M6 15h12" /></>,
    smile: <><circle cx="12" cy="12" r="9" /><path d="M8 9h.01M16 9h.01M7 14c3 4 7 4 10 0" /></>,
    food: <><path d="M3 3v6a3 3 0 0 0 6 0V3M6 3v18m11-18v18m0-18c-5 4-4 9 0 9" /></>,
    log: <><path d="M5 3h14v18H5V3Zm4 4h6m-6 5h6m-6 5h4" /></>,
    chevronDown: <path d="m6 9 6 6 6-6" />,
    grip: <><path d="M8 12V7a2 2 0 0 1 4 0v5-7a2 2 0 0 1 4 0v7-4a2 2 0 0 1 4 0v8c0 4-3 6-7 6-3 0-6-3-8-6l-2-3a2 2 0 0 1 3-2l2 1Z" /></>,
    settings: <><path d="M4 7h16M4 17h16" /><circle cx="8" cy="7" r="3" /><circle cx="16" cy="17" r="3" /></>,
  };
  return <svg className={className} width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.65" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">{paths[name]}</svg>;
}

const radio: Record<string, [string, string]> = {
  cockpitOccupied:['Another crew member has the controls. Help in the cabin until they return.','另一位机组成员正在驾驶，请先协助客舱工作。'],
  welcome: ['Welcome aboard. Your passengers are counting on you.', '欢迎登机。乘客们的安全，就交给你了。'],
  boarding: ['Welcome aboard. Check the marked seatbelts, then visit the front cockpit to begin takeoff.', '欢迎登机。检查带标记乘客的安全带，然后前往最前方驾驶舱开始起飞。'],
  takeoff: ['Takeoff clearance received. Autopilot is climbing; you may return to cabin duties.', '已获起飞许可。自动驾驶正在爬升，你可以返回客舱处理乘务工作。'],
  cruise: ['Cruising altitude. Keep the passengers comfortable and respond to cabin warnings.', '已进入巡航。请照顾乘客，并及时处理客舱警告。'],
  autopilot: ['Autopilot engaged. The aircraft is in automatic flight; cabin duties can continue.', '自动驾驶已接通。飞机正在自动飞行，可以继续处理客舱任务。'],
  manualFlight: ['You have control. W/S pitch, A/D roll, R/F throttle. Space restores autopilot.', '你已接管驾驶。W/S 俯仰，A/D 横滚，R/F 油门。空格恢复自动驾驶。'],
  stall: ['Low airspeed! Lower the nose and increase throttle, or engage autopilot with Space.', '空速过低！请压低机头并增加油门，或按空格接通自动驾驶。'],
  goAround: ['Approach unstable. Going around on autopilot; stay on the flight deck for another approach.', '进近不稳定。自动驾驶正在复飞；留在驾驶舱，准备再次进近。'],
  seatbelt: ['Seatbelt secured. Check the remaining marked passengers.', '安全带已扣好。请继续检查其他带标记的乘客。'],
  coffeeDelivered: ['Coffee delivered. Continue service for the remaining orders.', '咖啡已送达。请继续完成剩余订单。'],
  foodDelivered: ['Meal delivered. Check the checklist for the next cabin task.', '餐食已送达。请查看清单中的下一项客舱任务。'],
  getFood: ['Meal trays are in the rear galley, beside the coffee station.', '餐盘在后舱备餐间，靠近咖啡台。'],
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
  finishCabin: ['Complete the remaining cabin tasks before returning for landing.', '返回驾驶舱着陆前，请完成剩余客舱任务。'],
  approach: ['Final approach. Stay on the flight deck. Autopilot can land, or take manual control with Space.', '已进入最后进近。请留在驾驶舱；可让自动驾驶着陆，或按空格接管手动驾驶。'],
  repair: ['Technical fault. Pick up the wrench in the rear and repair the service panel.', '机舱设备故障。到后舱取扳手，修复故障面板。'],
  getWrench: ['The repair needs a wrench. It is waiting in the rear galley.', '维修需要扳手。工具就在后舱备餐间。'],
  repairDone: ['Systems restored. Finish your checklist and head for the cockpit.', '设备恢复正常。完成清单后，请前往驾驶舱。'],
  beltsDone: ['Seatbelts checked. Follow the flight guidance and continue cabin service.', '安全带检查完成。请按航班指引继续客舱服务。'],
  hostAway: ['The captain has paused the shared flight. Stand by for the crew to return.', '机长已暂停联机航班，请等待机组返回。'],
  crewEnded: ['The shared flight has ended. Return to dispatch to begin another flight.', '联机航班已结束。返回出发台后可开始新的航班。'],
};

const flightHints: Record<string, [string, string]> = {
  boarding: ['Check marked seatbelts, then walk to the front cockpit and press E to begin takeoff.', '检查带标记乘客的安全带，再走到最前方驾驶舱，按 E 开始起飞。'],
  takeoff: ['Autopilot is climbing. Press E to return to the cabin and begin service.', '自动驾驶正在爬升。按 E 返回客舱，开始乘客服务。'],
  fire: ['Fire warning. Take the red extinguisher from the rear right, then press E at the fire.', '火情警告。到后舱右侧取红色灭火器，再靠近火源按 E。'],
  door: ['Pressure is dropping. Go to the rear-left emergency door and press E to secure it.', '舱压正在下降。请到后舱左侧应急门，按 E 固定舱门。'],
  repair: ['Collect the wrench at the rear galley, then press E at the faulty service panel.', '到后舱备餐间取扳手，再靠近故障面板按 E 维修。'],
  cargo: ['Loose cargo needs securing. Find the marked luggage near the front rows and press E.', '货物松脱。找到前排附近带标记的行李，按 E 固定。'],
  belts: ['Check the remaining marked passengers. Stand close and press E to secure a seatbelt.', '检查剩余带标记的乘客，靠近后按 E 扣好安全带。'],
  coffee: ['Collect coffee at the rear galley, then bring it to passengers marked with a cup.', '到后舱备餐间取咖啡，再送给带杯子标记的乘客。'],
  food: ['Take meal trays from the rear galley and serve the passengers requesting food.', '到后舱备餐间取餐盘，再送给需要餐食的乘客。'],
  returnCockpit: ['Cabin ready for arrival. Walk to the front cockpit and press E to begin the approach.', '客舱已做好抵达准备。走到最前方驾驶舱，按 E 开始进近。'],
  landing: ['Stay on the flight deck for landing. Autopilot is available; Space toggles manual flight.', '留在驾驶舱完成着陆。可使用自动驾驶；按空格切换手动飞行。'],
  cruise: ['Cruise in progress. Watch the aircraft gauges and respond to new cabin warnings.', '巡航进行中。留意机体仪表，并及时处理新的客舱警告。'],
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
    <div className={styles.mapNose}><Icon name="plane" /><strong>{zh ? '前方 · 驾驶舱' : 'FRONT · COCKPIT'}</strong><span>{zh ? '按 E 开始起飞；抵达前返回着陆' : 'Press E to start takeoff; return here for landing'}</span></div>
    <div className={styles.mapCabin}>
      {Array.from({ length: 4 }, (_, i) => <div className={styles.mapRow} key={i}><span /><span /><em>{i + 1}</em><span /><span /></div>)}
      <span className={styles.mapAisle}>{zh ? '客舱过道' : 'CABIN AISLE'}</span>
      <span className={styles.mapCargo}><Icon name="cargo" />{zh ? '行李' : 'Luggage'}</span>
      <span className={styles.mapRepair}><Icon name="wrench" />{zh ? '维修面板' : 'Service panel'}</span>
    </div>
    <div className={styles.mapGalley}><span><Icon name="door" />{zh ? '应急门 · 左侧' : 'Door · left'}</span><span><Icon name="fire" />{zh ? '灭火器 · 右侧' : 'Extinguisher · right'}</span><strong><Icon name="coffee" />{zh ? '后舱 · 咖啡、餐食和工具' : 'REAR · COFFEE, MEALS & TOOLS'}</strong><small>{zh ? '你从这里出发，背对备餐间' : 'You start here, facing away from the galley'}</small></div>
  </div>;
}

function Manual({ locale }: { locale: CareerLocale }) {
  const zh = locale === 'zh';
  const steps = [
    [zh ? '准备客舱，走向驾驶舱' : 'Board, then visit the flight deck', zh ? '先为带标记的乘客扣好安全带。驾驶舱在客舱最前方；走近门口按 E 即可接管并开始起飞。' : 'Check the marked passengers’ seatbelts. The cockpit is at the front of the cabin. Walk to its door and press E to take control and begin takeoff.'],
    [zh ? '巡航期间照顾乘客' : 'Serve while you cruise', zh ? '自动驾驶默认开启。按 E 返回客舱，到后舱取咖啡或餐食，再送给对应乘客。工具也放在后舱。' : 'Autopilot starts enabled. Press E to return to the cabin, collect coffee or meals from the rear galley, and deliver them to the marked passengers. Tools are at the rear, too.'],
    [zh ? '处理故障，维持飞机状态' : 'Keep the aircraft healthy', zh ? '不同合约有不同的行李、火情、舱门与电路故障。点击 E 开始操作，留在目标附近直到进度条完成。按 F 抓取物品或乘客，Q 放下或抛出；移动过的乘客需归座并重新扣带。' : 'Each contract has its own luggage, fire, door, and electrical incidents. Press E once to start work, then stay near the target until the progress bar finishes. F grabs objects or passengers; Q drops or throws. Reseat and rebuckle any moved passenger.'],
    [zh ? '收到提示后返回驾驶舱降落' : 'Return to the cockpit for landing', zh ? '完成任务并抵达进近航段后，回到驾驶舱。可保持自动驾驶，或按空格切换手动：W/S 俯仰、A/D 横滚、R/F 油门。安全手飞会获得额外分数。' : 'When the checklist and flight progress are ready, return to the cockpit. Leave autopilot on or press Space for manual control: W/S pitch, A/D roll, R/F throttle. Safe manual flying adds a score bonus.'],
  ];
  return <div className={styles.manual}>
    <p className={styles.manualIntro}>{zh ? '你同时负责客舱与驾驶。按照任务提示完成登机、起飞、巡航、进近和着陆；合约简报决定本次任务。' : 'You are responsible for cabin and cockpit. Follow the flight guidance from boarding to landing; your contract briefing defines the work ahead.'}</p>
    <ol className={styles.manualSteps}>{steps.map(([title, text], i) => <li key={i}><span>0{i + 1}</span><div><strong>{title}</strong><p>{text}</p></div></li>)}</ol>
    <div className={styles.controlGrid}><span><kbd>W A S D</kbd>{zh ? '移动 / 飞行操纵' : 'Move / flight controls'}</span><span><kbd>Mouse</kbd>{zh ? '拖动 / 点击锁定视角' : 'Drag / click to look'}</span><span><kbd>E</kbd>{zh ? '交互 / 进出驾驶舱' : 'Interact / enter or leave cockpit'}</span><span><kbd>F / Q</kbd>{zh ? '抓取 / 放下物品' : 'Grab / drop objects'}</span><span><kbd>Space</kbd>{zh ? '自动驾驶开关' : 'Toggle autopilot'}</span><span><kbd>Esc / P</kbd>{zh ? '暂停' : 'Pause'}</span></div>
    <p className={styles.touchNote}>{zh ? '手机：左摇杆移动，右侧拖动观察；驾驶时摇杆控制横滚和俯仰，使用油门 +/− 与自动驾驶按钮。自由练习保留真实故障，但不结算积分或合约进度。' : 'Mobile: move with the left stick and drag the right side to look. In the cockpit, the stick controls roll and pitch; use throttle +/− and the autopilot button. Free practice keeps the flight systems active but awards no credits or contract progress.'}</p>
  </div>;
}

type OperationalSnapshot = FlightSnapshot & Partial<{
  stage: FlightStage; pressure: number; fuel: number; satisfaction: number; targetDistance: number | null;
  interactionProgress: number; interactionLabel: string; stageProgress: number; activeHazards: string[];
  failReason: string; debrief: DebriefScores; altitude: number; speed: number; pitch: number; throttle: number;
  verticalSpeed: number; heading: number; runwayOffset: number; flightProgress: number; actionHint: string;
  foodServed: number; requiredFood: number; grabbed: string | null; autopilot: boolean; airborneElapsed: number;
}>;
type OperationalEngine = CabinEngine & { grab(): void; toggleAutopilot(): void; adjustThrottle(delta: number): void };
type DeskTab = 'departures' | 'hangar' | 'logbook' | 'manual';
const DESK_TABS: DeskTab[] = ['departures', 'hangar', 'logbook', 'manual'];
const STAGES: FlightStage[] = ['boarding', 'takeoff', 'cruise', 'approach', 'landed'];

function SystemGauge({ icon, label, value, warning = 30 }: { icon: IconName; label: string; value: number; warning?: number }) {
  const safeValue = Math.max(0, Math.min(100, Number.isFinite(value) ? value : 0));
  return <div className={`${styles.systemGauge} ${safeValue < warning ? styles.systemWarning : ''}`}>
    <span><Icon name={icon} />{label}<b>{Math.round(safeValue)}<small>%</small></b></span>
    <div role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(safeValue)}><i style={{ width: `${safeValue}%` }} /></div>
  </div>;
}

function StageStrip({ stage, progress, locale }: { stage: FlightStage; progress: number; locale: CareerLocale }) {
  const active = STAGES.indexOf(stage);
  return <ol className={styles.stageStrip} aria-label={locale === 'zh' ? '航班阶段' : 'Flight stages'}>
    {STAGES.map((value, i) => <li key={value} className={i < active ? styles.stageComplete : i === active ? styles.stageCurrent : ''} aria-current={i === active ? 'step' : undefined}><span>{i < active ? <Icon name="check" /> : `0${i + 1}`}</span><strong>{STAGE_NAMES[value][locale]}</strong>{i === active && <i style={{ transform: `scaleX(${Math.max(.08, Math.min(1, progress))})` }} />}</li>)}
  </ol>;
}

export default function PassengerFlightGame() {
  const root = useRef<HTMLElement>(null), host = useRef<HTMLDivElement>(null), engine = useRef<OperationalEngine | null>(null), dialog = useRef<HTMLDivElement>(null);
  const [crewSession,setCrewSession]=useState<FlightRoomSession|null>(null), crewRef=useRef<FlightRoomSession|null>(null);
  const [showCrew,setShowCrew]=useState(false),crewReturnPlaying=useRef(false);
  const [snapshot, setSnapshot] = useState<OperationalSnapshot | null>(null);
  const [career, setCareer] = useState<Career>(createCareer), careerRef = useRef<Career>(career);
  const [engineReady, setEngineReady] = useState(false), [error, setError] = useState(''), [saveError, setSaveError] = useState(false);
  const [tab, setTab] = useState<DeskTab>('departures'), [pausePanel, setPausePanel] = useState<'pause' | 'map' | 'manual'>('pause');
  const [selectedMission, setSelectedMission] = useState(0), [mode, setMode] = useState<'campaign' | 'practice'>('campaign');
  const [fullscreen, setFullscreen] = useState(false), [notice, setNotice] = useState(''), [receipt, setReceipt] = useState<FlightReceipt | null>(null);
  const flightId = useRef(''), settledId = useRef(''), phaseRef = useRef('ready');
  const activeFlight = useRef<{ mission: number; difficulty: FlightDifficulty; practice: boolean }>({ mission: 0, difficulty: 'standard', practice: false });
  const locale = career.settings.locale, zh = locale === 'zh', phase = snapshot?.phase ?? 'ready';
  const tr = (en: string, cn: string) => zh ? cn : en;
  const mission = getFlightMission(selectedMission), flyingMission = getFlightMission(activeFlight.current.mission);
  const difficulty = mode === 'practice' ? 'training' : career.settings.difficulty;
  const difficultyInfo = getFlightDifficulty(difficulty), rank = crewRank(career.xp);
  const selectedRecord = career.contracts[selectedMission];
  const clearedContracts = career.contracts.filter(record => record.completions > 0).length;
  const stage = snapshot?.stage ?? (snapshot?.landed ? 'landed' : snapshot?.piloting ? 'approach' : 'boarding');

  const commitCareer = useCallback((next: Career) => {
    careerRef.current = next; setCareer(next);
    try { localStorage.setItem(CAREER_STORAGE_KEY, JSON.stringify(next)); setSaveError(false); } catch { setSaveError(true); }
  }, []);

  useEffect(() => {
    let cancelled = false;
    let saved = createCareer();
    try { saved = parseCareer(localStorage.getItem(CAREER_STORAGE_KEY) ?? localStorage.getItem(LEGACY_CAREER_STORAGE_KEY)); } catch { setSaveError(true); }
    careerRef.current = saved; setCareer(saved);
    const overflow = document.body.style.overflow; document.body.style.overflow = 'hidden';
    import('@/lib/cabin-engine').then(({ CabinEngine: Engine, INITIAL_FLIGHT }) => {
      if (cancelled || !host.current) return;
      setSnapshot(INITIAL_FLIGHT);
      try {
        const preferences = careerRef.current.settings;
        engine.current = new Engine(host.current, state => { phaseRef.current = state.phase; setSnapshot(state); }, preferences.locale) as OperationalEngine;
        if (preferences.muted) engine.current.mute();
        if (preferences.lowQuality) engine.current.quality();
        setEngineReady(true);
      } catch { setError('Your browser could not start the 3D cabin. Enable hardware acceleration or try a current browser.'); }
    }).catch(() => { if (!cancelled) setError('The cabin could not load. Check your connection and reload to try again.'); });
    const onFullscreen = () => setFullscreen(Boolean(document.fullscreenElement));
    document.addEventListener('fullscreenchange', onFullscreen);
    return () => { cancelled = true; crewRef.current?.close(); engine.current?.dispose(); engine.current = null; document.body.style.overflow = overflow; document.removeEventListener('fullscreenchange', onFullscreen); };
  }, []);

  useEffect(() => {
    if (!snapshot || snapshot.phase !== 'result' || !flightId.current || settledId.current === flightId.current) return;
    settledId.current = flightId.current;
    const active = activeFlight.current, contract = getFlightMission(active.mission);
    const serviceTotal = snapshot.requiredServed + (snapshot.requiredFood ?? 0);
    const fallback: DebriefScores = {
      service: Math.round((snapshot.served + (snapshot.foodServed ?? 0)) / Math.max(1, serviceTotal) * 100),
      safety: Math.round(snapshot.health * .65 + (snapshot.pressure ?? snapshot.health) * .35),
      handling: snapshot.won ? 75 : 0,
      time: Math.round(Math.min(100, snapshot.remaining / missionDuration(contract, active.difficulty) * 180)),
    };
    const settlement = settleFlight(careerRef.current, { id: flightId.current, route: contract.route, mission: active.mission, difficulty: active.difficulty, practice: active.practice, won: snapshot.won, score: snapshot.score, riskyCargo: contract.cargo === 'hazardous', debrief: snapshot.debrief ?? fallback });
    commitCareer(settlement.career); setReceipt(settlement);
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
    window.addEventListener('keydown', onKey); return () => window.removeEventListener('keydown', onKey);
  }, []);
  useEffect(() => { if (phase === 'paused' || phase === 'result') dialog.current?.querySelector<HTMLElement>('button:not(:disabled)')?.focus({ preventScroll: true }); }, [phase, pausePanel]);
  useEffect(() => { if (engineReady && phase === 'ready') engine.current?.previewRoute(mission.route); }, [engineReady, mission.route, phase]);
  useEffect(() => { if (!notice) return; const timer = window.setTimeout(() => setNotice(''), 4000); return () => window.clearTimeout(timer); }, [notice]);

  const startFlight = (missionID = selectedMission, practice = mode === 'practice') => {
    const contract = getFlightMission(missionID), current = careerRef.current;
    if (!engine.current || (!practice && current.wins < contract.requiredWins)) return;
    const selectedDifficulty = practice ? 'training' : current.settings.difficulty;
    activeFlight.current = { mission: contract.id, difficulty: selectedDifficulty, practice };
    flightId.current = typeof crypto.randomUUID === 'function' ? crypto.randomUUID() : `${Date.now()}-${Math.random().toString(36).slice(2)}`;
    settledId.current = ''; setReceipt(null); setPausePanel('pause');
    if (!current.settings.tutorialSeen) commitCareer({ ...current, settings: { ...current.settings, tutorialSeen: true } });
    const configuration = { route: contract.route, mission: contract.id, difficulty: selectedDifficulty, practice, upgradeHull: current.upgrades.hull, upgradeService: current.upgrades.service, upgradeHandling: current.upgrades.handling, riskyCargo: contract.cargo === 'hazardous' };
    engine.current.start(configuration);
  };
  const attachCrew = (session:FlightRoomSession) => {
    crewRef.current?.close();crewRef.current=session;setCrewSession(session);setShowCrew(false);
    engine.current?.connectCrew(session,(configuration,id)=>{
      activeFlight.current={mission:configuration.mission??0,difficulty:configuration.difficulty??'standard',practice:Boolean(configuration.practice)};
      flightId.current=`crew:${session.code}:${id}`;settledId.current='';setReceipt(null);setShowCrew(false);
    });
  };
  const leaveCrew = () => {crewRef.current=null;setCrewSession(null);engine.current?.connectCrew(null);engine.current?.resetToReady();setShowCrew(false);setReceipt(null);};
  const openCrew = () => {crewReturnPlaying.current=phaseRef.current==='playing';engine.current?.pause();setShowCrew(true);};
  const closeCrew = () => {setShowCrew(false);if(crewReturnPlaying.current)engine.current?.resume();};
  useEffect(()=>{if(!crewSession)return;return crewSession.subscribe(event=>{if(event.type==='ended'){setShowCrew(true);engine.current?.pause();}});},[crewSession]);
  const restartFlight = () => startFlight(activeFlight.current.mission, activeFlight.current.practice);
  const backToDesk = () => { if(crewRef.current?.role==='guest'){setShowCrew(true);return;}engine.current?.resetToReady(); setPausePanel('pause'); setTab('departures'); setReceipt(null); };
  const setLocale = () => { const next = locale === 'en' ? 'zh' : 'en'; commitCareer({ ...careerRef.current, settings: { ...careerRef.current.settings, locale: next } }); engine.current?.setLocale(next); };
  const chooseDifficulty = (value: FlightDifficulty) => commitCareer({ ...careerRef.current, settings: { ...careerRef.current.settings, difficulty: value } });
  const toggleChecklist = () => commitCareer({ ...careerRef.current, settings: { ...careerRef.current.settings, compactChecklist: !careerRef.current.settings.compactChecklist } });
  const toggleMute = () => { const muted = engine.current?.mute() ?? !career.settings.muted; commitCareer({ ...careerRef.current, settings: { ...careerRef.current.settings, muted } }); };
  const toggleQuality = () => { const lowQuality = engine.current?.quality() ?? !career.settings.lowQuality; commitCareer({ ...careerRef.current, settings: { ...careerRef.current.settings, lowQuality } }); };
  const toggleFullscreen = async () => {
    try { if (document.fullscreenElement) await document.exitFullscreen(); else if (root.current?.requestFullscreen) await root.current.requestFullscreen(); else setNotice(tr('This browser already uses all available screen space.', '当前浏览器已使用可用屏幕空间。')); }
    catch { setNotice(tr('Fullscreen is unavailable. You can keep playing in this window.', '无法进入全屏，你仍可在当前窗口继续游戏。')); }
  };
  const buyUpgrade = (key: UpgradeKey) => { const next = upgradeCareer(careerRef.current, key); if (next !== careerRef.current) { commitCareer(next); setNotice(tr('Upgrade installed for your next flight.', '升级已安装，将在下一趟航班生效。')); } };
  const openPause = (panel: 'pause' | 'manual' | 'map' = 'pause') => { setPausePanel(panel); engine.current?.pause(); };
  const resume = () => { setPausePanel('pause'); engine.current?.resume(); };
  const nextContract = FLIGHT_MISSIONS.find(value => value.id > activeFlight.current.mission && value.requiredWins <= career.wins && career.contracts[value.id].completions === 0)
    ?? FLIGHT_MISSIONS.find(value => value.requiredWins <= career.wins && career.contracts[value.id].completions === 0)
    ?? FLIGHT_MISSIONS[(activeFlight.current.mission + 1) % FLIGHT_MISSIONS.length];
  const chooseNext = () => { setSelectedMission(nextContract.id); setMode('campaign'); backToDesk(); };

  const settings = <div className={styles.settingsControls}>
    <button type="button" onClick={setLocale} className={styles.languageButton} title={tr('Switch to Chinese', '切换到英文')}>{zh ? 'EN' : '中文'}</button>
    <button type="button" onClick={toggleMute} disabled={!engineReady} aria-label={tr(career.settings.muted ? 'Unmute audio' : 'Mute audio', career.settings.muted ? '开启声音' : '静音')} title={tr(career.settings.muted ? 'Unmute audio' : 'Mute audio', career.settings.muted ? '开启声音' : '静音')}><Icon name={career.settings.muted ? 'mute' : 'sound'} /></button>
    <button type="button" className={styles.qualityButton} onClick={toggleQuality} disabled={!engineReady} aria-label={tr(`Quality: ${career.settings.lowQuality ? 'Low' : 'High'}`, `画质：${career.settings.lowQuality ? '流畅' : '高'}`)} title={tr('Toggle graphics quality', '切换画质')}>{career.settings.lowQuality ? 'LQ' : 'HQ'}</button>
    <button type="button" onClick={toggleFullscreen} aria-label={tr(fullscreen ? 'Exit fullscreen' : 'Enter fullscreen', fullscreen ? '退出全屏' : '进入全屏')} title={tr('Fullscreen', '全屏')}><Icon name="fullscreen" /></button>
  </div>;

  const needed = snapshot?.requiredServed ?? flyingMission.passengers, beltsNeeded = snapshot?.requiredBelts ?? flyingMission.passengers;
  const airborneElapsed = snapshot?.airborneElapsed ?? 0;
  const objectives: Array<{ id: string; icon: IconName; name: string; detail: string; done: boolean; active: boolean; progress: number }> = snapshot ? [
    { id: 'belts', icon: 'belt', name: tr('Passenger seatbelts', '乘客安全带'), detail: `${snapshot.belts}/${beltsNeeded}`, done: snapshot.belts >= beltsNeeded, active: true, progress: snapshot.belts / Math.max(1, beltsNeeded) },
    { id: 'takeoff', icon: 'plane', name: tr('Start takeoff at cockpit', '前往驾驶舱起飞'), detail: '', done: stage !== 'boarding', active: stage === 'boarding', progress: stage !== 'boarding' ? 1 : 0 },
    { id: 'coffee', icon: 'coffee', name: tr('Coffee service', '咖啡服务'), detail: `${snapshot.served}/${needed}`, done: snapshot.served >= needed, active: true, progress: snapshot.served / Math.max(1, needed) },
    ...((snapshot.requiredFood ?? 0) > 0 ? [{ id: 'food', icon: 'food' as IconName, name: tr('Meal service', '餐食服务'), detail: `${snapshot.foodServed ?? 0}/${snapshot.requiredFood}`, done: (snapshot.foodServed ?? 0) >= (snapshot.requiredFood ?? 0), active: true, progress: (snapshot.foodServed ?? 0) / Math.max(1, snapshot.requiredFood ?? 0) }] : []),
    ...(['cargo', 'fire', 'door', 'repair'] as FlightHazard[]).filter(hazard => flyingMission.hazards[hazard] !== null).map(hazard => {
      const done = hazard === 'repair' ? snapshot.repaired : snapshot[hazard];
      const names = { cargo: tr('Secure cargo', '固定货物'), fire: tr('Extinguish fire', '扑灭火情'), door: tr('Restore cabin pressure', '恢复客舱舱压'), repair: tr('Repair electrical panel', '维修电路面板') };
      return { id: hazard, icon: (hazard === 'repair' ? 'wrench' : hazard) as IconName, name: names[hazard], detail: '', done, active: snapshot.activeHazards ? snapshot.activeHazards.includes(hazard) : airborneElapsed >= (flyingMission.hazards[hazard] ?? Infinity), progress: done ? 1 : 0 };
    }),
    { id: 'landing', icon: 'plane', name: tr('Return for safe landing', '返回驾驶舱着陆'), detail: '', done: snapshot.landed, active: stage === 'approach', progress: snapshot.landed ? 1 : stage === 'approach' ? snapshot.stageProgress ?? 0 : 0 },
  ] : [];
  const completed = objectives.filter(objective => objective.done).length;
  const visibleObjectives = career.settings.compactChecklist ? objectives.filter(objective => objective.active && !objective.done).slice(0, 3) : objectives;
  const radioText = radio[snapshot?.announcement ?? 'welcome'] ?? radio.welcome;
  const actionHint = snapshot?.actionHint === 'takeoff' && !snapshot.piloting ? tr('Autopilot is climbing. Collect coffee at the rear galley and begin cabin service.', '自动驾驶正在爬升。到后舱备餐间取咖啡，开始客舱服务。') : (flightHints[snapshot?.actionHint ?? 'boarding'] ?? flightHints.boarding)[zh ? 1 : 0];
  const item = snapshot?.item as string | null | undefined;
  const currentItem = snapshot?.grabbed ? snapshot.grabbed.startsWith('pax-') ? tr('Passenger · E to release', '乘客 · E 松开') : tr('Loose cabin object', '松散客舱物品') : item === 'coffee' ? tr(`Coffee · ${snapshot?.cups} cups`, `咖啡 · ${snapshot?.cups} 杯`) : item === 'food' ? tr('Passenger meal', '乘客餐食') : item === 'extinguisher' ? tr('Fire extinguisher', '灭火器') : item === 'wrench' ? tr('Repair wrench', '维修扳手') : tr('Hands free', '双手空闲');
  const resultScores = receipt?.scores ?? snapshot?.debrief;
  const debriefLabels: Record<keyof DebriefScores, string> = { service: tr('Passenger service', '乘客服务'), safety: tr('Cabin safety', '客舱安全'), handling: tr('Flight handling', '飞行操控'), time: tr('Time efficiency', '时间效率') };
  const failedReason = snapshot?.failReason;
  const failureText = failedReason === 'fuel' ? tr('Fuel reserves ran out. Keep the flight moving and watch the fuel gauge.', '燃料已耗尽。请注意燃料表，并推进航班进程。') : failedReason === 'pressure' ? tr('Cabin pressure fell too low. Seal the door as soon as the warning appears.', '客舱舱压过低。收到警告后请尽快关闭舱门。') : snapshot && snapshot.health <= 0 ? tr('The aircraft took too much damage. Prioritize the active emergency.', '机体损伤过重，请优先处理已发生的紧急事件。') : tr('The flight could not be completed. Review the checklist and try a gentler difficulty.', '本次航班未能完成。检查任务清单，或尝试训练难度。');

  return <main id="main-content" ref={root} className={`${styles.game} ${styles.operationsGame} ${snapshot?.piloting ? styles.inCockpit : ''}`} data-game-root="passenger-flight" lang={zh ? 'zh-CN' : 'en'}>
    <div ref={host} className={styles.world} data-game-canvas="true" />
    <div className={styles.crewOverlay} hidden={!showCrew}><div className={styles.crewDialog} role="dialog" aria-modal={showCrew} aria-label={tr('Online crew room','在线机组房间')}><button type="button" className={styles.crewClose} onClick={closeCrew} aria-label={tr('Close crew panel','关闭机组面板')}><Icon name="close" /></button><FlightCrewRoom locale={locale} endpoint={process.env.NEXT_PUBLIC_FLIGHT_ROOM_URL || (process.env.NODE_ENV==='development'?'http://127.0.0.1:8789':DEFAULT_FLIGHT_ROOM_URL)} onHostReady={attachCrew} onJoinReady={attachCrew} onLeave={leaveCrew}/></div></div>
    <div className={styles.vignette} aria-hidden="true" /><div className={styles.filmGrain} aria-hidden="true" />

    {phase === 'ready' && <>
      <div className={styles.deskShade} aria-hidden="true" />
      <header className={styles.menuHeader}><a className={styles.airlineBrand} href="/dear-passengers-demo/" aria-label={tr('Back to the Dear Passengers guide', '返回 Dear Passengers 指南')}><span className={styles.brandMark}><Icon name="plane" /></span><span>DP AIRLINES<small>{tr('Flight operations / Crew dispatch', '航班运行 / 乘务派遣')}</small></span></a><div className={styles.menuCrewControls}><button type="button" className={styles.crewButton} onClick={openCrew}>{crewSession ? tr('Crew room','机组房间') : tr('Online co-op','在线合作')}{crewSession && <small>{crewSession.code}</small>}</button>{settings}</div></header>
      <section className={styles.departureDesk} aria-label={tr('Flight departure desk', '航班出发台')}>
        <div className={styles.eyebrow}><span className={styles.liveDot} />{tr('CREW DISPATCH', '乘务派遣台')}<span>OPS / 02</span></div>
        <h1 className={styles.wordmark}><span>DEAR</span><span>PASSENGERS<span className={styles.titlePeriod}>.</span></span></h1>
        <div className={styles.crewProfile}><span className={styles.rankStripes}>{[0, 1, 2, 3, 4].map(i => <i key={i} className={i <= rank.level ? styles.earnedStripe : ''} />)}</span><div><strong>{rank.current.name[locale]}</strong><span>{rank.next ? tr(`${Math.max(0, rank.next.xp - career.xp)} XP to ${rank.next.name.en}`, `距离${rank.next.name.zh}还需 ${Math.max(0, rank.next.xp - career.xp)} XP`) : tr('Highest crew qualification', '已达到最高乘务资历')}</span></div><b>{career.credits.toLocaleString()} <small>CR</small></b><span className={styles.rankProgress}><i style={{ width: `${rank.progress * 100}%` }} /></span></div>
        <div className={styles.deskTabs} role="tablist" aria-label={tr('Flight desk', '航班出发台')}>
          {DESK_TABS.map((value, i) => <button key={value} type="button" role="tab" aria-selected={tab === value} aria-controls={`desk-${value}`} id={`tab-${value}`} tabIndex={tab === value ? 0 : -1} onKeyDown={event => { const index = DESK_TABS.indexOf(tab); const next = event.key === 'ArrowRight' ? (index + 1) % 4 : event.key === 'ArrowLeft' ? (index + 3) % 4 : event.key === 'Home' ? 0 : event.key === 'End' ? 3 : -1; if (next >= 0) { event.preventDefault(); setTab(DESK_TABS[next]); document.getElementById(`tab-${DESK_TABS[next]}`)?.focus(); } }} onClick={() => setTab(value)} className={tab === value ? styles.activeTab : ''}><span>0{i + 1}</span>{value === 'departures' ? tr('Dispatch', '航班') : value === 'hangar' ? tr('Hangar', '机库') : value === 'logbook' ? tr('Logbook', '日志') : tr('Manual', '手册')}</button>)}
        </div>

        {tab === 'departures' && <div className={styles.departurePanel} role="tabpanel" id="desk-departures" aria-labelledby="tab-departures">
          <div className={styles.modeSwitch} aria-label={tr('Flight mode', '飞行模式')}><button type="button" onClick={() => setMode('campaign')} aria-pressed={mode === 'campaign'} className={mode === 'campaign' ? styles.modeActive : ''}><Icon name="log" />{tr('Flight contracts', '飞行合约')}<small>{clearedContracts}/6</small></button><button type="button" onClick={() => setMode('practice')} aria-pressed={mode === 'practice'} className={mode === 'practice' ? styles.modeActive : ''}><Icon name="plane" />{tr('Free practice', '自由练习')}</button></div>
          <div className={styles.contractGrid}>
            {FLIGHT_MISSIONS.map(contract => { const record = career.contracts[contract.id], locked = mode !== 'practice' && career.wins < contract.requiredWins; return <button type="button" key={contract.id} disabled={locked} className={`${styles.contractCard} ${selectedMission === contract.id ? styles.contractSelected : ''} ${record.completions > 0 ? styles.contractCleared : ''}`} onClick={() => setSelectedMission(contract.id)} aria-pressed={selectedMission === contract.id} aria-label={`${contract.name[locale]}${locked ? tr(`, unlock after ${contract.requiredWins} safe landings`, `，安全降落 ${contract.requiredWins} 次后解锁`) : ''}`}>
              <span className={styles.contractTop}><b>{contract.flight}</b><span>{locked ? <Icon name="lock" /> : record.completions > 0 ? record.bestGrade ?? <Icon name="check" /> : `0${contract.id + 1}`}</span></span>
              <strong>{contract.name[locale]}</strong><span className={styles.contractBottom}>{locked ? tr(`${contract.requiredWins} safe landings to unlock`, `安全降落 ${contract.requiredWins} 次后解锁`) : `${contract.from} → ${contract.to} · ${clock(missionDuration(contract, difficulty))}`}<span className={styles.riskDots} aria-hidden="true">{[1, 2, 3, 4, 5].map(i => <i key={i} className={i <= contract.risk ? styles.riskFilled : ''} />)}</span></span>
            </button>; })}
          </div>
          <div className={styles.contractBrief}><div className={styles.briefHeader}><strong>{mission.name[locale]}</strong><span>{tr('RISK', '风险')} {mission.risk}/5</span></div><p>{mission.briefing[locale]}</p><div className={styles.briefTags}><span><Icon name="plane" />{WEATHER_NAMES[mission.weather][locale]}</span><span><Icon name="cargo" />{CARGO_NAMES[mission.cargo][locale]}</span><span><Icon name="coffee" />{mission.passengers} {tr('orders', '份咖啡')}</span>{mission.id >= 2 && <span><Icon name="food" />2 {tr('meals', '份餐食')}</span>}</div></div>
          {mode === 'campaign' ? <><div className={styles.difficultySelector} aria-label={tr('Flight difficulty', '飞行难度')}>{FLIGHT_DIFFICULTIES.map(option => <button type="button" key={option.id} aria-pressed={difficulty === option.id} className={difficulty === option.id ? styles.difficultyActive : ''} onClick={() => chooseDifficulty(option.id)}>{option.name[locale]}<span>{Math.round(option.rewardMultiplier * 100)}% CR</span></button>)}</div><p className={styles.difficultyDescription}>{difficultyInfo.description[locale]}</p></> : <div className={styles.practiceInfo}><Icon name="help" /><span>{tr('All contracts open. Training settings, real flight systems, no career rewards.', '所有合约开放。使用训练设置，保留真实故障；不结算生涯奖励。')}</span></div>}
          <div className={styles.dispatchActions}><button className={styles.boardButton} type="button" onClick={() => startFlight()} disabled={crewSession?.role==='guest' || !engineReady || Boolean(error) || (mode === 'campaign' && career.wins < mission.requiredWins)}><span><Icon name="plane" />{crewSession?.role==='guest' ? tr('Waiting for host','等待房主开始') : !engineReady && !error ? tr('Preparing cabin…', '正在准备客舱…') : mode === 'practice' ? tr('Start practice', '开始练习') : tr('Board flight', '登机出发')}</span><span>{mission.flight}<Icon name="arrow" /></span></button><div className={styles.boardFootnote}><span>{clock(missionDuration(mission, difficulty))} · {WEATHER_NAMES[mission.weather][locale]}</span><span>{mode === 'practice' ? tr('NO CREDITS AT RISK', '不消耗生涯积分') : `${Math.round(mission.reward * difficultyInfo.rewardMultiplier)}+ CR${selectedRecord.completions === 0 ? tr(' · first-clear bonus', ' · 首通加奖') : ''}`}</span></div></div>
        </div>}

        {tab === 'hangar' && <div className={styles.hangarPanel} role="tabpanel" id="desk-hangar" aria-labelledby="tab-hangar"><div className={styles.sectionLabel}><span>{tr('AIRCRAFT & CREW DEVELOPMENT', '机体与乘务能力提升')}</span><span className={styles.creditHighlight}>{career.credits.toLocaleString()} CR</span></div>{UPGRADES.map(upgrade => { const level = career.upgrades[upgrade.key], maxed = level >= 3, cost = upgrade.costs[level]; return <div className={styles.upgradeRow} key={upgrade.key}><span className={styles.upgradeIcon}><Icon name={upgrade.icon} /></span><div className={styles.upgradeCopy}><strong>{upgrade.name[locale]}</strong><p>{upgrade.description[locale]}</p><div className={styles.upgradeLevels}>{[0, 1, 2].map(i => <i key={i} className={level > i ? styles.levelFilled : ''} />)}<span>{level}/3</span></div></div><button type="button" disabled={maxed || career.credits < cost} onClick={() => buyUpgrade(upgrade.key)}>{maxed ? <Icon name="check" /> : `${cost} CR`}<small>{maxed ? tr('MAX LEVEL', '已满级') : career.credits < cost ? tr('MORE CREDITS NEEDED', '余额不足') : tr('INSTALL UPGRADE', '安装升级')}</small></button></div>; })}<div className={styles.hangarNote}><Icon name="shield" /><span>{tr('Upgrades apply when you board. Earn credits from contracts, with extra pay for your first safe arrival on each one.', '升级会在登机时生效。完成合约赚取积分；每份合约首次安全抵达时另有奖励。')}</span></div></div>}

        {tab === 'logbook' && <div className={styles.logbookPanel} role="tabpanel" id="desk-logbook" aria-labelledby="tab-logbook"><div className={styles.logbookTotals}><span><strong>{career.wins}</strong>{tr('SAFE ARRIVALS', '安全抵达')}</span><span><strong>{clearedContracts}<small>/6</small></strong>{tr('CONTRACTS CLEARED', '已完成合约')}</span><span><strong>{career.xp.toLocaleString()}</strong>{tr('CAREER XP', '生涯经验')}</span></div><div className={styles.sectionLabel}><span>{tr('RECENT FLIGHTS', '最近航班')}</span><span>{tr('SAVED ON THIS DEVICE', '保存在当前设备')}</span></div>{career.history.length ? <ol className={styles.flightLog}>{[...career.history].reverse().map(record => <li key={record.id}><span className={`${styles.logGrade} ${record.won ? styles.logWon : ''}`}>{record.practice ? 'P' : record.grade}</span><div><strong>{getFlightMission(record.mission).name[locale]}</strong><small>{record.practice ? tr('Practice', '自由练习') : getFlightDifficulty(record.difficulty).name[locale]} · {record.score.toLocaleString()} {tr('points', '分')}</small></div><b>{record.reward > 0 ? `+${record.reward} CR` : record.won ? tr('LANDED', '已落地') : tr('INCOMPLETE', '未完成')}</b></li>)}</ol> : <div className={styles.emptyLog}><Icon name="log" /><strong>{tr('Your first entry is waiting.', '飞行日志，等你写下第一笔。')}</strong><p>{tr('Complete a flight to build your crew record. Your existing route progress is preserved.', '完成一次航班即可记录乘务履历，原有航线进度已保留。')}</p><button type="button" onClick={() => setTab('departures')}>{tr('Choose a contract', '选择飞行合约')}<Icon name="arrow" /></button></div>}</div>}
        {tab === 'manual' && <div role="tabpanel" id="desk-manual" aria-labelledby="tab-manual"><Manual locale={locale} /></div>}
        <div className={styles.careerStrip}><span>{tr('CONTRACTS', '合约')} <b>{clearedContracts}/6</b></span><span>{tr('LANDINGS', '安全降落')} <b>{career.wins}</b></span><span className={saveError ? styles.saveWarning : styles.savedDot}><i />{saveError ? tr('SESSION ONLY', '仅当前会话') : tr('CAREER SAVED LOCALLY', '生涯已本地保存')}</span></div>
        <footer className={styles.menuFooter}><span>{tr('Unofficial fan game · Solo & 2–4 player co-op', '非官方同人游戏 · 单人及 2–4 人合作')}</span><a href="https://store.steampowered.com/app/4534960/Dear_Passengers/" target="_blank" rel="noopener noreferrer">{tr('Official game on Steam', 'Steam 官方游戏')} ↗</a></footer>
      </section>
      <aside className={styles.cabinPreview} aria-hidden="true"><span><i />{tr('AIRCRAFT STANDING BY', '飞机已就位')}</span><div className={styles.previewCoordinates}>{mission.from} → {mission.to}<br />{WEATHER_NAMES[mission.weather][locale].toUpperCase()}</div><div className={styles.previewTicket}><div><span>{tr('DISPATCH CLEARANCE', '放行许可')}</span><strong>{mission.destination[locale]}</strong><p>{mission.flight} · {clock(missionDuration(mission, difficulty))} · {getFlightDifficulty(difficulty).name[locale]}</p></div><span className={styles.ticketStamp}>DP<br />{mission.flight.slice(3)}</span></div><small>{tr('Cabin, cockpit, and everyone in between. Your responsibility.', '从客舱到驾驶舱，这趟航班由你负责。')}</small></aside>
    </>}

    {snapshot && phase !== 'ready' && <div className={styles.hud}>
      <header className={styles.flightHeader}><div className={styles.flightIdentity}><span className={styles.brandMark}><Icon name="plane" /></span><span><strong>{flyingMission.flight}</strong><small>{activeFlight.current.practice ? tr('PRACTICE FLIGHT', '自由练习') : `${flyingMission.from} → ${flyingMission.to}`}</small></span></div><StageStrip stage={stage} progress={snapshot.stageProgress ?? 0} locale={locale} /><div className={`${styles.flightTimer} ${snapshot.remaining < 45 ? styles.urgent : ''}`}><span>{tr('FLIGHT TIME LEFT', '航班剩余时间')}</span><strong>{clock(snapshot.remaining)}</strong></div><div className={styles.flightTools}>{crewSession && <button type="button" onClick={openCrew} aria-label={tr('Crew room','机组房间')} title={crewSession.code}><Icon name="grip" /></button>}<button type="button" onClick={() => openPause('map')} aria-label={tr('Cabin map', '客舱地图')} title={tr('Cabin map · M', '客舱地图 · M')}><Icon name="map" /></button><button type="button" onClick={() => openPause()} aria-label={tr('Pause flight', '暂停航班')} title={tr('Pause · Esc', '暂停 · Esc')}><Icon name="pause" /></button></div></header>
      <section className={`${styles.objectives} ${career.settings.compactChecklist ? styles.compactObjectives : ''}`} aria-label={tr('Flight checklist', '航班任务清单')}><button type="button" className={styles.objectiveHeading} onClick={toggleChecklist} aria-expanded={!career.settings.compactChecklist} aria-label={tr(career.settings.compactChecklist ? 'Expand flight checklist' : 'Collapse flight checklist', career.settings.compactChecklist ? '展开航班清单' : '收起航班清单')}><span>{tr('CREW CHECKLIST', '乘务任务清单')}</span><b>{completed}/{objectives.length}</b><Icon name="chevronDown" /></button><div className={styles.checklistProgress}><i style={{ width: `${completed / Math.max(1, objectives.length) * 100}%` }} /></div>{visibleObjectives.map(objective => <div className={`${styles.objective} ${objective.done ? styles.objectiveDone : objective.active ? styles.objectiveActive : styles.objectiveWaiting}`} key={objective.id}><span className={styles.objectiveIcon}><Icon name={objective.done ? 'check' : objective.icon} /></span><span>{objective.name}</span><b>{objective.done ? '' : objective.detail || (objective.active ? '!' : '·')}</b>{objective.progress > 0 && !objective.done && <i className={styles.objectiveProgress} style={{ transform: `scaleX(${objective.progress})` }} />}</div>)}{career.settings.compactChecklist && visibleObjectives.length === 0 && <p className={styles.checklistClear}>{tr('Checklist clear. Follow flight guidance.', '清单已完成，请按航班指引继续。')}</p>}</section>
      <aside className={styles.aircraftSystems} aria-label={tr('Aircraft systems', '机体系统')}><div className={styles.systemsHeader}><span>{tr('AIRCRAFT SYSTEMS', '机体系统')}</span><b>{snapshot.score.toLocaleString()} <small>PTS</small></b></div><SystemGauge icon="shield" label={tr('Hull', '机体')} value={snapshot.health} /><SystemGauge icon="pressure" label={tr('Pressure', '舱压')} value={snapshot.pressure ?? 100} warning={50} /><SystemGauge icon="fuel" label={tr('Fuel', '燃料')} value={snapshot.fuel ?? 100} /><SystemGauge icon="smile" label={tr('Satisfaction', '满意度')} value={snapshot.satisfaction ?? 100} warning={40} /></aside>
      {snapshot.turbulence && phase === 'playing' && <div className={styles.turbulenceWarning}><Icon name="plane" />{tr('TURBULENCE · SECURE THE CABIN', '颠簸气流 · 注意客舱安全')}</div>}
      {!snapshot.piloting && phase === 'playing' && <span className={`${styles.crosshair} ${snapshot.target ? styles.crosshairTarget : ''}`} aria-hidden="true" />}
      {phase === 'playing' && <>
        <div className={styles.flightGuidance} role="status" aria-live="polite"><span>{STAGE_NAMES[stage][locale]}<Icon name="arrow" /></span><p>{actionHint}</p></div>
        {!snapshot.piloting && <div className={styles.radio} role="status" aria-live="polite" aria-atomic="true"><span className={styles.radioLabel}><i />{tr('FLIGHT DECK', '驾驶舱广播')}</span><p>{radioText[zh ? 1 : 0]}</p></div>}
        {!snapshot.piloting && <div className={`${styles.interactPrompt} ${snapshot.prompt ? styles.promptVisible : ''}`}><div className={styles.promptContent}><kbd>E</kbd><span>{snapshot.interactionLabel || snapshot.prompt || tr('Look around the cabin', '环顾客舱')}</span>{snapshot.targetDistance != null && <small>{snapshot.targetDistance.toFixed(1)} m</small>}</div>{(snapshot.interactionProgress ?? 0) > 0 && <div className={styles.interactionBar} role="progressbar" aria-label={tr('Task progress', '操作进度')} aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round((snapshot.interactionProgress ?? 0) * 100)}><i style={{ width: `${(snapshot.interactionProgress ?? 0) * 100}%` }} /></div>}</div>}
        {snapshot.piloting && <section className={styles.cockpitHud} aria-label={tr('Flight controls', '飞行操纵')}><div className={styles.cockpitHudTop}><span><Icon name="plane" />{STAGE_NAMES[stage][locale]}</span><button type="button" onClick={() => engine.current?.toggleAutopilot()} aria-pressed={snapshot.autopilot ?? true} className={snapshot.autopilot !== false ? styles.autopilotOn : ''}>{tr('AUTOPILOT', '自动驾驶')} <b>{snapshot.autopilot !== false ? tr('ON', '开启') : tr('OFF', '关闭')}</b><kbd>Space</kbd></button></div><div className={styles.flightInstruments}><div><span>{tr('AIRSPEED', '空速')}</span><strong>{Math.round(snapshot.speed ?? 0)}<small>KT</small></strong></div><div className={styles.attitudeIndicator}><div className={styles.artificialHorizon} style={{ transform: `translateY(${Math.max(-20, Math.min(20, snapshot.pitch ?? 0))}px) rotate(${-snapshot.bank}deg)` }} /><span className={styles.aircraftReference}>┄╋┄</span><b>{Math.round(snapshot.bank)}°</b></div><div><span>{tr('ALTITUDE', '高度')}</span><strong>{Math.round(snapshot.altitude ?? 0).toLocaleString()}<small>M</small></strong></div></div><div className={styles.cockpitReadouts}><span>V/S <b>{(snapshot.verticalSpeed ?? 0) > 0 ? '+' : ''}{Math.round(snapshot.verticalSpeed ?? 0)} m/s</b></span><span>HDG <b>{Math.round(snapshot.heading ?? 0).toString().padStart(3, '0')}°</b></span><span>{tr('RUNWAY', '跑道偏移')} <b>{Math.round(snapshot.runwayOffset ?? 0)} m</b></span></div><div className={styles.cockpitActions}><span>{tr('THROTTLE', '油门')} <b>{Math.round((snapshot.throttle ?? 0) * 100)}%</b></span><button type="button" onClick={() => engine.current?.adjustThrottle(-.1)} aria-label={tr('Decrease throttle', '减小油门')}>−</button><div className={styles.throttleBar}><i style={{ width: `${(snapshot.throttle ?? 0) * 100}%` }} /></div><button type="button" onClick={() => engine.current?.adjustThrottle(.1)} aria-label={tr('Increase throttle', '增大油门')}>+</button><button type="button" className={styles.leaveCockpit} onClick={() => engine.current?.interact()}>{tr('Return to cabin', '返回客舱')}<kbd>E</kbd></button></div></section>}
        {!snapshot.piloting && <div className={styles.inventory}><span className={styles.itemIcon}><Icon name={snapshot.grabbed ? 'grip' : item === 'coffee' ? 'coffee' : item === 'food' ? 'food' : item === 'wrench' ? 'wrench' : item === 'extinguisher' ? 'fire' : 'spark'} /></span><div><small>{tr('IN YOUR HAND', '手中道具')}</small><strong>{currentItem}</strong></div>{(item || snapshot.grabbed) && <kbd>Q</kbd>}</div>}
        <div className={styles.keyboardHints}>{snapshot.piloting ? <><span><kbd>W S</kbd>{tr('PITCH', '俯仰')}</span><span><kbd>A D</kbd>{tr('ROLL', '横滚')}</span><span><kbd>R F</kbd>{tr('THROTTLE', '油门')}</span><span><kbd>Space</kbd>{tr('AUTOPILOT', '自动驾驶')}</span><span><kbd>E</kbd>{tr('CABIN', '客舱')}</span></> : <><span><kbd>W A S D</kbd>{tr('MOVE', '移动')}</span><span><kbd>MOUSE</kbd>{tr('LOOK', '观察')}</span><span><kbd>E</kbd>{tr('INTERACT', '交互')}</span><span><kbd>F / Q</kbd>{tr('GRAB / DROP', '抓取 / 放下')}</span></>}<button type="button" onClick={() => openPause('manual')}><Icon name="help" />{tr('Flight manual', '乘务手册')}</button></div>
        <div className={styles.touchControls}><TouchStick label={tr(snapshot.piloting ? 'Control aircraft roll and pitch' : 'Move through cabin', snapshot.piloting ? '控制飞机横滚与俯仰' : '在客舱中移动')} onMove={(x, y) => engine.current?.move(x, y)} /><div className={styles.touchLookHint}>{snapshot.piloting ? tr('STEER', '飞行操纵') : tr('DRAG TO LOOK', '拖动观察')}</div><div className={styles.touchActions}>{!snapshot.piloting && <><button type="button" className={styles.touchGrab} onClick={() => engine.current?.grab()} aria-label={tr('Grab or release object', '抓取或松开物品')}>F</button><button type="button" className={styles.touchDrop} disabled={!item && !snapshot.grabbed} onClick={() => engine.current?.drop()} aria-label={tr('Drop held item', '放下手中道具')}>Q</button></>}<button type="button" className={styles.touchInteract} onClick={() => engine.current?.interact()} aria-label={tr(snapshot.piloting ? 'Leave cockpit' : 'Interact', snapshot.piloting ? '离开驾驶舱' : '交互')}>E<span>{snapshot.piloting ? tr('CABIN', '客舱') : tr('ACT', '交互')}</span></button></div></div>
      </>}
    </div>}

    {snapshot && phase === 'paused' && <div className={styles.modalBackdrop}><div ref={dialog} className={`${styles.flightDialog} ${pausePanel !== 'pause' ? styles.wideDialog : ''}`} role="dialog" aria-modal="true" aria-labelledby="pause-title"><div className={styles.dialogTopline}><span>{flyingMission.flight} / {STAGE_NAMES[stage][locale]}</span><button type="button" onClick={resume} aria-label={tr('Close pause menu', '关闭暂停菜单')}><Icon name="close" /></button></div><h2 id="pause-title">{pausePanel === 'map' ? tr('Know your cabin.', '熟悉你的客舱。') : pausePanel === 'manual' ? tr('Crew operating manual.', '乘务操作手册。') : tr('Flight on hold.', '航班已暂停。')}</h2><p className={styles.dialogLead}>{pausePanel === 'pause' ? tr('All flight systems and the clock are paused.', '所有飞行系统和计时均已暂停。') : tr('Take your time. Your flight is paused while you read.', '慢慢看。阅读期间航班保持暂停。')}</p>
      {pausePanel === 'map' ? <CabinMap locale={locale} /> : pausePanel === 'manual' ? <Manual locale={locale} /> : <><div className={styles.pauseSummary}><span>{tr('Remaining', '剩余时间')}<b>{clock(snapshot.remaining)}</b></span><span>{tr('Aircraft', '机体状态')}<b>{Math.ceil(snapshot.health)}%</b></span><span>{tr('Checklist', '任务清单')}<b>{completed}/{objectives.length}</b></span></div><p className={styles.pauseGuidance}>{actionHint}</p><div className={styles.pauseShortcuts}><button type="button" onClick={() => setPausePanel('map')}><Icon name="map" />{tr('Cabin map', '客舱地图')}<Icon name="chevron" /></button><button type="button" onClick={() => setPausePanel('manual')}><Icon name="help" />{tr('Flight manual', '乘务手册')}<Icon name="chevron" /></button></div><div className={styles.pauseSettings}><span>{tr('FLIGHT SETTINGS', '航班设置')}</span>{settings}</div></>}
      <button type="button" className={styles.dialogPrimary} onClick={resume}><Icon name="play" />{tr('Resume flight', '继续航班')}<span aria-hidden="true">↗</span></button><div className={styles.dialogSecondary}>{crewSession && <button type="button" onClick={openCrew}>{tr('Crew room','机组房间')}</button>}<button type="button" onClick={restartFlight} disabled={crewSession?.role==='guest'}>{tr('Restart flight', '重新开始航班')}</button><button type="button" onClick={backToDesk}>{tr('Back to departures', '返回出发台')}</button></div></div></div>}

    {snapshot && phase === 'result' && <div className={styles.modalBackdrop}><div ref={dialog} className={`${styles.flightDialog} ${styles.resultDialog} ${styles.debriefDialog}`} role="dialog" aria-modal="true" aria-labelledby="result-title"><div className={styles.resultEyebrow}>{flyingMission.flight} · {activeFlight.current.practice ? tr('PRACTICE DEBRIEF', '练习复盘') : tr('FLIGHT DEBRIEF', '航班复盘')}</div><h2 id="result-title">{snapshot.won ? tr('Everyone home safely.', '全员安全抵达。') : tr('Let us review that flight.', '复盘一下这趟航班。')}</h2><p className={styles.dialogLead}>{snapshot.won ? `${flyingMission.name[locale]} · ${getFlightDifficulty(activeFlight.current.difficulty).name[locale]}` : failureText}</p><div className={styles.resultGrade}><span>{tr('FLIGHT RATING', '航班评级')}</span><strong>{receipt?.grade ?? (snapshot.won ? 'A' : 'F')}</strong><div><b>{snapshot.score.toLocaleString()}</b><small>{tr('TOTAL SCORE', '总得分')}</small></div></div><div className={styles.debriefBreakdown}>{(['service', 'safety', 'handling', 'time'] as const).map(key => <div key={key}><span>{debriefLabels[key]}</span><div><i style={{ width: `${resultScores?.[key] ?? 0}%` }} /></div><b>{Math.round(resultScores?.[key] ?? 0)}<small>/100</small></b></div>)}</div><div className={styles.resultStats}><span>{tr('Coffee / meals', '咖啡 / 餐食')}<b>{snapshot.served}/{needed} · {snapshot.foodServed ?? 0}/{snapshot.requiredFood ?? 0}</b></span><span>{tr('Cabin condition', '机体状态')}<b>{Math.ceil(snapshot.health)}%</b></span><span>{tr('Time remaining', '剩余时间')}<b>{clock(snapshot.remaining)}</b></span></div>
      {!activeFlight.current.practice ? <><div className={styles.payBreakdown}><span>{tr('Contract pay', '合约报酬')}<b>{receipt?.basePay ?? 0} CR</b></span><span>{tr('Performance bonus', '表现奖金')}<b>{receipt?.performancePay ?? 0} CR</b></span>{receipt?.firstClear && <span>{tr('First safe arrival', '首次安全抵达')}<b>+{receipt.firstClearPay} CR</b></span>}</div><div className={styles.rewardLine}><span>{tr('TOTAL EARNINGS', '总收入')}<small>+{receipt?.xp ?? 0} XP</small></span><strong>+{receipt?.reward.toLocaleString() ?? '0'} <small>CR</small></strong></div></> : <div className={styles.practiceResult}><Icon name="plane" />{tr('Practice complete. Career credits and contract progress are unchanged.', '练习已完成。生涯积分与合约进度保持不变。')}</div>}
      {Boolean(receipt?.newlyUnlocked.length) && <div className={styles.unlockNotice}><Icon name="spark" /><span>{tr('NEW CONTRACT AVAILABLE', '新合约已解锁')}<strong>{receipt?.newlyUnlocked.map(id => getFlightMission(id).name[locale]).join(' · ')}</strong></span></div>}{receipt?.newRank && <div className={styles.rankUpNotice}>{tr('PROMOTED', '晋升')} · {rank.current.name[locale]}</div>}
      {snapshot.won && !activeFlight.current.practice && crewSession?.role!=='guest' && <button type="button" className={styles.dialogPrimary} onClick={chooseNext}><span>{tr('Choose next contract', '选择下一份合约')}<small>{nextContract.name[locale]}</small></span><Icon name="arrow" /></button>}<div className={styles.debriefButtons}><button type="button" className={snapshot.won && !activeFlight.current.practice ? styles.replayButton : styles.dialogPrimary} onClick={restartFlight} disabled={crewSession?.role==='guest'}>{tr('Fly again', '再次飞行')}</button><button type="button" className={styles.replayButton} onClick={backToDesk}>{tr('Back to departures', '返回出发台')}</button></div><p className={styles.resultSaveNote}>{saveError ? tr('Storage is unavailable. Progress stays in this session only.', '本地存储不可用，进度仅在当前会话保留。') : tr('Debrief saved to your logbook on this device.', '航班复盘已保存在此设备的飞行日志中。')}</p></div></div>}
    {error && <div className={styles.errorPanel} role="alert"><Icon name="settings" /><strong>{tr('The cabin needs a moment.', '客舱暂时无法启动。')}</strong><p>{zh ? '无法加载 3D 客舱。请检查网络、启用浏览器硬件加速，或使用更新的浏览器重试。' : error}</p><button type="button" onClick={() => window.location.reload()}>{tr('Reload cabin', '重新加载客舱')}</button><a href="/dear-passengers-demo/">{tr('Return to guide', '返回游戏指南')}</a></div>}
    {notice && <div className={styles.toast} role="status">{notice}</div>}{!engineReady && !error && <div className={styles.loadingBadge} role="status"><span />{tr('Opening the cabin doors…', '正在打开客舱门…')}</div>}
  </main>;
}
