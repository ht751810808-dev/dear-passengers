export type GermanFaq = { question: string; answer: string };

export type GermanSection = {
  id: string;
  kicker: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
};

export type GermanGuide = {
  slug: string;
  englishPath: string;
  chinesePath?: string;
  keyword: string;
  title: string;
  description: string;
  eyebrow: string;
  h1: string;
  h1Accent: string;
  intro: string;
  answer: string;
  note: string;
  heroImage: string;
  heroAlt: string;
  sections: GermanSection[];
  faqs: GermanFaq[];
  related: string[];
};

const sharedRelated = [
  'dear-passengers-gameplay',
  'dear-passengers-spielerzahl',
  'dear-passengers-release',
  'dear-passengers-demo',
];

export const germanGuides: GermanGuide[] = [
  {
    slug: 'dear-passengers-gameplay',
    englishPath: '/dear-passengers-gameplay/',
    keyword: 'Dear Passengers Gameplay',
    title: 'Dear Passengers Gameplay: So funktioniert das Koop-Spiel',
    description: 'Dear Passengers Gameplay auf Deutsch: Flugzeug steuern, Kabine versorgen, riskante Fracht wählen und bestätigte Mechaniken von offenen Fragen trennen.',
    eyebrow: 'DEUTSCHER GAMEPLAY-CHECK · STAND 24.07.2026',
    h1: 'Dear Passengers Gameplay:',
    h1Accent: 'Fliegen, bedienen und Chaos überleben',
    intro: 'Das Dear Passengers Gameplay verbindet das Steuern eines Passagierflugzeugs mit Kabinenservice, riskanter Fracht und physikbasierten Zwischenfällen. Dieser deutsche Guide erklärt den bestätigten Ablauf, ohne aus kurzen Trailerszenen ein fertiges Handbuch zu erfinden.',
    answer: 'Beim Dear Passengers Gameplay wählt die Crew vor dem Start Passagiere und Fracht, teilt Cockpit- und Kabinenaufgaben auf und reagiert während des Flugs auf Wetter, Turbulenzen und eskalierende Probleme. Steam bestätigt Einzelspieler und Online-Koop; Missionen, Fortschritt, Steuerungsdetails und die maximale Spielerzahl sind noch nicht veröffentlicht.',
    note: 'Als bestätigt gelten Steam-Angaben und direkte FLEXUS-Aussagen. Sichtbare Trailerszenen werden als Beobachtung gekennzeichnet; ein gezeigter Gegenstand beweist weder eine fertige Mechanik noch den Umfang der Vollversion.',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Offizielle Dear Passengers Kabinenszene als Hintergrund für den deutschen Gameplay-Guide',
    sections: [
      {
        id: 'spielablauf', kicker: 'SPIELABLAUF', heading: 'Wie läuft das Dear Passengers Gameplay ab?',
        paragraphs: [
          'Der öffentliche Spielablauf beginnt nicht erst in der Luft. Laut Steam entscheidet die Besatzung vor dem Abflug, welche Passagiere und welche Fracht an Bord kommen. Höhere Auszahlungen sind mit schwierigeren Gästen oder problematischeren Ladungen verbunden. Damit verknüpft das Dear Passengers Gameplay eine Risikoentscheidung am Boden mit dem späteren Stress in der Kabine. Welche Menüs, Werte oder Vertragsarten diese Auswahl steuern, hat FLEXUS noch nicht gezeigt.',
          'Nach dem Start verteilt sich die Arbeit zwischen Cockpit und Kabine. Eine Person kann das Flugzeug steuern, während andere Crewmitglieder Essen und Getränke ausgeben, Passagiere kontrollieren, Gepäck sichern und auf Zwischenfälle reagieren. Diese Aufgaben sind nicht unabhängig: Eine harte Kurve oder ein Luftloch kann lose Gegenstände durch die Kabine schleudern und aus normalem Service eine Rettungsaktion machen. Genau diese gegenseitige Abhängigkeit prägt das Dear Passengers Gameplay.',
          'Das Ziel wird offiziell als erfolgreicher Transport beschrieben, nicht als realistische Linienflug-Simulation. Die Crew versucht, Flugzeug, Ladung und möglichst viele Passagiere ans Ziel zu bringen, während der eigene Wunsch nach einer höheren Auszahlung neue Risiken erzeugt. [[/de/dear-passengers-bestaetigte-features/|Der deutsche Feature-Check]] hält fest, welche Teile dieses Ablaufs zugesagt sind und welche nur plausibel wirken.'
        ]
      },
      {
        id: 'cockpit', kicker: 'COCKPIT', heading: 'Pilotieren im Dear Passengers Gameplay',
        paragraphs: [
          'Fliegen ist eine bestätigte Kernaufgabe. Die offizielle Beschreibung nennt dynamisches Wetter, Turbulenzen und Luftlöcher; der Trailer zeigt das Cockpit aus der Ego-Perspektive und Gefahren außerhalb des Flugzeugs. Daraus folgt sicher, dass Bewegungen des Flugzeugs Auswirkungen auf die Kabine haben. Nicht bestätigt sind dagegen ein realistisches Flugmodell, Checklisten, Funknavigation, Treibstoffplanung, Autopilot oder lizenzierte Instrumente.',
          'Wer das Dear Passengers Gameplay als Flugsimulator bezeichnet, sollte deshalb vorsichtig formulieren. Steam ordnet das Spiel Action, Adventure und Indie zu. Der Reiz liegt nach heutigem Stand in der Zusammenarbeit und der physikalischen Komik, nicht in einer dokumentierten Simulation ziviler Luftfahrt. FLEXUS kann später anspruchsvollere Systeme zeigen, doch derzeit wäre jede Aussage über Realismusstufen oder vollständige Cockpitverfahren eine Vermutung.',
          'Im Koop dürfte der Pilot Informationen aus der Kabine benötigen, weil eine sichere Flugbewegung den Innenraum direkt beeinflusst. Umgekehrt muss die Kabinencrew Probleme melden, bevor sie das Cockpit erreichen. Ob es Karten, Wegpunkte, unterschiedliche Flugzeuge oder einen frei wählbaren Schwierigkeitsgrad gibt, bleibt offen. Der [[/de/dear-passengers-rollen/|Guide zu Pilot und Kabinencrew]] trennt bestätigte Verantwortung von möglichen Teamrollen.'
        ]
      },
      {
        id: 'kabine', kicker: 'KABINENSERVICE', heading: 'Kabine, Passagiere und Fracht',
        paragraphs: [
          'In der Kabine beginnt das Dear Passengers Gameplay mit vertrauten Aufgaben: Passagiere erwarten Essen, Getränke und einen möglichst ruhigen Flug. Gleichzeitig müssen Crewmitglieder Fracht schützen und verhindern, dass kleine Probleme zu einer Katastrophe werden. Steam beschreibt Passagiere, Gepäck und lose Gegenstände ausdrücklich als physikbasiert. Turbulenzen verändern dadurch nicht nur die Optik, sondern den Arbeitsraum der Crew.',
          'Die Auswahl vor dem Abflug schafft einen Risiko-Belohnungs-Konflikt. Schwierige Passagiere und riskante Fracht versprechen mehr Geld, verursachen aber wahrscheinlich mehr Aufwand. Noch unbekannt sind konkrete Passagierklassen, Bedürfnisse, Zufriedenheitswerte, Inventarlimits und Frachtkategorien. Auch Begriffe wie Schmuggel, Versicherung oder Rufsystem sollten nicht als fertige Systeme dargestellt werden, solange FLEXUS sie nicht erklärt.',
          'Das Dear Passengers Gameplay zeigt damit eine nachvollziehbare Grundidee, aber noch keine vollständige Ökonomie. Eine Auszahlung ist in der offiziellen Beschreibung erwähnt; wofür Geld ausgegeben wird, ist nicht veröffentlicht. Upgrades, Reparaturen, Kosmetik, neue Flugzeuge oder eine dauerhafte Firmenentwicklung bleiben unbekannt. Dieser Unterschied ist wichtig, weil ein bestätigter Belohnungsanreiz noch kein bestätigter Fortschrittsbaum ist.'
        ]
      },
      {
        id: 'wetter', kicker: 'PHYSIK UND WETTER', heading: 'Warum Turbulenzen die ganze Crew betreffen',
        paragraphs: [
          'Dynamisches Wetter, Turbulenzen und Luftlöcher gehören zu den klar genannten Funktionen. Eine schlechte Bewegung kann Passagiere, Koffer und andere lose Dinge durch die Kabine werfen. Für das Dear Passengers Gameplay bedeutet das: Die Pilotentscheidung wird zur Kabinengefahr, und schlechte Vorbereitung am Boden kann während des Flugs zusätzliche Arbeit erzeugen. Diese Verbindung unterscheidet das Konzept von einem reinen Service-Spiel.',
          'Der Trailer zeigt spektakuläre Zwischenfälle, doch er verrät nicht, ob Ereignisse zufällig, missionsgebunden oder durch Spielerentscheidungen ausgelöst werden. Auch Häufigkeit, Schwierigkeitskurve und Reparatursystem sind offen. Sichtbare Werkzeuge oder Schäden beweisen nur, dass sie in der gezeigten Szene vorkommen. Sie bestätigen keine vollständige Liste von Notfällen, keinen Crafting-Baum und keine prozedural erzeugten Katastrophen.',
          'Eine faire Beschreibung nennt daher das bestätigte Ergebnis, nicht die unbekannte Technik dahinter: Wetter und Physik können die Kabine destabilisieren. Ob das Dear Passengers Gameplay dafür feste Skripte, Simulation oder eine Mischung verwendet, ist nicht erklärt. [[/de/dear-passengers-trailer/|Die deutsche Traileranalyse]] dokumentiert Szene für Szene, was sichtbar ist und wo eine Interpretation beginnt.'
        ]
      },
      {
        id: 'solo-koop', kicker: 'SPIELMODI', heading: 'Solo und Online-Koop im Dear Passengers Gameplay',
        paragraphs: [
          'Steam bestätigt sowohl Einzelspieler als auch Online-Koop. Das ist die belastbare Aussage. Nicht bekannt ist, wie eine einzelne Person gleichzeitig Cockpit und Kabine bewältigt. Möglich wären Rollenwechsel, KI-Unterstützung, vereinfachte Aufgaben oder ein anderer Ablauf, doch keine dieser Lösungen ist angekündigt. Der Solo-Modus sollte deshalb nicht mit erfundenen Bots oder automatischer Kabinencrew erklärt werden.',
          'Auch im Online-Koop fehlt eine maximale Spielerzahl. Mehrere Figuren im Trailer sind kein Lobbywert. Lokaler Koop, Splitscreen, Crossplay, öffentliche Lobbys, Serverbrowser, Join-in-Progress und integrierter Voice-Chat sind ebenfalls offen. Der [[/de/dear-passengers-spielerzahl/|deutsche Spielerzahl-Guide]] verfolgt genau diese Fragen und aktualisiert sie erst, wenn Steam oder FLEXUS eine technische Angabe liefert.',
          'Das Dear Passengers Gameplay ist klar auf geteilte Verantwortung ausgelegt, aber nicht jede Kommunikationsfunktion ist dadurch automatisch bestätigt. Freunde können externe Sprachdienste verwenden; das beweist keinen Ingame-Chat. Ebenso sagt Online-Koop nichts über dedizierte Server oder Peer-to-Peer aus. Diese Trennung verhindert, dass Erwartungen später wie gebrochene Zusagen wirken.'
        ]
      },
      {
        id: 'offen', kicker: 'NOCH OFFEN', heading: 'Was über das Dear Passengers Gameplay unbekannt ist',
        paragraphs: [
          'FLEXUS hat noch keinen vollständigen Umfang genannt. Unbekannt sind Anzahl der Flugzeuge, Flughäfen, Routen, Missionen und Passagierarten. Es gibt keine veröffentlichte Kampagnenlänge, keinen bestätigten Endlosmodus und keine Roadmap. Auch Speichersystem, Matchmaking, Barrierefreiheit, Mod-Support und Workshop-Anbindung sind nicht beschrieben. Solche Lücken sind bei einem angekündigten Spiel normal, dürfen aber nicht mit Vergleichstiteln gefüllt werden.',
          'Auch Preis, öffentliche Demo und genauer Release-Tag fehlen. Eine geplante Demo wurde in einem Entwicklerinterview erwähnt, steht aber noch nicht als Download auf Steam bereit. Sobald sie erscheint, kann das Dear Passengers Gameplay praktisch geprüft werden: Steuerung, Solo-Umsetzung, Netzwerk, Leistung und tatsächliche Aufgabenverteilung. Bis dahin bleibt dieser Guide ein Quellencheck und keine Rezension.',
          'Für aktuelle Änderungen lohnt sich [[/de/dear-passengers-news/|der deutsche News-Überblick]]. Dort werden neue Angaben nach Datum und Quelle protokolliert. Eine Änderung wird erst übernommen, wenn eine erreichbare Primärquelle vorliegt. Automatisch erzeugte Händlerdaten, Fan-Wikis und Social-Media-Screenshots ohne Original ersetzen keine offizielle Bestätigung.'
        ]
      },
      {
        id: 'quellen', kicker: 'QUELLEN', heading: 'So prüfen wir das Dear Passengers Gameplay',
        paragraphs: [
          'Die wichtigste Quelle ist die offizielle Steam-Seite von FLEXUS. Sie nennt den grundlegenden Spielablauf, Einzelspieler, Online-Koop, Wetter, Physik, Passagiere und Fracht. Direkte Entwicklerinterviews liefern zusätzlichen Kontext, werden aber als Aussage zum jeweiligen Zeitpunkt behandelt. Ein Entwicklungsziel ist nicht automatisch eine garantierte Funktion der Vollversion.',
          'Trailer und Screenshots dienen als visuelle Belege. Sie erlauben Aussagen wie „eine Kabinenszene zeigt lose Gegenstände“, aber nicht „jede Mission enthält dieses Ereignis“. Deutsche Medien verwenden natürlich Begriffe wie Koop-Spiel, Gameplay, Pilot, Kabinencrew, Systemanforderungen und Release. Diese lokale Wortwahl bestimmt Titel und Zwischenüberschriften; die Faktenbasis bleibt bei den Primärquellen.',
          'DearPassengers.net ist unabhängig und nicht mit FLEXUS, Valve oder Steam verbunden. Das Dear Passengers Gameplay kann sich bis zur Veröffentlichung ändern. Hinweise auf Fehler können über [[/de/kontakt/|die deutsche Kontaktseite]] gemeldet werden; die Vorgehensweise steht in den [[/de/redaktionsrichtlinien/|Redaktionsrichtlinien]].'
        ]
      }
    ],
    faqs: [
      { question: 'Wie funktioniert das Dear Passengers Gameplay?', answer: 'Die Crew wählt Passagiere und Fracht, teilt Pilot- und Kabinenaufgaben auf und versucht, trotz Wetter, Turbulenzen und physikbasiertem Chaos das Ziel zu erreichen. Details zu Missionen und Fortschritt sind noch offen.' },
      { question: 'Kann man im Dear Passengers Gameplay selbst fliegen?', answer: 'Ja. Das Steuern des Flugzeugs ist eine bestätigte Aufgabe. Wie realistisch Flugmodell, Instrumente und Steuerung ausfallen, hat FLEXUS noch nicht erklärt.' },
      { question: 'Was macht die Kabinencrew?', answer: 'Sie versorgt Passagiere, schützt Fracht und reagiert auf Probleme im Innenraum. Konkrete Werkzeuge, Werte und Passagierklassen sind noch nicht vollständig bekannt.' },
      { question: 'Gibt es Dear Passengers Gameplay für Einzelspieler?', answer: 'Ja, Steam listet Einzelspieler. Wie eine Person mehrere Rollen organisiert oder ob Unterstützungssysteme existieren, ist nicht veröffentlicht.' },
      { question: 'Ist Dear Passengers ein realistischer Flugsimulator?', answer: 'Nicht bestätigt. Die offizielle Einordnung betont Action, Adventure, Online-Koop und physikalisches Chaos. Ein vollständiger realistischer Simulator wurde nicht angekündigt.' },
      { question: 'Wann kann man das Dear Passengers Gameplay testen?', answer: 'FLEXUS plant eine Demo, aber aktuell gibt es auf Steam keinen öffentlichen Download und keinen Termin. Drittanbieterdateien sind kein verifizierter Testzugang.' }
    ],
    related: ['dear-passengers-spiel', 'dear-passengers-vr', 'dear-passengers-ps5', ...sharedRelated.slice(0, 3), 'spiele-wie-dear-passengers'],
  },
  {
    slug: 'dear-passengers-spielerzahl',
    englishPath: '/dear-passengers-player-count/',
    chinesePath: '/zh-cn/dear-passengers-player-count/',
    keyword: 'Dear Passengers Spielerzahl',
    title: 'Dear Passengers Spielerzahl: Wie viele Spieler im Koop?',
    description: 'Die Dear Passengers Spielerzahl ist noch nicht bestätigt. Fakten zu Online-Koop, Einzelspieler, lokalem Koop, Crossplay, Voice-Chat und offenen Lobbyfragen.',
    eyebrow: 'DEUTSCHER KOOP-CHECK · STAND 24.07.2026',
    h1: 'Dear Passengers Spielerzahl:',
    h1Accent: 'Wie viele Spieler können zusammen spielen?',
    intro: 'Zur Dear Passengers Spielerzahl gibt es eine klare Grenze zwischen sicherem Wissen und Vermutung: Steam bestätigt Einzelspieler und Online-Koop, nennt aber keine maximale Lobbygröße. Dieser Guide beantwortet die deutschen Fragen zu Koop, Solo, Splitscreen, Crossplay und Voice-Chat ohne Zahlen aus dem Trailer zu erraten.',
    answer: 'Die maximale Dear Passengers Spielerzahl ist noch unbekannt. Offiziell bestätigt sind nur Einzelspieler und Online-Koop. Mehrere Crewfiguren im Trailer belegen keine feste Lobbygröße; lokaler Koop, Splitscreen, Crossplay, öffentliche Lobbys und integrierter Voice-Chat sind bislang nicht angekündigt.',
    note: 'Die Dear Passengers Spielerzahl wird nur aus einem offiziellen Steam-Funktionsfeld, einer eindeutigen FLEXUS-Antwort oder einer veröffentlichten Testbeschreibung übernommen. Figuren im Trailer und Zahlen anderer Koop-Spiele gelten nicht als Nachweis.',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers Crew in einer Flugzeugkabine als Motiv für den deutschen Spielerzahl-Guide',
    sections: [
      {
        id: 'anzahl', kicker: 'KURZ ERKLÄRT', heading: 'Wie hoch ist die Dear Passengers Spielerzahl?',
        paragraphs: [
          'FLEXUS hat noch keine maximale Zahl veröffentlicht. Auf Steam stehen die Merkmale Einzelspieler und Online-Koop, aber kein Feld wie „Online-Koop für 2–4 Spieler“. Damit ist sicher, dass gemeinsames Spielen vorgesehen ist, nicht aber, wie groß eine Lobby wird. Jede feste Dear Passengers Spielerzahl auf Händlerseiten, Wikis oder Fanportalen ist derzeit unbelegt, sofern keine Primärquelle verlinkt wird.',
          'Der Ankündigungstrailer zeigt mehrere Personen in Cockpit und Kabine. Solche Szenen erklären die Rollenfantasie, ersetzen aber keine technische Grenze. Trailer können für Kamerafahrten zusätzliche Figuren nutzen, aus verschiedenen Sitzungen geschnitten sein oder einen Entwicklungsstand zeigen. Eine Zählung sichtbarer Crewmitglieder beantwortet daher nicht, wie viele Konten gleichzeitig verbunden werden können.',
          'Auch Vergleiche mit R.E.P.O., Lethal Company oder anderen Koop-Hits helfen nicht. Jedes Spiel besitzt eigene Netzwerk-, Level- und Balancegrenzen. Die Dear Passengers Spielerzahl muss für dieses Produkt bestätigt werden. [[/de/dear-passengers-news/|Der deutsche News-Tracker]] protokolliert eine spätere Angabe mit Datum und Quelle.'
        ]
      },
      {
        id: 'koop', kicker: 'ONLINE-KOOP', heading: 'Was über den Dear Passengers Koop bestätigt ist',
        paragraphs: [
          'Online-Koop mit Freunden gehört zu den offiziellen Hauptmerkmalen. Die Steam-Beschreibung nennt das Aufteilen der Besatzung: Eine Person kann das Flugzeug steuern, während andere in der Kabine arbeiten. Passagiere versorgen, Fracht schützen und Zwischenfälle kontrollieren sind miteinander verbundene Aufgaben. Diese Rollenverteilung erklärt, warum die Frage nach der Dear Passengers Spielerzahl für deutsche Suchende wichtig ist.',
          '„Mit Freunden“ bestätigt jedoch weder private Einladungen noch öffentliche Spielsuche. Steam zeigt aktuell keine genaueren Netzwerkfelder. Es ist unbekannt, ob Partys über Steam-Einladungen, Raumcodes, offene Lobbys oder Matchmaking entstehen. Ebenso offen sind Join-in-Progress, Host-Migration und die Frage, ob eine begonnene Runde nach einem Verbindungsabbruch fortgesetzt werden kann.',
          'Die praktische Teamgröße hängt außerdem vom finalen Aufgabendesign ab. Cockpit, Service, Passagiere und Fracht lassen mehrere Verantwortungsbereiche erkennen, aber FLEXUS hat keine Pflichtbesetzung genannt. Eine kleine Gruppe könnte Aufgaben kombinieren; eine größere Gruppe könnte sie spezialisieren. Solange die Dear Passengers Spielerzahl fehlt, beschreibt [[/de/dear-passengers-rollen/|der Rollen-Guide]] nur bestätigte Tätigkeiten, keine erfundene Klassenverteilung.'
        ]
      },
      {
        id: 'solo', kicker: 'EINZELSPIELER', heading: 'Kann man Dear Passengers allein spielen?',
        paragraphs: [
          'Ja. Steam listet Einzelspieler ausdrücklich auf. Das ist unabhängig von der offenen Dear Passengers Spielerzahl eine bestätigte Spielart. Nicht erklärt ist, wie eine Person die Aufgaben an beiden Enden des Flugzeugs bewältigt. Rollenwechsel, KI-Helfer, vereinfachte Kabinenarbeit oder Pausenfunktionen wären denkbar, sind aber nicht angekündigt und werden hier nicht als Feature dargestellt.',
          'Der Solo-Eintrag beweist auch nicht, dass der Ablauf identisch zum Online-Koop ist. Entwickler können Missionen, Tempo oder Aufgabenmenge anpassen. FLEXUS hat weder eine Solo-Kampagne noch Bots beschrieben. Wer gezielt ohne Freunde spielen möchte, sollte deshalb auf Demo, Gameplay-Video oder eine offizielle FAQ warten, bevor er Erwartungen an Begleiter und Balance festlegt.',
          'Eine öffentliche Demo könnte diese Frage erstmals praktisch beantworten. Aktuell gibt es jedoch keinen Steam-Download. [[/de/dear-passengers-demo/|Der deutsche Demo-Status]] trennt die bestätigte Planung von einem tatsächlich verfügbaren Test. Erst eine spielbare Fassung zeigt, wie sich die Dear Passengers Spielerzahl auf Solo-Abläufe und die Aufgabenverteilung auswirkt.'
        ]
      },
      {
        id: 'lokal', kicker: 'SPLITSCREEN', heading: 'Lokaler Koop und Splitscreen',
        paragraphs: [
          'Lokaler Koop ist nicht bestätigt. Steam markiert Online-Koop, aber kein Shared-/Split-Screen-Feld. Das bedeutet nicht, dass eine lokale Funktion technisch unmöglich ist; es bedeutet nur, dass sie derzeit nicht beworben wird. Für die Dear Passengers Spielerzahl darf ein Online-Limit außerdem nicht automatisch als Zahl lokaler Personen übernommen werden.',
          'Ein Trailer mit mehreren Figuren sagt nichts darüber aus, wie viele Eingabegeräte an einem PC unterstützt werden oder ob die Kamera geteilt werden kann. Couch-Koop benötigt eigene Benutzeroberflächen, Controllerverwaltung und oft eine andere Darstellung. Ohne ein Steam-Merkmal, eine FLEXUS-Aussage oder eine spielbare Version bleibt Splitscreen „nicht angekündigt“ statt „ausgeschlossen“.',
          'Die Formulierung ist bewusst präzise: „nicht angekündigt“ lässt eine spätere Ergänzung offen, „wird es nicht geben“ wäre zu stark. Wenn FLEXUS die Dear Passengers Spielerzahl veröffentlicht, muss zusätzlich geprüft werden, ob sie nur Online-Verbindungen oder auch lokale Personen umfasst. Bis dahin sollten Gruppen mit einem gemeinsamen Bildschirm keine Unterstützung einplanen.'
        ]
      },
      {
        id: 'crossplay', kicker: 'PLATTFORMEN', heading: 'Crossplay, Konsolen und Steam Deck',
        paragraphs: [
          'Crossplay ist nicht angekündigt. Der wichtigste Grund ist einfach: Windows-PC über Steam ist derzeit die einzige bestätigte Plattform. Es gibt keinen offiziellen Store-Eintrag für PlayStation, Xbox oder Nintendo Switch. Ohne eine zweite Plattform existiert noch keine bestätigte plattformübergreifende Verbindung, die eine Dear Passengers Spielerzahl beeinflussen könnte.',
          'Steam Deck ist ebenfalls kein separates Crossplay-System, sondern nutzt die PC-Bibliothek. Trotzdem fehlt eine Deck-Kompatibilitätsbewertung. Controller-Unterstützung, Lesbarkeit und Leistung wurden nicht bestätigt. Sichtbare Controller-ähnliche Bewegungen im Trailer reichen nicht aus, weil Gameplay-Aufnahmen keine vollständige Eingabematrix zeigen.',
          'Sollte FLEXUS später Konsolen ankündigen, müssen Port, Crossplay, Cross-Save und Lobbygrenze getrennt geprüft werden. Ein PS5-Release würde Crossplay nicht automatisch garantieren. Der [[/de/dear-passengers-release/|deutsche Release-Guide]] führt den aktuellen Plattformstatus und verhindert, dass Wunschlisten oder Platzhalterseiten wie offizielle Ankündigungen behandelt werden.'
        ]
      },
      {
        id: 'voice', kicker: 'KOMMUNIKATION', heading: 'Voice-Chat und öffentliche Lobbys',
        paragraphs: [
          'Integrierter Voice-Chat ist nicht bestätigt. Zusammenarbeit wirkt für das Konzept wichtig, doch eine notwendige Kommunikation kann über Steam, Discord oder andere Dienste erfolgen. Der Begriff Online-Koop beweist keine räumliche Sprachübertragung, keinen Funkkanal und keine Push-to-Talk-Funktion. Solche Behauptungen tauchen bei Koop-Spielen schnell auf, benötigen aber eine eigene Quelle.',
          'Auch öffentliche Lobbys und ein Serverbrowser fehlen in den offiziellen Angaben. Die Dear Passengers Spielerzahl beantwortet später nur die Kapazität; sie sagt nicht automatisch, wie fremde Personen zusammenfinden. Matchmaking, private Räume, Passwortschutz, Moderation und Meldefunktionen sind getrennte Produktentscheidungen. Ein vollständiger Multiplayer-Check muss alle Felder einzeln bewerten.',
          'Bis zu einer offiziellen Antwort ist die sichere Planung: Online-Koop ist vorhanden, die Gruppe sollte aber keine bestimmte Lobbytechnik voraussetzen. Wer mit Freunden spielen möchte, kann das Spiel auf Steam vormerken und die Store-Funktionsliste beobachten. Änderungen an der Dear Passengers Spielerzahl werden hier erst nach sichtbarer Bestätigung übernommen.'
        ]
      },
      {
        id: 'pruefung', kicker: 'VERIFIKATION', heading: 'Welche Quelle eine Spielerzahl bestätigt',
        paragraphs: [
          'Am stärksten wäre ein Steam-Feld mit einer konkreten Zahl, weil es direkt am Produkt steht. Ebenfalls belastbar sind eine offizielle FLEXUS-FAQ, eine Entwicklerantwort mit eindeutigem Kontext oder eine Demo-Seite, die ihre Gruppengröße nennt. Ein Medienbericht kann die Information zusammenfassen, sollte aber zur Originalaussage führen. So lässt sich die Dear Passengers Spielerzahl unabhängig nachvollziehen.',
          'Schwächer sind Händler-Metadaten, automatisch erzeugte Datenbanken, Such-Snippets und Fan-Wikis. Sie können korrekt sein, aber ohne Ursprungslink ist nicht erkennbar, ob eine Zahl geraten, aus einem Trailer gezählt oder aus einem anderen Spiel kopiert wurde. Ein Reddit-Wunsch zeigt Nachfrage, nicht den finalen Funktionsumfang. Diese Quellenstufen gelten auf allen Sprachversionen gleich.',
          'DearPassengers.net trennt bestätigt, beobachtet und unbekannt. Der deutsche Wortlaut orientiert sich an tatsächlichen Suchfragen wie „wie viele Spieler“ und „Spielerzahl“, nicht an einer wörtlichen Übersetzung von „player count“. Korrekturen können über [[/de/kontakt/|Kontakt und Korrekturen]] mit Originalquelle eingereicht werden.'
        ]
      }
    ],
    faqs: [
      { question: 'Wie hoch ist die Dear Passengers Spielerzahl?', answer: 'Eine maximale Zahl ist noch nicht offiziell genannt. Steam bestätigt Einzelspieler und Online-Koop, aber keine Lobbygröße.' },
      { question: 'Ist Dear Passengers Multiplayer?', answer: 'Ja. Online-Koop ist auf Steam bestätigt. Wie Partys erstellt werden und ob es Matchmaking gibt, ist noch offen.' },
      { question: 'Kann man Dear Passengers zu zweit spielen?', answer: 'Koop mit Freunden ist bestätigt, eine konkrete Mindest- oder Maximalzahl aber nicht. Eine sichere Zusage für exakt zwei Personen liegt noch nicht vor.' },
      { question: 'Gibt es Splitscreen oder lokalen Koop?', answer: 'Nicht angekündigt. Steam markiert Online-Koop, aber derzeit kein Shared-/Split-Screen-Merkmal.' },
      { question: 'Hat Dear Passengers Crossplay?', answer: 'Crossplay ist nicht bestätigt. Windows-PC über Steam ist bislang die einzige offiziell genannte Plattform.' },
      { question: 'Hat Dear Passengers Voice-Chat?', answer: 'Ein integrierter Voice-Chat ist nicht angekündigt. Online-Koop allein beweist keine Sprachfunktion.' }
    ],
    related: ['dear-passengers-gameplay', 'dear-passengers-rollen', 'dear-passengers-demo', 'dear-passengers-release'],
  },
  {
    slug: 'dear-passengers-demo',
    englishPath: '/dear-passengers-demo/',
    keyword: 'Dear Passengers Demo',
    title: 'Dear Passengers Demo: Download, Playtest und Gamescom',
    description: 'Die Dear Passengers Demo ist geplant, aber noch nicht öffentlich. Fakten zu Gamescom, Steam Playtest, Download, Beta und sicheren Zugangswegen.',
    eyebrow: 'DEUTSCHER DEMO-CHECK · STAND 24.07.2026',
    h1: 'Dear Passengers Demo:',
    h1Accent: 'Was zu Download und Test bestätigt ist',
    intro: 'Eine Dear Passengers Demo ist als Plan bestätigt, steht aber noch nicht öffentlich zum Download bereit. FLEXUS sprach über eine Gamescom-Fassung und eine spätere öffentliche Demo. Dieser deutsche Status-Guide erklärt, was das bedeutet, welche Angaben fehlen und wie echte Zugänge von Platzhaltern unterschieden werden.',
    answer: 'Die Dear Passengers Demo ist noch nicht öffentlich verfügbar. FLEXUS hat eine spielbare Gamescom-Fassung und eine spätere öffentliche Demo als Ziel genannt. Auf Steam gibt es aktuell weder einen Demo-Button noch eine Playtest-Anmeldung, einen Termin oder bestätigte Zugangsvoraussetzungen.',
    note: 'Eine Entwicklerabsicht bestätigt die Demo-Planung, aber noch keinen veröffentlichten Build. Als verfügbar gilt die Dear Passengers Demo erst, wenn FLEXUS oder die offizielle Steam-Seite einen erreichbaren Zugang anbietet.',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers Flugzeugkabine als Hintergrund für den deutschen Demo- und Playtest-Guide',
    sections: [
      {
        id: 'status', kicker: 'AKTUELLER STATUS', heading: 'Gibt es schon eine Dear Passengers Demo?',
        paragraphs: [
          'Noch nicht als öffentlicher Download. Die offizielle Steam-Seite besitzt keinen Demo-Button und kein Feld „Zugriff anfragen“ für einen Steam Playtest. Es gibt auch keine veröffentlichte Startzeit, Laufzeit oder Teilnehmerzahl. Damit ist die Dear Passengers Demo geplant, aber nicht freigegeben. Diese Unterscheidung verhindert, dass eine Interviewaussage wie ein bereits verfügbares Produkt behandelt wird.',
          'FLEXUS-Gründer Semen Kozyura erklärte in einem direkten Interview, das Team wolle eine Version für die Gamescom vorbereiten und später eine öffentliche Demo herausbringen. Das ist ein relevanter Entwicklerplan. Es ist jedoch kein Versprechen, dass Messe- und Heimversion denselben Inhalt besitzen oder am selben Tag erscheinen. Entwicklungspläne können sich ändern, solange keine offizielle Downloadseite existiert.',
          'Wer die Dear Passengers Demo sucht, sollte deshalb bei Steam beginnen. Entwickler und Publisher müssen FLEXUS heißen. Ein verifizierter Test wird entweder direkt auf der Produktseite erscheinen oder von einem eindeutig offiziellen FLEXUS-Kanal dorthin verlinken. [[/de/dear-passengers-download/|Der deutsche Download-Guide]] erklärt zusätzliche Sicherheitsprüfungen.'
        ]
      },
      {
        id: 'gamescom', kicker: 'MESSEVERSION', heading: 'Was die Gamescom-Aussage bedeutet',
        paragraphs: [
          'Die Gamescom ist für deutsche Spieler besonders relevant, weil eine Messeversion persönlichen Zugang ermöglichen könnte. Die Aussage bestätigt, dass FLEXUS eine spielbare Fassung für die Veranstaltung anstrebt. Sie bestätigt nicht automatisch einen öffentlichen Stand, eine Hallennummer, buchbare Termine oder garantierte Spielstationen. Ohne Ausstellerverzeichnis und Studioankündigung sollten solche Details offenbleiben.',
          'Eine Messe-Demo kann außerdem speziell vorbereitet sein. Entwickler begrenzen häufig Mission, Zeit, Hardware und Netzwerk, um einen stabilen Eindruck zu zeigen. Daraus folgt nicht, dass der gleiche Build zuhause verteilt wird. Die spätere öffentliche Dear Passengers Demo kann andere Inhalte, Fehlerbehebungen oder Zugangsvoraussetzungen haben. Beide Versionen brauchen daher eigene Belege.',
          'Sobald FLEXUS konkrete Gamescom-Daten nennt, prüft dieser Guide Veranstaltung, Jahr, Ort, Zugang und Quelle. Ein Medienhinweis ohne offiziellen Standplan kann nützlich sein, genügt aber nicht als endgültige Bestätigung. Bis dahin lautet der Status „angestrebt“, nicht „für alle Besucher spielbar“.'
        ]
      },
      {
        id: 'download', kicker: 'SICHERER ZUGANG', heading: 'Wo die Dear Passengers Demo erscheinen dürfte',
        paragraphs: [
          'Steam ist der sicherste und wahrscheinlichste Ausgangspunkt, weil die Vollversion dort offiziell gelistet ist. Ein echter Demo-Eintrag zeigt den richtigen App-Namen, FLEXUS als Entwickler oder Publisher und einen Download über den Steam-Client. Es ist nicht nötig, separate Installationsprogramme, Browser-Erweiterungen oder Passwortarchive von unbekannten Seiten zu laden.',
          'Eine offizielle FLEXUS-Website oder ein verifizierter Social-Kanal kann auf Steam, ein Testformular oder eine Messeanmeldung verweisen. Entscheidend ist die nachvollziehbare Verbindung. Eine Seite, die nur Logo, Screenshots und den Namen Dear Passengers verwendet, beweist keine Partnerschaft. Auch ein Countdown ohne Entwicklerquelle macht eine angebliche Dear Passengers Demo nicht echt.',
          'Vor einem Download sollten URL, Herausgeber, Dateityp und Berechtigungen geprüft werden. Steam installiert Spiele über den Client; eine angebliche Android-APK, ein Konsolen-Key oder ein „Crack“ passt nicht zum bestätigten Windows-PC-Status. Wenn FLEXUS später zusätzliche Plattformen ankündigt, wird die Sicherheitsbewertung mit den jeweiligen offiziellen Stores erweitert.'
        ]
      },
      {
        id: 'playtest', kicker: 'BEGRIFFE', heading: 'Demo, Beta, Playtest und Early Access',
        paragraphs: [
          'Diese Begriffe sind nicht austauschbar. Eine Demo ist normalerweise eine begrenzte öffentliche Probe des Spiels. Ein Steam Playtest ist ein separates Zugangssystem, bei dem Entwickler Teilnehmer freischalten können. Beta bezeichnet einen Entwicklungsstand oder Test, während Early Access eine kaufbare Vorabversion sein kann. Für Dear Passengers ist derzeit nur eine geplante Demo direkt erwähnt.',
          'Auf Steam ist kein Playtest-Formular sichtbar. FLEXUS hat keine geschlossene Beta, keinen offenen Betatest und keinen Early-Access-Start angekündigt. Wer „Dear Passengers Beta Key“ liest, sollte daher eine Primärquelle verlangen. Ein Community-Gewinnspiel oder Händlerangebot ohne offiziellen Zusammenhang ist keine Bestätigung und sollte nicht mit Kontodaten bezahlt werden.',
          'Die Dear Passengers Demo könnte später über Steam Playtest verteilt werden, muss es aber nicht. Erst die veröffentlichte Zugangsart entscheidet, welcher Begriff richtig ist. Dieser Guide übernimmt dann die offizielle Bezeichnung, statt Suchbegriffe zu vermischen. So bleiben Erwartungen zu Dauer, Fortschritt und Verfügbarkeit nachvollziehbar.'
        ]
      },
      {
        id: 'inhalt', kicker: 'ERWARTUNGEN', heading: 'Was eine Demo wahrscheinlich klären kann',
        paragraphs: [
          'Eine spielbare Fassung könnte erstmals zeigen, wie Cockpit und Kabine praktisch zusammenarbeiten, wie sich das Flugzeug steuert und wie stark Turbulenzen auf Passagiere und Fracht wirken. Sie könnte auch die Solo-Umsetzung und eine Test-Lobbygröße nennen. Solange die Dear Passengers Demo nicht veröffentlicht ist, sind das Prüfziele, keine zugesagten Inhalte.',
          'Nicht automatisch zu erwarten sind die vollständige Kampagne, alle Flugzeuge, sämtliche Passagiertypen oder der finale Fortschritt. Demos sind oft begrenzt. Ein fehlendes Feature in einem frühen Messebuild beweist ebenso wenig eine Streichung wie eine sichtbare Testfunktion den garantierten Umfang der Vollversion. Version, Datum und Entwicklerhinweis müssen bei jeder Beobachtung mitgespeichert werden.',
          'Für eine faire Bewertung wird die Demo nach Stabilität, Lesbarkeit, Steuerung, Netzwerk und klar erkennbaren Aufgaben untersucht. Eine Performance-Messung muss die verwendete Hardware nennen. Eindrücke werden getrennt von offiziellen Fakten veröffentlicht. [[/de/dear-passengers-gameplay/|Der Gameplay-Guide]] wird erst nach eigener überprüfbarer Evidenz um praktische Details ergänzt.'
        ]
      },
      {
        id: 'vorbereitung', kicker: 'VORBEREITUNG', heading: 'So verpasst man die Dear Passengers Demo nicht',
        paragraphs: [
          'Das Spiel kann kostenlos auf die Steam-Wunschliste gesetzt werden. Dadurch kann Steam über relevante Veröffentlichungen informieren. Zusätzlich lohnt sich die offizielle Neuigkeiten-Seite des Spiels. Es ist nicht nötig, eine angebliche Vorbestellung abzuschließen, denn Preis und Kaufstart sind noch nicht veröffentlicht. Die Wunschliste ist derzeit die klare offizielle Aktion.',
          'Für einen möglichen Playtest sollte das eigene Steam-Konto abgesichert sein: starkes Passwort, Steam Guard und keine Anmeldung auf kopierten Login-Seiten. Echte Einladungen verlangen nicht, Inventargegenstände zu übertragen oder Fernwartungssoftware zu installieren. Eine Dear Passengers Demo über Steam bleibt mit dem offiziellen App-Kontext verbunden.',
          'Die derzeit bekannten Mindestanforderungen umfassen Windows 10 in 64 Bit, 8 GB RAM, DirectX 12, 4 GB Speicher und eine GTX 1060 oder RX 6600 XT. Das sind Anforderungen der angekündigten Vollversion, nicht zwingend einer späteren Demo. [[/de/dear-passengers-systemanforderungen/|Der deutsche PC-Check]] erklärt die Grenzen dieser Liste.'
        ]
      },
      {
        id: 'updates', kicker: 'STATUSÄNDERUNGEN', heading: 'Wann dieser Demo-Status aktualisiert wird',
        paragraphs: [
          'Eine Aktualisierung erfolgt, wenn Steam einen Demo-Button oder Playtest-Eintrag zeigt, FLEXUS einen Termin veröffentlicht, die Gamescom einen verifizierbaren Auftritt listet oder ein offizielles Formular erreichbar wird. Dann werden Zugang, Region, Plattform, Zeitraum und mögliche Limits gemeinsam geprüft. Nur „Demo kommt“ durch „Demo verfügbar“ zu ersetzen wäre zu wenig.',
          'Medienvorschauen und Videos können anschließend Beobachtungen ergänzen. Sie müssen Build, Ort und Quelle nennen, weil eine Messefassung nicht zwingend der öffentlichen Dear Passengers Demo entspricht. Unbestätigte Leaks, erneut hochgeladene Trailer und automatisch erzeugte Downloadseiten führen nicht zu einem Statuswechsel.',
          'Der aktuelle Stand bleibt daher eindeutig: geplant, aber nicht öffentlich. [[/de/dear-passengers-release/|Der Release-Guide]] verfolgt separat die Vollversion, und [[/de/dear-passengers-news/|der News-Guide]] ordnet neue Meldungen zeitlich ein. So konkurrieren die Seiten nicht um dieselbe Frage, sondern beantworten unterschiedliche Suchabsichten.'
        ]
      }
    ],
    faqs: [
      { question: 'Ist die Dear Passengers Demo schon verfügbar?', answer: 'Nein. Auf Steam gibt es aktuell weder einen Demo-Download noch eine Playtest-Anmeldung.' },
      { question: 'Hat FLEXUS eine Dear Passengers Demo bestätigt?', answer: 'Ja, als Plan. Der Gründer sprach über eine Gamescom-Fassung und eine spätere öffentliche Demo, ohne Termin oder Zugangsmethode zu nennen.' },
      { question: 'Wo kann man die Dear Passengers Demo herunterladen?', answer: 'Noch nirgends offiziell. Wenn sie erscheint, sollte der Zugang direkt über Steam oder einen eindeutig offiziellen FLEXUS-Link erfolgen.' },
      { question: 'Gibt es einen Dear Passengers Playtest?', answer: 'Derzeit ist auf Steam kein Playtest sichtbar. Eine spätere Nutzung dieses Systems ist möglich, aber nicht bestätigt.' },
      { question: 'Ist die Gamescom-Demo öffentlich?', answer: 'Noch nicht geklärt. Es fehlen Stand, Termin, Zugangsregeln und eine offizielle Veranstaltungsbestätigung.' },
      { question: 'Welche Inhalte hat die Dear Passengers Demo?', answer: 'Der Umfang ist unbekannt. Aussagen zu Mission, Spielerzahl, Fortschritt oder Dauer wären derzeit Vermutungen.' }
    ],
    related: ['dear-passengers-download', 'dear-passengers-gameplay', 'dear-passengers-release', 'dear-passengers-news'],
  },
  {
    slug: 'dear-passengers-download',
    englishPath: '/dear-passengers-download/',
    chinesePath: '/zh-cn/dear-passengers-download/',
    keyword: 'Dear Passengers Download',
    title: 'Dear Passengers Download: Steam, Demo und APK sicher prüfen',
    description: 'Der Dear Passengers Download ist noch nicht verfügbar. So prüfen Sie Steam, Demo, APK, Android-Angebote und vermeintliche Keys anhand offizieller Quellen.',
    eyebrow: 'DEUTSCHER DOWNLOAD-CHECK · STAND 24.07.2026',
    h1: 'Dear Passengers Download:',
    h1Accent: 'Offizieller Zugang statt falscher Dateien',
    intro: 'Ein offizieller Dear Passengers Download ist noch nicht verfügbar. Das Spiel kann auf Steam vorgemerkt, aber weder gekauft noch installiert werden. Dieser deutsche Sicherheitsguide erklärt, wo die Vollversion oder Demo später erscheinen kann und warum APK-, Key- und Direktdownload-Angebote derzeit nicht als offiziell gelten.',
    answer: 'Der Dear Passengers Download ist aktuell nicht freigeschaltet. Die einzige bestätigte Produktseite liegt bei Steam und bietet nur die Wunschliste. Es gibt keine offizielle Vollversion, keine öffentliche Demo, keine Android-APK und keinen bestätigten Konsolen-Download. Dateien von Drittseiten sind nicht durch FLEXUS verifiziert.',
    note: 'Nicht jede ähnlich benannte Datei ist automatisch schädlich; ohne nachvollziehbare Verbindung zu FLEXUS ist sie aber kein bestätigter Dear Passengers Download. Dieser Guide bewertet Herkunft und Produktstatus, nicht unbekannte Dateien ohne technische Analyse.',
    heroImage: '/images/dear-passengers-download-safety.webp',
    heroAlt: 'Redaktionelle Sicherheitsgrafik zum offiziellen Dear Passengers Download über Steam',
    sections: [
      { id: 'verfuegbar', kicker: 'VERFÜGBARKEIT', heading: 'Kann man Dear Passengers herunterladen?', paragraphs: [
        'Noch nicht. Steam nennt 2026 als Veröffentlichungsfenster, zeigt aber keinen Kaufen-, Installieren- oder Demo-Button. Der aktuelle Dear Passengers Download besteht deshalb nur als zukünftige Möglichkeit. Die Wunschliste speichert Interesse und kann über Updates informieren; sie lädt keine spielbare Datei herunter und ist keine Vorbestellung.',
        'FLEXUS hat eine spätere öffentliche Demo als Plan erwähnt. Auch diese Fassung steht noch nicht bereit. Ein angekündigter Test und ein veröffentlichter Download sind unterschiedliche Zustände. Erst wenn die offizielle Produktseite oder ein eindeutig zugeordneter Entwicklerkanal einen Zugang anbietet, kann von einem echten Dear Passengers Download gesprochen werden.',
        'Automatisch erzeugte Händlerseiten können Platzhalterpreise oder Kalenderdaten zeigen. Solche Einträge belegen weder Bestand noch Zugriff. [[/de/dear-passengers-release/|Der deutsche Release-Check]] dokumentiert den verbindlichen Store-Status; [[/de/dear-passengers-demo/|der Demo-Guide]] verfolgt den Testzugang separat.'
      ]},
      { id: 'steam', kicker: 'OFFIZIELLER STORE', heading: 'Wo der offizielle Download erscheinen wird', paragraphs: [
        'Windows-PC über Steam ist die einzige bestätigte Plattform. Auf der richtigen Seite lautet die App-ID 4534960, Entwickler und Publisher heißen FLEXUS. Ein späterer Dear Passengers Download über Steam wird durch den Steam-Client verwaltet. Eine externe Setup-Datei, ein Passwortarchiv oder eine Browser-Erweiterung ist dafür nicht erforderlich.',
        'Eine offizielle Studioseite darf natürlich auf den Store verlinken. Die Vertrauenskette muss jedoch nachvollziehbar sein: offizieller FLEXUS-Kanal, korrekte Steam-Domain, richtige App-ID und passender Herausgeber. Suchanzeigen, kopierte Logos und ein professionelles Layout reichen nicht aus. Auch ein Domainname mit dem Spieltitel beweist keine Verbindung zum Entwickler.',
        'Vor dem Start ist die sicherste Aktion das Vormerken. Preis, Editionen und Vorbestellung sind unbekannt. Wer schon jetzt einen angeblichen Schlüssel kauft, erhält möglicherweise nur eine unverbindliche Reservierung. Ein Key-Shop ist keine Primärquelle für den Dear Passengers Download und darf ein Platzhalterdatum nicht zum offiziellen Termin machen.'
      ]},
      { id: 'apk', kicker: 'ANDROID UND APK', heading: 'Gibt es eine Dear Passengers APK?', paragraphs: [
        'Nein, eine offizielle Android-Version ist nicht angekündigt. Die Steam-Seite nennt Windows 10 in 64 Bit und PC-Hardware. Google Play, App Store und FLEXUS führen derzeit keinen bestätigten mobilen Port dieses Spiels. Eine Datei mit dem Namen „Dear Passengers APK“ ist daher nicht als offizielle Umsetzung der Steam-Ankündigung verifiziert.',
        'Das bedeutet nicht, dass jede ähnlich benannte App absichtlich täuscht. Titel können sich überschneiden, und Drittentwickler können unabhängige Produkte veröffentlichen. Entscheidend ist die Zuordnung: Stimmen Entwicklername, Paket, Store-Verlinkung und offizielle Ankündigung überein? Ohne diese Belege sollte die Datei nicht mit dem Dear Passengers Download von FLEXUS verwechselt werden.',
        'Android-Pakete können weitreichende Berechtigungen verlangen. Nutzer sollten keine unbekannten Quellen aktivieren, keinen Virenschutz abschalten und keine Kontodaten eingeben, nur um ein noch unveröffentlichtes PC-Spiel zu erhalten. Falls FLEXUS später Mobile-Versionen bestätigt, wird dieser Status anhand der offiziellen Store-Konten aktualisiert.'
      ]},
      { id: 'demo', kicker: 'TESTVERSION', heading: 'Demo-Download und Steam Playtest', paragraphs: [
        'Eine öffentliche Demo ist geplant, aber ohne Termin. Steam zeigt aktuell keinen Demo-Eintrag und kein Playtest-Formular. Deshalb gibt es auch keinen legitimen Direktlink, der außerhalb der offiziellen Kanäle „frühen Zugang“ garantiert. Ein echter Dear Passengers Download für einen Test muss zum richtigen Entwickler und Build-Kontext führen.',
        'Demo, Playtest, Beta und Early Access sind verschiedene Modelle. FLEXUS hat nicht bestätigt, dass ein Steam Playtest oder Early Access verwendet wird. Ein Webseitenbetreiber darf diese Begriffe nicht nur deshalb hinzufügen, weil Menschen danach suchen. Suchnachfrage ersetzt keine Produktfunktion.',
        'Bei einer Veröffentlichung prüft dieser Guide Region, Zeitraum, Plattform, Herausgeber und Installationsweg. Eine Gamescom-Version kann lokal spielbar sein, ohne gleichzeitig zuhause verfügbar zu werden. Der Begriff Dear Passengers Download wird erst verwendet, wenn tatsächlich ein öffentlicher oder eindeutig autorisierter Zugang existiert.'
      ]},
      { id: 'warnzeichen', kicker: 'SICHERHEIT', heading: 'Warnzeichen bei Download-Angeboten', paragraphs: [
        'Besonders kritisch sind Angebote, die einen Release vor der offiziellen Steam-Seite versprechen, Schutzprogramme deaktivieren lassen, Archive mit Umfragepasswort verteilen oder Fernzugriffssoftware verlangen. Auch angebliche Aktivierungen durch Steam-Login auf fremden Domains sind riskant. Steam-Anmeldedaten gehören nur in die echte Steam-Umgebung.',
        'Ein Countdown, eine Dateigröße oder ein Scan-Siegel beweist nicht, dass die Datei von FLEXUS stammt. Selbst ein technisch sauberes Programm kann ein anderes Produkt sein. Der zentrale Test lautet nicht nur „enthält es Malware?“, sondern zuerst „ist es der offizielle Dear Passengers Download?“. Dafür braucht es eine überprüfbare Herausgeberkette.',
        'Bei Unsicherheit sollte nicht experimentiert werden. URL schließen, Datei nicht ausführen und die offizielle Steam-Seite direkt aufrufen. Wer bereits Zugangsdaten eingegeben hat, sollte Passwort ändern, Sitzungen prüfen und Steam Guard aktivieren. Dieser Guide ersetzt keine forensische Dateianalyse, bietet aber eine klare Produktprüfung.'
      ]},
      { id: 'plattformen', kicker: 'PLATTFORMSTATUS', heading: 'PC, PlayStation, Xbox und Switch', paragraphs: [
        'Nur Windows-PC ist bestätigt. Es gibt keinen PlayStation-, Xbox- oder Nintendo-Storeeintrag. Deshalb sind Konsolen-Keys und Downloads derzeit keine offiziellen Produktangebote. Auch Mac, Linux und Steam Deck besitzen keine zugesagte Unterstützung. Eine spätere Portierung ist möglich, aber nicht angekündigt.',
        'Ein Windows-Download darf nicht mit Cloud-Streaming oder Kompatibilitätsschichten gleichgesetzt werden. FLEXUS hat keine Dienste, Launcher oder alternativen Stores genannt. Sollte später ein weiterer Store hinzukommen, muss dessen Produktseite direkt auf den Entwickler zurückführbar sein. Erst dann wird er in die Liste sicherer Zugänge aufgenommen.',
        'Die Plattformfrage beeinflusst zugleich die Systemanforderungen und Crossplay-Erwartung. [[/de/dear-passengers-systemanforderungen/|Der deutsche Hardware-Guide]] erklärt die PC-Mindestwerte, während [[/de/dear-passengers-spielerzahl/|der Koop-Guide]] Crossplay als offen kennzeichnet. Diese Trennung verhindert widersprüchliche Aussagen.'
      ]},
      { id: 'checkliste', kicker: 'PRÜFCHECKLISTE', heading: 'Einen echten Dear Passengers Download erkennen', paragraphs: [
        'Prüfen Sie zuerst die Domain und Steam-App-ID. Kontrollieren Sie danach Entwickler, Publisher, Plattform und Veröffentlichungsstatus. Vergleichen Sie die Information mit einem offiziellen FLEXUS-Kanal. Lesen Sie Dateityp und Berechtigungen, bevor etwas gestartet wird. Eine Abweichung muss erklärt werden; mehrere Abweichungen sind ein klarer Grund zum Abbruch.',
        'Ein sicherer Store nennt Preis und Systemanforderungen transparent, sobald der Verkauf beginnt. Derzeit fehlen Preis und Kaufbutton, also darf ein externes Angebot diese Lücke nicht als bestätigte Tatsache füllen. Ebenso ist das häufig verwendete Datum 31.12.2026 nur ein möglicher Händlerplatzhalter und kein von FLEXUS bestätigter Starttag.',
        'DearPassengers.net verlinkt keine inoffiziellen Dateien. Änderungen werden mit Datum und Originalquelle dokumentiert. Hinweise auf einen neuen offiziellen Dear Passengers Download können über [[/de/kontakt/|die Kontaktseite]] gemeldet werden; eine URL oder ein Screenshot allein genügt erst nach Prüfung der Ursprungsseite.'
      ]}
    ],
    faqs: [
      { question: 'Ist der Dear Passengers Download schon verfügbar?', answer: 'Nein. Steam bietet aktuell nur die Wunschliste, keinen Kauf, keine Installation und keine öffentliche Demo.' },
      { question: 'Wo kann man Dear Passengers sicher herunterladen?', answer: 'Wenn das Spiel erscheint, ist die offizielle Steam-Seite mit App-ID 4534960 der bestätigte Ausgangspunkt.' },
      { question: 'Gibt es eine Dear Passengers APK für Android?', answer: 'Nein, ein offizieller Android-Port wurde nicht angekündigt. APK-Angebote sind nicht als FLEXUS-Version verifiziert.' },
      { question: 'Kann man die Dear Passengers Demo downloaden?', answer: 'Noch nicht. Die Demo ist geplant, aber ohne öffentlichen Zugang oder Termin.' },
      { question: 'Gibt es Dear Passengers für PS5 oder Xbox?', answer: 'Nicht bestätigt. Windows-PC über Steam ist die einzige offiziell genannte Plattform.' },
      { question: 'Sind Dear Passengers Keys schon echt?', answer: 'Ein offizieller Verkauf und Preis sind noch nicht gestartet. Händlerangebote können Platzhalter oder Benachrichtigungen sein und bestätigen keinen auslieferbaren Key.' }
    ],
    related: ['dear-passengers-demo', 'dear-passengers-release', 'dear-passengers-systemanforderungen', 'dear-passengers-news'],
  },
  {
    slug: 'dear-passengers-systemanforderungen',
    englishPath: '/dear-passengers-system-requirements/',
    chinesePath: '/zh-cn/dear-passengers-system-requirements/',
    keyword: 'Dear Passengers Systemanforderungen',
    title: 'Dear Passengers Systemanforderungen: Offizielle PC-Specs',
    description: 'Offizielle Dear Passengers Systemanforderungen: Windows 10, CPU, 8 GB RAM, GTX 1060 oder RX 6600 XT, DirectX 12, Speicher und offene Empfehlungen.',
    eyebrow: 'DEUTSCHER PC-CHECK · STAND 24.07.2026',
    h1: 'Dear Passengers Systemanforderungen:',
    h1Accent: 'Mindestwerte für Windows-PC',
    intro: 'Die Dear Passengers Systemanforderungen nennen bereits Mindestwerte für Windows-PC, aber noch keine empfohlenen Specs oder Leistungsziele. Dieser deutsche Hardware-Guide übernimmt die Steam-Tabelle exakt, erklärt ihre Grenzen und trennt offizielle Angaben von vorsichtiger Einordnung.',
    answer: 'Die minimalen Dear Passengers Systemanforderungen sind Windows 10 (64 Bit), Intel Core i5 mit 2,5 GHz oder vergleichbar, 8 GB RAM, NVIDIA GeForce GTX 1060 oder AMD Radeon RX 6600 XT, DirectX 12 und 4 GB freier Speicher. Empfohlene Hardware, Auflösung, Bildrate, Steam Deck, Mac und Linux sind nicht bestätigt.',
    note: 'Alle offiziellen Werte stammen aus der Steam-Tabelle. Hardware-Einordnung ist keine Leistungszusage; ohne Build, Auflösung, Qualitätsstufe und Bildrate lässt sich aus Mindestwerten kein verlässlicher Benchmark ableiten.',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers Cockpitmotiv für die deutschen PC-Systemanforderungen',
    sections: [
      { id: 'minimum', kicker: 'MINIMUM', heading: 'Offizielle Dear Passengers Systemanforderungen', paragraphs: [
        'Steam listet Windows 10 in 64 Bit, einen Intel Core i5 mit 2,5 GHz oder ein vergleichbares Modell, 8 GB Arbeitsspeicher, eine NVIDIA GeForce GTX 1060 oder AMD Radeon RX 6600 XT, DirectX 12 und 4 GB verfügbaren Speicherplatz. Diese Dear Passengers Systemanforderungen sind die einzige offizielle Hardwaretabelle.',
        'Die Liste enthält keine genauen CPU-Generation und kein AMD-Prozessormodell. „Oder vergleichbar“ lässt Spielraum, erschwert aber einen exakten Vergleich. Auch bei den Grafikkarten liegen GTX 1060 und RX 6600 XT nicht in jeder Situation gleichauf. Die Tabelle ist eine Entwicklerangabe, kein unabhängiger Test und kann sich bis zum Release ändern.',
        'Wer einen PC prüft, sollte jedes Feld einzeln vergleichen und nicht nur eine Gesamtbewertung eines Webseitenrechners übernehmen. Ein Gerät kann genug RAM besitzen, aber an DirectX, Betriebssystem oder Grafikleistung scheitern. Die offizielle Seite bleibt für spätere Änderungen maßgeblich.'
      ]},
      { id: 'gpu', kicker: 'GRAFIKKARTE', heading: 'GTX 1060 und RX 6600 XT richtig einordnen', paragraphs: [
        'Die NVIDIA GeForce GTX 1060 wird ohne Speichervariante genannt. Modelle mit 3 GB und 6 GB unterscheiden sich. Die AMD Radeon RX 6600 XT ist deutlich neuer und unterstützt andere Funktionen. Aus der gemeinsamen Nennung darf nicht geschlossen werden, dass jede ältere Karte zwischen beiden automatisch genügt. Die Dear Passengers Systemanforderungen liefern keine VRAM-Zahl.',
        'Ebenso fehlen Auflösung, Grafikpreset und Zielbildrate. „Minimum“ kann 1080p mit niedrigen Details, eine niedrigere Auflösung oder nur grundsätzliche Startfähigkeit bedeuten. Ohne offiziellen Benchmark ist keine feste FPS-Aussage seriös. Traileraufnahmen zeigen Bildmaterial, aber nicht zwingend die Einstellungen oder Hardware des fertigen Spiels.',
        'Notebook-GPUs tragen oft ähnliche Namen bei anderer Leistungsaufnahme. Eine mobile GTX 1060 kann je nach Kühlsystem anders arbeiten als eine Desktopkarte. Nutzer sollten den exakten Chip, verfügbaren Grafikspeicher, Treiber und Temperaturverhalten prüfen, statt nur den Marketingnamen zu vergleichen.'
      ]},
      { id: 'cpu-ram', kicker: 'CPU UND RAM', heading: 'Prozessor und 8 GB Arbeitsspeicher', paragraphs: [
        '„Intel Core i5 @ 2.5 GHz oder vergleichbar“ ist relativ unspezifisch. Takt allein beschreibt keine Prozessorleistung; Generation, Kerne, Architektur und dauerhafte Leistungsaufnahme spielen ebenfalls eine Rolle. Die Dear Passengers Systemanforderungen nennen keine Kernzahl. Ein moderner sparsamer Prozessor kann trotz anderer Taktrate geeigneter sein als ein sehr altes i5-Modell.',
        '8 GB RAM sind als Minimum angegeben. Das bedeutet nicht, dass ein System mit genau 8 GB unter allen Umständen ohne Nachladen oder Hintergrundprobleme läuft. Windows, Browser, Sprachchat und Aufnahmeprogramme benötigen ebenfalls Speicher. Wer nur den Mindestwert besitzt, sollte unnötige Programme schließen und ausreichend freien Auslagerungsspeicher behalten.',
        'Empfohlene RAM- oder CPU-Werte fehlen. 16 GB pauschal als offizielle Empfehlung zu bezeichnen wäre falsch, auch wenn es für moderne PCs häufig komfortabler ist. Dieser Guide unterscheidet praktische Vorsicht von der Steam-Tabelle und aktualisiert die Werte erst nach einer FLEXUS-Änderung.'
      ]},
      { id: 'speicher', kicker: 'INSTALLATION', heading: '4 GB Speicher und DirectX 12', paragraphs: [
        'Steam nennt 4 GB verfügbaren Speicherplatz. Das ist ungewöhnlich kompakt, kann sich aber bis zum Release erhöhen. Downloads, entpackte Installation, Shader-Cache und spätere Updates benötigen eventuell zusätzlichen freien Platz. Die Dear Passengers Systemanforderungen garantieren nicht, dass exakt 4 GB für jeden Patch dauerhaft ausreichen.',
        'DirectX 12 ist ausdrücklich genannt. Entscheidend sind kompatibles Betriebssystem, Grafikhardware und aktuelle Treiber. Ein installierter DirectX-Eintrag allein beweist keine vollständige Feature-Unterstützung. Nutzer älterer Geräte sollten Herstellerdaten und Treiberstatus prüfen. FLEXUS hat keine alternative DirectX-11- oder Vulkan-Version angekündigt.',
        'SSD oder Festplatte werden nicht unterschieden. Eine SSD kann Ladezeiten verbessern, ist aber keine offizielle Pflicht. Ebenso fehlen Angaben zu Internetbandbreite, obwohl Online-Koop bestätigt ist. Speicher- und Netzwerkbedarf einer Demo kann vom finalen Build abweichen.'
      ]},
      { id: 'laptop', kicker: 'NOTEBOOKS', heading: 'Läuft Dear Passengers auf einem Gaming-Laptop?', paragraphs: [
        'Möglich, wenn die tatsächliche Hardware die Mindestwerte erreicht, doch es gibt keine allgemeine Laptop-Zusage. Mobile Grafikchips, gemeinsame Kühlung und Energiesparprofile beeinflussen die Leistung. Ein Gerätename wie „Gaming Laptop“ ist weniger aussagekräftig als konkrete CPU, GPU, RAM und Betriebssystem. Die Dear Passengers Systemanforderungen gelten komponentenbezogen.',
        'Beim Spielen am Netzteil kann ein Notebook höhere Leistung halten als im Akkubetrieb. Aktuelle Grafiktreiber, freie Lüftungswege und genügend Speicher helfen, ersetzen aber keinen fehlenden Mindestchip. Integrierte Grafik wird in der offiziellen Tabelle nicht genannt; daraus darf keine Kompatibilität mit Intel UHD oder älteren Vega-Lösungen abgeleitet werden.',
        'Erst Benchmarks einer veröffentlichten Demo oder Vollversion erlauben belastbare Aussagen zu bestimmten Modellen. Ein Video ohne eingeblendete Hardware und Einstellungen reicht nicht. Wer knapp am Minimum liegt, sollte die Demo abwarten und Rückgaberegeln des offiziellen Stores beachten.'
      ]},
      { id: 'deck-mac-linux', kicker: 'KOMPATIBILITÄT', heading: 'Steam Deck, Mac und Linux', paragraphs: [
        'Steam Deck besitzt derzeit keine veröffentlichte Kompatibilitätsbewertung. Der Store nennt Windows 10 und DirectX 12, nicht SteamOS. Proton kann manche Windows-Spiele ausführen, ist aber keine Entwicklerzusage. Controllerlayout, Schriftgröße, Online-Funktionen und Leistung müssen separat geprüft werden.',
        'Mac und Linux sind nicht als Plattformen angekündigt. Es gibt keine nativen Systemanforderungen für diese Betriebssysteme. Virtuelle Maschinen oder Kompatibilitätsschichten ändern den offiziellen Support nicht. Wer zuverlässige Unterstützung braucht, sollte Windows-PC als einzige bestätigte Umgebung behandeln.',
        'Auch Konsolen besitzen keine Systemtabelle, weil keine Ports angekündigt sind. [[/de/dear-passengers-release/|Der Release-Guide]] führt Plattformänderungen. Erst eine offizielle Produktseite kann die Dear Passengers Systemanforderungen für ein weiteres System ersetzen oder ergänzen.'
      ]},
      { id: 'checkliste', kicker: 'PC-CHECK', heading: 'Kann mein PC Dear Passengers ausführen?', paragraphs: [
        'Öffnen Sie unter Windows die Systeminformationen und den Geräte-Manager oder ein vertrauenswürdiges Diagnosewerkzeug. Notieren Sie Windows-Version, CPU-Modell, installierten RAM und genaue Grafikkarte. Vergleichen Sie anschließend nicht nur Namen, sondern Generation und Leistungsklasse. Reservieren Sie mehr als 4 GB freien Platz für Installation und Updates.',
        'Wenn eine Komponente unter dem Minimum liegt, gibt es keine sichere Optimierungsgarantie. Niedrigere Einstellungen können helfen, sind aber ohne Test nicht belegt. Wenn alle Werte darüber liegen, bleibt ebenfalls offen, welche Auflösung und Bildrate erreichbar sind. Die Dear Passengers Systemanforderungen sind eine Eintrittsschwelle, kein Qualitätsversprechen.',
        'Dieser Guide wird bei einer neuen Steam-Tabelle, Demo oder nachvollziehbaren Entwicklerbenchmark aktualisiert. Messergebnisse nennen dann Build, Treiber, Auflösung und Preset. Hinweise mit Originalquelle können über [[/de/kontakt/|Kontakt und Korrekturen]] eingereicht werden.'
      ]}
    ],
    faqs: [
      { question: 'Was sind die Dear Passengers Systemanforderungen?', answer: 'Windows 10 (64 Bit), Intel Core i5 mit 2,5 GHz oder vergleichbar, 8 GB RAM, GTX 1060 oder RX 6600 XT, DirectX 12 und 4 GB Speicher.' },
      { question: 'Wie viel RAM braucht Dear Passengers?', answer: 'Steam nennt 8 GB RAM als Minimum. Eine offizielle Empfehlung ist noch nicht veröffentlicht.' },
      { question: 'Welche Grafikkarte braucht Dear Passengers?', answer: 'Als Minimum stehen GTX 1060 oder RX 6600 XT. VRAM, Auflösung, Preset und Ziel-FPS fehlen.' },
      { question: 'Läuft Dear Passengers auf Steam Deck?', answer: 'Noch unbekannt. Es gibt keine Deck-Bewertung und Steam nennt nur Windows 10.' },
      { question: 'Gibt es Dear Passengers für Mac oder Linux?', answer: 'Nicht bestätigt. Native Mac- und Linux-Versionen oder Anforderungen sind nicht angekündigt.' },
      { question: 'Wie groß ist der Dear Passengers Download?', answer: 'Steam nennt 4 GB verfügbaren Speicher als Minimum. Die tatsächliche Download- und Installationsgröße kann sich bis zur Veröffentlichung ändern.' }
    ],
    related: ['dear-passengers-download', 'dear-passengers-gameplay', 'dear-passengers-release', 'dear-passengers-demo'],
  },
  {
    slug: 'dear-passengers-trailer',
    englishPath: '/dear-passengers-trailer/',
    keyword: 'Dear Passengers Trailer',
    title: 'Dear Passengers Trailer: Szenen und Gameplay erklärt',
    description: 'Der Dear Passengers Trailer im deutschen Faktencheck: Cockpit, Kabinenservice, Passagiere, Fracht, Wetter und sichtbare Szenen ohne Spekulation.',
    eyebrow: 'DEUTSCHE TRAILERANALYSE · STAND 24.07.2026',
    h1: 'Dear Passengers Trailer:',
    h1Accent: 'Was wirklich zu sehen ist',
    intro: 'Der Dear Passengers Trailer zeigt Cockpit, Kabinenservice, riskante Fracht und eskalierende Zwischenfälle. Er vermittelt den Ton des Koop-Spiels, beantwortet aber nicht jede Frage zu Steuerung, Umfang oder Spielerzahl. Diese deutsche Analyse trennt sichtbare Beobachtung von bestätigter Produktfunktion.',
    answer: 'Im offiziellen Dear Passengers Trailer steuert eine Crew das Flugzeug, versorgt Passagiere und reagiert auf Wetter, lose Gegenstände, problematische Fracht und Schäden. Die Szenen stützen den von Steam beschriebenen Spielablauf. Sie bestätigen jedoch keine feste Lobbygröße, Kampagnenlänge, vollständige Mechanikliste oder finalen Benutzeroberflächen.',
    note: 'Eine Trailerszene belegt, dass ein Motiv im veröffentlichten Video vorkommt. Sie belegt nicht automatisch Häufigkeit, Spielersteuerung, Missionsstruktur oder Verfügbarkeit im finalen Build.',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Offizielle Dear Passengers Kabinenszene für die deutsche Traileranalyse',
    sections: [
      { id: 'offiziell', kicker: 'OFFIZIELLES VIDEO', heading: 'Wo findet man den Dear Passengers Trailer?', paragraphs: [
        'Der maßgebliche Ankündigungstrailer stammt aus dem offiziellen FLEXUS-Kontext und ist mit der Steam-Produktseite verbunden. Medienkanäle haben das Video erneut hochgeladen oder gekürzt. Solche Uploads können die Reichweite erhöhen, sind aber keine neue Entwicklerankündigung. Für Titel, Datum und Produktfakten sollte der Dear Passengers Trailer immer zur Primärquelle zurückgeführt werden.',
        'Ein Reupload mit neuem Thumbnail oder anderer Überschrift verändert den Spielstatus nicht. Besonders Begriffe wie „Gameplay Trailer“, „Teaser“ oder „Release Trailer“ können redaktionell gewählt sein. Ein echtes Release-Video würde einen bestätigten Termin oder Startkontext benötigen. Der bisherige Film ist eine Ankündigungs- und Spielvorstellung, kein Beweis für eine verfügbare Vollversion.',
        'Die eingebettete englische Sprache im Video ändert nichts an der deutschen Suchabsicht. Deutsche Medien verwenden ganz natürlich „Trailer“, „Koop-Spiel“, „Gameplay“ und „Kabinencrew“. Diese Begriffe werden hier genutzt, während die Analyse jede Szene quellengetreu beschreibt.'
      ]},
      { id: 'cockpit', kicker: 'COCKPIT', heading: 'Pilot und Flugzeug im Trailer', paragraphs: [
        'Der Dear Passengers Trailer zeigt die Ego-Perspektive im Cockpit und ein Flugzeug, das durch schwierige Situationen manövriert. Vögel, Wetter und Schäden verdeutlichen, dass der Pilot nicht nur eine statische Kulisse bedient. Steam bestätigt das Steuern des Flugzeugs als Aufgabe und nennt dynamisches Wetter, Turbulenzen und Luftlöcher.',
        'Nicht sichtbar oder nicht eindeutig erklärt sind vollständige Instrumente, Navigation, Treibstoff und ein realistisches Flugmodell. Eine kurze Handbewegung ist keine Controllerliste. Auch ein Flugzeugmodell im Video beweist keine Auswahl mehrerer Maschinen. Der Dear Passengers Trailer kommuniziert die Fantasie des Piloten, nicht ein vollständiges Simulationshandbuch.',
        'Die Bewegung des Flugzeugs wirkt sich auf die Kabine aus. Diese Verbindung wird durch offizielle Beschreibung und Szenen gestützt. Wie stark der Pilot Ereignisse auslöst und ob Notfälle zufällig oder geskriptet sind, bleibt offen. [[/de/dear-passengers-gameplay/|Der Gameplay-Guide]] ordnet den bestätigten Ablauf ein.'
      ]},
      { id: 'kabine', kicker: 'KABINENSERVICE', heading: 'Passagiere, Essen und Getränke', paragraphs: [
        'Mehrere Szenen zeigen Crewmitglieder in der Kabine. Passagiere sitzen, werden bedient oder geraten in physikalisches Chaos. Steam nennt Essen, Getränke und einen möglichst ruhigen Flug als Erwartungen. Der Dear Passengers Trailer visualisiert damit den Wechsel von Routine zu Krisenmanagement.',
        'Aus einzelnen Reaktionen lässt sich keine vollständige Bedürfnis- oder Zufriedenheitslogik ableiten. Symbole, Werte, Zeitlimits und Passagierklassen sind nicht dokumentiert. Ein gezeigtes Tablett beweist Service als Motiv, aber nicht jedes Rezept oder Inventarsystem. Die sichere Aussage bleibt: Kabinenarbeit und Passagierkontrolle sind bestätigt.',
        'Auch humorvolle oder drastische Szenen sollten nicht als genaue Regel interpretiert werden. Trailer schneiden Ereignisse für Wirkung. Ob ein Passagier dauerhaft verloren geht, welche Strafen folgen und wie eine Runde bewertet wird, ist nicht erklärt. Eine Rezension ist erst mit einem spielbaren Build möglich.'
      ]},
      { id: 'fracht', kicker: 'FRACHT UND RISIKO', heading: 'Was der Dear Passengers Trailer über Ladung zeigt', paragraphs: [
        'Vor dem Flug wählt die Crew laut Steam Passagiere und Fracht. Höhere Auszahlung bringt gewöhnlich mehr Ärger. Der Trailer zeigt ungewöhnliche Ladung und Situationen, in denen Gegenstände zur Gefahr werden. Dadurch wird der Risiko-Belohnungs-Konflikt verständlich, ohne dass jede Frachtart benannt werden muss.',
        'Nicht bestätigt sind Schmuggelklassen, Zoll, Gewichtslimits, Versicherungen oder ein Handelsmarkt. Begriffe wie „illegale Fracht“ tauchen in Werbetexten auf, doch eine vollständige Mechanik braucht weitere Details. Der Dear Passengers Trailer kann visuelle Hinweise geben, ersetzt aber keine Liste finaler Systeme.',
        'Wichtig ist die Wechselwirkung mit Physik: Lose Dinge können sich bewegen, wenn das Flugzeug unruhig fliegt. Wie Ladung gesichert wird und welche Werkzeuge existieren, bleibt teilweise offen. [[/de/dear-passengers-bestaetigte-features/|Der Feature-Faktencheck]] markiert jedes Detail nach Belegstufe.'
      ]},
      { id: 'wetter', kicker: 'ZWISCHENFÄLLE', heading: 'Wetter, Turbulenzen und Schäden', paragraphs: [
        'Der Dear Passengers Trailer stellt Wetter und Turbulenzen als Eskalationsmotor dar. Passagiere, Gepäck und lose Gegenstände werden durch die Kabine bewegt. Steam bestätigt diese Grundidee ausdrücklich. Damit ist das Wetter mehr als Hintergrund: Es beeinflusst die Arbeit an Bord.',
        'Einzelne sichtbare Schäden bestätigen nicht automatisch ein frei simulierendes Reparatursystem. Es fehlen Angaben zu Schadenswerten, Werkzeughaltbarkeit, Ausfallketten und Schwierigkeitsgraden. Auch die Anzahl möglicher Ereignisse ist unbekannt. Jede Aufzählung muss zwischen gezeigtem Beispiel und offiziell benannter Funktion unterscheiden.',
        'Der humorvolle Schnitt kann Häufigkeit verdichten. Eine ruhige Phase im Spiel wäre im Trailer weniger interessant, kann aber trotzdem existieren. Umgekehrt beweist eine spektakuläre Szene nicht, dass Spieler sie jederzeit auslösen können. Diese Grenzen gelten für alle visuellen Marketingmaterialien.'
      ]},
      { id: 'nicht-bestaetigt', kicker: 'GRENZEN', heading: 'Was der Trailer nicht bestätigt', paragraphs: [
        'Der Film nennt keine maximale Spielerzahl, keine Konsolenplattformen und keinen genauen Release-Termin. Er beweist weder Splitscreen noch Crossplay, Voice-Chat oder öffentliche Lobbys. Ebenso fehlen Kampagnenlänge, Anzahl der Flugzeuge, Routen, Fortschritt, Mod-Support und Barrierefreiheit. Das sind offene Fragen, keine versteckten Zusagen.',
        'Ein eingeblendeter Bildschirm kann sich bis zur Veröffentlichung ändern. Traileraufnahmen stammen möglicherweise aus einem Entwicklungsbuild. Benutzeroberfläche, Animationen und Balance dürfen daher nicht als final beschrieben werden, sofern FLEXUS das nicht sagt. Der Dear Passengers Trailer ist eine Momentaufnahme der öffentlichen Präsentation.',
        'Konkurrenzseiten füllen solche Lücken häufig mit Genreannahmen. Dieser Guide tut das nicht. [[/de/dear-passengers-spielerzahl/|Spielerzahl]], [[/de/dear-passengers-release/|Release]] und [[/de/dear-passengers-systemanforderungen/|PC-Anforderungen]] besitzen eigene deutsche Seiten, damit unterschiedliche Suchfragen nicht in einer spekulativen Zusammenfassung vermischt werden.'
      ]},
      { id: 'pruefung', kicker: 'QUELLENMETHODE', heading: 'So wird eine Trailerszene geprüft', paragraphs: [
        'Zuerst wird das Originalvideo identifiziert. Danach werden sichtbare Handlung, Text und Bild getrennt notiert. Die Steam-Beschreibung wird als unabhängige Produktquelle daneben gelegt. Stimmt eine Szene mit einer ausdrücklich genannten Funktion überein, ist die Einordnung stärker. Bleibt nur ein Bild, wird es als Beobachtung bezeichnet.',
        'Ein späterer Reupload erhält kein neues Produktdatum. Nur neues Material oder eine neue Entwicklerbeschreibung verändert den Faktenstand. Bei Schnitten und Shorts wird geprüft, ob sie aus dem gleichen Dear Passengers Trailer stammen. So verhindert die Chronologie, dass alte Bilder als frische Enthüllung erscheinen.',
        'Hinweise auf neue offizielle Videos können über [[/de/kontakt/|Kontakt und Korrekturen]] gesendet werden. Benötigt wird der Originalkanal oder eine eindeutige Entwicklerverlinkung. Die redaktionelle Illustration und das Hero-Bild dieser Seite werden nicht als Screenshotbeweis verwendet.'
      ]}
    ],
    faqs: [
      { question: 'Wo kann man den offiziellen Dear Passengers Trailer sehen?', answer: 'Über die offizielle Steam-Seite und den eindeutig zugeordneten FLEXUS-Kontext. Medien-Reuploads sind keine neue Produktankündigung.' },
      { question: 'Zeigt der Dear Passengers Trailer echtes Gameplay?', answer: 'Er zeigt spielnahe Szenen aus Cockpit und Kabine. Ohne Entwicklerangabe lässt sich jedoch nicht jede Sequenz als unveränderte Echtzeitaufnahme oder finales UI bestätigen.' },
      { question: 'Bestätigt der Trailer die Spielerzahl?', answer: 'Nein. Sichtbare Figuren sind keine technische Lobbyangabe.' },
      { question: 'Sieht man Pilot und Kabinencrew?', answer: 'Ja. Cockpitsteuerung und Kabinenarbeit werden gezeigt und stimmen mit der Steam-Beschreibung überein.' },
      { question: 'Bestätigt der Trailer PS5 oder Xbox?', answer: 'Nein. Windows-PC über Steam ist weiterhin die einzige offiziell genannte Plattform.' },
      { question: 'Ist der Dear Passengers Trailer ein Release-Trailer?', answer: 'Nein. Er kündigt das Spiel an, bestätigt aber keinen genauen Veröffentlichungstag und keine verfügbare Vollversion.' }
    ],
    related: ['dear-passengers-gameplay', 'dear-passengers-bestaetigte-features', 'dear-passengers-rollen', 'dear-passengers-release'],
  },
  {
    slug: 'dear-passengers-news',
    englishPath: '/dear-passengers-news/',
    keyword: 'Dear Passengers News',
    title: 'Dear Passengers News: Release, Demo und Wunschlisten-Updates',
    description: 'Aktuelle Dear Passengers News auf Deutsch: Steam-Wunschlistenrang, 1,5 Millionen Wunschlisten, Demo, Release, Trailer und weiterhin offene Angaben.',
    eyebrow: 'DEUTSCHER NEWS-TRACKER · AKTUALISIERT 24.07.2026',
    h1: 'Dear Passengers News:',
    h1Accent: 'Bestätigte Meldungen im Zeitverlauf',
    intro: 'Die aktuellen Dear Passengers News betreffen vor allem die außergewöhnliche Wunschlistenentwicklung: FLEXUS meldete 1,5 Millionen Wunschlisten, und Steam führte das Spiel am 24.07.2026 auf Rang 9 der öffentlichen Top-Wishlist-Liste. Ein genauer Release-Termin, Preis oder öffentlicher Demo-Download fehlt weiterhin.',
    answer: 'Die wichtigste aktuelle Dear Passengers News ist Rang 9 auf Steams öffentlicher Top-Wishlist-Liste am 24.07.2026. FLEXUS hatte zuvor 1,5 Millionen Wunschlisten gemeldet. Steam nennt weiterhin nur 2026 für Windows-PC; genauer Termin, Preis, öffentliche Demo, maximale Spielerzahl und Konsolen sind nicht bestätigt.',
    note: 'Ranglistenstände werden mit Datum gespeichert, weil sie sich ändern können. Wunschlistenzahlen sind als Entwicklerangabe gekennzeichnet und nicht als unabhängig auditierte Steam-Kontodaten dargestellt.',
    heroImage: '/images/release-date.webp',
    heroAlt: 'Redaktionelle Dear Passengers Terminalszenze für den deutschen News-Tracker',
    sections: [
      { id: 'aktuell', kicker: 'AKTUELL', heading: 'Die neuesten Dear Passengers News', paragraphs: [
        'Am 24.07.2026 stand Dear Passengers auf Rang 9 der öffentlich sichtbaren Steam-Liste „Top Wishlists“. Diese Platzierung ist eine zeitgebundene Momentaufnahme. Sie kann steigen oder fallen, wenn andere Spiele veröffentlicht oder häufiger vorgemerkt werden. Der Rang wird deshalb immer zusammen mit dem Prüfdatum genannt.',
        'FLEXUS meldete zuvor, das Spiel habe 1,5 Millionen Wunschlisten erreicht. Das ist eine direkte Studioangabe, aber keine öffentlich einsehbare Kontozahl von Valve. Die Formulierung „laut FLEXUS“ bleibt daher wichtig. Dear Passengers News sollten nicht aus einer Entwicklerzahl automatisch aktive Spieler, Verkäufe oder Umsatz berechnen.',
        'Trotz der Reichweite änderte sich der Store-Status nicht: 2026, Windows-PC, Einzelspieler und Online-Koop. Kein genauer Tag, kein Preis und kein Kaufbutton. [[/de/dear-passengers-release/|Der Release-Guide]] hält diese Felder getrennt von kurzfristigen Ranglistenmeldungen.'
      ]},
      { id: 'timeline', kicker: 'ZEITLEISTE', heading: 'Dear Passengers News seit der Ankündigung', paragraphs: [
        'Nach der öffentlichen Vorstellung stieg das Spiel sehr schnell in den Wunschlisten. FLEXUS berichtete zunächst über 700.000 Einträge innerhalb von 36 Stunden, danach über eine Million und später 1,5 Millionen. Jede Zahl beschreibt den Stand der jeweiligen Mitteilung. Sie darf nicht als heutiger exakter Wert wiederholt werden, wenn kein neuer Bericht vorliegt.',
        'Am 22.07.2026 wurde Rang 12 auf der Steam-Liste dokumentiert; am 24.07.2026 war Rang 9 sichtbar. Das ist eine Verbesserung um drei Plätze zwischen den gespeicherten Prüfungen, keine Garantie für eine dauerhafte Position. Der deutsche News-Tracker bewahrt ältere Messpunkte, statt sie nach jeder Änderung zu überschreiben.',
        'Medien-Uploads des „Another Friendslop Game“-Teasers am 23.07.2026 verwendeten bekanntes Material. Sie waren keine neue FLEXUS-Produktankündigung und brachten keine zusätzlichen Plattform-, Preis- oder Mechanikdaten. Reuploads werden nur dann zu eigenständigen Dear Passengers News, wenn neues offizielles Material oder eine neue Aussage enthalten ist.'
      ]},
      { id: 'demo', kicker: 'DEMO', heading: 'Neuigkeiten zur geplanten Demo', paragraphs: [
        'FLEXUS hat eine Gamescom-Fassung und eine spätere öffentliche Demo als Plan beschrieben. Seitdem gibt es weiterhin keinen Steam-Demo-Button, keinen Playtest und keinen Termin. Die Planung bleibt bestätigt; Verfügbarkeit bleibt offen. Ein News-Artikel darf diese beiden Zustände nicht vermischen.',
        'Für eine echte Statusänderung müsste mindestens ein offizieller Zugang, eine Veranstaltungsangabe oder ein konkretes Datum erscheinen. Auch Umfang, Spielerzahl und Systemanforderungen des Testbuilds fehlen. [[/de/dear-passengers-demo/|Der deutsche Demo-Guide]] erläutert sichere Zugangswege und prüft eine spätere Veröffentlichung.',
        'Gamescom-Berichte deutscher Medien können wertvolle Beobachtungen liefern, falls eine Version gezeigt wird. Sie müssen jedoch Build und Kontext nennen. Ein Messeeindruck ist keine automatische Rezension der Vollversion und kein Beweis für einen zeitgleichen Heimdownload.'
      ]},
      { id: 'release', kicker: 'RELEASE', heading: 'Was sich beim Release nicht geändert hat', paragraphs: [
        'Steam zeigt weiter das breite Fenster 2026. Ein früheres Entwicklerinterview nannte ungefähr den Herbst als Ziel, während eine spätere Aussage betonte, dass kein genauer Termin feststeht. Die aktuelle Store-Angabe ist verbindlicher als ein ungefähres Entwicklungsziel. Einen Monat oder Tag aus „Herbst“ abzuleiten wäre nicht korrekt.',
        'Windows-PC über Steam bleibt die einzige bestätigte Plattform. Es gibt keine offiziellen Store-Einträge für PS5, Xbox oder Nintendo Switch. Auch Preis, Editionen und Vorbestellung fehlen. Platzhalterdaten von Händlern sind keine Dear Passengers News des Studios.',
        'Die News-Seite wird aktualisiert, wenn Steam oder FLEXUS eines dieser Felder ändert. Dann werden Originalquelle, Veröffentlichungszeit und betroffene Seite gemeinsam angepasst. Dadurch bleiben deutsche Release-, Download- und Plattformtexte konsistent.'
      ]},
      { id: 'diskussion', kicker: 'TRAILERDISKUSSION', heading: 'KI-Reaktion und Trailerkritik einordnen', paragraphs: [
        'Nach der Ankündigung diskutierten Nutzer den visuellen Stil und möglichen KI-Einsatz. FLEXUS reagierte öffentlich auf Vorwürfe und beschrieb den eigenen Produktionskontext. Solche Aussagen sind relevant, müssen aber als Position des Studios wiedergegeben werden. Eine redaktionelle Zusammenfassung ersetzt keine unabhängige Untersuchung sämtlicher Assets.',
        'Kritik, Likes oder Forenbeiträge sind Community-Reaktion, keine bestätigte Spielmechanik. Dear Passengers News trennen deshalb Produktstatus von Debatte. Der Erfolg auf der Wunschliste beweist Interesse, nicht die Zustimmung jedes Nutzers und nicht die Qualität einer unveröffentlichten Vollversion.',
        'Neue Belege werden nach Herkunft bewertet. Direkte Dateien, nachvollziehbare Credits oder detaillierte Entwicklerdokumentation wären stärker als erneut geteilte Behauptungen. Dieser Guide vermeidet sowohl pauschale Entlastung als auch unbelegte Anschuldigung.'
      ]},
      { id: 'offen', kicker: 'WEITERHIN OFFEN', heading: 'Welche Meldungen noch fehlen', paragraphs: [
        'Nicht bekannt sind genauer Release-Tag, Euro-Preis, Demo-Zugang, maximale Spielerzahl, empfohlene Hardware, Controller-Support, Steam-Deck-Einstufung und weitere Plattformen. Auch Kampagnenumfang, Flugzeuganzahl, Routen und Fortschritt sind unbeschrieben. Suchergebnisse können dafür Seiten anzeigen, aber keine Seite erzeugt dadurch eine Tatsache.',
        'Die englische und deutsche Berichterstattung erhält erst bei unabhängiger Suchabsicht eigene Fachseiten. Bestehende Guides übernehmen eine Änderung, wenn sie inhaltlich zu ihrem Thema passt. Dadurch vermeiden wir viele dünne Dear Passengers News-Seiten, die nur denselben Absatz mit neuem Datum wiederholen.',
        'Der aktuelle Überblick ist bewusst ein rollender Tracker. Kleine Social-Media-Aktivitäten ohne Produktinformation werden nicht als große Meldung aufgeblasen. Wichtige Änderungen erhalten sichtbares Datum, Quellenlink, Schema-Aktualisierung und interne Verweise.'
      ]},
      { id: 'folgen', kicker: 'VERLÄSSLICH FOLGEN', heading: 'Wo man Dear Passengers News prüfen kann', paragraphs: [
        'Die Steam-Produktseite und ihre Neuigkeiten sind die erste Adresse für Store-Felder und Veröffentlichungen. Offizielle FLEXUS-Kanäle liefern Studioaussagen und Video. Direkte Interviews können Kontext geben, müssen aber zwischen Ziel, Plan und fester Ankündigung unterscheiden. Medien helfen bei Zusammenfassung und lokaler Einordnung.',
        'Ein guter Bericht verlinkt die Originalquelle, nennt Datum und vermeidet stärkere Sprache als das Original. „Geplant“ wird nicht zu „garantiert“, „2026“ nicht zu „31.12.2026“ und sichtbare Figuren nicht zu einer Lobbygröße. Diese Regeln gelten für alle Dear Passengers News auf dieser Seite.',
        'Korrekturhinweise können über [[/de/kontakt/|die Kontaktseite]] eingereicht werden. Die [[/de/redaktionsrichtlinien/|deutschen Redaktionsregeln]] erklären, wie bestätigte, beobachtete und unbekannte Angaben markiert werden. Zeitkritische Werte werden nach einer neuen Prüfung mit Datum aktualisiert.'
      ]}
    ],
    faqs: [
      { question: 'Was sind die neuesten Dear Passengers News?', answer: 'Am 24.07.2026 stand das Spiel auf Rang 9 der öffentlichen Steam-Top-Wishlist-Liste. FLEXUS hatte zuvor 1,5 Millionen Wunschlisten gemeldet.' },
      { question: 'Gibt es einen neuen Release-Termin?', answer: 'Nein. Steam nennt weiterhin nur 2026 und keinen genauen Tag oder Monat.' },
      { question: 'Ist die Dear Passengers Demo erschienen?', answer: 'Nein. Sie ist geplant, aber auf Steam noch nicht öffentlich verfügbar.' },
      { question: 'Wie viele Wunschlisten hat Dear Passengers?', answer: 'FLEXUS meldete 1,5 Millionen. Das ist eine Entwicklerangabe und keine öffentlich auditierbare Live-Zahl.' },
      { question: 'Kommt Dear Passengers für Konsole?', answer: 'Nicht angekündigt. Windows-PC über Steam ist weiterhin die einzige bestätigte Plattform.' },
      { question: 'Wie werden Dear Passengers News geprüft?', answer: 'Store-Felder kommen von Steam, Studioaussagen werden FLEXUS zugeschrieben, und Medien- oder Communityberichte werden nicht als Produktbestätigung behandelt.' }
    ],
    related: ['dear-passengers-release', 'dear-passengers-demo', 'dear-passengers-trailer', 'dear-passengers-bestaetigte-features', 'dear-passengers-entwickler-flexus'],
  },
  {
    slug: 'dear-passengers-bestaetigte-features',
    englishPath: '/dear-passengers-confirmed-features/',
    keyword: 'Dear Passengers Features',
    title: 'Dear Passengers Features: Bestätigt, gezeigt oder unbekannt',
    description: 'Bestätigte Dear Passengers Features auf Deutsch: Koop, Solo, Pilot, Kabine, Physik, Wetter, Fracht, Plattformen, Demo und offene Gerüchte.',
    eyebrow: 'DEUTSCHER FEATURE-CHECK · STAND 24.07.2026',
    h1: 'Dear Passengers Features:',
    h1Accent: 'Fakten statt Gerüchte',
    intro: 'Die bestätigten Dear Passengers Features umfassen Einzelspieler, Online-Koop, Pilot- und Kabinenarbeit, physikbasierte Passagiere und Fracht sowie dynamisches Wetter. Viele häufig genannte Details sind dagegen nur im Trailer beobachtet oder noch unbekannt. Dieser deutsche Faktencheck hält die Kategorien auseinander.',
    answer: 'Bestätigte Dear Passengers Features sind Einzelspieler, Online-Koop mit Freunden, das Steuern des Flugzeugs, Arbeit in der Kabine, physikbasierte Passagiere und Fracht, dynamisches Wetter, Turbulenzen, Luftlöcher und eine Risiko-Auszahlungs-Entscheidung vor dem Start. Lobbygröße, Crossplay, lokaler Koop, Voice-Chat, Fortschritt und Konsolen sind nicht bestätigt.',
    note: '„Bestätigt“ verlangt eine direkte Steam- oder FLEXUS-Aussage. „Beobachtet“ beschreibt sichtbares Material ohne Funktionszusage. „Unbekannt“ bedeutet, dass keine belastbare öffentliche Antwort vorliegt.',
    heroImage: '/images/release-date.webp',
    heroAlt: 'Dear Passengers Flugzeugmotiv für den deutschen Check bestätigter Features',
    sections: [
      { id: 'klassen', kicker: 'FAKTENKLASSEN', heading: 'Wie Dear Passengers Features bewertet werden', paragraphs: [
        'Die stärkste Kategorie ist bestätigt: Steam-Funktionsfelder, Storebeschreibung oder eindeutige FLEXUS-Aussagen. Beobachtet bedeutet, dass ein Trailer oder Screenshot etwas zeigt, ohne Häufigkeit, Steuerbarkeit oder finalen Umfang zu erklären. Unbekannt markiert eine offene Frage. Diese drei Klassen verhindern, dass visuelle Eindrücke wie garantierte Dear Passengers Features wirken.',
        'Geplant ist eine zusätzliche zeitliche Kategorie. Eine Demo kann als Plan bestätigt sein, obwohl sie noch nicht verfügbar ist. Ebenso kann ein ungefähres Entwicklungsziel existieren, ohne fester Release-Termin zu sein. Der Wortlaut bleibt so nah wie möglich an der Quelle und wird nicht für eine stärkere Überschrift verschärft.',
        'Community-Wünsche, Tags und Vergleiche sind keine Produktfelder. Sie zeigen Nachfrage oder Genre-Einordnung. Wenn Nutzer Voice-Chat wünschen, bestätigt das nur die Frage. Wenn Steam-Nutzer einen Tag hinzufügen, ist er nicht automatisch eine Entwicklerentscheidung.'
      ]},
      { id: 'modi', kicker: 'SPIELMODI', heading: 'Solo und Online-Koop sind bestätigt', paragraphs: [
        'Steam führt Einzelspieler und Online-Koop. Das sind zwei bestätigte Dear Passengers Features. Online-Koop wird ausdrücklich mit Freunden beschrieben, und die Grundidee verteilt Arbeit zwischen Cockpit und Kabine. Eine maximale Spielerzahl wird nicht genannt. Sichtbare Figuren im Trailer dürfen nicht zu einer Zahl addiert werden.',
        'Lokaler Koop und Splitscreen sind nicht markiert. Crossplay ist nicht angekündigt, weil nur Windows-PC bestätigt ist. Integrierter Voice-Chat, öffentliche Lobbys, Matchmaking, Serverbrowser und Join-in-Progress fehlen. Jedes dieser Felder benötigt eine eigene Bestätigung und wird nicht aus dem Begriff Online-Koop abgeleitet.',
        'Beim Einzelspieler ist offen, wie mehrere Rollen funktionieren. KI-Crew, Rollenwechsel und vereinfachte Aufgaben wären mögliche Lösungen, aber keine bestätigten Dear Passengers Features. [[/de/dear-passengers-spielerzahl/|Der Spielerzahl-Guide]] verfolgt Multiplayerdetails separat.'
      ]},
      { id: 'crew', kicker: 'BESATZUNG', heading: 'Pilot und Kabinencrew', paragraphs: [
        'Das Flugzeug selbst zu steuern ist bestätigt. Andere Crewmitglieder arbeiten in der Kabine, bedienen Passagiere und schützen Fracht. Diese grobe Aufgabenverteilung gehört zu den Dear Passengers Features, aber FLEXUS nennt noch keine feste Klassenliste. Pilot und Kabinencrew sind Tätigkeitsbereiche, nicht zwingend dauerhaft gewählte Charakterklassen.',
        'Co-Pilot, Purser, Cargo-Spezialist oder Mechaniker sind verständliche Beschreibungen möglicher Teamaufteilung. Ohne offizielle Benennung bleiben sie redaktionelle Rollenmodelle. Der Trailer kann zusätzliche Figuren zeigen, bestätigt aber weder Fähigkeitenbäume noch exklusive Ausrüstung.',
        'Welche Handlungen der Pilot im Cockpit und die Crew in der Kabine genau ausführen, ist nur teilweise öffentlich. [[/de/dear-passengers-rollen/|Der deutsche Rollen-Guide]] erklärt die belegten Aufgaben und kennzeichnet sinnvolle Koordination als Empfehlung statt Funktion.'
      ]},
      { id: 'physik', kicker: 'PHYSIK', heading: 'Passagiere, Fracht und Kabinenchaos', paragraphs: [
        'Physikbasierte Passagiere, Fracht und Gegenstände werden offiziell genannt. Turbulenzen und Luftlöcher können lose Dinge durch die Kabine werfen. Diese Dear Passengers Features verbinden Flugbewegung und Innenraumarbeit. Der Trailer stützt die Beschreibung mit sichtbaren Eskalationen.',
        'Nicht bekannt sind Simulationsgenauigkeit, Kollisionsregeln, Schadenswerte und Wiederholbarkeit. Ein humorvoller Effekt im Video beweist keine vollständige Sandbox. Auch Werkzeuge, Waffen oder Reparaturen sollten nur für die konkrete Szene beschrieben werden, wenn keine Funktionsliste existiert.',
        'Vor dem Abflug wählt die Crew Passagiere und Fracht. Höhere Auszahlung bedeutet gewöhnlich mehr Ärger. Das Risiko-Belohnungs-Prinzip ist bestätigt; ein dauerhafter Wirtschafts-, Upgrade- oder Firmenbaum dagegen nicht. Eine Auszahlung allein erklärt nicht, wofür Geld verwendet wird.'
      ]},
      { id: 'wetter', kicker: 'WETTER', heading: 'Dynamisches Wetter und Turbulenzen', paragraphs: [
        'Dynamisches Wetter, Turbulenzen und Luftlöcher stehen in der offiziellen Featureliste. Sie können einen normalen Flug in eine Katastrophe verwandeln. Damit zählen sie zu den klaren Dear Passengers Features. Ihre genaue Erzeugung, Häufigkeit und Abhängigkeit von Route oder Schwierigkeitsgrad bleiben offen.',
        'Vögel, Schäden und weitere Ereignisse sind im Material sichtbar oder beschrieben. Eine einzelne Szene sollte als Beispiel gelten, nicht als vollständiger Ereigniskatalog. Es gibt keine veröffentlichte Zahl von Katastrophen, keine Roadmap und keinen bestätigten Endlosmodus.',
        'Das Wetter wirkt auf beide Crewbereiche. Der Pilot muss das Flugzeug kontrollieren, während die Kabine Folgen abfängt. Diese Abhängigkeit ist eine begründete Zusammenfassung offizieller Aussagen. Taktiken und optimale Rollen können erst nach einer spielbaren Demo verlässlich getestet werden.'
      ]},
      { id: 'plattform', kicker: 'PLATTFORM UND TECHNIK', heading: 'Welche technischen Features offen sind', paragraphs: [
        'Windows-PC über Steam ist bestätigt. Controller-Unterstützung, Steam Deck, Mac, Linux und Konsolen sind nicht angekündigt. Ebenso fehlen Cross-Save, Cloud-Speicherung und Workshop-Support. Steam kann einzelne Standardfunktionen später anzeigen; bis dahin sind sie keine Dear Passengers Features.',
        'Die Mindestanforderungen nennen Windows 10, 8 GB RAM, GTX 1060 oder RX 6600 XT, DirectX 12 und 4 GB Speicher. Empfohlene Specs und Leistungsziele fehlen. [[/de/dear-passengers-systemanforderungen/|Der deutsche PC-Guide]] ordnet diese Werte ein, ohne FPS zu erfinden.',
        'Deutsch wird auf Steam derzeit als nicht unterstützt angezeigt. Gelistet sind Englisch, Arabisch, vereinfachtes Chinesisch, Türkisch, Ukrainisch und Japanisch für die Benutzeroberfläche. Diese deutschsprachige Website ist kein Beleg für eine deutsche Spiellokalisierung.'
      ]},
      { id: 'offen', kicker: 'OFFENE LISTE', heading: 'Noch nicht bestätigte Dear Passengers Features', paragraphs: [
        'Unbekannt sind Kampagne, Missionszahl, Flugzeug- und Flughafenanzahl, Fortschritt, Schwierigkeitsmodi, Speichersystem und Barrierefreiheit. Auch Mods, Workshop, Roadmap, DLC und Post-Launch-Pläne fehlen. Bei einem frühen Entwicklungsstand ist das normal; es sollte nur nicht durch Genreannahmen ersetzt werden.',
        'Preis, exakter Release-Tag und öffentliche Demo sind ebenfalls nicht verfügbar. Die Demo ist geplant, aber ohne Zugang. Eine Händlerseite mit Platzhalterdatum oder Preisalarm ist keine Featurebestätigung. [[/de/dear-passengers-download/|Der Download-Guide]] schützt vor falscher Verfügbarkeit.',
        'Dieser Faktencheck wird als Register gepflegt. Eine neue Quelle ändert nur die betroffene Zeile und die verknüpften Fachseiten. Hinweise können über [[/de/kontakt/|Kontakt]] eingereicht werden. Screenshots ohne Originalkontext erhalten keinen bestätigten Status.'
      ]}
    ],
    faqs: [
      { question: 'Welche Dear Passengers Features sind bestätigt?', answer: 'Solo, Online-Koop, Pilot- und Kabinenarbeit, physikbasierte Passagiere und Fracht, Wetter, Turbulenzen, Luftlöcher und Risiko gegen Auszahlung.' },
      { question: 'Ist Voice-Chat bestätigt?', answer: 'Nein. Online-Koop beweist keinen integrierten Sprachchat.' },
      { question: 'Gibt es Crossplay?', answer: 'Nicht angekündigt. Nur Windows-PC über Steam ist bestätigt.' },
      { question: 'Hat Dear Passengers eine Kampagne?', answer: 'Eine Kampagnenstruktur oder Länge ist noch nicht beschrieben.' },
      { question: 'Ist eine Demo ein bestätigtes Feature?', answer: 'Die Demo ist als Plan bestätigt, aber noch nicht öffentlich verfügbar und ohne Termin.' },
      { question: 'Wird Dear Passengers deutsch unterstützt?', answer: 'Derzeit nein. Steam markiert Deutsch als nicht unterstützt.' }
    ],
    related: ['dear-passengers-spiel', 'dear-passengers-gameplay', 'dear-passengers-rollen', 'dear-passengers-spielerzahl', 'dear-passengers-entwickler-flexus'],
  },
  {
    slug: 'dear-passengers-rollen',
    englishPath: '/dear-passengers-roles/',
    keyword: 'Dear Passengers Rollen',
    title: 'Dear Passengers Rollen: Pilot und Kabinencrew erklärt',
    description: 'Dear Passengers Rollen auf Deutsch: bestätigte Aufgaben für Pilot und Kabinencrew, Fracht, Service, Notfälle, Solo und Koop ohne erfundene Klassen.',
    eyebrow: 'DEUTSCHER ROLLEN-GUIDE · STAND 24.07.2026',
    h1: 'Dear Passengers Rollen:',
    h1Accent: 'Pilot und Kabinencrew im Vergleich',
    intro: 'Die Dear Passengers Rollen verteilen Verantwortung zwischen Cockpit und Kabine. Offiziell bestätigt sind das Steuern des Flugzeugs sowie Service, Passagierkontrolle und Frachtschutz. Eine feste Klassenliste mit Co-Pilot, Mechaniker oder Cargo-Spezialist hat FLEXUS dagegen noch nicht veröffentlicht.',
    answer: 'Bestätigte Dear Passengers Rollen sind im breiten Sinn Pilot und Kabinencrew: Der Pilot steuert das Flugzeug, während die Crew Passagiere versorgt, Fracht schützt und Probleme an Bord kontrolliert. Weitere Bezeichnungen sind sinnvolle Teamaufteilungen, aber noch keine offiziell wählbaren Klassen mit festgelegten Fähigkeiten.',
    note: 'Dieser Guide unterscheidet offizielle Tätigkeitsbereiche von redaktionellen Teamempfehlungen. Ein Name wie „Co-Pilot“ oder „Mechaniker“ wird nicht als Charakterklasse dargestellt, solange FLEXUS keine Auswahl oder Fähigkeit bestätigt.',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers Besatzung in der Kabine für den deutschen Rollen-Guide',
    sections: [
      { id: 'vergleich', kicker: 'ROLLENVERGLEICH', heading: 'Welche Dear Passengers Rollen sind bestätigt?', paragraphs: [
        'Steam sagt, dass Spieler das Flugzeug steuern oder in der Kabine arbeiten. Damit sind Pilot und Kabinencrew als Aufgabenbereiche bestätigt. Die Dear Passengers Rollen werden nicht als klassische RPG-Klassen mit Werten, Talenten oder Leveln beschrieben. Eine Person kann möglicherweise Aufgaben wechseln; ob und wann das geschieht, ist offen.',
        'Die Kabinenarbeit umfasst Passagierservice, Schutz der Fracht und Reaktion auf Probleme. Im Cockpit steht die Kontrolle des Flugzeugs bei Wetter und Turbulenzen im Mittelpunkt. Beide Bereiche beeinflussen einander. Eine schlechte Flugbewegung kann die Kabine destabilisieren, während ein ungelöstes Problem die gesamte Crew bindet.',
        'Eine feste Mindestbesetzung ist unbekannt, weil die maximale Spielerzahl fehlt. [[/de/dear-passengers-spielerzahl/|Der Koop-Guide]] erklärt die technische Lücke. Dieser Rollenvergleich beschreibt deshalb Verantwortung, nicht die Anzahl benötigter Personen.'
      ]},
      { id: 'pilot', kicker: 'COCKPIT', heading: 'Was macht der Pilot?', paragraphs: [
        'Der Pilot steuert das Flugzeug. Dynamisches Wetter, Turbulenzen und Luftlöcher sind bestätigt und können die Kabine beeinflussen. Der Trailer zeigt eine Ego-Perspektive im Cockpit. Nicht bekannt sind Instrumententiefe, Navigation, Treibstoff, Start- und Landeabläufe oder ein realistischer Simulationsmodus.',
        'Im Koop liegt die wichtigste bestätigte Wechselwirkung in der Bewegung: Der Pilot muss den Flug kontrollieren, während andere Personen lose Gegenstände und Passagiere sichern. Kommunikation ist daher eine plausible Teamnotwendigkeit, aber ein integrierter Voice-Chat ist nicht bestätigt. Die Dear Passengers Rollen erklären Zusammenarbeit, nicht automatisch Kommunikationssoftware.',
        'Ob mehrere Personen im Cockpit Aufgaben teilen können, ist offen. Ein Co-Pilot ist keine offiziell benannte Klasse. Falls FLEXUS später Instrumente oder Mehrplatzsteuerung zeigt, wird diese Rolle neu bewertet. Bis dahin bleibt „Pilot“ die belastbare Bezeichnung.'
      ]},
      { id: 'kabine', kicker: 'KABINENSERVICE', heading: 'Aufgaben der Kabinencrew', paragraphs: [
        'Passagiere erwarten Essen, Getränke und einen möglichst ruhigen Flug. Die Kabinencrew übernimmt diesen Service, schützt Fracht und verhindert, dass kleine Probleme eskalieren. Diese Tätigkeiten gehören zu den bestätigten Dear Passengers Rollen. Konkrete Rezepte, Servicewerte und Werkzeuge sind noch nicht vollständig beschrieben.',
        'Physik verändert die Arbeit. Turbulenzen können Passagiere, Koffer und lose Dinge bewegen. Kabinencrew muss deshalb sowohl Routine als auch Schadenkontrolle bewältigen. Wie Passagiere beruhigt, festgehalten oder bewertet werden, ist nur teilweise sichtbar und darf nicht zu einem vollständigen System erfunden werden.',
        'Mehrere Crewmitglieder könnten Service, Fracht und Notfälle aufteilen. Diese Spezialisierung ist eine Empfehlung für denkbare Teams, keine bestätigte Klassenwahl. Die Dear Passengers Rollen können im finalen Spiel flexibler oder strukturierter sein.'
      ]},
      { id: 'fracht', kicker: 'CARGO', heading: 'Fracht und Risikomanagement', paragraphs: [
        'Vor dem Start wählt die Crew Passagiere und Fracht. Höhere Auszahlung bringt mehr Ärger. Eine Person könnte sich im Koop besonders um Ladung kümmern, weil lose oder schwierige Objekte während des Flugs Probleme verursachen. FLEXUS hat jedoch keine Rolle „Cargo-Spezialist“ mit eigener Fähigkeit bestätigt.',
        'Frachtschutz ist als Tätigkeit genannt. Gewicht, Sicherungspunkte, Schadenswerte und Inventarregeln bleiben offen. Auch Begriffe wie Schmuggler oder Sicherheitsbeamter wären zu spezifisch. Die Dear Passengers Rollen sollten nur so detailliert werden, wie das öffentliche System es erlaubt.',
        'Die Auswahl am Boden und die Folgen in der Luft bilden einen gemeinsamen Ablauf. [[/de/dear-passengers-gameplay/|Der Gameplay-Guide]] erklärt diese Risiko-Auszahlungs-Verbindung. Rollenempfehlungen werden erst nach einer Demo zu praktischen Strategien.'
      ]},
      { id: 'notfall', kicker: 'NOTFÄLLE', heading: 'Reparaturen und spontane Verantwortung', paragraphs: [
        'Trailer und Beschreibung zeigen eskalierende Probleme. Crewmitglieder reagieren auf Schäden und Chaos. Ob es eine feste Mechanikerklasse gibt, ist nicht bestätigt. Werkzeuge in einer Szene können interaktiv sein, verraten aber keine dauerhafte Rolle oder Fähigkeitstabelle.',
        'In einem flexiblen Team kann die nächste verfügbare Person einen Notfall übernehmen. In einem Klassensystem könnten Aufgaben gebunden sein. FLEXUS hat diese Designentscheidung noch nicht erklärt. Der Guide nennt daher „Notfallverantwortung“ als Arbeit, nicht „Mechaniker“ als bestätigte Dear Passengers Rolle.',
        'Auch Wiederbelebung, Gesundheit, Tod und Respawn sind nicht öffentlich beschrieben. Spektakuläre Trailerbilder sollten nicht als genaue Regel gelesen werden. Praktische Notfalltipps wären vor einer spielbaren Version verfrüht.'
      ]},
      { id: 'solo', kicker: 'SOLO', heading: 'Wie funktionieren Rollen im Einzelspieler?', paragraphs: [
        'Einzelspieler ist bestätigt, die Umsetzung der Dear Passengers Rollen jedoch offen. Eine Person könnte wechseln, Unterstützung erhalten oder einen angepassten Ablauf spielen. Keine dieser Möglichkeiten ist offiziell genannt. Insbesondere KI-Kabinencrew sollte nicht als sicher dargestellt werden.',
        'Die Solo-Balance muss Aufgabenmenge und Flugsteuerung berücksichtigen. FLEXUS kann dafür andere Regeln verwenden als im Koop. Ein Eintrag „Singleplayer“ beweist nur Spielbarkeit allein, nicht identische Missionen oder vollständige Automatisierung.',
        'Eine Demo wäre die beste Quelle für konkrete Abläufe. [[/de/dear-passengers-demo/|Der deutsche Demo-Status]] wird aktualisiert, sobald ein öffentlicher Build existiert. Bis dahin bleibt der Solo-Rollenwechsel unbekannt.'
      ]},
      { id: 'team', kicker: 'TEAMPLAN', heading: 'Sinnvolle Aufteilung ohne erfundene Klassen', paragraphs: [
        'Ein Team kann vor dem Start Verantwortung besprechen: eine Person hält das Flugzeug stabil, eine beobachtet Passagiere, eine achtet auf Fracht und alle reagieren auf Notfälle. Das ist eine taktische Interpretation der bestätigten Aufgaben. Es wird nicht als Menü, Bonus oder vorgeschriebene Besetzung verkauft.',
        'Die beste Aufteilung hängt von der tatsächlichen Spielerzahl, Mission und Schwierigkeit ab. Da alle drei unbekannt sind, bleiben Empfehlungen vorläufig. Die Dear Passengers Rollen sollen Kommunikation erleichtern, nicht Erwartungen an ein noch nicht erklärtes Klassensystem festschreiben.',
        'Neue offizielle Rollen, Fähigkeiten oder Auswahlbildschirme werden mit Quelle und Datum ergänzt. Hinweise können über [[/de/kontakt/|die Kontaktseite]] eingereicht werden. Trailerzählungen und Fanbegriffe erhalten ohne Entwicklerbeleg keinen bestätigten Status.'
      ]}
    ],
    faqs: [
      { question: 'Welche Dear Passengers Rollen gibt es?', answer: 'Bestätigt sind Pilot und Kabinencrew als Tätigkeitsbereiche. Eine feste Klassenliste ist noch nicht veröffentlicht.' },
      { question: 'Was macht der Pilot?', answer: 'Er steuert das Flugzeug und reagiert auf Wetter, Turbulenzen und Luftlöcher. Die Tiefe des Flugmodells ist offen.' },
      { question: 'Was macht die Kabinencrew?', answer: 'Sie bedient Passagiere, schützt Fracht und kontrolliert Probleme in der Kabine.' },
      { question: 'Gibt es einen Co-Piloten?', answer: 'Nicht als offizielle Klasse bestätigt. Mehrere Cockpitaufgaben oder Mehrplatzsteuerung sind noch unbekannt.' },
      { question: 'Gibt es einen Mechaniker?', answer: 'Reaktionen auf Schäden sind sichtbar, aber eine feste Mechanikerklasse wurde nicht angekündigt.' },
      { question: 'Wie funktionieren Rollen im Solo-Modus?', answer: 'Einzelspieler ist bestätigt, doch Rollenwechsel, KI-Unterstützung oder Anpassungen sind nicht erklärt.' }
    ],
    related: ['dear-passengers-gameplay', 'dear-passengers-spielerzahl', 'dear-passengers-bestaetigte-features', 'dear-passengers-demo', 'spiele-wie-dear-passengers'],
  },
  {
    slug: 'dear-passengers-entwickler-flexus',
    englishPath: '/dear-passengers-developer-flexus/',
    keyword: 'Dear Passengers Entwickler',
    title: 'Dear Passengers Entwickler: Wer ist FLEXUS Games?',
    description: 'Der Dear Passengers Entwickler FLEXUS im deutschen Studio-Profil: Herkunft, frühere Spiele, Entwicklung, Wunschlisten, Demo und Release-Aussagen.',
    eyebrow: 'DEUTSCHES STUDIO-PROFIL · STAND 24.07.2026',
    h1: 'Dear Passengers Entwickler:',
    h1Accent: 'Wer hinter FLEXUS Games steht',
    intro: 'Der Dear Passengers Entwickler und Publisher ist FLEXUS. Das Studio wurde 2020 gegründet, arbeitete zuvor vor allem an Mobile-Spielen und entwickelt mit Dear Passengers ein PC-Koop-Spiel für Steam. Dieses deutsche Profil trennt Store-Fakten, direkte Interviewaussagen und nicht unabhängig überprüfbare Erfolgsangaben.',
    answer: 'Dear Passengers wird von FLEXUS entwickelt und veröffentlicht. Das 2020 gegründete Studio arbeitete zuvor an Mobile-Titeln wie Train Miner, Tower Craft und Dye Hard. FLEXUS nennt Kyiv als Studiokontext und berichtete über 1,5 Millionen Wunschlisten. Demo- und Release-Aussagen werden als Entwicklungspläne gekennzeichnet, nicht als garantierte Termine.',
    note: 'Studiohistorie und Produktfelder werden mit Steam und direkten Interviews geprüft. Wunschlisten-, Team- und Produktionsangaben werden dem Studio zugeschrieben, sofern keine unabhängige öffentliche Datenquelle existiert.',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers Flugzeugkabine als Hintergrund für das deutsche FLEXUS-Studioprofil',
    sections: [
      { id: 'wer', kicker: 'STUDIO', heading: 'Wer ist der Dear Passengers Entwickler?', paragraphs: [
        'Steam nennt FLEXUS sowohl als Entwickler als auch als Publisher. Damit gibt es keinen getrennt ausgewiesenen externen Verlag auf der Produktseite. Der Dear Passengers Entwickler kontrolliert nach diesem öffentlichen Stand Entwicklung und Veröffentlichung selbst. Weitere Firmenrollen oder Vertriebspartner sind nicht genannt.',
        'FLEXUS beschreibt sich als 2020 gegründetes Studio mit Wurzeln in Kyiv. Direkte Interviews liefern Kontext zur Team- und Firmengeschichte. Solche Angaben werden als Selbstauskunft behandelt, wenn keine Register- oder Unternehmensquelle geprüft wurde. Der Standort ist besonders bei der Einordnung der Produktionsbedingungen relevant, sollte aber nicht für dramatische Vermutungen genutzt werden.',
        'Die offizielle Steam-App-ID 4534960 verbindet Produkt und Herausgeber. Ähnlich benannte Websites oder Social-Konten beweisen keine Zugehörigkeit. Für Downloads und Ankündigungen ist die nachvollziehbare Verbindung zwischen FLEXUS und Steam entscheidend.'
      ]},
      { id: 'frueher', kicker: 'VORGESCHICHTE', heading: 'Welche Spiele hat FLEXUS vorher entwickelt?', paragraphs: [
        'In Interviews werden frühere Mobile-Projekte wie Train Miner, Tower Craft und Dye Hard genannt. Diese Titel zeigen Erfahrung mit zugänglichen Spielschleifen und mobilen Märkten, bestimmen aber nicht automatisch Design oder Geschäftsmodell von Dear Passengers. Der neue Titel wird als Windows-PC-Spiel auf Steam angekündigt.',
        'Ein Studio kann Technologien, Teamstruktur und Zielgruppe zwischen Projekten ändern. Deshalb werden frühere Spiele nicht als Beweis für Mikrotransaktionen, Free-to-Play oder bestimmte Mechaniken verwendet. Der Dear Passengers Entwickler hat noch keinen Preis und kein Geschäftsmodell für die PC-Veröffentlichung genannt.',
        'Auch Genrevergleiche bleiben vorsichtig. Mobile-Erfahrung kann Produktionswissen liefern, erklärt aber nicht die finale Physik, Netzwerkarchitektur oder Content-Menge. Diese Felder brauchen produktbezogene Quellen.'
      ]},
      { id: 'entwicklung', kicker: 'PRODUKTION', heading: 'Wie lange wird Dear Passengers entwickelt?', paragraphs: [
        'Direkte Studiointerviews beschreiben einen längeren Entwicklungsprozess und die Bedingungen, unter denen das Team arbeitete. Ein Interviewdatum ist eine Momentaufnahme; Teamgröße, Budget und Zeitplan können sich ändern. Exakte Produktionszahlen werden nur mit Zuschreibung wiedergegeben.',
        'FLEXUS nennt 2026 als Zieljahr, während Steam ebenfalls 2026 anzeigt. Eine frühere Aussage sprach ungefähr vom Herbst, eine spätere betonte, dass kein genauer Termin feststeht und Qualität Vorrang hat. Der Dear Passengers Entwickler hat damit ein Ziel, aber keinen verbindlichen Tag veröffentlicht.',
        'Entwicklungsdauer erlaubt keine sichere Aussage über Umfang oder Qualität. Ein langer Prozess kann viele Gründe haben. Eine Rezension der fertigen Arbeit ist erst nach Veröffentlichung möglich. [[/de/dear-passengers-release/|Der Release-Guide]] hält Zeitfenster und feste Ankündigung auseinander.'
      ]},
      { id: 'erfolg', kicker: 'WUNSCHLISTEN', heading: 'Wie FLEXUS den schnellen Wunschlistenanstieg beschreibt', paragraphs: [
        'FLEXUS berichtete kurz nach der Vorstellung über 700.000, später eine Million und schließlich 1,5 Millionen Wunschlisten. Die öffentliche Steam-Top-Wishlist-Liste führte das Spiel am 24.07.2026 auf Rang 9. Der Rang ist öffentlich beobachtbar; die absolute Zahl stammt aus Studioangaben.',
        'Wunschlisten sind weder Verkäufe noch aktive Spieler. Sie zeigen Interesse und können sich bis zur Veröffentlichung verändern. Aus 1,5 Millionen Einträgen darf kein Umsatz berechnet werden. Der Dear Passengers Entwickler hat keinen Preis genannt, und nicht jede Wunschliste führt zu einem Kauf.',
        'Der [[/de/dear-passengers-news/|deutsche News-Tracker]] speichert Rangstände mit Datum. So bleibt eine spätere Bewegung nachvollziehbar, ohne ältere Werte als falsch zu löschen. Erfolgsangaben werden nicht mit erfundenen Echtzeit-Zählern dargestellt.'
      ]},
      { id: 'demo-release', kicker: 'AUSSAGEN', heading: 'Was FLEXUS zu Demo und Release sagt', paragraphs: [
        'FLEXUS plant eine Gamescom-Fassung und eine spätere öffentliche Demo. Termin, Zugang und Umfang fehlen. Der Dear Passengers Entwickler bestätigt damit Absicht, nicht Verfügbarkeit. Steam besitzt aktuell keinen Demo- oder Playtest-Button.',
        'Beim Release bleibt 2026 der bestätigte Store-Rahmen. Ein ungefähres Herbstziel aus einem früheren Interview ist nicht gleichbedeutend mit einem fixen Datum. Medien dürfen dieses Ziel zitieren, sollten es aber nicht als garantierten Monat darstellen.',
        '[[/de/dear-passengers-demo/|Der Demo-Guide]] und [[/de/dear-passengers-release/|der Release-Guide]] aktualisieren getrennt. Ein Demo-Termin verändert nicht automatisch den Vollversionstermin, und eine Messeversion beweist keinen öffentlichen Heimdownload.'
      ]},
      { id: 'ki', kicker: 'ÖFFENTLICHE DEBATTE', heading: 'Wie Studioaussagen zur KI-Diskussion einzuordnen sind', paragraphs: [
        'Nach dem Trailer entstand Kritik am visuellen Stil und möglichem KI-Einsatz. FLEXUS reagierte und erklärte den eigenen Produktionskontext. Diese Antwort ist eine Primärquelle für die Position des Studios, aber keine unabhängige technische Prüfung aller Assets.',
        'Ein seriöses Profil gibt weder Vorwurf noch Entlastung als unbestrittene Tatsache aus. Es beschreibt, wer was behauptet, welche Belege öffentlich sind und was offenbleibt. Der Dear Passengers Entwickler darf an seinen Aussagen gemessen werden; Community-Kommentare dürfen nicht zu Produktmechaniken umgedeutet werden.',
        'Neue Credits, Quelldateien oder detaillierte Produktionsangaben könnten die Evidenz verändern. Bis dahin bleibt die Darstellung neutral und verlinkt den Originalkontext, statt nur Screenshots zu wiederholen.'
      ]},
      { id: 'pruefen', kicker: 'VERIFIKATION', heading: 'Offizielle FLEXUS-Kanäle erkennen', paragraphs: [
        'Die Steam-Produktseite ist der zentrale Produktanker. Von dort verlinkte oder konsistent benannte FLEXUS-Kanäle sind stärker als Domains mit dem Spieltitel. Ein offizieller Kanal sollte nachvollziehbare Studiohistorie, mehrere Projekte und gegenseitige Verlinkung besitzen.',
        'Bei Interviews werden Autor, Datum, wörtliche Aussage und Kontext geprüft. Eine Überschrift kann eine Aussage zuspitzen; der Originalabsatz ist maßgeblich. Übersetzungen ins Deutsche sollen Bedeutung erhalten und Unsicherheitswörter wie „planen“, „ungefähr“ oder „wenn alles klappt“ nicht entfernen.',
        'Hinweise auf neue Aussagen des Dear Passengers Entwicklers können über [[/de/kontakt/|Kontakt]] eingereicht werden. Die [[/de/redaktionsrichtlinien/|Redaktionsrichtlinien]] erklären Korrekturen und Quellenpriorität.'
      ]}
    ],
    faqs: [
      { question: 'Wer ist der Dear Passengers Entwickler?', answer: 'FLEXUS entwickelt und veröffentlicht Dear Passengers laut Steam selbst.' },
      { question: 'Woher kommt FLEXUS Games?', answer: 'Das Studio beschreibt einen 2020 gegründeten Kontext in Kyiv. Diese Historie stammt aus direkten Studiointerviews.' },
      { question: 'Welche Spiele hat FLEXUS vorher gemacht?', answer: 'Genannt werden Mobile-Titel wie Train Miner, Tower Craft und Dye Hard.' },
      { question: 'Wie viele Wunschlisten meldet FLEXUS?', answer: 'Das Studio berichtete über 1,5 Millionen Wunschlisten. Die Zahl ist eine Entwicklerangabe.' },
      { question: 'Hat FLEXUS eine Demo bestätigt?', answer: 'Ja, als Plan für Gamescom und später öffentlich. Termin und Zugang fehlen.' },
      { question: 'Ist FLEXUS mit Steam verbunden?', answer: 'FLEXUS ist Entwickler und Publisher des Produkts; Steam ist die Vertriebsplattform von Valve. Es handelt sich nicht um dasselbe Unternehmen.' }
    ],
    related: ['dear-passengers-news', 'dear-passengers-release', 'dear-passengers-demo', 'dear-passengers-bestaetigte-features'],
  },
  {
    slug: 'spiele-wie-dear-passengers',
    englishPath: '/games-like-dear-passengers/',
    keyword: 'Spiele wie Dear Passengers',
    title: 'Spiele wie Dear Passengers: Koop-Chaos im Vergleich',
    description: 'Spiele wie Dear Passengers: Koop-Titel mit Physik, Crew-Aufgaben und gemeinsamem Chaos fair vergleichen – darunter R.E.P.O., Lethal Company und PlateUp!.',
    eyebrow: 'DEUTSCHER KOOP-VERGLEICH · STAND 24.07.2026',
    h1: 'Spiele wie Dear Passengers:',
    h1Accent: 'Koop, Physik und Crew-Chaos',
    intro: 'Spiele wie Dear Passengers verbinden gemeinsame Verantwortung, physikalische Pannen oder Dienstleistungsdruck. Kein veröffentlichter Titel ist identisch mit FLEXUS’ Flugzeugkonzept. Dieser deutsche Vergleich ordnet Alternativen nach nachvollziehbaren Gemeinsamkeiten ein, ohne Funktionen des unveröffentlichten Spiels vorwegzunehmen.',
    answer: 'Geeignete Spiele wie Dear Passengers sind R.E.P.O. und Human: Fall Flat für physikbasierten Koop, Lethal Company und Content Warning für gemeinsame Risikoentscheidungen, PlateUp! und Overcooked! für Servicekoordination sowie Sky Team für eine ruhige, analoge Cockpit-Zusammenarbeit. Die Ähnlichkeit betrifft einzelne Motive, nicht ein identisches Gesamtspiel.',
    note: 'Der Vergleich ist redaktionell. Preise, Plattformen, Spielerzahlen und Store-Funktionen der Alternativen können sich ändern. Eine Aufnahme bedeutet keine Entwicklerverbindung und keinen Kopiervorwurf.',
    heroImage: '/images/hero-bg.webp',
    heroAlt: 'Dear Passengers Kabinenchaos als Motiv für ähnliche deutsche Koop-Spiele',
    sections: [
      { id: 'kriterien', kicker: 'AUSWAHL', heading: 'Wie Spiele wie Dear Passengers verglichen werden', paragraphs: [
        'Dear Passengers kombiniert Flugzeugsteuerung, Kabinenservice, Frachtwahl, Wetter und Physik. Da die Vollversion noch nicht spielbar ist, kann ein Vergleich nur die bestätigten Säulen verwenden. Spiele wie Dear Passengers werden danach ausgewählt, ob sie geteilte Rollen, physikalische Interaktion, Risiko gegen Belohnung oder koordinierten Service bieten.',
        'Ein Genrelabel allein reicht nicht. Ein realistischer Flugsimulator teilt zwar das Flugzeugmotiv, aber nicht zwingend die komische Crew-Arbeit. Ein Koop-Horrorspiel kann thematisch weit entfernt sein und trotzdem ähnliche Kommunikation oder physikalische Pannen erzeugen. Der Vergleich nennt deshalb immer den konkreten Überschneidungspunkt.',
        'Dear Passengers hat noch keine bestätigte maximale Spielerzahl, Preis oder Demo. Diese offenen Felder werden nicht aus Alternativen abgeleitet. Kaufentscheidungen für andere Spiele sollten auf deren aktuellen offiziellen Storeseiten beruhen.'
      ]},
      { id: 'physik', kicker: 'PHYSIK-KOOP', heading: 'R.E.P.O. und Human: Fall Flat', paragraphs: [
        'R.E.P.O. setzt auf kooperative Physik, das gemeinsame Bewegen von Gegenständen und riskante Ausflüge. Die Überschneidung liegt in Objekten, die unter Druck schwer kontrollierbar werden. Horror, Gegner und Bergungsstruktur unterscheiden es deutlich vom Flugdienst. Es ist ein Vergleich für physikalische Teamfehler, nicht für Luftfahrt.',
        'Human: Fall Flat nutzt absichtlich unbeholfene Körperphysik und gemeinsame Rätsel. Wer an Dear Passengers vor allem die slapstickartige Bewegung von Figuren und Objekten interessant findet, erhält hier eine zugängliche Alternative. Es fehlen jedoch Passagierservice, Frachtökonomie und Cockpitverantwortung.',
        'Beide Spiele wie Dear Passengers zeigen, warum Physik im Koop Kommunikation erzeugt: Gegenstände reagieren nicht perfekt, und kleine Fehler werden gemeinsam gelöst. Ob FLEXUS ähnlich präzise oder bewusst ungenau steuert, kann erst eine Demo zeigen.'
      ]},
      { id: 'risiko', kicker: 'RISIKO UND BELOHNUNG', heading: 'Lethal Company und Content Warning', paragraphs: [
        'Lethal Company verbindet Crewkoordination mit Quote, Risiko und der Entscheidung, wie weit eine Gruppe für Belohnung geht. Dear Passengers beschreibt ebenfalls höhere Auszahlung für schwierigere Passagiere oder Fracht. Setting und Horror unterscheiden sich, doch der gemeinsame Entscheidungsdruck macht den Vergleich nachvollziehbar.',
        'Content Warning belohnt Teams dafür, gefährliche Situationen zu filmen. Es lebt von Kommunikation, unerwarteten Ereignissen und gemeinsam erzählten Pannen. Das ist tonal näher an viralen Koop-Abenden als an realistischer Luftfahrt. Die Mechanik des Filmens ist kein angekündigtes Dear Passengers Feature.',
        'Diese Spiele wie Dear Passengers helfen, die Attraktion „mehr Risiko für eine bessere Belohnung“ zu verstehen. Sie dürfen aber nicht als Beweis für Proximity-Chat, Monster, Quoten oder Rundenlänge im FLEXUS-Spiel dienen.'
      ]},
      { id: 'service', kicker: 'SERVICE-KOOP', heading: 'PlateUp! und Overcooked!', paragraphs: [
        'PlateUp! verteilt Restaurantarbeit und verbindet Service mit wachsendem Druck. Teams organisieren Wege, Aufgaben und Verbesserungen. Die Ähnlichkeit zu Dear Passengers liegt im Bedienen von Kunden und in räumlicher Koordination. Flugsteuerung, Wetter und physikalische Passagiere fehlen.',
        'Overcooked! ist ein direkteres Beispiel für chaotische Dienstleistung. Einfache Handgriffe werden durch Zeitdruck und veränderliche Umgebungen schwierig. Wer in der Kabinencrew vor allem gemeinsames Bedienen und lautes Abstimmen sucht, findet hier einen klaren Bezug.',
        'Beide Alternativen sind veröffentlichte, eigenständige Spiele. Ihr bewährter Ablauf sagt nichts darüber aus, wie tief Service im unveröffentlichten Dear Passengers ausfällt. Spiele wie Dear Passengers werden nach Teilähnlichkeit empfohlen, nicht als Ersatz mit identischer Mechanik.'
      ]},
      { id: 'flug', kicker: 'FLUGZEUG-TEAMWORK', heading: 'Sky Team und Flugsimulatoren', paragraphs: [
        'Sky Team ist ein kooperatives Brettspiel für zwei Personen, in dem Pilot und Co-Pilot ein Flugzeug gemeinsam landen. Es bietet konzentrierte Cockpitkommunikation statt physikbasiertem Kabinenchaos. Für Menschen, die das Luftfahrtmotiv und klare Rollen mögen, ist es dennoch eine interessante analoge Alternative.',
        'Microsoft Flight Simulator und andere Simulationen konzentrieren sich stärker auf authentisches Fliegen. Dear Passengers ist bisher als Action-Adventure und Koop-Spiel positioniert, nicht als bestätigte Vollsimulation. Ein Flugsimulator passt daher nur, wenn das Cockpitmotiv wichtiger ist als Service und Slapstick.',
        'Der Vergleich zeigt zwei Extreme: präzise Cockpitzusammenarbeit und technische Simulation. Dear Passengers könnte dazwischen liegen, doch die tatsächliche Flugtiefe bleibt offen. [[/de/dear-passengers-gameplay/|Der Gameplay-Guide]] hält diese Grenze fest.'
      ]},
      { id: 'wahl', kicker: 'EMPFEHLUNG', heading: 'Welche Alternative passt zu welcher Gruppe?', paragraphs: [
        'Für physikalisches Objektchaos eignen sich R.E.P.O. oder Human: Fall Flat. Für Risiko, gemeinsame Geschichten und angespannte Kommunikation passen Lethal Company oder Content Warning. Für Servicekoordination sind PlateUp! und Overcooked! naheliegend. Für Cockpitarbeit ohne digitale Action bietet Sky Team eine andere Perspektive.',
        'Gruppen sollten Plattform, Altersfreigabe, Horrorintensität und aktuelle Spielerzahl auf den jeweiligen Storeseiten prüfen. Dieser Guide nennt bewusst keine dauerhaften Preise, weil Rabatte und Regionen wechseln. Ein Spiel kann online oder lokal andere Modi besitzen als Dear Passengers.',
        'Die beste Wahl hängt davon ab, welcher bestätigte Teil des FLEXUS-Konzepts reizt. Eine spätere Demo kann den Vergleich verändern. Dann wird nicht einfach ein weiteres Spiel ergänzt, sondern die Ähnlichkeitskriterien werden anhand des echten Ablaufs neu gewichtet.'
      ]},
      { id: 'fairness', kicker: 'FAIRER VERGLEICH', heading: 'Keine Kopie und kein Ersatzversprechen', paragraphs: [
        'Ähnliche Genreideen sind kein Beweis für Kopieren. Physik, Koop, Service und Luftfahrt existieren in vielen Spielen. Eine faire Seite benennt konkrete Gemeinsamkeiten und Unterschiede, ohne Absichten von Entwicklern zu unterstellen. Spiele wie Dear Passengers sind Empfehlungen für Wartezeit, keine juristische oder kreative Bewertung.',
        'Ebenso wird nicht behauptet, eine Alternative biete exakt den kommenden Inhalt. Dear Passengers besitzt ein eigenes Flugzeug-, Passagier- und Frachtthema. Bis zur Veröffentlichung bleibt offen, wie lang Runden dauern, wie Fortschritt funktioniert und welche Systeme am wichtigsten werden.',
        'Hinweise auf weitere passende Titel können über [[/de/kontakt/|Kontakt]] gesendet werden. Eine Aufnahme benötigt eine nachvollziehbare, konkrete Überschneidung und eine offizielle Produktquelle. Reine Affiliate-Chancen oder Namensähnlichkeit reichen nicht.'
      ]}
    ],
    faqs: [
      { question: 'Welche Spiele sind wie Dear Passengers?', answer: 'R.E.P.O., Human: Fall Flat, Lethal Company, Content Warning, PlateUp!, Overcooked! und Sky Team teilen jeweils Physik, Risiko, Service oder Crewkoordination.' },
      { question: 'Gibt es schon ein identisches Spiel?', answer: 'Nein. Die Empfehlungen überschneiden sich in einzelnen Mechaniken, nicht im gesamten Flugzeugkonzept.' },
      { question: 'Welches Spiel bietet ähnliches Physik-Chaos?', answer: 'R.E.P.O. und Human: Fall Flat sind naheliegende Beispiele für kooperative Physik.' },
      { question: 'Welches Spiel bietet ähnlichen Service-Koop?', answer: 'PlateUp! und Overcooked! stellen gemeinsame Dienstleistungsaufgaben unter Druck.' },
      { question: 'Welches Spiel bietet Flugzeug-Teamwork?', answer: 'Sky Team bietet als Brettspiel konzentrierte Zusammenarbeit zwischen Pilot und Co-Pilot.' },
      { question: 'Sind diese Spiele vom gleichen Entwickler?', answer: 'Nein. Die Liste ist eine unabhängige redaktionelle Auswahl und behauptet keine Verbindung zu FLEXUS.' }
    ],
    related: ['dear-passengers-gameplay', 'dear-passengers-rollen', 'dear-passengers-bestaetigte-features', 'dear-passengers-release'],
  },
];

