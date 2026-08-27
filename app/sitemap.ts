import type { MetadataRoute } from 'next';

const baseUrl = 'https://dearpassengers.net';
const germanPaths = [
  '/de/',
  '/de/dear-passengers-spiel/',
  '/de/dear-passengers-steam/',
  '/de/dear-passengers-vr/',
  '/de/dear-passengers-switch/',
  '/de/dear-passengers-ps5/',
  '/de/dear-passengers-gameplay/',
  '/de/dear-passengers-trailer/',
  '/de/dear-passengers-bestaetigte-features/',
  '/de/dear-passengers-rollen/',
  '/de/dear-passengers-spielerzahl/',
  '/de/dear-passengers-release/',
  '/de/dear-passengers-demo/',
  '/de/dear-passengers-download/',
  '/de/dear-passengers-news/',
  '/de/dear-passengers-entwickler-flexus/',
  '/de/dear-passengers-systemanforderungen/',
  '/de/spiele-wie-dear-passengers/',
  '/de/ueber-uns/',
  '/de/redaktionsrichtlinien/',
  '/de/kontakt/',
  '/de/datenschutz/',
];

const arabicPaths = [
  '/ar/',
  '/ar/dear-passengers-game/',
  '/ar/dear-passengers-gameplay/',
  '/ar/dear-passengers-trailer/',
  '/ar/dear-passengers-confirmed-features/',
  '/ar/dear-passengers-roles/',
  '/ar/dear-passengers-player-count/',
  '/ar/dear-passengers-release/',
  '/ar/dear-passengers-demo/',
  '/ar/dear-passengers-download/',
  '/ar/dear-passengers-news/',
  '/ar/dear-passengers-developer/',
  '/ar/dear-passengers-system-requirements/',
  '/ar/games-like-dear-passengers/',
  '/ar/about/',
  '/ar/editorial-policy/',
  '/ar/contact/',
  '/ar/privacy-policy/',
];

const turkishPaths = [
  '/tr/',
  '/tr/dear-passengers-oyunu/',
  '/tr/dear-passengers-steam/',
  '/tr/dear-passengers-ps5/',
  '/tr/dear-passengers-oynanis/',
  '/tr/dear-passengers-fragman/',
  '/tr/dear-passengers-ozellikleri/',
  '/tr/dear-passengers-rolleri/',
  '/tr/dear-passengers-kac-kisilik/',
  '/tr/dear-passengers-cikis-tarihi/',
  '/tr/dear-passengers-demo/',
  '/tr/dear-passengers-indir/',
  '/tr/dear-passengers-haberleri/',
  '/tr/dear-passengers-gelistiricisi/',
  '/tr/dear-passengers-sistem-gereksinimleri/',
  '/tr/dear-passengers-benzeri-oyunlar/',
  '/tr/hakkimizda/',
  '/tr/editorial-policy/',
  '/tr/iletisim/',
  '/tr/gizlilik/',
];

const portuguesePaths = [
  '/pt-br/',
  '/pt-br/jogo-dear-passengers/',
  '/pt-br/dear-passengers-como-jogar/',
  '/pt-br/dear-passengers-trailer/',
  '/pt-br/dear-passengers-recursos-confirmados/',
  '/pt-br/dear-passengers-funcoes/',
  '/pt-br/dear-passengers-quantos-jogadores/',
  '/pt-br/dear-passengers-data-de-lancamento/',
  '/pt-br/dear-passengers-demo/',
  '/pt-br/dear-passengers-baixar/',
  '/pt-br/dear-passengers-noticias/',
  '/pt-br/dear-passengers-desenvolvedora-flexus/',
  '/pt-br/dear-passengers-requisitos/',
  '/pt-br/jogos-parecidos-com-dear-passengers/',
  '/pt-br/sobre/',
  '/pt-br/politica-editorial/',
  '/pt-br/contato/',
  '/pt-br/privacidade/',
];

