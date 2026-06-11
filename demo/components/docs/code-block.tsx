import { CopyButton } from './copy-button'

interface CodeBlockProps {
  code: string
  /** Short label shown in the header bar (e.g. "tsx", "bash"). */
  language?: string
  /** Optional file name shown instead of the language label. */
  filename?: string
}

/**
 * Static, theme-aware code sample. No syntax-highlighting dependency — just a
 * styled <pre> that respects dark mode via Bootstrap CSS variables.
 */
export function CodeBlock({ code, language = 'tsx', filename }: CodeBlockProps) {
  const trimmed = code.trim()

  return (
    <div className="docs-codeblock">
      <div className="docs-codeblock-head d-flex justify-content-between align-items-center">
        <span>{filename || language}</span>
        <CopyButton text={trimmed} />
      </div>
      <pre className="docs-pre">
        <code>{trimmed}</code>
      </pre>
    </div>
  )
}
