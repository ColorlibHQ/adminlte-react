import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs/docs-page'
import { CodeBlock } from '@/components/docs/code-block'
import { PropsTable } from '@/components/docs/props-table'

export const metadata: Metadata = {
  title: 'Tools',
  description: 'API reference for Modal, Datatable (Tabulator), and Editor (Quill).',
}

export default function ToolsPage() {
  return (
    <DocsPage
      title="Tools"
      lead="Heavier interactive components. All three are client components; Datatable and Editor lazy-load their libraries."
    >
      <h2 id="modal">Modal <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>
        A Bootstrap modal dialog. It renders the modal markup with the <code>id</code> you
        give it; open it the Bootstrap way — a trigger with{' '}
        <code>data-bs-toggle=&quot;modal&quot;</code> and{' '}
        <code>data-bs-target=&quot;#your-id&quot;</code> — which requires Bootstrap&apos;s JS
        bundle (see <a href="/docs/installation">Installation</a>). The optional{' '}
        <code>onShow</code> / <code>onHide</code> callbacks fire on Bootstrap&apos;s modal
        events.
      </p>
      <CodeBlock code={`import { Modal, Button } from '@adminlte/react'

export function Example() {
  return (
    <>
      <button className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#confirm">
        Open modal
      </button>

      <Modal
        id="confirm"
        title="Delete item?"
        centered
        footer={
          <>
            <button className="btn btn-secondary" data-bs-dismiss="modal">Cancel</button>
            <Button theme="danger" label="Delete" />
          </>
        }
      >
        This action cannot be undone.
      </Modal>
    </>
  )
}`} />
      <PropsTable
        rows={[
          { name: 'id', type: 'string', required: true, description: 'DOM id used by the trigger (data-bs-target="#id").' },
          { name: 'children', type: 'React.ReactNode', required: true, description: 'Modal body content.' },
          { name: 'title', type: 'string', description: 'Header title.' },
          { name: 'size', type: "'sm' | 'lg' | 'xl'", description: 'Dialog width.' },
          { name: 'theme', type: 'BootstrapTheme', description: 'Header color treatment.' },
          { name: 'centered', type: 'boolean', description: 'Vertically center the dialog.' },
          { name: 'scrollable', type: 'boolean', description: 'Scroll the body instead of the page.' },
          { name: 'staticBackdrop', type: 'boolean', description: "Don't close on backdrop click." },
          { name: 'footer', type: 'React.ReactNode', description: 'Footer content (buttons).' },
          { name: 'onShow', type: '() => void', description: 'Fires on the shown event.' },
          { name: 'onHide', type: '() => void', description: 'Fires on the hidden event.' },
        ]}
      />

      <h2 id="datatable">Datatable <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>
        A data grid powered by Tabulator (lazy-loaded). Supply <code>columns</code> plus
        either local <code>data</code> or a remote <code>apiUrl</code> (progressive
        scroll loading). Install <code>tabulator-tables</code> and load its Bootstrap 5
        theme CSS — see <a href="/docs/plugins">Plugins</a>.
      </p>
      <CodeBlock code={`<Datatable
  columns={[
    { title: 'Name', field: 'name' },
    { title: 'Email', field: 'email' },
    { title: 'Age', field: 'age', sorter: 'number', width: 100 },
  ]}
  data={[
    { name: 'Ada Lovelace', email: 'ada@example.com', age: 36 },
    { name: 'Alan Turing', email: 'alan@example.com', age: 41 },
  ]}
/>

{/* or load from an API */}
<Datatable columns={columns} apiUrl="/api/users" />`} />
      <PropsTable
        rows={[
          { name: 'columns', type: 'DatatableColumn[]', required: true, description: '{ title, field, sorter?, formatter?, width? }.' },
          { name: 'data', type: 'Record<string, unknown>[]', description: 'Local row data.' },
          { name: 'apiUrl', type: 'string', description: 'Remote data source (progressive scroll load).' },
          { name: 'tabulatorOptions', type: 'Record<string, unknown>', description: 'Raw Tabulator options (merged in).' },
          { name: 'id', type: 'string', default: 'auto', description: 'Container id (auto-generated if omitted).' },
          { name: 'className', type: 'string', description: 'Container class.' },
        ]}
      />

      <h2 id="editor">Editor <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>
        A rich-text editor powered by Quill (lazy-loaded). <code>onChange</code> receives the
        current HTML string. Install <code>quill</code> and load its{' '}
        <code>snow</code> theme CSS — see <a href="/docs/plugins">Plugins</a>.
      </p>
      <CodeBlock code={`<Editor
  name="body"
  label="Article body"
  value={html}
  placeholder="Write your article…"
  onChange={(html) => setHtml(html)}
/>`} />
      <PropsTable
        rows={[
          { name: 'name', type: 'string', required: true, description: 'Field name (also used for a hidden input).' },
          { name: 'label', type: 'string', description: 'Label above the editor.' },
          { name: 'value', type: 'string', default: "''", description: 'Initial HTML content.' },
          { name: 'placeholder', type: 'string', default: "'Enter text...'", description: 'Empty-state text.' },
          { name: 'onChange', type: '(html: string) => void', description: 'Fires with the current HTML.' },
          { name: 'quillOptions', type: 'Record<string, unknown>', description: 'Raw Quill options (merged in).' },
          { name: 'fgroupClass', type: 'string', description: 'Class on the form group.' },
        ]}
      />
    </DocsPage>
  )
}
