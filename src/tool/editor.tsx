'use client'

import { useEffect, useRef, useState } from 'react'

export interface EditorProps {
  name: string
  label?: string
  value?: string
  /** Init-only: Quill 2 has no re-init API, so changes after mount are ignored. */
  placeholder?: string
  /** Init-only: Quill 2 has no re-init API, so changes after mount are ignored. */
  quillOptions?: Record<string, unknown>
  fgroupClass?: string
  onChange?: (html: string) => void
}

export function Editor({
  name,
  label,
  value = '',
  placeholder = 'Enter text...',
  quillOptions,
  fgroupClass,
  onChange,
}: EditorProps) {
  const editorRef = useRef<HTMLDivElement>(null)
  const quillRef = useRef<unknown>(null)
  const onChangeRef = useRef(onChange)
  const [isLoading, setIsLoading] = useState(true)
  const [html, setHtml] = useState(value)

  useEffect(() => {
    onChangeRef.current = onChange
  }, [onChange])

  useEffect(() => {
    const element = editorRef.current
    if (!element) return

    let cancelled = false

    // Dynamically import Quill only when component mounts
    // @ts-ignore - Dynamic import
    import('quill').then(({ default: Quill }) => {
      // Guard: unmounted before the import resolved, or already initialized
      if (cancelled || quillRef.current) return

      const quill = new Quill(element, {
        theme: 'snow',
        placeholder,
        ...quillOptions,
      })
      quillRef.current = quill

      // Set initial HTML directly
      if (value) {
        element.querySelector('.ql-editor')!.innerHTML = value
      }

      // Handle changes
      quill.on('text-change', () => {
        const current = element.querySelector('.ql-editor')!.innerHTML
        setHtml(current)
        onChangeRef.current?.(current)
      })

      setIsLoading(false)
    })

    return () => {
      cancelled = true
    }
    // Init-only effect: Quill 2 cannot be destroyed/re-created on the same element
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  // Sync controlled `value` updates into the editor (no-op when the change
  // originated from the editor itself, since innerHTML already matches)
  useEffect(() => {
    const element = editorRef.current
    if (!element || !quillRef.current) return

    const editorEl = element.querySelector('.ql-editor')
    if (editorEl && editorEl.innerHTML !== value) {
      editorEl.innerHTML = value
      setHtml(value)
    }
  }, [value])

  return (
    <div className={`mb-3 ${fgroupClass || ''}`}>
      {label && <label className="form-label">{label}</label>}

      {isLoading && (
        <div className="p-3 text-muted text-center">
          <small>Loading editor...</small>
        </div>
      )}

      <div
        ref={editorRef}
        className="editor"
        style={{ display: isLoading ? 'none' : 'block' }}
      ></div>

      <input type="hidden" name={name} value={html} />
    </div>
  )
}
