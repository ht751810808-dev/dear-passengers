export type CzechFaq = { question: string; answer: string };
export type CzechSection = { id: string; kicker: string; heading: string; paragraphs: string[]; bullets?: string[] };
export type CzechGuide = {
  slug: string;
  englishPath?: string;
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
  sections: CzechSection[];
  localContext: string[];
  faqs: CzechFaq[];
  related: string[];
};

const sharedUnknown = ['Přesné datum vydání a cena', 'Maximální počet hráčů', 'Verze pro konzole', 'Česká lokalizace přímo ve hře'];

export const czechGuides: CzechGuide[] = [
  {
    slug: 'hra-dear-passengers', englishPath: '/game-dear-passengers/', keyword: 'hra Dear Passengers',
    title: 'Hra Dear Passengers: co je zač, hratelnost a vydání',
    description: 'Hra Dear Passengers česky: ověřený přehled kooperativního letu, rolí posádky, vydání, dema, PC požadavků a podpory češtiny.',
    eyebrow: 'PŘEHLED HRY · OVĚŘENÁ FAKTA', h1: 'Hra Dear Passengers: co je zač a co už opravdu víme?',
    intro: 'Hra Dear Passengers je připravovaná kooperativní komedie o posádce katastrofální aerolinky. Český hráč ale v tuto chvíli naráží hlavně na anglické výsledky, neověřené datumy a stránky slibující stažení. Tento přehled proto odděluje údaje ze služby Steam a vyjádření studia FLEXUS od dohadů.',
    answer: 'Dear Passengers je připravovaná hra studia FLEXUS pro Windows PC ve službě Steam. Posádka vybírá cestující a náklad, pilotuje letadlo, obsluhuje kabinu a řeší fyzikální chaos, počasí a mimořádné události. Steam potvrzuje režim pro jednoho hráče a online kooperaci a uvádí vydání v roce 2026. Přesný den, cena, počet hráčů ani čeština zatím potvrzené nejsou.',
    note: 'Název Dear Passengers je značka hry a nepřekládáme jej jako „Vážení cestující“. Česká část DearPassengers.net je nezávislý redakční průvodce; neznamená to, že hra samotná už podporuje češtinu.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Oficiální scéna ze hry Dear Passengers pro český přehled',
    confirmed: ['Vývojářem i vydavatelem je FLEXUS', 'Potvrzenou platformou je Windows PC a obchodem Steam', 'Režim pro jednoho hráče a online kooperace', 'Plánované vydání v roce 2026'], unknown: sharedUnknown,
    sections: [
      { id: 'o-hre', kicker: 'ZÁKLADNÍ KONCEPT', heading: 'O čem je hra Dear Passengers?', paragraphs: [
        'Hra Dear Passengers staví jeden let na několika propojených povinnostech. Ještě před startem posádka rozhoduje, které cestující a jaký náklad vezme na palubu. Rizikovější volba může přinést vyšší odměnu, ale také více problémů. Po vzletu jeden člen posádky řídí letadlo, zatímco ostatní roznášejí jídlo a pití, hlídají kabinu a snaží se zabránit tomu, aby se drobný problém změnil v katastrofu.',
        'Fyzika propojuje kokpit s kabinou. Turbulence, vzdušné kapsy nebo prudký manévr mohou rozházet zavazadla, cestující i volné předměty. To je potvrzený základ hry Dear Passengers. Neznamená to však automaticky realistický letecký simulátor, licencovaná letadla, kariéru nebo podrobnou ekonomiku; takové systémy FLEXUS dosud nepopsal.'
      ]},
      { id: 'stav', kicker: 'AKTUÁLNÍ STAV', heading: 'Kdy a kde hra Dear Passengers vyjde?', paragraphs: [
        'Česká karta hry ve službě Steam uvádí pouze rok 2026. Neobsahuje měsíc ani den a hra zatím není dostupná k zakoupení. Potvrzená je verze pro Windows PC. PlayStation, Xbox, Nintendo Switch, macOS ani Linux v oficiálních materiálech potvrzené nejsou.',
        'Ve službě Steam lze hru přidat do seznamu přání. Veřejné demo tam zatím není ke stažení. FLEXUS mluvil o plánovaném demu, ale plán není hotový produkt. Bez aktivního tlačítka ve službě Steam nebo přímého odkazu od studia nelze tvrdit, že je testovací verze dostupná.'
      ]},
      { id: 'overeni', kicker: 'JAK SE NESPLÉST', heading: 'Jak poznat správnou hru Dear Passengers?', paragraphs: [
        'Kontrolujte vývojáře FLEXUS, Steam App ID 4534960 a platformu Windows. Podobný název používají i jiné mobilní aplikace, které s PC projektem FLEXUS nesouvisejí. Nabídka APK, cracku, torrentu nebo údajně hotové plné verze není důkazem oficiální distribuce.',
        'Pro konkrétní otázku použijte samostatný český přehled: [[/cs/dear-passengers-datum-vydani/|datum vydání]], [[/cs/dear-passengers-demo/|stav dema]], [[/cs/dear-passengers-stahnout/|bezpečné stažení]] nebo [[/cs/dear-passengers-cestina/|podpora češtiny]]. Každá stránka řeší jiný záměr a neopakuje stejný obecný text.'
      ]},
    ],
    localContext: ['V českém vyhledávání je přirozené spojení „hra Dear Passengers“ nebo otázka „co je Dear Passengers za hru“. Brand zůstává anglicky; slovo „hra“ pouze objasňuje, že nejde o frázi z palubního hlášení.', 'Výraz „letecký simulátor“ může pomoci s orientací, ale bez detailů o letovém modelu je přesnější mluvit o kooperativní hře s pilotováním, fyzikou a obsluhou kabiny.'],
    faqs: [
      { question: 'Co je Dear Passengers za hru?', answer: 'Připravovaná hra FLEXUS o pilotování letadla a práci posádky v chaotické kabině.' },
      { question: 'Kdy hra Dear Passengers vyjde?', answer: 'Steam uvádí rok 2026, přesné datum zatím zveřejněno nebylo.' },
      { question: 'Na čem půjde Dear Passengers hrát?', answer: 'Potvrzený je pouze Windows PC a obchod Steam.' },
      { question: 'Půjde hrát sólo?', answer: 'Ano, Steam uvádí režim pro jednoho hráče, ale jeho provedení zatím neznáme.' },
      { question: 'Má hra kooperaci?', answer: 'Ano, online kooperace je potvrzená; maximální počet hráčů zveřejněn nebyl.' },
      { question: 'Bude Dear Passengers česky?', answer: 'Aktuální tabulka jazyků ve službě Steam označuje češtinu jako nepodporovanou.' },
    ], related: ['dear-passengers-jak-hrat', 'dear-passengers-datum-vydani', 'dear-passengers-demo', 'dear-passengers-cestina', 'dear-passengers-pocet-hracu'],
  },
  {
    slug: 'dear-passengers-jak-hrat', englishPath: '/dear-passengers-gameplay/', keyword: 'Dear Passengers jak hrát',
    title: 'Dear Passengers: jak hrát, pilotovat a zvládnout kabinu',
    description: 'Dear Passengers jak hrát: ověřený herní cyklus, pilot a palubní posádka, sólo, online kooperace a dosud neznámé mechaniky.',
    eyebrow: 'HRATELNOST · BEZ DOMNĚNEK', h1: 'Dear Passengers: jak hrát a co dělá posádka?',
    intro: 'Dotaz „Dear Passengers jak hrát“ může znamenat ovládání letadla, práci v kabině i hraní s přáteli. Oficiální materiály už ukazují základní průběh letu, ale nezveřejnily ovládací schéma, tutoriál, postup kampaní ani přesná pravidla jednotlivých rolí.',
    answer: 'V Dear Passengers posádka nejprve vybírá cestující a náklad a potom absolvuje let. Jeden hráč může pilotovat, ostatní obsluhují kabinu, chrání náklad a reagují na počasí a fyziku. Režim pro jednoho hráče i online kooperace jsou potvrzené. Přesné ovládání, struktura misí a velikost týmu zatím oznámené nejsou.',
    note: 'FLEXUS potvrdil, že letadlo půjde přímo ovládat. Z této věty ale nelze odvodit profesionální model letu, podporu leteckého joysticku ani konkrétní hloubku kokpitu.',
    heroImage: '/images/dear-passengers-unity-flight.webp', heroAlt: 'Vývojový záběr letadla Dear Passengers v Unity, nikoli finální rozhraní',
    confirmed: ['Pilotování letadla', 'Práce v kokpitu i kabině', 'Fyzika cestujících, nákladu a předmětů', 'Sólo a online kooperace'], unknown: ['Rozložení kláves a podpora ovladače', 'Hloubka letového modelu', 'Mise, postup a ukládání', 'Maximální velikost posádky'],
    sections: [
      { id: 'prubeh', kicker: 'HERNÍ CYKLUS', heading: 'Jak probíhá let v Dear Passengers?', paragraphs: [
        'Před startem tým vybírá cestující a náklad. Oficiální popis spojuje větší riziko s vyšší odměnou, takže složení letu pravděpodobně ovlivní jeho obtížnost. Zatím však nebylo ukázáno hotové menu zakázek, měna, obchod s vylepšeními ani dlouhodobá kampaň. Tyto prvky proto nelze vydávat za potvrzenou součást hry.',
        'Po startu se práce rozděluje mezi kokpit a kabinu. Pilot reaguje na let a počasí, zatímco palubní tým obsluhuje cestující, drží náklad pod kontrolou a řeší události. Hlavní myšlenkou je, že rozhodnutí jednoho člověka vytvoří práci ostatním. Podmínky vítězství, prohry a hodnocení letu stále neznáme.'
      ]},
      { id: 'role', kicker: 'PILOT A KABINA', heading: 'Co dělá pilot a co palubní posádka?', paragraphs: [
        'Pilot ovládá letadlo a musí reagovat na podmínky letu. FLEXUS výslovně uvedl, že nepůjde jen o několik filmových tlačítek. Není ale potvrzena realistická avionika, řízení letového provozu, spotřeba paliva ani podpora volantu či leteckého kniplu.',
        'V kabině se podává jídlo a pití, pomáhá cestujícím, hlídají se zavazadla a řeší problémy. Oficiální materiály zatím neukazují uzamčené třídy postav. Bez dalších důkazů je vhodnější chápat pilota a palubní tým jako oblasti práce, nikoli jako definitivní systém povolání.'
      ]},
      { id: 'rezimy', kicker: 'HERNÍ REŽIMY', heading: 'Jak hrát Dear Passengers sólo a s přáteli?', paragraphs: [
        'Režim pro jednoho hráče je uveden přímo ve službě Steam. Nevíme, zda sólo hráč přepíná stanoviště, dostane pomoc umělé inteligence, nebo hraje upravené mise. Správná odpověď proto zní: sólo je potvrzené, ale způsob obsluhy celé posádky nikoli.',
        'Online kooperace je také potvrzená. Studio zatím neuvedlo lobby, matchmaking, dedikované servery, možnost připojení během letu, hlasový chat ani lokální kooperaci. Počet postav v traileru není spolehlivý limit. Podrobnosti sleduje stránka [[/cs/dear-passengers-pocet-hracu/|Dear Passengers počet hráčů]].'
      ]},
    ],
    localContext: ['Čeští hráči hledají „jak hrát“, „jak se hraje“ a „gameplay“. Před vydáním je výraz „návod“ příliš silný, protože neexistuje veřejná finální verze s ověřitelnými postupy.', 'Anglické slovo gameplay je v české herní komunitě běžné, ale nadpis „jak hrát“ lépe odpovídá otázce a umožňuje přirozeně vysvětlit, co je potvrzené a co chybí.'],
    faqs: [
      { question: 'Jak se hraje Dear Passengers?', answer: 'Tým vybere cestující a náklad, rozdělí pilotování a práci v kabině a během letu reaguje na fyziku, počasí a mimořádné situace.' },
      { question: 'Lze letadlo opravdu pilotovat?', answer: 'Ano, přímé ovládání letadla je potvrzené, přesná hloubka simulace ale ne.' },
      { question: 'Má Dear Passengers singleplayer?', answer: 'Ano, režim pro jednoho hráče je uveden ve službě Steam.' },
      { question: 'Je ve hře online kooperace?', answer: 'Ano. Přesná velikost týmu a síťové funkce zveřejněné nejsou.' },
      { question: 'Bude fungovat gamepad?', answer: 'Podpora ovladače zatím potvrzená není.' },
    ], related: ['hra-dear-passengers', 'dear-passengers-pocet-hracu', 'dear-passengers-systemove-pozadavky', 'dear-passengers-demo'],
  },
  {
    slug: 'dear-passengers-pocet-hracu', englishPath: '/dear-passengers-player-count/', keyword: 'Dear Passengers počet hráčů',
    title: 'Dear Passengers počet hráčů: kooperace a sólo',
    description: 'Kolik hráčů má Dear Passengers? Steam potvrzuje singleplayer a online kooperaci, ale maximální počet hráčů zatím FLEXUS neuvedl.',
    eyebrow: 'POČET HRÁČŮ · OVĚŘENÝ STAV', h1: 'Dear Passengers: pro kolik hráčů hra je?',
    intro: 'Otázka „Dear Passengers pro kolik hráčů“ zatím nemá číselnou odpověď. Trailer ukazuje více členů posádky, ale počet postav v sestříhané scéně není potvrzený limit lobby. Jisté jsou pouze režimy uvedené na oficiální kartě hry.',
    answer: 'Steam potvrzuje v Dear Passengers režim pro jednoho hráče a online kooperaci. FLEXUS zatím nezveřejnil minimum ani maximum členů posádky, lokální kooperaci, cross-play ani fungování serverů. Jakékoli konkrétní číslo je proto v tuto chvíli odhad, ne oficiální údaj.',
    note: 'Počet viditelných postav v traileru používáme jen jako pozorování scény. Nezaměňujeme jej za technický limit hráčů.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Posádka ve scéně Dear Passengers bez tvrzení o maximálním počtu hráčů',
    confirmed: ['Režim pro jednoho hráče', 'Online kooperace s přáteli', 'Společné úkoly v kokpitu a kabině'], unknown: ['Minimální a maximální počet hráčů', 'Lokální kooperace a split-screen', 'Cross-play', 'Matchmaking a dedikované servery'],
    sections: [
      { id: 'co-vime', kicker: 'POTVRZENÉ REŽIMY', heading: 'Co Steam říká o počtu hráčů?', paragraphs: [
        'V části Funkce uvádí česká stránka Steamu „Režim pro jednoho hráče“ a „Online kooperace“. To potvrzuje možnost hrát sólo i s dalšími lidmi přes internet. Neurčuje to však počet míst v lobby. Označení „pro více hráčů“ mezi komunitními značkami také není technická specifikace.',
        'Oficiální popis používá formulaci o hráči a jeho přátelích a rozděluje práci mezi pilota a ostatní členy posádky. Z toho lze bezpečně vyvodit týmovou strukturu, nikoli pevné číslo. Dokud se číslo neobjeví u funkce Steamu nebo v přímém oznámení FLEXUS, zůstává neznámé.'
      ]},
      { id: 'solo', kicker: 'JEDEN HRÁČ', heading: 'Jak může fungovat Dear Passengers pro jednoho hráče?', paragraphs: [
        'Singleplayer je potvrzen, ale studio neukázalo, jak jediný člověk zvládne pilotování a kabinu. Možností je přepínání stanovišť, umělá inteligence, pauza nebo odlišně navržené mise. Žádnou z těchto variant však dnes nelze označit za oficiální.',
        'Český přehled proto neslibuje AI posádku ani jednodušší obtížnost. Samotná ikona singleplayeru říká pouze to, že hra má nabídnout způsob hraní pro jednoho. Praktické hodnocení bude možné až po demu nebo podrobné ukázce.'
      ]},
      { id: 'sit', kicker: 'ONLINE FUNKCE', heading: 'Je potvrzen cross-play nebo lokální kooperace?', paragraphs: [
        'Ne. Potvrzená je pouze online kooperace na Windows PC. PlayStation, Xbox a Switch zatím potvrzené nejsou, takže ani cross-play mezi platformami nelze očekávat jako jistotu. Steam Remote Play Together, split-screen a hraní na jednom počítači nejsou uvedeny.',
        'Stejně chybí informace o veřejných lobby, pozvánkách, pozdním připojení, ukládání postupu hosta a hlasovém chatu. Tyto otázky mají vlastní síťový význam a neměly by být domýšleny z komediálního traileru.'
      ]},
    ],
    localContext: ['V češtině se přirozeně hledá „pro kolik hráčů“, „počet hráčů“ a „kolik lidí může hrát“. Stránka používá všechny tři formulace, ale nesnaží se chybějící číslo nahrazovat odhadem.', 'Termín „multiplayer“ je běžný, zatímco oficiální české rozhraní Steamu používá „online kooperace“. Právě tento výraz nejpřesněji popisuje potvrzenou funkci.'],
    faqs: [
      { question: 'Pro kolik hráčů je Dear Passengers?', answer: 'Přesný počet zatím nebyl oznámen.' },
      { question: 'Lze Dear Passengers hrát sólo?', answer: 'Ano, Steam potvrzuje režim pro jednoho hráče.' },
      { question: 'Má Dear Passengers online kooperaci?', answer: 'Ano, online kooperace je uvedena jako oficiální funkce.' },
      { question: 'Bude split-screen?', answer: 'Lokální kooperace ani rozdělená obrazovka nejsou potvrzené.' },
      { question: 'Bude cross-play?', answer: 'Cross-play zatím oznámen nebyl.' },
    ], related: ['dear-passengers-jak-hrat', 'hra-dear-passengers', 'dear-passengers-demo', 'dear-passengers-datum-vydani'],
  },
  {
    slug: 'dear-passengers-datum-vydani', englishPath: '/dear-passengers-release-date/', keyword: 'Dear Passengers datum vydání',
    title: 'Dear Passengers datum vydání: potvrzený rok 2026',
    description: 'Dear Passengers datum vydání: Steam potvrzuje rok 2026, ale přesný den, cena, předběžný přístup ani konzolové verze oznámené nejsou.',
    eyebrow: 'DATUM VYDÁNÍ · STAV 2026', h1: 'Kdy vyjde Dear Passengers?',
    intro: 'Datum vydání Dear Passengers patří v Česku k nejsilnějším dotazům, ale oficiální odpověď je zatím širší než konkrétní den. Steam i vyjádření studia mluví o roce 2026. Jakýkoli přesný den bez odkazu na FLEXUS je spekulace nebo technická zástupná hodnota obchodu.',
    answer: 'Dear Passengers má podle oficiální stránky ve službě Steam vyjít v roce 2026. Přesný den ani měsíc zveřejněn nebyl. Hra zatím není dostupná k zakoupení, cena není uvedena a předběžný přístup nebyl potvrzen. FLEXUS uvedl, že chce vydat kvalitně připravenou verzi a nechce datum uspěchat.',
    note: 'Datum kontrolujeme přímo na české verzi karty Steam. Rok 2026 je potvrzený; konkrétní den se za potvrzený považuje až po oznámení studia nebo změně oficiálního pole vydání.',
    heroImage: '/images/release-date.webp', heroAlt: 'Oficiální vizuál Dear Passengers k českému přehledu data vydání',
    confirmed: ['Okno vydání: 2026', 'Windows PC ve službě Steam', 'Hru lze přidat do seznamu přání'], unknown: ['Přesný den a měsíc', 'Cena v eurech nebo korunách', 'Předběžný přístup', 'Datum případných konzolových verzí'],
    sections: [
      { id: 'oficialni', kicker: 'STRUČNÁ ODPOVĚĎ', heading: 'Jaké je oficiální datum vydání Dear Passengers?', paragraphs: [
        'Na kartě hry je uvedeno „Plánované datum vydání: 2026“. Stejné roční okno je v poli Datum vydání. Neexistuje veřejně potvrzený měsíc ani den. Zobrazení 31. prosince na jiné databázi bývá technická výplň a samo o sobě není oznámením studia.',
        'V přímém rozhovoru FLEXUS uvedl jako orientaci tento rok, ale zároveň zdůraznil, že nechce vydat nedokončenou hru jen kvůli rychlosti. To potvrzuje záměr pro rok 2026, nikoli záruku konkrétního termínu. Pokud se plán změní, přednost má novější oficiální zdroj.'
      ]},
      { id: 'pred-vydanim', kicker: 'CO BUDE PŘED VYDÁNÍM', heading: 'Vyjde před hrou demo nebo předběžný přístup?', paragraphs: [
        'Studio veřejně mluvilo o demu, které má předcházet vydání. Veřejná verze však zatím není na Steamu dostupná. Plánované demo nelze zaměňovat s uzavřeným buildem pro akci, média nebo tvůrce obsahu.',
        'Předběžný přístup není na kartě uveden. Dokud Steam nezobrazí označení Early Access nebo FLEXUS neoznámí konkrétní plán, není správné slibovat placený předčasný vstup. Aktuální kontrolu vede [[/cs/dear-passengers-demo/|česká stránka o demu]].'
      ]},
      { id: 'platformy', kicker: 'PLATFORMY A CENA', heading: 'Vyjde Dear Passengers na PS5, Xboxu nebo Switchi?', paragraphs: [
        'Potvrzen je Windows PC. Konzolové verze pro PlayStation 5, Xbox Series nebo Nintendo Switch na oficiální kartě nejsou. Stejně není potvrzen macOS, Linux nebo Steam Deck. Popularita hry může vést k otázkám o dalších platformách, ale nenahrazuje vývojářské oznámení.',
        'Cena není zveřejněna. Komunitní značka Free to play není cenové rozhodnutí vydavatele a nelze z ní odvodit, že hra bude zdarma. Rozhodující bude oficiální cenovka ve službě Steam.'
      ]},
    ],
    localContext: ['Čeština používá „datum vydání“ nebo neformální „kdy vyjde“. Anglické release date je mezi hráči srozumitelné, ale český dotaz bývá přesnější a má jasnou odpověď.', 'Datum zapisujeme jako 8. 8. 2026 s mezerami po tečkách, což odpovídá běžné české typografii. U zatím neznámého termínu však žádný umělý den nevytváříme.'],
    faqs: [
      { question: 'Kdy vyjde Dear Passengers?', answer: 'Oficiálně v roce 2026; měsíc a den zatím oznámené nejsou.' },
      { question: 'Je datum 31. prosince 2026 potvrzené?', answer: 'Ne. Bez potvrzení FLEXUS jde pravděpodobně o zástupné datum.' },
      { question: 'Kolik bude Dear Passengers stát?', answer: 'Cena zatím zveřejněna nebyla.' },
      { question: 'Vyjde hra v předběžném přístupu?', answer: 'Early Access potvrzen není.' },
      { question: 'Vyjde hra na PS5 nebo Xboxu?', answer: 'Konzolové verze zatím potvrzené nejsou.' },
    ], related: ['dear-passengers-demo', 'dear-passengers-stahnout', 'hra-dear-passengers', 'dear-passengers-cestina'],
  },
  {
    slug: 'dear-passengers-demo', englishPath: '/dear-passengers-demo/', keyword: 'Dear Passengers demo',
    title: 'Dear Passengers demo: je už dostupné ke stažení?',
    description: 'Dear Passengers demo zatím není veřejně ke stažení na Steamu. Zde je potvrzený plán dema, jak poznat oficiální build a čemu se vyhnout.',
    eyebrow: 'DEMO · AKTUÁLNÍ DOSTUPNOST', h1: 'Je Dear Passengers demo už dostupné?',
    intro: 'Hledání „Dear Passengers demo“ často vede k videím, neoficiálním souborům nebo stránkám, které zaměňují plánovanou ukázku za veřejné stažení. Rozhodující je aktuální karta Steam a přímé oznámení FLEXUS.',
    answer: 'Veřejné demo Dear Passengers není k 8. 8. 2026 ve službě Steam dostupné. FLEXUS potvrdil, že demo plánuje, ale neuvedl přesný veřejný termín. Bez tlačítka „Stáhnout demo“ na oficiální kartě nebo odkazu z kanálu studia nelze žádný soubor považovat za ověřený.',
    note: 'Pravidelně kontrolujeme Steam App ID 4534960 a oznámení FLEXUS. Video hrané na akci, interní build nebo přístup pro tvůrce není automaticky veřejné demo.',
    heroImage: '/images/dear-passengers-unity-flight.webp', heroAlt: 'Vývojový záběr Dear Passengers u českého přehledu dostupnosti dema',
    confirmed: ['FLEXUS s demem počítá', 'Steam zatím veřejné demo nenabízí', 'Hru lze přidat do seznamu přání'], unknown: ['Datum veřejného dema', 'Délka a obsah ukázky', 'Zda půjde hrát sólo i online', 'Požadavky případné testovací verze'],
    sections: [
      { id: 'stav', kicker: 'STAV NA STEAMU', heading: 'Kde bude oficiální Dear Passengers demo?', paragraphs: [
        'Nejbezpečnější místo je oficiální karta Dear Passengers ve službě Steam. Veřejné demo se obvykle zobrazí jako samostatné tlačítko pro instalaci nebo propojená aplikace. Aktuální česká karta pouze oznamuje plánované vydání v roce 2026 a nabízí seznam přání.',
        'Rozhovor se studiem potvrzuje záměr vydat demo před plnou hrou. Záměr ale nemá přesný den. Proto nepoužíváme odpočítávání a netvrdíme, že je demo „venku“, dokud jej může běžný uživatel stáhnout z oficiálního zdroje.'
      ]},
      { id: 'bezpecnost', kicker: 'BEZPEČNÉ OVĚŘENÍ', heading: 'Jak poznat pravé demo Dear Passengers?', paragraphs: [
        'Ověřte doménu store.steampowered.com, App ID 4534960 a vývojáře FLEXUS. Odkaz sdílený z oficiálního profilu studia může být další důkaz. Instalační archiv z úložiště, zkrácený odkaz nebo stránka požadující vypnutí antiviru důkazem není.',
        'DearPassengers.net nehostuje spustitelné soubory, generátory klíčů ani upravené verze. Pokud se objeví veřejné demo, odkážeme přímo na Steam a uvedeme datum kontroly. Bezpečný postup pro plnou hru popisuje [[/cs/dear-passengers-stahnout/|stránka ke stažení]].'
      ]},
      { id: 'ocekavani', kicker: 'CO DEMO NEPOTVRZUJE', heading: 'Co lze od dema očekávat?', paragraphs: [
        'Oficiální materiály hry zahrnují pilotování, práci v kabině, cestující, náklad, počasí a fyziku. Nevíme však, které části plánované demo obsahuje, jak dlouho trvá ani zda nabídne online kooperaci. Přítomnost funkce v plné hře nezaručuje její dostupnost v ukázce.',
        'Stejně není potvrzeno, zda postup z dema půjde přenést do plné verze. Před instalací je vhodné znovu ověřit systémové požadavky a jazykovou tabulku, protože testovací build se může od finální verze lišit.'
      ]},
    ],
    localContext: ['Čeští hráči používají „demo“, „demoverze“ i „ukázka“. Steam běžně pracuje s výrazem demo, proto jej zachováváme jako hlavní termín.', 'Slovo „ke stažení“ neznamená, že soubor existuje. Na stránce vždy stojí aktuální dostupnost hned v první odpovědi, aby nadpis nevytvářel falešný příslib.'],
    faqs: [
      { question: 'Je Dear Passengers demo ke stažení?', answer: 'Ne, veřejné demo zatím není na oficiální kartě Steam dostupné.' },
      { question: 'Bude demo vydáno?', answer: 'FLEXUS demo plánuje, ale přesný veřejný termín neuvedl.' },
      { question: 'Bude demo zdarma?', answer: 'Cena nebo podmínky ukázky nebyly oznámeny; veřejná dema na Steamu bývají zdarma, ale zde to není potvrzený detail.' },
      { question: 'Půjde demo hrát online?', answer: 'Obsah a režimy dema zatím nejsou popsané.' },
      { question: 'Kde dostanu upozornění?', answer: 'Přidejte si hru do seznamu přání ve službě Steam a sledujte kanály FLEXUS.' },
    ], related: ['dear-passengers-datum-vydani', 'dear-passengers-stahnout', 'dear-passengers-systemove-pozadavky', 'hra-dear-passengers'],
  },
  {
    slug: 'dear-passengers-stahnout', englishPath: '/dear-passengers-download/', keyword: 'Dear Passengers stáhnout',
    title: 'Dear Passengers stáhnout bezpečně: oficiální stav',
    description: 'Jak Dear Passengers stáhnout bezpečně: hra ani veřejné demo zatím nejsou vydané. Ověřte Steam, FLEXUS a vyhněte se falešným APK a crackům.',
    eyebrow: 'STAŽENÍ · BEZ FALEŠNÝCH ODKAZŮ', h1: 'Kde stáhnout Dear Passengers bezpečně?',
    intro: 'Dotaz „Dear Passengers stáhnout“ dnes nemá odkaz na hotovou hru. Dear Passengers zatím nevyšlo a veřejné demo není na Steamu dostupné. Stránky nabízející instalátor, APK, crack nebo torrent proto nejsou oficiální distribucí potvrzeného PC projektu FLEXUS.',
    answer: 'Dear Passengers zatím nelze oficiálně stáhnout. Potvrzeným obchodem je Steam, kde lze hru pouze přidat do seznamu přání. Až bude vydána plná verze nebo veřejné demo, bezpečná instalace povede přes oficiální kartu App ID 4534960. Tento web žádné instalační soubory neposkytuje.',
    note: 'Stránka odpovídá na bezpečnostní záměr českého dotazu a nevytváří falešné tlačítko „Download“. Vždy odděluje budoucí oficiální cestu od dnešní dostupnosti.',
    heroImage: '/images/dear-passengers-download-safety.webp', heroAlt: 'Redakční ilustrace bezpečné cesty ke stažení Dear Passengers',
    confirmed: ['Oficiální karta Steam App ID 4534960', 'Vývojář a vydavatel FLEXUS', 'Plánované vydání v roce 2026'], unknown: ['Datum zahájení stahování', 'Cena plné verze', 'Předběžné načtení', 'Další oficiální obchody'],
    sections: [
      { id: 'dnes', kicker: 'DOSTUPNOST DNES', heading: 'Lze Dear Passengers stáhnout už nyní?', paragraphs: [
        'Ne. Česká karta Steamu uvádí, že hra prozatím není dostupná, a nabízí přidání do seznamu přání. Neobsahuje tlačítko nákupu, instalace ani veřejného dema. To je rozhodující stav bez ohledu na to, co tvrdí neoficiální katalog.',
        'FLEXUS plánuje vydání v roce 2026 a mluvil o demu. Dokud se na oficiálním zdroji neobjeví instalace, žádný web nemůže legitimně nabízet finální PC verzi. Časový stav dema sledujeme zvlášť, aby se plán nezaměnil za dostupný soubor.'
      ]},
      { id: 'postup', kicker: 'BEZPEČNÝ POSTUP', heading: 'Jak Dear Passengers stáhnout po vydání?', paragraphs: [
        'Otevřete Steam, zkontrolujte název Dear Passengers, studio FLEXUS a App ID 4534960. Po vydání použijte přímo tlačítko obchodu. U dema platí stejný postup: instalace musí být propojena s oficiální kartou nebo oznámením studia.',
        'Nevypínejte ochranu systému kvůli neznámému instalátoru a nezadávejte přihlašovací údaje Steamu na napodobené doméně. Nabídka „free download“, generátoru klíče nebo hesla k archivu před vydáním je silný varovný signál.'
      ]},
      { id: 'mobil', kicker: 'MOBIL A KONZOLE', heading: 'Existuje Dear Passengers APK pro Android?', paragraphs: [
        'Neexistuje potvrzená Android ani iOS verze projektu Dear Passengers od FLEXUS. Aplikace s podobným názvem v mobilním katalogu může být jiná hra. Kontrolujte vývojáře a popis, nikoli pouze ikonu nebo název.',
        'Stejně nejsou potvrzené verze pro PlayStation, Xbox nebo Switch. Soubor označený jako konzolový port před oficiálním oznámením není důvěryhodný. Potvrzenou cílovou platformou zůstává Windows PC.'
      ]},
    ],
    localContext: ['„Stáhnout Dear Passengers“ a „Dear Passengers ke stažení“ jsou běžné české formulace s navigačním i bezpečnostním záměrem. Správná odpověď dnes musí být záporná a vysvětlit oficiální budoucí cestu.', 'Nevyužíváme slova „zdarma“ ani „plná verze“ jako lákadlo. Cena ani obchodní model nejsou potvrzené a komunitní značka na Steamu je nemůže nahradit.'],
    faqs: [
      { question: 'Kde stáhnout Dear Passengers?', answer: 'Zatím nikde; hra není vydaná. Oficiální instalace má po vydání vést přes Steam App ID 4534960.' },
      { question: 'Je Dear Passengers zdarma?', answer: 'Cena ani obchodní model zatím nebyly oznámeny.' },
      { question: 'Existuje Dear Passengers APK?', answer: 'Android verze hry FLEXUS potvrzená není.' },
      { question: 'Je dostupný torrent nebo crack?', answer: 'Před vydáním nejde o oficiální distribuci a podobné soubory představují bezpečnostní riziko.' },
      { question: 'Lze stáhnout demo?', answer: 'Veřejné demo zatím vydáno nebylo.' },
    ], related: ['dear-passengers-demo', 'dear-passengers-datum-vydani', 'dear-passengers-systemove-pozadavky', 'dear-passengers-cestina'],
  },
  {
    slug: 'dear-passengers-systemove-pozadavky', englishPath: '/dear-passengers-system-requirements/', keyword: 'Dear Passengers systémové požadavky',
    title: 'Dear Passengers systémové požadavky pro PC',
    description: 'Systémové požadavky Dear Passengers: oficiální minimum pro Windows 10, procesor, 8 GB RAM, GTX 1060 nebo RX 6600 XT, DirectX 12 a 4 GB místa.',
    eyebrow: 'SYSTÉMOVÉ POŽADAVKY · STEAM', h1: 'Jaké má Dear Passengers systémové požadavky?',
    intro: 'Steam už zveřejňuje minimální systémové požadavky Dear Passengers, ale doporučená sestava chybí. Údaje popisují současný spodní práh pro Windows verzi a do vydání se mohou změnit.',
    answer: 'Minimální požadavky Dear Passengers jsou 64bitový Windows 10, Intel Core i5 na 2,5 GHz nebo ekvivalent, 8 GB RAM, NVIDIA GeForce GTX 1060 nebo AMD Radeon RX 6600 XT, DirectX 12 a 4 GB volného místa. Doporučené požadavky, cílové rozlišení a snímková frekvence zveřejněné nejsou.',
    note: 'Specifikace přepisujeme z aktuální karty Steam. Minimum není záruka konkrétního FPS nebo grafické kvality a před vydáním se může změnit.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Oficiální scéna Dear Passengers pro český přehled systémových požadavků',
    confirmed: ['Windows 10 64-bit', 'Intel Core i5 2,5 GHz nebo ekvivalent', '8 GB RAM', 'GTX 1060 nebo RX 6600 XT', 'DirectX 12 a 4 GB místa'], unknown: ['Doporučená sestava', 'Cílové FPS a rozlišení', 'Povinné SSD', 'Steam Deck, macOS a Linux'],
    sections: [
      { id: 'minimum', kicker: 'OFICIÁLNÍ MINIMUM', heading: 'Minimální systémové požadavky Dear Passengers', paragraphs: [
        'Steam vyžaduje 64bitový operační systém a procesor. Jako základ uvádí Intel Core i5 na 2,5 GHz nebo ekvivalentní CPU. Pro grafiku je uvedena NVIDIA GeForce GTX 1060 nebo AMD Radeon RX 6600 XT, dále 8 GB operační paměti, DirectX 12 a 4 GB volného místa.',
        'Tato sestava je publikovaný minimální práh, nikoli příslib vysokých detailů. Karta neuvádí rozlišení, grafický preset, snímkovou frekvenci ani zátěž scén s více fyzikálními objekty. U notebooku záleží také na konkrétní mobilní grafice, chlazení a napájecím režimu.'
      ], bullets: ['OS: Windows 10, 64 bitů', 'CPU: Intel Core i5 2,5 GHz nebo ekvivalent', 'RAM: 8 GB', 'GPU: GTX 1060 / RX 6600 XT', 'DirectX: verze 12', 'Úložiště: 4 GB volného místa']},
      { id: 'doporucene', kicker: 'DOPORUČENÁ SESTAVA', heading: 'Jaké jsou doporučené požadavky?', paragraphs: [
        'FLEXUS doporučenou konfiguraci nezveřejnil. Nelze proto označit RTX 3060, 16 GB RAM nebo konkrétní moderní procesor za oficiální doporučení. Výkonnější hardware může dávat rezervu, ale jde o obecnou úvahu, ne specifikaci Dear Passengers.',
        'Vývoj pokračuje a optimalizace i velikost instalace se mohou změnit. Před nákupem nebo instalací je vhodné zkontrolovat Steam znovu. Pokud se objeví doporučené požadavky, musí být uvedeny odděleně od minima.'
      ]},
      { id: 'kontrola', kicker: 'KONTROLA POČÍTAČE', heading: 'Rozjede můj počítač Dear Passengers?', paragraphs: [
        'Porovnávejte přesné modely, ne pouze názvy řad. Integrovaná grafika se sdílenou pamětí není automaticky ekvivalent GTX 1060. Mobilní a stolní verze stejného jména se mohou lišit. Ověřte také 64bitový systém a ponechte rezervu nad uvedené 4 GB.',
        'Pokud je sestava těsně u minima, počkejte na demo, nezávislé benchmarky nebo finální aktualizaci požadavků. Kupovat nový hardware jen podle nehotové hry je předčasné. Dostupnost testu sleduje [[/cs/dear-passengers-demo/|stránka o demu]].'
      ]},
    ],
    localContext: ['V Česku se hledá „systémové požadavky“, „požadavky na PC“ i „rozjede mi to“. První výraz odpovídá názvu sekce ve Steamu, třetí vyjadřuje praktickou otázku uživatele.', 'Desetinné číslo zapisujeme českou čárkou jako 2,5 GHz. Názvy komponent, značek a rozhraní DirectX se nepřekládají.'],
    faqs: [
      { question: 'Kolik RAM potřebuje Dear Passengers?', answer: 'Oficiální minimum je 8 GB RAM.' },
      { question: 'Jaká grafická karta je potřeba?', answer: 'Steam uvádí GTX 1060 nebo RX 6600 XT.' },
      { question: 'Kolik místa hra zabere?', answer: 'Aktuální minimum uvádí 4 GB volného místa.' },
      { question: 'Jsou zveřejněné doporučené požadavky?', answer: 'Ne, doporučená sestava zatím chybí.' },
      { question: 'Poběží hra na Steam Decku?', answer: 'Kompatibilita se Steam Deckem potvrzená není.' },
    ], related: ['dear-passengers-demo', 'dear-passengers-stahnout', 'dear-passengers-jak-hrat', 'hra-dear-passengers'],
  },
  {
    slug: 'dear-passengers-cestina', keyword: 'Dear Passengers čeština',
    title: 'Dear Passengers čeština: bude hra česky?',
    description: 'Podporuje Dear Passengers češtinu? Aktuální Steam tabulka říká, že čeština není podporována. Přehled jazyků, titulků a bezpečného ověření.',
    eyebrow: 'ČEŠTINA · OFICIÁLNÍ TABULKA JAZYKŮ', h1: 'Bude Dear Passengers v češtině?',
    intro: 'Dotaz „Dear Passengers čeština“ je pro místní hráče důležitější než doslovný překlad popisu hry. Česká verze Steamu dnes zobrazuje jednoznačné upozornění, že místní jazyk není podporován. To se může do vydání změnit, ale současný stav nelze prezentovat jako slíbený překlad.',
    answer: 'Čeština v Dear Passengers zatím potvrzená není. Aktuální tabulka jazyků ve službě Steam uvádí „Čeština — Jazyk není podporován“. Potvrzené jazyky rozhraní jsou angličtina, arabština, zjednodušená čínština, turečtina, ukrajinština a japonština. Dabing ani titulky karta u těchto jazyků neuvádí.',
    note: 'Český webový průvodce není fanouškovský překlad hry. Stav jazyka určujeme výhradně podle oficiální tabulky Steamu a novějších oznámení FLEXUS.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Kabina ze hry Dear Passengers k přehledu podpory češtiny',
    confirmed: ['Čeština je nyní označena jako nepodporovaná', 'Šest potvrzených jazyků rozhraní', 'Oficiální popis hry je na českém Steamu stále anglicky'], unknown: ['Zda čeština přibude před vydáním', 'Fanouškovský překlad', 'Titulky a dabing', 'Lokalizace případného dema'],
    sections: [
      { id: 'tabulka', kicker: 'AKTUÁLNÍ STAV', heading: 'Co říká Steam o češtině v Dear Passengers?', paragraphs: [
        'Na české kartě hry je přímo uvedeno „Čeština není podporována“. V tabulce má čeština stav „Jazyk není podporován“. Rozhraní je zaškrtnuté u angličtiny, arabštiny, zjednodušené čínštiny, turečtiny, ukrajinštiny a japonštiny.',
        'Sloupce pro plný zvuk a titulky nejsou u těchto jazyků označené. To neznamená, že hra neobsahuje žádný text nebo hlas; znamená to pouze, že Steam dnes potvrzuje rozhraní a neposkytuje další jazykovou specifikaci. U češtiny není potvrzena ani tato základní podpora.'
      ]},
      { id: 'zmena', kicker: 'MOŽNÁ ZMĚNA', heading: 'Může čeština do Dear Passengers ještě přibýt?', paragraphs: [
        'Ano, tabulka se může během vývoje změnit. Hra má vyjít v roce 2026 a studio může přidat další jazyky. Zatím však neexistuje veřejný slib české lokalizace, takže budoucí možnost nelze psát jako oznámenou funkci.',
        'Nejspolehlivější je přidat hru do seznamu přání a po oznámení dema nebo data vydání zkontrolovat tabulku znovu. Pokud FLEXUS češtinu potvrdí, tato stránka doplní typ podpory — menu, titulky nebo zvuk — a datum ověření.'
      ]},
      { id: 'nazev', kicker: 'MÍSTNÍ VÝZNAM', heading: 'Překládá se název Dear Passengers do češtiny?', paragraphs: [
        'Ne. Dear Passengers je oficiální název a ve vyhledávání i na Steamu se ponechává beze změny. Doslovné „Vážení cestující“ odpovídá běžnému palubnímu oslovení, ale jako název by uživatele odvedlo k dopravním oznámením a jiným významům.',
        'V českém textu proto skloňujeme okolní slova, nikoli značku: „hra Dear Passengers“, „v Dear Passengers“ nebo „datum vydání Dear Passengers“. Taková formulace zní přirozeně a zároveň zachovává identitu projektu.'
      ]},
    ],
    localContext: ['České „bude hra česky?“ obvykle znamená menu a titulky, ne nutně dabing. Proto jednotlivé typy podpory nerozmazáváme do jednoho neurčitého tvrzení.', 'Dotaz „CZ“ může označovat češtinu, českou komunitu nebo region. Na stránce používáme celé slovo „čeština“, protože přesněji odpovídá jazykovému záměru.'],
    faqs: [
      { question: 'Je Dear Passengers v češtině?', answer: 'Ne. Aktuální karta Steam označuje češtinu jako nepodporovanou.' },
      { question: 'Bude český překlad později?', answer: 'FLEXUS českou lokalizaci zatím neslíbil.' },
      { question: 'Jaké jazyky jsou potvrzené?', answer: 'Rozhraní v angličtině, arabštině, zjednodušené čínštině, turečtině, ukrajinštině a japonštině.' },
      { question: 'Budou české titulky?', answer: 'České titulky ani menu zatím potvrzené nejsou.' },
      { question: 'Je tento český web oficiální?', answer: 'Ne, DearPassengers.net je nezávislý neoficiální průvodce.' },
    ], related: ['hra-dear-passengers', 'dear-passengers-datum-vydani', 'dear-passengers-demo', 'dear-passengers-stahnout'],
  },
];

