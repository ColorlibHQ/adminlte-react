'use client'

import { useEffect } from 'react'
import type { AuthLayoutProps } from '../types/layout'

/**
 * Standalone auth page layout (login/register/lockscreen).
 * Applies the `<authType>-page` classes to <body> via effect so it works
 * under a Next.js App Router root layout that already owns <html>/<body>.
 */
export function AuthLayout({
  authType = 'login',
  logo = <><b>Admin</b>LTE</>,
  logoHref = '/',
  children,
}: AuthLayoutProps) {
  useEffect(() => {
    const cls = [`${authType}-page`, 'bg-body-secondary']
    document.body.classList.add(...cls)
    return () => document.body.classList.remove(...cls)
  }, [authType])

  return (
    <div className={`${authType}-box`}>
      <div className={`${authType}-logo`}>
        <a href={logoHref}>{logo}</a>
      </div>

      <div className="card">
        <div className={`card-body ${authType}-card-body`}>{children}</div>
      </div>
    </div>
  )
}
