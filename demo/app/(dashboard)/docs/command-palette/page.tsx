import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs/docs-page'
import { CodeBlock } from '@/components/docs/code-block'

export const metadata: Metadata = {
  title: 'Command Palette',
  description: 'The built-in ⌘K command palette: keyboard-driven page search generated from your menu.',
}

export default function CommandPalettePage() {
  return (
    <DocsPage
      title="Command Palette (⌘K)"
      lead="A keyboard-driven page switcher, built in. Press ⌘K / Ctrl+K, or click the header search pill."
    >
      <h2>It just works</h2>
      <p>
        <code>DashboardLayout</code> already mounts the palette and flattens your{' '}
        <code>menuItems</code> into searchable commands — no setup required. Every menu{' '}
        <code>item</code> with a real <code>href</code> becomes a command, tagged with its section.
      </p>
      <ul>
        <li><kbd>⌘K</kbd> / <kbd>Ctrl+K</kbd> — open / close</li>
        <li><kbd>↑</kbd> <kbd>↓</kbd> — move selection</li>
        <li><kbd>↵</kbd> — navigate · <kbd>Esc</kbd> — close</li>
      </ul>

      <h2>Using it standalone</h2>
      <p>
        Outside <code>DashboardLayout</code>, compose it yourself with the provider, the{' '}
        <code>useCommandPalette()</code> hook, and the <code>flattenMenuToCommands()</code> helper.
      </p>
      <CodeBlock
        language="tsx"
        code={`'use client'
import {
  CommandPaletteProvider,
  CommandPalette,
  flattenMenuToCommands,
  useCommandPalette,
} from 'adminlte-react'
import { menuItems } from '@/lib/menu'

function SearchButton() {
  const palette = useCommandPalette()      // undefined outside the provider
  return <button onClick={() => palette?.open()}>Search ⌘K</button>
}

export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <CommandPaletteProvider>
      <SearchButton />
      {children}
      <CommandPalette items={flattenMenuToCommands(menuItems)} />
    </CommandPaletteProvider>
  )
}`}
      />

      <h2>Custom commands</h2>
      <p>
        <code>CommandPalette</code> accepts any <code>CommandItem[]</code>, so you can mix in actions
        that aren’t in the menu.
      </p>
      <CodeBlock
        language="tsx"
        code={`import type { CommandItem } from 'adminlte-react'

const commands: CommandItem[] = [
  ...flattenMenuToCommands(menuItems),
  { label: 'New invoice', href: '/pages/invoice', icon: 'bi-receipt', section: 'Actions' },
]

<CommandPalette items={commands} placeholder="Search or jump to…" />`}
      />

      <h2>API</h2>
      <ul>
        <li><code>CommandPaletteProvider</code> — holds open state and registers the global ⌘K listener.</li>
        <li><code>useCommandPalette()</code> — returns <code>{'{ isOpen, open, close, toggle }'}</code>, or <code>undefined</code> outside the provider.</li>
        <li><code>flattenMenuToCommands(menu)</code> — turns a <code>MenuNode[]</code> into <code>CommandItem[]</code> (skips <code>#</code> links, de-dupes).</li>
        <li><code>CommandPalette</code> — props: <code>items: CommandItem[]</code>, <code>placeholder?: string</code>.</li>
      </ul>
    </DocsPage>
  )
}
