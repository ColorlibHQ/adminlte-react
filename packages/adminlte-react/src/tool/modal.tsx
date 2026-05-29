'use client'

import type { BootstrapTheme, ComponentSize } from '../types/theme'

export interface ModalProps {
  id: string
  title?: string
  size?: ComponentSize | 'xl'
  theme?: BootstrapTheme
  staticBackdrop?: boolean
  scrollable?: boolean
  centered?: boolean
  footer?: React.ReactNode
  children: React.ReactNode
  onShow?: () => void
  onHide?: () => void
}

export function Modal({
  id,
  title,
  size,
  theme,
  staticBackdrop,
  scrollable,
  centered,
  footer,
  children,
}: ModalProps) {
  const sizeClass = size ? `modal-${size}` : ''
  const scrollClass = scrollable ? 'modal-dialog-scrollable' : ''
  const centeredClass = centered ? 'modal-dialog-centered' : ''

  return (
    <div className="modal fade" id={id} tabIndex={-1}>
      <div className={`modal-dialog ${sizeClass} ${scrollClass} ${centeredClass}`.trim()}>
        <div className={`modal-content ${theme ? `text-bg-${theme}` : ''}`.trim()}>
          {title && (
            <div className="modal-header">
              <h5 className="modal-title">{title}</h5>
              <button type="button" className="btn-close" data-bs-dismiss="modal"></button>
            </div>
          )}
          <div className="modal-body">{children}</div>
          {footer && <div className="modal-footer">{footer}</div>}
        </div>
      </div>
    </div>
  )
}
