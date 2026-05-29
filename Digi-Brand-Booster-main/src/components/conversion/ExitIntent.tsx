'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Sparkles } from 'lucide-react'

export default function ExitIntent() {
  const [open, setOpen] = useState(false)
  const [email, setEmail] = useState('')
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    if (sessionStorage.getItem('exitIntentShown')) return

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !open) {
        setOpen(true)
        sessionStorage.setItem('exitIntentShown', '1')
      }
    }

    const timer = setTimeout(() => {
      document.addEventListener('mouseleave', handleMouseLeave)
    }, 8000)

    return () => {
      clearTimeout(timer)
      document.removeEventListener('mouseleave', handleMouseLeave)
    }
  }, [open])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setTimeout(() => setOpen(false), 2000)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        >
          <motion.div
            initial={{ scale: 0.9, y: 30 }}
            animate={{ scale: 1, y: 0 }}
            exit={{ scale: 0.9, y: 30 }}
            transition={{ type: 'spring', damping: 20 }}
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-md w-full"
          >
            <div className="relative gradient-border rounded-3xl">
              <div className="relative rounded-3xl bg-bg-card/95 backdrop-blur-xl p-8 lg:p-10 text-center">
                <button
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="absolute top-4 right-4 w-8 h-8 rounded-full flex items-center justify-center text-text-secondary hover:text-text-primary hover:bg-white/10 transition-colors"
                >
                  <X size={16} />
                </button>

                {!submitted ? (
                  <>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-gradient-to-br from-accent-cta/20 to-red-500/20 border border-accent-cta/30 mb-4">
                      <Sparkles className="text-accent-cta" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-2">Before you go, grab the playbook free.</h3>
                    <p className="text-text-secondary text-sm mb-6">
                      Download <strong className="text-text-primary">The Booster Framework™ Playbook</strong>, the exact 6-phase system that drove $12M+ in client revenue. Free, no signup gauntlet.
                    </p>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <input
                        type="email"
                        required
                        placeholder="Your email address"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full px-4 py-3 rounded-xl bg-bg-card-hover/50 border border-border text-text-primary placeholder:text-text-secondary focus:outline-none focus:border-accent-primary/50 transition-colors"
                      />
                      <button
                        type="submit"
                        className="w-full px-6 py-3 rounded-xl bg-gradient-to-r from-accent-cta to-red-500 text-white font-semibold hover:scale-[1.02] transition-transform flex items-center justify-center gap-2"
                      >
                        <Download size={16} />
                        Get Free Checklist
                      </button>
                    </form>
                    <p className="text-xs text-text-secondary mt-4">No spam. Unsubscribe anytime.</p>
                  </>
                ) : (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-accent-success/20 border border-accent-success/30 mb-4">
                      <Download className="text-accent-success" size={24} />
                    </div>
                    <h3 className="text-2xl font-bold font-heading mb-2">Check Your Inbox!</h3>
                    <p className="text-text-secondary text-sm">Your free checklist is on its way.</p>
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
