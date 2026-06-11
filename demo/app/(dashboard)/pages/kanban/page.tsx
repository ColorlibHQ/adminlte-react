import { AppContent } from '@adminlte/react'
import { KanbanBoard } from '@/components/kanban-board'

export const metadata = { title: "Kanban Board" }

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
