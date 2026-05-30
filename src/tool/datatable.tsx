'use client'

import { useEffect, useId, useRef } from 'react'

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
  id,
  columns,
  data,
  apiUrl,
  tabulatorOptions,
  className,
}: DatatableProps) {
  const tableRef = useRef<HTMLDivElement>(null)
  const reactId = useId()
  const tableId = id ?? `datatable-${reactId.replace(/:/g, '')}`

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
    <div id={tableId} ref={tableRef} className={`datatable ${className || ''}`}></div>
  )
}
