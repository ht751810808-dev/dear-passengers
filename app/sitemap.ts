import type { MetadataRoute } from 'next';

const baseUrl = 'https://dearpassengers.net';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-07-19'),
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
      lastModified: new Date('2026-07-19'),
    },
    {
      url: `${baseUrl}/dear-passengers-player-count/`,
      lastModified: new Date('2026-07-17'),
    },
    {
      url: `${baseUrl}/dear-passengers-roles/`,
      lastModified: new Date('2026-07-17'),
    },
    {
      url: `${baseUrl}/dear-passengers-system-requirements/`,
      lastModified: new Date('2026-07-17'),
    },
    {
      url: `${baseUrl}/dear-passengers-demo/`,
      lastModified: new Date('2026-07-19'),
    },
    {
      url: `${baseUrl}/dear-passengers-news/`,
      lastModified: new Date('2026-07-19'),
    },
    {
      url: `${baseUrl}/dear-passengers-developer-flexus/`,
      lastModified: new Date('2026-07-19'),
    },
    {
      url: `${baseUrl}/zh-cn/`,
      lastModified: new Date('2026-07-19'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-release-date/`,
      lastModified: new Date('2026-07-19'),
    },
    {
      url: `${baseUrl}/zh-cn/dear-passengers-system-requirements/`,
      lastModified: new Date('2026-07-19'),
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
