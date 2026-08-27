export type SpanishFaq = { question: string; answer: string };
export type SpanishSection = { id: string; kicker: string; heading: string; paragraphs: string[]; bullets?: string[] };
export type SpanishGuide = {
  slug: string;
  englishPath: string;
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
  sections: SpanishSection[];
  localContext: string[];
  faqs: SpanishFaq[];
  related: string[];
};

export const spanishGuides: SpanishGuide[] = [
  {
    slug: 'dear-passengers-como-jugar', englishPath: '/dear-passengers-gameplay/',
    keyword: 'Dear Passengers cómo jugar', title: 'Dear Passengers: Cómo Jugar, Pilotar y Atender la Cabina',
    description: 'Dear Passengers cómo jugar: pilotaje, cabina, pasajeros, carga, física, clima, modo individual y cooperativo online con datos verificados.',
    eyebrow: 'GUÍA DE JUGABILIDAD · EN ESPAÑOL', h1: 'Dear Passengers: ¿cómo se juega y cómo se reparte la tripulación?',
    intro: 'La búsqueda “Dear Passengers cómo jugar” reúne dudas sobre pilotar, atender pasajeros y coordinarse con amigos. Esta guía usa la ficha oficial de Steam y escenas publicadas por FLEXUS. No convierte un corte de tráiler en una clase, un control o un sistema que el estudio todavía no ha descrito.',
    answer: 'En Dear Passengers, la tripulación elige pasajeros y carga antes del vuelo. Durante el trayecto, una persona puede pilotar mientras las demás atienden la cabina, sirven a los pasajeros, protegen el equipaje y reaccionan al clima y a la física. Steam confirma modo individual y cooperativo online; misiones, progresión, controles y límite de jugadores siguen sin detallarse.',
    note: 'La descripción de Steam confirma funciones generales. Un vídeo solo confirma lo que se ve en la escena; no demuestra una campaña, clases fijas, mejoras permanentes ni una simulación aérea completa.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Captura oficial de la cabina para la guía en español de cómo jugar Dear Passengers',
    confirmed: ['Pilotar y trabajar dentro de la cabina', 'Elegir pasajeros y carga', 'Física aplicada a personas y objetos', 'Modo individual y cooperativo online'],
    unknown: ['Cantidad y duración de las misiones', 'Progresión o mejoras permanentes', 'Compatibilidad con mando', 'Máximo de integrantes de la tripulación'],
    sections: [
      { id: 'bucle', kicker: 'BUCLE DEL VUELO', heading: '¿Cómo empieza una partida de Dear Passengers?', paragraphs: [
        'La presentación oficial comienza antes del despegue. El equipo decide a quién y qué aceptar en el manifiesto. Los pasajeros complicados y la carga arriesgada pueden aumentar el pago, pero también elevan la posibilidad de problemas. La relación entre riesgo y recompensa aparece en Steam; no se han publicado contratos, monedas, niveles ni una tienda donde gastar ese dinero.',
        'Después, Dear Passengers conecta dos zonas del mismo vuelo. El puesto de pilotaje gestiona la aeronave y las condiciones del aire, mientras la cabina atiende a viajeros, sujeta equipaje y evita que varios incidentes pequeños se acumulen. Una maniobra o una turbulencia puede mover personas y objetos, de modo que la decisión del piloto afecta al trabajo en el pasillo.'
      ]},
      { id: 'cabina', kicker: 'PILOTAJE Y CABINA', heading: '¿Qué hacen el piloto y la tripulación de cabina?', paragraphs: [
        'Pilotar es una tarea confirmada y los vídeos muestran una perspectiva en primera persona. Eso no confirma listas de comprobación realistas, control aéreo, consumo detallado de combustible ni física certificada de simulador. El avión puede ser la fuente de decisiones y caos sin reproducir todos los procedimientos de una aerolínea real.',
        'En la cabina se sirven alimentos y bebidas, se controla a pasajeros y se protege la carga. No existe información oficial sobre barras de satisfacción, inventario, tipos fijos de pasajero o profesiones bloqueadas. La [[/es/dear-passengers-roles/|guía de roles]] separa tareas observables de clases inventadas.'
      ]},
      { id: 'modos', kicker: 'MODOS DE JUEGO', heading: '¿Se puede jugar solo o con amigos?', paragraphs: [
        'Steam marca “Un jugador” y “Cooperativo en línea”. Por tanto, jugar sin amigos está confirmado, pero no sabemos si una sola persona alternará entre cabina y puesto de pilotaje, tendrá ayuda controlada por el juego o recibirá objetivos adaptados. La existencia del modo individual no explica su funcionamiento.',
        'En el modo online, la idea oficial es repartir responsabilidades. No se han explicado invitaciones, códigos de sala, matchmaking, entrada en mitad de una sesión, migración de anfitrión ni chat de voz. Tampoco están confirmados pantalla dividida, cooperativo local o crossplay. La página de [[/es/dear-passengers-cuantos-jugadores/|cuántos jugadores]] mantiene esos límites visibles.'
      ]},
    ],
    localContext: [
      'En búsquedas en español conviven “cómo jugar”, “gameplay” y “jugabilidad”. La primera forma pide una respuesta práctica; “jugabilidad” sirve para explicar sistemas. Dear Passengers se mantiene en inglés porque es la marca del producto.',
      'Usamos términos reconocibles en la interfaz española de Steam: “Un jugador”, “Cooperativo en línea”, “Requisitos del sistema” y “Fecha de lanzamiento”. Esta web está en español, pero Steam marca el idioma español como no disponible dentro del juego.',
      'Algunas páginas afirman que participan cuatro amigos. La ficha oficial no publica ese número. Contar personajes en un tráiler tampoco permite conocer la capacidad técnica de una sala.'
    ],
    faqs: [
      { question: '¿Cómo se juega a Dear Passengers?', answer: 'Elige pasajeros y carga y reparte pilotaje, servicio de cabina y respuesta a incidentes durante el vuelo.' },
      { question: '¿Dear Passengers se puede jugar solo?', answer: 'Sí. Steam confirma modo individual, aunque no explica cómo una persona cubre todas las funciones.' },
      { question: '¿Dear Passengers es online?', answer: 'Sí, el cooperativo online está confirmado; matchmaking, anfitrión y chat siguen sin detallar.' },
      { question: '¿Es un simulador de vuelo?', answer: 'Incluye pilotaje y clima, pero el nivel de simulación no se ha publicado.' },
      { question: '¿Está disponible en español?', answer: 'No por ahora. Steam marca la interfaz, las voces y los subtítulos en español como no disponibles.' },
      { question: '¿Cuándo se podrá jugar?', answer: 'La ventana oficial es 2026; no hay fecha exacta ni demo pública.' },
    ], related: ['juego-dear-passengers', 'dear-passengers-vr', 'dear-passengers-roles', 'dear-passengers-cuantos-jugadores', 'dear-passengers-caracteristicas-confirmadas', 'juegos-parecidos-a-dear-passengers'],
  },
  {
    slug: 'dear-passengers-cuantos-jugadores', englishPath: '/dear-passengers-player-count/',
    keyword: 'Dear Passengers cuántos jugadores', title: 'Dear Passengers: Cuántos Jugadores, Cooperativo y Límite',
    description: 'Dear Passengers cuántos jugadores: qué confirma Steam sobre modo individual y cooperativo online y qué sigue sin anunciarse sobre el límite.',
    eyebrow: 'NÚMERO DE JUGADORES · SIN INVENTAR', h1: 'Dear Passengers: ¿cuántos jugadores pueden entrar en una partida?',
    intro: '“Dear Passengers cuántos jugadores” es una pregunta real que todavía no tiene una cifra oficial. Steam confirma un jugador y cooperativo online, pero no muestra un máximo de dos, cuatro, seis o más personas. Esta página evita convertir el reparto visto en un tráiler en capacidad de servidor.',
    answer: 'El número máximo de jugadores de Dear Passengers no ha sido anunciado. Están confirmados el modo para un jugador y el cooperativo online. No existe confirmación de dos, cuatro o más participantes, ni de crossplay, matchmaking público, pantalla dividida, cooperativo local o chat de voz integrado.',
    note: 'Solo publicaremos una cifra cuando aparezca en Steam, en un comunicado de FLEXUS o en documentación identificable de una versión jugable. Los personajes visibles en un vídeo no definen el tamaño del lobby.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Tripulación en la cabina para explicar cuántos jugadores admite Dear Passengers',
    confirmed: ['Modo para un jugador', 'Cooperativo online', 'Reparto de tareas entre puesto de pilotaje y cabina'], unknown: ['Número máximo de jugadores', 'Crossplay', 'Pantalla dividida y cooperativo local', 'Matchmaking y chat de voz'],
    sections: [
      { id: 'sin-cifra', kicker: 'RESPUESTA OFICIAL', heading: '¿Por qué aún no se conoce el número de jugadores?', paragraphs: [
        'La ficha de Steam muestra “Un jugador” y “Cooperativo en línea”, pero no añade una franja numérica. La comunicación habla de jugar con amigos; ese plural describe el concepto, no una especificación de red. Hasta que FLEXUS publique el límite, cualquier cifra debe identificarse como una afirmación de terceros.',
        'La duda se repite en la comunidad de Steam: usuarios preguntan si serán dos, tres, cuatro o seis. Las respuestas humorísticas de otros usuarios no son información del desarrollador. La pregunta demuestra demanda, pero no resuelve la capacidad.'
      ]},
      { id: 'cooperativo', kicker: 'COOPERATIVO ONLINE', heading: '¿Qué se sabe del multijugador de Dear Passengers?', paragraphs: [
        'La propuesta reparte trabajo: alguien pilota mientras otras personas atienden el servicio, los pasajeros, la carga y los problemas de cabina. Esto confirma coordinación entre zonas del avión, no que cada participante tenga una clase permanente ni que todas las partidas exijan una composición concreta.',
        'Tampoco se han anunciado servidores dedicados, regiones, invitación por código, navegador de salas o entrada tardía. La latencia puede ser relevante para España y Latinoamérica, pero hoy no existen datos para prometer servidores cercanos o un rendimiento determinado.'
      ]},
      { id: 'plataformas', kicker: 'SOLO Y PLATAFORMAS', heading: '¿Hay modo solo, pantalla dividida o crossplay?', paragraphs: [
        'El modo solo sí está confirmado. Su implementación sigue abierta: alternar puestos, recibir ayuda automática u otra solución son posibilidades, no hechos. La respuesta a “¿se puede jugar sin amigos?” es sí; la respuesta a “¿cómo se cubre toda la cabina?” todavía es desconocida.',
        'Windows por Steam es la única plataforma confirmada. Sin versiones anunciadas para PlayStation, Xbox o Switch, no hay base para afirmar crossplay. Steam tampoco marca Remote Play Together ni cooperativo local. La [[/es/dear-passengers-fecha-de-lanzamiento/|guía de lanzamiento]] sigue posibles cambios de plataforma.'
      ]},
    ],
    localContext: [
      'Las consultas en español usan “cuántos jugadores”, “para cuántos”, “se puede jugar solo” y “cooperativo local”. Las reunimos en una URL porque buscan la misma decisión de compra.',
      '“Multijugador”, “cooperativo” y “coop” son formas habituales. Steam usa “Cooperativo en línea”; el texto incorpora las otras variantes sin crear páginas duplicadas.',
      'Una campaña con varios personajes no es una ficha técnica. Mantener esa diferencia ofrece más valor que repetir el número cuatro sin fuente.'
    ],
    faqs: [
      { question: '¿Cuántos jugadores admite Dear Passengers?', answer: 'El máximo no se ha publicado; un jugador y cooperativo online están confirmados.' },
      { question: '¿Dear Passengers es para cuatro jugadores?', answer: 'Cuatro no está confirmado oficialmente.' },
      { question: '¿Se puede jugar solo?', answer: 'Sí, Steam lista modo individual, pero no explica la adaptación de funciones.' },
      { question: '¿Tiene pantalla dividida?', answer: 'No se ha confirmado pantalla dividida ni cooperativo local.' },
      { question: '¿Tendrá crossplay?', answer: 'No ha sido anunciado; Windows es la única plataforma actual.' },
      { question: '¿Tiene matchmaking?', answer: 'El sistema para encontrar o invitar jugadores sigue sin describirse.' },
    ], related: ['dear-passengers-como-jugar', 'dear-passengers-roles', 'dear-passengers-fecha-de-lanzamiento', 'dear-passengers-demo'],
  },
  {
    slug: 'dear-passengers-fecha-de-lanzamiento', englishPath: '/dear-passengers-release-date/',
    keyword: 'Dear Passengers fecha de lanzamiento', title: 'Dear Passengers: Fecha de Lanzamiento, Precio y Plataformas',
    description: 'Fecha de lanzamiento de Dear Passengers: ventana oficial de 2026, Steam, precio, consolas, español y datos que todavía no se han anunciado.',
    eyebrow: 'LANZAMIENTO · INFORMACIÓN ACTUALIZADA', h1: '¿Cuál es la fecha de lanzamiento de Dear Passengers?',
    intro: '“Dear Passengers fecha de lanzamiento” y “Dear Passengers cuándo sale” son las consultas en español con más señales propias. La respuesta oficial termina en 2026. No existe un día exacto, precio en euros o moneda local ni versión de consola anunciada.',
    answer: 'Dear Passengers tiene previsto su lanzamiento en 2026 para Windows PC a través de Steam. FLEXUS no ha anunciado mes, día, hora, precio, reserva, acceso anticipado ni versiones para PlayStation, Xbox, Nintendo Switch, Mac o Linux. Una fecha de 31 de diciembre vista en bases de datos no es oficial.',
    note: 'La fecha solo cambiará cuando Steam o FLEXUS publiquen una ventana más precisa. Las fechas de final de año usadas como marcador técnico no se presentan como anuncio.',
    heroImage: '/images/release-date.webp', heroAlt: 'Avión de Dear Passengers para la guía en español de fecha de lanzamiento',
    confirmed: ['Ventana de lanzamiento en 2026', 'Windows PC', 'Distribución mediante Steam', 'FLEXUS como desarrollador y editor'], unknown: ['Mes y día exactos', 'Precio regional', 'Consolas, Mac y Linux', 'Reserva o acceso anticipado'],
    sections: [
      { id: 'ventana', kicker: 'VENTANA OFICIAL', heading: '¿Cuándo sale Dear Passengers en 2026?', paragraphs: [
        'La página oficial de Steam muestra únicamente 2026. No hay trimestre, mes ni día. Una fecha más concreta podría aparecer en una noticia de FLEXUS, una actualización de la tienda o un vídeo oficial, pero ninguno de esos canales la ha publicado en la verificación del 30 de julio de 2026.',
        'Algunas bases de datos muestran 31 de diciembre de 2026. El último día del año suele utilizarse como relleno cuando solo se conoce el año. Sin una fuente primaria, no es un compromiso de FLEXUS y no debe usarse en una cuenta atrás.'
      ]},
      { id: 'precio', kicker: 'PRECIO Y PLATAFORMAS', heading: '¿Cuánto costará Dear Passengers y saldrá en consolas?', paragraphs: [
        'El precio no se ha publicado en euros, pesos ni otra moneda. Tampoco se ha confirmado que sea gratuito. La guía [[/es/precio-de-dear-passengers/|precio de Dear Passengers]] controla la cifra, regiones, ediciones y descuentos sin convertir una etiqueta popular en modelo comercial.',
        'Windows PC es la única plataforma listada. PlayStation 5, Xbox Series, Nintendo Switch, Game Pass, Mac, Linux y Epic Games Store no han sido anunciados. Lo mismo ocurre con crossplay y progresión compartida.'
      ]},
      { id: 'idioma', kicker: 'IDIOMA ESPAÑOL', heading: '¿Dear Passengers estará disponible en español?', paragraphs: [
        'La tienda puede verse en español, pero la tabla del producto marca Español de España como no disponible para interfaz, voces y subtítulos. Los idiomas de interfaz confirmados son inglés, árabe, chino simplificado, turco, ucraniano y japonés.',
        'Esta guía explica el juego en español; no afirma que el juego esté localizado. Si Steam cambia la tabla, la [[/es/dear-passengers-noticias/|página de noticias]] registrará la fecha y el alcance exacto del idioma añadido.'
      ]},
    ],
    localContext: [
      '“Fecha de lanzamiento” es la forma editorial; “cuándo sale” es la pregunta natural observada. Ambas pertenecen a la misma intención y se trabajan en una sola URL.',
      'El precio debe expresarse en la moneda que muestre la tienda de cada región. Convertir dólares antes del lanzamiento ignoraría precios regionales, impuestos y cambios de divisa.',
      'Las fechas se escribirán de forma inequívoca —por ejemplo, 30 de julio de 2026— cuando exista una fecha oficial. Por ahora, “2026” es más preciso que inventar el 31/12/2026.'
    ],
    faqs: [
      { question: '¿Cuándo sale Dear Passengers?', answer: 'En 2026 para Windows PC; el mes y el día no se han anunciado.' },
      { question: '¿Sale el 31 de diciembre?', answer: 'No está confirmado; esa fecha aparece como relleno en sitios de terceros.' },
      { question: '¿Cuánto costará?', answer: 'El precio y el modelo comercial todavía no se han publicado.' },
      { question: '¿Saldrá para PS5 o Xbox?', answer: 'No se ha anunciado ninguna versión de consola.' },
      { question: '¿Estará en español?', answer: 'Steam marca actualmente el español como no disponible en el producto.' },
      { question: '¿Tendrá acceso anticipado?', answer: 'No se han anunciado acceso anticipado ni reservas.' },
    ], related: ['dear-passengers-noticias', 'dear-passengers-demo', 'dear-passengers-requisitos', 'dear-passengers-desarrollador-flexus'],
  },
  {
    slug: 'dear-passengers-demo', englishPath: '/dear-passengers-demo/',
    keyword: 'Dear Passengers demo', title: 'Demo de Dear Passengers: Gamescom, Prueba Pública y Acceso',
    description: 'Demo de Dear Passengers: plan de FLEXUS para Gamescom y una versión pública posterior, sin confundir una intención con una descarga disponible.',
    eyebrow: 'DEMO Y PRUEBAS · ESTADO REAL', h1: '¿Existe una demo de Dear Passengers para descargar?',
    intro: 'La demo de Dear Passengers aún no está disponible al público. FLEXUS ha hablado de una versión jugable para Gamescom 2026 y de su intención de publicar una demo abierta después. No hay botón en Steam, fecha, inscripción de beta ni archivo oficial.',
    answer: 'No existe una demo pública de Dear Passengers disponible ahora. FLEXUS declaró que prepara una versión jugable para Gamescom 2026 y que pretende ofrecer una demo pública posteriormente. La fecha, el canal de distribución, las regiones, la duración y el contenido siguen sin anunciarse.',
    note: '“Planeada” no significa “publicada”. La demo solo se marcará como disponible cuando Steam o un canal oficial de FLEXUS ofrezca un acceso funcional y verificable.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Cabina oficial utilizada en la guía en español sobre la demo de Dear Passengers',
    confirmed: ['Versión jugable planeada para Gamescom', 'Intención de una demo pública posterior', 'Juego completo previsto para 2026'], unknown: ['Fecha de la demo pública', 'Demo de Steam o Steam Playtest', 'Regiones y duración', 'Transferencia de progreso'],
    sections: [
      { id: 'estado', kicker: 'ESTADO ACTUAL', heading: '¿Ya se puede jugar a la demo de Dear Passengers?', paragraphs: [
        'No. La página oficial ofrece una lista de deseados, pero no muestra “Descargar demo” ni inscripción a Steam Playtest. Un resultado que incluya “demo”, “beta” o “descargar” en el título no es acceso legítimo si no existe un enlace desde FLEXUS o Steam.',
        'La comunidad pregunta por beta y demo, y varios usuarios quieren probarla con amigos. Esas preguntas demuestran interés, no disponibilidad. Tampoco son invitaciones oficiales ni distribución de claves.'
      ]},
      { id: 'gamescom', kicker: 'PLAN DE FLEXUS', heading: '¿Qué dijo FLEXUS sobre la demo de Gamescom?', paragraphs: [
        'En una entrevista directa, el cofundador de FLEXUS explicó que el equipo preparaba una versión jugable para el pabellón ucraniano de Gamescom 2026 y una demo pública un poco más tarde. La declaración confirma un plan de desarrollo, pero no aporta día, enlace de descarga o garantía sobre el contenido final.',
        'Una build de feria y una demo doméstica pueden diferir en misiones, estabilidad, controles y límite de jugadores. Cuando haya acceso, registraremos versión, fecha, plataforma, regiones y requisitos en vez de asumir que ambas versiones son idénticas.'
      ]},
      { id: 'seguridad', kicker: 'ACCESO SEGURO', heading: '¿Cómo reconocer una descarga legítima?', paragraphs: [
        'El camino seguro es la ficha oficial de Steam o un anuncio de FLEXUS que enlace a ella. Formularios externos solo deben considerarse cuando un canal oficial los identifique. Ejecutables, APK, torrents, “online fix” y claves de terceros no son una demo confirmada.',
        'Dear Passengers solo está anunciado para Windows; un APK de Android no coincide con la plataforma oficial. Incluso un archivo para PC puede ser falso. La [[/es/dear-passengers-descargar/|guía de descarga segura]] explica cómo comprobar dominio y procedencia sin alojar archivos.'
      ]},
    ],
    localContext: [
      'En español se mezclan “demo”, “beta”, “prueba” y “acceso anticipado”, pero no son equivalentes. Conservamos “demo”, la consulta observada, y separamos cada fase.',
      '“Descargar demo” tiene una intención práctica y un riesgo elevado de páginas engañosas. La primera respuesta indica disponibilidad antes de explicar planes.',
      'Steam usa “demo” y “demostración” según el contexto regional. Ninguna forma implica que el producto esté localizado al español.'
    ],
    faqs: [
      { question: '¿Dear Passengers tiene demo?', answer: 'Aún no hay demo pública; FLEXUS planea una después de la versión para Gamescom.' },
      { question: '¿Cuándo sale la demo?', answer: 'No se ha anunciado una fecha.' },
      { question: '¿Dónde se puede descargar?', answer: 'En ningún sitio por ahora; revisa Steam y los canales oficiales de FLEXUS.' },
      { question: '¿Existe una beta?', answer: 'No hay beta ni Steam Playtest público confirmado.' },
      { question: '¿La demo de Gamescom será online?', answer: 'Su modo, contenido y distribución no se han detallado.' },
      { question: '¿Se conservará el progreso?', answer: 'No se ha anunciado transferencia de progreso.' },
    ], related: ['dear-passengers-descargar', 'dear-passengers-fecha-de-lanzamiento', 'dear-passengers-noticias', 'dear-passengers-como-jugar'],
  },
  {
    slug: 'dear-passengers-descargar', englishPath: '/dear-passengers-download/',
    keyword: 'Dear Passengers descargar', title: 'Dear Passengers Descargar: Steam, Demo y Alerta de APK Falso',
    description: 'Dear Passengers descargar de forma segura: estado en Steam, ausencia de versión pública, APK, torrent, crack, tamaño y páginas falsas.',
    eyebrow: 'DESCARGA SEGURA · SIN BOTONES FALSOS', h1: 'Dear Passengers: ¿dónde descargarlo de forma segura?',
    intro: 'La consulta “Dear Passengers descargar” ya existe, pero el juego no se ha lanzado. No hay versión completa, demo pública, APK, crack ni torrent oficial. Esta página responde sin usar un botón falso, una cuenta atrás o un instalador que imite a Steam.',
    answer: 'Dear Passengers no se puede descargar actualmente. El producto está en fase previa al lanzamiento en Steam, con ventana de 2026 y solo una lista de deseados. Cualquier APK, torrent, crack, juego completo o “descarga gratis” disponible ahora no ha sido confirmado por FLEXUS y debe tratarse como un riesgo.',
    note: 'No alojamos ejecutables ni presentamos un botón de descarga para un producto no disponible. El estado se comprueba directamente en Steam antes de actualizar esta página.',
    heroImage: '/images/dear-passengers-download-safety.webp', heroAlt: 'Ilustración editorial de seguridad para descargar Dear Passengers',
    confirmed: ['Ficha oficial activa en Steam', 'Lanzamiento planeado para 2026', 'Windows como plataforma confirmada'], unknown: ['Fecha de descarga', 'Tamaño final', 'Precio y protección técnica', 'Precarga y regiones'],
    sections: [
      { id: 'ahora', kicker: 'DISPONIBILIDAD', heading: '¿Se puede descargar Dear Passengers ahora?', paragraphs: [
        'No. Steam informa que el juego todavía no está disponible y ofrece únicamente añadirlo a la lista de deseados. Sin botón de compra, instalación o demostración, no existe un archivo oficial. Un artículo titulado “cómo descargar” no cambia el estado de la tienda.',
        'El lanzamiento está previsto para Windows PC. No se ha anunciado aplicación para Android o iOS; por eso “Dear Passengers APK” no coincide con las plataformas confirmadas. Copiar el logotipo o las capturas no convierte una web en oficial.'
      ]},
      { id: 'riesgos', kicker: 'ARCHIVOS FALSOS', heading: '¿Son oficiales los APK, torrents o cracks?', paragraphs: [
        'No. FLEXUS no ha publicado APK, torrent, crack, repack, “online fix” ni versión completa gratuita. Un archivo que pida desactivar el antivirus, instalar una extensión o iniciar sesión con Steam puede buscar malware o robar la cuenta.',
        'Los 4 GB de la tabla mínima tampoco son el tamaño confirmado de la descarga. Ese dato es espacio disponible solicitado por la configuración actual. Compresión, actualizaciones y archivos de lanzamiento pueden cambiar el paquete final.'
      ]},
      { id: 'lanzamiento', kicker: 'CUANDO SE PUBLIQUE', heading: '¿Cómo descargar Dear Passengers cuando salga?', paragraphs: [
        'Cuando el juego se publique, la ficha oficial deberá mostrar precio o condición de acceso y el cliente de Steam instalará los archivos. Comprueba el App ID 4534960, FLEXUS como desarrollador y editor y el dominio steampowered.com.',
        'Si llega antes una demo, debe aparecer en la tienda o en un anuncio oficial verificable. La [[/es/dear-passengers-demo/|página de la demo]] sigue esa diferencia. Añadir a la lista de deseados es la única acción correcta hoy; no descarga ni cobra nada.'
      ]},
    ],
    localContext: [
      '“Descargar” es la forma general en España y América Latina. También aparecen “download PC”, “APK”, “torrent” y “gratis”; se reúnen en una página de seguridad para evitar canibalización.',
      '“Gratis” no puede deducirse de una etiqueta popular o de la ausencia de precio. El modelo comercial sigue sin anunciarse.',
      'La imagen de esta página es una ilustración editorial de seguridad, no una captura de una pantalla de descarga del juego.'
    ],
    faqs: [
      { question: '¿Dónde descargar Dear Passengers?', answer: 'Todavía no se puede; solo existe la lista de deseados de Steam.' },
      { question: '¿Tiene APK?', answer: 'No. Android no está anunciado y no existe APK oficial.' },
      { question: '¿Existe torrent o crack?', answer: 'No existe versión oficial de ese tipo; el juego aún no se ha lanzado.' },
      { question: '¿Será gratis?', answer: 'El precio y el modelo comercial no se han anunciado.' },
      { question: '¿Cuánto ocupa?', answer: 'El tamaño final es desconocido; 4 GB es el espacio mínimo listado.' },
      { question: '¿Se puede descargar la demo?', answer: 'No ahora. Hay una demo pública planeada, pero sin acceso ni fecha.' },
    ], related: ['dear-passengers-demo', 'dear-passengers-requisitos', 'dear-passengers-fecha-de-lanzamiento', 'dear-passengers-noticias'],
  },
  {
    slug: 'dear-passengers-requisitos', englishPath: '/dear-passengers-system-requirements/',
    keyword: 'Dear Passengers requisitos', title: 'Requisitos de Dear Passengers: Configuración Mínima para PC',
    description: 'Requisitos de Dear Passengers para PC: Windows 10, i5 a 2,5 GHz, 8 GB RAM, GTX 1060 o RX 6600 XT, DirectX 12 y 4 GB.',
    eyebrow: 'REQUISITOS DE PC · DATOS OFICIALES', h1: '¿Cuáles son los requisitos de Dear Passengers para PC?',
    intro: '“Dear Passengers requisitos” suma 64 impresiones verificadas y “requisitos mínimos” otras nueve en Search Console. Steam ya publica una configuración mínima, pero no requisitos recomendados, resolución, tasa de fotogramas o pruebas en portátil.',
    answer: 'Los requisitos mínimos de Dear Passengers son Windows 10 de 64 bits, Intel Core i5 a 2,5 GHz o equivalente, 8 GB de RAM, NVIDIA GeForce GTX 1060 o AMD Radeon RX 6600 XT, DirectX 12 y 4 GB de espacio disponible. FLEXUS aún no ha publicado requisitos recomendados.',
    note: 'La tabla conserva los valores de Steam. “Mínimo” no garantiza una calidad concreta y 4 GB de almacenamiento no equivale necesariamente al tamaño final de la descarga.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Imagen oficial para explicar los requisitos de Dear Passengers en PC',
    confirmed: ['Windows 10 de 64 bits', 'Core i5 a 2,5 GHz o equivalente', '8 GB de RAM', 'GTX 1060 o RX 6600 XT', 'DirectX 12 y 4 GB libres'], unknown: ['Configuración recomendada', 'Objetivo de resolución y FPS', 'Steam Deck', 'Portátiles y gráficos integrados'],
    sections: [
      { id: 'tabla', kicker: 'CONFIGURACIÓN MÍNIMA', heading: 'Tabla oficial de requisitos de Dear Passengers', paragraphs: [
        'Steam lista Windows 10 de 64 bits; procesador Intel Core i5 a 2,5 GHz o equivalente; 8 GB de memoria; GeForce GTX 1060 o Radeon RX 6600 XT; DirectX 12; y 4 GB de espacio. No identifica la generación del i5 ni el ajuste gráfico previsto.',
        'La pareja GTX 1060 y RX 6600 XT cubre rendimientos distintos según el juego. No corregimos ni reinterpretamos la ficha: Dear Passengers sigue en desarrollo y FLEXUS puede actualizarla. Son requisitos publicados, no un benchmark independiente.'
      ]},
      { id: 'rendimiento', kicker: 'LO QUE FALTA', heading: '¿Qué FPS y calidad ofrecen estos requisitos?', paragraphs: [
        'Steam no informa resolución, preajuste, tasa de fotogramas, VRAM, necesidad de SSD o velocidad de conexión. Por eso no se puede prometer 1080p a 60 FPS con una GTX 1060 ni llamar recomendada a la RX 6600 XT.',
        'Portátiles, GPU integradas y procesadores por debajo de 2,5 GHz necesitan una prueba real. Cuando haya demo, una medición útil deberá registrar versión, controlador, escena, resolución y ajustes, no solo el nombre del componente.'
      ]},
      { id: 'compatibilidad', kicker: 'SISTEMAS', heading: '¿Funciona en Mac, Linux o Steam Deck?', paragraphs: [
        'Windows es el único sistema confirmado. No se han anunciado versiones para macOS o Linux y no debe presumirse compatibilidad mediante Proton antes de que exista una build pública. Steam Deck tampoco tiene clasificación oficial.',
        'La compatibilidad con mando sigue sin publicarse. Una tabla de idiomas no informa el método de entrada. La [[/es/dear-passengers-como-jugar/|guía de jugabilidad]] mantiene controles y accesibilidad como desconocidos.'
      ]},
    ],
    localContext: [
      '“Requisitos”, “requisitos mínimos”, “especificaciones” y “corre en mi PC” pertenecen al mismo recorrido. La URL usa “requisitos”, la palabra con demanda observada y la etiqueta habitual de Steam.',
      'Usamos coma decimal en “2,5 GHz” y mantenemos nombres técnicos de GPU, RAM y DirectX sin traducir.',
      'No añadimos configuración recomendada, motor o rendimiento a partir de páginas que no enlazan una fuente primaria.'
    ],
    faqs: [
      { question: '¿Cuáles son los requisitos mínimos?', answer: 'Windows 10 64 bits, i5 2,5 GHz, 8 GB RAM, GTX 1060 o RX 6600 XT, DirectX 12 y 4 GB.' },
      { question: '¿Cuáles son los recomendados?', answer: 'Todavía no se han publicado.' },
      { question: '¿Funciona en portátil?', answer: 'No hay prueba oficial; depende del hardware, la energía y la refrigeración.' },
      { question: '¿Funciona en Steam Deck?', answer: 'La compatibilidad no ha sido evaluada oficialmente.' },
      { question: '¿Necesita SSD?', answer: 'Steam no exige SSD en la configuración actual.' },
      { question: '¿Solo ocupa 4 GB?', answer: 'Steam pide 4 GB libres; eso no confirma el tamaño final.' },
    ], related: ['dear-passengers-descargar', 'dear-passengers-como-jugar', 'dear-passengers-fecha-de-lanzamiento', 'dear-passengers-demo'],
  },
  {
    slug: 'dear-passengers-trailer', englishPath: '/dear-passengers-trailer/',
    keyword: 'Dear Passengers tráiler', title: 'Tráiler de Dear Passengers: Escenas Confirmadas y Contexto',
    description: 'Tráiler de Dear Passengers: qué muestran los vídeos oficiales de FLEXUS sobre pilotaje, cabina, física, carga y pasajeros, sin inventar mecánicas.',
    eyebrow: 'VÍDEOS OFICIALES · LECTURA DE ESCENAS', h1: '¿Qué muestra el tráiler oficial de Dear Passengers?',
    intro: 'Los vídeos de Dear Passengers enseñan el tono y situaciones del juego, pero un montaje breve no es un manual. Esta página identifica qué aparece en pantalla y lo contrasta con Steam para no transformar una broma visual en una mecánica, misión o promesa de lanzamiento.',
    answer: 'El tráiler oficial muestra perspectiva en primera persona, puesto de pilotaje, servicio de cabina, pasajeros y carga afectados por la física, mal tiempo y emergencias cómicas. Confirma la dirección visual y escenas observables; no confirma campaña, clases, jefes, número de jugadores, duración ni que cada incidente aparezca igual en una partida.',
    note: 'Clasificamos cada afirmación como descripción oficial u observación de una escena. La edición de un tráiler no demuestra frecuencia, reglas, control del jugador o contenido final.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Escena oficial para analizar el tráiler de Dear Passengers en español',
    confirmed: ['Perspectiva en primera persona', 'Puesto de pilotaje y cabina', 'Personas y objetos sometidos a física', 'Clima y situaciones de emergencia'], unknown: ['Frecuencia de los incidentes', 'Control exacto en cada escena', 'Campaña y progresión', 'Contenido de la versión final'],
    sections: [
      { id: 'oficial', kicker: 'TRÁILER OFICIAL', heading: '¿Dónde ver los vídeos reales de Dear Passengers?', paragraphs: [
        'La ficha de Steam y los canales enlazados por FLEXUS son las referencias principales. El tráiler de anuncio presenta el concepto cooperativo de la peor aerolínea; un teaser posterior usa el lenguaje “Another Friendslop Game” para situar el tono social y caótico.',
        'Canales de medios pueden volver a publicar el vídeo de Dear Passengers. Para atribuir una versión, comprobamos título, fecha, descripción y vínculo con FLEXUS. Un montaje de fans o una miniatura generada no se etiqueta como gameplay oficial.'
      ]},
      { id: 'escenas', kicker: 'QUÉ SE VE', heading: 'Pilotaje, servicio, carga y emergencias', paragraphs: [
        'Las escenas incluyen manos en primera persona, instrumentos de vuelo, servicio a pasajeros, equipaje suelto, turbulencia y amenazas exageradas. Steam respalda la idea de pilotar, trabajar en cabina y elegir pasajeros y carga. La coincidencia permite describir esas funciones generales.',
        'Una bandada, un cocodrilo o un arma vistos en un corte de Dear Passengers son observaciones visuales. No sabemos si son eventos aleatorios, misiones fijas, contenido opcional o elementos de una secuencia preparada. Por eso no publicamos una lista de “todos los enemigos”.'
      ]},
      { id: 'limites', kicker: 'LO QUE NO PRUEBA', heading: '¿El tráiler confirma jugadores, fecha o sistemas?', paragraphs: [
        'No. El número de personajes no determina el máximo online. Un rótulo “2026” no crea un día de lanzamiento. Una acción en pantalla no explica qué botón se pulsa, si es interactiva o si seguirá en la versión final.',
        'La [[/es/dear-passengers-caracteristicas-confirmadas/|lista de características confirmadas]] cruza vídeo y ficha. Cuando el material solo permite una inferencia, se presenta como tal y no como especificación.'
      ]},
    ],
    localContext: [
      'En español se busca tanto “tráiler” como “trailer”; usamos la forma con tilde en el texto editorial y mantenemos el nombre inglés del producto.',
      '“Gameplay” suele sugerir una sesión jugada. Un montaje cinematográfico o promocional no se presenta como partida completa si FLEXUS no lo identifica así.',
      'No doblamos ni alteramos el vídeo oficial. El texto explica escenas para lectores hispanohablantes sin atribuir al juego una localización que Steam no ofrece.'
    ],
    faqs: [
      { question: '¿Hay un tráiler oficial?', answer: 'Sí. FLEXUS ha publicado un tráiler de anuncio y material promocional enlazado desde sus canales.' },
      { question: '¿El tráiler es gameplay real?', answer: 'Muestra escenas del juego, pero su montaje no equivale a una sesión continua documentada.' },
      { question: '¿Confirma cuatro jugadores?', answer: 'No. Los personajes visibles no determinan el límite de la sala.' },
      { question: '¿Confirma todos los eventos?', answer: 'Confirma que ciertas escenas fueron mostradas, no su frecuencia o forma final.' },
      { question: '¿Está doblado al español?', answer: 'Steam no confirma voces, interfaz ni subtítulos en español.' },
      { question: '¿Dónde comprobar el vídeo?', answer: 'En Steam y en los canales oficiales vinculados por FLEXUS.' },
    ], related: ['dear-passengers-como-jugar', 'dear-passengers-caracteristicas-confirmadas', 'dear-passengers-roles', 'dear-passengers-noticias'],
  },
  {
    slug: 'dear-passengers-noticias', englishPath: '/dear-passengers-news/',
    keyword: 'Dear Passengers noticias', title: 'Noticias de Dear Passengers: Anuncios de FLEXUS Verificados',
    description: 'Noticias de Dear Passengers con fecha, fuente y estado: Steam, FLEXUS, tráileres, listas de deseados, demo y lanzamiento sin rumores reciclados.',
    eyebrow: 'NOTICIAS · FUENTE Y FECHA', h1: '¿Cuáles son las últimas noticias de Dear Passengers?',
    intro: '“Dear Passengers noticias” debe responder qué cambió, cuándo y quién lo dijo. Este registro prioriza Steam, publicaciones de FLEXUS, vídeos oficiales y entrevistas directas. Un rumor repetido o una página que cambia la fecha sin fuente no se convierte en noticia.',
    answer: 'La información oficial más reciente mantiene Dear Passengers para Windows en 2026. FLEXUS anunció 1,5 millones de listas de deseados el 19 de julio y afirmó el 22 de julio que se acercaba a dos millones. El estudio también declaró que prepara una build para Gamescom 2026 y una demo pública posterior; Steam todavía no ofrece esa demo.',
    note: 'Los números de listas de deseados se atribuyen a FLEXUS y no son ventas, descargas ni jugadores activos. Los planes de demo pueden cambiar hasta que exista acceso público.',
    heroImage: '/images/dear-passengers-1-5-million-wishlists.webp', heroAlt: 'Imagen oficial de FLEXUS sobre las listas de deseados de Dear Passengers',
    confirmed: ['Ventana de lanzamiento 2026', 'Hito de 1,5 millones comunicado por FLEXUS', 'Teaser posterior cercano a dos millones', 'Plan de Gamescom y demo posterior'], unknown: ['Fecha exacta de lanzamiento', 'Fecha de la demo pública', 'Precio', 'Ventas y jugadores activos'],
    sections: [
      { id: 'cronologia', kicker: 'CRONOLOGÍA', heading: '¿Qué anuncios oficiales se han publicado?', paragraphs: [
        'FLEXUS comunicó 700.000 listas de deseados el 15 de julio, un millón el 16 y 1,5 millones el 19. El 22 de julio, el teaser “Another Friendslop Game” afirmó que Dear Passengers se acercaba a dos millones. Son declaraciones del estudio en un periodo de crecimiento rápido, no una auditoría externa.',
        'La ficha de Steam sigue indicando 2026 y Windows. No ha aparecido precio, día, reserva ni acceso anticipado. Cuando una noticia no cambia el producto, no modificamos títulos o fechas solo para parecer recientes.'
      ]},
      { id: 'demo', kicker: 'DEMO Y EVENTOS', heading: '¿Qué se sabe de Gamescom y la demo?', paragraphs: [
        'En una entrevista, un cofundador de FLEXUS dijo que el equipo preparaba una build jugable para el pabellón ucraniano de Gamescom y que pretendía publicar una demo poco después. La formulación indica intención y secuencia, no una fecha garantizada.',
        'Steam continúa sin botón de demo o Playtest. La [[/es/dear-passengers-demo/|página de la demo]] solo cambiará a “disponible” si una fuente oficial conduce a un acceso funcional.'
      ]},
      { id: 'rumores', kicker: 'RUMOR Y CONTEXTO', heading: '¿Cómo tratamos rumores, polémicas y cifras?', paragraphs: [
        'Las discusiones comunitarias pueden revelar preguntas sobre número de jugadores, IA, contenido del tráiler o modelo gratuito. Son evidencia de interés o controversia, no prueba de una función. Una respuesta identificada como desarrollador se cita con su contexto y no se extiende más allá de lo dicho.',
        'Cada entrada futura de Dear Passengers distinguirá fecha del evento y fecha de publicación. Si una fuente corrige un dato, conservaremos la atribución y actualizaremos las páginas afectadas, evitando titulares que presenten una corrección como un anuncio nuevo.'
      ]},
    ],
    localContext: [
      '“Noticias”, “novedades”, “últimas noticias” y “actualización” comparten intención. El hub reúne cambios verificables y enlaza guías estables para no crear una URL por cada frase promocional.',
      'Una cifra de wishlist se expresa como “listas de deseados” y siempre se atribuye a FLEXUS. No la traducimos como jugadores o ventas.',
      'Las fechas de Dear Passengers se escriben con el mes en palabras para que se entiendan igual en España y Latinoamérica.'
    ],
    faqs: [
      { question: '¿Cuál es la última noticia?', answer: 'FLEXUS mantiene 2026 y ha comunicado hitos de listas de deseados y planes de demo.' },
      { question: '¿Ya hay fecha exacta?', answer: 'No. Steam solo muestra 2026.' },
      { question: '¿La demo ya salió?', answer: 'No. Hay un plan, pero no existe acceso público.' },
      { question: '¿Tiene dos millones de jugadores?', answer: 'No; FLEXUS habló de listas de deseados cercanas a dos millones.' },
      { question: '¿Se conoce el precio?', answer: 'No se ha anunciado.' },
      { question: '¿Dónde publica FLEXUS?', answer: 'En Steam y en sus canales sociales y de vídeo vinculados.' },
    ], related: ['dear-passengers-fecha-de-lanzamiento', 'dear-passengers-demo', 'dear-passengers-trailer', 'dear-passengers-desarrollador-flexus'],
  },
  {
    slug: 'dear-passengers-caracteristicas-confirmadas', englishPath: '/dear-passengers-confirmed-features/',
    keyword: 'Dear Passengers características', title: 'Características Confirmadas de Dear Passengers: Hechos y Dudas',
    description: 'Características de Dear Passengers confirmadas por Steam y FLEXUS: cooperativo, modo individual, pilotaje, cabina, física, clima, carga e incógnitas.',
    eyebrow: 'CARACTERÍSTICAS · MATRIZ DE EVIDENCIA', h1: '¿Qué características de Dear Passengers están confirmadas?',
    intro: 'Esta lista separa lo que Steam describe, lo que un vídeo permite observar y lo que sigue siendo una inferencia. Dear Passengers aún no tiene versión pública, por lo que no fingimos haber probado controles, progresión, duración o equilibrio.',
    answer: 'Dear Passengers confirma modo individual, cooperativo online, perspectiva en primera persona, pilotaje, trabajo de cabina, elección de pasajeros y carga, objetos y personas afectados por la física, clima y riesgo ligado a una mayor recompensa. No están confirmados número máximo, clases, campaña, crossplay, mando, progresión, precio ni fecha exacta.',
    note: '“Confirmado” exige una fuente primaria explícita. “Observado” describe una escena; “inferido” es una interpretación pendiente; “desconocido” evita llenar un hueco con un rumor.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Cabina de Dear Passengers para la lista de características confirmadas',
    confirmed: ['Un jugador y cooperativo online', 'Pilotaje y trabajo de cabina', 'Pasajeros, carga y física', 'Clima y riesgo por recompensa'], unknown: ['Límite de jugadores', 'Clases y progresión', 'Crossplay y cooperativo local', 'Duración y contenido final'],
    sections: [
      { id: 'producto', kicker: 'FICHA DE PRODUCTO', heading: '¿Qué confirma directamente Steam?', paragraphs: [
        'Steam identifica acción, aventura e indie, además de un jugador y cooperativo online. La descripción habla de tripulación, aeronave defectuosa, carga arriesgada, pasajeros, servicio de cabina, pilotaje y condiciones meteorológicas. Estos elementos pueden tratarse como el concepto oficial.',
        'La misma ficha confirma que Dear Passengers llegará a Windows, mantiene una ventana de 2026 y publica requisitos mínimos. No muestra número de jugadores, mando, Remote Play Together, logros, Workshop, precio o acceso anticipado.'
      ]},
      { id: 'observado', kicker: 'VÍDEO Y OBSERVACIÓN', heading: '¿Qué añaden los tráileres oficiales?', paragraphs: [
        'Los vídeos muestran perspectiva en primera persona, puesto de pilotaje, pasillo, equipaje y pasajeros movidos por la física, servicio y emergencias exageradas. Es correcto decir que esas escenas existen en el material oficial.',
        'No es correcto concluir que toda escena sea una misión recurrente, un evento aleatorio o una acción controlable. La [[/es/dear-passengers-trailer/|guía del tráiler]] conserva ese límite.'
      ]},
      { id: 'faltantes', kicker: 'NO ANUNCIADO', heading: '¿Qué características siguen sin confirmarse?', paragraphs: [
        'Clases permanentes, árbol de habilidades, campaña, historia, personalización, dificultad, guardado, servidores, matchmaking y máximo online no están documentados. Los nombres de funciones creados por wikis no sustituyen al diseño del estudio.',
        'Tampoco existen pruebas públicas sobre rendimiento, accesibilidad, control por mando o Steam Deck. Una demo permitirá medir algunos puntos, pero no todos se convertirán automáticamente en especificaciones de lanzamiento.'
      ]},
    ],
    localContext: [
      '“Características”, “mecánicas”, “qué se puede hacer” y “gameplay” se solapan, pero esta página funciona como matriz de estado; la guía de cómo jugar explica el flujo.',
      'La palabra “confirmado” no se usa como recurso publicitario. Cada elemento debe poder volver a Steam, FLEXUS o una escena identificada.',
      'La ausencia de español en el producto es una característica de disponibilidad actual, no una promesa de que nunca vaya a localizarse.'
    ],
    faqs: [
      { question: '¿Qué modos están confirmados?', answer: 'Un jugador y cooperativo online.' },
      { question: '¿Se puede pilotar?', answer: 'Sí, pilotar es parte de la propuesta oficial.' },
      { question: '¿Hay física?', answer: 'Sí, pasajeros, equipaje y objetos reaccionan a la física.' },
      { question: '¿Hay clases?', answer: 'No se ha anunciado un sistema de clases.' },
      { question: '¿Tiene crossplay?', answer: 'No está confirmado.' },
      { question: '¿Tiene campaña?', answer: 'La estructura de campaña e historia no se ha publicado.' },
    ], related: ['juego-dear-passengers', 'dear-passengers-como-jugar', 'dear-passengers-trailer', 'dear-passengers-roles'],
  },
  {
    slug: 'dear-passengers-roles', englishPath: '/dear-passengers-roles/',
    keyword: 'Dear Passengers roles', title: 'Roles en Dear Passengers: Piloto, Cabina y Tareas Confirmadas',
    description: 'Roles de Dear Passengers: pilotaje, servicio de cabina, pasajeros, carga y emergencias; diferencia entre tareas visibles y clases no anunciadas.',
    eyebrow: 'ROLES DE LA TRIPULACIÓN · SIN CLASES INVENTADAS', h1: '¿Qué roles existen en Dear Passengers?',
    intro: 'Dear Passengers presenta una tripulación con trabajo repartido entre el puesto de pilotaje y la cabina. “Rol” describe una responsabilidad práctica; no significa que exista una clase seleccionable, un personaje bloqueado o un árbol de habilidades.',
    answer: 'Las tareas confirmadas incluyen pilotar, atender la cabina, servir a pasajeros, vigilar carga y responder a problemas causados por clima y física. FLEXUS no ha anunciado clases fijas de piloto, auxiliar, ingeniero, seguridad o médico, ni reglas para cambiar de puesto durante una partida.',
    note: 'Usamos nombres funcionales para explicar las tareas, no como nombres oficiales de clases. Una herramienta vista en una escena no confirma una profesión permanente.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Tripulación de cabina para explicar los roles de Dear Passengers',
    confirmed: ['Pilotar la aeronave', 'Servicio y control de cabina', 'Gestión de pasajeros y carga', 'Respuesta coordinada a incidentes'], unknown: ['Clases fijas', 'Cambio de rol', 'Composición obligatoria', 'Habilidades o progresión por puesto'],
    sections: [
      { id: 'piloto', kicker: 'PUESTO DE PILOTAJE', heading: '¿Qué hace el piloto en Dear Passengers?', paragraphs: [
        'La descripción y los vídeos confirman que alguien pilota y reacciona a clima, turbulencia y problemas de la aeronave. Una maniobra afecta objetos y personas dentro de la cabina, de modo que pilotar forma parte de la coordinación del grupo.',
        'No se han publicado instrumentos interactivos, procedimientos, combustible, navegación o requisitos para ocupar el puesto en Dear Passengers. “Piloto” es una forma clara de nombrar la tarea, no una clase oficial.'
      ]},
      { id: 'cabina', kicker: 'CABINA', heading: '¿Qué hace la tripulación de cabina?', paragraphs: [
        'La cabina sirve comida y bebida, atiende pasajeros, protege equipaje y responde cuando la física convierte un incidente en varios. Steam relaciona pasajeros y cargas más arriesgados con un posible pago mayor.',
        'No sabemos si existe satisfacción, inventario, limpieza, curación o seguridad como sistemas separados. Los vídeos pueden mostrar acciones parecidas, pero su regla y control aún no están documentados.'
      ]},
      { id: 'cambio', kicker: 'REPARTO DEL EQUIPO', heading: '¿Se puede cambiar de rol durante el vuelo?', paragraphs: [
        'FLEXUS no ha explicado si cada persona elige un puesto antes de empezar, si cualquiera puede usar todos los elementos o si hay limitaciones. Tampoco sabemos cómo adapta el reparto el modo individual.',
        'El número máximo de jugadores sigue abierto, por lo que no proponemos una “composición ideal”. La [[/es/dear-passengers-cuantos-jugadores/|guía de jugadores]] recopila solo capacidades publicadas.'
      ]},
    ],
    localContext: [
      '“Roles”, “funciones” y “clases” no son equivalentes. Usamos “roles” porque es una búsqueda comprensible, pero aclaramos que las clases formales no están confirmadas.',
      '“Tripulación de cabina” es neutral para España y Latinoamérica. “Azafata” o “aeromozo” varían por región y además asignarían una profesión concreta a personajes no definidos.',
      'El valor independiente de la página está en separar tareas demostradas de nombres creados por wikis o vídeos de reacción.'
    ],
    faqs: [
      { question: '¿Qué roles hay?', answer: 'Pilotaje, servicio de cabina, pasajeros, carga y respuesta a problemas.' },
      { question: '¿Existen clases?', answer: 'No se ha anunciado un sistema de clases fijas.' },
      { question: '¿Se puede cambiar de rol?', answer: 'FLEXUS todavía no lo ha explicado.' },
      { question: '¿Hay ingeniero?', answer: 'Puede haber tareas de mantenimiento, pero no una clase de ingeniero confirmada.' },
      { question: '¿Hace falta piloto?', answer: 'Pilotar es central, pero las reglas de composición no están publicadas.' },
      { question: '¿Hay chat de voz?', answer: 'El chat integrado no está confirmado.' },
    ], related: ['dear-passengers-como-jugar', 'dear-passengers-caracteristicas-confirmadas', 'dear-passengers-cuantos-jugadores', 'dear-passengers-trailer', 'juegos-parecidos-a-dear-passengers'],
  },
  {
    slug: 'dear-passengers-desarrollador-flexus', englishPath: '/dear-passengers-developer-flexus/',
    keyword: 'Dear Passengers desarrollador', title: 'Quién Desarrolla Dear Passengers: Perfil Verificado de FLEXUS',
    description: 'Desarrollador de Dear Passengers: papel de FLEXUS, fuentes oficiales, demo, cifras de listas de deseados y datos aún desconocidos.',
    eyebrow: 'DESARROLLADOR Y EDITOR', h1: '¿Quién es el desarrollador de Dear Passengers?',
    intro: 'El desarrollador de Dear Passengers es FLEXUS, que también figura como editor en Steam. Este perfil reúne identidad vinculada al producto, declaraciones directas y anuncios con fecha. Una wiki o una web de fans no representa al estudio.',
    answer: 'FLEXUS desarrolla y publica Dear Passengers. La empresa lista el juego para Windows en 2026, ha publicado tráileres y hitos de listas de deseados y declaró que prepara una versión para Gamescom seguida, en principio, por una demo pública. Motor, presupuesto, equipo final y socios de consola no se han divulgado.',
    note: 'Steam verifica la relación entre empresa y producto. Los planes proceden de entrevista; las cifras de wishlist son declaraciones de FLEXUS, no auditorías de ventas o jugadores.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Imagen oficial para el perfil en español del desarrollador FLEXUS',
    confirmed: ['FLEXUS como desarrollador', 'FLEXUS como editor', 'Windows y ventana 2026', 'Plan declarado de Gamescom y demo'], unknown: ['Motor del juego', 'Presupuesto y equipo final', 'Socios de consola', 'Fecha exacta y modelo comercial'],
    sections: [
      { id: 'identidad', kicker: 'IDENTIDAD OFICIAL', heading: '¿Qué empresa hace Dear Passengers?', paragraphs: [
        'Los campos de desarrollador y editor de Steam muestran FLEXUS. Valve opera Steam, pero no desarrolla el juego. Sitios con nombres parecidos y guías independientes no pertenecen al estudio por usar la marca o imágenes oficiales.',
        'Una cuenta social se trata como oficial cuando está enlazada por Steam, el sitio del estudio u otra referencia verificable. Para una cita personal, conservamos nombre, publicación, fecha y contexto.'
      ]},
      { id: 'declaraciones', kicker: 'LO QUE DIJO FLEXUS', heading: '¿Qué planes ha anunciado el desarrollador?', paragraphs: [
        'La presentación oficial sitúa a la tripulación en la peor aerolínea. En entrevista, un cofundador habló de una build para Gamescom y una demo pública posterior. Steam aún no ofrece esa demo.',
        'FLEXUS también comunicó hitos de listas de deseados: 1,5 millones el 19 de julio y una cifra cercana a dos millones en un teaser posterior. Una wishlist mide interés declarado; no es una venta, descarga ni jugador activo.'
      ]},
      { id: 'limites', kicker: 'DATOS AUSENTES', heading: '¿Qué no sabemos sobre la producción?', paragraphs: [
        'Motor, presupuesto, composición final del equipo, proveedores y calendario detallado no aparecen en una fuente primaria del producto. Una base automática puede rellenar esos campos, pero no aporta evidencia.',
        'La experiencia previa de una empresa en móvil no confirma Android para Dear Passengers. Tampoco una oferta de empleo prueba por sí sola la tecnología o el contenido del juego. La [[/es/dear-passengers-noticias/|cronología]] cambia solo con información atribuible.'
      ]},
    ],
    localContext: [
      '“Desarrollador”, “quién hizo el juego”, “estudio” y “empresa” comparten intención. Steam distingue desarrollador y editor, aunque aquí ambos sean FLEXUS.',
      'FLEXUS no se traduce ni se confunde con Valve. La marca permanece idéntica en contenido y datos estructurados.',
      'Las cifras de wishlist siempre llevan “según FLEXUS” para que una declaración de marketing no parezca medición independiente.'
    ],
    faqs: [
      { question: '¿Quién desarrolla Dear Passengers?', answer: 'FLEXUS, que también figura como editor.' },
      { question: '¿Valve desarrolla el juego?', answer: 'No. Valve opera Steam; FLEXUS es el desarrollador.' },
      { question: '¿Qué motor utiliza?', answer: 'El motor no se ha anunciado oficialmente.' },
      { question: '¿FLEXUS confirmó una demo?', answer: 'Confirmó el plan de Gamescom y una demo posterior, sin fecha.' },
      { question: '¿Tiene dos millones de jugadores?', answer: 'No; la cifra se refiere a listas de deseados comunicadas por FLEXUS.' },
      { question: '¿Tendrá versión móvil?', answer: 'No se ha anunciado; Windows es la única plataforma.' },
    ], related: ['dear-passengers-noticias', 'dear-passengers-demo', 'dear-passengers-fecha-de-lanzamiento', 'dear-passengers-caracteristicas-confirmadas'],
  },
  {
    slug: 'juegos-parecidos-a-dear-passengers', englishPath: '/games-like-dear-passengers/',
    keyword: 'juegos parecidos a Dear Passengers', title: 'Juegos Parecidos a Dear Passengers: Cooperativo, Física y Caos',
    description: 'Juegos parecidos a Dear Passengers por mecánica: R.E.P.O., Lethal Company, Overcooked! 2 y Sky Team, con semejanzas y diferencias.',
    eyebrow: 'COMPARACIÓN POR MECÁNICAS', h1: '¿Qué juegos son parecidos a Dear Passengers?',
    intro: 'Quien busca juegos parecidos a Dear Passengers puede querer coordinación, física caótica, tareas simultáneas o un tema de vuelo. La lista relaciona cada recomendación con una característica confirmada y también explica la diferencia.',
    answer: 'R.E.P.O. se acerca por física y coordinación; Lethal Company por riesgo y comunicación; Overcooked! 2 por reparto de servicio bajo presión; y Sky Team por cooperación en el puesto de pilotaje. Ninguno reproduce exactamente la combinación aún no publicada de pilotaje, cabina, pasajeros y carga.',
    note: 'Dear Passengers no tiene demo pública. Comparamos conceptos oficiales, no experiencia personal, calidad, duración o equivalencia total.',
    heroImage: '/images/hero-bg.webp', heroAlt: 'Cabina oficial para la guía de juegos parecidos a Dear Passengers',
    confirmed: ['Cooperativo online', 'Física de pasajeros y objetos', 'Responsabilidades simultáneas', 'Riesgo a cambio de mayor pago'], unknown: ['Ritmo final', 'Progresión y repetición', 'Máximo de jugadores', 'Precio y recepción pública'],
    sections: [
      { id: 'criterios', kicker: 'CRITERIOS', heading: '¿Qué hace que un juego se parezca a Dear Passengers?', paragraphs: [
        'Usamos cuatro ejes confirmados: coordinación online, objetos físicos, tareas en zonas diferentes y elección de riesgo por recompensa. Tener un avión no basta; ser cooperativo tampoco. Cada alternativa puede acercarse en un eje y alejarse en los demás.',
        'Sin demo pública no se pueden comparar duración, dificultad, progresión o sensación de control. Cuando haya una versión jugable, la metodología deberá registrar qué se probó realmente.'
      ]},
      { id: 'fisica', kicker: 'FÍSICA Y RIESGO', heading: '¿R.E.P.O. y Lethal Company son similares?', paragraphs: [
        'R.E.P.O. es relevante por manipulación física y errores colectivos. Lethal Company se acerca por objetivos de grupo, riesgo y comunicación. Ambos tienen identidad y atmósfera propias; ninguno ofrece servicio de pasajeros y pilotaje de una aerolínea.',
        'La etiqueta social “friendslop” explica parte del atractivo, pero no iguala género, sistemas o capacidad. Dear Passengers se presenta como acción, aventura, indie y comedia cooperativa.'
      ]},
      { id: 'servicio', kicker: 'SERVICIO Y VUELO', heading: '¿Qué aportan Overcooked! 2 y Sky Team?', paragraphs: [
        'Overcooked! 2 se acerca al reparto de tareas de servicio en un espacio estrecho bajo presión, pero no tiene vuelo o física de pasajeros. Es útil para grupos interesados en el ritmo de atención de cabina.',
        'Sky Team es un juego de mesa para dos personas centrado en coordinación en cabina de pilotaje. No es un videojuego en tiempo real. Para física espontánea, R.E.P.O. es más cercano; para servicio, Overcooked! 2. Precio, idioma y plataforma deben comprobarse en cada tienda oficial.'
      ]},
    ],
    localContext: [
      '“Juegos parecidos”, “juegos como” y “alternativas” expresan descubrimiento. Preferimos “juegos parecidos a Dear Passengers” porque no promete un sustituto idéntico.',
      'Precio regional y soporte de español cambian; la comparación se centra en mecánicas duraderas y dirige a las tiendas oficiales.',
      'No afirmamos experiencia en primera persona con Dear Passengers porque no existe una build pública.'
    ],
    faqs: [
      { question: '¿Qué juegos se parecen?', answer: 'R.E.P.O., Lethal Company, Overcooked! 2 y Sky Team por aspectos diferentes.' },
      { question: '¿Es como Lethal Company?', answer: 'Comparte cooperación, riesgo y comunicación, pero tema y tareas son distintos.' },
      { question: '¿Es un juego de terror?', answer: 'No está clasificado como terror; la presentación destaca comedia y caos cooperativo.' },
      { question: '¿Hay otro cooperativo de aviones?', answer: 'Sky Team comparte coordinación de pilotaje, pero es un juego de mesa.' },
      { question: '¿Qué jugar mientras tanto?', answer: 'R.E.P.O. para física, Lethal Company para riesgo u Overcooked! 2 para servicio.' },
      { question: '¿Estos juegos están en español?', answer: 'El soporte varía; comprueba la tabla de idiomas de cada tienda.' },
    ], related: ['dear-passengers-como-jugar', 'dear-passengers-caracteristicas-confirmadas', 'dear-passengers-cuantos-jugadores', 'dear-passengers-fecha-de-lanzamiento'],
  },
];

