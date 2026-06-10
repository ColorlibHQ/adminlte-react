import { AppContent, Card } from '@colorlib/adminlte-react'
import { DemoLayout } from '@/components/demo-layout'

export const metadata = { title: "Fixed Complete" }

export default function Page() {
  return (
    <DemoLayout fixedHeader
      fixedSidebar
      fixedFooter>
      <AppContent
        title="Fixed Complete"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Fixed Complete' }]}
      >
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
