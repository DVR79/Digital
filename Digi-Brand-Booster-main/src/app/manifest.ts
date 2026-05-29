import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Digi Brand Booster',
    short_name: 'DigiBrand',
    description: 'AI-Native Performance Marketing Agency. 90-Day ROI Guarantee.',
    start_url: '/',
    display: 'standalone',
    background_color: '#0a0a14',
    theme_color: '#0a0a14',
    icons: [
      { src: '/icon.svg', sizes: 'any', type: 'image/svg+xml' },
      { src: '/apple-icon', sizes: '180x180', type: 'image/png' },
    ],
  }
}