export const spanishHomeGuide: SpanishGuide = {
  slug: '', englishPath: '/', keyword: 'juego Dear Passengers',
  title: 'Juego Dear Passengers: Guía Completa en Español',
  description: 'Guía en español del juego Dear Passengers: cómo jugar, fecha de lanzamiento, demo, requisitos, jugadores, descarga, tráiler y noticias verificadas.',
  eyebrow: 'GUÍA EN ESPAÑOL · VERIFICADA EL 30/07/2026', h1: 'Juego Dear Passengers: información verificada en español',
  intro: 'El juego Dear Passengers sitúa a una tripulación en la peor aerolínea del mundo: alguien pilota mientras otras personas atienden cabina, pasajeros y carga. Esta sección no es una traducción automática. Su arquitectura responde a consultas observadas en español como “cuándo sale”, “fecha de lanzamiento”, “requisitos”, “precio”, “descargar” y “juego”.',
  answer: 'El juego Dear Passengers está previsto para 2026 en Windows PC mediante Steam. Están confirmados un jugador, cooperativo online, pilotaje, trabajo de cabina, pasajeros y objetos físicos y clima. Steam marca el español como no disponible. Fecha exacta, precio, máximo de jugadores, consolas y acceso a la demo pública siguen desconocidos.',
  note: 'La guía prioriza Steam, vídeos oficiales de FLEXUS y entrevistas directas. Los resultados locales ayudan a identificar vocabulario y dudas, pero no pueden crear fechas, precios, cantidad de jugadores o soporte de idioma.',
  heroImage: '/images/hero-bg.webp', heroAlt: 'Imagen oficial de la cabina en la guía en español del juego Dear Passengers',
  confirmed: ['Lanzamiento en 2026 para Windows', 'Un jugador y cooperativo online', 'Puesto de pilotaje, cabina, pasajeros y carga', 'Requisitos mínimos publicados', 'Español no disponible en el juego'],
  unknown: ['Fecha y precio regional', 'Número máximo de jugadores', 'Consolas y crossplay', 'Fecha de la demo pública', 'Requisitos recomendados'],
  sections: [
    { id: 'que-es', kicker: 'RESPUESTA RÁPIDA', heading: '¿Qué es el juego Dear Passengers?', paragraphs: [
      'Dear Passengers es un juego de acción, aventura y cooperación desarrollado y publicado por FLEXUS. La tripulación debe llevar pasajeros y carga al destino mientras una aeronave poco fiable genera problemas. Una persona pilota; las demás pueden servir, controlar la cabina y resolver incidentes.',
      'Steam confirma modo individual y cooperativo online. Pasajeros, equipaje y objetos reaccionan a la física; clima, turbulencia y bolsas de aire alteran el vuelo. Misiones, progresión, controles, capacidad de sala y duración todavía no se han publicado.'
    ]},
    { id: 'demanda', kicker: 'DEMANDA EN ESPAÑOL', heading: '¿Qué buscan los jugadores hispanohablantes?', paragraphs: [
      'Search Console registra consultas de fecha, requisitos, descarga y precio. El coste tiene ahora una tarea propia en [[/es/precio-de-dear-passengers/|precio de Dear Passengers]], mientras lanzamiento, demo y descarga conservan respuestas separadas. España y otros mercados hispanohablantes aportan vocabulario real.',
      'Son decisiones distintas, no sinónimos para una página traducida. Lanzamiento reúne fecha, precio y plataforma; requisitos conserva la tabla; descargar responde con seguridad; demo sigue el acceso; cuántos jugadores evita repetir cifras no oficiales.'
    ]},
    { id: 'estado', kicker: 'ESTADO DEL PRODUCTO', heading: '¿Cuál es el estado de lanzamiento, demo e idioma?', paragraphs: [
      'Dear Passengers sigue en fase previa al lanzamiento, con ventana de 2026 y Windows como única plataforma confirmada. No hay precio, día, reserva o descarga. FLEXUS habló de una build para Gamescom y una demo pública posterior, pero Steam no ofrece demostración ni Playtest.',
      'La tienda se puede navegar en español, pero la tabla del producto marca Español de España como no disponible. Esta web explica el producto en español; no afirma que Dear Passengers incluya menús, voces o subtítulos en el idioma.'
    ]},
    { id: 'metodo', kicker: 'FUENTES Y CORRECCIONES', heading: '¿Cómo verificamos Dear Passengers?', paragraphs: [
      'Steam es la fuente principal para plataforma, modos, idioma y hardware. Los vídeos prueban escenas, no especificaciones completas. Las entrevistas dan contexto a planes de demo. Cada dato sensible al tiempo lleva fecha y cada ausencia se mantiene como “desconocido”.',
      'Los sitios en español ya compiten por esta búsqueda, pero varios mezclan el texto oficial con inferencias. Nuestra aportación es una respuesta trazable, páginas separadas por intención y enlaces que conectan el dato sin duplicarlo.'
    ]},
  ],
  localContext: [
    'La expresión principal es “juego Dear Passengers”. El nombre propio queda en inglés; “juego” evita confundirlo con la frase común “dear passengers”.',
    'Usamos español internacional comprensible en España y Latinoamérica. Cuando un término regional afecta una decisión —moneda, precio o disponibilidad— se identifica la región en lugar de fingir que todos los mercados son iguales.',
    'Las llamadas a la acción dicen “Añadir a la lista de deseados”, la única acción disponible. No dicen comprar o descargar.'
  ],
  faqs: [
    { question: '¿Cuándo sale el juego Dear Passengers?', answer: 'En 2026 para Windows PC; no se han anunciado mes o día.' },
    { question: '¿Está disponible en español?', answer: 'No. Steam marca el español como no disponible en el producto.' },
    { question: '¿Cuántos jugadores pueden jugar?', answer: 'El máximo es desconocido; modo individual y cooperativo online están confirmados.' },
    { question: '¿Se puede descargar?', answer: 'Todavía no; solo se puede añadir a la lista de deseados.' },
    { question: '¿Tiene demo?', answer: 'Hay una demo pública planeada, pero no existe acceso o fecha ahora.' },
    { question: '¿Cuáles son los requisitos mínimos?', answer: 'Windows 10 64 bits, i5 2,5 GHz, 8 GB RAM, GTX 1060 o RX 6600 XT, DirectX 12 y 4 GB.' },
  ], related: ['juego-dear-passengers', 'dear-passengers-como-jugar', 'dear-passengers-fecha-de-lanzamiento', 'dear-passengers-cuantos-jugadores'],
};

export const spanishGuideBySlug = new Map(spanishGuides.map((guide) => [guide.slug, guide]));
export const spanishGuideByEnglishPath = new Map(spanishGuides.map((guide) => [guide.englishPath, guide]));
