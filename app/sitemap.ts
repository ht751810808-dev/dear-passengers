import type { MetadataRoute } from 'next';

const baseUrl = 'https://dearpassengers.net';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: `${baseUrl}/`,
      lastModified: new Date('2026-07-15'),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${baseUrl}/dear-passengers-release-date/`,
      lastModified: new Date('2026-07-15'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/dear-passengers-player-count/`,
      lastModified: new Date('2026-07-15'),
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about/`,
      lastModified: new Date('2026-07-15'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/editorial-policy/`,
      lastModified: new Date('2026-07-15'),
      changeFrequency: 'monthly',
      priority: 0.5,
    },
    {
      url: `${baseUrl}/contact/`,
      lastModified: new Date('2026-07-15'),
      changeFrequency: 'yearly',
      priority: 0.4,
    },
    {
      url: `${baseUrl}/privacy-policy/`,
      lastModified: new Date('2026-07-15'),
      changeFrequency: 'yearly',
      priority: 0.2,
    },
  ];
}
