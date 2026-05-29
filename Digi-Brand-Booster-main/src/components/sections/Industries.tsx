'use client'

import { motion } from 'framer-motion'
import { ShoppingBag, Code, Heart, Banknote, Building, MapPin } from 'lucide-react'
import { industries } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'

const iconMap = {
  'shopping-bag': ShoppingBag,
  'code': Code,
  'heart': Heart,
  'banknote': Banknote,
  'building': Building,
  'map-pin': MapPin,
}

export default function Industries() {
  return (
    <section id="industries" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Industries We Scale"
          title="Specialists, not generalists."
          description="We've engineered playbooks across these verticals. If you fit, we move fast."
        />
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-5">
          {industries.map((ind, i) => {
            const Icon = iconMap[ind.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.06 }}
              >
                <GlassCard className="p-6 lg:p-7 h-full group cursor-pointer">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/20 mb-4 group-hover:scale-110 transition-transform">
                    {Icon && <Icon size={22} className="text-accent-primary" />}
                  </div>
                  <h3 className="text-lg font-bold font-heading mb-2 group-hover:gradient-text transition-all">{ind.name}</h3>
                  <p className="text-sm text-text-secondary">{ind.desc}</p>
                </GlassCard>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
