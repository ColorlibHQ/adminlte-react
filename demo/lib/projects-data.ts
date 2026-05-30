import type { BootstrapTheme } from 'adminlte-react'

export interface ProjectMember {
  initials: string
  theme: BootstrapTheme
}

export interface Project {
  name: string
  client: string
  status: 'On track' | 'At risk' | 'Delayed' | 'Completed'
  statusTheme: BootstrapTheme
  progress: number
  progressTheme: BootstrapTheme
  team: ProjectMember[]
  budget: string
  due: string
  priority: 'High' | 'Medium' | 'Low'
  priorityTheme: BootstrapTheme
}

const PROJECTS: Project[] = [
  {
    name: 'AdminLTE 4 Release', client: 'Internal', status: 'On track', statusTheme: 'success',
    progress: 78, progressTheme: 'primary',
    team: [{ initials: 'JD', theme: 'primary' }, { initials: 'OB', theme: 'info' }, { initials: 'DM', theme: 'success' }],
    budget: '$24,500', due: 'Jun 14, 2026', priority: 'High', priorityTheme: 'danger',
  },
  {
    name: 'Marketing Site Redesign', client: 'Acme Corp', status: 'At risk', statusTheme: 'warning',
    progress: 42, progressTheme: 'info',
    team: [{ initials: 'OB', theme: 'info' }, { initials: 'MR', theme: 'warning' }],
    budget: '$48,000', due: 'Jul 02, 2026', priority: 'High', priorityTheme: 'danger',
  },
  {
    name: 'Mobile App v2', client: 'Nimbus Labs', status: 'On track', statusTheme: 'success',
    progress: 61, progressTheme: 'primary',
    team: [{ initials: 'LC', theme: 'primary' }, { initials: 'ED', theme: 'danger' }, { initials: 'AF', theme: 'secondary' }, { initials: 'SK', theme: 'info' }],
    budget: '$92,500', due: 'Aug 18, 2026', priority: 'Medium', priorityTheme: 'info',
  },
  {
    name: 'Analytics Pipeline', client: 'Internal', status: 'Delayed', statusTheme: 'danger',
    progress: 22, progressTheme: 'warning',
    team: [{ initials: 'DM', theme: 'success' }],
    budget: '$12,000', due: 'May 30, 2026', priority: 'Medium', priorityTheme: 'info',
  },
  {
    name: 'Brand Style Guide', client: 'Riverhaus', status: 'Completed', statusTheme: 'secondary',
    progress: 100, progressTheme: 'success',
    team: [{ initials: 'OB', theme: 'info' }, { initials: 'ED', theme: 'danger' }],
    budget: '$8,200', due: 'May 09, 2026', priority: 'Low', priorityTheme: 'secondary',
  },
  {
    name: 'Onboarding Email Flow', client: 'Acme Corp', status: 'On track', statusTheme: 'success',
    progress: 55, progressTheme: 'info',
    team: [{ initials: 'MR', theme: 'warning' }, { initials: 'JD', theme: 'primary' }],
    budget: '$6,800', due: 'Jun 22, 2026', priority: 'Low', priorityTheme: 'secondary',
  },
]

/**
 * Async data source for the Projects page. Demonstrates the React Server
 * Component pattern: an `async` server function the page awaits at request/
 * build time. In a real app this is where you'd `await fetch(...)` or query a DB.
 */
export async function getProjects(): Promise<Project[]> {
  return PROJECTS
}
