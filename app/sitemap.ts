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

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-07-24'),
    },
    {
      url: `${baseUrl}/dear-passengers-gameplay/`,
      lastModified: new Date('2026-07-20'),
    },
    {
      url: `${baseUrl}/dear-passengers-trailer/`,
      lastModified: new Date('2026-07-19'),
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
      lastModified: new Date('2026-07-24'),
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
      lastModified: new Date('2026-07-20'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-player-count/`,
      lastModified: new Date('2026-07-20'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-release-date/`,
      lastModified: new Date('2026-07-24'),
    },
    ...germanPaths.map((path) => ({ url: `${baseUrl}${path}`, lastModified: new Date('2026-07-24') })),
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
