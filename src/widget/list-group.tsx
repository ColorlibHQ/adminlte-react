import type { BootstrapTheme } from '../types/theme'
import { cn } from '../lib/class-name'

export interface ListGroupProps {
  /** Remove the outer border/rounding (for use inside a card). */
  flush?: boolean
  /** Lay items out horizontally. */
  horizontal?: boolean
  className?: string
  children: React.ReactNode
}

/** Bootstrap list group container. */
export function ListGroup({ flush, horizontal, className, children }: ListGroupProps) {
  return (
    <div
      className={cn(
        'list-group',
        flush && 'list-group-flush',
        horizontal && 'list-group-horizontal',
        className
      )}
    >
      {children}
    </div>
  )
}

export interface ListGroupItemProps {
  active?: boolean
  disabled?: boolean
  /** Render as an interactive action (hover/focus styles). Implied by `href`/`onClick`. */
  action?: boolean
  theme?: BootstrapTheme
  href?: string
  onClick?: () => void
  className?: string
  children: React.ReactNode
}

/** A single list group item — `<a>`, `<button>` or `<div>` depending on its props. */
export function ListGroupItem({
  active,
  disabled,
  action,
  theme,
  href,
  onClick,
  className,
  children,
}: ListGroupItemProps) {
  const isAction = action || !!href || !!onClick
  const classes = cn(
    'list-group-item',
    isAction && 'list-group-item-action',
    active && 'active',
    disabled && 'disabled',
    theme && `list-group-item-${theme}`,
    className
  )

  if (href) {
    return (
      <a href={href} className={classes} aria-current={active ? 'true' : undefined} aria-disabled={disabled}>
        {children}
      </a>
    )
  }
  if (onClick) {
    return (
      <button type="button" className={classes} onClick={onClick} disabled={disabled}>
        {children}
      </button>
    )
  }
  return (
    <div className={classes} aria-current={active ? 'true' : undefined}>
      {children}
    </div>
  )
}
