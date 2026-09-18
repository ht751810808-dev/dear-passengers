'use client';

import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import styles from './CabinCrisisMiniGame.module.css';

export type CabinCrisisLocale =
  | 'en'
  | 'zh-CN'
  | 'de'
  | 'ar'
  | 'tr'
  | 'pt-BR'
  | 'es'
  | 'my'
  | 'my-MM'
  | 'ru'
  | 'cs';

type InternalLocale = Exclude<CabinCrisisLocale, 'my-MM'>;
type GamePhase = 'briefing' | 'playing' | 'result';
type ActionId = 'scan' | 'assist' | 'secure';
type Resolution = 'best' | 'mixed' | 'risky' | 'timeout';

type ScenarioCopy = {
  title: string;
  brief: string;
};

type GameCopy = {
  language: string;
  eyebrow: string;
  title: string;
  subtitle: string;
  unofficial: string;
  originalRules: string;
  briefingTitle: string;
  instructions: [string, string, string];
  start: string;
  startsImmediately: string;
  round: string;
  seconds: string;
  live: string;
  stability: string;
  passengerCare: string;
  cargoSecurity: string;
  cabinSafety: string;
  keepLevel: string;
  keyboardHint: string;
  left: string;
  right: string;
  dispatch: string;
  choosePriority: string;
  actions: Record<ActionId, { label: string; detail: string }>;
  outcomes: Record<Resolution, string>;
  turbulence: string;
  continue: string;
  finish: string;
  resultEyebrow: string;
  resultTitle: string;
  totalScore: string;
  stabilityAverage: string;
  ratings: { calm: string; capable: string; scrambled: string };
  ratingCopy: { calm: string; capable: string; scrambled: string };
  replay: string;
  steam: string;
  resultDisclaimer: string;
  roundPattern: string;
  choicePattern: string;
  timeoutAnnouncement: string;
  completePattern: string;
  scenarios: [ScenarioCopy, ScenarioCopy, ScenarioCopy, ScenarioCopy, ScenarioCopy];
};

type Scenario = {
  code: string;
  drift: number;
  startJolt: number;
  pulses: Array<{ at: number; force: number }>;
  best: ActionId;
  second: ActionId;
};

type Meters = {
  service: number;
  cargo: number;
  safety: number;
  stabilityTotal: number;
  roundsResolved: number;
  score: number;
};

type AnalyticsWindow = Window & {
  gtag?: (
    command: 'event',
    eventName: string,
    parameters?: Record<string, string | number | boolean>,
  ) => void;
};

const OFFICIAL_STEAM_URL = 'https://store.steampowered.com/app/4534960/Dear_Passengers/';
const ROUND_SECONDS = 13;

const LOCALE_OPTIONS: Array<{ value: InternalLocale; short: string; label: string }> = [
  { value: 'en', short: 'EN', label: 'English' },
  { value: 'zh-CN', short: '中文', label: '简体中文' },
  { value: 'de', short: 'DE', label: 'Deutsch' },
  { value: 'ar', short: 'AR', label: 'العربية' },
  { value: 'tr', short: 'TR', label: 'Türkçe' },
  { value: 'pt-BR', short: 'PT', label: 'Português (Brasil)' },
  { value: 'es', short: 'ES', label: 'Español' },
  { value: 'my', short: 'MY', label: 'မြန်မာ' },
  { value: 'ru', short: 'RU', label: 'Русский' },
  { value: 'cs', short: 'CS', label: 'Čeština' },
];

const SCENARIOS: [Scenario, Scenario, Scenario, Scenario, Scenario] = [
  {
    code: 'CRG-11',
    drift: -1.05,
    startJolt: -7,
    pulses: [{ at: 7, force: -9 }],
    best: 'secure',
    second: 'scan',
  },
  {
    code: 'PAX-24',
    drift: 0.85,
    startJolt: 5,
    pulses: [],
    best: 'assist',
    second: 'scan',
  },
  {
    code: 'WX-38',
    drift: 1.3,
    startJolt: 9,
    pulses: [
      { at: 9, force: 10 },
      { at: 5, force: -15 },
    ],
    best: 'scan',
    second: 'secure',
  },
  {
    code: 'CAB-42',
    drift: -0.95,
    startJolt: -6,
    pulses: [{ at: 6, force: 8 }],
    best: 'secure',
    second: 'assist',
  },
  {
    code: 'PAX-57',
    drift: 1.1,
    startJolt: 7,
    pulses: [{ at: 8, force: -10 }],
    best: 'assist',
    second: 'scan',
  },
];

