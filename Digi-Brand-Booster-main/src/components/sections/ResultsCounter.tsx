'use client'

import { motion } from 'framer-motion'
import { Rocket, DollarSign, Users, TrendingUp } from 'lucide-react'
import AnimatedCounter from '@/components/ui/AnimatedCounter'
import { resultCounters } from '@/lib/data'

const iconMap = { rocket: Rocket, dollar: DollarSign, users: Users, trending: TrendingUp }

export default function ResultsCounter() {
  return (
    <section className="py-16 lg:py-20 border-t border-border bg-gradient-to-b from-bg-dark via-bg-card/30 to-bg-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {resultCounters.map((stat, i) => {
            const Icon = iconMap[stat.icon as keyof typeof iconMap]
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/20 mb-4">
                  <Icon className="text-accent-primary" size={24} />
                </div>
                <div className="text-3xl sm:text-4xl lg:text-5xl font-bold font-heading gradient-text mb-2">
                  <AnimatedCounter value={stat.value} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="text-sm lg:text-base text-text-secondary">{stat.label}</p>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
