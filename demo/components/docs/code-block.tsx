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
  return (
    <div className="docs-codeblock">
      <div className="docs-codeblock-head">
        <span>{filename || language}</span>
      </div>
      <pre className="docs-pre">
        <code>{code.trim()}</code>
      </pre>
    </div>
  )
}
