import type { BootstrapTheme } from '../types/theme'

export interface SmallBoxProps {
  title: React.ReactNode
  text?: string
  icon?: React.ReactNode
  theme?: BootstrapTheme
  url?: string
  urlText?: string
}

// Light backgrounds need dark link text for contrast
const DARK_LINK_THEMES: BootstrapTheme[] = ['warning', 'light']

export function SmallBox({
  title,
  text,
  icon,
  theme = 'primary',
  url,
  urlText = 'More info',
}: SmallBoxProps) {
  const linkColor = DARK_LINK_THEMES.includes(theme) ? 'link-dark' : 'link-light'

  return (
    <div className={`small-box text-bg-${theme}`}>
      <div className="inner">
        <h3>{title}</h3>
        {text && <p>{text}</p>}
      </div>
      {icon}
      {url && (
        <a
          href={url}
          className={`small-box-footer ${linkColor} link-underline-opacity-0 link-underline-opacity-50-hover`}
        >
          {urlText} <i className="bi bi-link-45deg"></i>
        </a>
      )}
    </div>
  )
}
