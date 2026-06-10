import { AppContent, Card } from '@colorlib/adminlte-react'
import { DemoLayout } from '@/components/demo-layout'
import { RtlStyles } from '@/components/rtl-styles'

export const metadata = { title: "RTL Layout" }

export default function Page() {
  return (
    <DemoLayout dir="rtl">
      <RtlStyles />
      <AppContent title="Layout RTL" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Layout RTL' }]}>
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
