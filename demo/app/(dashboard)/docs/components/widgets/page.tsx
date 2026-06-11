import type { Metadata } from 'next'
import {
  SmallBox,
  InfoBox,
  Card,
  Alert,
  Callout,
  Progress,
  ProgressGroup,
  Ratings,
  Timeline,
  DescriptionBlock,
  ProfileCard,
} from '@adminlte/react'
import { DocsPage } from '@/components/docs/docs-page'
import { CodeBlock } from '@/components/docs/code-block'
import { PropsTable } from '@/components/docs/props-table'

export const metadata: Metadata = {
  title: 'Widgets',
  description: 'API reference for stat boxes, cards, alerts, progress, timeline, charts, navbar dropdowns, and the command palette.',
}

const onThisPage = [
  ['SmallBox', 'small-box'],
  ['InfoBox', 'info-box'],
  ['Card', 'card'],
  ['Alert', 'alert'],
  ['Callout', 'callout'],
  ['Progress', 'progress'],
  ['ProgressGroup', 'progress-group'],
  ['Ratings', 'ratings'],
  ['ProfileCard', 'profile-card'],
  ['DescriptionBlock', 'description-block'],
  ['Timeline', 'timeline'],
  ['NavMessages / NavNotifications / NavTasks', 'navbar-dropdowns'],
  ['DirectChat', 'direct-chat'],
  ['ApexChart / SparklineChart', 'charts'],
  ['WorldMap', 'world-map'],
  ['CommandPalette', 'command-palette'],
]

