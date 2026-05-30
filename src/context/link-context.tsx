'use client'

import { createContext, useContext } from 'react'
import type { AnchorHTMLAttributes, ReactNode } from 'react'

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  href: string
  children?: ReactNode
}

/**
 * A drop-in replacement for `<a>`. Library consumers can inject their framework's
 * router link (e.g. Next.js `next/link`, React Router `Link`) so in-app navigation
 * is client-side. Must accept `href` plus the usual anchor props and render an `<a>`.
 */
export type LinkComponent = (props: LinkProps) => ReactNode

/** Framework-agnostic fallback: a plain anchor (full-page navigation). */
const DefaultLink: LinkComponent = ({ href, children, ...rest }) => (
  <a href={href} {...rest}>
    {children}
  </a>
)

const LinkContext = createContext<LinkComponent>(DefaultLink)

export function LinkProvider({
  component,
  children,
}: {
  component?: LinkComponent
  children: ReactNode
}) {
  return <LinkContext.Provider value={component ?? DefaultLink}>{children}</LinkContext.Provider>
}

/** The active Link component — consumer-injected router link, or a plain `<a>` fallback. */
export function useLinkComponent(): LinkComponent {
  return useContext(LinkContext)
}
