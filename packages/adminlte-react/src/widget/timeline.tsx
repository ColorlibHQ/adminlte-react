import type { BootstrapTheme } from '../types/theme'

export interface TimelineItem {
  time: string
  icon?: string
  iconTheme?: BootstrapTheme
  title: string
  body?: React.ReactNode
  footer?: React.ReactNode
  url?: string
}

export interface TimelineProps {
  items: TimelineItem[]
  className?: string
}

export function Timeline({ items, className }: TimelineProps) {
  return (
    <div className={`timeline ${className || ''}`}>
      {items.map((item, idx) => (
        <div key={idx} className="timeline-item">
          {item.icon && (
            <span className={`timeline-icon bg-${item.iconTheme || 'primary'}`}>
              <i className={`bi ${item.icon}`}></i>
            </span>
          )}
          <div className="timeline-content">
            <h3 className="timeline-header">{item.title}</h3>
            {item.body && <p>{item.body}</p>}
            {item.footer && <div className="timeline-footer">{item.footer}</div>}
            <div className="timeline-time">{item.time}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
