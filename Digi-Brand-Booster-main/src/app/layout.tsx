import type { Metadata } from 'next'
import { Inter, Bricolage_Grotesque } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  weight: ['300', '400', '500', '600', '700'],
})

const bricolage = Bricolage_Grotesque({
  subsets: ['latin'],
  variable: '--font-bricolage',
  display: 'swap',
  weight: ['400', '500', '600', '700', '800'],
})

export const metadata: Metadata = {
  metadataBase: new URL('https://digibrandbooster.tech'),
  title: 'Digi Brand Booster | AI-Native Performance Marketing Agency · 90-Day ROI Guarantee',
  description: 'AI-native performance marketing agency for D2C, e-commerce, SaaS and B2B brands. We hit 88% of client growth goals, guaranteed in 90 days or you don\'t pay. Get your free Growth Audit.',
  keywords: ['Digi Brand Booster', 'AI marketing agency', 'performance marketing', 'meta ads agency', 'google ads agency', 'D2C marketing', 'e-commerce growth', 'shopify plus partner', 'klaviyo agency', 'roi guarantee agency'],
  robots: 'index,follow',
  openGraph: {
    title: 'Digi Brand Booster | AI-Native Performance Marketing · 90-Day ROI Guarantee',
    description: 'We hit 88% of client growth goals, guaranteed in 90 days or you don\'t pay. $12M+ revenue generated for D2C, SaaS and B2B brands.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Digi Brand Booster',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Digi Brand Booster | AI-Native Performance Marketing',
    description: 'We hit 88% of client growth goals, guaranteed in 90 days or you don\'t pay.',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${bricolage.variable}`} suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark';}if(t==='light')document.documentElement.classList.add('light');}catch(e){}})()`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'Digi Brand Booster',
              description: 'AI-native performance marketing agency for D2C, e-commerce, SaaS and B2B brands. 90-day ROI guarantee.',
              url: 'https://digibrandbooster.tech',
              email: 'Venkat.digitalseo@gamil.com',
              telephone: '+917981632581',
              address: {
                '@type': 'PostalAddress',
                streetAddress: 'M1, Ruchi Complex, Adajan – Hazira Road',
                addressLocality: 'Surat',
                addressRegion: 'Gujarat',
                postalCode: '395009',
                addressCountry: 'IN',
              },
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-bg-dark text-text-primary antialiased">
        {children}
      </body>
    </html>
  )
}
