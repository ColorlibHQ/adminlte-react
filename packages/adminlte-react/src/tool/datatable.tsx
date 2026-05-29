'use client'

import { useEffect, useRef } from 'react'

export interface DatatableColumn {
  title: string
  field: string
  sorter?: string
  formatter?: string
  width?: number | string
}

export interface DatatableProps {
  id?: string
  columns: DatatableColumn[]
  data?: Record<string, unknown>[]
  apiUrl?: string
  tabulatorOptions?: Record<string, unknown>
  className?: string
}

export function Datatable({
  id = `datatable-${Math.random().toString(36).substr(2, 9)}`,
  columns,
  data,
  apiUrl,
  tabulatorOptions,
  className,
}: DatatableProps) {
  const tableRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = tableRef.current
    if (!element) return

    // Dynamically import Tabulator only when component mounts
    // @ts-ignore - Dynamic import
    import('tabulator-tables').then(({ default: Tabulator }) => {
      const tableOptions = {
        columns: columns.map(col => ({
          title: col.title,
          field: col.field,
          sorter: col.sorter || 'string',
          formatter: col.formatter || 'plaintext',
          width: col.width || 150,
        })),
        ...(apiUrl
          ? { ajaxURL: apiUrl, ajaxProgressiveLoad: 'scroll' }
          : { data: data || [] }),
        ...tabulatorOptions,
      }

      new Tabulator(element, tableOptions)
    })
  }, [columns, data, apiUrl, tabulatorOptions])

  return (
    <div id={id} ref={tableRef} className={`datatable ${className || ''}`}></div>
  )
}
