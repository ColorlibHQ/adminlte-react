import type { BootstrapTheme } from '../types/theme'
import { cn } from '../lib/class-name'

export interface BadgeProps {
  theme?: BootstrapTheme
  /** Fully rounded "pill" shape. */
  pill?: boolean
  /** Position the badge over a parent (parent needs `position-relative`). */
  positioned?: boolean
  className?: string
  children: React.ReactNode
}

/** Bootstrap badge with a contrast-aware `text-bg-*` background. */
export function Badge({ theme = 'secondary', pill, positioned, className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        'badge',
        `text-bg-${theme}`,
        pill && 'rounded-pill',
        positioned && 'position-absolute top-0 start-100 translate-middle',
        className
      )}
    >
      {children}
    </span>
  )
}
