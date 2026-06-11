'use client'

import type { BootstrapTheme } from '../types/theme'
import { useCardWidget } from '../hooks/use-card-widget'

export interface CardProps {
  title?: string
  icon?: string
  theme?: BootstrapTheme
  /**
   * Color treatment when `theme` is set:
   * - 'default' → colored header (`card card-{theme}`)
   * - 'outline' → colored top border (`card card-outline card-{theme}`)
   * - 'solid'   → fully colored card (`card text-bg-{theme}`)
   */
  variant?: 'default' | 'outline' | 'solid'
  /** @deprecated use `variant="outline"` */
  outline?: boolean
  collapsible?: boolean
  defaultCollapsed?: boolean
  removable?: boolean
  /** Called after the card removes itself via the remove tool button */
  onRemove?: () => void
  maximizable?: boolean
  bodyClass?: string
  headerClass?: string
  footerClass?: string
  tools?: React.ReactNode
  footer?: React.ReactNode
  children: React.ReactNode
  className?: string
}

export function Card({
  title,
  icon,
  theme,
  variant = 'default',
  outline,
  collapsible,
  defaultCollapsed,
  removable,
  onRemove,
  maximizable,
  bodyClass,
  headerClass,
  footerClass,
  tools,
  footer,
  children,
  className,
}: CardProps) {
  const { isCollapsed, isRemoved, toggleCollapse, toggleMaximize, remove } = useCardWidget(
    defaultCollapsed
  )

  if (isRemoved) return null

  const resolvedVariant = outline ? 'outline' : variant
  let cardClass = 'card'
  if (theme) {
    if (resolvedVariant === 'outline') cardClass = `card card-outline card-${theme}`
    else if (resolvedVariant === 'solid') cardClass = `card text-bg-${theme}`
    else cardClass = `card card-${theme}`
  }

  return (
    <div className={`${cardClass}${isCollapsed ? ' collapsed-card' : ''} ${className || ''}`}>
      {(title || tools) && (
        <div className={`card-header ${headerClass || ''}`}>
          <h3 className="card-title">{title || ''}</h3>
          <div className="card-tools">
            {(collapsible || removable || maximizable) && (
              <>
                {collapsible && (
                  <button
                    type="button"
                    className="btn btn-tool"
                    onClick={toggleCollapse}
                    title={isCollapsed ? 'Expand' : 'Collapse'}
                  >
                    <i className={`bi ${isCollapsed ? 'bi-plus-lg' : 'bi-dash-lg'}`}></i>
                  </button>
                )}
                {removable && (
                  <button
                    type="button"
                    className="btn btn-tool"
                    onClick={() => {
                      remove()
                      onRemove?.()
                    }}
                    title="Remove"
                  >
                    <i className="bi bi-x-lg"></i>
                  </button>
                )}
                {maximizable && (
                  <button
                    type="button"
                    className="btn btn-tool"
                    onClick={toggleMaximize}
                    title="Maximize"
                  >
                    <i className="bi bi-fullscreen"></i>
                  </button>
                )}
              </>
            )}
            {tools}
          </div>
        </div>
      )}
      {!isCollapsed && (
        <>
          <div className={`card-body ${bodyClass || ''}`}>{children}</div>
          {footer && <div className={`card-footer ${footerClass || ''}`}>{footer}</div>}
        </>
      )}
    </div>
  )
}
