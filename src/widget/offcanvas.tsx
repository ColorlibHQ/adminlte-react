import type { BootstrapTheme, ComponentSize } from '../types/theme'
import { cn } from '../lib/class-name'

export interface OffcanvasProps {
  /** Required: unique id; triggers reference it via `target`. */
  id: string
  title?: React.ReactNode
  placement?: 'start' | 'end' | 'top' | 'bottom'
  /** Allow body scroll while open. */
  scroll?: boolean
  /** Show a backdrop (default true). */
  backdrop?: boolean
  footer?: React.ReactNode
  className?: string
  children: React.ReactNode
}

/**
 * Bootstrap offcanvas panel (driven by the Bootstrap JS bundle). Pair with an
 * `OffcanvasTrigger` (or any element with `data-bs-toggle="offcanvas"`).
 */
export function Offcanvas({
  id,
  title,
  placement = 'start',
  scroll,
  backdrop = true,
  footer,
  className,
  children,
}: OffcanvasProps) {
  return (
    <div
      className={cn(`offcanvas offcanvas-${placement}`, className)}
      tabIndex={-1}
      id={id}
      aria-labelledby={`${id}-label`}
      data-bs-scroll={scroll ? 'true' : undefined}
      data-bs-backdrop={backdrop ? undefined : 'false'}
    >
      <div className="offcanvas-header">
        {title && (
          <h5 className="offcanvas-title" id={`${id}-label`}>
            {title}
          </h5>
        )}
        <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close" />
      </div>
      <div className="offcanvas-body">{children}</div>
      {footer && <div className="offcanvas-header border-top">{footer}</div>}
    </div>
  )
}

export interface OffcanvasTriggerProps {
  /** The `id` of the Offcanvas to open. */
  target: string
  theme?: BootstrapTheme
  variant?: 'solid' | 'outline'
  size?: ComponentSize
  className?: string
  children: React.ReactNode
}

/** A button that opens the Offcanvas with the matching `target` id. */
export function OffcanvasTrigger({
  target,
  theme = 'primary',
  variant = 'solid',
  size,
  className,
  children,
}: OffcanvasTriggerProps) {
  return (
    <button
      type="button"
      className={cn(
        'btn',
        variant === 'outline' ? `btn-outline-${theme}` : `btn-${theme}`,
        size && `btn-${size}`,
        className
      )}
      data-bs-toggle="offcanvas"
      data-bs-target={`#${target}`}
      aria-controls={target}
    >
      {children}
    </button>
  )
}