const COPY: Record<InternalLocale, GameCopy> = {
  en: {
    language: 'Game language',
    eyebrow: 'ORIGINAL FIVE-ROUND FAN DRILL',
    title: 'Cabin Crisis Drill',
    subtitle: 'Hold the aircraft level, read each dispatch card, and choose what the cabin crew should handle first.',
    unofficial: 'Unofficial fan-made browser challenge. This is not the official Dear Passengers demo and is not developed, endorsed, or distributed by FLEXUS.',
    originalRules: 'ORIGINAL RULESET · FICTIONAL EVENTS · NO DOWNLOAD',
    briefingTitle: 'Your 70-second cabin briefing',
    instructions: [
      'Tap the roll controls—or use ← → / A D—to keep the orange marker inside the blue level band.',
      'Read the dispatch card. Every situation is an original scenario created for this website.',
      'Choose one priority before the timer reaches zero. Five resolved rounds complete the drill.',
    ],
    start: 'Start fan drill',
    startsImmediately: 'The first 13-second round starts immediately.',
    round: 'Round',
    seconds: 'seconds',
    live: 'LIVE CABIN DESK',
    stability: 'Aircraft stability',
    passengerCare: 'Passenger care',
    cargoSecurity: 'Cargo secured',
    cabinSafety: 'Cabin safety',
    keepLevel: 'KEEP THE MARKER IN THE LEVEL BAND',
    keyboardHint: 'Keyboard: ← / → or A / D',
    left: 'Correct left',
    right: 'Correct right',
    dispatch: 'Dispatch card',
    choosePriority: 'Choose the crew priority',
    actions: {
      scan: { label: 'Scan & brace cabin', detail: 'Check the aisle, seats, and balance first.' },
      assist: { label: 'Assist passengers', detail: 'Respond to the most urgent passenger need.' },
      secure: { label: 'Secure cargo', detail: 'Lock carts, cases, and loose cabin items.' },
    },
    outcomes: {
      best: 'Good call. You addressed the immediate risk and kept the chain reaction small.',
      mixed: 'Useful, but not the highest-priority response. The cabin absorbed some disruption.',
      risky: 'That left the main hazard open. The next crew will inherit a messier cabin.',
      timeout: 'No priority was selected. The unresolved problem spread through the cabin.',
    },
    turbulence: 'Turbulence pulse—correct the roll!',
    continue: 'Next dispatch',
    finish: 'Finish drill',
    resultEyebrow: 'DRILL COMPLETE · LOCAL SESSION ONLY',
    resultTitle: 'Cabin report',
    totalScore: 'Total score',
    stabilityAverage: 'Average stability',
    ratings: { calm: 'Cabin coordinator', capable: 'Quick responder', scrambled: 'Rough first flight' },
    ratingCopy: {
      calm: 'You balanced flying, people, and loose equipment without letting one problem dominate the cabin.',
      capable: 'You kept the operation moving. A few priority calls left room for a calmer second run.',
      scrambled: 'The cabin won this round. Replay and watch the dispatch clues before choosing a priority.',
    },
    replay: 'Replay drill',
    steam: 'Visit the official game on Steam',
    resultDisclaimer: 'Cabin Crisis Drill is an original, unofficial fan activity by DearPassengers.net—not an official demo, build, or simulation of the unreleased game.',
    roundPattern: 'Round {current} of {total}: {title}. {seconds} seconds remaining.',
    choicePattern: '{action}. {outcome}',
    timeoutAnnouncement: 'Time expired. No crew priority was selected.',
    completePattern: 'Drill complete. Score {score}. Rating: {rating}.',
    scenarios: [
      { title: 'Latch light in row six', brief: 'A case strap has slipped loose while the cabin tilts left. A call bell is also ringing two rows away.' },
      { title: 'Water request in a calm pocket', brief: 'A worried passenger needs water. The cart is parked and the aisle is currently clear, but the aircraft is beginning to roll right.' },
      { title: 'Double air-pocket warning', brief: 'Two jolts are forecast seconds apart. A cup is loose, one bag is unsecured, and several passengers are still upright.' },
      { title: 'Runaway service cart', brief: 'A cart has begun rolling toward a wet patch. A passenger is calling for help from the opposite side of the cabin.' },
      { title: 'Nervous row on approach', brief: 'The cabin is mostly secured, but one row is panicking as the aircraft rocks through the final descent.' },
    ],
  },
  'zh-CN': {
    language: '游戏语言', eyebrow: '原创五轮粉丝演练', title: 'Cabin Crisis Drill',
    subtitle: '保持飞机平稳，阅读每张调度卡，并判断客舱乘务首先处理什么。',
    unofficial: '非官方粉丝自制网页挑战。本游戏不是 Dear Passengers 官方 Demo，也并非由 FLEXUS 开发、认可或发行。',
    originalRules: '原创规则 · 虚构事件 · 无需下载', briefingTitle: '约 70 秒客舱简报',
    instructions: ['点击横滚控制，或使用 ← → / A D，让橙色标记保持在蓝色平衡区。', '阅读调度卡。所有情境均为本站原创虚构事件。', '倒计时结束前选择一个优先行动；完成五轮即结束演练。'],
    start: '开始粉丝演练', startsImmediately: '第一轮 13 秒倒计时会立即开始。', round: '轮次', seconds: '秒', live: '客舱调度中',
    stability: '飞机稳定度', passengerCare: '乘客照顾', cargoSecurity: '货物固定', cabinSafety: '客舱安全',
    keepLevel: '让标记保持在蓝色平衡区', keyboardHint: '键盘：← / → 或 A / D', left: '向左修正', right: '向右修正',
    dispatch: '调度卡', choosePriority: '选择乘务优先行动',
    actions: { scan: { label: '检查并稳住客舱', detail: '优先检查过道、座椅与平衡。' }, assist: { label: '协助乘客', detail: '回应最紧急的乘客需求。' }, secure: { label: '固定货物', detail: '锁定推车、箱包与松动物品。' } },
    outcomes: { best: '判断正确。主要风险已及时处理，连锁混乱受到控制。', mixed: '有帮助，但并非最高优先级；客舱仍受到了一些影响。', risky: '主要风险没有关闭，下一轮将面对更混乱的客舱。', timeout: '没有选择优先行动，未解决的问题扩散到了客舱。' },
    turbulence: '颠簸冲击——立即修正横滚！', continue: '下一张调度卡', finish: '完成演练', resultEyebrow: '演练完成 · 仅限本次会话', resultTitle: '客舱报告',
    totalScore: '总分', stabilityAverage: '平均稳定度', ratings: { calm: '客舱协调员', capable: '快速响应员', scrambled: '首次飞行有些颠簸' },
    ratingCopy: { calm: '你兼顾了飞行、乘客与松动物品，没有让任何一个问题控制客舱。', capable: '你维持了运行，但部分优先级判断还可以在下一次更从容。', scrambled: '这一轮客舱占了上风。重玩时先阅读调度线索，再选择行动。' },
    replay: '重新演练', steam: '前往 Steam 查看官方游戏', resultDisclaimer: 'Cabin Crisis Drill 是 DearPassengers.net 原创的非官方粉丝活动，不是未发售游戏的官方 Demo、内部版本或玩法模拟。',
    roundPattern: '第 {current}/{total} 轮：{title}。剩余 {seconds} 秒。', choicePattern: '{action}。{outcome}', timeoutAnnouncement: '时间结束，未选择乘务优先行动。', completePattern: '演练完成。得分 {score}，评级：{rating}。',
    scenarios: [
      { title: '第六排锁扣警报', brief: '客舱向左倾斜时，一条箱包绑带松开了；两排之外还有乘客按铃。' },
      { title: '平稳空档中的饮水请求', brief: '一位紧张的乘客需要水。推车已停好，过道暂时畅通，但飞机正开始向右滚转。' },
      { title: '连续两次气穴预警', brief: '几秒内将连续颠簸。杯子松动、一个行李未固定，还有几位乘客站着。' },
      { title: '失控的服务推车', brief: '一辆推车正滚向湿滑区域，客舱另一侧同时有乘客呼救。' },
      { title: '进近时紧张的一排乘客', brief: '客舱大致固定完毕，但飞机在最后下降中摇晃，一整排乘客开始恐慌。' },
    ],
  },
  de: {
    language: 'Spielsprache', eyebrow: 'ORIGINELLE FAN-ÜBUNG IN FÜNF RUNDEN', title: 'Cabin Crisis Drill',
    subtitle: 'Halte das Flugzeug waagerecht, lies die Einsatzkarte und entscheide, was die Crew zuerst erledigt.',
    unofficial: 'Inoffizielle, von Fans erstellte Browser-Challenge. Dies ist nicht die offizielle Dear-Passengers-Demo und wurde nicht von FLEXUS entwickelt, empfohlen oder vertrieben.',
    originalRules: 'EIGENE REGELN · FIKTIVE EREIGNISSE · KEIN DOWNLOAD', briefingTitle: 'Deine 70-Sekunden-Kabinenbesprechung',
    instructions: ['Tippe auf die Rollsteuerung oder nutze ← → / A D, um die orange Markierung im blauen Bereich zu halten.', 'Lies die Einsatzkarte. Jede Situation wurde eigens für diese Website erfunden.', 'Wähle vor Ablauf der Zeit eine Priorität. Nach fünf gelösten Runden ist die Übung beendet.'],
    start: 'Fan-Übung starten', startsImmediately: 'Die erste 13-Sekunden-Runde beginnt sofort.', round: 'Runde', seconds: 'Sekunden', live: 'KABINENDESK LIVE',
    stability: 'Flugzeugstabilität', passengerCare: 'Passagierbetreuung', cargoSecurity: 'Fracht gesichert', cabinSafety: 'Kabinen­sicherheit', keepLevel: 'MARKIERUNG IM BLAUEN BEREICH HALTEN', keyboardHint: 'Tastatur: ← / → oder A / D', left: 'Nach links korrigieren', right: 'Nach rechts korrigieren',
    dispatch: 'Einsatzkarte', choosePriority: 'Priorität der Crew wählen', actions: { scan: { label: 'Kabine prüfen & sichern', detail: 'Gang, Sitze und Balance zuerst prüfen.' }, assist: { label: 'Passagiere unterstützen', detail: 'Auf den dringendsten Bedarf reagieren.' }, secure: { label: 'Fracht sichern', detail: 'Wagen, Koffer und lose Dinge verriegeln.' } },
    outcomes: { best: 'Gute Entscheidung. Das unmittelbare Risiko ist begrenzt und die Kettenreaktion klein.', mixed: 'Hilfreich, aber nicht die höchste Priorität. Die Kabine wurde etwas gestört.', risky: 'Die Hauptgefahr blieb offen. Die nächste Crew übernimmt mehr Chaos.', timeout: 'Keine Priorität gewählt. Das ungelöste Problem hat sich in der Kabine ausgebreitet.' }, turbulence: 'Turbulenzstoß – Rollbewegung ausgleichen!',
    continue: 'Nächster Einsatz', finish: 'Übung beenden', resultEyebrow: 'ÜBUNG BEENDET · NUR DIESE SITZUNG', resultTitle: 'Kabinenbericht', totalScore: 'Gesamtpunktzahl', stabilityAverage: 'Durchschnittliche Stabilität', ratings: { calm: 'Kabinenkoordinator', capable: 'Schnelle Einsatzkraft', scrambled: 'Holpriger Erstflug' },
    ratingCopy: { calm: 'Du hast Fluglage, Menschen und lose Ausrüstung in Balance gehalten.', capable: 'Der Betrieb lief weiter. Einige Prioritäten können beim nächsten Durchlauf ruhiger sitzen.', scrambled: 'Diesmal gewann die Kabine. Lies beim Neustart erst die Hinweise der Einsatzkarte.' }, replay: 'Übung wiederholen', steam: 'Offizielles Spiel auf Steam besuchen', resultDisclaimer: 'Cabin Crisis Drill ist eine originelle, inoffizielle Fan-Aktivität von DearPassengers.net – keine offizielle Demo, kein Build und keine Simulation des unveröffentlichten Spiels.',
    roundPattern: 'Runde {current} von {total}: {title}. Noch {seconds} Sekunden.', choicePattern: '{action}. {outcome}', timeoutAnnouncement: 'Zeit abgelaufen. Keine Crew-Priorität gewählt.', completePattern: 'Übung beendet. {score} Punkte. Bewertung: {rating}.',
    scenarios: [
      { title: 'Verriegelungslicht in Reihe sechs', brief: 'Beim Rollen nach links hat sich ein Koffergurt gelöst. Zwei Reihen weiter klingelt ein Passagier.' },
      { title: 'Wasserwunsch in ruhiger Luft', brief: 'Ein nervöser Passagier braucht Wasser. Der Wagen steht, der Gang ist frei, doch das Flugzeug rollt nach rechts.' },
      { title: 'Doppelte Luftloch-Warnung', brief: 'Zwei Stöße folgen kurz nacheinander. Ein Becher und eine Tasche sind lose, mehrere Passagiere stehen.' },
      { title: 'Rollender Servicewagen', brief: 'Ein Wagen rollt auf eine nasse Stelle zu. Auf der anderen Kabinenseite ruft ein Passagier.' },
      { title: 'Nervöse Reihe im Anflug', brief: 'Fast alles ist gesichert, doch beim schwankenden Endanflug gerät eine ganze Reihe in Panik.' },
    ],
  },
  ar: {
    language: 'لغة اللعبة', eyebrow: 'تدريب أصلي من خمس جولات للمعجبين', title: 'Cabin Crisis Drill',
    subtitle: 'حافظ على توازن الطائرة، واقرأ بطاقة البلاغ، وحدد ما يجب على الطاقم معالجته أولاً.',
    unofficial: 'تحدٍّ غير رسمي صنعه المعجبون للمتصفح. هذه ليست نسخة Dear Passengers التجريبية الرسمية، ولم تطورها FLEXUS أو تعتمدها أو توزعها.',
    originalRules: 'قواعد أصلية · أحداث خيالية · بلا تنزيل', briefingTitle: 'إحاطة المقصورة في نحو 70 ثانية',
    instructions: ['اضغط أزرار الميل أو استخدم ← → / A D لإبقاء العلامة البرتقالية داخل النطاق الأزرق.', 'اقرأ بطاقة البلاغ. كل موقف هنا خيالي ومن ابتكار هذا الموقع.', 'اختر أولوية قبل انتهاء الوقت. إكمال خمس جولات ينهي التدريب.'],
    start: 'ابدأ تدريب المعجبين', startsImmediately: 'تبدأ الجولة الأولى ومدتها 13 ثانية فوراً.', round: 'الجولة', seconds: 'ثانية', live: 'مكتب المقصورة مباشر',
    stability: 'استقرار الطائرة', passengerCare: 'رعاية الركاب', cargoSecurity: 'تثبيت الحمولة', cabinSafety: 'سلامة المقصورة', keepLevel: 'أبقِ العلامة داخل نطاق التوازن', keyboardHint: 'لوحة المفاتيح: ← / → أو A / D', left: 'تصحيح إلى اليسار', right: 'تصحيح إلى اليمين', dispatch: 'بطاقة البلاغ', choosePriority: 'اختر أولوية الطاقم',
    actions: { scan: { label: 'افحص وثبّت المقصورة', detail: 'افحص الممر والمقاعد والتوازن أولاً.' }, assist: { label: 'ساعد الركاب', detail: 'استجب للحاجة الأكثر إلحاحاً.' }, secure: { label: 'ثبّت الحمولة', detail: 'أغلق العربات والحقائب والأغراض السائبة.' } },
    outcomes: { best: 'قرار جيد. عالجت الخطر المباشر وحددت أثره المتسلسل.', mixed: 'مفيد، لكنه ليس الأولوية القصوى. تعرضت المقصورة لبعض الاضطراب.', risky: 'بقي الخطر الرئيسي مفتوحاً، وستبدأ الجولة التالية بفوضى أكبر.', timeout: 'لم تُحدد أولوية، فامتدت المشكلة غير المعالجة عبر المقصورة.' }, turbulence: 'دفعة مطبات هوائية — صحح الميل!', continue: 'البلاغ التالي', finish: 'إنهاء التدريب', resultEyebrow: 'اكتمل التدريب · هذه الجلسة فقط', resultTitle: 'تقرير المقصورة', totalScore: 'المجموع', stabilityAverage: 'متوسط الاستقرار', ratings: { calm: 'منسق المقصورة', capable: 'مستجيب سريع', scrambled: 'رحلة أولى مضطربة' },
    ratingCopy: { calm: 'وازنت بين الطيران والركاب والمعدات السائبة من دون أن تسيطر مشكلة واحدة.', capable: 'أبقيت العملية مستمرة، ويمكن تحسين بعض قرارات الأولوية في المحاولة التالية.', scrambled: 'تفوقت المقصورة هذه المرة. أعد اللعب واقرأ دلائل البلاغ قبل الاختيار.' }, replay: 'أعد التدريب', steam: 'زر اللعبة الرسمية على Steam', resultDisclaimer: 'Cabin Crisis Drill نشاط أصلي غير رسمي للمعجبين من DearPassengers.net، وليست نسخة تجريبية رسمية أو إصداراً أو محاكاة للعبة غير المنشورة.',
    roundPattern: 'الجولة {current} من {total}: {title}. بقي {seconds} ثانية.', choicePattern: '{action}. {outcome}', timeoutAnnouncement: 'انتهى الوقت ولم تُحدد أولوية للطاقم.', completePattern: 'اكتمل التدريب. النتيجة {score}. التقييم: {rating}.',
    scenarios: [
      { title: 'ضوء القفل في الصف السادس', brief: 'انفك حزام حقيبة مع ميل المقصورة يساراً، ويضغط راكب زر النداء على بعد صفين.' },
      { title: 'طلب ماء أثناء هدوء قصير', brief: 'يحتاج راكب قلق إلى الماء. العربة متوقفة والممر خالٍ، لكن الطائرة بدأت تميل يميناً.' },
      { title: 'تحذير من جيبين هوائيين', brief: 'ستأتي هزتان متتاليتان. كوب وحقيبة غير مثبتين وعدة ركاب ما زالوا واقفين.' },
      { title: 'عربة خدمة منفلتة', brief: 'تتدحرج العربة نحو بقعة مبللة، بينما يطلب راكب المساعدة في الجهة الأخرى.' },
      { title: 'صف متوتر عند الاقتراب', brief: 'المقصورة شبه مؤمنة، لكن صفاً كاملاً يشعر بالذعر مع اهتزاز الهبوط الأخير.' },
    ],
  },
  tr: {
    language: 'Oyun dili', eyebrow: 'BEŞ TURLUK ÖZGÜN HAYRAN TATBİKATI', title: 'Cabin Crisis Drill', subtitle: 'Uçağı dengede tut, görev kartını oku ve kabin ekibinin önce ne yapacağına karar ver.', unofficial: 'Resmî olmayan, hayran yapımı tarayıcı mücadelesi. Bu, resmî Dear Passengers demosu değildir; FLEXUS tarafından geliştirilmemiş, onaylanmamış veya dağıtılmamıştır.', originalRules: 'ÖZGÜN KURALLAR · KURGUSAL OLAYLAR · İNDİRME YOK', briefingTitle: 'Yaklaşık 70 saniyelik kabin brifingi',
    instructions: ['Turuncu işareti mavi denge alanında tutmak için düğmelere dokun ya da ← → / A D kullan.', 'Görev kartını oku. Her durum bu site için oluşturulmuş özgün bir kurgudur.', 'Süre dolmadan bir öncelik seç. Beş tur tatbikatı tamamlar.'], start: 'Hayran tatbikatını başlat', startsImmediately: 'İlk 13 saniyelik tur hemen başlar.', round: 'Tur', seconds: 'saniye', live: 'CANLI KABİN MASASI', stability: 'Uçak dengesi', passengerCare: 'Yolcu desteği', cargoSecurity: 'Sabitlenen yük', cabinSafety: 'Kabin güvenliği', keepLevel: 'İŞARETİ DENGE ALANINDA TUT', keyboardHint: 'Klavye: ← / → veya A / D', left: 'Sola düzelt', right: 'Sağa düzelt', dispatch: 'Görev kartı', choosePriority: 'Ekip önceliğini seç',
    actions: { scan: { label: 'Kabini tara ve hazırla', detail: 'Önce koridoru, koltukları ve dengeyi kontrol et.' }, assist: { label: 'Yolculara yardım et', detail: 'En acil yolcu ihtiyacına cevap ver.' }, secure: { label: 'Yükü sabitle', detail: 'Arabaları, çantaları ve gevşek eşyaları kilitle.' } }, outcomes: { best: 'İyi karar. Acil riski çözüp zincirleme etkiyi sınırladın.', mixed: 'Yararlıydı, ancak en yüksek öncelik değildi. Kabin biraz etkilendi.', risky: 'Ana tehlike açık kaldı; sonraki ekip daha dağınık bir kabin devralacak.', timeout: 'Öncelik seçilmedi ve çözülmeyen sorun kabine yayıldı.' }, turbulence: 'Türbülans darbesi — yatışı düzelt!', continue: 'Sonraki görev', finish: 'Tatbikatı bitir', resultEyebrow: 'TATBİKAT TAMAMLANDI · YALNIZCA BU OTURUM', resultTitle: 'Kabin raporu', totalScore: 'Toplam puan', stabilityAverage: 'Ortalama denge', ratings: { calm: 'Kabin koordinatörü', capable: 'Hızlı müdahaleci', scrambled: 'Sarsıntılı ilk uçuş' }, ratingCopy: { calm: 'Uçuşu, insanları ve gevşek ekipmanı bir sorun baskın çıkmadan dengeledin.', capable: 'Operasyonu sürdürdün; bazı öncelikler ikinci denemede iyileştirilebilir.', scrambled: 'Bu turu kabin kazandı. Yeniden oynarken önce görev ipuçlarını oku.' }, replay: 'Tatbikatı tekrar oyna', steam: 'Resmî oyunu Steam’de ziyaret et', resultDisclaimer: 'Cabin Crisis Drill, DearPassengers.net tarafından hazırlanan özgün ve resmî olmayan bir hayran etkinliğidir; yayınlanmamış oyunun resmî demosu, yapısı veya simülasyonu değildir.', roundPattern: '{current}/{total}. tur: {title}. {seconds} saniye kaldı.', choicePattern: '{action}. {outcome}', timeoutAnnouncement: 'Süre doldu. Ekip önceliği seçilmedi.', completePattern: 'Tatbikat tamamlandı. Puan {score}. Derece: {rating}.',
    scenarios: [{ title: 'Altıncı sırada kilit ışığı', brief: 'Kabin sola yatarken bir çanta kayışı gevşedi; iki sıra ötede çağrı ışığı yanıyor.' }, { title: 'Sakin aralıkta su isteği', brief: 'Endişeli bir yolcu su istiyor. Araba parkta ve koridor açık, ancak uçak sağa yatmaya başlıyor.' }, { title: 'Çift hava boşluğu uyarısı', brief: 'İki sarsıntı arka arkaya gelecek. Bir bardak ve çanta gevşek, birkaç yolcu ayakta.' }, { title: 'Kaçan servis arabası', brief: 'Bir araba ıslak zemine doğru kayıyor; kabinin diğer yanında bir yolcu yardım istiyor.' }, { title: 'Yaklaşmada gergin sıra', brief: 'Kabin büyük ölçüde güvenli, ancak son alçalmadaki sallantı bir sırayı paniğe sürüklüyor.' }],
  },
  'pt-BR': {
    language: 'Idioma do jogo', eyebrow: 'TREINO ORIGINAL DE FÃS EM CINCO RODADAS', title: 'Cabin Crisis Drill', subtitle: 'Mantenha o avião nivelado, leia cada cartão e escolha o que a tripulação deve resolver primeiro.', unofficial: 'Desafio de navegador não oficial feito por fãs. Isto não é a demo oficial de Dear Passengers e não foi desenvolvido, aprovado nem distribuído pela FLEXUS.', originalRules: 'REGRAS ORIGINAIS · EVENTOS FICTÍCIOS · SEM DOWNLOAD', briefingTitle: 'Seu briefing de cabine de cerca de 70 segundos', instructions: ['Toque nos controles ou use ← → / A D para manter o marcador laranja na faixa azul.', 'Leia o cartão de despacho. Todas as situações são ficções originais deste site.', 'Escolha uma prioridade antes de o tempo acabar. Cinco rodadas concluem o treino.'], start: 'Iniciar treino de fãs', startsImmediately: 'A primeira rodada de 13 segundos começa na hora.', round: 'Rodada', seconds: 'segundos', live: 'CENTRAL DE CABINE AO VIVO', stability: 'Estabilidade do avião', passengerCare: 'Cuidado dos passageiros', cargoSecurity: 'Carga segura', cabinSafety: 'Segurança da cabine', keepLevel: 'MANTENHA O MARCADOR NA FAIXA AZUL', keyboardHint: 'Teclado: ← / → ou A / D', left: 'Corrigir à esquerda', right: 'Corrigir à direita', dispatch: 'Cartão de despacho', choosePriority: 'Escolha a prioridade da equipe', actions: { scan: { label: 'Verificar e preparar cabine', detail: 'Confira corredor, assentos e equilíbrio primeiro.' }, assist: { label: 'Ajudar passageiros', detail: 'Atenda a necessidade mais urgente.' }, secure: { label: 'Prender a carga', detail: 'Trave carrinhos, malas e objetos soltos.' } }, outcomes: { best: 'Boa decisão. Você conteve o risco imediato e a reação em cadeia.', mixed: 'Foi útil, mas não era a maior prioridade. A cabine sofreu algum impacto.', risky: 'O perigo principal ficou aberto; a próxima equipe herdará mais confusão.', timeout: 'Nenhuma prioridade foi escolhida e o problema se espalhou pela cabine.' }, turbulence: 'Pulso de turbulência — corrija a inclinação!', continue: 'Próximo despacho', finish: 'Encerrar treino', resultEyebrow: 'TREINO CONCLUÍDO · APENAS NESTA SESSÃO', resultTitle: 'Relatório de cabine', totalScore: 'Pontuação total', stabilityAverage: 'Estabilidade média', ratings: { calm: 'Coordenador de cabine', capable: 'Resposta rápida', scrambled: 'Primeiro voo turbulento' }, ratingCopy: { calm: 'Você equilibrou voo, pessoas e equipamentos sem deixar um problema dominar.', capable: 'A operação continuou. Algumas prioridades podem ficar mais calmas na próxima tentativa.', scrambled: 'A cabine venceu esta rodada. Jogue de novo e leia as pistas antes de escolher.' }, replay: 'Repetir treino', steam: 'Visitar o jogo oficial na Steam', resultDisclaimer: 'Cabin Crisis Drill é uma atividade de fãs original e não oficial do DearPassengers.net — não é demo, build nem simulação oficial do jogo ainda não lançado.', roundPattern: 'Rodada {current} de {total}: {title}. Restam {seconds} segundos.', choicePattern: '{action}. {outcome}', timeoutAnnouncement: 'O tempo acabou. Nenhuma prioridade foi escolhida.', completePattern: 'Treino concluído. Pontuação {score}. Avaliação: {rating}.',
    scenarios: [{ title: 'Luz de trava na fileira seis', brief: 'Uma cinta se soltou enquanto a cabine inclina à esquerda. Um passageiro chama duas fileiras adiante.' }, { title: 'Pedido de água no trecho calmo', brief: 'Um passageiro nervoso pede água. O carrinho está parado e o corredor livre, mas o avião inclina à direita.' }, { title: 'Alerta de dois bolsões de ar', brief: 'Dois solavancos vêm em sequência. Um copo e uma mala estão soltos e há passageiros em pé.' }, { title: 'Carrinho de serviço desgovernado', brief: 'Um carrinho rola para uma área molhada; do outro lado, um passageiro pede ajuda.' }, { title: 'Fileira nervosa na aproximação', brief: 'A cabine está quase segura, mas uma fileira entra em pânico durante a descida final.' }],
  },
  es: {
    language: 'Idioma del juego', eyebrow: 'SIMULACRO ORIGINAL DE FANS EN CINCO RONDAS', title: 'Cabin Crisis Drill', subtitle: 'Mantén el avión nivelado, lee cada tarjeta y decide qué debe resolver primero la tripulación.', unofficial: 'Desafío de navegador no oficial hecho por fans. No es la demo oficial de Dear Passengers ni ha sido desarrollado, aprobado o distribuido por FLEXUS.', originalRules: 'REGLAS ORIGINALES · SUCESOS FICTICIOS · SIN DESCARGAS', briefingTitle: 'Tu briefing de cabina de unos 70 segundos', instructions: ['Pulsa los controles o usa ← → / A D para mantener el marcador naranja en la franja azul.', 'Lee la tarjeta de despacho. Cada situación es una ficción original creada para esta web.', 'Elige una prioridad antes de que termine el tiempo. Cinco rondas completan el simulacro.'], start: 'Iniciar simulacro fan', startsImmediately: 'La primera ronda de 13 segundos comienza de inmediato.', round: 'Ronda', seconds: 'segundos', live: 'MESA DE CABINA EN DIRECTO', stability: 'Estabilidad del avión', passengerCare: 'Atención al pasajero', cargoSecurity: 'Carga asegurada', cabinSafety: 'Seguridad de cabina', keepLevel: 'MANTÉN EL MARCADOR EN LA FRANJA AZUL', keyboardHint: 'Teclado: ← / → o A / D', left: 'Corregir a la izquierda', right: 'Corregir a la derecha', dispatch: 'Tarjeta de despacho', choosePriority: 'Elige la prioridad del equipo', actions: { scan: { label: 'Revisar y preparar cabina', detail: 'Comprueba pasillo, asientos y equilibrio primero.' }, assist: { label: 'Ayudar a pasajeros', detail: 'Atiende la necesidad más urgente.' }, secure: { label: 'Asegurar la carga', detail: 'Bloquea carros, maletas y objetos sueltos.' } }, outcomes: { best: 'Buena decisión. Atajaste el riesgo inmediato y limitaste la reacción en cadena.', mixed: 'Fue útil, pero no era la máxima prioridad. La cabina sufrió cierta alteración.', risky: 'El peligro principal quedó abierto; el siguiente equipo heredará más caos.', timeout: 'No se eligió prioridad y el problema se extendió por la cabina.' }, turbulence: 'Golpe de turbulencia: ¡corrige el alabeo!', continue: 'Siguiente despacho', finish: 'Terminar simulacro', resultEyebrow: 'SIMULACRO COMPLETO · SOLO ESTA SESIÓN', resultTitle: 'Informe de cabina', totalScore: 'Puntuación total', stabilityAverage: 'Estabilidad media', ratings: { calm: 'Coordinador de cabina', capable: 'Respuesta rápida', scrambled: 'Primer vuelo movido' }, ratingCopy: { calm: 'Equilibraste vuelo, personas y equipo sin dejar que un problema dominara la cabina.', capable: 'Mantuviste la operación. Algunas prioridades pueden mejorar en el siguiente intento.', scrambled: 'La cabina ganó esta vez. Repite y lee las pistas antes de elegir.' }, replay: 'Repetir simulacro', steam: 'Visitar el juego oficial en Steam', resultDisclaimer: 'Cabin Crisis Drill es una actividad fan original y no oficial de DearPassengers.net; no es una demo, versión ni simulación oficial del juego aún no publicado.', roundPattern: 'Ronda {current} de {total}: {title}. Quedan {seconds} segundos.', choicePattern: '{action}. {outcome}', timeoutAnnouncement: 'Se acabó el tiempo. No se eligió prioridad.', completePattern: 'Simulacro completo. Puntuación {score}. Nivel: {rating}.',
    scenarios: [{ title: 'Luz de cierre en la fila seis', brief: 'Una correa se soltó mientras la cabina gira a la izquierda. Un pasajero llama dos filas más allá.' }, { title: 'Agua en un tramo tranquilo', brief: 'Un pasajero nervioso pide agua. El carro está parado y el pasillo libre, pero el avión gira a la derecha.' }, { title: 'Doble aviso de bolsa de aire', brief: 'Llegarán dos sacudidas seguidas. Un vaso y una bolsa están sueltos y varios pasajeros siguen de pie.' }, { title: 'Carro de servicio descontrolado', brief: 'Un carro rueda hacia una zona mojada mientras un pasajero pide ayuda al otro lado.' }, { title: 'Fila nerviosa en aproximación', brief: 'La cabina está casi asegurada, pero una fila entra en pánico durante el descenso final.' }],
  },
  my: {
    language: 'ဂိမ်းဘာသာစကား', eyebrow: 'ပရိသတ်ဖန်တီး မူရင်းငါးဆင့် လေ့ကျင့်ခန်း', title: 'Cabin Crisis Drill', subtitle: 'လေယာဉ်ကိုညီအောင်ထိန်းပါ၊ အခြေအနေကတ်ကိုဖတ်ပါ၊ အမှုထမ်းတွေ ဘာကိုအရင်လုပ်ရမလဲ ရွေးပါ။', unofficial: 'တရားဝင်မဟုတ်သော ပရိသတ်ဖန်တီး browser challenge ဖြစ်သည်။ ၎င်းသည် Dear Passengers ၏ တရားဝင် Demo မဟုတ်သလို FLEXUS မှ ဖန်တီး၊ ထောက်ခံ သို့မဟုတ် ဖြန့်ချိထားခြင်းမရှိပါ။', originalRules: 'မူရင်းစည်းမျဉ်း · စိတ်ကူးယဉ်ဖြစ်ရပ် · ဒေါင်းလုဒ်မလို', briefingTitle: 'စက္ကန့် ၇၀ ခန့် ကြာမည့် လေ့ကျင့်ခန်း', instructions: ['လိမ္မော်ရောင်အမှတ်ကို အပြာရောင်ဇုန်အတွင်းထားရန် ခလုတ်များ သို့မဟုတ် ← → / A D ကိုသုံးပါ။', 'အခြေအနေကတ်ကိုဖတ်ပါ။ ဖြစ်ရပ်အားလုံးသည် ဤဆိုက်အတွက် ဖန်တီးထားသော စိတ်ကူးယဉ်များဖြစ်သည်။', 'အချိန်မကုန်မီ ဦးစားပေးတစ်ခုရွေးပါ။ ငါးဆင့်ပြီးလျှင် လေ့ကျင့်ခန်းပြီးသည်။'], start: 'လေ့ကျင့်ခန်းစတင်ရန်', startsImmediately: 'ပထမ ၁၃ စက္ကန့်အဆင့် ချက်ချင်းစတင်မည်။', round: 'အဆင့်', seconds: 'စက္ကန့်', live: 'လေယာဉ်ခန်း ထိန်းချုပ်ခန်း', stability: 'လေယာဉ်တည်ငြိမ်မှု', passengerCare: 'ခရီးသည်စောင့်ရှောက်မှု', cargoSecurity: 'ကုန်ပစ္စည်းလုံခြုံမှု', cabinSafety: 'လေယာဉ်ခန်းဘေးကင်းမှု', keepLevel: 'အမှတ်ကို အပြာဇုန်အတွင်းထားပါ', keyboardHint: 'ကီးဘုတ်: ← / → သို့ A / D', left: 'ဘယ်သို့ပြင်', right: 'ညာသို့ပြင်', dispatch: 'အခြေအနေကတ်', choosePriority: 'အမှုထမ်းဦးစားပေးကိုရွေးပါ', actions: { scan: { label: 'လေယာဉ်ခန်း စစ်ဆေးပါ', detail: 'လမ်းကြောင်း၊ ထိုင်ခုံနှင့် ညီမျှမှုကိုအရင်စစ်ပါ။' }, assist: { label: 'ခရီးသည်ကိုကူညီပါ', detail: 'အရေးအကြီးဆုံးလိုအပ်ချက်ကိုဖြေရှင်းပါ။' }, secure: { label: 'ကုန်ပစ္စည်းကိုချည်ပါ', detail: 'တွန်းလှည်း၊ အိတ်နှင့် လွတ်နေသောပစ္စည်းကိုပိတ်ပါ။' } }, outcomes: { best: 'ရွေးချယ်မှုကောင်းပါသည်။ ချက်ချင်းအန္တရာယ်ကိုဖြေရှင်းပြီး ဆက်တိုက်ပြဿနာကိုလျှော့ချနိုင်ခဲ့သည်။', mixed: 'အသုံးဝင်သော်လည်း အမြင့်ဆုံးဦးစားပေးမဟုတ်ပါ။ လေယာဉ်ခန်း အနည်းငယ်ထိခိုက်ခဲ့သည်။', risky: 'အဓိကအန္တရာယ်ကျန်ခဲ့ပြီး နောက်အဆင့် ပိုရှုပ်ထွေးလာမည်။', timeout: 'ဦးစားပေးမရွေးခဲ့သောကြောင့် ပြဿနာသည် လေယာဉ်ခန်းထဲပြန့်သွားသည်။' }, turbulence: 'လေထန်မှု ရိုက်ခတ်မှု — အလှည့်ကိုပြင်ပါ!', continue: 'နောက်အခြေအနေ', finish: 'လေ့ကျင့်ခန်းပြီးရန်', resultEyebrow: 'လေ့ကျင့်ခန်းပြီးပါပြီ · ယခု session သာ', resultTitle: 'လေယာဉ်ခန်းအစီရင်ခံစာ', totalScore: 'စုစုပေါင်းရမှတ်', stabilityAverage: 'ပျမ်းမျှတည်ငြိမ်မှု', ratings: { calm: 'လေယာဉ်ခန်းညှိနှိုင်းသူ', capable: 'မြန်ဆန်တုံ့ပြန်သူ', scrambled: 'ပထမခရီး ကြမ်းတမ်းခဲ့သည်' }, ratingCopy: { calm: 'ပျံသန်းမှု၊ လူများနှင့် ပစ္စည်းများကို ပြဿနာတစ်ခုမကြီးထွားအောင် ထိန်းနိုင်ခဲ့သည်။', capable: 'လုပ်ငန်းကိုဆက်လက်ထိန်းထားနိုင်ခဲ့သည်။ နောက်တစ်ကြိမ် ဦးစားပေးကိုပိုကောင်းစေနိုင်သည်။', scrambled: 'ဤအကြိမ် လေယာဉ်ခန်းကနိုင်ခဲ့သည်။ ပြန်ကစားပြီး ကတ်ရှိသဲလွန်စကိုအရင်ဖတ်ပါ။' }, replay: 'ပြန်လည်လေ့ကျင့်ရန်', steam: 'Steam ရှိ တရားဝင်ဂိမ်းသို့', resultDisclaimer: 'Cabin Crisis Drill သည် DearPassengers.net ၏ မူရင်း၊ တရားဝင်မဟုတ်သော ပရိသတ်လုပ်ဆောင်ချက်ဖြစ်ပြီး မထွက်သေးသောဂိမ်း၏ တရားဝင် Demo၊ build သို့မဟုတ် simulation မဟုတ်ပါ။', roundPattern: 'အဆင့် {current}/{total}: {title}။ {seconds} စက္ကန့်ကျန်သည်။', choicePattern: '{action}။ {outcome}', timeoutAnnouncement: 'အချိန်ကုန်သွားပြီး ဦးစားပေးမရွေးခဲ့ပါ။', completePattern: 'လေ့ကျင့်ခန်းပြီးပါပြီ။ ရမှတ် {score}။ အဆင့် {rating}။',
    scenarios: [{ title: 'ဆဋ္ဌမတန်း လော့ခ်မီး', brief: 'လေယာဉ်ခန်း ဘယ်သို့စောင်းချိန် အိတ်ကြိုးလွတ်သွားပြီး ရှေ့နှစ်တန်းမှ ခရီးသည်ခေါ်နေသည်။' }, { title: 'ငြိမ်ချိန် ရေတောင်းဆိုမှု', brief: 'စိတ်ပူနေသောခရီးသည် ရေလိုသည်။ တွန်းလှည်းရပ်ထားပြီး လမ်းကြောင်းရှင်းသော်လည်း လေယာဉ်ညာသို့စောင်းနေသည်။' }, { title: 'လေဟာနယ်နှစ်ခါ သတိပေးချက်', brief: 'ဆက်တိုက်လှုပ်ခါမှုနှစ်ခါလာမည်။ ခွက်နှင့်အိတ် လွတ်နေပြီး ခရီးသည်အချို့ မတ်တပ်ရပ်နေသည်။' }, { title: 'လွတ်သွားသော ဝန်ဆောင်မှုတွန်းလှည်း', brief: 'တွန်းလှည်းသည် စိုနေသောနေရာသို့ရွေ့နေပြီး တစ်ဖက်တွင် ခရီးသည်အကူအညီတောင်းနေသည်။' }, { title: 'ဆင်းသက်ချိန် စိတ်ပူသောတန်း', brief: 'လေယာဉ်ခန်းအများစု လုံခြုံသော်လည်း နောက်ဆုံးဆင်းသက်ရာတွင် တန်းတစ်တန်းလုံး စိတ်လှုပ်ရှားနေသည်။' }],
  },
  ru: {
    language: 'Язык игры', eyebrow: 'ОРИГИНАЛЬНАЯ ФАНАТСКАЯ ТРЕНИРОВКА · ПЯТЬ РАУНДОВ', title: 'Cabin Crisis Drill', subtitle: 'Удерживайте самолёт ровно, читайте карточки и решайте, чем экипаж займётся первым.', unofficial: 'Неофициальное браузерное испытание от фанатов. Это не официальная демоверсия Dear Passengers; FLEXUS не разрабатывает, не одобряет и не распространяет её.', originalRules: 'ОРИГИНАЛЬНЫЕ ПРАВИЛА · ВЫМЫШЛЕННЫЕ СОБЫТИЯ · БЕЗ СКАЧИВАНИЯ', briefingTitle: 'Инструктаж примерно на 70 секунд', instructions: ['Нажимайте кнопки или используйте ← → / A D, чтобы оранжевая метка оставалась в синей зоне.', 'Читайте карточку. Каждая ситуация — оригинальная выдумка этого сайта.', 'Выберите приоритет до конца таймера. Пять раундов завершают тренировку.'], start: 'Начать фан-тренировку', startsImmediately: 'Первый 13-секундный раунд начнётся сразу.', round: 'Раунд', seconds: 'секунд', live: 'ПУЛЬТ САЛОНА · ЭФИР', stability: 'Стабильность самолёта', passengerCare: 'Помощь пассажирам', cargoSecurity: 'Крепление груза', cabinSafety: 'Безопасность салона', keepLevel: 'ДЕРЖИТЕ МЕТКУ В СИНЕЙ ЗОНЕ', keyboardHint: 'Клавиши: ← / → или A / D', left: 'Коррекция влево', right: 'Коррекция вправо', dispatch: 'Карточка ситуации', choosePriority: 'Выберите приоритет экипажа', actions: { scan: { label: 'Проверить и подготовить салон', detail: 'Сначала проверить проход, кресла и равновесие.' }, assist: { label: 'Помочь пассажирам', detail: 'Ответить на самую срочную просьбу.' }, secure: { label: 'Закрепить груз', detail: 'Зафиксировать тележки, сумки и предметы.' } }, outcomes: { best: 'Верно. Срочная угроза устранена, цепная реакция ограничена.', mixed: 'Полезно, но это не главный приоритет. Салон немного пострадал.', risky: 'Основная опасность осталась. Следующий экипаж получит больше хаоса.', timeout: 'Приоритет не выбран, и нерешённая проблема распространилась по салону.' }, turbulence: 'Толчок турбулентности — выровняйте крен!', continue: 'Следующая карточка', finish: 'Завершить тренировку', resultEyebrow: 'ТРЕНИРОВКА ЗАВЕРШЕНА · ТОЛЬКО ЭТА СЕССИЯ', resultTitle: 'Отчёт по салону', totalScore: 'Общий счёт', stabilityAverage: 'Средняя стабильность', ratings: { calm: 'Координатор салона', capable: 'Быстрая реакция', scrambled: 'Неровный первый рейс' }, ratingCopy: { calm: 'Вы удержали баланс между полётом, людьми и оборудованием.', capable: 'Работа продолжилась. Несколько приоритетов можно улучшить в следующей попытке.', scrambled: 'В этот раз салон победил. Сыграйте снова и сначала читайте подсказки.' }, replay: 'Повторить тренировку', steam: 'Официальная игра в Steam', resultDisclaimer: 'Cabin Crisis Drill — оригинальная неофициальная фан-активность DearPassengers.net, а не официальная демоверсия, сборка или симуляция ещё не выпущенной игры.', roundPattern: 'Раунд {current} из {total}: {title}. Осталось {seconds} секунд.', choicePattern: '{action}. {outcome}', timeoutAnnouncement: 'Время вышло. Приоритет экипажа не выбран.', completePattern: 'Тренировка завершена. Счёт {score}. Оценка: {rating}.',
    scenarios: [{ title: 'Индикатор замка в шестом ряду', brief: 'При левом крене ослаб ремень чемодана. Через два ряда пассажир нажал кнопку вызова.' }, { title: 'Просьба о воде в спокойном участке', brief: 'Пассажиру нужна вода. Тележка стоит, проход свободен, но самолёт начинает крениться вправо.' }, { title: 'Два предупреждения о воздушной яме', brief: 'Впереди два толчка подряд. Стакан и сумка не закреплены, несколько пассажиров стоят.' }, { title: 'Сорвавшаяся сервисная тележка', brief: 'Тележка катится к мокрому месту, а на другой стороне пассажир зовёт на помощь.' }, { title: 'Тревожный ряд при заходе', brief: 'Салон почти закреплён, но во время снижения целый ряд начинает паниковать.' }],
  },
  cs: {
    language: 'Jazyk hry', eyebrow: 'ORIGINÁLNÍ FANOUŠKOVSKÝ NÁCVIK · PĚT KOL', title: 'Cabin Crisis Drill', subtitle: 'Udržte letadlo v rovině, čtěte dispečerské karty a určete, co má posádka řešit nejdřív.', unofficial: 'Neoficiální prohlížečová výzva vytvořená fanoušky. Nejde o oficiální demo Dear Passengers a FLEXUS ji nevyvinul, neschválil ani nedistribuuje.', originalRules: 'ORIGINÁLNÍ PRAVIDLA · FIKTIVNÍ UDÁLOSTI · BEZ STAHOVÁNÍ', briefingTitle: 'Přibližně 70sekundová instruktáž', instructions: ['Klepáním nebo pomocí ← → / A D držte oranžovou značku v modré zóně.', 'Přečtěte kartu. Každá situace je původní fikce vytvořená pro tento web.', 'Vyberte prioritu před vypršením času. Pět kol dokončí nácvik.'], start: 'Spustit fanouškovský nácvik', startsImmediately: 'První 13sekundové kolo začne okamžitě.', round: 'Kolo', seconds: 'sekund', live: 'PALUBNÍ DISPEČINK ŽIVĚ', stability: 'Stabilita letadla', passengerCare: 'Péče o cestující', cargoSecurity: 'Zajištění nákladu', cabinSafety: 'Bezpečnost kabiny', keepLevel: 'UDRŽTE ZNAČKU V MODRÉ ZÓNĚ', keyboardHint: 'Klávesy: ← / → nebo A / D', left: 'Opravit doleva', right: 'Opravit doprava', dispatch: 'Dispečerská karta', choosePriority: 'Vyberte prioritu posádky', actions: { scan: { label: 'Zkontrolovat a připravit kabinu', detail: 'Nejdřív zkontrolovat uličku, sedadla a rovnováhu.' }, assist: { label: 'Pomoci cestujícím', detail: 'Vyřešit nejnaléhavější potřebu cestujícího.' }, secure: { label: 'Zajistit náklad', detail: 'Uzamknout vozíky, zavazadla a volné předměty.' } }, outcomes: { best: 'Dobrá volba. Okamžité riziko je vyřešeno a řetězová reakce omezena.', mixed: 'Užitečné, ale nešlo o nejvyšší prioritu. Kabina pocítila část problému.', risky: 'Hlavní hrozba zůstala otevřená. Další posádka převezme větší zmatek.', timeout: 'Priorita nebyla zvolena a nevyřešený problém se rozšířil kabinou.' }, turbulence: 'Náraz turbulence — srovnejte náklon!', continue: 'Další karta', finish: 'Dokončit nácvik', resultEyebrow: 'NÁCVIK DOKONČEN · POUZE TATO RELACE', resultTitle: 'Zpráva z kabiny', totalScore: 'Celkové skóre', stabilityAverage: 'Průměrná stabilita', ratings: { calm: 'Koordinátor kabiny', capable: 'Rychlá reakce', scrambled: 'Drsný první let' }, ratingCopy: { calm: 'Vyvážili jste let, lidi i vybavení, aniž by kabinu ovládl jediný problém.', capable: 'Provoz pokračoval. Některé priority lze při dalším pokusu zlepšit.', scrambled: 'Tentokrát vyhrála kabina. Zkuste to znovu a nejdřív čtěte nápovědy.' }, replay: 'Zopakovat nácvik', steam: 'Navštívit oficiální hru na Steamu', resultDisclaimer: 'Cabin Crisis Drill je originální neoficiální fanouškovská aktivita DearPassengers.net — není to oficiální demo, sestavení ani simulace dosud nevydané hry.', roundPattern: 'Kolo {current} z {total}: {title}. Zbývá {seconds} sekund.', choicePattern: '{action}. {outcome}', timeoutAnnouncement: 'Čas vypršel. Priorita posádky nebyla zvolena.', completePattern: 'Nácvik dokončen. Skóre {score}. Hodnocení: {rating}.',
    scenarios: [{ title: 'Kontrolka západky v šesté řadě', brief: 'Při náklonu doleva se uvolnil popruh kufru. O dvě řady dál zvoní cestující.' }, { title: 'Žádost o vodu v klidném úseku', brief: 'Nervózní cestující potřebuje vodu. Vozík stojí a ulička je volná, letadlo se ale kloní doprava.' }, { title: 'Dvojité varování před propadem', brief: 'Přijdou dva otřesy za sebou. Kelímek a taška jsou volné a několik cestujících stojí.' }, { title: 'Rozjetý servisní vozík', brief: 'Vozík míří k mokrému místu, zatímco na opačné straně cestující volá o pomoc.' }, { title: 'Nervózní řada při přiblížení', brief: 'Kabina je téměř zajištěná, ale během závěrečného sestupu propadá celá řada panice.' }],
  },
};

