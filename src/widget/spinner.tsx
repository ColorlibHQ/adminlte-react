import type { BootstrapTheme } from '../types/theme'
import { cn } from '../lib/class-name'

export interface SpinnerProps {
  theme?: BootstrapTheme
  /** `border` (default) or `grow`. */
  variant?: 'border' | 'grow'
  small?: boolean
  /** Visually-hidden status text for screen readers. */
  label?: string
  className?: string
}

/** Bootstrap loading spinner with an accessible status label. */
export function Spinner({
  theme,
  variant = 'border',
  small,
  label = 'Loading…',
  className,
}: SpinnerProps) {
  return (
    <div
      className={cn(
        `spinner-${variant}`,
        small && `spinner-${variant}-sm`,
        theme && `text-${theme}`,
        className
      )}
      role="status"
    >
      <span className="visually-hidden">{label}</span>
    </div>
  )
}
