import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs/docs-page'
import { CodeBlock } from '@/components/docs/code-block'

export const metadata: Metadata = {
  title: 'Quick Start',
  description: 'Assemble a dashboard: define a menu, wrap your routes in DashboardLayout, and build pages with AppContent.',
}

export default function QuickStartPage() {
  return (
    <DocsPage
      title="Quick Start"
      lead="Three steps: define your menu, wrap your route group in DashboardLayout, then build pages with AppContent."
    >
      <h2>1. Define your menu</h2>
      <p>
        The whole sidebar — and the ⌘K command palette — is driven by a single{' '}
        <code>MenuNode[]</code> array. A node is a <code>header</code> (section label), an{' '}
        <code>item</code> (link), or a <code>group</code> (collapsible submenu).
      </p>
      <CodeBlock
        filename="lib/menu.ts"
        code={`import type { MenuNode } from '@adminlte/react'

export const menuItems: MenuNode[] = [
  {
    type: 'group',
    text: 'Dashboard',
    icon: 'bi-speedometer',
    children: [
      { type: 'item', text: 'Dashboard v1', href: '/', icon: 'bi-circle' },
      { type: 'item', text: 'Dashboard v2', href: '/index2', icon: 'bi-circle' },
    ],
  },
  { type: 'header', text: 'UI ELEMENTS' },
  { type: 'item', text: 'Profile', href: '/profile', icon: 'bi-person' },
  {
    type: 'item',
    text: 'Inbox',
    href: '/mailbox',
    icon: 'bi-envelope',
    badge: 12,
    badgeColor: 'primary',
  },
]`}
      />

      <h2>2. Wrap your routes in the layout</h2>
      <p>
        Put a <code>layout.tsx</code> in the route group that should render the dashboard
        shell. <code>DashboardLayout</code> renders the topbar, sidebar, footer, and
        command palette around your pages.
      </p>
      <CodeBlock
        filename="app/(dashboard)/layout.tsx"
        code={`import { DashboardLayout } from '@adminlte/react'
import { menuItems } from '@/lib/menu'

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardLayout
      menuItems={menuItems}
      logo={<><b>Admin</b>LTE</>}
      fixedHeader
      fixedSidebar
      colorModeToggle
      user={{
        name: 'Jane Doe',
        image: '/avatar.png',
        role: 'Administrator',
      }}
    >
      {children}
    </DashboardLayout>
  )
}`}
      />

      <h2>3. Build a page</h2>
      <p>
        Wrap page content in <code>AppContent</code> to get the page header (title +
        breadcrumbs) and the correct content container. Compose with widgets like{' '}
        <code>SmallBox</code> and <code>Card</code>.
      </p>
      <CodeBlock
        filename="app/(dashboard)/page.tsx"
        code={`import { AppContent, SmallBox, Card } from '@adminlte/react'

export default function DashboardPage() {
  return (
    <AppContent
      title="Dashboard"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Dashboard' }]}
    >
      <div className="row g-4">
        <div className="col-lg-3 col-6">
          <SmallBox
            title="150"
            text="New Orders"
            theme="primary"
            icon={<i className="bi bi-bag" />}
            url="/orders"
          />
        </div>
        <div className="col-lg-9">
          <Card title="Sales" theme="primary" variant="outline" collapsible>
            Your chart or table goes here.
          </Card>
        </div>
      </div>
    </AppContent>
  )
}`}
      />

      <h2>That&apos;s it</h2>
      <p>
        You now have a working dashboard with a responsive sidebar, dark-mode toggle, and a
        ⌘K command palette generated from your menu. From here:
      </p>
      <ul>
        <li>
          Tune the shell — fixed header/sidebar/footer, mini sidebar, RTL — on the{' '}
          <a href="/docs/layout">Layout &amp; Shell</a> page.
        </li>
        <li>
          Customize colors and dark mode on the{' '}
          <a href="/docs/theming">Theming &amp; Dark Mode</a> page.
        </li>
        <li>
          Browse every component in the{' '}
          <a href="/docs/components/widgets">API Reference</a>.
        </li>
      </ul>
    </DocsPage>
  )
}