const spanishPaths = [
  '/es/',
  '/es/juego-dear-passengers/',
  '/es/dear-passengers-vr/',
  '/es/dear-passengers-como-jugar/',
  '/es/dear-passengers-trailer/',
  '/es/dear-passengers-caracteristicas-confirmadas/',
  '/es/dear-passengers-roles/',
  '/es/dear-passengers-cuantos-jugadores/',
  '/es/dear-passengers-fecha-de-lanzamiento/',
  '/es/precio-de-dear-passengers/',
  '/es/dear-passengers-demo/',
  '/es/dear-passengers-descargar/',
  '/es/dear-passengers-noticias/',
  '/es/dear-passengers-desarrollador-flexus/',
  '/es/dear-passengers-requisitos/',
  '/es/juegos-parecidos-a-dear-passengers/',
  '/es/sobre/',
  '/es/politica-editorial/',
  '/es/contacto/',
  '/es/privacidad/',
];

const myanmarPaths = [
  '/my/',
  '/my/dear-passengers-gameplay/',
  '/my/dear-passengers-trailer/',
  '/my/dear-passengers-confirmed-features/',
  '/my/dear-passengers-roles/',
  '/my/dear-passengers-player-count/',
  '/my/dear-passengers-release-date/',
  '/my/dear-passengers-demo/',
  '/my/dear-passengers-download/',
  '/my/dear-passengers-news/',
  '/my/dear-passengers-developer-flexus/',
  '/my/dear-passengers-system-requirements/',
  '/my/games-like-dear-passengers/',
  '/my/about/',
  '/my/editorial-policy/',
  '/my/contact/',
  '/my/privacy-policy/',
];

const russianPaths = [
  '/ru/',
  '/ru/igra-dear-passengers/',
  '/ru/dear-passengers-vr/',
  '/ru/dear-passengers-kak-igrat/',
  '/ru/dear-passengers-skolko-igrokov/',
  '/ru/dear-passengers-data-vyhoda/',
  '/ru/dear-passengers-demo/',
  '/ru/dear-passengers-skachat/',
  '/ru/dear-passengers-sistemnye-trebovaniya/',
  '/ru/dear-passengers-russkiy-yazyk/',
];

