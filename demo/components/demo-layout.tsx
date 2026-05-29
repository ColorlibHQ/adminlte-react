import { DashboardLayout, NavMessages, NavNotifications } from 'adminlte-react'
import type { DashboardLayoutProps } from 'adminlte-react'
import { menuItems } from '@/lib/menu'
import { withBase } from '@/lib/base'

const sampleMessages = [
  { from: 'Brad Diesel', image: withBase('/assets/img/user1-128x128.jpg'), text: 'Call me whenever you can...', time: '4 Hours Ago', star: 'danger' as const },
  { from: 'John Pierce', image: withBase('/assets/img/user8-128x128.jpg'), text: 'I got your message bro', time: '4 Hours Ago', star: 'secondary' as const },
  { from: 'Nora Silvester', image: withBase('/assets/img/user3-128x128.jpg'), text: 'The subject goes here', time: '4 Hours Ago', star: 'warning' as const },
]

const sampleNotifications = [
  { text: '4 new messages', icon: 'bi-envelope', time: '3 mins' },
  { text: '8 friend requests', icon: 'bi-people-fill', time: '12 hours' },
  { text: '3 new reports', icon: 'bi-file-earmark-fill', time: '2 days' },
]

const TopbarStart = (
  <>
    <li className="nav-item d-none d-md-block">
      <a href={withBase('/')} className="nav-link">
        <i className="bi bi-grid-1x2 me-1" aria-hidden="true"></i>
        Live preview
      </a>
    </li>
    <li className="nav-item d-none d-md-block">
      <a href={withBase('/docs/introduction')} className="nav-link">
        <i className="bi bi-book me-1" aria-hidden="true"></i>
        Documentation
      </a>
    </li>
  </>
)

export type DemoLayoutProps = Partial<DashboardLayoutProps> & { children: React.ReactNode }

/**
 * Demo-wide layout wrapper: applies the shared brand, signed-in user, topbar
 * links and dropdowns, then forwards any layout flags (fixedHeader, sidebarMini,
 * dir, …) to the library DashboardLayout.
 */
export function DemoLayout({ children, ...props }: DemoLayoutProps) {
  return (
    <DashboardLayout
      menuItems={menuItems}
      logo={withBase('/assets/img/AdminLTELogo.png')}
      logoHref={withBase('/')}
      colorModeToggle
      initialColorMode="light"
      user={{
        name: 'Aigars Silkalns',
        image: 'https://github.com/puikinsh.png',
        role: 'Web Developer',
        memberSince: 'Nov. 2023',
      }}
      topbarStart={TopbarStart}
      topbarEnd={
        <>
          <NavMessages messages={sampleMessages} badgeColor="danger" />
          <NavNotifications notifications={sampleNotifications} count={15} badgeColor="warning" />
        </>
      }
      {...props}
    >
      {children}
    </DashboardLayout>
  )
}
