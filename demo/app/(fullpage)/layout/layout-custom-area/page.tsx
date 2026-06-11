import { AppContent, Card } from '@adminlte/react'
import { DemoLayout } from '@/components/demo-layout'

export const metadata = { title: "Custom Content Area" }

export default function Page() {
  return (
    <DemoLayout fixedHeader>
      {/* App Content Top Area */}
      <div className="app-content-top-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div>App Content Top Area</div>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn btn-primary" name="save" value="create">
                Create Admin
              </button>
            </div>
          </div>
        </div>
      </div>

      <AppContent
        title="Layout Custom Area"
        breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Fixed Layout' }]}
      >
        <div className="row">
          <div className="col-12">
            {/* Default box */}
            <Card title="Title" collapsible removable footer="Footer">
              Start creating your amazing application!
            </Card>
          </div>
        </div>
      </AppContent>

      {/* App Content Bottom Area */}
      <div className="app-content-bottom-area">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-6">
              <div>App Content Bottom Area</div>
            </div>
            <div className="col-md-6 text-end">
              <button type="submit" className="btn btn-secondary" name="save" value="create">
                Refresh
              </button>
            </div>
          </div>
        </div>
      </div>
    </DemoLayout>
  )
}
