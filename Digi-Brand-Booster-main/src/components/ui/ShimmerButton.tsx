import { cn } from '@/lib/utils'

export default function ShimmerButton({
  children,
  href,
  variant = 'cta',
  size = 'lg',
  className,
  fullWidth = false,
  type,
  disabled,
  onClick,
}: {
  children: React.ReactNode
  href?: string
  variant?: 'cta' | 'primary' | 'outline'
  size?: 'md' | 'lg'
  className?: string
  fullWidth?: boolean
  type?: 'submit' | 'button'
  disabled?: boolean
  onClick?: () => void
}) {
  const baseStyles = cn(
    'relative inline-flex items-center justify-center font-semibold rounded-full overflow-hidden transition-all duration-300 hover:scale-105',
    size === 'lg' ? 'px-8 py-3.5 text-base' : 'px-6 py-2.5 text-sm',
    fullWidth && 'w-full',
    variant === 'cta' && 'bg-gradient-to-r from-accent-cta to-red-500 text-white hover:shadow-lg hover:shadow-amber-500/25',
    variant === 'primary' && 'bg-gradient-to-r from-accent-primary to-accent-secondary text-white hover:shadow-lg hover:shadow-blue-500/25',
    variant === 'outline' && 'border border-border text-text-primary hover:bg-white/[0.05] hover:border-white/[0.25]',
    disabled && 'opacity-60 pointer-events-none',
    className
  )

  const shimmer = (
    <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent hover:animate-[shimmer_1.5s_ease-in-out] pointer-events-none" />
  )

  if (href) {
    return (
      <a href={href} className={baseStyles}>
        {shimmer}
        {children}
      </a>
    )
  }

  return (
    <button type={type || 'button'} className={baseStyles} disabled={disabled} onClick={onClick}>
      {shimmer}
      {children}
    </button>
  )
}
