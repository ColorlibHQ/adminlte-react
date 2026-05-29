'use client'

import { useSidebarContext } from '../context/sidebar-context'
import { useFullscreen } from '../hooks/use-fullscreen'
import { useCommandPalette } from '../context/command-palette-context'
import { ColorModeToggle } from './color-mode-toggle'
import type { TopbarUser } from '../types/layout'

const DEFAULT_USER: TopbarUser = {
  name: 'Alexander Pierce',
  image: '/assets/img/user2-160x160.jpg',
  role: 'Web Developer',
  memberSince: 'Nov. 2023',
}

export interface TopbarProps {
  start?: React.ReactNode
  end?: React.ReactNode
  colorModeToggle?: boolean
  search?: boolean
  fullscreen?: boolean
  user?: TopbarUser
  navbarClass?: string
}

function FullscreenToggle() {
  const { isFullscreen, toggleFullscreen } = useFullscreen()

  return (
    <li className="nav-item">
      <button
        type="button"
        className="nav-link"
        onClick={toggleFullscreen}
        title={isFullscreen ? 'Exit fullscreen' : 'Fullscreen'}
      >
        <i className={`bi ${isFullscreen ? 'bi-fullscreen-exit' : 'bi-arrows-fullscreen'}`}></i>
      </button>
    </li>
  )
}

export function Topbar({
  start,
  end,
  colorModeToggle,
  search = true,
  fullscreen = true,
  user = DEFAULT_USER,
  navbarClass,
}: TopbarProps) {
  const { toggle } = useSidebarContext()
  const commandPalette = useCommandPalette()

  return (
    <nav className={`app-header navbar navbar-expand bg-body ${navbarClass || ''}`.trim()}>
      <div className="container-fluid">
        <ul className="navbar-nav">
          <li className="nav-item">
            <button
              type="button"
              className="nav-link"
              onClick={toggle}
              title="Toggle sidebar"
            >
              <i className="bi bi-list"></i>
            </button>
          </li>
          {start}
        </ul>

        <ul className="navbar-nav ms-auto">
          {search && (
            <li className="nav-item d-flex align-items-center me-2">
              <button
                type="button"
                className="btn btn-sm rounded-pill border bg-body-secondary text-secondary d-inline-flex align-items-center gap-2 px-3"
                title="Search (⌘K)"
                onClick={() => commandPalette?.open()}
              >
                <i className="bi bi-search"></i>
                <span className="d-none d-md-inline">Search</span>
                <kbd className="d-none d-md-inline border rounded px-1 ms-1 fs-7 bg-body text-body-secondary">
                  ⌘K
                </kbd>
              </button>
            </li>
          )}

          {end}

          {fullscreen && <FullscreenToggle />}

          {colorModeToggle && <ColorModeToggle />}

          <li className="nav-item dropdown user-menu">
            <button
              type="button"
              className="nav-link dropdown-toggle d-flex align-items-center"
              data-bs-toggle="dropdown"
            >
              <img
                src={user.image}
                alt={user.name}
                className="user-image rounded-circle shadow"
                width="32"
                height="32"
              />
              <span className="d-none d-md-inline ms-2">{user.name}</span>
            </button>
            <ul className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
              <li className="user-header text-bg-primary">
                <img
                  src={user.image}
                  alt={user.name}
                  className="rounded-circle shadow"
                  width="80"
                  height="80"
                />
                <p>
                  {user.name}{user.role ? ` - ${user.role}` : ''}
                  {user.memberSince && <small>Member since {user.memberSince}</small>}
                </p>
              </li>
              <li className="user-body">
                <div className="row">
                  <div className="col-4 text-center">
                    <a href="#">Followers</a>
                  </div>
                  <div className="col-4 text-center">
                    <a href="#">Sales</a>
                  </div>
                  <div className="col-4 text-center">
                    <a href="#">Friends</a>
                  </div>
                </div>
              </li>
              <li className="user-footer">
                <a href="#" className="btn btn-outline-secondary">Profile</a>
                <a href="#" className="btn btn-outline-danger float-end">Sign out</a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  )
}
