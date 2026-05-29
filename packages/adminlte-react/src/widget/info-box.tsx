import type { BootstrapTheme } from '../types/theme'

export interface InfoBoxProps {
  title?: string
  text?: string
  icon?: string
  theme?: BootstrapTheme
  progress?: number
  progressText?: string
}

export function InfoBox({
  title,
  text,
  icon,
  theme = 'info',
  progress,
  progressText,
}: InfoBoxProps) {
  return (
    <div className="info-box">
      {icon && (
        <span className={`info-box-icon text-bg-${theme}`}>
          <i className={`bi ${icon}`}></i>
        </span>
      )}
      <div className="info-box-content">
        {text && <span className="info-box-text">{text}</span>}
        {title && <span className="info-box-number">{title}</span>}
        {progress !== undefined && (
          <>
            <div className="progress">
              <div className={`progress-bar bg-${theme}`} style={{ width: `${progress}%` }}></div>
            </div>
            {progressText && <span className="progress-description">{progressText}</span>}
          </>
        )}
      </div>
    </div>
  )
}
