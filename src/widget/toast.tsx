'use client'

import { useEffect } from 'react'
import type { BootstrapTheme } from '../types/theme'

export interface ToastProps {
  show: boolean
  onClose: () => void
  title?: string
  theme?: BootstrapTheme
  /** Auto-dismiss after this many ms; 0 disables. */
  autohideMs?: number
  children: React.ReactNode
}

/**
 * Controlled Bootstrap toast (no Bootstrap JS). Render inside a
 * `.toast-container` to position it. Auto-dismisses unless `autohideMs={0}`.
 */
export function Toast({ show, onClose, title, theme, autohideMs = 4000, children }: ToastProps) {
  useEffect(() => {
    if (!show || !autohideMs) return
    const t = setTimeout(onClose, autohideMs)
    return () => clearTimeout(t)
  }, [show, autohideMs, onClose])

  if (!show) return null

  return (
    <div
      className={`toast show${theme ? ` text-bg-${theme} border-0` : ''}`}
      role="alert"
      aria-live="assertive"
      aria-atomic="true"
    >
      {title && (
        <div className="toast-header">
          <strong className="me-auto">{title}</strong>
          <button type="button" className="btn-close" aria-label="Close" onClick={onClose}></button>
        </div>
      )}
      <div className="d-flex">
        <div className="toast-body">{children}</div>
        {!title && (
          <button
            type="button"
            className={`btn-close me-2 m-auto${theme ? ' btn-close-white' : ''}`}
            aria-label="Close"
            onClick={onClose}
          ></button>
        )}
      </div>
    </div>
  )
}
