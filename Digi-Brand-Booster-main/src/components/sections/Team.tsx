'use client'

import { motion } from 'framer-motion'
import { teamMembers } from '@/lib/data'
import SectionHeader from '@/components/ui/SectionHeader'
import GlassCard from '@/components/ui/GlassCard'

export default function Team() {
  return (
    <section id="team" className="py-20 lg:py-28 border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Team"
          title="Meet the Experts Behind Your Growth"
          description="A passionate team of marketers, strategists, designers, and engineers working as one to scale your brand."
        />
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {teamMembers.map((member, i) => (
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <GlassCard className="p-6 text-center group">
                <div
                  className="w-20 h-20 mx-auto rounded-full flex items-center justify-center text-2xl font-bold font-heading text-white mb-4 group-hover:scale-110 transition-transform"
                  style={{ background: `linear-gradient(135deg, hsl(${i * 70 + 200}, 70%, 55%), hsl(${i * 70 + 260}, 70%, 45%))` }}
                >
                  {member.initials}
                </div>
                <h3 className="font-bold font-heading text-lg mb-1">{member.name}</h3>
                <p className="text-xs text-accent-primary mb-3">{member.role}</p>
                <p className="text-xs text-text-secondary leading-relaxed mb-4 line-clamp-3">{member.bio}</p>
                <span aria-hidden="true" className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-bg-card-hover/50 text-text-secondary">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                  </svg>
                </span>
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
