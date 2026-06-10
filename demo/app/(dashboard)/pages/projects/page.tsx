import { AppContent } from '@colorlib/adminlte-react'
import { getProjects } from '@/lib/projects-data'
import { ProjectsTable } from '@/components/projects-table'

export const metadata = { title: 'Projects' }

// Async React Server Component — data is fetched on the server; the interactive
// table below (client component) handles search / status filter / sort / pagination.
export default async function Page() {
  const projects = await getProjects()
  const onTrack = projects.filter(p => p.status === 'On track').length
  const atRisk = projects.filter(p => p.status === 'At risk' || p.status === 'Delayed').length
  const completed = projects.filter(p => p.status === 'Completed').length

  const summary = [
    { label: 'Active projects', value: projects.length, theme: '' },
    { label: 'On track', value: onTrack, theme: 'text-success' },
    { label: 'At risk / delayed', value: atRisk, theme: 'text-warning' },
    { label: 'Completed', value: completed, theme: 'text-secondary' },
  ]

  return (
    <AppContent title="Projects" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Projects' }]}>
      <div className="row g-3 mb-3">
        {summary.map(s => (
          <div className="col-md-3 col-6" key={s.label}>
            <div className="card h-100">
              <div className="card-body">
                <p className="text-secondary small mb-1">{s.label}</p>
                <h3 className={`mb-0 fw-bold ${s.theme}`}>{s.value}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>

      <ProjectsTable projects={projects} />
    </AppContent>
  )
}
