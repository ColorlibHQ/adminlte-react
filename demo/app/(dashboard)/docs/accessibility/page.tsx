import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs/docs-page'
import { CodeBlock } from '@/components/docs/code-block'

export const metadata: Metadata = {
  title: 'Accessibility',
  description: 'WCAG 2.1 AA behaviors enabled automatically by DashboardLayout.',
}

export default function AccessibilityPage() {
  return (
    <DocsPage
      title="Accessibility"
      lead="WCAG 2.1 AA behaviors are enabled automatically by DashboardLayout — no configuration needed."
    >
      <h2>What you get for free</h2>
      <ul>
        <li><strong>Skip links</strong> (2.4.1) — “Skip to main content” / “Skip to navigation”, revealed on focus.</li>
        <li><strong>Live region</strong> (4.1.3) — an <code>aria-live</code> status node for announcements.</li>
        <li><strong>Landmarks</strong> — <code>main#main</code> and labelled <code>&lt;nav&gt;</code> roles (lists are intentionally skipped to preserve list semantics).</li>
        <li><strong>Focus management</strong> — focus moves into modals/dropdowns on open and returns on close; <kbd>Esc</kbd> closes open dropdowns.</li>
        <li><strong>Reduced motion</strong> (2.3.3) — animations are neutralized when <code>prefers-reduced-motion</code> is set.</li>
        <li><strong>Tables &amp; forms</strong> — <code>th[scope]</code> is inferred; inputs without labels borrow their placeholder as <code>aria-label</code>; invalid fields are announced.</li>
      </ul>

      <h2>Announcing messages</h2>
      <p>
        The live region picks up dynamically inserted <code>.alert-danger</code> /{' '}
        <code>.invalid-feedback</code> / <code>.alert-success</code> nodes — render one to announce a
        status change to screen readers.
      </p>
      <CodeBlock
        language="tsx"
        code={`{saved && (
  <div className="alert alert-success" role="status">Settings saved.</div>
)}`}
      />

      <h2>Form validation</h2>
      <p>
        Add <code>needs-validation</code> (or <code>needs-validation-tooltip</code>) to a form. The
        layout intercepts submit, blocks invalid forms, and adds <code>was-validated</code> to surface
        Bootstrap’s feedback — the same behavior as the AdminLTE dist.
      </p>
      <CodeBlock
        language="tsx"
        code={`<form className="needs-validation" noValidate>
  <input className="form-control" required />
  <div className="invalid-feedback">This field is required.</div>
  <button className="btn btn-primary" type="submit">Submit</button>
</form>`}
      />

      <p className="text-secondary">
        These behaviors are implemented in React (ported from AdminLTE’s <code>accessibility.ts</code>)
        and cleaned up on unmount — no <code>adminlte.js</code> required.
      </p>
    </DocsPage>
  )
}
