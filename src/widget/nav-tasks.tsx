'use client'

import type { BootstrapTheme } from '../types/theme'

export interface NavTask {
  text: string
  progress: number
  color?: BootstrapTheme
  url?: string
}

export interface NavTasksProps {
  tasks: NavTask[]
  badgeColor?: BootstrapTheme
  seeAllUrl?: string
  seeAllText?: string
}

export function NavTasks({
  tasks,
  badgeColor = 'warning',
  seeAllUrl,
  seeAllText = 'See All Tasks',
}: NavTasksProps) {
  return (
    <li className="nav-item dropdown">
      <a className="nav-link" href="#" data-bs-toggle="dropdown">
        <i className="bi bi-flag-fill"></i>
        {tasks.length > 0 && (
          <span className={`navbar-badge badge text-bg-${badgeColor}`}>{tasks.length}</span>
        )}
      </a>
      <div className="dropdown-menu dropdown-menu-lg dropdown-menu-end">
        <span className="dropdown-item dropdown-header">{tasks.length} Tasks</span>
        <div className="dropdown-divider"></div>
        {tasks.map((task, idx) => (
          <div key={idx}>
            {task.url ? (
              <a href={task.url} className="dropdown-item">
                <div className="d-flex align-items-center">
                  <span className="flex-grow-1">{task.text}</span>
                  <span className="fs-7">{task.progress}%</span>
                </div>
                <div className="progress">
                  <div
                    className={`progress-bar bg-${task.color || 'primary'}`}
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </a>
            ) : (
              <div className="dropdown-item">
                <div className="d-flex align-items-center">
                  <span className="flex-grow-1">{task.text}</span>
                  <span className="fs-7">{task.progress}%</span>
                </div>
                <div className="progress">
                  <div
                    className={`progress-bar bg-${task.color || 'primary'}`}
                    style={{ width: `${task.progress}%` }}
                  ></div>
                </div>
              </div>
            )}
            <div className="dropdown-divider"></div>
          </div>
        ))}
        {seeAllUrl && <a href={seeAllUrl} className="dropdown-item dropdown-footer">{seeAllText}</a>}
      </div>
    </li>
  )
}