export const czechHomeGuide: CzechGuide = {
  slug: '', englishPath: '/', keyword: 'Dear Passengers',
  title: 'Dear Passengers česky: hra, vydání, demo a čeština',
  description: 'Nezávislý český průvodce Dear Passengers: co je potvrzené o hratelnosti, vydání 2026, demu, kooperaci, požadavcích a podpoře češtiny.',
  eyebrow: 'ČESKÝ PRŮVODCE · OVĚŘENO 8. 8. 2026', h1: 'Dear Passengers česky: ověřený průvodce hrou',
  intro: 'Dear Passengers zaujal české hráče dříve, než má přesné datum vydání nebo veřejné demo. Místo překladu marketingových vět proto tento český rozcestník odpovídá na místní otázky: kdy hra vyjde, pro kolik je hráčů, zda půjde stáhnout demo, jaký počítač potřebuje a jestli bude podporovat češtinu.',
  answer: 'Dear Passengers je připravovaná hra FLEXUS pro Windows PC, která kombinuje pilotování, práci palubní posádky, online kooperaci a fyzikální chaos v kabině. Steam uvádí vydání v roce 2026, singleplayer a online kooperaci. Přesné datum, cena, počet hráčů a česká lokalizace zatím oznámené nejsou; veřejné demo není ke stažení.',
  note: 'DearPassengers.net není spojen se studiem FLEXUS, Valve ani Steamem. Časově citlivé údaje kontrolujeme proti české kartě Steam a přímým vyjádřením vývojáře; neověřené části označujeme jako neznámé.',
  heroImage: '/images/hero-bg.webp', heroAlt: 'Oficiální kabinová scéna Dear Passengers pro český herní průvodce',
  confirmed: ['FLEXUS vyvíjí a vydává hru', 'Windows PC a Steam', 'Rok vydání 2026', 'Singleplayer a online kooperace'], unknown: sharedUnknown,
  sections: [
    { id: 'rychly-prehled', kicker: 'RYCHLÝ PŘEHLED', heading: 'Co je Dear Passengers?', paragraphs: [
      'Dear Passengers je hra o posádce „nejhorší aerolinky na světě“. Jeden člověk řídí letadlo, ostatní udržují kabinu v chodu, obsluhují cestující a řeší problémový náklad. Počasí, turbulence, vzdušné kapsy a fyzika mohou proměnit běžný let v řetězec komediálních nehod.',
      'Oficiální karta potvrzuje režim pro jednoho hráče a online kooperaci. Neuvádí však přesný limit týmu. Hra je z pohledu první osoby a kombinuje akční, dobrodružné a nezávislé prvky. Komunitní značky pomáhají s orientací, ale funkce a cenu potvrzuje pouze vývojářská část obchodu.'
    ]},
    { id: 'nejhledanejsi', kicker: 'ČESKÉ VYHLEDÁVÁNÍ', heading: 'Co čeští hráči o Dear Passengers hledají?', paragraphs: [
      'Data českého trhu ukazují nejsilnější zájem o datum vydání, demo, základní popis hry a počet hráčů. Proto má každá z těchto otázek vlastní stránku a krátkou odpověď před podrobnostmi. Není užitečné překládat desítky anglických článků, pokud by všechny opakovaly stejný stav „zatím neoznámeno“.',
      'Místní potřebu doplňuje otázka češtiny. Česká karta Steamu výslovně uvádí, že čeština není podporována, a samotný popis hry zůstává anglicky. Tento web nabízí české vysvětlení, ale nepředstírá, že tím vznikla lokalizace hry.'
    ]},
    { id: 'stav-vydani', kicker: 'VYDÁNÍ A DEMO', heading: 'Kdy vyjde Dear Passengers a bude demo?', paragraphs: [
      'Potvrzené okno vydání je rok 2026. Přesný měsíc a den chybí. FLEXUS v rozhovoru uvedl, že nechce uspěchat nedokončenou verzi. Na Steamu zatím není cena, nákup ani Early Access. Hru lze pouze přidat do seznamu přání.',
      'Studio veřejně počítá s demem, ale veřejná ukázka dnes není dostupná. Samostatný přehled [[/cs/dear-passengers-demo/|Dear Passengers demo]] vysvětluje rozdíl mezi plánem, verzí pro akci a skutečným tlačítkem ke stažení. [[/cs/dear-passengers-datum-vydani/|Datum vydání]] sledujeme bez zástupných termínů.'
    ]},
    { id: 'bezpecny-start', kicker: 'PRAKTICKÁ KONTROLA', heading: 'Co udělat před vydáním?', paragraphs: [
      'Přidejte si správnou kartu Steam App ID 4534960 do seznamu přání. Pokud chcete posoudit počítač, porovnejte minimální požadavky: Windows 10 64-bit, Core i5 na 2,5 GHz nebo ekvivalent, 8 GB RAM, GTX 1060 či RX 6600 XT, DirectX 12 a 4 GB místa. Doporučená sestava zveřejněná není.',
      'Nestahujte neznámé instalátory, APK ani cracky. Hra zatím nevyšla a mobilní verze FLEXUS není potvrzená. Pro jazykovou dostupnost kontrolujte [[/cs/dear-passengers-cestina/|stav češtiny]]; pro hardware použijte [[/cs/dear-passengers-systemove-pozadavky/|systémové požadavky]].'
    ]},
  ],
  localContext: ['Brand Dear Passengers ponecháváme v angličtině. V češtině kolem něj přirozeně stavíme otázky „kdy vyjde“, „pro kolik hráčů“, „bude česky“ a „kde stáhnout demo“.', 'Tón je věcný a tyká pouze nepřímo. U technických a bezpečnostních odpovědí používáme jasné rozkazy, u neoznámených funkcí podmiňovací způsob a viditelné označení nejistoty.'],
  faqs: [
    { question: 'Co je Dear Passengers?', answer: 'Připravovaná PC hra FLEXUS o pilotovi a palubní posádce, kteří společně zvládají cestující, náklad, počasí a fyzikální chaos.' },
    { question: 'Kdy Dear Passengers vyjde?', answer: 'Steam uvádí rok 2026; přesný termín nebyl oznámen.' },
    { question: 'Je k dispozici demo?', answer: 'Veřejné demo zatím na Steamu dostupné není, i když jej studio plánuje.' },
    { question: 'Pro kolik hráčů hra je?', answer: 'Singleplayer a online kooperace jsou potvrzené, přesný limit hráčů ne.' },
    { question: 'Bude hra v češtině?', answer: 'Aktuálně ne: Steam označuje češtinu jako nepodporovanou.' },
    { question: 'Kde lze Dear Passengers stáhnout?', answer: 'Zatím nikde. Po vydání používejte pouze oficiální kartu ve službě Steam.' },
  ], related: ['hra-dear-passengers', 'dear-passengers-datum-vydani', 'dear-passengers-demo', 'dear-passengers-cestina'],
};

export const czechGuideBySlug = new Map(czechGuides.map((guide) => [guide.slug, guide]));
export const czechGuideByEnglishPath = new Map(czechGuides.filter((guide) => guide.englishPath).map((guide) => [guide.englishPath!, guide]));
