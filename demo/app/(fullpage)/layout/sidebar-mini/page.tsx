import { AppContent, Card } from '@colorlib/adminlte-react'
import { DemoLayout } from '@/components/demo-layout'

export const metadata = { title: "Sidebar Mini" }

export default function Page() {
  return (
    <DemoLayout sidebarMini>
      <AppContent title="Sidebar Mini" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Sidebar Mini' }]}>
        {/* Row */}
        <div className="row">
          <div className="col-12">
            {/* Default box */}
            <Card title="Title" collapsible removable footer="Footer">
              Start creating your amazing application!
            </Card>
          </div>
        </div>
      </AppContent>
    </DemoLayout>
  )
}
