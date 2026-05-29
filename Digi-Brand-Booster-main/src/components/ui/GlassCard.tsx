import { cn } from '@/lib/utils'

export default function GlassCard({
  children,
  className,
  hover = true,
  as: Component = 'div',
}: {
  children: React.ReactNode
  className?: string
  hover?: boolean
  as?: React.ElementType
}) {
  return (
    <Component
      className={cn(
        'rounded-2xl bg-bg-card/40 backdrop-blur-xl border border-border shadow-lg shadow-black/20',
        hover && 'transition-all duration-300 hover:bg-bg-card-hover/60 hover:border-border hover:shadow-xl hover:shadow-black/30 hover:-translate-y-1',
        className
      )}
    >
      {children}
    </Component>
  )
}
