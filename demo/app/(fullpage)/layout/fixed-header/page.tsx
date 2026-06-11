import { AppContent, Card } from '@adminlte/react'
import { DemoLayout } from '@/components/demo-layout'

export const metadata = { title: "Fixed Header" }

export default function Page() {
  return (
    <DemoLayout fixedHeader>
      <AppContent
        title="Fixed Header"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Fixed Header' }]}
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
