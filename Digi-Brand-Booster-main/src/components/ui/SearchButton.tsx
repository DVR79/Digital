'use client'

import { useEffect, useState } from 'react'
import { Search } from 'lucide-react'
import SearchModal from './SearchModal'

export default function SearchButton() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault()
        setOpen(true)
      }
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        aria-label="Search"
        className="inline-flex items-center gap-2 px-3 lg:px-4 h-10 rounded-full glass text-sm text-text-secondary hover:text-text-primary hover:border-accent-primary/30 transition-colors"
      >
        <Search size={14} />
        <span className="hidden lg:inline">Search...</span>
        <kbd className="hidden lg:inline-flex items-center gap-0.5 px-1.5 py-0.5 rounded bg-bg-card-hover/60 border border-border text-[10px] font-medium">
          Ctrl K
        </kbd>
      </button>
      <SearchModal open={open} onClose={() => setOpen(false)} />
    </>
  )
}
