import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs/docs-page'
import { CodeBlock } from '@/components/docs/code-block'
import { PropsTable } from '@/components/docs/props-table'

export const metadata: Metadata = {
  title: 'Layout & Shell',
  description: 'DashboardLayout, AuthLayout, and AppContent: the building blocks of every page.',
}

export default function LayoutDocsPage() {
  return (
    <DocsPage
      title="Layout & Shell"
      lead="DashboardLayout is the app shell. AuthLayout covers standalone auth pages. AppContent wraps the content of every page."
    >
      <h2>DashboardLayout</h2>
      <p>
        The main application shell. It is a React Server Component: it computes the static{' '}
        <code>&lt;body&gt;</code> layout classes on the server, then nests the client
        providers (color mode, sidebar, command palette) and renders the topbar, sidebar,
        footer, and command palette around <code>children</code>. Use it once, in the{' '}
        <code>layout.tsx</code> of your dashboard route group.
      </p>
      <CodeBlock
        code={`<DashboardLayout
  menuItems={menuItems}
  fixedHeader
  fixedSidebar
  sidebarMini
  colorModeToggle
  initialColorMode="auto"
>
  {children}
</DashboardLayout>`}
      />

      <h3>Props</h3>
      <PropsTable
        rows={[
          { name: 'menuItems', type: 'MenuNode[]', required: true, description: 'Drives the sidebar tree and the command palette.' },
          { name: 'children', type: 'React.ReactNode', required: true, description: 'Page content (usually an AppContent).' },
          { name: 'logo', type: 'React.ReactNode', default: '<b>Admin</b>LTE', description: 'Brand content, or a string image src.' },
          { name: 'logoHref', type: 'string', default: "'/'", description: 'Link target for the brand.' },
          { name: 'user', type: 'TopbarUser', description: 'Signed-in user shown in the topbar dropdown.' },
          { name: 'sidebarTheme', type: "'light' | 'dark'", default: "'dark'", description: 'Sidebar color scheme.' },
          { name: 'sidebarClass', type: 'string', default: "'bg-body-secondary shadow'", description: 'Extra classes on the sidebar element.' },
          { name: 'sidebarBreakpoint', type: "'sm' | 'md' | 'lg' | 'xl' | 'xxl'", default: "'lg'", description: "Below this width the sidebar becomes an off-canvas overlay ('lg' = 992px, otherwise 768px)." },
          { name: 'sidebarMini', type: 'boolean', default: 'false', description: 'Collapse to an icon-only mini sidebar.' },
          { name: 'fixedHeader', type: 'boolean', default: 'false', description: 'Pin the topbar to the top.' },
          { name: 'fixedSidebar', type: 'boolean', default: 'false', description: 'Make the sidebar independently scrollable.' },
          { name: 'fixedFooter', type: 'boolean', default: 'false', description: 'Pin the footer to the bottom.' },
          { name: 'colorModeToggle', type: 'boolean', default: 'true', description: 'Show the light/dark toggle in the topbar.' },
          { name: 'initialColorMode', type: "'light' | 'dark' | 'auto'", default: "'auto'", description: 'Starting color mode before any saved preference loads.' },
          { name: 'dir', type: "'ltr' | 'rtl'", description: 'Sets the document direction (enables RTL).' },
          { name: 'enableSidebarPersistence', type: 'boolean', default: 'false', description: 'Persist the collapsed state to localStorage.' },
          { name: 'navbarClass', type: 'string', description: 'Extra classes on the topbar navbar.' },
          { name: 'bodyClass', type: 'string', description: 'Extra classes merged onto <body>.' },
          { name: 'topbarStart', type: 'React.ReactNode', description: 'Custom nav items rendered at the start of the topbar.' },
          { name: 'topbarEnd', type: 'React.ReactNode', description: 'Custom nav items (e.g. NavMessages) before the user menu.' },
          { name: 'footer', type: 'React.ReactNode', description: 'Footer content.' },
        ]}
      />

      <h3>Layout flags</h3>
      <p>
        The <code>fixed*</code>, <code>sidebarMini</code>, and <code>dir</code> props map to
        the same <code>&lt;body&gt;</code> classes AdminLTE&apos;s CSS expects
        (<code>fixed-header</code>, <code>fixed-sidebar</code>, <code>fixed-footer</code>,{' '}
        <code>sidebar-mini</code>, …). The shell always applies <code>layout-fixed</code> and{' '}
        <code>sidebar-expand-{'{breakpoint}'}</code>. You can mix and match freely.
      </p>

      <h2>AuthLayout</h2>
      <p>
        A standalone, centered layout for login and registration screens. It applies the{' '}
        <code>{'{authType}'}-page</code> body classes via effect, so it composes cleanly
        under a Next.js root layout that already owns <code>&lt;html&gt;</code> /{' '}
        <code>&lt;body&gt;</code>. Put auth routes in their own route group so they do{' '}
        <em>not</em> inherit <code>DashboardLayout</code>.
      </p>
      <CodeBlock
        filename="app/(auth)/login/page.tsx"
        code={`import { AuthLayout, Input, Button } from '@colorlib/adminlte-react'

export default function LoginPage() {
  return (
    <AuthLayout authType="login">
      <p className="login-box-msg">Sign in to start your session</p>
      <form>
        <Input type="email" placeholder="Email" />
        <Input type="password" placeholder="Password" />
        <Button type="submit" label="Sign In" />
      </form>
    </AuthLayout>
  )
}`}
      />
      <h3>Props</h3>
      <PropsTable
        rows={[
          { name: 'authType', type: "'login' | 'register'", default: "'login'", description: 'Selects the page/box/card-body class prefix.' },
          { name: 'logo', type: 'React.ReactNode', default: '<b>Admin</b>LTE', description: 'Brand shown above the card.' },
          { name: 'logoHref', type: 'string', default: "'/'", description: 'Link target for the brand.' },
          { name: 'children', type: 'React.ReactNode', required: true, description: 'Form / card body content.' },
        ]}
      />

      <h2>AppContent</h2>
      <p>
        Wraps the content of a single page. It renders the optional page header (title +
        breadcrumbs) and the correct AdminLTE content container. Use it as the top-level
        element of each page inside a <code>DashboardLayout</code>.
      </p>
      <CodeBlock
        code={`<AppContent
  title="Orders"
  breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Orders' }]}
>
  {/* page content */}
</AppContent>`}
      />
      <h3>Props</h3>
      <PropsTable
        rows={[
          { name: 'title', type: 'string', description: 'Page heading shown in the content header.' },
          { name: 'breadcrumbs', type: 'Array<{ label: string; href?: string }>', description: 'Breadcrumb trail; the last item renders as active.' },
          { name: 'fluid', type: 'boolean', default: 'true', description: 'Use a fluid container (false → container-lg).' },
          { name: 'children', type: 'React.ReactNode', required: true, description: 'Page content.' },
        ]}
      />
      <p className="text-secondary small">
        The header only renders when <code>title</code> or <code>breadcrumbs</code> is
        provided.
      </p>
    </DocsPage>
  )
}
