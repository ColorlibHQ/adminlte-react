import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs/docs-page'
import { CodeBlock } from '@/components/docs/code-block'

export const metadata: Metadata = {
  title: 'Installation',
  description: 'Install adminlte-react, its peer dependencies, and wire up CSS and Bootstrap JS.',
}

export default function InstallationPage() {
  return (
    <DocsPage
      title="Installation"
      lead="Install the package, its peer dependencies, and load the stylesheet plus Bootstrap's JavaScript."
    >
      <h2>1. Install the package</h2>
      <CodeBlock
        language="bash"
        code={`pnpm add adminlte-react
# or
npm install adminlte-react
# or
yarn add adminlte-react`}
      />

      <h2>2. Install peer dependencies</h2>
      <p>
        React and React DOM are required. Next.js is required in practice (the sidebar and
        command palette use <code>next/navigation</code>).
      </p>
      <CodeBlock language="bash" code={`pnpm add react react-dom next`} />
      <p>
        You also need <strong>Bootstrap Icons</strong> (the components reference{' '}
        <code>bi-*</code> classes) and <strong>Bootstrap 5.3 JavaScript</strong> for
        components that rely on Bootstrap&apos;s own behavior (dropdowns, modals, tooltips,
        toasts). You can load both from a CDN (shown below) or install them from npm:
      </p>
      <CodeBlock language="bash" code={`pnpm add bootstrap bootstrap-icons`} />

      <h2>3. Import the stylesheet</h2>
      <p>
        Import the bundled AdminLTE stylesheet once, at the top of your root layout. It
        includes the Bootstrap 5.3 styles the components need.
      </p>
      <CodeBlock
        filename="app/layout.tsx"
        code={`import '@adminlte/react/css'
import './globals.css'`}
      />

      <h2>4. Load Bootstrap JS and icons</h2>
      <p>
        Add Bootstrap Icons CSS in the <code>&lt;head&gt;</code> and Bootstrap&apos;s JS
        bundle at the end of <code>&lt;body&gt;</code>. The simplest path is a CDN:
      </p>
      <CodeBlock
        filename="app/layout.tsx"
        code={`import type { Metadata } from 'next'
import '@adminlte/react/css'
import './globals.css'

export const metadata: Metadata = {
  title: 'Dashboard',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.13.1/font/bootstrap-icons.min.css"
        />
      </head>
      <body>
        {children}
        {/* Required for dropdowns, modals, tooltips, toasts */}
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js" />
      </body>
    </html>
  )
}`}
      />
      <p>
        If you installed Bootstrap from npm instead, import the bundle from a client
        component: <code>import &apos;bootstrap/dist/js/bootstrap.bundle.min.js&apos;</code>.
      </p>

      <h2>5. Optional: plugin assets</h2>
      <p>
        The chart, map, datatable, editor, and advanced form components load their JS
        libraries on demand, but you must install those libraries and load their CSS. Only
        add the ones you use — see{' '}
        <a href="/docs/plugins">Plugins &amp; Dynamic Imports</a> for the full matrix.
      </p>
      <CodeBlock
        language="bash"
        code={`# install only what you use
pnpm add apexcharts          # <ApexChart>, <SparklineChart>
pnpm add tabulator-tables    # <Datatable>
pnpm add quill               # <Editor>
pnpm add flatpickr           # <InputFlatpickr>
pnpm add tom-select          # <InputTomSelect>
pnpm add jsvectormap         # <WorldMap>
pnpm add sortablejs          # useSortable()`}
      />

      <p>
        With the package installed and the CSS/JS wired up, head to the{' '}
        <a href="/docs/quick-start">Quick Start</a> to assemble your first dashboard.
      </p>
    </DocsPage>
  )
}
