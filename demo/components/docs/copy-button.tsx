'use client'

import { useEffect, useRef, useState } from 'react'

/** Copy-to-clipboard button for code samples, with brief "copied" feedback. */
export function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false)
  const timerRef = useRef<number | undefined>(undefined)

  useEffect(() => () => window.clearTimeout(timerRef.current), [])

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text)
      setCopied(true)
      window.clearTimeout(timerRef.current)
      timerRef.current = window.setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (insecure context / permissions) — silently ignore
    }
  }

  return (
    <button
      type="button"
      className="btn btn-sm btn-link p-0 text-decoration-none docs-copy-btn"
      onClick={copy}
      aria-label={copied ? 'Copied' : 'Copy code to clipboard'}
    >
      <i className={`bi ${copied ? 'bi-check-lg text-success' : 'bi-clipboard'}`} aria-hidden="true"></i>
      <span className="ms-1">{copied ? 'Copied' : 'Copy'}</span>
    </button>
  )
}