const czechPaths = [
  '/cs/',
  '/cs/hra-dear-passengers/',
  '/cs/dear-passengers-jak-hrat/',
  '/cs/dear-passengers-pocet-hracu/',
  '/cs/dear-passengers-datum-vydani/',
  '/cs/cena-dear-passengers/',
  '/cs/dear-passengers-demo/',
  '/cs/dear-passengers-stahnout/',
  '/cs/dear-passengers-systemove-pozadavky/',
  '/cs/dear-passengers-cestina/',
];

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-08-08'),
    },
    {
      url: `${baseUrl}/game-dear-passengers/`,
      lastModified: new Date('2026-08-20'),
    },
    {
      url: `${baseUrl}/dear-passengers-steam/`,
      lastModified: new Date('2026-08-20'),
    },
    {
      url: `${baseUrl}/dear-passengers-gameplay/`,
      lastModified: new Date('2026-08-04'),
    },
    {
      url: `${baseUrl}/dear-passengers-trailer/`,
      lastModified: new Date('2026-07-27'),
    },
    {
      url: `${baseUrl}/dear-passengers-confirmed-features/`,
      lastModified: new Date('2026-08-25'),
    },
    {
      url: `${baseUrl}/dear-passengers-release-date/`,
      lastModified: new Date('2026-08-27'),
    },
    {
      url: `${baseUrl}/dear-passengers-price/`,
      lastModified: new Date('2026-08-27'),
    },
    {
      url: `${baseUrl}/dear-passengers-platforms/`,
      lastModified: new Date('2026-08-26'),
    },
    {
      url: `${baseUrl}/dear-passengers-console/`,
      lastModified: new Date('2026-08-26'),
    },
    {
      url: `${baseUrl}/dear-passengers-playstation/`,
      lastModified: new Date('2026-08-26'),
    },
    {
      url: `${baseUrl}/dear-passengers-ps5/`,
      lastModified: new Date('2026-08-26'),
    },
    {
      url: `${baseUrl}/dear-passengers-switch/`,
      lastModified: new Date('2026-08-24'),
    },
    {
      url: `${baseUrl}/dear-passengers-vr/`,
      lastModified: new Date('2026-08-21'),
    },
    {
      url: `${baseUrl}/dear-passengers-mobile/`,
      lastModified: new Date('2026-08-22'),
    },
    {
      url: `${baseUrl}/dear-passengers-player-count/`,
      lastModified: new Date('2026-07-20'),
    },
    {
      url: `${baseUrl}/dear-passengers-roles/`,
      lastModified: new Date('2026-07-20'),
    },
    {
      url: `${baseUrl}/dear-passengers-system-requirements/`,
      lastModified: new Date('2026-07-17'),
    },
    {
      url: `${baseUrl}/dear-passengers-demo/`,
      lastModified: new Date('2026-07-21'),
    },
    {
      url: `${baseUrl}/dear-passengers-download/`,
      lastModified: new Date('2026-08-22'),
    },
    {
      url: `${baseUrl}/dear-passengers-news/`,
      lastModified: new Date('2026-08-03'),
    },
    {
      url: `${baseUrl}/dear-passengers-developer-flexus/`,
      lastModified: new Date('2026-07-19'),
    },
    {
      url: `${baseUrl}/games-like-dear-passengers/`,
      lastModified: new Date('2026-07-20'),
    },
    {
      url: `${baseUrl}/zh-cn/`,
      lastModified: new Date('2026-08-20'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-game/`,
      lastModified: new Date('2026-08-20'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-steam/`,
      lastModified: new Date('2026-08-20'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-player-count/`,
      lastModified: new Date('2026-07-20'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-release-date/`,
      lastModified: new Date('2026-08-20'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-download/`,
      lastModified: new Date('2026-08-20'),
    },
    ...germanPaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(path === '/de/dear-passengers-ps5/' || path === '/de/' || path === '/de/dear-passengers-steam/' || path === '/de/dear-passengers-release/' ? '2026-08-26' : path === '/de/dear-passengers-switch/' ? '2026-08-24' : path === '/de/dear-passengers-vr/' ? '2026-08-21' : path === '/de/dear-passengers-spiel/' || path === '/de/redaktionsrichtlinien/' ? '2026-08-20' : path === '/de/kontakt/' ? '2026-08-10' : '2026-07-24'),
    })),
    ...arabicPaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(path === '/ar/' ? '2026-07-29' : '2026-07-25') })),
    ...turkishPaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(path === '/tr/dear-passengers-ps5/' || path === '/tr/' || path === '/tr/dear-passengers-steam/' ? '2026-08-26' : path === '/tr/dear-passengers-oyunu/' || path === '/tr/dear-passengers-cikis-tarihi/' || path === '/tr/gizlilik/' ? '2026-08-20' : '2026-07-27') })),
    ...portuguesePaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(path === '/pt-br/' ? '2026-07-29' : '2026-07-28') })),
    ...spanishPaths.map((path) => ({
      url: `${baseUrl}${path}`,
      lastModified: new Date(path === '/es/precio-de-dear-passengers/' || path === '/es/dear-passengers-fecha-de-lanzamiento/' ? '2026-08-27' : path === '/es/dear-passengers-vr/' ? '2026-08-21' : path === '/es/privacidad/' ? '2026-08-10' : '2026-07-30'),
    })),
    ...myanmarPaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date('2026-07-30') })),
    ...russianPaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(path === '/ru/dear-passengers-vr/' ? '2026-08-21' : '2026-08-05') })),
    ...czechPaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(path === '/cs/cena-dear-passengers/' || path === '/cs/dear-passengers-datum-vydani/' ? '2026-08-27' : '2026-08-08') })),
    {
      url: `${baseUrl}/it/dear-passengers-data-di-uscita/`,
      lastModified: new Date('2026-08-27'),
    },
    {
      url: `${baseUrl}/it/prezzo-di-dear-passengers/`,
      lastModified: new Date('2026-08-27'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-system-requirements/`,
      lastModified: new Date('2026-07-20'),
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date('2026-07-15'),
    },
    {
      url: `${baseUrl}/editorial-policy/`,
      lastModified: new Date('2026-08-11'),
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date('2026-07-15'),
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: new Date('2026-08-10'),
    },
  ];
}