const ACTION_EFFECTS: Record<ActionId, { service: number; cargo: number; safety: number }> = {
  scan: { service: 2, cargo: 3, safety: 17 },
  assist: { service: 19, cargo: 0, safety: 4 },
  secure: { service: 0, cargo: 20, safety: 6 },
};

function clamp(value: number, min = 0, max = 100) {
  return Math.min(max, Math.max(min, value));
}

function normalizeLocale(locale: CabinCrisisLocale): InternalLocale {
  return locale === 'my-MM' ? 'my' : locale;
}

function interpolate(template: string, values: Record<string, string | number>) {
  return Object.entries(values).reduce(
    (result, [key, value]) => result.replaceAll(`{${key}}`, String(value)),
    template,
  );
}

function track(eventName: string, parameters: Record<string, string | number | boolean> = {}) {
  if (typeof window === 'undefined') return;
  (window as AnalyticsWindow).gtag?.('event', eventName, parameters);
}

function getStabilityQuality(balance: number) {
  return Math.round(clamp(100 - Math.abs(balance - 50) * 3.2));
}

function getRating(overall: number): 'calm' | 'capable' | 'scrambled' {
  if (overall >= 80) return 'calm';
  if (overall >= 60) return 'capable';
  return 'scrambled';
}

function Meter({ label, value, emphasis = false }: { label: string; value: number; emphasis?: boolean }) {
  const rounded = Math.round(clamp(value));
  return (
    <div className={`${styles.meter} ${emphasis ? styles.meterEmphasis : ''}`}>
      <div className={styles.meterLabel}>
        <span>{label}</span>
        <b>{rounded}</b>
      </div>
      <div
        className={styles.meterTrack}
        role="meter"
        aria-label={label}
        aria-valuemin={0}
        aria-valuemax={100}
        aria-valuenow={rounded}
      >
        <span style={{ width: `${rounded}%` }} />
      </div>
    </div>
  );
}

