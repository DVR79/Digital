import Link from 'next/link'
import { Home } from 'lucide-react'

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative overflow-hidden">
      <div className="absolute top-20 -left-32 w-[500px] h-[500px] rounded-full bg-accent-primary/20 blur-[120px]" />
      <div className="absolute bottom-0 -right-32 w-[500px] h-[500px] rounded-full bg-accent-secondary/20 blur-[120px]" />

      <div className="relative text-center max-w-md">
        <h1 className="text-8xl lg:text-9xl font-bold font-heading gradient-text mb-4">404</h1>
        <h2 className="text-2xl lg:text-3xl font-bold font-heading mb-3">Looks like this page went viral and disappeared</h2>
        <p className="text-text-secondary mb-8">
          The page you&apos;re looking for can&apos;t be found. Let&apos;s get you back on the growth track.
        </p>
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-accent-primary to-accent-secondary text-white font-semibold hover:scale-105 transition-transform"
        >
          <Home size={18} />
          Back to Home
        </Link>
      </div>
    </div>
  )
}
