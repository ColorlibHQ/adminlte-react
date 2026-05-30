'use client'

import { useState } from 'react'

export interface TooltipProps {
  title: string
  placement?: 'top' | 'bottom' | 'left' | 'right'
  children: React.ReactNode
}

const POS: Record<string, { cls: string; style: React.CSSProperties }> = {
  top: { cls: 'bs-tooltip-top', style: { bottom: '100%', left: '50%', transform: 'translateX(-50%)', marginBottom: 6 } },
  bottom: { cls: 'bs-tooltip-bottom', style: { top: '100%', left: '50%', transform: 'translateX(-50%)', marginTop: 6 } },
  left: { cls: 'bs-tooltip-start', style: { right: '100%', top: '50%', transform: 'translateY(-50%)', marginRight: 6 } },
  right: { cls: 'bs-tooltip-end', style: { left: '100%', top: '50%', transform: 'translateY(-50%)', marginLeft: 6 } },
}

/**
 * Lightweight tooltip driven by hover/focus state (no Bootstrap JS / Popper).
 * Uses Bootstrap's `.tooltip` styles; positions the bubble with inline styles.
 */
export function Tooltip({ title, placement = 'top', children }: TooltipProps) {
  const [show, setShow] = useState(false)
  const { cls, style } = POS[placement]

  return (
    <span
      style={{ position: 'relative', display: 'inline-block' }}
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
    >
      {children}
      {show && (
        <span className={`tooltip ${cls} show`} role="tooltip" style={{ position: 'absolute', zIndex: 1080, ...style }}>
          <span className="tooltip-inner">{title}</span>
        </span>
      )}
    </span>
  )
}
