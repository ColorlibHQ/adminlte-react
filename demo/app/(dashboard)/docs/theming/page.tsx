import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs/docs-page'
import { CodeBlock } from '@/components/docs/code-block'
import { PropsTable } from '@/components/docs/props-table'

export const metadata: Metadata = {
  title: 'Theming & Dark Mode',
  description: 'Light/dark/auto color modes, Bootstrap theme variables, and sidebar theming.',
}

export default function ThemingPage() {
  return (
    <DocsPage
      title="Theming & Dark Mode"
      lead="Dark mode works out of the box via ColorModeProvider. Colors are standard Bootstrap 5.3 CSS variables."
    >
      <h2>How dark mode works</h2>
      <p>
        <code>DashboardLayout</code> wraps your app in a <code>ColorModeProvider</code>. It
        manages three modes — <code>light</code>, <code>dark</code>, and <code>auto</code>{' '}
        — and:
      </p>
      <ul>
        <li>
          sets <code>data-bs-theme=&quot;light&quot;</code> or <code>&quot;dark&quot;</code>{' '}
          on the <code>&lt;html&gt;</code> element (Bootstrap 5.3&apos;s native theming
          hook);
        </li>
        <li>
          resolves <code>auto</code> from the user&apos;s{' '}
          <code>prefers-color-scheme</code> and live-updates when the system theme changes;
        </li>
        <li>
          persists the choice to <code>localStorage</code> under the key{' '}
          <code>lte-theme</code> and restores it on load.
        </li>
      </ul>
      <p>
        Set the starting mode with <code>initialColorMode</code> on{' '}
        <code>DashboardLayout</code>. A saved preference overrides it on the next visit.
      </p>
      <CodeBlock code={`<DashboardLayout menuItems={menuItems} initialColorMode="auto" colorModeToggle>
  {children}
</DashboardLayout>`} />

      <h2>The toggle</h2>
      <p>
        When <code>colorModeToggle</code> is <code>true</code> (the default), a
        light/dark/auto toggle appears in the topbar. You can also drop{' '}
        <code>ColorModeToggle</code> anywhere inside the layout, or build your own control
        with the context hook.
      </p>

      <h2>Reading & setting the mode</h2>
      <p>
        Use <code>useColorModeContext()</code> from any client component inside the layout.
      </p>
      <CodeBlock
        code={`'use client'
import { useColorModeContext } from '@adminlte/react'

function ThemeButtons() {
  const { colorMode, setColorMode, resolvedMode } = useColorModeContext()
  return (
    <div className="btn-group">
      <button onClick={() => setColorMode('light')}>Light</button>
      <button onClick={() => setColorMode('dark')}>Dark</button>
      <button onClick={() => setColorMode('auto')}>Auto</button>
      <span>active: {colorMode} (resolved: {resolvedMode})</span>
    </div>
  )
}`}
      />
      <h3>Context value</h3>
      <PropsTable
        rows={[
          { name: 'colorMode', type: "'light' | 'dark' | 'auto'", description: 'The selected mode.' },
          { name: 'setColorMode', type: '(mode: ColorMode) => void', description: 'Change the mode (also persists it).' },
          { name: 'resolvedMode', type: "'light' | 'dark'", description: "The concrete mode in effect after resolving 'auto'." },
        ]}
      />

      <h2>Customizing colors</h2>
      <p>
        Components use standard Bootstrap 5.3 theme classes
        (<code>text-bg-primary</code>, <code>card-success</code>, etc.) and CSS variables.
        Override the variables in your <code>globals.css</code> to rebrand without touching
        component code. Scope overrides under <code>[data-bs-theme=&quot;dark&quot;]</code>{' '}
        to change dark-mode values independently.
      </p>
      <CodeBlock
        filename="globals.css"
        code={`:root {
  --bs-primary: #6f42c1;
  --bs-primary-rgb: 111, 66, 193;
  --bs-border-radius: 0.5rem;
}

[data-bs-theme="dark"] {
  --bs-body-bg: #11131a;
}`}
      />

      <h2>The extended palette</h2>
      <p>
        AdminLTE core ships two <em>opt-in</em> palette stylesheets that this library does not
        bundle: <code>adminlte-colors.css</code> (14 extra colours, each with the{' '}
        <code>.bg-*</code> / <code>.text-bg-*</code> / <code>.text-*</code> /{' '}
        <code>.border-*</code> / <code>.link-*</code> / <code>.card-*</code> /{' '}
        <code>.callout-*</code> / <code>.direct-chat-*</code> families) and{' '}
        <code>adminlte-colors-v3.css</code> (the same families for the 18 AdminLTE 3 colours
        at their original values). Add <code>admin-lte</code> as a dependency
        and import the one you want alongside the library CSS.
      </p>
      <CodeBlock
        filename="app/layout.tsx"
        code={`import '@adminlte/react/css'
import 'admin-lte/dist/css/adminlte-colors.css'`}
      />
      <p>
        With a palette sheet loaded, <code>data-lte-primary</code> on <code>&lt;html&gt;</code>{' '}
        promotes any of its colours to Bootstrap&apos;s <code>primary</code> — buttons, links,
        pagination, form focus rings, progress bars, list groups and dropdowns all follow it.
        On the v3 sheet, <code>data-lte-contrast=&quot;aa&quot;</code> flips text to black on
        the eight colours (blue, cyan, fuchsia, green, lightblue, olive, pink, teal) that
        otherwise miss WCAG AA.
      </p>
      <CodeBlock language="html" code={`<html lang="en" data-lte-primary="teal" data-lte-contrast="aa">`} />

      <h2>Print</h2>
      <p>
        Print styling is part of the bundled <code>@adminlte/react/css</code> — nothing extra to
        load. By default a printed page is treated as a screen artifact: external links get their
        URL appended and buttons keep an outline. Set{' '}
        <code>data-lte-print=&quot;plain&quot;</code> on <code>&lt;html&gt;</code> for pages that
        should print as documents (invoices, reports) to drop both. Bootstrap&apos;s{' '}
        <code>d-print-none</code> also works on the app wrapper and the sidebar, so you can hide
        the shell chrome from print.
      </p>
      <CodeBlock language="html" code={`<html lang="en" data-lte-print="plain">`} />

      <h2>Sidebar theme</h2>
      <p>
        The sidebar has its own light/dark treatment, independent of the page color mode.
        Control it with <code>sidebarTheme</code> on <code>DashboardLayout</code> (default{' '}
        <code>dark</code>), and add utility classes with <code>sidebarClass</code>.
      </p>
      <CodeBlock code={`<DashboardLayout menuItems={menuItems} sidebarTheme="light" sidebarClass="bg-body shadow-sm">
  {children}
</DashboardLayout>`} />

      <h2>Persistence keys</h2>
      <p>The library writes two <code>localStorage</code> keys:</p>
      <PropsTable
        rows={[
          { name: 'lte-theme', type: 'localStorage', description: "The selected color mode ('light' | 'dark' | 'auto')." },
          { name: 'lte.sidebar.state', type: 'localStorage', description: 'Sidebar collapsed state — only when enableSidebarPersistence is set.' },
        ]}
      />

      <h2>Right-to-left (RTL)</h2>
      <p>
        Pass <code>dir="rtl"</code> to mirror the entire layout. AdminLTE 4 / Bootstrap 5.3 use CSS
        logical properties, but AdminLTE’s component styles are compiled LTR — so for a pixel-perfect
        flip, also load the dedicated <code>adminlte.rtl.css</code> build on RTL routes (after the
        LTR CSS so it wins the cascade).
      </p>
      <CodeBlock code={`<DashboardLayout menuItems={menuItems} dir="rtl">
  {children}
</DashboardLayout>`} />
      <CodeBlock
        language="tsx"
        code={`'use client'
import { useEffect } from 'react'

// Load AdminLTE's RTL build only on RTL routes
export function RtlStyles() {
  useEffect(() => {
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = '/css/adminlte.rtl.css'
    document.head.append(link)
    return () => link.remove()
  }, [])
  return null
}`}
      />
    </DocsPage>
  )
}
