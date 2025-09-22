import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://poc-innovation.fr',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        'https://poc-innovation.fr/logo_poc.png',
        'https://poc-innovation.fr/poc_home.jpg',
        'https://poc-innovation.fr/poc_home_2.jpg',
        'https://poc-innovation.fr/logo_black.svg',
        'https://poc-innovation.fr/logo_white.svg',
      ],
    },
    {
      url: 'https://poc-innovation.fr/innovation',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
      images: [
        'https://poc-innovation.fr/logo_poc.png',
        'https://poc-innovation.fr/poc_home.jpg',
        'https://poc-innovation.fr/poc_home_2.jpg',
        'https://poc-innovation.fr/logo_black.svg',
        'https://poc-innovation.fr/logo_white.svg',
      ],
    },
  ]
}
