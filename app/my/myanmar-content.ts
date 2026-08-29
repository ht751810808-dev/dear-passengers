export type MyanmarFaq = { question: string; answer: string };
export type MyanmarSection = { id: string; kicker: string; heading: string; paragraphs: string[]; bullets?: string[] };
export type MyanmarGuide = {
  slug: string;
  englishPath: string;
  modifiedDate?: string;
  verifiedDate?: string;
  keyword: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  intro: string;
  answer: string;
  note: string;
  heroImage: string;
  heroAlt: string;
  confirmed: string[];
  unknown: string[];
  sections: MyanmarSection[];
  localContext: string[];
  faqs: MyanmarFaq[];
  related: string[];
};

export const myanmarGuides: MyanmarGuide[] = [
  {
    slug: 'dear-passengers-gameplay',
    englishPath: '/dear-passengers-gameplay/',
    keyword: 'Dear Passengers ကစားနည်း',
    title: 'Dear Passengers ကစားနည်း၊ လေယာဉ်မောင်းခြင်းနှင့် Cabin အလုပ်များ',
    description: 'Dear Passengers ကစားနည်းကို မြန်မာဘာသာဖြင့် ရှင်းပြထားသည်။ လေယာဉ်မောင်းခြင်း၊ cabin အလုပ်၊ ခရီးသည်၊ ကုန်ပစ္စည်း၊ physics နှင့် co-op အချက်အလက်များ။',
    eyebrow: 'ကစားနည်းလမ်းညွှန် · မြန်မာဘာသာ',
    h1: 'Dear Passengers ကို ဘယ်လိုကစားရမလဲ၊ အဖွဲ့တာဝန်တွေ ဘယ်လိုခွဲမလဲ',
    intro: 'Dear Passengers ကစားနည်းကို ရှာသူများက လေယာဉ်မောင်းရမလား၊ ခရီးသည်ဝန်ဆောင်မှုပေးရမလား၊ သူငယ်ချင်းများနှင့် ဘယ်လိုပူးပေါင်းရမလဲ ဆိုတာကို သိချင်ကြသည်။ ဤလမ်းညွှန်သည် Steam စာမျက်နှာနှင့် FLEXUS ထုတ်ပြန်သည့် ဗီဒီယိုများကိုသာ အခြေခံပြီး မပြောရသေးသည့် control၊ class သို့မဟုတ် progression ကို မဖန်တီးပါ။',
    answer: 'Dear Passengers တွင် လေယာဉ်မထွက်မီ ခရီးသည်နှင့် ကုန်ပစ္စည်းကို ရွေးချယ်ရသည်။ ခရီးစဉ်အတွင်း ကစားသမားတစ်ဦးက လေယာဉ်မောင်းနိုင်ပြီး အခြားအဖွဲ့ဝင်များက cabin ကို ထိန်းသိမ်းခြင်း၊ အစားအသောက်ပေးခြင်း၊ ကုန်ပစ္စည်းကာကွယ်ခြင်းနှင့် အရေးပေါ်ပြဿနာများကို ဖြေရှင်းကြသည်။ Single-player နှင့် online co-op ကို Steam က အတည်ပြုထားသော်လည်း mission၊ control၊ progression နှင့် အများဆုံးကစားသမားအရေအတွက်ကို မကြေညာသေးပါ။',
    note: 'Steam ဖော်ပြချက်က အခြေခံလုပ်ဆောင်ချက်များကို အတည်ပြုသည်။ Trailer တစ်ခုမှာ မြင်ရသည့် scene သည် အမြဲတမ်း mission၊ playable action သို့မဟုတ် game mode ဖြစ်ကြောင်း မသက်သေပြနိုင်ပါ။',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers ကစားနည်းလမ်းညွှန်အတွက် လေယာဉ် cabin မူရင်းအယ်ဒီတာသရုပ်ဖော်ပုံ',
    confirmed: ['လေယာဉ်မောင်းခြင်းနှင့် cabin အတွင်း အလုပ်လုပ်ခြင်း', 'ခရီးသည်နှင့် ကုန်ပစ္စည်း ရွေးချယ်ခြင်း', 'လူနှင့် ပစ္စည်းများအပေါ် သက်ရောက်သည့် physics', 'Single-player နှင့် online co-op'],
    unknown: ['Mission အရေအတွက်နှင့် ကြာချိန်', 'Progression နှင့် upgrade စနစ်', 'Controller support', 'အများဆုံး crew အရေအတွက်'],
    sections: [
      {
        id: 'flight-loop',
        kicker: 'ခရီးစဉ် LOOP',
        heading: 'Dear Passengers ပွဲတစ်ပွဲ ဘယ်လိုစတင်သလဲ',
        paragraphs: [
          'Dear Passengers ၏ တရားဝင်ဖော်ပြချက်သည် လေယာဉ်မထွက်မီက စတင်သည်။ Crew သည် ဘယ်ခရီးသည်နှင့် ဘယ်ကုန်ပစ္စည်းကို တင်မလဲ ရွေးချယ်ရသည်။ ပိုမိုအကျိုးအမြတ်ကောင်းသည့် ရွေးချယ်မှုတွင် ပိုမိုခက်ခဲသော ပြဿနာများ ပါလာနိုင်သည်။ Risk နှင့် reward ဆက်နွယ်မှုကို Steam က ဖော်ပြထားသော်လည်း currency၊ level၊ contract tier သို့မဟုတ် shop စနစ်ကို မကြေညာသေးပါ။',
          'လေယာဉ်ထွက်ပြီးနောက် Dear Passengers သည် cockpit နှင့် cabin ကို ချိတ်ဆက်ထားသည်။ Pilot ၏ လှည့်ကွေ့မှု၊ turbulence နှင့် air pocket များက ခရီးသည်၊ အိတ်နှင့် လွတ်နေသည့်ပစ္စည်းများကို ရွေ့စေနိုင်သည်။ ထို့ကြောင့် cockpit ဆုံးဖြတ်ချက်တစ်ခုသည် cabin အဖွဲ့၏ အလုပ်ကို တိုက်ရိုက်သက်ရောက်စေသည့် co-op ပုံစံ ဖြစ်သည်။',
        ],
      },
      {
        id: 'crew-work',
        kicker: 'PILOT နှင့် CABIN',
        heading: 'Pilot နဲ့ cabin crew က ဘာတွေလုပ်ရသလဲ',
        paragraphs: [
          'Dear Passengers တွင် လေယာဉ်မောင်းနိုင်သည်ဟု Steam က အတည်ပြုထားပြီး trailer တွင် first-person cockpit ကို မြင်ရသည်။ သို့သော် realistic checklist၊ air traffic control၊ fuel simulation သို့မဟုတ် professional flight simulator အဆင့်ကို မဖော်ပြထားပါ။ ဂိမ်းသည် လေယာဉ်ပျံသန်းမှုကို အသုံးပြုသော်လည်း တိကျသော simulator ဟု မဆိုနိုင်သေးပါ။',
          'Cabin crew သည် အစားအသောက်နှင့် အဖျော်ယမကာပေးခြင်း၊ ခရီးသည်ကို ထိန်းသိမ်းခြင်း၊ ကုန်ပစ္စည်းကို ကာကွယ်ခြင်းနှင့် ပြဿနာကြီးမားမသွားမီ ဖြေရှင်းခြင်းတို့ကို လုပ်ရသည်။ Satisfaction bar၊ inventory slot၊ သတ်မှတ်ထားသော class သို့မဟုတ် locked profession များကို မကြေညာသေးပါ။ [[/my/dear-passengers-roles/|Dear Passengers role လမ်းညွှန်]] တွင် အတည်ပြုထားသည့် တာဝန်နှင့် ခန့်မှန်းချက်ကို သီးခြားခွဲထားသည်။',
        ],
      },
      {
        id: 'solo-coop',
        kicker: 'SOLO နှင့် CO-OP',
        heading: 'Dear Passengers ကို တစ်ယောက်တည်း သို့မဟုတ် သူငယ်ချင်းတွေနဲ့ ကစားလို့ရလား',
        paragraphs: [
          'Steam သည် Single-player နှင့် Online Co-op ကို နှစ်မျိုးစလုံး ဖော်ပြထားသည်။ ထို့ကြောင့် သူငယ်ချင်းမရှိဘဲ ကစားနိုင်သည်မှာ အတည်ပြုချက်ဖြစ်သည်။ သို့သော် တစ်ဦးတည်းက cockpit နှင့် cabin ကြား ပြောင်းရမလား၊ AI crew ရှိမလား၊ objective ကို လျှော့ပေးမလား ဆိုတာ မသိရသေးပါ။',
          'Online co-op တွင် အဖွဲ့ဝင်များက တာဝန်ခွဲယူကြသည်။ Invitation၊ lobby code၊ matchmaking၊ host migration၊ join-in-progress နှင့် voice chat အကြောင်းကို မကြေညာသေးပါ။ Split screen၊ local co-op နှင့် crossplay လည်း အတည်မပြုသေးပါ။ [[/my/dear-passengers-player-count/|ကစားသမားအရေအတွက် စာမျက်နှာ]] သည် ဤမသိရသေးသည့် အချက်များကို ရှင်းလင်းစွာ ထိန်းထားသည်။',
        ],
      },
    ],
    localContext: [
      'မြန်မာအသုံးအနှုန်းတွင် “ကစားနည်း” သည် လက်တွေ့ဘယ်လိုကစားရမလဲကို ဆိုလိုပြီး “gameplay” ကိုလည်း အင်္ဂလိပ်လို အသုံးများသည်။ URL တွင် brand ကို အင်္ဂလိပ်လို ထိန်းထားပြီး heading တွင် ကစားနည်းကို သဘာဝကျကျ အသုံးပြုထားသည်။',
      'GSC တွင် မြန်မာနိုင်ငံမှ `Dear Passengers gameplay tips` နှင့် `how to play Dear Passengers` ဆိုင်ရာ လိုအပ်ချက် တွေ့ရသည်။ အချက်အလက်မရှိသေးသော strategy သို့မဟုတ် walkthrough ကို ဖန်တီးမည့်အစား အတည်ပြုထားသော flight loop ကို ရှင်းပြသည်။',
      'ဤဝဘ်ဆိုက်ကို မြန်မာဘာသာဖြင့် ဖတ်နိုင်ခြင်းသည် ဂိမ်းအတွင်း မြန်မာစာ interface၊ အသံ သို့မဟုတ် subtitle ပါသည်ဟု မဆိုလိုပါ။ Steam language table တွင် မြန်မာဘာသာ မပါသေးပါ။',
    ],
    faqs: [
      { question: 'Dear Passengers ကို ဘယ်လိုကစားရမလဲ', answer: 'ခရီးသည်နှင့် ကုန်ပစ္စည်းရွေးပြီး pilot၊ cabin service နှင့် incident response တာဝန်များကို ခွဲယူကစားရသည်။' },
      { question: 'Dear Passengers ကို တစ်ယောက်တည်းကစားလို့ရလား', answer: 'ရသည်။ Steam က Single-player ကို အတည်ပြုထားသော်လည်း solo crew စနစ်ကို မရှင်းပြသေးပါ။' },
      { question: 'Dear Passengers က online game လား', answer: 'Online co-op ကို အတည်ပြုထားသည်။ Matchmaking၊ lobby နှင့် voice chat အသေးစိတ် မသိရသေးပါ။' },
      { question: 'Flight simulator လား', answer: 'လေယာဉ်မောင်းခြင်းနှင့် ရာသီဥတု ပါသော်လည်း simulation အနက်ကို မကြေညာသေးပါ။' },
      { question: 'မြန်မာဘာသာပါလား', answer: 'မပါသေးပါ။ Steam တွင် မြန်မာစာ interface၊ အသံနှင့် subtitle ကို မဖော်ပြထားပါ။' },
      { question: 'ဘယ်တော့ကစားနိုင်မလဲ', answer: '2026 ဖြန့်ချိမည်ဟုသာ အတည်ပြုထားပြီး ရက်အတိအကျနှင့် public demo မရှိသေးပါ။' },
    ],
    related: ['dear-passengers-roles', 'dear-passengers-player-count', 'dear-passengers-confirmed-features', 'dear-passengers-demo', 'games-like-dear-passengers'],
  },
  {
    slug: 'dear-passengers-player-count',
    englishPath: '/dear-passengers-player-count/',
    keyword: 'Dear Passengers ကစားသမားအရေအတွက်',
    title: 'Dear Passengers ကစားသမားအရေအတွက်၊ Co-op နှင့် Solo',
    description: 'Dear Passengers ကို လူဘယ်နှယောက်ကစားနိုင်သလဲ။ Steam အတည်ပြုထားသည့် solo၊ online co-op နှင့် မကြေညာသေးသော player limit၊ crossplay အချက်များ။',
    eyebrow: 'ကစားသမားအရေအတွက် · မခန့်မှန်းပါ',
    h1: 'Dear Passengers ကို လူဘယ်နှယောက် အတူကစားနိုင်သလဲ',
    intro: 'Dear Passengers ကစားသမားအရေအတွက်ကို FLEXUS က နံပါတ်တိတိကျကျ မကြေညာသေးပါ။ Steam တွင် Single-player နှင့် Online Co-op ဟု ရေးထားသော်လည်း နှစ်ယောက်၊ လေးယောက်၊ ခြောက်ယောက် သို့မဟုတ် ထို့ထက်ပိုသည်ဟု မဖော်ပြထားပါ။ Trailer ထဲက ဇာတ်ကောင်အရေအတွက်ကို lobby limit အဖြစ် မယူပါ။',
    answer: 'Dear Passengers ၏ အများဆုံးကစားသမားအရေအတွက်ကို မကြေညာသေးပါ။ Single-player နှင့် online co-op ကိုသာ အတည်ပြုထားသည်။ Crossplay၊ public matchmaking၊ split screen၊ local co-op၊ dedicated server နှင့် built-in voice chat တို့လည်း မသိရသေးပါ။',
    note: 'Steam၊ FLEXUS announcement သို့မဟုတ် တရားဝင် playable build documentation တွင် နံပါတ်ဖော်ပြမှသာ player limit ကို အတည်ပြုမည်။ ဗီဒီယိုထဲက crew ကို ရေတွက်ခြင်းသည် server capacity မဟုတ်ပါ။',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers ကစားသမားအရေအတွက် လမ်းညွှန်အတွက် cabin ထဲရှိ crew ပုံ',
    confirmed: ['Single-player', 'Online co-op', 'Cockpit နှင့် cabin တာဝန်ခွဲခြင်း'],
    unknown: ['အများဆုံးကစားသမားအရေအတွက်', 'Crossplay', 'Split screen နှင့် local co-op', 'Matchmaking၊ server နှင့် voice chat'],
    sections: [
      {
        id: 'no-number',
        kicker: 'တရားဝင်အဖြေ',
        heading: 'Dear Passengers player limit ကို ဘာကြောင့် မသိသေးတာလဲ',
        paragraphs: [
          'Steam feature list သည် Single-player နှင့် Online Co-op ဟုသာ ဖော်ပြပြီး ကစားသမားနံပါတ် မထည့်ထားပါ။ “သူငယ်ချင်းများနှင့်” ဟူသော marketing စာသားသည် လူတစ်ဦးထက်ပို၍ ပူးပေါင်းကစားနိုင်ကြောင်း ပြသသော်လည်း network specification မဟုတ်ပါ။ FLEXUS က player limit ထုတ်ပြန်မချင်း တိကျသောနံပါတ်တိုင်းသည် third-party claim ဖြစ်သည်။',
          'Steam community တွင် နှစ်ယောက်၊ သုံးယောက်၊ လေးယောက် သို့မဟုတ် ခြောက်ယောက်ကစားနိုင်မလား မေးထားကြသည်။ အသုံးပြုသူအချင်းချင်းဖြေသည့် ဟာသနံပါတ်များကို developer answer အဖြစ် မယူနိုင်ပါ။ ဒီမေးခွန်းများက search intent ရှိကြောင်း ပြသပေမယ့် player limit ကို အတည်မပြုနိုင်ပါ။',
        ],
      },
      {
        id: 'multiplayer',
        kicker: 'ONLINE CO-OP',
        heading: 'Dear Passengers multiplayer အကြောင်း ဘာသိရသလဲ',
        paragraphs: [
          'Dear Passengers ၏ co-op ပုံစံတွင် တစ်ဦးက pilot လုပ်နေချိန် အခြားသူများက cabin service၊ passenger control၊ cargo protection နှင့် emergency response ကို လုပ်နိုင်သည်။ ဤသည်မှာ တာဝန်ခွဲခြင်းကို အတည်ပြုသော်လည်း အဖွဲ့ဝင်တစ်ဦးစီတွင် permanent class ရှိသည်ဟု မဆိုလိုပါ။',
          'Dedicated server၊ server region၊ room browser၊ invitation code၊ late join သို့မဟုတ် host transfer အကြောင်း မကြေညာသေးပါ။ မြန်မာနိုင်ငံမှ ကစားသူများအတွက် latency နှင့် regional server သည် အရေးကြီးနိုင်သော်လည်း အခုအချိန်တွင် server တည်နေရာ သို့မဟုတ် ping ကို အာမခံရန် အချက်အလက် မရှိပါ။',
        ],
      },
      {
        id: 'solo-platforms',
        kicker: 'SOLO နှင့် PLATFORM',
        heading: 'တစ်ယောက်တည်း၊ split screen သို့မဟုတ် crossplay ရှိမလား',
        paragraphs: [
          'Solo mode ရှိသည်မှာ အတည်ပြုချက်ဖြစ်သည်။ သို့သော် တစ်ဦးတည်းက station ပြောင်းလဲမလား၊ AI အကူအညီရမလား၊ crew task ကို ချိန်ညှိမလား မသိရသေးပါ။ “သူငယ်ချင်းမရှိဘဲ ကစားလို့ရလား” ဆိုသည့်အဖြေမှာ ရသည်၊ “ဘယ်လိုကစားမလဲ” ဆိုသည့်အသေးစိတ်မှာ မသိရသေးပါ။',
          'Windows PC သည် တစ်ခုတည်းသော အတည်ပြုထားသော platform ဖြစ်သည်။ PlayStation၊ Xbox သို့မဟုတ် Switch မကြေညာသေးသဖြင့် crossplay ကို အတည်မပြုနိုင်ပါ။ Steam တွင် Remote Play Together နှင့် shared-screen co-op ကိုလည်း မဖော်ပြထားပါ။ [[/my/dear-passengers-release-date/|ဖြန့်ချိမည့်ရက်နှင့် platform လမ်းညွှန်]] တွင် ပြောင်းလဲမှုကို စောင့်ကြည့်ထားသည်။',
        ],
      },
    ],
    localContext: [
      'မြန်မာမေးခွန်းပုံစံတွင် “လူဘယ်နှယောက်ကစားလို့ရလဲ”၊ “တစ်ယောက်တည်းရလား” နှင့် “သူငယ်ချင်းတွေနဲ့ရလား” တို့သည် တူညီသော ဝယ်ယူဆုံးဖြတ်ချက်ကို ရည်ညွှန်းသည်။ ထို့ကြောင့် URL တစ်ခုတည်းတွင် စုစည်းထားသည်။',
      '“Multiplayer”၊ “co-op” နှင့် “online” ကို မြန်မာဂိမ်းအသိုင်းအဝိုင်းတွင် အင်္ဂလိပ်လိုပင် အသုံးများသည်။ စာမျက်နှာသည် ရှာဖွေသူနားလည်လွယ်သည့် စကားလုံးကို သဘာဝကျကျ ပေါင်းစပ်ထားသည်။',
      'Trailer တွင် လူများစွာမြင်ရခြင်းသည် အဖွဲ့လိုက်ကစားခြင်းကိုသာ ပြသနိုင်ပြီး lobby size၊ server stability သို့မဟုတ် platform crossplay ကို မသက်သေပြနိုင်ပါ။',
    ],
    faqs: [
      { question: 'Dear Passengers ကို လူဘယ်နှယောက်ကစားနိုင်သလဲ', answer: 'အများဆုံးနံပါတ် မကြေညာသေးပါ။ Single-player နှင့် online co-op ကိုသာ အတည်ပြုထားသည်။' },
      { question: 'လေးယောက်ကစားလို့ရလား', answer: 'လေးယောက်ဟု တရားဝင်အတည်ပြုထားခြင်း မရှိသေးပါ။' },
      { question: 'တစ်ယောက်တည်းကစားလို့ရလား', answer: 'ရသည်။ Steam က Single-player ကို ဖော်ပြထားသော်လည်း solo mechanics မသိရသေးပါ။' },
      { question: 'Split screen ပါလား', answer: 'Split screen နှင့် local co-op ကို မကြေညာသေးပါ။' },
      { question: 'Crossplay ရှိမလား', answer: 'မကြေညာသေးပါ။ Windows PC သည် လက်ရှိတစ်ခုတည်းသော platform ဖြစ်သည်။' },
      { question: 'Matchmaking ပါလား', answer: 'ကစားသမားရှာဖွေခြင်းနှင့် invitation စနစ်ကို မရှင်းပြသေးပါ။' },
    ],
    related: ['dear-passengers-gameplay', 'dear-passengers-roles', 'dear-passengers-release-date', 'dear-passengers-demo'],
  },
  {
    slug: 'dear-passengers-release-date',
    englishPath: '/dear-passengers-release-date/',
    keyword: 'Dear Passengers ထွက်မည့်ရက်',
    title: 'Dear Passengers ထွက်မည့်ရက်၊ ဈေးနှုန်းနှင့် Platform',
    description: 'Dear Passengers ထွက်မည့်ရက်သည် 2026 ဖြစ်သည်။ ရက်အတိအကျ၊ ဈေးနှုန်း၊ PC၊ PS5၊ Xbox၊ mobile နှင့် မြန်မာဘာသာအခြေအနေကို စစ်ဆေးထားသည်။',
    eyebrow: 'ဖြန့်ချိမှု · အတည်ပြုချက်',
    h1: 'Dear Passengers ဘယ်တော့ထွက်မလဲ',
    intro: 'Dear Passengers ထွက်မည့်ရက်နှင့် release date ကို ရှာသူများအတွက် တရားဝင်အဖြေသည် 2026 မှာပင် ရပ်နေသည်။ လ၊ ရက်၊ ဒေသအလိုက် ဈေးနှုန်း၊ preorder သို့မဟုတ် console version ကို မကြေညာသေးပါ။ Third-party database တစ်ခု၏ 31 December ရက်ကို တရားဝင် launch date အဖြစ် မယူသင့်ပါ။',
    answer: 'Dear Passengers ကို 2026 ခုနှစ်တွင် Windows PC အတွက် Steam မှ ဖြန့်ချိရန် စီစဉ်ထားသည်။ FLEXUS သည် လနှင့်ရက်အတိအကျ၊ launch time၊ ဈေးနှုန်း၊ preorder၊ Early Access၊ PlayStation၊ Xbox၊ Nintendo Switch၊ Mac၊ Linux သို့မဟုတ် mobile version ကို မကြေညာသေးပါ။',
    note: 'Steam သို့မဟုတ် FLEXUS က ပိုမိုတိကျသောအချိန်ကို ထုတ်ပြန်မှသာ release date ကို ပြောင်းမည်။ နှစ်ကုန် placeholder date များကို announcement အဖြစ် မတင်ပြပါ။',
    heroImage: '/images/release-date.webp',
    heroAlt: 'Dear Passengers ထွက်မည့်ရက် လမ်းညွှန်အတွက် ပျံသန်းနေသော လေယာဉ်ပုံ',
    confirmed: ['2026 ဖြန့်ချိမည့် window', 'Windows PC', 'Steam မှ ဖြန့်ချိမည်', 'Developer နှင့် publisher သည် FLEXUS'],
    unknown: ['လနှင့်ရက်အတိအကျ', 'မြန်မာကျပ် သို့မဟုတ် ဒေသအလိုက်ဈေးနှုန်း', 'Console၊ Mac၊ Linux နှင့် mobile', 'Preorder သို့မဟုတ် Early Access'],
    sections: [
      {
        id: 'window',
        kicker: 'တရားဝင် WINDOW',
        heading: 'Dear Passengers 2026 မှာ ဘယ်လ၊ ဘယ်ရက်ထွက်မလဲ',
        paragraphs: [
          'Dear Passengers Steam စာမျက်နှာတွင် 2026 ဟုသာ ဖော်ပြထားပြီး quarter၊ month သို့မဟုတ် day မရှိပါ။ FLEXUS announcement၊ Steam store update သို့မဟုတ် တရားဝင်ဗီဒီယိုက ပိုမိုတိကျသောအချိန်ကို နောက်ပိုင်း ထုတ်ပြန်နိုင်သော်လည်း 2026 ခုနှစ် ဇူလိုင် 30 ရက် စစ်ဆေးချိန်အထိ မထုတ်ပြန်သေးပါ။',
          'အချို့ database များတွင် 31 December 2026 ကို တွေ့နိုင်သည်။ နှစ်သာသိသည့် product များအတွက် နှစ်၏နောက်ဆုံးရက်ကို placeholder အဖြစ် အသုံးပြုလေ့ရှိသည်။ Primary source မရှိပါက ထိုရက်သည် FLEXUS ၏ promise မဟုတ်သဖြင့် countdown တစ်ခု မပြုလုပ်သင့်ပါ။',
        ],
      },
      {
        id: 'price-platform',
        kicker: 'ဈေးနှုန်းနှင့် PLATFORM',
        heading: 'Dear Passengers ဈေးဘယ်လောက်လဲ၊ PS5 သို့မဟုတ် Xbox ထွက်မလား',
        paragraphs: [
          'Dear Passengers ဈေးနှုန်းကို USD၊ မြန်မာကျပ် သို့မဟုတ် အခြား currency ဖြင့် မကြေညာသေးပါ။ Free-to-play ဟုလည်း အတည်မပြုထားပါ။ Steam user tag တစ်ခုသည် တရားဝင်ဈေးနှုန်း သို့မဟုတ် business model မဟုတ်ပါ။ Purchase button ပေါ်လာသည့်အချိန်မှသာ store price ကို ယုံကြည်နိုင်သည်။',
          'Windows PC သည် တစ်ခုတည်းသော အတည်ပြုထားသော platform ဖြစ်သည်။ PS5၊ Xbox Series၊ Nintendo Switch၊ Game Pass၊ Mac၊ Linux၊ Android၊ iOS နှင့် Epic Games Store မကြေညာသေးပါ။ ထို့ကြောင့် crossplay နှင့် cross-save လည်း မသိရသေးပါ။',
        ],
      },
      {
        id: 'myanmar-language',
        kicker: 'မြန်မာဘာသာ',
        heading: 'Dear Passengers ဂိမ်းထဲမှာ မြန်မာစာပါမလား',
        paragraphs: [
          'Steam product language table တွင် English၊ Arabic၊ Simplified Chinese၊ Turkish၊ Ukrainian နှင့် Japanese interface များကို ဖော်ပြထားသည်။ မြန်မာဘာသာ interface၊ full audio သို့မဟုတ် subtitle ကို မဖော်ပြထားပါ။ Steam စာမျက်နှာကို ဘာသာပြန်ကြည့်နိုင်ခြင်းနှင့် ဂိမ်းအတွင်း language support သည် မတူပါ။',
          'ဤလမ်းညွှန်သည် Dear Passengers ကို မြန်မာဘာသာဖြင့် ရှင်းပြသော်လည်း ဂိမ်းကို မြန်မာလိုကစားနိုင်ကြောင်း မဆိုပါ။ Steam table ပြောင်းပါက [[/my/dear-passengers-news/|Dear Passengers သတင်းစာမျက်နှာ]] တွင် update ရက်နှင့် support အမျိုးအစားကို တိကျစွာ မှတ်တမ်းတင်မည်။',
        ],
      },
    ],
    localContext: [
      '“ထွက်မည့်ရက်”၊ “ဘယ်တော့ထွက်မလဲ” နှင့် “release date” သည် တူညီသော search intent ဖြစ်သည်။ အပြိုင်စာမျက်နှာများမဖန်တီးဘဲ URL တစ်ခုတည်းတွင် စုစည်းထားသည်။',
      'GSC တွင် မြန်မာနိုင်ငံမှ `Dear Passengers release date`၊ `game release date 2026` နှင့် `how much` query များ ရှိသည်။ ရှာဖွေမှုရှိခြင်းသည် ရက် သို့မဟုတ် ဈေးကို အတည်မပြုနိုင်သောကြောင့် unknown အဖြစ် ထားသည်။',
      'ဒေသအလိုက်ဈေးနှုန်းကို Steam က ထုတ်ပြန်မှသာ မြန်မာကျပ် သို့မဟုတ် သက်ဆိုင်ရာ currency အဖြစ် ဖော်ပြမည်။ မထွက်မီ USD ပြောင်းတွက်ခြင်းက regional pricing နှင့် exchange rate ကို လွဲမှားစေနိုင်သည်။',
    ],
    faqs: [
      { question: 'Dear Passengers ဘယ်တော့ထွက်မလဲ', answer: 'Windows PC အတွက် 2026 ဟုသာ အတည်ပြုထားပြီး လနှင့်ရက် မကြေညာသေးပါ။' },
      { question: '31 December 2026 မှာထွက်မလား', answer: 'မအတည်ပြုပါ။ Third-party placeholder date ဖြစ်နိုင်သည်။' },
      { question: 'Dear Passengers ဈေးဘယ်လောက်လဲ', answer: 'ဈေးနှုန်းနှင့် free သို့မဟုတ် paid model ကို မကြေညာသေးပါ။' },
      { question: 'PS5 သို့မဟုတ် Xbox ထွက်မလား', answer: 'Console version မကြေညာသေးပါ။' },
      { question: 'မြန်မာစာပါလား', answer: 'Steam တွင် မြန်မာဘာသာ support မဖော်ပြထားပါ။' },
      { question: 'Early Access ရှိမလား', answer: 'Early Access နှင့် preorder ကို မကြေညာသေးပါ။' },
    ],
    related: ['dear-passengers-news', 'dear-passengers-demo', 'dear-passengers-system-requirements', 'dear-passengers-developer-flexus'],
  },
  {
    slug: 'dear-passengers-demo',
    englishPath: '/dear-passengers-demo/',
    modifiedDate: '2026-08-29',
    verifiedDate: '2026 ဩဂုတ် 29 ရက်',
    keyword: 'Dear Passengers demo',
    title: 'Dear Passengers Demo၊ Gamescom နှင့် Public Test အခြေအနေ',
    description: 'Dear Passengers demo ကို ယခု download လုပ်၍မရသေးပါ။ Gamescom build၊ public demo အစီအစဉ်၊ beta၊ Playtest နှင့် လုံခြုံသော access အချက်များ။',
    eyebrow: 'DEMO နှင့် TEST · လက်ရှိအခြေအနေ',
    h1: 'Dear Passengers demo ကို အခုဒေါင်းလုဒ်လုပ်လို့ရပြီလား',
    intro: 'Dear Passengers demo ကို အများပြည်သူ download လုပ်၍ မရသေးပါ။ FLEXUS ၏ Gamescom 2026 ပါဝင်မှုကို အတည်ပြုနိုင်သော်လည်း Dear Passengers build ကို ပြသခဲ့ခြင်း သို့မဟုတ် အများပြည်သူ hands-on ကစားခွင့်ရှိခြင်းကို primary source က မအတည်ပြုသေးပါ။ Steam တွင် Download Demo button သို့မဟုတ် Steam Playtest panel မရှိပါ။',
    answer: '2026 ဩဂုတ် 29 ရက်အထိ Dear Passengers public demo သို့မဟုတ် Steam Playtest မရှိသေးပါ။ FLEXUS က Gamescom 2026 တွင် ပါဝင်နေပြီး အစောပိုင်းအင်တာဗျူးတွင် နောက်ပိုင်း public demo ထုတ်ရန် ရည်ရွယ်ကြောင်း ပြောခဲ့သည်။ သို့သော် game build ပြသမှု၊ public hands-on၊ demo ရက်၊ region၊ duration နှင့် content ကို မအတည်ပြုသေးပါ။',
    note: 'Studio ၏ event တက်ရောက်မှုသည် Dear Passengers ကို ကစားနိုင်သည်ဟု မဆိုလိုပါ။ Steam သို့မဟုတ် FLEXUS တရားဝင် channel မှ အလုပ်လုပ်သည့် access link ပေးမှသာ demo ကို available ဟု သတ်မှတ်မည်။',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers demo အခြေအနေကို ရှင်းပြသည့် cabin မူရင်းအယ်ဒီတာသရုပ်ဖော်ပုံ',
    confirmed: ['FLEXUS ၏ Gamescom 2026 ပါဝင်မှု', 'Steam တွင် public demo သို့မဟုတ် Playtest မရှိခြင်း', 'နောက်ပိုင်း public demo ထုတ်ရန် FLEXUS ရည်ရွယ်ခဲ့ခြင်း'],
    unknown: ['Dear Passengers build ကို Gamescom တွင် ပြသခဲ့ခြင်း', 'အများပြည်သူ hands-on access', 'Public demo ရက်၊ content နှင့် duration', 'Region၊ player count နှင့် progress transfer'],
    sections: [
      {
        id: 'current-status',
        kicker: 'လက်ရှိအခြေအနေ',
        heading: 'Dear Passengers demo ကို အခုကစားလို့ရလား',
        paragraphs: [
          'မရသေးပါ။ Dear Passengers Steam page တွင် wishlist နှင့် follow action ရှိသော်လည်း “Download Demo” သို့မဟုတ် “Request Access” မရှိပါ။ Search result တစ်ခု၏ title တွင် demo၊ beta သို့မဟုတ် download ပါရုံဖြင့် တရားဝင် access မဖြစ်ပါ။ FLEXUS သို့မဟုတ် Steam ထံမှ ချိတ်ဆက်မှုမရှိသည့် installer ကို မဖွင့်သင့်ပါ။',
          'Dear Passengers အတွက် နောက်ဆုံး Steam news သည် ဇူလိုင် 31 ရက် post ဖြစ်ပြီး FLEXUS က wishlist နှစ်သန်းနှင့် ပြင်ဆင်နေသည့် gameplay video ကို ဖော်ပြထားသည်။ နှစ်သန်းသည် developer-reported wishlist ဖြစ်ပြီး sale မဟုတ်ပါ။ ထို post တွင် public demo၊ Playtest၊ invitation သို့မဟုတ် key drop မကြေညာထားပါ။',
        ],
      },
      {
        id: 'gamescom-plan',
        kicker: 'FLEXUS အစီအစဉ်',
        heading: 'Gamescom demo နှင့် public demo က ဘာကွာသလဲ',
        paragraphs: [
          'FLEXUS co-founder ၏ အစောပိုင်းအင်တာဗျူးတွင် Gamescom build ပြင်ဆင်ရန် ရည်ရွယ်ကြောင်း ပြောခဲ့ပြီး ယခု FLEXUS ၏ Gamescom 2026 ပါဝင်မှုကို အတည်ပြုနိုင်သည်။ သို့သော် Dear Passengers build ကို အမှန်တကယ်ပြသခဲ့သည်၊ booth တွင် ကစားနိုင်သည် သို့မဟုတ် public hands-on ရှိသည်ဟု အတည်ပြုနိုင်သော game-specific source မရှိသေးပါ။',
          'အင်တာဗျူးတွင် public demo ကို နောက်ပိုင်း ထုတ်ရန် ရည်ရွယ်ထားကြောင်းလည်း ပါသည်။ သို့သော် release date၊ Steam access page၊ duration၊ multiplayer capacity နှင့် region restriction မရှိသေးပါ။ Plan သည် ပြောင်းနိုင်သောကြောင့် [[/my/dear-passengers-news/|သတင်းစာမျက်နှာ]] တွင် announcement တစ်ခုချင်းစီကို ရက်နှင့် source ဖြင့် မှတ်တမ်းတင်သည်။',
        ],
      },
      {
        id: 'safe-access',
        kicker: 'လုံခြုံသော ACCESS',
        heading: 'Dear Passengers beta သို့မဟုတ် demo အစစ်ကို ဘယ်လိုစစ်မလဲ',
        paragraphs: [
          'Steam app ID 4534960 ၏ တရားဝင်စာမျက်နှာကို အရင်ဖွင့်ပါ။ Demo ရှိလာပါက store page သို့မဟုတ် FLEXUS announcement မှ တိုက်ရိုက်ချိတ်ဆက်သင့်သည်။ File-sharing site၊ APK page၊ crack forum သို့မဟုတ် social comment မှ executable ကို မယုံသင့်ပါ။',
          'Wishlist ထည့်ခြင်းသည် အခမဲ့ဖြစ်ပြီး file မဒေါင်းပါ။ Steam Playtest ရှိလာပါက “Request Access” ပေါ်နိုင်သော်လည်း ယခုမရှိသေးပါ။ [[/my/dear-passengers-download/|လုံခြုံသော download လမ်းညွှန်]] သည် domain၊ installer နှင့် platform claim ကို စစ်ဆေးရန် သီးခြားရှင်းပြထားသည်။',
        ],
      },
    ],
    localContext: [
      'မြန်မာနိုင်ငံ GSC တွင် `Dear Passengers demo`၊ `download`၊ `free download` နှင့် `APK` ဆိုင်ရာ query များ ပေါ်လာသည်။ Demo intent နှင့် full-game download intent ကို ခွဲထားခြင်းက သုံးစွဲသူကို မမှားစေဘဲ malware risk ကို လျှော့ချပေးသည်။',
      '“Demo”၊ “beta” နှင့် “Playtest” သည် တစ်ခုတည်းမဟုတ်ပါ။ Demo သည် public sample ဖြစ်နိုင်ပြီး beta သည် testing stage ဖြစ်နိုင်ကာ Steam Playtest သည် platform access mechanism တစ်ခု ဖြစ်သည်။',
      'မြန်မာဘာသာဖြင့် လမ်းညွှန်ရှိခြင်းသည် region-specific beta သို့မဟုတ် Myanmar server ရှိကြောင်း မဆိုလိုပါ။ Region policy ကို FLEXUS က မကြေညာသေးပါ။',
    ],
    faqs: [
      { question: 'Dear Passengers demo ရှိပြီလား', answer: 'Public demo သို့မဟုတ် Steam Playtest မရှိသေးပါ။' },
      { question: 'Steam မှာ demo download လုပ်လို့ရလား', answer: 'မရသေးပါ။ Steam page တွင် demo button သို့မဟုတ် Playtest panel မရှိပါ။' },
      { question: 'Demo ဘယ်တော့ထွက်မလဲ', answer: 'ရက်မကြေညာသေးပါ။' },
      { question: 'Beta signup ရှိလား', answer: 'တရားဝင် signup သို့မဟုတ် key distribution မရှိသေးပါ။' },
      { question: 'Gamescom မှာ Dear Passengers ကို ကစားလို့ရလား', answer: 'FLEXUS ပါဝင်မှုကို အတည်ပြုနိုင်သော်လည်း Dear Passengers build ပြသမှုနှင့် public hands-on ကို မအတည်ပြုသေးပါ။' },
      { question: 'Demo file ကို ဘယ်မှာရှာရမလဲ', answer: 'Steam နှင့် FLEXUS channel ကိုသာ စောင့်ကြည့်ပါ။ Third-party installer မသုံးပါနှင့်။' },
    ],
    related: ['dear-passengers-download', 'dear-passengers-release-date', 'dear-passengers-news', 'dear-passengers-gameplay'],
  },
  {
    slug: 'dear-passengers-download',
    englishPath: '/dear-passengers-download/',
    keyword: 'Dear Passengers ဒေါင်းနည်း',
    title: 'Dear Passengers ဒေါင်းနည်း၊ APK နှင့် လုံခြုံသော Download',
    description: 'Dear Passengers ဒေါင်းနည်းကို လုံခြုံစွာရှင်းပြထားသည်။ Full game မထွက်သေးခြင်း၊ Steam wishlist၊ APK၊ crack၊ torrent နှင့် installer အန္တရာယ်များ။',
    eyebrow: 'DOWNLOAD လုံခြုံရေး · မြန်မာဘာသာ',
    h1: 'Dear Passengers ကို ဘယ်လိုဒေါင်းလုဒ်လုပ်ရမလဲ',
    intro: 'Dear Passengers ဒေါင်းနည်းသည် မြန်မာနိုင်ငံမှ တကယ်ပေါ်လာသော search query ဖြစ်သော်လည်း full game ကို ယခု download လုပ်၍ မရသေးပါ။ တရားဝင် Steam page တွင် wishlist သာရှိပြီး purchase၊ install၊ preload သို့မဟုတ် public demo button မရှိပါ။ Android APK၊ cracked installer နှင့် torrent claim များသည် တရားဝင် platform နှင့် မကိုက်ညီပါ။',
    answer: 'Dear Passengers ကို လက်ရှိ download လုပ်၍မရသေးပါ။ ဂိမ်းကို Windows PC အတွက် Steam တွင် 2026 ဖြန့်ချိရန် စီစဉ်ထားပြီး ယခုလုပ်နိုင်သည့် တရားဝင်အရာမှာ wishlist ထည့်ခြင်းဖြစ်သည်။ Android APK၊ mobile build၊ crack၊ torrent၊ free installer သို့မဟုတ် direct download link ကို FLEXUS က မထုတ်ပြန်ထားပါ။',
    note: 'ဤစာမျက်နှာသည် file၊ key သို့မဟုတ် installer မပေးပါ။ Official source မရှိသော download claim ကို ဖြန့်ချိမှုအဖြစ် မပြဘဲ device နှင့် account လုံခြုံရေးကို ဦးစားပေးသည်။',
    heroImage: '/images/dear-passengers-download-safety.webp',
    heroAlt: 'Dear Passengers ဒေါင်းနည်းနှင့် installer လုံခြုံရေးကို ရှင်းပြသည့် မူရင်းသရုပ်ဖော်ပုံ',
    confirmed: ['Steam wishlist ရရှိနိုင်ခြင်း', 'Windows PC သည် အတည်ပြုထားသော platform', '2026 release window', 'Full game နှင့် public demo download မရှိသေးခြင်း'],
    unknown: ['Launch price', 'Preload ရက်', 'Demo distribution', 'DRM နှင့် installer size အပြည့်အစုံ'],
    sections: [
      {
        id: 'not-available',
        kicker: 'လက်ရှိမရနိုင်သေးပါ',
        heading: 'Dear Passengers download ဘာကြောင့် မရသေးတာလဲ',
        paragraphs: [
          'Dear Passengers သည် pre-release product ဖြစ်သည်။ Steam page တွင် Add to your wishlist ကိုသာ ပြသပြီး Buy၊ Install၊ Preload သို့မဟုတ် Download Demo မရှိပါ။ Wishlist ထည့်ခြင်းက Steam account ထဲတွင် စိတ်ဝင်စားမှုကို မှတ်တမ်းတင်ပြီး launch notification ရနိုင်သော်လည်း file တစ်ခုကို device ထဲ မသွင်းပါ။',
          'FLEXUS သည် 2026 window ကို ထားရှိသော်လည်း exact date မရှိသေးပါ။ ထို့ကြောင့် “Dear Passengers free download now” ဟု ဆိုသော page သို့မဟုတ် video သည် official release status နှင့် ဆန့်ကျင်သည်။ [[/my/dear-passengers-release-date/|ဖြန့်ချိမည့်ရက် လမ်းညွှန်]] တွင် purchase နှင့် preload အခြေအနေကို ထိန်းထားသည်။',
        ],
      },
      {
        id: 'apk-mobile',
        kicker: 'APK နှင့် MOBILE',
        heading: 'Dear Passengers APK သို့မဟုတ် Android version ရှိလား',
        paragraphs: [
          'မရှိသေးပါ။ Dear Passengers ကို Windows PC အတွက်သာ အတည်ပြုထားသည်။ Android၊ iPhone သို့မဟုတ် mobile store version မကြေညာသေးပါ။ APK file သည် Steam Windows build မဟုတ်သဖြင့် brand name တူရုံဖြင့် official game မဖြစ်နိုင်ပါ။',
          'APK နှင့် mod APK page များသည် အခြား app ကို ပြန်လည်အမည်ပေးထားခြင်း၊ adware၊ credential theft သို့မဟုတ် malware ဖြစ်နိုင်သည်။ Steam login ကို third-party form ထဲ မထည့်ပါနှင့်။ FLEXUS channel မှ မချိတ်ထားသော QR code၊ shortened link နှင့် cloud drive ကိုလည်း မယုံသင့်ပါ။',
        ],
      },
      {
        id: 'safe-check',
        kicker: 'လုံခြုံစွာစစ်ဆေးခြင်း',
        heading: 'Dear Passengers အစစ်ကို ဘယ်လိုသိနိုင်မလဲ',
        paragraphs: [
          'Steam URL တွင် app ID 4534960 နှင့် developer/publisher FLEXUS ကို စစ်ပါ။ Release အပြီး install လုပ်သည့်အခါ Steam client library မှသာ စတင်ပါ။ Search ad သို့မဟုတ် copycat domain မှ installer ကို မဖွင့်ပါနှင့်။ File တစ်ခု အမြန်ရခြင်းထက် account နှင့် device ကို ကာကွယ်ခြင်းက ပိုအရေးကြီးသည်။',
          'Public demo ရှိလာပါက Steam page သို့မဟုတ် FLEXUS announcement က တိုက်ရိုက်ချိတ်ဆက်သင့်သည်။ [[/my/dear-passengers-demo/|Demo tracker]] သည် planned build နှင့် available download ကို သီးခြားခွဲထားသည်။ Price မသိသေးသောကြောင့် free၊ paid သို့မဟုတ် subscription ဟု မခန့်မှန်းပါ။',
        ],
      },
    ],
    localContext: [
      'GSC တွင် မြန်မာနိုင်ငံမှ `Dear Passengers ဒေါင်းနည်း` ကို တိုက်ရိုက်တွေ့ရပြီး English query များဖြစ်သည့် download၊ game download၊ free download နှင့် APK လည်းရှိသည်။ ထို့ကြောင့် local wording ကို title နှင့် H1 တွင် ထည့်ထားသည်။',
      '“ဒေါင်းနည်း” သည် colloquial search term ဖြစ်ပြီး “ဒေါင်းလုဒ်လုပ်နည်း” သည် ပိုတိကျသော ရေးသားပုံဖြစ်သည်။ နှစ်မျိုးစလုံးကို စာတစ်မျက်နှာထဲ သဘာဝကျကျ အသုံးပြုထားသည်။',
      'Download intent ကို misleading button ဖြင့် monetise မလုပ်ပါ။ လက်ရှိ CTA သည် Steam wishlist ဖြစ်ပြီး “Download now” ဟု မပြပါ။',
    ],
    faqs: [
      { question: 'Dear Passengers ကို အခုဒေါင်းလို့ရလား', answer: 'မရသေးပါ။ Full game နှင့် public demo နှစ်မျိုးစလုံး မရရှိသေးပါ။' },
      { question: 'Dear Passengers APK ရှိလား', answer: 'မရှိပါ။ Android version ကို မကြေညာသေးပါ။' },
      { question: 'Free download လုပ်လို့ရလား', answer: 'Free သို့မဟုတ် paid model မကြေညာသေးပြီး official download မရှိပါ။' },
      { question: 'Torrent သို့မဟုတ် crack အစစ်ရှိလား', answer: 'Unreleased game အတွက် ထို claim များကို မယုံသင့်ပါ။' },
      { question: 'Steam wishlist က download လား', answer: 'မဟုတ်ပါ။ Notification အတွက် စာရင်းသွင်းခြင်းသာ ဖြစ်သည်။' },
      { question: 'Demo ထွက်ရင် ဘယ်မှာရမလဲ', answer: 'Steam သို့မဟုတ် FLEXUS တရားဝင် channel မှသာ ရယူပါ။' },
    ],
    related: ['dear-passengers-demo', 'dear-passengers-release-date', 'dear-passengers-system-requirements', 'dear-passengers-news'],
  },
  {
    slug: 'dear-passengers-system-requirements',
    englishPath: '/dear-passengers-system-requirements/',
    keyword: 'Dear Passengers စနစ်လိုအပ်ချက်များ',
    title: 'Dear Passengers စနစ်လိုအပ်ချက်များနှင့် PC Specs',
    description: 'Dear Passengers စနစ်လိုအပ်ချက်များ၊ Windows 10၊ i5၊ 8 GB RAM၊ GTX 1060၊ RX 6600 XT၊ DirectX 12 နှင့် 4 GB storage ကို မြန်မာဘာသာဖြင့်ရှင်းပြထားသည်။',
    eyebrow: 'PC SPECS · STEAM အတည်ပြုချက်',
    h1: 'Dear Passengers အတွက် PC စနစ်လိုအပ်ချက်များ',
    intro: 'Dear Passengers စနစ်လိုအပ်ချက်များကို Steam က minimum specs အဖြစ် ထုတ်ပြန်ထားသည်။ Windows 10 64-bit၊ Intel Core i5 2.5 GHz သို့မဟုတ် equivalent၊ RAM 8 GB၊ GTX 1060 သို့မဟုတ် RX 6600 XT၊ DirectX 12 နှင့် available storage 4 GB လိုအပ်သည်။ Recommended specs၊ performance target နှင့် laptop benchmark ကို မကြေညာသေးပါ။',
    answer: 'Dear Passengers minimum PC requirements သည် Windows 10 64-bit၊ Intel Core i5 2.5 GHz သို့မဟုတ် equivalent processor၊ 8 GB RAM၊ NVIDIA GTX 1060 သို့မဟုတ် AMD RX 6600 XT၊ DirectX 12 နှင့် 4 GB available storage ဖြစ်သည်။ Recommended requirements၊ FPS၊ resolution၊ SSD requirement၊ controller နှင့် Steam Deck status ကို မဖော်ပြထားပါ။',
    note: 'ဤဇယားသည် Steam ၏ minimum field ကို တိတိကျကျ ပြန်ဆိုထားသည်။ Hardware တစ်စိတ်တစ်ပိုင်း တူရုံဖြင့် FPS သို့မဟုတ် quality preset ကို အာမခံမပေးပါ။',
    heroImage: '/images/release-date.webp',
    heroAlt: 'Dear Passengers PC စနစ်လိုအပ်ချက်များ လမ်းညွှန်အတွက် လေယာဉ်ပုံ',
    confirmed: ['Windows 10 64-bit', 'Intel Core i5 2.5 GHz သို့မဟုတ် equivalent', '8 GB RAM', 'GTX 1060 သို့မဟုတ် RX 6600 XT', 'DirectX 12 နှင့် 4 GB storage'],
    unknown: ['Recommended specs', 'FPS နှင့် resolution target', 'SSD requirement', 'Steam Deck၊ controller၊ Mac နှင့် Linux'],
    sections: [
      {
        id: 'minimum',
        kicker: 'MINIMUM SPECS',
        heading: 'Dear Passengers minimum requirement တစ်ခုချင်းစီက ဘာဆိုလိုသလဲ',
        paragraphs: [
          'Steam သည် 64-bit Windows 10 ကို လိုအပ်သည်ဟု ဖော်ပြထားသည်။ Windows 11 သည် compatible ဖြစ်နိုင်သော်လည်း product page က သီးခြား promise မပေးပါ။ Mac၊ Linux နှင့် ChromeOS ကို မဖော်ပြသဖြင့် compatibility layer သို့မဟုတ် virtual machine ဖြင့် အလုပ်လုပ်မည်ဟု မဆိုနိုင်ပါ။',
          'Processor field သည် Intel Core i5 2.5 GHz သို့မဟုတ် equivalent ဟုသာ ရေးထားပြီး generation နှင့် core count မရှိပါ။ GPU field တွင် GTX 1060 နှင့် RX 6600 XT ကို တွဲဖော်ပြထားသော်လည်း VRAM၊ graphics preset၊ ray tracing သို့မဟုတ် upscaling support မပါပါ။',
        ],
        bullets: ['Operating system: Windows 10 64-bit', 'CPU: Intel Core i5 2.5 GHz သို့မဟုတ် equivalent', 'Memory: 8 GB RAM', 'Graphics: GTX 1060 သို့မဟုတ် RX 6600 XT', 'DirectX: Version 12', 'Storage: 4 GB available space'],
      },
      {
        id: 'performance',
        kicker: 'PERFORMANCE မသိရသေးပါ',
        heading: 'Laptop သို့မဟုတ် low-end PC မှာ Dear Passengers ကစားနိုင်မလား',
        paragraphs: [
          'Minimum list ကို ပြည့်မီခြင်းသည် ဂိမ်းစတင်နိုင်မည့် အနည်းဆုံး target ကို ရည်ညွှန်းနိုင်သော်လည်း 60 FPS၊ 1080p သို့မဟုတ် high settings ကို အာမခံမပေးပါ။ Dear Passengers မထွက်သေးသဖြင့် independent benchmark၊ frame-time test သို့မဟုတ် driver comparison မရှိပါ။',
          'Laptop GPU အမည်သည် desktop card နှင့် တူသော်လည်း power limit နှင့် cooling ကြောင့် performance ကွာနိုင်သည်။ Integrated graphics၊ 4 GB RAM သို့မဟုတ် DirectX 11-only device ကို supported ဟု မပြောနိုင်ပါ။ Release နီးလာချိန်တွင် recommended specs ထပ်ထည့်နိုင်သဖြင့် Steam ကို ပြန်စစ်သင့်သည်။',
        ],
      },
      {
        id: 'storage-controls',
        kicker: 'STORAGE နှင့် CONTROL',
        heading: '4 GB ဆိုတာ download size လား၊ controller ပါလား',
        paragraphs: [
          'Steam သည် 4 GB available space ဟု ရေးထားသည်။ ဤတန်ဖိုးသည် installed space field ဖြစ်ပြီး compressed download size၊ patch size သို့မဟုတ် launch-day total ကို မသက်သေပြပါ။ Update နှင့် temporary files အတွက် ပိုမိုလွတ်လပ်သောနေရာထားခြင်းက သင့်တော်သော်လည်း တိကျသောအပိုပမာဏကို မသတ်မှတ်နိုင်ပါ။',
          'Controller support၊ keyboard layout၊ key rebinding၊ accessibility setting၊ ultrawide နှင့် Steam Deck verification ကို မကြေညာသေးပါ။ [[/my/dear-passengers-gameplay/|Dear Passengers ကစားနည်း လမ်းညွှန်]] တွင် control ကို trailer ကနေ မခန့်မှန်းရသည့် အကြောင်းရှင်းပြထားသည်။',
        ],
      },
    ],
    localContext: [
      'မြန်မာနိုင်ငံမှ GSC တွင် `Dear Passengers game system requirements` query ပေါ်လာသည်။ “စနစ်လိုအပ်ချက်များ” နှင့် “PC specs” နှစ်မျိုးလုံးကို စာမျက်နှာတစ်ခုတည်းတွင် ထည့်ထားသည်။',
      'GPU နာမည်များကို ဘာသာမပြန်ဘဲ official model အတိုင်း ထားသည်။ “GTX 1060 သို့မဟုတ် RX 6600 XT” ကို performance တူညီကြောင်း အဓိပ္ပာယ်မဖွင့်ဘဲ Steam field အဖြစ်သာ ဖော်ပြသည်။',
      'Internet speed နှင့် Myanmar server မရှိခြင်းကြောင့် online co-op quality ကို မခန့်မှန်းပါ။ Network requirement ကို Steam က မဖော်ပြသေးပါ။',
    ],
    faqs: [
      { question: 'Dear Passengers RAM ဘယ်လောက်လိုလဲ', answer: 'Minimum 8 GB RAM လိုအပ်သည်။' },
      { question: 'GPU ဘာလိုလဲ', answer: 'Steam က GTX 1060 သို့မဟုတ် RX 6600 XT ကို ဖော်ပြထားသည်။' },
      { question: 'Storage ဘယ်လောက်လိုလဲ', answer: '4 GB available space ဟု ဖော်ပြထားသော်လည်း final download size မဟုတ်နိုင်ပါ။' },
      { question: 'Windows 11 ရလား', answer: 'Windows 10 64-bit ကိုသာ တိတိကျကျ ဖော်ပြထားပြီး Windows 11 အကြောင်း သီးခြားမပြောထားပါ။' },
      { question: 'Laptop မှာကစားလို့ရလား', answer: 'Hardware က minimum ကို ပြည့်မီရမည်။ Laptop-specific benchmark မရှိသေးပါ။' },
      { question: 'Recommended specs ရှိလား', answer: 'မရှိသေးပါ။ Steam တွင် minimum list သာရှိသည်။' },
    ],
    related: ['dear-passengers-gameplay', 'dear-passengers-download', 'dear-passengers-release-date', 'dear-passengers-confirmed-features'],
  },
  {
    slug: 'dear-passengers-trailer',
    englishPath: '/dear-passengers-trailer/',
    keyword: 'Dear Passengers trailer',
    title: 'Dear Passengers Trailer အပြည့်အစုံ၊ Scene နှင့် အတည်ပြုချက်',
    description: 'Dear Passengers official trailer နှင့် Another Friendslop Game teaser ကို မြန်မာဘာသာဖြင့် ခွဲခြမ်းထားသည်။ မြင်ရသည့် scene၊ official text နှင့် မသိရသေးသော feature များ။',
    eyebrow: 'တရားဝင်ဗီဒီယို · SCENE ANALYSIS',
    h1: 'Dear Passengers official trailer မှာ ဘာတွေပြထားသလဲ',
    intro: 'Dear Passengers announcement trailer သည် cockpit၊ cabin service၊ cargo၊ turbulence၊ bird strike နှင့် ရှုပ်ထွေးသော physics scene များကို လျင်မြန်စွာ ပြသထားသည်။ 37-second “Another Friendslop Game” teaser က ထိုအယူအဆကို ပြန်လည်တင်ပြသော်လည်း release date၊ player limit၊ price သို့မဟုတ် playable demo အသစ် မကြေညာပါ။',
    answer: 'Dear Passengers trailer တွင် first-person pilot၊ cabin crew၊ ခရီးသည်ဝန်ဆောင်မှု၊ အန္တရာယ်ရှိနိုင်သော cargo၊ ရာသီဥတု၊ turbulence နှင့် ပစ္စည်းများ လွင့်ပျံသည့် physics ကို မြင်ရသည်။ ဤ scene များသည် visual observation ဖြစ်ပြီး mission frequency၊ random event system၊ weapon list၊ character class သို့မဟုတ် final progression ကို မသက်သေပြပါ။',
    note: 'ဗီဒီယိုတွင် မြင်ရသည့်အရာ၊ description မှ ရေးထားသည့်အရာနှင့် သုံးသပ်သူ၏ inference ကို သီးခြားခွဲထားသည်။ Edited footage သည် finished build specification မဟုတ်ပါ။',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers official trailer ခွဲခြမ်းချက်အတွက် လေယာဉ် cabin scene',
    confirmed: ['Official announcement trailer ရှိခြင်း', 'Pilot နှင့် cabin scene များ', 'Cargo၊ passenger service နှင့် turbulence', '37-second follow-up teaser'],
    unknown: ['Scene တစ်ခုစီ၏ mission frequency', 'Playable action အားလုံး', 'Final UI နှင့် controls', 'Trailer build နှင့် launch build ကွာခြားမှု'],
    sections: [
      {
        id: 'announcement',
        kicker: 'ANNOUNCEMENT TRAILER',
        heading: 'Dear Passengers trailer ၏ အဓိက scene များ',
        paragraphs: [
          'Trailer သည် first-person cockpit မှ လေယာဉ်ကို ထိန်းချုပ်နေသည့် scene နှင့် cabin အတွင်း ခရီးသည်များကို ဝန်ဆောင်မှုပေးနေသည့် scene ကို အပြန်အလှန်ပြထားသည်။ Cargo၊ အိတ်နှင့် လူများသည် လှုပ်ရှားမှုနှင့် turbulence ကြောင့် ရွေ့နိုင်သည်။ ဒီ visual များသည် Steam ၏ physics-based passengers၊ cargo နှင့် cabin chaos ဖော်ပြချက်နှင့် ကိုက်ညီသည်။',
          'Bird strike၊ လေယာဉ်အစိတ်အပိုင်းပျက်စီးခြင်း၊ တံခါးနှင့် အရေးပေါ်အခြေအနေများကိုလည်း မြင်ရသည်။ သို့သော် scene တစ်ခုမြင်ရခြင်းက အမြဲတမ်း event၊ random encounter၊ player-triggered action သို့မဟုတ် mission objective ဖြစ်ကြောင်း မဆိုနိုင်ပါ။',
        ],
      },
      {
        id: 'teaser',
        kicker: 'FOLLOW-UP TEASER',
        heading: '“Another Friendslop Game” ဗီဒီယိုက အသစ်ဘာပြောသလဲ',
        paragraphs: [
          'FLEXUS သည် ဇူလိုင် 22 ရက်တွင် 37-second “Another Friendslop Game” teaser ကို ထုတ်ပြန်ခဲ့သည်။ Description တွင် Dear Passengers သည် Steam wishlist နှစ်သန်းနီးပါး ရောက်နေကြောင်း ပြောထားသည်။ “Close to” သည် နှစ်သန်းကျော်ပြီးဟု မဆိုလိုသလို wishlist သည် sale သို့မဟုတ် active player မဟုတ်ပါ။',
          'Teaser သည် co-op chaos နှင့် social comedy ပုံစံကို အလေးထားသော်လည်း exact date၊ price၊ public demo၊ console version၊ player cap သို့မဟုတ် new system ကို မကြေညာပါ။ ဗီဒီယိုတိုတစ်ခုကို page အသစ်များစွာအဖြစ် ခွဲမပြုဘဲ trailer intent တစ်ခုတည်းတွင် ထိန်းထားသည်။',
        ],
      },
      {
        id: 'interpretation',
        kicker: 'မြင်ရသည်နှင့် အတည်ပြုသည်',
        heading: 'Trailer ကနေ ဘာကို မခန့်မှန်းသင့်သလဲ',
        paragraphs: [
          'တစ်စုံတစ်ရာကို ကိုင်ထားသောဇာတ်ကောင်ကို မြင်ရခြင်းက item crafting၊ inventory၊ combat class သို့မဟုတ် weapon progression ကို မသက်သေပြပါ။ Cabin ထဲက တိရစ္ဆာန်၊ အန္တရာယ်ရှိသောခရီးသည် သို့မဟုတ် ပေါက်ကွဲမှုသည် final content list မဟုတ်ပါ။',
          'Dear Passengers feature ကို အတည်ပြုရန် Steam text၊ FLEXUS statement နှင့် official visual ကို အတူကြည့်ရသည်။ [[/my/dear-passengers-confirmed-features/|အတည်ပြုထားသော feature စာမျက်နှာ]] သည် explicit text ကို ဦးစားပေးပြီး visual-only observation ကို label တပ်ထားသည်။',
        ],
      },
    ],
    localContext: [
      'မြန်မာဂိမ်းရှာဖွေမှုတွင် “trailer” ကို အင်္ဂလိပ်လိုပင် အသုံးများပြီး “နောက်တွဲဗီဒီယို” ဟုလည်း ရေးနိုင်သည်။ Brand query နှင့်လိုက်ဖက်ရန် title တွင် trailer ကို ထားထားသည်။',
      'Video reaction နှင့် short clip များက discovery ကို ကူညီနိုင်သော်လည်း reupload တစ်ခုသည် FLEXUS announcement အသစ် မဟုတ်ပါ။ Source channel နှင့် upload description ကို စစ်ဆေးသည်။',
      'Trailer controversy သို့မဟုတ် community debate ကို game mechanic၊ sales data သို့မဟုတ် release timing အဖြစ် မပြောင်းပါ။ အချက်အလက်အမျိုးအစားတိုင်းကို သီးခြားထားသည်။',
    ],
    faqs: [
      { question: 'Dear Passengers official trailer ရှိလား', answer: 'ရှိသည်။ FLEXUS announcement trailer နှင့် follow-up teaser ရှိသည်။' },
      { question: 'Trailer မှာ gameplay အစစ်လား', answer: 'ဂိမ်း scene များကို ပြသထားသော်လည်း edit လုပ်ထားသည့် footage က final system အားလုံးကို မရှင်းပြပါ။' },
      { question: 'Teaser က wishlist နှစ်သန်းရပြီလို့ပြောလား', answer: 'မပြောပါ။ နှစ်သန်းနီးပါးဟုသာ ဖော်ပြသည်။' },
      { question: 'Trailer က player count ပြောလား', answer: 'မပြောပါ။ မြင်ရသည့် character count ကို lobby limit မယူနိုင်ပါ။' },
      { question: 'Release date ပါလား', answer: '2026 window အပြင် exact date မပါပါ။' },
      { question: 'ဗီဒီယိုထဲက event အားလုံး playable လား', answer: 'မသိရသေးပါ။ Scene သည် system frequency သို့မဟုတ် control ကို မသက်သေပြပါ။' },
    ],
    related: ['dear-passengers-confirmed-features', 'dear-passengers-gameplay', 'dear-passengers-news', 'dear-passengers-roles'],
  },
  {
    slug: 'dear-passengers-news',
    englishPath: '/dear-passengers-news/',
    modifiedDate: '2026-08-29',
    verifiedDate: '2026 ဩဂုတ် 29 ရက်',
    keyword: 'Dear Passengers သတင်း',
    title: 'Dear Passengers နောက်ဆုံးသတင်း၊ Wishlist နှင့် Release Update',
    description: 'Dear Passengers နောက်ဆုံးသတင်းကို မြန်မာဘာသာဖြင့် စစ်ဆေးထားသည်။ Steam wishlist rank၊ developer milestone၊ demo plan၊ release window နှင့် မကြေညာသေးသည့်အချက်များ။',
    eyebrow: 'သတင်းမှတ်တမ်း · SOURCE ပါရှိသည်',
    h1: 'Dear Passengers နောက်ဆုံးသတင်းနှင့် တရားဝင် update များ',
    intro: 'Dear Passengers သတင်းကို မတူညီသောအချက်အလက်အမျိုးအစားဖြင့် မှတ်တမ်းတင်ရသည်။ Steam public wishlist rank သည် ပြောင်းလဲနိုင်သော snapshot ဖြစ်ပြီး FLEXUS ၏ wishlist total သည် developer-reported figure ဖြစ်သည်။ နှစ်ခုလုံးကို sale၊ download သို့မဟုတ် active player အဖြစ် မရေးပါ။',
    answer: '2026 ဩဂုတ် 29 ရက် preference-neutral Steam Top Wishlists snapshot တွင် Dear Passengers သည် No. 4 ဖြစ်သည်။ Dear Passengers အတွက် နောက်ဆုံး Steam news သည် ဇူလိုင် 31 ရက် FLEXUS post ဖြစ်ပြီး wishlist နှစ်သန်းရောက်ကြောင်းနှင့် gameplay video ပြင်ဆင်နေကြောင်း ဖော်ပြသည်။ နှစ်သန်းသည် developer-reported wishlist ဖြစ်ပြီး sale သို့မဟုတ် active player မဟုတ်ပါ။',
    note: 'Top Wishlists rank ကို preference filtering မပါသည့် dated snapshot အဖြစ်သာ မှတ်တမ်းတင်သည်။ FLEXUS ၏ နှစ်သန်း figure သည် independent audit မဟုတ်သလို sales၊ downloads သို့မဟုတ် players ကို မဆိုလိုပါ။',
    heroImage: '/images/dear-passengers-1-5-million-wishlists.webp',
    heroAlt: 'Dear Passengers wishlist milestone အဟောင်းအတွက် FLEXUS ၏ တရားဝင်အနုပညာပုံ',
    confirmed: ['Steam Top Wishlists No. 4 snapshot on August 29', 'FLEXUS က July 31 တွင် wishlist နှစ်သန်းဟု ထုတ်ပြန်ခြင်း', 'FLEXUS ၏ Gamescom 2026 ပါဝင်မှု', '2026 Windows release window'],
    unknown: ['လက်ရှိ independently audited wishlist total', 'Sale၊ revenue နှင့် active players', 'Dear Passengers Gamescom build သို့မဟုတ် public hands-on', 'Exact release date၊ price နှင့် public demo date'],
    sections: [
      {
        id: 'latest',
        kicker: 'နောက်ဆုံးစစ်ဆေးချက်',
        heading: 'Dear Passengers အတွက် အသစ်ဆုံး အတည်ပြုထားသော update ကဘာလဲ',
        paragraphs: [
          'ဩဂုတ် 29 ရက်တွင် Steam public Top Wishlists page ကို preference filtering မပါဘဲ စစ်ဆေးရာ Dear Passengers သည် No. 4 ဖြစ်သည်။ Rank သည် အခြားမထွက်သေးသော game များနှင့် wishlist activity ပြောင်းသလို ပြောင်းနိုင်သဖြင့် ယနေ့ snapshot ကို အမြဲတမ်းအဆင့်အဖြစ် မရေးပါ။',
          'Rank ပြောင်းခြင်းသည် product feature announcement မဟုတ်ပါ။ Steam store page တွင် release window၊ platform၊ play mode၊ language နှင့် minimum requirements မပြောင်းပါ။ ထို့ကြောင့် rank ကို news snapshot အဖြစ် သတ်မှတ်ပြီး gameplay၊ player count သို့မဟုတ် release date proof အဖြစ် မသုံးပါ။',
        ],
      },
      {
        id: 'milestones',
        kicker: 'WISHLIST MILESTONE',
        heading: 'Dear Passengers wishlist ဘယ်လောက်ရှိသလဲ',
        paragraphs: [
          'FLEXUS က ဇူလိုင် 15 ရက်တွင် 700,000၊ ဇူလိုင် 17 ရက်တွင် one million နှင့် ဇူလိုင် 19 ရက်တွင် 1.5 million wishlist ရောက်ကြောင်း Steam announcement များတွင် ပြောခဲ့သည်။ ထို့နောက် ဇူလိုင် 31 ရက် Dear Passengers-specific Steam news တွင် wishlist နှစ်သန်းရောက်ပြီဟု developer က ထုတ်ပြန်ခဲ့သည်။',
          'နှစ်သန်းကို studio statement အဖြစ် attribution ထည့်ထားပြီး independent audited total ဟု မဆိုပါ။ Wishlist သည် ဝယ်ယူမှုမဟုတ်သဖြင့် two million players၊ sales၊ downloads သို့မဟုတ် concurrent users ဟုလည်း မပြောင်းရေးရပါ။',
        ],
      },
      {
        id: 'watch-next',
        kicker: 'နောက်ထပ်စောင့်ကြည့်ရန်',
        heading: 'ဘယ် update တွေက Dear Passengers စာမျက်နှာကို တကယ်ပြောင်းစေမလဲ',
        paragraphs: [
          'Exact launch date၊ price၊ public demo access၊ player cap၊ console announcement၊ recommended requirements သို့မဟုတ် new language table သည် product page များကို update လုပ်ရန် အရေးပါသော primary-source event ဖြစ်သည်။ Rank တစ်နေရာပြောင်းခြင်းကို အခြေခံ၍ homepage copy နှင့် feature claim မပြောင်းပါ။',
          'FLEXUS ၏ Gamescom 2026 ပါဝင်မှုကို အတည်ပြုနိုင်သော်လည်း Dear Passengers build ကို ပြသခဲ့ခြင်း သို့မဟုတ် public hands-on ကစားခွင့်ရှိခြင်းကို မအတည်ပြုသေးပါ။ [[/my/dear-passengers-demo/|Demo အခြေအနေစာမျက်နှာ]] သည် studio attendance၊ planned build နှင့် available public demo ကို မရောစပ်ပါ။',
        ],
      },
    ],
    localContext: [
      'မြန်မာစာတွင် “သတင်း”၊ “နောက်ဆုံး update” နှင့် “အသစ်ဘာရှိလဲ” သည် freshness intent ဖြစ်သည်။ Rolling news hub တစ်ခုတည်းထားခြင်းက ပါးလွှာသောနေ့စဉ် post များနှင့် duplicate timeline ကို ရှောင်ရှားစေသည်။',
      'Wishlist အတွက် “လိုချင်စာရင်း” ဟု ဘာသာပြန်နိုင်သော်လည်း မြန်မာဂိမ်းအသိုင်းအဝိုင်းတွင် wishlist ကို အင်္ဂလိပ်လို အသုံးများသည်။ အဓိပ္ပာယ်ကို ပထမဆုံးအသုံးပြုချိန်တွင် ရှင်းပြထားသည်။',
      'Rank၊ total နှင့် players သုံးခုကို မတူသည့် metric အဖြစ် ထိန်းထားသည်။ မြန်မာဘာသာဖြင့် ရှင်းလင်းမှုက viral number ကို မမှန်ကန်စွာ ချဲ့ထွင်ခြင်းထက် ပိုတန်ဖိုးရှိသည်။',
    ],
    faqs: [
      { question: 'Dear Passengers နောက်ဆုံး update ကဘာလဲ', answer: 'နောက်ဆုံး game-specific Steam news သည် July 31 post ဖြစ်ပြီး FLEXUS က wishlist နှစ်သန်းနှင့် gameplay video ပြင်ဆင်မှုကို ဖော်ပြထားသည်။' },
      { question: 'Wishlist နှစ်သန်းရောက်ပြီလား', answer: 'FLEXUS က ဇူလိုင် 31 ရက်တွင် နှစ်သန်းရောက်ကြောင်း ပြောထားသည်။ ၎င်းသည် developer-reported figure ဖြစ်သည်။' },
      { question: 'Wishlist နှစ်သန်းဆိုတာ players နှစ်သန်းလား', answer: 'မဟုတ်ပါ။ Wishlist သည် sale၊ download၊ active player သို့မဟုတ် concurrent user မဟုတ်ပါ။' },
      { question: 'Release date အသစ်ရှိလား', answer: 'မရှိပါ။ 2026 window သာရှိသည်။' },
      { question: 'Gamescom မှာ game ကို public စမ်းကစားနိုင်လား', answer: 'FLEXUS ပါဝင်မှုကို အတည်ပြုနိုင်သော်လည်း Dear Passengers build နှင့် public hands-on ကို မအတည်ပြုသေးပါ။' },
      { question: 'ဘယ် source ကို ယုံရမလဲ', answer: 'Steam store၊ Steam announcements နှင့် FLEXUS တရားဝင် channel ကို ဦးစားပေးပါ။' },
    ],
    related: ['dear-passengers-release-date', 'dear-passengers-demo', 'dear-passengers-trailer', 'dear-passengers-developer-flexus'],
  },
  {
    slug: 'dear-passengers-confirmed-features',
    englishPath: '/dear-passengers-confirmed-features/',
    keyword: 'Dear Passengers အတည်ပြု feature များ',
    title: 'Dear Passengers အတည်ပြု Feature များနှင့် မသိရသေးသောအချက်များ',
    description: 'Dear Passengers အတည်ပြု feature များ၊ solo၊ online co-op၊ pilot၊ cabin၊ cargo၊ physics၊ weather နှင့် မကြေညာသေးသည့် progression၊ crossplay အချက်များ။',
    eyebrow: 'FEATURE LEDGER · အထောက်အထားပါရှိသည်',
    h1: 'Dear Passengers မှာ ဘယ် feature တွေ အတည်ပြုထားသလဲ',
    intro: 'Dear Passengers feature အကြောင်း ရှာဖွေရာတွင် Steam text၊ official trailer observation နှင့် community guess တို့ ရောထွေးလေ့ရှိသည်။ ဤစာမျက်နှာသည် single-player၊ online co-op၊ pilot၊ cabin work၊ passenger၊ cargo၊ physics နှင့် dynamic weather ကို confirmed အဖြစ်သာ တင်ပြပြီး မပြောရသေးသည့် system များကို unknown အဖြစ်ထားသည်။',
    answer: 'Dear Passengers အတွက် အတည်ပြုထားသည့် အဓိက feature များမှာ Single-player၊ Online Co-op၊ လေယာဉ်မောင်းခြင်း၊ cabin အတွင်းအလုပ်လုပ်ခြင်း၊ ခရီးသည်နှင့် ကုန်ပစ္စည်းရွေးချယ်ခြင်း၊ physics-based chaos၊ dynamic weather၊ turbulence နှင့် air pocket များ ဖြစ်သည်။ Player cap၊ progression၊ campaign၊ crossplay၊ controller၊ console နှင့် monetisation ကို မကြေညာသေးပါ။',
    note: 'Feature ကို “confirmed” ဟု သတ်မှတ်ရန် Steam text သို့မဟုတ် FLEXUS ၏ တိကျသောစာကြောင်းလိုသည်။ Trailer-only item ကို observation ဟုသာ ဖော်ပြသည်။',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers အတည်ပြု feature များအတွက် cockpit နှင့် cabin မူရင်းအယ်ဒီတာသရုပ်ဖော်ပုံ',
    confirmed: ['Single-player နှင့် online co-op', 'Pilot နှင့် cabin work', 'Passenger နှင့် cargo risk/reward', 'Physics၊ weather၊ turbulence နှင့် air pockets'],
    unknown: ['Campaign နှင့် progression', 'Player limit နှင့် server structure', 'Controller၊ Deck နှင့် accessibility', 'Console၊ crossplay၊ price နှင့် DLC'],
    sections: [
      {
        id: 'core-loop',
        kicker: 'CORE LOOP',
        heading: 'Dear Passengers ၏ အတည်ပြုထားသော flight loop',
        paragraphs: [
          'လေယာဉ်မထွက်မီ crew သည် ခရီးသည်နှင့် cargo ကို ရွေးသည်။ ပိုများသော payout ရနိုင်သည့် passenger သို့မဟုတ် cargo က ပိုမိုခက်ခဲသော ပြဿနာပါလာနိုင်သည်။ ဒီ risk/reward ပုံစံကို Steam က တိုက်ရိုက်ဖော်ပြထားသော်လည်း contract menu၊ economy depth နှင့် money usage ကို မရှင်းပြသေးပါ။',
          'ခရီးစဉ်အတွင်း တစ်ဦးက pilot လုပ်နိုင်ပြီး အခြားသူများက cabin ကို အတူထိန်းသည်။ Food နှင့် drink ပေးခြင်း၊ cargo ကာကွယ်ခြင်းနှင့် ပြဿနာတစ်ခု ကြီးမားမသွားမီ ဖြေရှင်းခြင်းတို့ ပါဝင်သည်။ [[/my/dear-passengers-gameplay/|ကစားနည်းစာမျက်နှာ]] သည် အဆင့်လိုက် loop ကို ပိုမိုရှင်းပြထားသည်။',
        ],
      },
      {
        id: 'physics-weather',
        kicker: 'PHYSICS နှင့် WEATHER',
        heading: 'Physics-based chaos က ဘာကို အတည်ပြုသလဲ',
        paragraphs: [
          'Steam သည် passengers၊ cargo နှင့် cabin objects များကို physics-based ဟု ဖော်ပြထားသည်။ Turbulence နှင့် air pockets များက လူ၊ အိတ်နှင့် လွတ်နေသည့်ပစ္စည်းများကို ရွေ့စေနိုင်သည်။ Dynamic weather သည် flight ကို ရှုပ်ထွေးစေသည်။',
          'ဤအချက်က အရာဝတ္ထုအားလုံးကို ကောက်ယူနိုင်သည်၊ destruction အားလုံး persistent ဖြစ်သည် သို့မဟုတ် incident အားလုံး procedurally generated ဖြစ်သည်ဟု မဆိုလိုပါ။ Physics descriptor ကို specific crafting၊ damage သို့မဟုတ် roguelike system အဖြစ် မချဲ့ထွင်ပါ။',
        ],
      },
      {
        id: 'not-confirmed',
        kicker: 'မကြေညာသေးပါ',
        heading: 'Dear Passengers အတွက် ဘာတွေကို feature အဖြစ် မပြောသင့်သလဲ',
        paragraphs: [
          'Maximum player count၊ local co-op၊ split screen၊ crossplay၊ public matchmaking၊ proximity chat နှင့် dedicated servers ကို မကြေညာသေးပါ။ Popular tag သို့မဟုတ် curator note တစ်ခုသည် developer specification မဟုတ်ပါ။',
          'Campaign length၊ skill tree၊ permanent upgrades၊ character classes၊ controller support၊ Steam Deck rating၊ console port၊ mobile version၊ price၊ DLC နှင့် battle pass တို့လည်း unknown ဖြစ်သည်။ ဒီအချက်များထဲက တစ်ခုကို FLEXUS အတည်ပြုမှသာ သက်ဆိုင်ရာစာမျက်နှာနှင့် hreflang version အားလုံးကို update မည်။',
        ],
      },
    ],
    localContext: [
      '“Feature” ကို မြန်မာဂိမ်းစာရေးရာတွင် အင်္ဂလိပ်လို အသုံးများသော်လည်း “လုပ်ဆောင်ချက်” နှင့် “အင်္ဂါရပ်” ကိုလည်း နားလည်လွယ်အောင် ပေါင်းသုံးထားသည်။',
      'Search result များတွင် trailer scene ကို final mechanic အဖြစ် ရေးထားသည့် page များရှိသည်။ ဤစာမျက်နှာက explicit source၊ observation နှင့် unknown ကို ခွဲထားခြင်းဖြင့် သီးခြားတန်ဖိုးပေးသည်။',
      'Feature list ကို release၊ player count နှင့် gameplay page များနှင့် semantic link ချိတ်ထားသော်လည်း keyword ownership မရောစပ်ပါ။ ဒီ URL သည် evidence ledger ဖြစ်သည်။',
    ],
    faqs: [
      { question: 'Dear Passengers မှာ co-op ပါလား', answer: 'ပါသည်။ Online co-op နှင့် single-player ကို Steam က အတည်ပြုထားသည်။' },
      { question: 'လေယာဉ်မောင်းလို့ရလား', answer: 'ရသည်။ Pilot role ကို တရားဝင်ဖော်ပြထားသည်။' },
      { question: 'Weather system ပါလား', answer: 'Dynamic weather၊ turbulence နှင့် air pockets ကို အတည်ပြုထားသည်။' },
      { question: 'Progression သို့မဟုတ် upgrade ပါလား', answer: 'မကြေညာသေးပါ။' },
      { question: 'Voice chat ပါလား', answer: 'Built-in voice chat ကို မအတည်ပြုသေးပါ။' },
      { question: 'Console version ပါလား', answer: 'မကြေညာသေးပါ။ Windows PC သာ အတည်ပြုထားသည်။' },
    ],
    related: ['dear-passengers-gameplay', 'dear-passengers-trailer', 'dear-passengers-roles', 'dear-passengers-player-count'],
  },
  {
    slug: 'dear-passengers-roles',
    englishPath: '/dear-passengers-roles/',
    keyword: 'Dear Passengers role များ',
    title: 'Dear Passengers Role များ၊ Pilot နှင့် Cabin Crew တာဝန်',
    description: 'Dear Passengers role များကို နှိုင်းယှဉ်ထားသည်။ Pilot၊ cabin crew၊ passenger service၊ cargo၊ weather နှင့် အတည်မပြုသေးသော class စနစ်များ။',
    eyebrow: 'CREW ROLE · တာဝန်ခွဲခြင်း',
    h1: 'Dear Passengers မှာ pilot နဲ့ cabin crew ဘာတွေလုပ်ရသလဲ',
    intro: 'Dear Passengers role များကို permanent character class အဖြစ် မကြေညာသေးပါ။ တရားဝင်ဖော်ပြချက်က တစ်ဦးသည် လေယာဉ်မောင်းနိုင်ပြီး အခြား crew များသည် cabin ကို ထိန်းသိမ်း၊ ခရီးသည်ကို ဝန်ဆောင်မှုပေး၊ cargo ကို ကာကွယ်ပြီး incident များကို ဖြေရှင်းကြောင်းသာ အတည်ပြုသည်။',
    answer: 'Dear Passengers တွင် အတည်ပြုထားသော တာဝန်အုပ်စုနှစ်ခုမှာ pilot နှင့် cabin work ဖြစ်သည်။ Pilot က လေယာဉ်နှင့် weather ကို ကိုင်တွယ်ပြီး cabin crew က passenger service၊ cargo protection နှင့် onboard emergency များကို ထိန်းသည်။ Permanent class၊ role lock၊ skill tree၊ character ability နှင့် preferred team composition ကို မကြေညာသေးပါ။',
    note: '“Role” ကို gameplay responsibility အဖြစ် အသုံးပြုထားသည်။ FLEXUS က class selection သို့မဟုတ် locked profession ကို မဖော်ပြမချင်း class guide အဖြစ် မတင်ပြပါ။',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers pilot နှင့် cabin crew role များကို ပြသသည့် မူရင်းအယ်ဒီတာသရုပ်ဖော်ပုံ',
    confirmed: ['Pilot တာဝန်', 'Cabin service နှင့် passenger control', 'Cargo protection', 'Weather နှင့် incident response'],
    unknown: ['Permanent class နှင့် role lock', 'Character ability နှင့် progression', 'Role switching rules', 'အကောင်းဆုံး crew composition'],
    sections: [
      {
        id: 'pilot',
        kicker: 'PILOT',
        heading: 'Dear Passengers pilot က ဘာလုပ်ရသလဲ',
        paragraphs: [
          'Pilot သည် cockpit မှ လေယာဉ်ကို မောင်းနှင်ပြီး dynamic weather၊ turbulence နှင့် air pocket များကို ကိုင်တွယ်ရသည်။ Trailer တွင် first-person control နှင့် bird strike လို incident များကို မြင်ရသည်။ သို့သော် realistic avionics၊ flight plan၊ fuel management၊ ATC သို့မဟုတ် landing procedure အားလုံးကို မကြေညာသေးပါ။',
          'Pilot ၏ လှည့်ကွေ့မှုက cabin ထဲရှိ လူနှင့်ပစ္စည်းများကို ရွေ့စေနိုင်သဖြင့် cockpit သည် သီးခြား mini-game မဟုတ်ဘဲ crew အားလုံး၏ အလုပ်ကို သက်ရောက်စေသည်။ ဒီအပြန်အလှန်မှုက Dear Passengers co-op identity ၏ အဓိကအစိတ်အပိုင်းဖြစ်သည်။',
        ],
      },
      {
        id: 'cabin',
        kicker: 'CABIN CREW',
        heading: 'Cabin crew က ခရီးသည်နှင့် cargo ကို ဘယ်လိုထိန်းသလဲ',
        paragraphs: [
          'Cabin crew သည် အစားအသောက်နှင့် အဖျော်ယမကာပေးခြင်း၊ ခရီးသည်များကို ထိန်းခြင်း၊ အိတ်နှင့် cargo ကို လုံခြုံစေခြင်းနှင့် incident မကြီးမားမီ ဖြေရှင်းခြင်းတို့ကို လုပ်သည်။ Passenger type၊ mood meter၊ service score နှင့် item inventory အသေးစိတ်ကို မထုတ်ပြန်သေးပါ။',
          'Cargo သည် payout နှင့် risk နှစ်ခုလုံးကို သက်ရောက်နိုင်သည်။ အန္တရာယ်ရှိသော cargo သို့မဟုတ် ခက်ခဲသော passenger ကို လက်ခံခြင်းသည် ပိုများသော reward ရနိုင်သော်လည်း flight ကို ပိုရှုပ်စေနိုင်သည်။ [[/my/dear-passengers-confirmed-features/|Feature ledger]] တွင် explicit mechanic များကို စုစည်းထားသည်။',
        ],
      },
      {
        id: 'switching',
        kicker: 'ROLE SWITCHING',
        heading: 'ပွဲအတွင်း role ပြောင်းလို့ရလား',
        paragraphs: [
          'FLEXUS က permanent class သို့မဟုတ် role selection screen ကို မပြောသေးပါ။ ကစားသမားများ cockpit နှင့် cabin ကြား လွတ်လပ်စွာပြောင်းနိုင်မလား၊ pilot lock ရှိမလား၊ respawn နောက် role ပြောင်းမလား မသိရသေးပါ။ Trailer movement ကို rule အဖြစ် မယူပါ။',
          'Solo mode အတွက် role switching သည် အထူးအရေးကြီးသော်လည်း implementation မသိရသေးပါ။ AI crew၊ station swapping သို့မဟုတ် simplified objective တစ်ခုခု ဖြစ်နိုင်သော်လည်း အားလုံးသည် inference သာဖြစ်သည်။ [[/my/dear-passengers-player-count/|Player count စာမျက်နှာ]] သည် solo နှင့် co-op အတည်ပြုချက်ကို ထိန်းထားသည်။',
        ],
      },
    ],
    localContext: [
      '“Role”၊ “တာဝန်” နှင့် “အခန်းကဏ္ဍ” သုံးမျိုးစလုံး နားလည်နိုင်သော်လည်း မြန်မာဂိမ်းအသိုင်းအဝိုင်းတွင် role ကို အင်္ဂလိပ်လို အသုံးများသည်။ Title တွင် နှစ်မျိုးပေါင်းထားသည်။',
      'Pilot နှင့် cabin crew ကို class ဟု မခေါ်ဘဲ responsibility ဟု ရှင်းပြခြင်းက မကြေညာသေးသော skill tree နှင့် locked profession ကို ရှောင်ရှားသည်။',
      'Player cap မသိသေးသဖြင့် “အကောင်းဆုံးအဖွဲ့ဖွဲ့စည်းပုံ” ကို မပေးပါ။ ကစားသမားအရေအတွက် ထုတ်ပြန်ပြီးမှ role allocation ကို အသစ်သုံးသပ်နိုင်မည်။',
    ],
    faqs: [
      { question: 'Dear Passengers မှာ ဘာ role တွေရှိလဲ', answer: 'Pilot နှင့် cabin work တာဝန်များကို အတည်ပြုထားသည်။ Permanent class list မရှိသေးပါ။' },
      { question: 'Pilot ကို လူတစ်ယောက်ပဲလုပ်ရလား', answer: 'တစ်ချိန်တည်း station rule နှင့် role switching ကို မကြေညာသေးပါ။' },
      { question: 'Cabin crew ဘာလုပ်ရလဲ', answer: 'Passenger service၊ cargo protection နှင့် onboard incident response လုပ်ရသည်။' },
      { question: 'Role ပြောင်းလို့ရလား', answer: 'မသိရသေးပါ။' },
      { question: 'Class ability ပါလား', answer: 'Character class နှင့် ability system ကို မကြေညာသေးပါ။' },
      { question: 'Solo mode မှာ role တွေဘယ်လိုလုပ်မလဲ', answer: 'Single-player ရှိသော်လည်း station management ပုံစံ မသိရသေးပါ။' },
    ],
    related: ['dear-passengers-gameplay', 'dear-passengers-player-count', 'dear-passengers-confirmed-features', 'dear-passengers-trailer', 'games-like-dear-passengers'],
  },
  {
    slug: 'dear-passengers-developer-flexus',
    englishPath: '/dear-passengers-developer-flexus/',
    keyword: 'Dear Passengers developer FLEXUS',
    title: 'Dear Passengers Developer FLEXUS၊ Studio နှင့် Demo အစီအစဉ်',
    description: 'Dear Passengers developer FLEXUS အကြောင်း၊ developer/publisher အခန်းကဏ္ဍ၊ studio background၊ wishlist statement၊ demo plan နှင့် မသိရသေးသော production အချက်များ။',
    eyebrow: 'DEVELOPER PROFILE · SOURCE ပါရှိသည်',
    h1: 'Dear Passengers ကို ဘယ် developer က ဖန်တီးသလဲ',
    intro: 'Dear Passengers ကို FLEXUS က ဖန်တီးပြီး publisher အဖြစ်လည်း ဆောင်ရွက်သည်ဟု Steam က ဖော်ပြထားသည်။ Studio background၊ wishlist milestone နှင့် demo plan များကို FLEXUS ၏ ကိုယ်ပိုင်ဖော်ပြချက် သို့မဟုတ် တိုက်ရိုက်အင်တာဗျူးအဖြစ် attribution ထည့်ရသည်။ Team size၊ budget၊ engine နှင့် launch partnership ကို မကြေညာသေးပါ။',
    answer: 'Dear Passengers ၏ developer နှင့် publisher သည် FLEXUS ဖြစ်သည်။ FLEXUS သည် Kyiv အခြေစိုက် studio ဟု ကိုယ်တိုင်ဖော်ပြပြီး mobile game များမှ PC co-op project သို့ တိုးချဲ့နေသည်။ Studio က wishlist milestone များ၊ Gamescom build နှင့် နောက်ပိုင်း public demo အစီအစဉ်ကို ပြောထားသော်လည်း exact release date၊ budget၊ engine၊ final team size နှင့် console partner ကို မကြေညာသေးပါ။',
    note: 'Company size၊ download history နှင့် wishlist total များသည် FLEXUS ၏ ကိုယ်ပိုင်ဖော်ပြချက်ဖြစ်သည်။ Sale၊ revenue သို့မဟုတ် independent audit အဖြစ် မရေးပါ။',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers developer FLEXUS profile အတွက် cabin မူရင်းအယ်ဒီတာသရုပ်ဖော်ပုံ',
    confirmed: ['Developer နှင့် publisher သည် FLEXUS', '2026 Windows Steam project', 'Gamescom build နှင့် public demo plan ကို အင်တာဗျူးတွင် ပြောထားခြင်း', 'Wishlist milestone announcement များ'],
    unknown: ['Game engine', 'Budget နှင့် final team size', 'Console partner', 'Exact launch schedule'],
    sections: [
      {
        id: 'identity',
        kicker: 'STUDIO IDENTITY',
        heading: 'FLEXUS က Dear Passengers တွင် ဘာတာဝန်ယူထားသလဲ',
        paragraphs: [
          'Steam store page တွင် developer နှင့် publisher နှစ်ခုစလုံးအတွက် FLEXUS ဟု ရေးထားသည်။ ထို့ကြောင့် Dear Passengers product identity၊ release information နှင့် official communication အတွက် FLEXUS-controlled channel ကို primary source အဖြစ် သတ်မှတ်နိုင်သည်။ DearPassengers.net သည် FLEXUS နှင့် မသက်ဆိုင်သော independent guide ဖြစ်သည်။',
          'FLEXUS သည် Kyiv အခြေစိုက် studio ဖြစ်ပြီး 2020 စတင်ခဲ့ကြောင်း၊ ဝန်ထမ်း 70 ကျော်နှင့် mobile download သန်း 300 ကျော်ရှိကြောင်း ကိုယ်တိုင်ဖော်ပြထားသည်။ ဒီနံပါတ်များကို audited financial data မဟုတ်ဘဲ company profile claim အဖြစ်သာ တင်ပြသည်။',
        ],
      },
      {
        id: 'pc-project',
        kicker: 'PC CO-OP PROJECT',
        heading: 'Mobile background က Dear Passengers platform ကို သက်သေပြလား',
        paragraphs: [
          'Studio ၏ ယခင် mobile work သည် Dear Passengers Android သို့မဟုတ် iOS version ကို မသက်သေပြပါ။ လက်ရှိ Dear Passengers product page သည် Windows PC ကိုသာ ဖော်ပြသည်။ Company portfolio တစ်ခုနှင့် product platform တစ်ခုကို သီးခြားစစ်ရသည်။',
          'Dear Passengers သည် pilot၊ cabin service၊ passenger၊ cargo၊ physics နှင့် online co-op ကို အဓိကထားသော PC project ဖြစ်သည်။ Engine၊ middleware၊ network provider နှင့် console porting plan ကို FLEXUS က မကြေညာသေးပါ။',
        ],
      },
      {
        id: 'claims-plans',
        kicker: 'MILESTONE နှင့် PLAN',
        heading: 'FLEXUS က wishlist နှင့် demo အကြောင်း ဘာပြောထားသလဲ',
        paragraphs: [
          'FLEXUS သည် 700,000၊ one million နှင့် 1.5 million wishlist milestone များကို ထုတ်ပြန်ခဲ့ပြီး teaser description တွင် two million နီးပါးဟု ပြောခဲ့သည်။ Wishlist သည် interest signal ဖြစ်ပြီး player၊ sale သို့မဟုတ် revenue မဟုတ်ပါ။ [[/my/dear-passengers-news/|Dear Passengers သတင်းမှတ်တမ်း]] တွင် ရက်နှင့် source ကို ထည့်ထားသည်။',
          'Co-founder အင်တာဗျူးတွင် Gamescom build ပြင်ဆင်ပြီး နောက်ပိုင်း public demo ထုတ်ရန် ရည်ရွယ်ကြောင်း ပါသည်။ Plan သည် available product မဟုတ်သဖြင့် demo date၊ distribution နှင့် content ကို unknown အဖြစ်ထားသည်။',
        ],
      },
    ],
    localContext: [
      '“Developer” ကို မြန်မာစာတွင် “ဂိမ်းဖန်တီးသူ” ဟု ရှင်းပြနိုင်သော်လည်း studio profile query တွင် FLEXUS နှင့် developer ကို တွဲရှာကြသည်။ Brand entity ကို မပြောင်းဘဲ နှစ်မျိုးစလုံး အသုံးပြုထားသည်။',
      'Myanmar mobile audience များသောကြောင့် studio ၏ mobile history ကို Android confirmation အဖြစ် မှားယူနိုင်သည်။ ဤစာမျက်နှာက company history နှင့် Dear Passengers platform ကို ရှင်းလင်းစွာ ခွဲထားသည်။',
      'Company claim အားလုံးကို source type ဖြင့် label တပ်ထားသည်။ “FLEXUS က ပြောသည်” နှင့် “လွတ်လပ်စွာ စစ်ဆေးထားသည်” ကို မတူညီသော အထောက်အထားအဆင့်အဖြစ် ထားသည်။',
    ],
    faqs: [
      { question: 'Dear Passengers ကို ဘယ်သူဖန်တီးသလဲ', answer: 'FLEXUS က developer နှင့် publisher နှစ်ခုစလုံး ဖြစ်သည်။' },
      { question: 'FLEXUS က ဘယ်နိုင်ငံကလဲ', answer: 'Studio က Kyiv အခြေစိုက်ဖြစ်ကြောင်း ကိုယ်တိုင်ဖော်ပြထားသည်။' },
      { question: 'Dear Passengers က FLEXUS ရဲ့ ပထမ PC game လား', answer: 'PC co-op project အသစ်ဖြစ်သော်လည်း “ပထမ” ဟု တရားဝင်အတည်ပြုရန် full catalogue ကို စစ်ရမည်။' },
      { question: 'Mobile version ထွက်မလား', answer: 'မကြေညာသေးပါ။ Mobile history သည် Android version proof မဟုတ်ပါ။' },
      { question: 'FLEXUS က demo ထုတ်မလား', answer: 'Gamescom build နှင့် နောက်ပိုင်း public demo ကို စီစဉ်ထားကြောင်း ပြောထားသည်။' },
      { question: 'Game engine ဘာသုံးလဲ', answer: 'မကြေညာသေးပါ။' },
    ],
    related: ['dear-passengers-news', 'dear-passengers-demo', 'dear-passengers-release-date', 'dear-passengers-confirmed-features'],
  },
  {
    slug: 'games-like-dear-passengers',
    englishPath: '/games-like-dear-passengers/',
    keyword: 'Dear Passengers နှင့်ဆင်တူသောဂိမ်းများ',
    title: 'Dear Passengers နှင့်ဆင်တူသော Co-op ဂိမ်းများ',
    description: 'Dear Passengers နှင့်ဆင်တူသောဂိမ်းများကို physics၊ teamwork၊ risk၊ cabin service နှင့် flight coordination အရ နှိုင်းယှဉ်ထားသည်။',
    eyebrow: 'ဆင်တူဂိမ်း · MECHANIC အလိုက်',
    h1: 'Dear Passengers စောင့်နေချိန် ဘယ် co-op ဂိမ်းတွေကစားသင့်လဲ',
    intro: 'Dear Passengers မထွက်သေးသဖြင့် အခြားဂိမ်းနှင့် အပြည့်အဝတူသည်ဟု မဆိုနိုင်ပါ။ R.E.P.O. သည် physics နှင့် teamwork ကြောင့် နီးစပ်ပြီး Lethal Company သည် risk နှင့် communication ကြောင့် ဆင်တူသည်။ Overcooked! 2 သည် service task ခွဲခြင်း၊ Sky Team သည် cockpit coordination အပိုင်းတွင် သက်ဆိုင်သည်။',
    answer: 'Dear Passengers နှင့် အချို့အချက်များဆင်တူသောဂိမ်းများမှာ physics teamwork အတွက် R.E.P.O.၊ group risk အတွက် Lethal Company၊ pressure အောက် service task အတွက် Overcooked! 2 နှင့် two-player cockpit coordination အတွက် Sky Team ဖြစ်သည်။ Dear Passengers ၏ pilot၊ cabin၊ passenger နှင့် cargo ပေါင်းစပ်မှုကို တစ်ခုတည်းသောဂိမ်းက အတိအကျ မတူပါ။',
    note: 'Dear Passengers public build မရှိသေးသဖြင့် hands-on quality၊ difficulty၊ duration သို့မဟုတ် final replayability ကို မနှိုင်းယှဉ်ပါ။ Official concept များကိုသာ axis အဖြစ် သုံးသည်။',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers နှင့်ဆင်တူသော co-op ဂိမ်းများ လမ်းညွှန်အတွက် cabin ပုံ',
    confirmed: ['Online co-op', 'Passenger နှင့် object physics', 'တစ်ပြိုင်နက် တာဝန်များ', 'Risk အတွက် reward ပိုများခြင်း'],
    unknown: ['Final pace နှင့် difficulty', 'Progression နှင့် replayability', 'Maximum player count', 'Price နှင့် public reception'],
    sections: [
      {
        id: 'criteria',
        kicker: 'နှိုင်းယှဉ်မှု စံနှုန်း',
        heading: 'ဂိမ်းတစ်ခုကို Dear Passengers နဲ့ ဆင်တူတယ်လို့ ဘယ်လိုသတ်မှတ်သလဲ',
        paragraphs: [
          'အတည်ပြုထားသော axis လေးခုကို သုံးသည်။ Online coordination၊ physical objects၊ လေယာဉ်၏ မတူညီသောနေရာများတွင် တာဝန်ခွဲခြင်းနှင့် risk/reward ရွေးချယ်မှုတို့ ဖြစ်သည်။ လေယာဉ်ပါရုံဖြင့် မလုံလောက်သလို co-op ဖြစ်ရုံဖြင့်လည်း မတူပါ။',
          'Dear Passengers public demo မရှိသေးသဖြင့် duration၊ difficulty၊ progression၊ control feel နှင့် replayability ကို မနှိုင်းယှဉ်နိုင်ပါ။ Playable version ထွက်လာပါက ဘာကို တကယ်စမ်းသပ်ခဲ့သည်၊ ဘယ် build ဖြစ်သည်ကို မှတ်တမ်းတင်ပြီး methodology ကို ပြန်စစ်မည်။',
        ],
      },
      {
        id: 'physics-risk',
        kicker: 'PHYSICS နှင့် RISK',
        heading: 'R.E.P.O. နှင့် Lethal Company က Dear Passengers နဲ့ ဘယ်လိုဆင်တူလဲ',
        paragraphs: [
          'R.E.P.O. သည် physical object handling နှင့် အဖွဲ့ဝင်အမှားများကြောင့် အတူရှုပ်ထွေးသည့်အပိုင်းတွင် သက်ဆိုင်သည်။ Lethal Company သည် group objective၊ risk နှင့် communication အတွက် နီးစပ်သည်။ သို့သော် နှစ်ခုလုံးတွင် airline passenger service နှင့် cockpit pilot တာဝန် မရှိပါ။',
          '“Friendslop” ဟူသော social label သည် သူငယ်ချင်းများနှင့် ရယ်မောစရာ chaos ကို ရှင်းပြနိုင်သော်လည်း genre၊ system နှင့် player capacity အားလုံးကို တူညီစေမည်မဟုတ်ပါ။ Dear Passengers ကို Steam က Action၊ Adventure နှင့် Indie အဖြစ် ဖော်ပြသည်။',
        ],
      },
      {
        id: 'service-flight',
        kicker: 'SERVICE နှင့် FLIGHT',
        heading: 'Overcooked! 2 နှင့် Sky Team က ဘာတူသလဲ',
        paragraphs: [
          'Overcooked! 2 သည် နေရာကျဉ်းထဲတွင် service task များကို အချိန်ဖိအားအောက် ခွဲယူလုပ်ရသည့်အပိုင်းတွင် ဆင်တူသည်။ သို့သော် လေယာဉ်မောင်းခြင်း၊ passenger physics နှင့် cargo risk မပါပါ။ Cabin service အပိုင်းစိတ်ဝင်စားသော အဖွဲ့အတွက် သက်ဆိုင်သောရွေးချယ်မှု ဖြစ်သည်။',
          'Sky Team သည် လူနှစ်ယောက် cockpit coordination ကို အဓိကထားသည့် board game ဖြစ်ပြီး real-time PC co-op မဟုတ်ပါ။ Physics chaos အတွက် R.E.P.O.၊ risk communication အတွက် Lethal Company၊ service အတွက် Overcooked! 2 ကို ကြည့်နိုင်သည်။ ဈေးနှုန်း၊ platform နှင့် language support ကို သက်ဆိုင်ရာ official store တွင် စစ်ရမည်။',
        ],
      },
    ],
    localContext: [
      '“ဆင်တူသောဂိမ်း”၊ “games like” နှင့် “alternative” သည် discovery intent ဖြစ်သည်။ “တိတိကျကျတူသည်” ဟု မပြောဘဲ mechanic တစ်ခုချင်းအလိုက် ဆင်တူမှုကို ဖော်ပြသည်။',
      'မြန်မာနိုင်ငံတွင် PC hardware နှင့် regional pricing က ဝယ်ယူဆုံးဖြတ်ချက်ကို သက်ရောက်နိုင်သော်လည်း အခြားဂိမ်းများ၏ လက်ရှိဈေးကို static article ထဲ မကူးပါ။ Official store ကို ညွှန်ပြသည်။',
      'Dear Passengers ကို ကိုယ်တိုင်ကစားဖူးသလို မရေးပါ။ Public build မရှိသေးသဖြင့် comparison သည် official premise နှင့် published mechanics အပေါ်သာ အခြေခံသည်။',
    ],
    faqs: [
      { question: 'Dear Passengers နဲ့ ဘယ်ဂိမ်းတွေ ဆင်တူလဲ', answer: 'R.E.P.O.၊ Lethal Company၊ Overcooked! 2 နှင့် Sky Team တို့သည် အချက်ကွဲများတွင် ဆင်တူသည်။' },
      { question: 'Lethal Company နဲ့တူလား', answer: 'Co-op risk နှင့် communication တူသော်လည်း theme နှင့် task မတူပါ။' },
      { question: 'Horror game လား', answer: 'Steam က horror အဖြစ် မသတ်မှတ်ထားဘဲ comedy chaos ကို အဓိကပြသည်။' },
      { question: 'လေယာဉ် co-op အခြားဂိမ်းရှိလား', answer: 'Sky Team သည် cockpit coordination ရှိသော်လည်း board game ဖြစ်သည်။' },
      { question: 'စောင့်နေချိန် ဘာကစားသင့်လဲ', answer: 'Physics အတွက် R.E.P.O.၊ risk အတွက် Lethal Company သို့မဟုတ် service အတွက် Overcooked! 2 ကို ကြည့်နိုင်သည်။' },
      { question: 'ဒီဂိမ်းတွေ မြန်မာစာပါလား', answer: 'Language support က game တစ်ခုစီကွာသဖြင့် official store table ကို စစ်ပါ။' },
    ],
    related: ['dear-passengers-gameplay', 'dear-passengers-confirmed-features', 'dear-passengers-player-count', 'dear-passengers-release-date'],
  },
];

