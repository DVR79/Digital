'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Target, Search, ShoppingCart, Monitor, Code, Store, Package, Zap, Clipboard, TrendingUp, Mail, Users, Palette, ArrowRight } from 'lucide-react'
import { serviceTabs } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'
import ShimmerButton from '@/components/ui/ShimmerButton'

const iconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  target: Target,
  search: Search,
  'shopping-cart': ShoppingCart,
  monitor: Monitor,
  code: Code,
  store: Store,
  package: Package,
  zap: Zap,
  clipboard: Clipboard,
  'trending-up': TrendingUp,
  mail: Mail,
  users: Users,
  palette: Palette,
}

export default function Services() {
  const [activeTab, setActiveTab] = useState(serviceTabs[0].id)
  const activeServices = serviceTabs.find((t) => t.id === activeTab)?.services || []

  return (
    <section id="services" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="Everything you need to scale. Nothing you don't."
          description="Four growth engines: Paid Media, Web & CRO, SEO & Organic, and Retention. Pick one or layer them all."
        />

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {serviceTabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-lg shadow-blue-500/25'
                  : 'glass text-text-secondary hover:text-text-primary hover:border-border'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {activeServices.map((service, i) => {
              const Icon = iconMap[service.icon] || Target
              return (
                <motion.div
                  key={service.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <GlassCard className="p-6 lg:p-8 h-full group cursor-pointer">
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 border border-accent-primary/20 mb-5 group-hover:scale-110 transition-transform">
                      <Icon size={22} className="text-accent-primary" />
                    </div>
                    <h3 className="text-xl font-bold font-heading mb-3 group-hover:gradient-text transition-all">{service.title}</h3>
                    <p className="text-sm text-text-secondary leading-relaxed mb-5">{service.description}</p>
                    <ul className="space-y-2 mb-5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-center gap-2 text-sm text-text-secondary">
                          <span className="w-1 h-1 rounded-full bg-accent-primary" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center gap-2 text-sm text-accent-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                      Learn more <ArrowRight size={14} />
                    </div>
                  </GlassCard>
                </motion.div>
              )
            })}
          </motion.div>
        </AnimatePresence>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 lg:mt-16 p-8 lg:p-10 rounded-3xl bg-gradient-to-br from-accent-primary/10 via-accent-secondary/10 to-purple-500/10 border border-border flex flex-col md:flex-row items-center justify-between gap-6"
        >
          <p className="text-lg lg:text-xl font-heading text-center md:text-left">
            Not sure which engine you need?{' '}
            <span className="gradient-text font-bold">Get a free audit. We&apos;ll tell you straight.</span>
          </p>
          <ShimmerButton href="#contact" variant="cta">
            Get My Free Audit
          </ShimmerButton>
        </motion.div>
      </div>
    </section>
  )
}
