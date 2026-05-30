import { AppContent, Card } from 'adminlte-react'
import { DemoLayout } from '@/components/demo-layout'

export const metadata = { title: "Fixed Footer" }

export default function Page() {
  return (
    <DemoLayout fixedFooter>
      <AppContent title="Fixed Footer" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Fixed Footer' }]}>
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
