import type { Metadata } from 'next'
import {
  Button,
  Input,
  Select,
  Textarea,
  InputSwitch,
  InputColor,
  InputFile,
} from '@colorlib/adminlte-react'
import { DocsPage } from '@/components/docs/docs-page'
import { CodeBlock } from '@/components/docs/code-block'
import { PropsTable } from '@/components/docs/props-table'

export const metadata: Metadata = {
  title: 'Forms',
  description: 'API reference for buttons, inputs, select, textarea, switch, color, file, date picker, and advanced select.',
}

export default function FormsPage() {
  return (
    <DocsPage
      title="Forms"
      lead="Typed form controls that wrap Bootstrap form markup. Basic controls are Server Components; plugin-backed ones are client components."
    >
      <h2>Common props</h2>
      <p>
        Most form controls extend their native HTML element&apos;s attributes (so{' '}
        <code>name</code>, <code>value</code>, <code>onChange</code>, <code>required</code>,
        <code>disabled</code>, etc. all work) and add a small set of shared props:
      </p>
      <PropsTable
        rows={[
          { name: 'label', type: 'string', description: 'Renders a <label> above the control.' },
          { name: 'error', type: 'string', description: 'Shows an invalid-feedback message and error styling.' },
          { name: 'hint', type: 'string', description: 'Muted helper text below the control (Input, Textarea).' },
          { name: 'fgroupClass', type: 'string', description: 'Class on the wrapping form group.' },
        ]}
      />

      <h2 id="button">Button</h2>
      <p>A themed button. Extends all native <code>&lt;button&gt;</code> attributes.</p>
      <div className="docs-example d-flex flex-wrap gap-2">
        <Button label="Primary" />
        <Button theme="success" icon="bi-check-lg" label="Save" />
        <Button theme="danger" outline label="Delete" />
        <Button theme="secondary" size="sm" label="Small" />
      </div>
      <CodeBlock code={`<Button label="Primary" />
<Button theme="success" icon="bi-check-lg" label="Save" />
<Button theme="danger" outline label="Delete" />
<Button theme="secondary" size="sm" label="Small" />`} />
      <PropsTable
        rows={[
          { name: 'theme', type: 'BootstrapTheme', default: "'primary'", description: 'Button color.' },
          { name: 'outline', type: 'boolean', description: 'Use the outline variant.' },
          { name: 'size', type: "'sm' | 'lg'", description: 'Button size.' },
          { name: 'icon', type: 'string', description: 'Bootstrap Icons class shown before the label.' },
          { name: 'label', type: 'string', description: 'Button text (or use children).' },
          { name: '...native', type: 'ButtonHTMLAttributes', description: 'onClick, type, disabled, etc.' },
        ]}
      />

      <h2 id="input">Input</h2>
      <p>A text input with label, hint, and error support. Extends native input attributes.</p>
      <div className="docs-example">
        <Input label="Email" type="email" placeholder="you@example.com" hint="We never share it." />
        <Input label="Username" defaultValue="taken" error="That username is taken." />
      </div>
      <CodeBlock code={`<Input label="Email" type="email" placeholder="you@example.com" hint="We never share it." />
<Input label="Username" error="That username is taken." />`} />
      <PropsTable
        rows={[
          { name: 'label / hint / error / fgroupClass', type: 'string', description: 'See Common props.' },
          { name: 'igroupSize', type: "'sm' | 'lg'", description: 'Input group size.' },
          { name: '...native', type: 'InputHTMLAttributes', description: 'type, value, placeholder, onChange, etc.' },
        ]}
      />

      <h2 id="select">Select</h2>
      <p>A dropdown. Provide <code>options</code> or pass <code>&lt;option&gt;</code> children.</p>
      <div className="docs-example">
        <Select
          label="Country"
          options={[
            { value: 'us', label: 'United States' },
            { value: 'lv', label: 'Latvia' },
            { value: 'jp', label: 'Japan' },
          ]}
        />
      </div>
      <CodeBlock code={`<Select
  label="Country"
  options={[
    { value: 'us', label: 'United States' },
    { value: 'lv', label: 'Latvia' },
  ]}
/>`} />
      <PropsTable
        rows={[
          { name: 'options', type: 'Array<{ value: string | number; label: string }>', description: 'Option list (alternative to children).' },
          { name: 'label / error / fgroupClass', type: 'string', description: 'See Common props.' },
          { name: 'children', type: 'React.ReactNode', description: 'Manually supplied <option> elements.' },
          { name: '...native', type: 'SelectHTMLAttributes', description: 'value, onChange, multiple, etc.' },
        ]}
      />

      <h2 id="textarea">Textarea</h2>
      <p>A multi-line text input.</p>
      <div className="docs-example">
        <Textarea label="Message" rows={3} placeholder="Write something…" hint="Markdown supported." />
      </div>
      <CodeBlock code={`<Textarea label="Message" rows={3} placeholder="Write something…" hint="Markdown supported." />`} />
      <PropsTable
        rows={[
          { name: 'label / hint / error / fgroupClass', type: 'string', description: 'See Common props.' },
          { name: '...native', type: 'TextareaHTMLAttributes', description: 'rows, value, onChange, etc.' },
        ]}
      />

      <h2 id="input-switch">InputSwitch <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>A toggle switch. <code>onChange</code> receives the boolean checked state.</p>
      <div className="docs-example">
        <InputSwitch name="notifications" label="Email notifications" defaultChecked />
      </div>
      <CodeBlock code={`<InputSwitch
  name="notifications"
  label="Email notifications"
  defaultChecked
  onChange={(checked) => console.log(checked)}
/>`} />
      <PropsTable
        rows={[
          { name: 'name', type: 'string', required: true, description: 'Field name.' },
          { name: 'label', type: 'string', description: 'Label beside the switch.' },
          { name: 'checked', type: 'boolean', description: 'Controlled checked state.' },
          { name: 'defaultChecked', type: 'boolean', description: 'Uncontrolled initial state.' },
          { name: 'onChange', type: '(checked: boolean) => void', description: 'Fires with the new boolean state.' },
          { name: 'id / error / fgroupClass', type: 'string', description: 'See Common props.' },
        ]}
      />

      <h2 id="input-color">InputColor <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>A native color picker. Extends native input attributes.</p>
      <div className="docs-example">
        <InputColor label="Brand color" defaultValue="#6f42c1" />
      </div>
      <CodeBlock code={`<InputColor label="Brand color" defaultValue="#6f42c1" />`} />
      <PropsTable
        rows={[
          { name: 'label / error / fgroupClass', type: 'string', description: 'See Common props.' },
          { name: '...native', type: 'InputHTMLAttributes', description: 'value, onChange, etc. Defaults to #0d6efd.' },
        ]}
      />

      <h2 id="input-file">InputFile</h2>
      <p>A file input, single or multiple.</p>
      <div className="docs-example">
        <InputFile label="Attachments" multiple />
      </div>
      <CodeBlock code={`<InputFile label="Attachments" multiple />`} />
      <PropsTable
        rows={[
          { name: 'multiple', type: 'boolean', description: 'Allow selecting multiple files.' },
          { name: 'label / error / fgroupClass', type: 'string', description: 'See Common props.' },
          { name: '...native', type: 'InputHTMLAttributes', description: 'accept, onChange, etc.' },
        ]}
      />

      <h2 id="input-flatpickr">InputFlatpickr <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>
        A date/time picker backed by Flatpickr (lazy-loaded). Install <code>flatpickr</code>{' '}
        and load its CSS — see <a href="/docs/plugins">Plugins</a>.
      </p>
      <CodeBlock code={`<InputFlatpickr
  label="Departure"
  dateType="datetime"
  options={{ enableTime: true, dateFormat: 'Y-m-d H:i' }}
/>`} />
      <PropsTable
        rows={[
          { name: 'dateType', type: "'text' | 'date' | 'time' | 'datetime'", default: "'text'", description: 'Picker mode.' },
          { name: 'options', type: 'Record<string, unknown>', description: 'Raw Flatpickr options (merged in).' },
          { name: 'label / error / fgroupClass', type: 'string', description: 'See Common props.' },
          { name: '...native', type: 'InputHTMLAttributes', description: 'placeholder, name, etc.' },
        ]}
      />

      <h2 id="input-tom-select">InputTomSelect <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>
        An enhanced select (search, tags, multi-select) backed by Tom Select (lazy-loaded).
        Install <code>tom-select</code> and load its CSS — see{' '}
        <a href="/docs/plugins">Plugins</a>.
      </p>
      <CodeBlock code={`<InputTomSelect
  label="Tags"
  multiple
  options={[{ value: 'react', label: 'React' }, { value: 'next', label: 'Next.js' }]}
  tomSelectOptions={{ create: true }}
/>`} />
      <PropsTable
        rows={[
          { name: 'options', type: 'Array<{ value: string | number; label: string }>', description: 'Option list.' },
          { name: 'tomSelectOptions', type: 'Record<string, unknown>', description: 'Raw Tom Select options (merged in).' },
          { name: 'label / error / fgroupClass', type: 'string', description: 'See Common props.' },
          { name: '...native', type: 'SelectHTMLAttributes', description: 'multiple, name, etc.' },
        ]}
      />
    </DocsPage>
  )
}
