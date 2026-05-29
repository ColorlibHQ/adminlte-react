import { AppContent, Card } from 'adminlte-react'
import { DemoLayout } from '@/components/demo-layout'

export default function Page() {
  return (
    <DemoLayout>
      <AppContent
        title="Unfixed Layout"
        breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Unfixed Layout' }]}
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
