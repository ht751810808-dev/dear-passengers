import type { MetadataRoute } from 'next';

const baseUrl = 'https://dearpassengers.net';
const germanPaths = [
  '/de/',
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
  '/es/dear-passengers-como-jugar/',
  '/es/dear-passengers-trailer/',
  '/es/dear-passengers-caracteristicas-confirmadas/',
  '/es/dear-passengers-roles/',
  '/es/dear-passengers-cuantos-jugadores/',
  '/es/dear-passengers-fecha-de-lanzamiento/',
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

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-07-29'),
    },
    {
      url: `${baseUrl}/dear-passengers-gameplay/`,
      lastModified: new Date('2026-07-20'),
    },
    {
      url: `${baseUrl}/dear-passengers-trailer/`,
      lastModified: new Date('2026-07-27'),
    },
    {
      url: `${baseUrl}/dear-passengers-confirmed-features/`,
      lastModified: new Date('2026-07-19'),
    },
    {
      url: `${baseUrl}/dear-passengers-release-date/`,
      lastModified: new Date('2026-07-24'),
    },
    {
      url: `${baseUrl}/dear-passengers-platforms/`,
      lastModified: new Date('2026-07-29'),
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
      lastModified: new Date('2026-07-21'),
    },
    {
      url: `${baseUrl}/dear-passengers-news/`,
      lastModified: new Date('2026-07-28'),
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
      lastModified: new Date('2026-07-29'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-player-count/`,
      lastModified: new Date('2026-07-20'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-release-date/`,
      lastModified: new Date('2026-07-24'),
    },
    ...germanPaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(path === '/de/' ? '2026-07-29' : '2026-07-24') })),
    ...arabicPaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(path === '/ar/' ? '2026-07-29' : '2026-07-25') })),
    ...turkishPaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(path === '/tr/' ? '2026-07-29' : '2026-07-27') })),
    ...portuguesePaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date(path === '/pt-br/' ? '2026-07-29' : '2026-07-28') })),
    ...spanishPaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date('2026-07-30') })),
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
      lastModified: new Date('2026-07-15'),
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date('2026-07-15'),
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: new Date('2026-07-15'),
    },
  ];
}
