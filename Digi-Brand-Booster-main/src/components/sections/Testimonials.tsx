'use client'

import { motion } from 'framer-motion'
import { Quote, Star } from 'lucide-react'
import { testimonials } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Success Stories"
          title="Trusted by Top Brands"
          description="We take pride in building long-term partnerships. Here's what our clients and partners say about our growth strategies."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={i === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
            >
              <GlassCard className="p-6 lg:p-7 h-full">
                <Quote className="text-accent-primary/40 mb-4" size={32} />
                <p className="text-sm lg:text-base text-text-secondary leading-relaxed mb-6">&ldquo;{t.quote}&rdquo;</p>
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white shrink-0"
                    style={{ background: `linear-gradient(135deg, hsl(${i * 60 + 200}, 70%, 55%), hsl(${i * 60 + 260}, 70%, 45%))` }}
                  >
                    {t.name.split(' ').map((n) => n[0]).join('')}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-xs text-text-secondary">{t.title}</p>
                  </div>
                  <div className="flex gap-0.5">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} size={12} className="fill-accent-cta text-accent-cta" />
                    ))}
                  </div>
                </div>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
