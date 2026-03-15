import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://asimshirinov.me',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: 'https://asimshirinov.me/blog/first-blog-post',
      lastModified: new Date('2026-02-28'),
      changeFrequency: 'monthly',
      priority: 0.7,
    },
  ]
}