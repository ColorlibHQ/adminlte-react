'use client'

import Link from 'next/link'
import type { LinkComponent } from '@colorlib/adminlte-react'
import { BASE } from '@/lib/base'

/**
 * Router link injected into the library sidebar.
 *
 * At the domain root (local dev / root deploys) it uses `next/link` for instant
 * client-side navigation. Under the subpath export (`/themes/next-react`) there is
 * no Next `basePath`, so the client router can't resolve subpath URLs — a plain
 * `<a>` (full-page navigation, the proven behavior) is used instead.
 */
export const NavLink: LinkComponent = ({ href, children, ...rest }) => {
  if (BASE) {
    return (
      <a href={href} {...rest}>
        {children}
      </a>
    )
  }
  return (
    <Link href={href} {...rest}>
      {children}
    </Link>
  )
}
