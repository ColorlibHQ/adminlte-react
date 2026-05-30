import type { Metadata } from 'next'
import { DocsPage } from '@/components/docs/docs-page'
import { CodeBlock } from '@/components/docs/code-block'
import { PropsTable } from '@/components/docs/props-table'

export const metadata: Metadata = {
  title: 'Hooks & Context',
  description: 'Context providers and hooks for sidebar state, color mode, command palette, card widgets, fullscreen, treeview, and sortable lists.',
}

export default function HooksPage() {
  return (
    <DocsPage
      title="Hooks & Context"
      lead="All hooks and context consumers run on the client. The context hooks must be called inside DashboardLayout, which supplies the providers."
    >
      <h2>Context providers</h2>
      <p>
        <code>DashboardLayout</code> renders all three providers for you. You can also mount
        them directly if you build a custom shell. Each provider exposes a hook; the hook
        throws if used outside its provider (except <code>useCommandPalette</code>, which
        returns <code>undefined</code> so the topbar can degrade gracefully).
      </p>

      <h3 id="use-sidebar-context">useSidebarContext()</h3>
      <p>Read and control the sidebar (desktop collapse + mobile off-canvas).</p>
      <CodeBlock code={`'use client'
import { useSidebarContext } from 'adminlte-react'

function CollapseButton() {
  const { isCollapsed, toggle } = useSidebarContext()
  return <button onClick={toggle}>{isCollapsed ? 'Expand' : 'Collapse'}</button>
}`} />
      <PropsTable
        rows={[
          { name: 'isCollapsed', type: 'boolean', description: 'Desktop collapsed state.' },
          { name: 'isMobileOpen', type: 'boolean', description: 'Mobile off-canvas open state.' },
          { name: 'isMiniMode', type: 'boolean', description: 'Whether mini sidebar is enabled.' },
          { name: 'toggle', type: '() => void', description: 'Toggle collapse (desktop) or overlay (mobile).' },
          { name: 'collapse', type: '() => void', description: 'Collapse the sidebar.' },
          { name: 'expand', type: '() => void', description: 'Expand the sidebar.' },
          { name: 'sidebarBreakpoint', type: 'number', description: 'Pixel width below which mobile behavior applies.' },
        ]}
      />

      <h3 id="use-color-mode-context">useColorModeContext()</h3>
      <p>
        Read and set the color mode. Returns <code>{'{ colorMode, setColorMode, resolvedMode }'}</code>.
        Covered in detail on the <a href="/docs/theming">Theming &amp; Dark Mode</a> page.
      </p>

      <h3 id="use-command-palette">useCommandPalette()</h3>
      <p>Open or close the ⌘K command palette programmatically.</p>
      <CodeBlock code={`'use client'
import { useCommandPalette } from 'adminlte-react'

function SearchButton() {
  const palette = useCommandPalette()       // may be undefined outside the provider
  return <button onClick={() => palette?.open()}>Search</button>
}`} />
      <PropsTable
        rows={[
          { name: 'isOpen', type: 'boolean', description: 'Whether the palette is open.' },
          { name: 'open', type: '() => void', description: 'Open it.' },
          { name: 'close', type: '() => void', description: 'Close it.' },
          { name: 'toggle', type: '() => void', description: 'Toggle it (also bound to ⌘K / Ctrl+K globally).' },
        ]}
      />

      <h2>Hooks</h2>

      <h3 id="use-push-menu">usePushMenu(options?)</h3>
      <p>
        Standalone sidebar state machine — the logic behind <code>SidebarProvider</code>.
        Use it when building a custom layout without the provider.
      </p>
      <CodeBlock code={`const { isCollapsed, isMobileOpen, toggle, collapse, expand } = usePushMenu({
  sidebarBreakpoint: 992,
  enablePersistence: true,
  isMiniMode: false,
})`} />
      <PropsTable
        rows={[
          { name: 'sidebarBreakpoint', type: 'number', default: '992', description: 'Mobile breakpoint in px.' },
          { name: 'enablePersistence', type: 'boolean', default: 'false', description: 'Persist collapsed state to localStorage.' },
          { name: 'isMiniMode', type: 'boolean', default: 'false', description: 'Enable mini-sidebar behavior.' },
        ]}
      />

      <h3 id="use-card-widget">useCardWidget(initialCollapsed?)</h3>
      <p>
        Collapse / maximize / remove state for a card. Powers the built-in <code>Card</code>{' '}
        tools; reuse it for custom card-like components.
      </p>
      <CodeBlock code={`const { isCollapsed, isMaximized, isRemoved, toggleCollapse, toggleMaximize, remove } =
  useCardWidget(false)`} />
      <PropsTable
        rows={[
          { name: 'isCollapsed / isMaximized / isRemoved', type: 'boolean', description: 'Current widget state.' },
          { name: 'collapse / expand / toggleCollapse', type: '() => void', description: 'Collapse controls.' },
          { name: 'maximize / minimize / toggleMaximize', type: '() => void', description: 'Maximize controls.' },
          { name: 'remove', type: '() => void', description: 'Mark the card removed.' },
        ]}
      />
      <p className="text-secondary small">Argument: <code>initialCollapsed</code> (boolean, default <code>false</code>).</p>

      <h3 id="use-direct-chat">useDirectChat()</h3>
      <p>Toggle the contacts pane of a chat widget.</p>
      <CodeBlock code={`const { isContactsOpen, toggleContacts, openContacts, closeContacts } = useDirectChat()`} />
      <PropsTable
        rows={[
          { name: 'isContactsOpen', type: 'boolean', description: 'Whether the contacts pane is open.' },
          { name: 'toggleContacts / openContacts / closeContacts', type: '() => void', description: 'Pane controls.' },
        ]}
      />

      <h3 id="use-fullscreen">useFullscreen()</h3>
      <p>Wraps the Fullscreen API. Powers the topbar fullscreen toggle.</p>
      <CodeBlock code={`const { isFullscreen, toggleFullscreen } = useFullscreen()
// enterFullscreen() / exitFullscreen() are also available (return Promise<void>)`} />
      <PropsTable
        rows={[
          { name: 'isFullscreen', type: 'boolean', description: 'Current fullscreen state.' },
          { name: 'toggleFullscreen', type: '() => Promise<void>', description: 'Enter/exit fullscreen.' },
          { name: 'enterFullscreen / exitFullscreen', type: '() => Promise<void>', description: 'Explicit controls.' },
        ]}
      />

      <h3 id="use-treeview-animation">useTreeviewAnimation(isOpen, speed?)</h3>
      <p>
        Animates a collapsible <code>&lt;ul&gt;</code> height. Returns a <code>ref</code> and
        inline <code>style</code> to spread onto the element. Powers the sidebar treeview.
      </p>
      <CodeBlock code={`const { ref, style } = useTreeviewAnimation(isOpen, 300)

<ul ref={ref} style={style} className="nav nav-treeview">…</ul>`} />
      <PropsTable
        rows={[
          { name: 'isOpen', type: 'boolean', description: 'Open/closed state to animate toward.' },
          { name: 'speed', type: 'number', default: '300', description: 'Animation duration in ms.' },
          { name: 'returns.ref', type: 'RefObject<HTMLUListElement>', description: 'Attach to the <ul>.' },
          { name: 'returns.style', type: 'CSSProperties', description: 'Spread onto the <ul>.' },
        ]}
      />

      <h3 id="use-sortable">useSortable(enabled?)</h3>
      <p>
        Initializes drag-and-drop (via SortableJS, lazy-loaded) on every{' '}
        <code>.connectedSortable</code> element — shared group, dragged by{' '}
        <code>.card-header</code>. Install <code>sortablejs</code>. Great for Kanban boards
        and reorderable card columns.
      </p>
      <CodeBlock code={`'use client'
import { useSortable } from 'adminlte-react'

function Board() {
  useSortable()   // pass false to disable
  return (
    <div className="row">
      <div className="col-md-4"><div className="connectedSortable">{/* cards */}</div></div>
      <div className="col-md-4"><div className="connectedSortable">{/* cards */}</div></div>
    </div>
  )
}`} />
      <PropsTable
        rows={[
          { name: 'enabled', type: 'boolean', default: 'true', description: 'Toggle initialization on/off.' },
        ]}
      />
    </DocsPage>
  )
}
