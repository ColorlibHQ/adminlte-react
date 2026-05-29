import { AppContent } from 'adminlte-react'
import { KanbanBoard } from '@/components/kanban-board'

export default function KanbanPage() {
  return (
    <AppContent
      title="Kanban Board"
      breadcrumbs={[
        { label: 'Home', href: '#' },
        { label: 'Kanban' },
      ]}
    >
      <KanbanBoard />
    </AppContent>
  )
}
