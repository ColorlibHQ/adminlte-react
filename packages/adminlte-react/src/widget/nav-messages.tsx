'use client'

import type { BootstrapTheme } from '../types/theme'

export interface NavMessage {
  from: string
  text: string
  image?: string
  url?: string
  time?: string
  star?: BootstrapTheme
}

export interface NavMessagesProps {
  messages: NavMessage[]
  badgeColor?: BootstrapTheme
  count?: number | string
  seeAllUrl?: string
  seeAllText?: string
}

export function NavMessages({
  messages,
  badgeColor = 'danger',
  count,
  seeAllUrl = '#',
  seeAllText = 'See All Messages',
}: NavMessagesProps) {
  const badgeCount = count ?? messages.length

  return (
    <li className="nav-item dropdown">
      <a className="nav-link" data-bs-toggle="dropdown" href="#">
        <i className="bi bi-chat-text"></i>
        {messages.length > 0 && (
          <span className={`navbar-badge badge text-bg-${badgeColor}`}>{badgeCount}</span>
        )}
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
        {messages.map((msg, idx) => (
          <div key={idx}>
            <a href={msg.url || '#'} className="dropdown-item">
              <div className="d-flex">
                {msg.image && (
                  <div className="flex-shrink-0">
                    <img
                      src={msg.image}
                      alt={msg.from}
                      className="img-size-50 rounded-circle me-3"
                    />
                  </div>
                )}
                <div className="flex-grow-1">
                  <h3 className="dropdown-item-title">
                    {msg.from}
                    {msg.star && (
                      <span className={`float-end fs-7 text-${msg.star}`}>
                        <i className="bi bi-star-fill"></i>
                      </span>
                    )}
                  </h3>
                  <p className="fs-7">{msg.text}</p>
                  {msg.time && (
                    <p className="fs-7 text-secondary">
                      <i className="bi bi-clock-fill me-1"></i> {msg.time}
                    </p>
                  )}
                </div>
              </div>
            </a>
            <div className="dropdown-divider"></div>
          </div>
        ))}
        <a href={seeAllUrl} className="dropdown-item dropdown-footer">
          {seeAllText}
        </a>
      </div>
    </li>
  )
}
