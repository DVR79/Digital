import { siteConfig } from '@/lib/data'

export default function Footer() {
  return (
    <footer className="border-t border-border bg-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <a href="#top" className="flex items-center gap-2.5 mb-4">
              <svg className="w-8 h-8" viewBox="0 0 48 48" fill="none" aria-hidden="true">
                <defs>
                  <linearGradient id="footerLogoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#3b82f6" />
                    <stop offset="50%" stopColor="#06b6d4" />
                    <stop offset="100%" stopColor="#8b5cf6" />
                  </linearGradient>
                </defs>
                <circle cx="24" cy="24" r="20" stroke="url(#footerLogoGrad)" strokeWidth="2.5" fill="none" />
                <path d="M24 12L30 22H18L24 12Z" fill="url(#footerLogoGrad)" />
                <path d="M18 26H30L24 36L18 26Z" fill="url(#footerLogoGrad)" opacity="0.6" />
              </svg>
              <span className="text-lg font-bold font-heading">{siteConfig.name}</span>
            </a>
            <p className="text-sm text-text-secondary leading-relaxed">
              AI-native performance marketing agency. We hit 88% of client growth goals, guaranteed within 90 days or you don&apos;t pay.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-text-primary">Solutions</h4>
            <ul className="space-y-2.5">
              {['Paid Media (Meta/Google/Amazon)', 'Web Design & CRO', 'SEO & Organic Growth', 'Email & Retention Marketing'].map((s) => (
                <li key={s}>
                  <a href="#services" className="text-sm text-text-secondary hover:text-accent-primary transition-colors">{s}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-text-primary">Agency Pages</h4>
            <ul className="space-y-2.5">
              {[
                { label: 'Home', href: '#top' },
                { label: 'Services', href: '#services' },
                { label: 'Process', href: '#process' },
                { label: 'Case Studies', href: '#cases' },
              ].map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-text-secondary hover:text-accent-primary transition-colors">{link.label}</a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-text-primary">Get In Touch</h4>
            <p className="text-sm text-text-secondary mb-1">
              <a href={`mailto:${siteConfig.email}`} className="hover:text-accent-primary transition-colors">{siteConfig.email}</a>
            </p>
            <p className="text-sm text-text-secondary mb-3">
              <a href={`tel:${siteConfig.phone.replace(/\s/g, '')}`} className="hover:text-accent-primary transition-colors">{siteConfig.phone}</a>
            </p>
            <p className="text-xs text-text-secondary/70 leading-relaxed">{siteConfig.address}</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-text-secondary">&copy; 2026 {siteConfig.name}. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 sm:gap-6">
            <a href="/privacy" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Privacy Policy</a>
            <a href="/terms" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Terms of Service</a>
            <a href="/sitemap.xml" className="text-sm text-text-secondary hover:text-text-primary transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  )
}
