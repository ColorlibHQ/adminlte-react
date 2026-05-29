'use client'

import type { BootstrapTheme } from '../types/theme'

export interface NavNotification {
  text: string
  icon?: string
  time?: string
  url?: string
}

export interface NavNotificationsProps {
  notifications: NavNotification[]
  badgeColor?: BootstrapTheme
  count?: number | string
  seeAllUrl?: string
  seeAllText?: string
}

export function NavNotifications({
  notifications,
  badgeColor = 'danger',
  count,
  seeAllUrl,
  seeAllText = 'See All Notifications',
}: NavNotificationsProps) {
  const badgeCount = count ?? notifications.length

  return (
    <li className="nav-item dropdown">
      <a className="nav-link" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-bell-fill"></i>
        {notifications.length > 0 && (
          <span className={`navbar-badge badge text-bg-${badgeColor}`}>{badgeCount}</span>
        )}
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
        <span className="dropdown-item dropdown-header">{badgeCount} Notifications</span>
        <div className="dropdown-divider"></div>
        {notifications.map((notif, idx) => (
          <div key={idx}>
            {notif.url ? (
              <a href={notif.url} className="dropdown-item">
                {notif.icon && <i className={`bi ${notif.icon} me-2`}></i>}
                <span>{notif.text}</span>
                {notif.time && <span className="float-end text-secondary fs-7">{notif.time}</span>}
              </a>
            ) : (
              <div className="dropdown-item">
                {notif.icon && <i className={`bi ${notif.icon} me-2`}></i>}
                <span>{notif.text}</span>
                {notif.time && <span className="float-end text-secondary fs-7">{notif.time}</span>}
              </div>
            )}
            <div className="dropdown-divider"></div>
          </div>
        ))}
        {seeAllUrl && (
          <a href={seeAllUrl} className="dropdown-item dropdown-footer">
            {seeAllText}
          </a>
        )}
      </div>
    </li>
  )
}
