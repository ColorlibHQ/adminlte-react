import { AppContent, Card } from 'adminlte-react'
import { DemoLayout } from '@/components/demo-layout'

export default function Page() {
  return (
    <DemoLayout sidebarMini>
      <AppContent title="Sidebar Mini + Logo Switch" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Sidebar Mini + Logo Switch' }]}>
        {/* Default box */}
        <div className="row">
          <div className="col-12">
            <Card title="Title" collapsible removable footer="Footer">
              Start creating your amazing application!
            </Card>
          </div>
        </div>
      </AppContent>
    </DemoLayout>
  )
}