function CabinDiagram({ balance, active }: { balance: number; active: boolean }) {
  const roll = clamp((balance - 50) * 0.18, -9, 9);
  return (
    <svg className={styles.cabinDiagram} viewBox="0 0 760 190" role="img" aria-label="Abstract original aircraft cabin diagram">
      <defs>
        <pattern id="cabin-grid" width="16" height="16" patternUnits="userSpaceOnUse">
          <path d="M16 0H0V16" fill="none" stroke="currentColor" strokeOpacity=".12" strokeWidth="1" />
        </pattern>
      </defs>
      <rect className={styles.diagramGrid} x="1" y="1" width="758" height="188" rx="16" />
      <g className={styles.aircraft} style={{ transform: `rotate(${roll}deg)` }}>
        <path className={styles.fuselage} d="M104 51h483c42 0 67 18 79 44-12 26-37 44-79 44H104C70 139 43 120 31 95c12-25 39-44 73-44Z" />
        <path className={styles.cockpit} d="M584 61c37 0 58 13 70 34-12 21-33 34-70 34Z" />
        <path className={styles.aisle} d="M126 89h446v12H126z" />
        {[150, 216, 282, 348, 414, 480].map((x) => (
          <g key={x}>
            <rect className={styles.seat} x={x} y="66" width="25" height="16" rx="4" />
            <rect className={styles.seat} x={x + 31} y="66" width="25" height="16" rx="4" />
            <rect className={styles.seat} x={x} y="108" width="25" height="16" rx="4" />
            <rect className={styles.seat} x={x + 31} y="108" width="25" height="16" rx="4" />
          </g>
        ))}
        <rect className={styles.cart} x="111" y="84" width="26" height="23" rx="3" />
        <path className={styles.tail} d="M106 54 67 22h-26l24 52m41 62-39 32H41l24-52" />
        <circle className={styles.beacon} cx="524" cy="95" r="8" />
      </g>
      <g className={styles.diagramLegend}>
        <path d="M674 161h45" />
        <path d="m711 154 8 7-8 7" />
      </g>
      {active ? <circle className={styles.radarPing} cx="524" cy="95" r="17" /> : null}
    </svg>
  );
}

