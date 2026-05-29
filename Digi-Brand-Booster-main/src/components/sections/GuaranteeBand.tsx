'use client'

import { motion } from 'framer-motion'
import { Shield, Clock } from 'lucide-react'
import { guaranteeBand } from '@/lib/data'
import ShimmerButton from '@/components/ui/ShimmerButton'

export default function GuaranteeBand() {
  return (
    <section className="py-12 lg:py-16 border-t border-border bg-gradient-to-r from-accent-cta/5 via-transparent to-accent-cta/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-center gap-6 lg:gap-8 p-6 lg:p-8 rounded-3xl glass border-accent-cta/20"
        >
          <div className="shrink-0 flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-accent-cta/20 to-red-500/20 border border-accent-cta/30">
            <Shield size={28} className="text-accent-cta" />
          </div>

          <div className="flex-1 text-center lg:text-left">
            <h3 className="text-xl lg:text-2xl font-bold font-heading mb-1">{guaranteeBand.title}</h3>
            <p className="text-sm lg:text-base text-text-secondary">{guaranteeBand.description}</p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 shrink-0">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent-cta/10 border border-accent-cta/20 text-xs font-semibold text-accent-cta">
              <Clock size={12} />
              {guaranteeBand.scarcity}
            </span>
            <ShimmerButton href="#contact" variant="cta" size="md">
              Claim Your Spot
            </ShimmerButton>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
