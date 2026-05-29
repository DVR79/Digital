import { marqueeText, trustPartners } from '@/lib/data'
import { Award } from 'lucide-react'

export default function TrustBar() {
  return (
    <section className="py-12 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm tracking-wider uppercase text-text-secondary mb-8">
          Certified Partners · Trusted Stack
        </p>
        <div className="overflow-hidden">
          <div className="flex gap-12 animate-marquee">
            {[...trustPartners, ...trustPartners].map((partner, i) => (
              <div
                key={`${partner.name}-${i}`}
                className="flex items-center gap-2.5 px-6 py-3 rounded-full glass shrink-0 text-text-secondary"
              >
                <Award size={18} className="text-accent-primary" />
                <span className="text-sm font-medium whitespace-nowrap">{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-accent-primary/10 via-accent-secondary/10 to-purple-500/10 border-y border-border overflow-hidden">
        <div className="flex animate-marquee py-3">
          {[...Array(2)].map((_, i) => (
            <span key={i} className="text-sm font-medium text-text-secondary whitespace-nowrap px-4">
              {marqueeText} •
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