export default function CabinCrisisMiniGame({
  locale = 'en',
  steamUrl = OFFICIAL_STEAM_URL,
}: {
  locale?: CabinCrisisLocale;
  steamUrl?: string;
}) {
  const [activeLocale, setActiveLocale] = useState<InternalLocale>(() => normalizeLocale(locale));
  const [phase, setPhase] = useState<GamePhase>('briefing');
  const [roundIndex, setRoundIndex] = useState(0);
  const [timeLeft, setTimeLeft] = useState(ROUND_SECONDS);
  const [balance, setBalance] = useState(50);
  const [selectedChoice, setSelectedChoice] = useState<ActionId | 'timeout' | null>(null);
  const [resolution, setResolution] = useState<Resolution | null>(null);
  const [announcement, setAnnouncement] = useState('');
  const [meters, setMeters] = useState<Meters>({
    service: 30,
    cargo: 30,
    safety: 34,
    stabilityTotal: 0,
    roundsResolved: 0,
    score: 0,
  });
  const pulseHistory = useRef(new Set<string>());

  const copy = COPY[activeLocale];
  const scenario = SCENARIOS[roundIndex];
  const scenarioCopy = copy.scenarios[roundIndex];
  const stabilityQuality = getStabilityQuality(balance);
  const isRtl = activeLocale === 'ar';

  useEffect(() => {
    setActiveLocale(normalizeLocale(locale));
  }, [locale]);

  useEffect(() => {
    if (phase !== 'playing') return;
    const nextScenario = SCENARIOS[roundIndex];
    setTimeLeft(ROUND_SECONDS);
    setSelectedChoice(null);
    setResolution(null);
    pulseHistory.current.clear();
    setBalance((current) => clamp(50 + (current - 50) * 0.28 + nextScenario.startJolt, 18, 82));
  }, [phase, roundIndex]);

  useEffect(() => {
    if (phase !== 'playing') return;
    setAnnouncement(
      interpolate(copy.roundPattern, {
        current: roundIndex + 1,
        total: SCENARIOS.length,
        title: copy.scenarios[roundIndex].title,
        seconds: ROUND_SECONDS,
      }),
    );
  }, [copy, phase, roundIndex]);

  useEffect(() => {
    if (phase !== 'playing' || selectedChoice !== null) return;
    const timer = window.setInterval(() => {
      setTimeLeft((current) => Math.max(0, current - 1));
    }, 1000);
    return () => window.clearInterval(timer);
  }, [phase, roundIndex, selectedChoice]);

  useEffect(() => {
    if (phase !== 'playing' || selectedChoice !== null) return;
    const driftTimer = window.setInterval(() => {
      setBalance((current) => clamp(current + SCENARIOS[roundIndex].drift, 5, 95));
    }, 650);
    return () => window.clearInterval(driftTimer);
  }, [phase, roundIndex, selectedChoice]);

  useEffect(() => {
    if (phase !== 'playing' || selectedChoice !== null) return;
    const pulse = SCENARIOS[roundIndex].pulses.find((candidate) => candidate.at === timeLeft);
    if (!pulse) return;
    const pulseKey = `${roundIndex}-${pulse.at}`;
    if (pulseHistory.current.has(pulseKey)) return;
    pulseHistory.current.add(pulseKey);
    setBalance((current) => clamp(current + pulse.force, 5, 95));
    setAnnouncement(copy.turbulence);
  }, [copy.turbulence, phase, roundIndex, selectedChoice, timeLeft]);

  const begin = useCallback(
    (isRestart = false) => {
      setRoundIndex(0);
      setTimeLeft(ROUND_SECONDS);
      setBalance(50);
      setSelectedChoice(null);
      setResolution(null);
      setMeters({ service: 30, cargo: 30, safety: 34, stabilityTotal: 0, roundsResolved: 0, score: 0 });
      setPhase('playing');
      track(isRestart ? 'game_restart' : 'game_start', {
        game_name: 'cabin_crisis_drill',
        locale: activeLocale,
      });
    },
    [activeLocale],
  );

  const nudge = useCallback(
    (amount: number) => {
      if (phase !== 'playing' || selectedChoice !== null) return;
      setBalance((current) => clamp(current + amount, 5, 95));
    },
    [phase, selectedChoice],
  );

  const resolveRound = useCallback(
    (action: ActionId | null) => {
      if (phase !== 'playing' || selectedChoice !== null) return;

      const currentScenario = SCENARIOS[roundIndex];
      const currentCopy = COPY[activeLocale];
      const currentStability = getStabilityQuality(balance);
      const nextResolution: Resolution = action === null
        ? 'timeout'
        : action === currentScenario.best
          ? 'best'
          : action === currentScenario.second
            ? 'mixed'
            : 'risky';
      const resolutionMultiplier = nextResolution === 'best' ? 1 : nextResolution === 'mixed' ? 0.58 : nextResolution === 'risky' ? 0.24 : 0;
      const baseScore = nextResolution === 'best' ? 360 : nextResolution === 'mixed' ? 190 : nextResolution === 'risky' ? 70 : 0;
      const effects = action ? ACTION_EFFECTS[action] : { service: -5, cargo: -6, safety: -8 };

      if (action === 'scan') {
        setBalance((current) => current + (50 - current) * 0.55);
      } else if (nextResolution === 'risky' || nextResolution === 'timeout') {
        setBalance((current) => clamp(current + currentScenario.drift * 4, 5, 95));
      }

      setMeters((current) => ({
        service: clamp(current.service + effects.service * Math.max(resolutionMultiplier, 0.45)),
        cargo: clamp(current.cargo + effects.cargo * Math.max(resolutionMultiplier, 0.45)),
        safety: clamp(current.safety + effects.safety * Math.max(resolutionMultiplier, 0.45)),
        stabilityTotal: current.stabilityTotal + currentStability,
        roundsResolved: current.roundsResolved + 1,
        score: current.score + baseScore + currentStability * 3,
      }));
      setSelectedChoice(action ?? 'timeout');
      setResolution(nextResolution);

      const nextAnnouncement = action
        ? interpolate(currentCopy.choicePattern, {
          action: currentCopy.actions[action].label,
          outcome: currentCopy.outcomes[nextResolution],
        })
        : currentCopy.timeoutAnnouncement;
      setAnnouncement(nextAnnouncement);
      track('game_round_choice', {
        game_name: 'cabin_crisis_drill',
        round: roundIndex + 1,
        scenario: currentScenario.code,
        choice: action ?? 'timeout',
        resolution: nextResolution,
        stability: currentStability,
        locale: activeLocale,
      });
    },
    [activeLocale, balance, phase, roundIndex, selectedChoice],
  );

  useEffect(() => {
    if (phase === 'playing' && selectedChoice === null && timeLeft === 0) {
      resolveRound(null);
    }
  }, [phase, resolveRound, selectedChoice, timeLeft]);

  const overall = useMemo(() => {
    const stabilityAverage = meters.roundsResolved > 0 ? meters.stabilityTotal / meters.roundsResolved : 0;
    return Math.round(stabilityAverage * 0.4 + meters.service * 0.2 + meters.cargo * 0.2 + meters.safety * 0.2);
  }, [meters]);
  const rating = getRating(overall);

  const advance = useCallback(() => {
    if (selectedChoice === null) return;
    if (roundIndex < SCENARIOS.length - 1) {
      // Clear the resolved round before changing its index so rapid keyboard
      // input cannot advance twice while the next-round effect is pending.
      setSelectedChoice(null);
      setResolution(null);
      setTimeLeft(ROUND_SECONDS);
      setRoundIndex((current) => current + 1);
      return;
    }

    const finalRating = getRating(overall);
    setPhase('result');
    setAnnouncement(interpolate(copy.completePattern, { score: meters.score, rating: copy.ratings[finalRating] }));
    track('game_complete', {
      game_name: 'cabin_crisis_drill',
      score: meters.score,
      overall,
      rating: finalRating,
      locale: activeLocale,
    });
  }, [activeLocale, copy.completePattern, copy.ratings, meters.score, overall, roundIndex, selectedChoice]);

  useEffect(() => {
    if (phase !== 'playing') return;
    const onKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === 'arrowleft' || key === 'a') {
        event.preventDefault();
        nudge(-7);
      } else if (key === 'arrowright' || key === 'd') {
        event.preventDefault();
        nudge(7);
      } else if (selectedChoice === null && ['1', '2', '3'].includes(key)) {
        event.preventDefault();
        resolveRound((['scan', 'assist', 'secure'] as ActionId[])[Number(key) - 1]);
      } else if (selectedChoice !== null && (key === 'enter' || key === ' ')) {
        event.preventDefault();
        advance();
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [advance, nudge, phase, resolveRound, selectedChoice]);

  const stabilityAverage = meters.roundsResolved > 0
    ? Math.round(meters.stabilityTotal / meters.roundsResolved)
    : 0;

  return (
    <section className={styles.shell} dir={isRtl ? 'rtl' : 'ltr'} lang={activeLocale === 'my' ? 'my-MM' : activeLocale} aria-labelledby="cabin-crisis-title">
      <div className={styles.topRail} aria-hidden="true">
        <span>CRD–05</span>
        <i />
        <span>{copy.eyebrow}</span>
        <i />
        <span>{copy.round.toUpperCase()} / 05</span>
      </div>

      <div className={styles.utilityRow}>
        <span className={styles.ruleBadge}>{copy.originalRules}</span>
        <label className={styles.languageControl}>
          <span>{copy.language}</span>
          <select
            value={activeLocale}
            onChange={(event) => setActiveLocale(event.target.value as InternalLocale)}
            aria-label={copy.language}
          >
            {LOCALE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>{option.short} · {option.label}</option>
            ))}
          </select>
        </label>
      </div>

      {phase === 'briefing' ? (
        <div className={styles.briefing}>
          <div className={styles.briefingCopy}>
            <p className={styles.eyebrow}>{copy.eyebrow}</p>
            <h2 id="cabin-crisis-title">{copy.title}</h2>
            <p className={styles.subtitle}>{copy.subtitle}</p>
            <div className={styles.disclaimer} role="note">
              <strong>{copy.eyebrow}</strong>
              <span>{copy.unofficial}</span>
            </div>
          </div>
          <div className={styles.briefingVisual}>
            <CabinDiagram balance={50} active={false} />
            <div className={styles.instructionCard}>
              <p>{copy.briefingTitle}</p>
              <ol>
                {copy.instructions.map((instruction) => <li key={instruction}>{instruction}</li>)}
              </ol>
              <button className={styles.primaryButton} type="button" onClick={() => begin(false)}>
                <span aria-hidden="true">▶</span>
                {copy.start}
              </button>
              <small>{copy.startsImmediately}</small>
            </div>
          </div>
        </div>
      ) : null}

      {phase === 'playing' ? (
        <div className={styles.gameBoard}>
          <header className={styles.gameHeader}>
            <div>
              <p className={styles.liveLabel}><span /> {copy.live}</p>
              <h2 id="cabin-crisis-title">{copy.title}</h2>
            </div>
            <div className={styles.roundReadout} aria-label={`${copy.round} ${roundIndex + 1}`}>
              <span>{copy.round}</span>
              <strong>{String(roundIndex + 1).padStart(2, '0')}<small>/05</small></strong>
            </div>
            <div className={`${styles.timer} ${timeLeft <= 4 ? styles.timerUrgent : ''}`} aria-live="off">
              <strong>{String(timeLeft).padStart(2, '0')}</strong>
              <span>{copy.seconds}</span>
            </div>
          </header>

          <div className={styles.progressStrip} aria-label={`${copy.round} ${roundIndex + 1} / 5`}>
            {SCENARIOS.map((item, index) => (
              <span
                key={item.code}
                className={index < roundIndex ? styles.done : index === roundIndex ? styles.current : ''}
              >
                <b>{index + 1}</b>
                <i />
              </span>
            ))}
          </div>

          <div className={styles.instrumentGrid}>
            <div className={styles.flightPanel}>
              <div className={styles.panelHeading}>
                <span>{copy.stability}</span>
                <b>{stabilityQuality}</b>
              </div>
              <CabinDiagram balance={balance} active={selectedChoice === null} />
              <p className={styles.levelInstruction}>{copy.keepLevel}</p>
              <div className={styles.balanceRail} aria-hidden="true">
                <span className={styles.safeBand} />
                <i style={{ insetInlineStart: `${balance}%` }} />
              </div>
              <div className={styles.rollControls}>
                <button type="button" onClick={() => nudge(-7)} disabled={selectedChoice !== null} aria-label={copy.left}>
                  <span aria-hidden="true">←</span><small>{copy.left}</small>
                </button>
                <span>{copy.keyboardHint}</span>
                <button type="button" onClick={() => nudge(7)} disabled={selectedChoice !== null} aria-label={copy.right}>
                  <small>{copy.right}</small><span aria-hidden="true">→</span>
                </button>
              </div>
            </div>

            <aside className={styles.statusPanel} aria-label={`${copy.live}: ${copy.cabinSafety}`}>
              <Meter label={copy.passengerCare} value={meters.service} />
              <Meter label={copy.cargoSecurity} value={meters.cargo} />
              <Meter label={copy.cabinSafety} value={meters.safety} emphasis />
              <div className={styles.statusStamp}>
                <span>EVENT</span>
                <strong>{scenario.code}</strong>
              </div>
            </aside>
          </div>

          <div className={styles.dispatchGrid}>
            <article className={styles.dispatchCard}>
              <span>{copy.dispatch} · {scenario.code}</span>
              <h3>{scenarioCopy.title}</h3>
              <p>{scenarioCopy.brief}</p>
            </article>

            <div className={styles.actionPanel}>
              <p>{copy.choosePriority}</p>
              <div className={styles.actionGrid}>
                {(['scan', 'assist', 'secure'] as ActionId[]).map((action, index) => (
                  <button
                    key={action}
                    type="button"
                    className={selectedChoice === action ? styles.actionSelected : ''}
                    onClick={() => resolveRound(action)}
                    disabled={selectedChoice !== null}
                    aria-pressed={selectedChoice === action}
                  >
                    <b aria-hidden="true">0{index + 1}</b>
                    <span><strong>{copy.actions[action].label}</strong><small>{copy.actions[action].detail}</small></span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {resolution ? (
            <div className={`${styles.resolution} ${styles[`resolution_${resolution}`]}`} role="status">
              <div>
                <span>{resolution === 'best' ? '✓' : resolution === 'mixed' ? '≈' : '!'}</span>
                <p>{copy.outcomes[resolution]}</p>
              </div>
              <button className={styles.nextButton} type="button" onClick={advance}>
                {roundIndex === SCENARIOS.length - 1 ? copy.finish : copy.continue}
                <span aria-hidden="true">→</span>
              </button>
            </div>
          ) : null}
        </div>
      ) : null}

      {phase === 'result' ? (
        <div className={styles.resultPanel}>
          <div className={styles.resultHeader}>
            <p className={styles.eyebrow}>{copy.resultEyebrow}</p>
            <h2 id="cabin-crisis-title">{copy.resultTitle}</h2>
            <div className={styles.ratingPlate}>
              <span>{copy.ratings[rating]}</span>
              <strong>{overall}<small>/100</small></strong>
            </div>
            <p>{copy.ratingCopy[rating]}</p>
          </div>

          <div className={styles.resultBody}>
            <div className={styles.scoreTicket}>
              <span>{copy.totalScore}</span>
              <strong>{meters.score.toLocaleString(activeLocale === 'my' ? 'my-MM' : activeLocale)}</strong>
              <small>CRD–05 · {copy.stabilityAverage}: {stabilityAverage}</small>
            </div>
            <div className={styles.resultMeters}>
              <Meter label={copy.passengerCare} value={meters.service} />
              <Meter label={copy.cargoSecurity} value={meters.cargo} />
              <Meter label={copy.cabinSafety} value={meters.safety} emphasis />
            </div>
          </div>

          <div className={styles.resultActions}>
            <button className={styles.primaryButton} type="button" onClick={() => begin(true)}>
              <span aria-hidden="true">↻</span>{copy.replay}
            </button>
            <a
              className={styles.steamButton}
              href={steamUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => track('game_steam_click', { game_name: 'cabin_crisis_drill', locale: activeLocale })}
            >
              {copy.steam}<span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className={styles.resultDisclaimer} role="note">
            <strong>{copy.resultEyebrow}</strong>
            <p>{copy.resultDisclaimer}</p>
          </div>
        </div>
      ) : null}

      <p className={styles.liveRegion} aria-live="polite" aria-atomic="true">{announcement}</p>
    </section>
  );
}
