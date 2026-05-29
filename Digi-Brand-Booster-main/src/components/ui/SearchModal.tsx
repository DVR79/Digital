'use client'

import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Search, X, ArrowRight, Hash } from 'lucide-react'
import { navLinks, serviceTabs, faqItems, caseStudies, industries } from '@/lib/data'

type SearchItem = {
  category: string
  title: string
  description?: string
  href: string
}

function buildIndex(): SearchItem[] {
  const items: SearchItem[] = []

  navLinks.forEach((link) => items.push({ category: 'Section', title: link.label, href: link.href }))

  serviceTabs.forEach((tab) =>
    tab.services.forEach((s) =>
      items.push({
        category: `Service · ${tab.label}`,
        title: s.title,
        description: s.description,
        href: '#services',
      })
    )
  )

  caseStudies.forEach((c) =>
    items.push({
      category: `Case Study · ${c.industry}`,
      title: c.title,
      description: `${c.client} · ${c.heroMetric} ${c.heroLabel}`,
      href: '#cases',
    })
  )

  industries.forEach((ind) =>
    items.push({
      category: 'Industry',
      title: ind.name,
      description: ind.desc,
      href: '#industries',
    })
  )

  faqItems.forEach((f) =>
    items.push({
      category: 'FAQ',
      title: f.question,
      description: f.answer,
      href: '#faq',
    })
  )

  return items
}

export default function SearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('')
  const inputRef = useRef<HTMLInputElement>(null)
  const index = useMemo(() => buildIndex(), [])

  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return [] as SearchItem[]
    return index
      .filter(
        (item) =>
          item.title.toLowerCase().includes(q) ||
          item.description?.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
      )
      .slice(0, 10)
  }, [query, index])

  const closeAndReset = useCallback(() => {
    setQuery('')
    onClose()
  }, [onClose])

  useEffect(() => {
    if (open) {
      setTimeout(() => inputRef.current?.focus(), 50)
    }
  }, [open])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeAndReset()
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, closeAndReset])

  const handleSelect = (href: string) => {
    closeAndReset()
    setTimeout(() => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 100)
  }

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] flex items-start justify-center p-4 pt-[15vh] bg-black/70 backdrop-blur-sm"
          onClick={closeAndReset}
        >
          <motion.div
            initial={{ opacity: 0, y: -30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -30, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-xl"
          >
            <div className="relative gradient-border rounded-2xl">
              <div className="rounded-2xl bg-bg-card/95 backdrop-blur-xl overflow-hidden">
                <div className="flex items-center gap-3 px-5 py-4 border-b border-border">
                  <Search size={18} className="text-text-secondary shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    placeholder="Search services, case studies, FAQs..."
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    className="flex-1 bg-transparent text-text-primary placeholder:text-text-secondary focus:outline-none text-sm lg:text-base"
                  />
                  <kbd className="hidden sm:inline-flex items-center gap-1 px-1.5 py-0.5 rounded bg-bg-card-hover/60 border border-border text-xs text-text-secondary">
                    ESC
                  </kbd>
                  <button
                    onClick={closeAndReset}
                    aria-label="Close search"
                    className="sm:hidden text-text-secondary hover:text-text-primary"
                  >
                    <X size={18} />
                  </button>
                </div>

                <div className="max-h-[60vh] overflow-y-auto">
                  {!query && (
                    <div className="p-8 text-center text-sm text-text-secondary">
                      Start typing to search across services, case studies, industries, and FAQs.
                    </div>
                  )}
                  {query && results.length === 0 && (
                    <div className="p-8 text-center text-sm text-text-secondary">
                      No results for <span className="text-text-primary font-semibold">&ldquo;{query}&rdquo;</span>
                    </div>
                  )}
                  {results.length > 0 && (
                    <ul className="py-2">
                      {results.map((item, i) => (
                        <li key={`${item.title}-${i}`}>
                          <button
                            onClick={() => handleSelect(item.href)}
                            className="w-full flex items-start gap-3 px-5 py-3 hover:bg-bg-card-hover/40 text-left group transition-colors"
                          >
                            <Hash size={14} className="text-text-secondary mt-1 shrink-0" />
                            <div className="flex-1 min-w-0">
                              <p className="text-xs text-accent-primary mb-0.5">{item.category}</p>
                              <p className="text-sm font-medium text-text-primary truncate">{item.title}</p>
                              {item.description && (
                                <p className="text-xs text-text-secondary line-clamp-1 mt-0.5">{item.description}</p>
                              )}
                            </div>
                            <ArrowRight size={14} className="text-text-secondary opacity-0 group-hover:opacity-100 transition-opacity mt-1" />
                          </button>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                <div className="px-5 py-2.5 border-t border-border bg-bg-card-hover/30 flex items-center justify-between text-xs text-text-secondary">
                  <span>Press <kbd className="px-1 rounded bg-bg-card-hover/60 border border-border">↑↓</kbd> to navigate</span>
                  <span>{results.length > 0 && `${results.length} result${results.length === 1 ? '' : 's'}`}</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
