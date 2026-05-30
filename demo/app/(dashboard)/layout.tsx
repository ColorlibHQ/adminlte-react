import { DemoLayout } from '@/components/demo-layout'

// Title template for the whole dashboard group: page titles become
// "<page> · AdminLTE React"; the home page (no own title) uses the default.
export const metadata = {
  title: { default: 'Dashboard', template: '%s · AdminLTE React' },
}

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DemoLayout fixedHeader fixedSidebar>
      {children}
    </DemoLayout>
  )
}
