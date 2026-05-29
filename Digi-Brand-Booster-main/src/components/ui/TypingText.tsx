'use client'

import { useEffect, useState } from 'react'

export default function TypingText({ texts, className }: { texts: string[]; className?: string }) {
  const [textIndex, setTextIndex] = useState(0)
  const [displayed, setDisplayed] = useState('')
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const current = texts[textIndex]
    const timeout = setTimeout(() => {
      if (!deleting) {
        setDisplayed(current.slice(0, displayed.length + 1))
        if (displayed.length + 1 === current.length) {
          setTimeout(() => setDeleting(true), 1800)
        }
      } else {
        setDisplayed(current.slice(0, displayed.length - 1))
        if (displayed.length - 1 === 0) {
          setDeleting(false)
          setTextIndex((prev) => (prev + 1) % texts.length)
        }
      }
    }, deleting ? 40 : 80)
    return () => clearTimeout(timeout)
  }, [displayed, deleting, textIndex, texts])

  return (
    <span className={className}>
      {displayed}
      <span className="inline-block w-[2px] h-[0.9em] align-middle bg-accent-secondary ml-1 animate-pulse" />
    </span>
  )
}