export const myanmarHomeGuide: MyanmarGuide = {
  slug: '',
  englishPath: '/',
  keyword: 'Dear Passengers ဂိမ်း',
  title: 'Dear Passengers ဂိမ်း မြန်မာဘာသာ လမ်းညွှန်',
  description: 'Dear Passengers ဂိမ်းအတွက် မြန်မာဘာသာလမ်းညွှန်။ ကစားနည်း၊ ထွက်မည့်ရက်၊ demo၊ PC specs၊ ကစားသမားအရေအတွက်၊ download၊ trailer နှင့် သတင်းများ။',
  eyebrow: 'မြန်မာဘာသာလမ်းညွှန် · 30/07/2026 စစ်ဆေးပြီး',
  h1: 'Dear Passengers ဂိမ်းအကြောင်း အတည်ပြုထားသော မြန်မာဘာသာလမ်းညွှန်',
  intro: 'Dear Passengers ဂိမ်းသည် ကမ္ဘာ့အဆိုးဆုံး airline ၏ crew အဖြစ် ကစားရသည့် physics-based co-op game ဖြစ်သည်။ တစ်ဦးက pilot လုပ်နေချိန် အခြားသူများက cabin၊ passenger နှင့် cargo ကို ထိန်းသိမ်းကြသည်။ ဤကဏ္ဍသည် စက်ဘာသာပြန်ထားသော homepage တစ်ခုမဟုတ်ဘဲ မြန်မာနိုင်ငံမှ GSC query ဖြစ်သည့် “Dear Passengers ဒေါင်းနည်း”၊ game၊ release date၊ download၊ system requirements နှင့် gameplay tips တို့ကို သီးခြား search intent အဖြစ် ဖွဲ့စည်းထားသည်။',
  answer: 'Dear Passengers ဂိမ်းကို Windows PC အတွက် Steam တွင် 2026 ဖြန့်ချိရန် စီစဉ်ထားသည်။ Single-player၊ online co-op၊ pilot၊ cabin work၊ passenger၊ cargo၊ physics နှင့် dynamic weather ကို အတည်ပြုထားသည်။ Steam တွင် မြန်မာဘာသာ support မဖော်ပြထားပါ။ Exact date၊ price၊ maximum player count၊ console version နှင့် public demo date မသိရသေးပါ။',
  note: 'Steam၊ FLEXUS official video နှင့် direct interview ကို ဦးစားပေးသည်။ မြန်မာနိုင်ငံ search data သည် vocabulary နှင့် မေးခွန်းကို သိရန် ကူညီသော်လည်း date၊ price၊ player count သို့မဟုတ် language support ကို ဖန်တီးမပေးနိုင်ပါ။',
  heroImage: '/images/hero-bg.webp',
  heroAlt: 'Dear Passengers ဂိမ်း မြန်မာဘာသာလမ်းညွှန်အတွက် cabin မူရင်းအယ်ဒီတာသရုပ်ဖော်ပုံ',
  confirmed: ['2026 Windows release window', 'Single-player နှင့် online co-op', 'Pilot၊ cabin၊ passenger နှင့် cargo', 'Minimum PC requirements ထုတ်ပြန်ထားခြင်း', 'မြန်မာဘာသာကို game language အဖြစ် မဖော်ပြထားခြင်း'],
  unknown: ['Exact release date နှင့် ဒေသအလိုက်ဈေးနှုန်း', 'Maximum player count', 'Console နှင့် crossplay', 'Public demo ရက်', 'Recommended requirements'],
  sections: [
    {
      id: 'what-is-it',
      kicker: 'အမြန်အဖြေ',
      heading: 'Dear Passengers ဂိမ်းက ဘာဂိမ်းလဲ',
      paragraphs: [
        'Dear Passengers သည် FLEXUS က ဖန်တီးပြီး ဖြန့်ချိမည့် Action၊ Adventure နှင့် co-op ဂိမ်းဖြစ်သည်။ Crew သည် အားနည်းသောလေယာဉ်တစ်စီးဖြင့် passenger နှင့် cargo ကို destination ရောက်အောင် ပို့ရသည်။ တစ်ဦးက cockpit မှ pilot လုပ်နိုင်ပြီး အခြားသူများက cabin service၊ passenger control၊ cargo protection နှင့် incident response ကို လုပ်ကြသည်။',
        'Steam က Single-player နှင့် Online Co-op ကို အတည်ပြုထားသည်။ Passenger၊ အိတ်နှင့် လွတ်နေသော object များကို physics က သက်ရောက်စေပြီး weather၊ turbulence နှင့် air pocket များက flight ကို ရှုပ်ထွေးစေသည်။ Mission count၊ progression၊ controls၊ lobby capacity နှင့် game length ကို မကြေညာသေးပါ။',
      ],
    },
    {
      id: 'myanmar-demand',
      kicker: 'မြန်မာနိုင်ငံ SEARCH DEMAND',
      heading: 'မြန်မာကစားသမားတွေ Dear Passengers အကြောင်း ဘာရှာကြသလဲ',
      paragraphs: [
        'ဇူလိုင် 14 မှ 29 အထိ GSC data တွင် မြန်မာနိုင်ငံမှ DearPassengers.net ကို 985 impressions နှင့် 74 clicks ရရှိခဲ့သည်။ `Dear Passengers` သည် 446 impressions/48 clicks၊ `Dear Passengers game` သည် 379/10 ဖြစ်ပြီး download၊ game download၊ gameplay tips၊ release date၊ APK၊ demo၊ PS5 နှင့် system requirements query များလည်း ရှိသည်။',
        '`Dear Passengers ဒေါင်းနည်း` ဟူသော မြန်မာစာ query ကိုလည်း တိုက်ရိုက်တွေ့ရသည်။ ထို့ကြောင့် gameplay၊ player count၊ release၊ demo၊ download၊ requirements၊ trailer၊ news၊ confirmed features၊ roles၊ developer နှင့် similar games ကို သီးခြား URL များအဖြစ် တည်ဆောက်ထားပြီး page တစ်ခုတည်းကို keyword အားလုံးဖြင့် မပြည့်စေပါ။',
      ],
    },
    {
      id: 'product-status',
      kicker: 'PRODUCT STATUS',
      heading: 'Release၊ demo နှင့် မြန်မာဘာသာအခြေအနေ ဘာလဲ',
      paragraphs: [
        'Dear Passengers သည် pre-release stage တွင်ရှိပြီး 2026 window နှင့် Windows PC ကိုသာ အတည်ပြုထားသည်။ Price၊ exact day၊ preorder၊ purchase သို့မဟုတ် full-game download မရှိသေးပါ။ FLEXUS က Gamescom build နှင့် နောက်ပိုင်း public demo အကြောင်း ပြောထားသော်လည်း Steam တွင် demo သို့မဟုတ် Playtest access မရှိပါ။',
        'Steam language table သည် English၊ Arabic၊ Simplified Chinese၊ Turkish၊ Ukrainian နှင့် Japanese interface ကို ဖော်ပြထားပြီး မြန်မာဘာသာ မပါပါ။ ဤဝဘ်ဆိုက်က product ကို မြန်မာလိုရှင်းပြခြင်းသာဖြစ်ပြီး game menu၊ voice သို့မဟုတ် subtitle ကို မြန်မာလို ရရှိနိုင်ကြောင်း မဆိုပါ။',
      ],
    },
    {
      id: 'method',
      kicker: 'SOURCE နှင့် ပြင်ဆင်မှု',
      heading: 'Dear Passengers အချက်အလက်ကို ဘယ်လိုစစ်ဆေးသလဲ',
      paragraphs: [
        'Platform၊ play mode၊ language နှင့် hardware အတွက် Steam ကို primary source အဖြစ် သုံးသည်။ Official video သည် scene ကို သက်သေပြနိုင်သော်လည်း system အပြည့်အစုံကို မသက်သေပြပါ။ Direct interview သည် demo plan ကို context ပေးသော်လည်း planned ကို available ဟု မပြောင်းပါ။',
        'Confirmed၊ observed၊ planned နှင့် unknown ကို သီးခြား label တပ်သည်။ Exact date၊ price၊ player cap၊ console နှင့် မြန်မာဘာသာ support မရှိသေးလျှင် “မကြေညာသေး” ဟု ရေးခြင်းသည် မှန်ကန်သောအဖြေဖြစ်သည်။ Source ပြောင်းပါက သက်ဆိုင်ရာ page၊ hreflang alternate နှင့် sitemap date ကို အတူပြင်မည်။',
      ],
    },
  ],
  localContext: [
    'အဓိကအသုံးအနှုန်းသည် “Dear Passengers ဂိမ်း” ဖြစ်သည်။ Product name ကို အင်္ဂလိပ်လို ထိန်းထားပြီး “ဂိမ်း” ထည့်ခြင်းဖြင့် လေကြောင်းကြေညာချက်တွင် သုံးသည့် common phrase နှင့် မရောစပ်စေပါ။',
    'မြန်မာဂိမ်းစာတွင် gameplay၊ demo၊ download၊ PC specs နှင့် co-op ကို အင်္ဂလိပ်လို သုံးလေ့ရှိသည်။ Heading နှင့်အဖြေတွင် မြန်မာရှင်းလင်းချက်နှင့် တွဲသုံးထားသည်။',
    'လက်ရှိ CTA သည် Steam wishlist ဖြစ်သည်။ မရရှိသေးသော product အတွက် “ဝယ်ရန်”၊ “အခမဲ့ဒေါင်းရန်” သို့မဟုတ် “APK ရယူရန်” ဟု မပြပါ။',
  ],
  faqs: [
    { question: 'Dear Passengers ဘယ်တော့ထွက်မလဲ', answer: 'Windows PC အတွက် 2026 ဟုသာ အတည်ပြုထားပြီး လနှင့်ရက် မရှိသေးပါ။' },
    { question: 'Dear Passengers ကို မြန်မာလိုကစားလို့ရလား', answer: 'Steam တွင် မြန်မာဘာသာ interface၊ voice သို့မဟုတ် subtitle မဖော်ပြထားပါ။' },
    { question: 'လူဘယ်နှယောက်ကစားနိုင်သလဲ', answer: 'Maximum ကို မကြေညာသေးပါ။ Single-player နှင့် online co-op ကို အတည်ပြုထားသည်။' },
    { question: 'အခုဒေါင်းလို့ရလား', answer: 'မရသေးပါ။ Wishlist သာထည့်နိုင်သည်။' },
    { question: 'Demo ရှိလား', answer: 'Public demo ကို စီစဉ်ထားသော်လည်း access နှင့် date မရှိသေးပါ။' },
    { question: 'Minimum PC specs ဘာလဲ', answer: 'Windows 10 64-bit၊ i5 2.5 GHz၊ 8 GB RAM၊ GTX 1060 သို့မဟုတ် RX 6600 XT၊ DirectX 12 နှင့် 4 GB storage ဖြစ်သည်။' },
  ],
  related: ['dear-passengers-gameplay', 'dear-passengers-release-date', 'dear-passengers-player-count', 'dear-passengers-system-requirements'],
};

export const myanmarGuideBySlug = new Map(myanmarGuides.map((guide) => [guide.slug, guide]));
export const myanmarGuideByEnglishPath = new Map(myanmarGuides.map((guide) => [guide.englishPath, guide]));
