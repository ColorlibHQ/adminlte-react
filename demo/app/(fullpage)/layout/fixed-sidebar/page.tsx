import { AppContent, Card } from '@colorlib/adminlte-react'
import { DemoLayout } from '@/components/demo-layout'

export const metadata = { title: "Fixed Sidebar" }

export default function Page() {
  return (
    <DemoLayout fixedSidebar>
      <AppContent
        title="Fixed Sidebar"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Fixed Sidebar' }]}
      >
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