export const germanHomeGuide: GermanGuide = {
  slug: '',
  englishPath: '/',
  chinesePath: '/zh-cn/',
  keyword: 'Dear Passengers Spiel',
  title: 'Dear Passengers Spiel: Gameplay, Release und Koop-Guide',
  description: 'Das Dear Passengers Spiel auf Deutsch: bestätigtes Gameplay, Koop, Spielerzahl, Release 2026, Demo, Systemanforderungen, Trailer und FLEXUS-News.',
  eyebrow: 'UNABHÄNGIGER DEUTSCHER SPIELE-GUIDE · STAND 29.07.2026',
  h1: 'Dear Passengers Spiel:',
  h1Accent: 'Der komplette deutsche Koop-Guide',
  intro: 'Das Dear Passengers Spiel macht eine chaotische Fluggesellschaft zum Koop-Abenteuer: Eine Person steuert, die Kabinencrew versorgt Passagiere, riskante Fracht verspricht mehr Geld und Wetter verwandelt Routine in physikalisches Chaos. Dieser deutsche Hub bündelt bestätigte Fakten, offene Fragen und alle lokal recherchierten Guides.',
  answer: 'Dear Passengers ist ein von FLEXUS entwickeltes Action-Adventure für Windows-PC mit Einzelspieler und Online-Koop. Das Dear Passengers Spiel ist für 2026 auf Steam geplant. Ein genauer Termin, Preis, öffentlicher Demo-Download, maximale Spielerzahl und Konsolenfassungen sind noch nicht bestätigt.',
  note: 'Diese deutsche Ausgabe ist redaktionell lokalisiert und keine automatische Übersetzung. Begriffe wie Koop-Spiel, Gameplay, Spielerzahl, Release und Systemanforderungen folgen deutscher Such- und Mediensprache; Fakten stammen weiterhin aus Primärquellen.',
  heroImage: '/images/hero-bg.webp',
  heroAlt: 'Offizielle Kabinenszene aus dem Dear Passengers Spiel für den vollständigen deutschen Guide',
  sections: [
    { id: 'was-ist-das', kicker: 'SPIELÜBERBLICK', heading: 'Was ist das Dear Passengers Spiel?', paragraphs: [
      'Dear Passengers ist ein Action-, Adventure- und Indie-Spiel von FLEXUS. Die Besatzung versucht, Passagiere und Fracht ans Ziel zu bringen, obwohl das Flugzeug, das Wetter und die eigenen Entscheidungen ständig neue Probleme erzeugen. Steam bestätigt Einzelspieler und Online-Koop. Das Dear Passengers Spiel ist kein veröffentlichtes Produkt und kann derzeit nur vorgemerkt werden.',
      'Die zentrale Idee beginnt vor dem Abflug: Die Crew wählt Passagiere und Fracht. Höhere Auszahlung bedeutet gewöhnlich mehr Ärger. In der Luft steuert ein Teil der Besatzung das Flugzeug, während andere Personen Essen und Getränke servieren, Ladung schützen und Probleme kontrollieren. Turbulenzen und Luftlöcher bewegen Passagiere, Gepäck und lose Gegenstände.',
      'Deutsche Medien beschreiben den Titel natürlich als chaotisches Koop-Spiel, Airline-Chaos oder Physik-Koop. Diese Begriffe treffen die öffentliche Präsentation besser als eine wörtliche Übersetzung einzelner englischer Slogans. [[/de/dear-passengers-gameplay/|Der Gameplay-Guide]] erklärt den Ablauf im Detail.'
    ]},
    { id: 'status', kicker: 'FLUGSTATUS', heading: 'Release, Plattform und Preis', paragraphs: [
      'Steam nennt 2026 als Veröffentlichungsfenster. Ein genauer Tag oder Monat fehlt. Eine frühere Interviewaussage nannte ungefähr den Herbst als Entwicklungsziel; eine spätere Aussage betonte, dass kein genauer Termin feststeht. Das Dear Passengers Spiel sollte deshalb nicht mit einem Platzhalterdatum wie 31.12.2026 beworben werden.',
      'Windows-PC über Steam ist die einzige bestätigte Plattform. PS5, Xbox, Nintendo Switch, Mac und Linux sind nicht angekündigt. Es gibt auch keinen veröffentlichten Preis, keine Editionen und keine Vorbestellung. Drittanbieter-Keys oder Preisalarme bestätigen weder Verfügbarkeit noch Kosten.',
      '[[/de/dear-passengers-release/|Der deutsche Release-Check]] führt Termin, Plattform und Sprache. [[/de/dear-passengers-download/|Der Download-Guide]] erklärt, warum APK- und Direktdownload-Angebote aktuell nicht als offizielle FLEXUS-Version gelten.'
    ]},
    { id: 'koop', kicker: 'BESATZUNG', heading: 'Koop, Solo und Spielerzahl', paragraphs: [
      'Einzelspieler und Online-Koop sind bestätigt. Die maximale Spielerzahl fehlt. Mehrere Figuren im Trailer sind kein technischer Lobbywert. Auch lokaler Koop, Splitscreen, Crossplay, Voice-Chat, Matchmaking und öffentliche Lobbys sind nicht bestätigt. Das Dear Passengers Spiel verspricht Zusammenarbeit, aber noch keine vollständige Netzwerkbeschreibung.',
      'Pilot und Kabinencrew sind die klaren Tätigkeitsbereiche. FLEXUS hat keine feste Klassenliste mit Co-Pilot, Mechaniker oder Cargo-Spezialist veröffentlicht. Teams können Verantwortung wahrscheinlich aufteilen, doch eine Empfehlung darf nicht wie eine wählbare Fähigkeit wirken.',
      '[[/de/dear-passengers-spielerzahl/|Der Spielerzahl-Guide]] beantwortet „Wie viele Spieler?“ ohne zu raten. [[/de/dear-passengers-rollen/|Der Rollen-Guide]] vergleicht Cockpit, Service, Fracht und Notfallarbeit.'
    ]},
    { id: 'demo', kicker: 'PROBEFLUG', heading: 'Demo, Playtest und Gamescom', paragraphs: [
      'FLEXUS plant eine Gamescom-Fassung und eine spätere öffentliche Demo. Auf Steam gibt es aktuell weder Demo-Button noch Playtest-Formular. Termin, Zugang, Umfang und Teilnehmerzahl sind unbekannt. Eine Messeversion beweist keinen zeitgleichen Heimdownload.',
      'Demo, Beta, Steam Playtest und Early Access sind verschiedene Begriffe. Für das Dear Passengers Spiel ist nur die geplante Demo direkt erwähnt. Webseiten sollten keine Beta-Keys oder Early-Access-Verfügbarkeit behaupten, solange FLEXUS diese Form nicht ankündigt.',
      '[[/de/dear-passengers-demo/|Der Demo-Status]] prüft jeden späteren Zugang. Ein echter Test muss über Steam oder einen eindeutig offiziellen FLEXUS-Kanal erreichbar sein und darf keine fremden Login- oder Installationsschritte verlangen.'
    ]},
    { id: 'pc', kicker: 'PC-CHECK', heading: 'Dear Passengers Systemanforderungen', paragraphs: [
      'Die Mindestwerte lauten Windows 10 in 64 Bit, Intel Core i5 mit 2,5 GHz oder vergleichbar, 8 GB RAM, NVIDIA GeForce GTX 1060 oder AMD Radeon RX 6600 XT, DirectX 12 und 4 GB verfügbarer Speicher. Empfohlene Werte fehlen.',
      'Auflösung, Bildrate, Grafikpreset und VRAM werden nicht genannt. Steam Deck besitzt keine Bewertung, und Mac oder Linux sind nicht bestätigt. Aus der Mindestliste lässt sich kein garantierter Benchmark für das Dear Passengers Spiel ableiten.',
      '[[/de/dear-passengers-systemanforderungen/|Der deutsche Hardware-Guide]] erklärt GPU, CPU, RAM, Speicher und Laptop-Fragen. Messwerte werden erst nach einer veröffentlichten Demo oder Vollversion mit Build und Einstellungen ergänzt.'
    ]},
    { id: 'news', kicker: 'AKTUELLE MELDUNGEN', heading: 'Wunschlisten und Dear Passengers News', paragraphs: [
      'FLEXUS meldete 1,5 Millionen Wunschlisten. Am 24.07.2026 stand das Dear Passengers Spiel auf Rang 9 der öffentlichen Steam-Top-Wishlist-Liste. Die absolute Zahl ist eine Entwicklerangabe, während der Rang als datierte öffentliche Momentaufnahme beobachtet wurde.',
      'Wunschlisten sind keine Verkäufe und keine aktive Spielerzahl. Sie zeigen starkes Interesse, erlauben aber keine sichere Umsatzrechnung. Der Rang kann sich täglich ändern. [[/de/dear-passengers-news/|Der deutsche News-Tracker]] speichert alte und neue Messpunkte, statt einen dynamischen Wert ohne Datum zu zeigen.',
      'Neue Medien-Reuploads mit bekanntem Trailerbild gelten nicht automatisch als Produktmeldung. Erst neue offizielle Fakten zu Release, Demo, Plattform, Mechanik oder Material verändern den Stand des Guides.'
    ]},
    { id: 'quellen', kicker: 'TRANSPARENZ', heading: 'Bestätigt, beobachtet und unbekannt', paragraphs: [
      'Bestätigt sind direkte Steam-Felder und eindeutige FLEXUS-Aussagen. Beobachtet beschreibt sichtbare Trailer- oder Screenshotdetails ohne vollständige Funktionszusage. Unbekannt bedeutet, dass keine belastbare Antwort vorliegt. Diese Klassifizierung gilt auf jeder deutschen Unterseite.',
      'Das Dear Passengers Spiel wird nicht durch Fan-Wikis, Händlerplatzhalter oder Community-Tags definiert. Solche Quellen können Fragen und Hinweise liefern, ersetzen aber keine Primärquelle. Deutsche Medien helfen bei lokaler Wortwahl und Einordnung, nicht bei der Erfindung fehlender Produktdaten.',
      'DearPassengers.net ist unabhängig und nicht mit FLEXUS, Valve oder Steam verbunden. [[/de/redaktionsrichtlinien/|Die deutschen Redaktionsrichtlinien]] erklären Quellen, Aktualisierungen und Korrekturen. Hinweise können über [[/de/kontakt/|Kontakt und Korrekturen]] eingereicht werden.'
    ]}
  ],
  faqs: [
    { question: 'Was ist das Dear Passengers Spiel?', answer: 'Ein Action-Adventure von FLEXUS, in dem eine Airline-Crew Flugzeug, Kabine, Passagiere und riskante Fracht im Solo- oder Online-Koop bewältigt.' },
    { question: 'Wann erscheint Dear Passengers?', answer: 'Steam nennt 2026. Ein genauer Termin ist nicht angekündigt.' },
    { question: 'Wie viele Spieler unterstützt Dear Passengers?', answer: 'Die maximale Spielerzahl ist unbekannt. Einzelspieler und Online-Koop sind bestätigt.' },
    { question: 'Gibt es eine Dear Passengers Demo?', answer: 'Eine Demo ist geplant, aber noch nicht öffentlich verfügbar und ohne Termin.' },
    { question: 'Kommt Dear Passengers für PS5 oder Xbox?', answer: 'Nicht bestätigt. Windows-PC über Steam ist bislang die einzige Plattform.' },
    { question: 'Ist das Dear Passengers Spiel auf Deutsch?', answer: 'Steam markiert Deutsch derzeit als nicht unterstützt. Dieser deutsche Guide ist unabhängig und keine Spiellokalisierung.' }
  ],
  related: ['dear-passengers-spiel', 'dear-passengers-steam', 'dear-passengers-gameplay', 'dear-passengers-release', 'dear-passengers-spielerzahl'],
};

export const germanGuideBySlug = new Map(germanGuides.map((guide) => [guide.slug, guide]));
