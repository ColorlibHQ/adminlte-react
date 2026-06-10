import { Card, AppContent } from '@colorlib/adminlte-react'

const abilities = [
  { theme: 'primary' as const, title: 'Expandable', collapsible: true, defaultCollapsed: true },
  { theme: 'success' as const, title: 'Collapsable', collapsible: true },
  { theme: 'warning' as const, title: 'Removable', removable: true },
  { theme: 'danger' as const, title: 'Maximizable', maximizable: true },
]

function CardRow({ variant }: { variant: 'default' | 'outline' | 'solid' }) {
  return (
    <div className="row g-4 mb-4">
      {abilities.map((a) => (
        <div key={a.title} className="col-md-3">
          <Card
            theme={a.theme}
            variant={variant}
            title={a.title}
            collapsible={a.collapsible}
            defaultCollapsed={a.defaultCollapsed}
            removable={a.removable}
            maximizable={a.maximizable}
          >
            The body of the card
          </Card>
        </div>
      ))}
    </div>
  )
}

export const metadata = { title: "Cards" }

export default function CardsPage() {
  return (
    <AppContent
      title="Cards"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Cards' },
      ]}
    >
      <h4 className="mb-2">Cards</h4>

      <h5 className="mb-2">Abilities</h5>
      <CardRow variant="default" />

      <h5 className="mb-2">Card Outlined</h5>
      <CardRow variant="outline" />

      <h5 className="mb-2">
        Card with <code>.text-bg-*</code>
      </h5>
      <CardRow variant="solid" />
    </AppContent>
  )
}