export default function WidgetsPage() {
  return (
    <DocsPage
      title="Widgets"
      lead="Presentational building blocks for dashboards. Most are Server Components; interactive ones are noted."
    >
      <p className="mb-1"><strong>On this page</strong></p>
      <ul className="columns-2" style={{ columnCount: 2 }}>
        {onThisPage.map(([label, id]) => (
          <li key={id}><a href={`#${id}`}>{label}</a></li>
        ))}
      </ul>

      {/* SmallBox */}
      <h2 id="small-box">SmallBox</h2>
      <p>A colored stat tile with a value, label, icon, and optional footer link.</p>
      <div className="docs-example">
        <div className="row g-3">
          <div className="col-md-6">
            <SmallBox title="150" text="New Orders" theme="primary" icon={<i className="bi bi-bag" />} url="#" />
          </div>
          <div className="col-md-6">
            <SmallBox title="53%" text="Bounce Rate" theme="success" icon={<i className="bi bi-graph-up" />} url="#" />
          </div>
        </div>
      </div>
      <CodeBlock code={`<SmallBox title="150" text="New Orders" theme="primary" icon={<i className="bi bi-bag" />} url="#" />`} />
      <PropsTable
        rows={[
          { name: 'title', type: 'React.ReactNode', required: true, description: 'The large value.' },
          { name: 'text', type: 'string', description: 'Label beneath the value.' },
          { name: 'icon', type: 'React.ReactNode', description: 'Decorative corner icon.' },
          { name: 'theme', type: 'BootstrapTheme', default: "'primary'", description: 'Background color.' },
          { name: 'url', type: 'string', description: 'Footer link target.' },
          { name: 'urlText', type: 'string', default: "'More info'", description: 'Footer link text.' },
        ]}
      />

      {/* InfoBox */}
      <h2 id="info-box">InfoBox</h2>
      <p>A compact metric widget with an icon and an optional progress bar.</p>
      <div className="docs-example">
        <div className="row g-3">
          <div className="col-md-6">
            <InfoBox title="Messages" text="1,410" icon="bi-envelope" theme="info" />
          </div>
          <div className="col-md-6">
            <InfoBox title="Bookmarks" text="410" icon="bi-bookmark" theme="danger" progress={70} progressText="70% increase" />
          </div>
        </div>
      </div>
      <CodeBlock code={`<InfoBox title="Bookmarks" text="410" icon="bi-bookmark" theme="danger" progress={70} progressText="70% increase" />`} />
      <PropsTable
        rows={[
          { name: 'title', type: 'string', description: 'Metric label.' },
          { name: 'text', type: 'string', description: 'Metric value.' },
          { name: 'icon', type: 'string', description: 'Bootstrap Icons class (e.g. bi-envelope).' },
          { name: 'theme', type: 'BootstrapTheme', default: "'info'", description: 'Icon background color.' },
          { name: 'progress', type: 'number', description: 'If set (0–100), renders a progress bar.' },
          { name: 'progressText', type: 'string', description: 'Caption under the progress bar.' },
        ]}
      />

      {/* Card */}
      <h2 id="card">Card <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>
        A container with header, body, and footer. Supports three color treatments via{' '}
        <code>variant</code> (<code>default</code>, <code>outline</code>, <code>solid</code>)
        and built-in collapse / maximize / remove tools.
      </p>
      <div className="docs-example">
        <Card title="Collapsible card" theme="primary" variant="outline" collapsible maximizable>
          The body of the card. Use the tools in the header to collapse or maximize it.
        </Card>
      </div>
      <CodeBlock code={`<Card title="Sales" theme="primary" variant="outline" collapsible maximizable>
  The body of the card.
</Card>`} />
      <PropsTable
        rows={[
          { name: 'children', type: 'React.ReactNode', required: true, description: 'Card body content.' },
          { name: 'title', type: 'string', description: 'Header title.' },
          { name: 'icon', type: 'string', description: 'Bootstrap Icons class shown in the header.' },
          { name: 'theme', type: 'BootstrapTheme', description: 'Applies the color treatment.' },
          { name: 'variant', type: "'default' | 'outline' | 'solid'", default: "'default'", description: "Colored header, colored top border, or fully colored card." },
          { name: 'collapsible', type: 'boolean', description: 'Show the collapse tool.' },
          { name: 'defaultCollapsed', type: 'boolean', description: 'Start collapsed.' },
          { name: 'maximizable', type: 'boolean', description: 'Show the maximize tool.' },
          { name: 'removable', type: 'boolean', description: 'Show the remove tool.' },
          { name: 'tools', type: 'React.ReactNode', description: 'Extra header tools.' },
          { name: 'footer', type: 'React.ReactNode', description: 'Footer content.' },
          { name: 'bodyClass / headerClass / footerClass', type: 'string', description: 'Section class overrides.' },
          { name: 'className', type: 'string', description: 'Class on the card element.' },
          { name: 'outline', type: 'boolean', description: 'Deprecated — use variant="outline".' },
        ]}
      />

      {/* Alert */}
      <h2 id="alert">Alert</h2>
      <p>A contextual message, optionally with an icon, title, and dismiss button.</p>
      <div className="docs-example">
        <Alert theme="success" title="Success!" icon="bi-check-circle" dismissable>
          Your changes have been saved.
        </Alert>
        <Alert theme="warning" icon="bi-exclamation-triangle">
          Heads up — double-check your input.
        </Alert>
      </div>
      <CodeBlock code={`<Alert theme="success" title="Success!" icon="bi-check-circle" dismissable>
  Your changes have been saved.
</Alert>`} />
      <PropsTable
        rows={[
          { name: 'children', type: 'React.ReactNode', required: true, description: 'Alert body.' },
          { name: 'theme', type: 'BootstrapTheme', default: "'info'", description: 'Alert color.' },
          { name: 'title', type: 'string', description: 'Bold heading.' },
          { name: 'icon', type: 'string', description: 'Bootstrap Icons class.' },
          { name: 'dismissable', type: 'boolean', description: 'Render a close button.' },
        ]}
      />

      {/* Callout */}
      <h2 id="callout">Callout</h2>
      <p>A bordered, highlighted block for tips and notes.</p>
      <div className="docs-example">
        <Callout theme="info" title="Did you know?">
          Callouts are great for inline documentation notes.
        </Callout>
      </div>
      <CodeBlock code={`<Callout theme="info" title="Did you know?">
  Callouts are great for inline documentation notes.
</Callout>`} />
      <PropsTable
        rows={[
          { name: 'children', type: 'React.ReactNode', required: true, description: 'Callout body.' },
          { name: 'theme', type: 'BootstrapTheme', default: "'info'", description: 'Accent color.' },
          { name: 'title', type: 'string', description: 'Heading.' },
          { name: 'icon', type: 'string', description: 'Bootstrap Icons class.' },
        ]}
      />

      {/* Progress */}
      <h2 id="progress">Progress</h2>
      <p>A single progress bar with optional stripes, animation, and label.</p>
      <div className="docs-example">
        <Progress value={45} theme="primary" showLabel />
        <Progress value={80} theme="success" striped animated />
      </div>
      <CodeBlock code={`<Progress value={45} theme="primary" showLabel />
<Progress value={80} theme="success" striped animated />`} />
      <PropsTable
        rows={[
          { name: 'value', type: 'number', default: '0', description: 'Fill percentage (0–100).' },
          { name: 'theme', type: 'BootstrapTheme', default: "'primary'", description: 'Bar color.' },
          { name: 'striped', type: 'boolean', description: 'Striped bar.' },
          { name: 'animated', type: 'boolean', description: 'Animate the stripes.' },
          { name: 'height', type: 'string', description: 'Track height (e.g. "1.5rem").' },
          { name: 'showLabel', type: 'boolean', description: 'Show the percentage inside the bar.' },
        ]}
      />

      {/* ProgressGroup */}
      <h2 id="progress-group">ProgressGroup</h2>
      <p>A labeled progress row with a value over a max.</p>
      <div className="docs-example">
        <ProgressGroup label="Add Products to Cart" value={160} max={200} color="primary" />
        <ProgressGroup label="Complete Purchase" value={310} max={400} color="danger" />
      </div>
      <CodeBlock code={`<ProgressGroup label="Add Products to Cart" value={160} max={200} color="primary" />`} />
      <PropsTable
        rows={[
          { name: 'label', type: 'string', required: true, description: 'Row label.' },
          { name: 'value', type: 'number', required: true, description: 'Current value.' },
          { name: 'max', type: 'number', default: '100', description: 'Maximum value.' },
          { name: 'color', type: 'BootstrapTheme', default: "'primary'", description: 'Bar color.' },
          { name: 'showPercentage', type: 'boolean', default: 'true', description: 'Show the computed percentage.' },
        ]}
      />

      {/* Ratings */}
      <h2 id="ratings">Ratings</h2>
      <p>A star rating display.</p>
      <div className="docs-example">
        <Ratings value={4} />
        <Ratings value={3} max={5} color="danger" />
      </div>
      <CodeBlock code={`<Ratings value={4} />
<Ratings value={3} max={5} color="danger" />`} />
      <PropsTable
        rows={[
          { name: 'value', type: 'number', required: true, description: 'Number of filled stars.' },
          { name: 'max', type: 'number', default: '5', description: 'Total stars.' },
          { name: 'color', type: 'BootstrapTheme', default: "'warning'", description: 'Star color.' },
          { name: 'readonly', type: 'boolean', default: 'true', description: 'Display-only (no interaction).' },
          { name: 'className', type: 'string', description: 'Wrapper class.' },
        ]}
      />

      {/* ProfileCard */}
      <h2 id="profile-card">ProfileCard</h2>
      <p>A user profile card with avatar, title, description, and social links.</p>
      <div className="docs-example">
        <div className="row"><div className="col-md-6">
          <ProfileCard
            name="Nina Mcintire"
            title="Software Engineer"
            description="UI/UX, design systems, and front-end performance."
            socials={[
              { icon: 'bi-github', url: '#', label: 'GitHub' },
              { icon: 'bi-twitter-x', url: '#', label: 'X' },
            ]}
          />
        </div></div>
      </div>
      <CodeBlock code={`<ProfileCard
  name="Nina Mcintire"
  title="Software Engineer"
  description="UI/UX and front-end performance."
  socials={[{ icon: 'bi-github', url: '#', label: 'GitHub' }]}
/>`} />
      <PropsTable
        rows={[
          { name: 'name', type: 'string', required: true, description: 'Display name.' },
          { name: 'title', type: 'string', description: 'Role / subtitle.' },
          { name: 'image', type: 'string', description: 'Avatar image src.' },
          { name: 'imageAlt', type: 'string', default: "'User'", description: 'Avatar alt text.' },
          { name: 'description', type: 'string', description: 'Short bio.' },
          { name: 'socials', type: 'Array<{ icon: string; url: string; label?: string }>', description: 'Social links.' },
          { name: 'children', type: 'React.ReactNode', description: 'Extra footer content.' },
          { name: 'className', type: 'string', description: 'Card class.' },
        ]}
      />

      {/* DescriptionBlock */}
      <h2 id="description-block">DescriptionBlock</h2>
      <p>A label/value block, useful for KPI strips and detail panes.</p>
      <div className="docs-example">
        <div className="row">
          <div className="col-6">
            <DescriptionBlock title="$35,210.43" text="Total Revenue" />
          </div>
          <div className="col-6">
            <DescriptionBlock title="Order #4219" items={{ Customer: 'A. Pierce', Status: 'Shipped', Total: '$120.00' }} />
          </div>
        </div>
      </div>
      <CodeBlock code={`<DescriptionBlock title="$35,210.43" text="Total Revenue" />
<DescriptionBlock title="Order #4219" items={{ Customer: 'A. Pierce', Status: 'Shipped' }} />`} />
      <PropsTable
        rows={[
          { name: 'title', type: 'string', required: true, description: 'Primary heading / value.' },
          { name: 'text', type: 'string', description: 'Caption under the title.' },
          { name: 'items', type: 'Record<string, string>', description: 'Key/value pairs rendered as a list.' },
          { name: 'className', type: 'string', description: 'Wrapper class.' },
        ]}
      />

      {/* Timeline */}
      <h2 id="timeline">Timeline</h2>
      <p>A vertical, time-ordered list of events.</p>
      <div className="docs-example">
        <Timeline
          items={[
            { time: '12:05', icon: 'bi-envelope', iconTheme: 'primary', title: 'New message', body: 'Support replied to your ticket.' },
            { time: '09:30', icon: 'bi-person', iconTheme: 'success', title: 'New user registered' },
          ]}
        />
      </div>
      <CodeBlock code={`<Timeline
  items={[
    { time: '12:05', icon: 'bi-envelope', iconTheme: 'primary', title: 'New message', body: 'Support replied.' },
    { time: '09:30', icon: 'bi-person', iconTheme: 'success', title: 'New user registered' },
  ]}
/>`} />
      <PropsTable
        rows={[
          { name: 'items', type: 'TimelineItem[]', required: true, description: 'Events: { time, title, icon?, iconTheme?, body?, footer?, url? }.' },
          { name: 'className', type: 'string', description: 'Wrapper class.' },
        ]}
      />

      {/* Navbar dropdowns */}
      <h2 id="navbar-dropdowns">NavMessages / NavNotifications / NavTasks <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>
        Topbar dropdown widgets. Pass them to <code>DashboardLayout</code>&apos;s{' '}
        <code>topbarEnd</code>. Each shows a badge with the item count.
      </p>
      <CodeBlock code={`<DashboardLayout
  menuItems={menuItems}
  topbarEnd={
    <>
      <NavMessages
        messages={[{ from: 'Brad', text: 'Call me', time: '4h', star: 'danger' }]}
      />
      <NavNotifications
        notifications={[{ text: '5 new reports', icon: 'bi-file-earmark', time: '2d' }]}
        count={15}
      />
      <NavTasks tasks={[{ text: 'Design review', progress: 40, color: 'danger' }]} />
    </>
  }
>
  {children}
</DashboardLayout>`} />
      <h3>NavMessages props</h3>
      <PropsTable
        rows={[
          { name: 'messages', type: 'NavMessage[]', required: true, description: '{ from, text, image?, url?, time?, star? }.' },
          { name: 'badgeColor', type: 'BootstrapTheme', default: "'danger'", description: 'Badge color.' },
          { name: 'count', type: 'number | string', description: 'Badge count (defaults to messages.length).' },
          { name: 'seeAllUrl', type: 'string', default: "'#'", description: 'Footer link target.' },
          { name: 'seeAllText', type: 'string', default: "'See All Messages'", description: 'Footer link text.' },
        ]}
      />
      <h3>NavNotifications props</h3>
      <PropsTable
        rows={[
          { name: 'notifications', type: 'NavNotification[]', required: true, description: '{ text, icon?, time?, url? }.' },
          { name: 'badgeColor', type: 'BootstrapTheme', default: "'danger'", description: 'Badge color.' },
          { name: 'count', type: 'number | string', description: 'Badge count (defaults to length).' },
          { name: 'seeAllText', type: 'string', default: "'See All Notifications'", description: 'Footer link text.' },
        ]}
      />
      <h3>NavTasks props</h3>
      <PropsTable
        rows={[
          { name: 'tasks', type: 'NavTask[]', required: true, description: '{ text, progress, color?, url? }.' },
          { name: 'badgeColor', type: 'BootstrapTheme', default: "'warning'", description: 'Badge color.' },
          { name: 'seeAllText', type: 'string', default: "'See All Tasks'", description: 'Footer link text.' },
        ]}
      />

      {/* DirectChat */}
      <h2 id="direct-chat">DirectChat <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>A chat card with a message thread and a slide-in contacts pane.</p>
      <CodeBlock code={`<DirectChat
  badge={3}
  messages={[
    { from: 'Sarah', image: '/sarah.png', timestamp: '2:15', text: 'Hey there!' },
    { from: 'Me', image: '/me.png', timestamp: '2:16', text: 'Hi!', isOwn: true },
  ]}
  contacts={[{ name: 'Sarah', image: '/sarah.png', date: '1:30', preview: 'See you soon' }]}
/>`} />
      <PropsTable
        rows={[
          { name: 'messages', type: 'DirectChatMessage[]', default: '[]', description: '{ from, image, timestamp, text, isOwn? }.' },
          { name: 'contacts', type: 'DirectChatContact[]', default: '[]', description: '{ name, image, date, preview }.' },
          { name: 'badge', type: 'number', default: '0', description: 'Unread badge in the header.' },
          { name: 'collapsible', type: 'boolean', default: 'true', description: 'Show the collapse tool.' },
          { name: 'removable', type: 'boolean', default: 'true', description: 'Show the remove tool.' },
          { name: 'onRemove', type: '() => void', description: 'Called when removed.' },
          { name: 'className', type: 'string', description: 'Card class.' },
        ]}
      />

      {/* Charts */}
      <h2 id="charts">ApexChart / SparklineChart <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>
        ApexCharts wrappers. <code>ApexChart</code> takes a full ApexCharts config;{' '}
        <code>SparklineChart</code> is a minimal inline chart from a number array. Both
        lazy-load <code>apexcharts</code> — see{' '}
        <a href="/docs/plugins">Plugins</a> for the required CSS.
      </p>
      <CodeBlock code={`<ApexChart
  id="sales"
  series={[{ name: 'Sales', data: [30, 40, 35, 50, 49, 60] }]}
  config={{ chart: { type: 'line', height: 300 }, xaxis: { categories: ['Jan','Feb','Mar','Apr','May','Jun'] } }}
/>

<SparklineChart id="spark" data={[5, 9, 7, 12, 10, 15]} />`} />
      <PropsTable
        rows={[
          { name: 'id', type: 'string', required: true, description: 'Unique DOM id for the chart container.' },
          { name: 'series', type: 'any[]', required: true, description: 'ApexCharts series (ApexChart only).' },
          { name: 'config', type: 'Record<string, any>', required: true, description: 'ApexCharts options (ApexChart only).' },
          { name: 'data', type: 'number[]', required: true, description: 'Data points (SparklineChart only).' },
        ]}
      />

      {/* WorldMap */}
      <h2 id="world-map">WorldMap <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>A vector world map powered by jsVectorMap (lazy-loaded).</p>
      <CodeBlock code={`<WorldMap id="visitors-map" height={260} />`} />
      <PropsTable
        rows={[
          { name: 'id', type: 'string', required: true, description: 'Unique DOM id.' },
          { name: 'height', type: 'number', default: '220', description: 'Map height in pixels.' },
        ]}
      />

      {/* CommandPalette */}
      <h2 id="command-palette">CommandPalette <span className="badge text-bg-secondary fw-normal align-middle">client</span></h2>
      <p>
        A ⌘K / Ctrl+K searchable navigator. <code>DashboardLayout</code> already renders one
        built from your <code>menuItems</code>, so you usually don&apos;t mount it yourself.
        To build a custom set, use <code>flattenMenuToCommands</code> or supply your own{' '}
        <code>CommandItem[]</code>.
      </p>
      <CodeBlock code={`import { CommandPalette, flattenMenuToCommands } from '@adminlte/react'

const items = flattenMenuToCommands(menuItems)
// items: { label, href, icon?, section? }[]

<CommandPalette items={items} placeholder="Jump to…" />`} />
      <PropsTable
        rows={[
          { name: 'items', type: 'CommandItem[]', required: true, description: '{ label, href, icon?, section? }.' },
          { name: 'placeholder', type: 'string', default: "'Search pages…'", description: 'Search input placeholder.' },
        ]}
      />
      <p className="text-secondary small">
        <code>flattenMenuToCommands(nodes)</code> walks a <code>MenuNode[]</code> tree,
        skips placeholder links (<code>href === &apos;#&apos;</code>), and de-duplicates by
        href.
      </p>
    </DocsPage>
  )
}
