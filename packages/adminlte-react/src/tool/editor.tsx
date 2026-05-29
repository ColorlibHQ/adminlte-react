'use client'

import { useEffect, useRef, useState } from 'react'

export interface EditorProps {
  name: string
  label?: string
  value?: string
  placeholder?: string
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
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const element = editorRef.current
    if (!element) return

    // Dynamically import Quill only when component mounts
    // @ts-ignore - Dynamic import
    import('quill').then(({ default: Quill }) => {
      const quill = new Quill(element, {
        theme: 'snow',
        placeholder,
        ...quillOptions,
      })

      // Set initial HTML directly
      if (value) {
        element.querySelector('.ql-editor')!.innerHTML = value
      }

      // Handle changes
      quill.on('text-change', () => {
        const html = element.querySelector('.ql-editor')!.innerHTML
        onChange?.(html)
      })

      setIsLoading(false)
    })
  }, [placeholder, quillOptions])

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

      <input type="hidden" name={name} value={value} />
    </div>
  )
}
