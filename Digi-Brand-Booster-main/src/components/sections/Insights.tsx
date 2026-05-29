'use client'

import { motion } from 'framer-motion'
import { Clock, ArrowUpRight } from 'lucide-react'
import { insights } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'

export default function Insights() {
  return (
    <section id="insights" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Insights & Resources"
          title="Latest from the Growth Lab"
          description="Strategies, frameworks, and case-study breakdowns to help you scale smarter."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {insights.map((post, i) => (
            <motion.div
              key={post.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`block group ${post.featured ? 'md:col-span-2 lg:col-span-2 lg:row-span-1' : ''}`}
            >
              <GlassCard className={`p-6 lg:p-8 h-full relative overflow-hidden ${post.featured ? 'min-h-[280px]' : ''}`}>
                <div
                  className="absolute inset-0 opacity-30 group-hover:opacity-50 transition-opacity"
                  style={{
                    background: `linear-gradient(135deg, hsl(${i * 80 + 200}, 70%, 30%, 0.15), transparent 60%)`,
                  }}
                />
                <div className="relative z-10 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-accent-primary/10 text-accent-primary border border-accent-primary/20">
                      {post.category}
                    </span>
                    <span className="text-xs text-text-secondary">Coming soon</span>
                  </div>
                  <h3 className={`font-bold font-heading mb-3 ${post.featured ? 'text-2xl lg:text-3xl' : 'text-lg'} group-hover:gradient-text transition-all`}>
                    {post.title}
                  </h3>
                  <div className="mt-auto flex items-center justify-between pt-4 border-t border-border">
                    <div className="flex items-center gap-4 text-xs text-text-secondary">
                      <span className="flex items-center gap-1">
                        <Clock size={12} />
                        {post.readTime}
                      </span>
                      <span>{post.date}</span>
                    </div>
                    <ArrowUpRight size={16} className="text-accent-primary group-hover:rotate-12 transition-transform" />
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
