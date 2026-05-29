'use client'

import { useEffect, useRef } from 'react'

const data = [
  { id: 1, name: 'Olivia Bennett', email: 'olivia@example.com', role: 'Admin', status: 'Active', joined: '2024-03-12' },
  { id: 2, name: 'Liam Carter', email: 'liam@example.com', role: 'Editor', status: 'Active', joined: '2024-04-08' },
  { id: 3, name: 'Emma Dawson', email: 'emma@example.com', role: 'Viewer', status: 'Invited', joined: '2024-06-21' },
  { id: 4, name: 'Noah Evans', email: 'noah@example.com', role: 'Editor', status: 'Suspended', joined: '2024-07-15' },
  { id: 5, name: 'Ava Foster', email: 'ava@example.com', role: 'Admin', status: 'Active', joined: '2024-08-30' },
  { id: 6, name: 'Ethan Grant', email: 'ethan@example.com', role: 'Viewer', status: 'Active', joined: '2024-09-14' },
  { id: 7, name: 'Sophia Hayes', email: 'sophia@example.com', role: 'Editor', status: 'Active', joined: '2024-10-02' },
  { id: 8, name: 'Mason Ingram', email: 'mason@example.com', role: 'Viewer', status: 'Invited', joined: '2024-11-19' },
  { id: 9, name: 'Isabella Jones', email: 'isabella@example.com', role: 'Admin', status: 'Active', joined: '2025-01-05' },
  { id: 10, name: 'Lucas Klein', email: 'lucas@example.com', role: 'Viewer', status: 'Suspended', joined: '2025-02-18' },
  { id: 11, name: 'Mia Lopez', email: 'mia@example.com', role: 'Editor', status: 'Active', joined: '2025-03-22' },
  { id: 12, name: 'Logan Moore', email: 'logan@example.com', role: 'Viewer', status: 'Active', joined: '2025-04-09' },
  { id: 13, name: 'Charlotte Nelson', email: 'charlotte@example.com', role: 'Admin', status: 'Active', joined: '2025-04-27' },
  { id: 14, name: 'Henry Owens', email: 'henry@example.com', role: 'Editor', status: 'Invited', joined: '2025-05-11' },
  { id: 15, name: 'Amelia Price', email: 'amelia@example.com', role: 'Viewer', status: 'Active', joined: '2025-05-17' },
]

function statusBadge(cell: any) {
  const value = cell.getValue()
  const map: Record<string, string> = { Active: 'success', Invited: 'info', Suspended: 'secondary' }
  const color = map[value] || 'secondary'
  return `<span class="badge text-bg-${color}">${value}</span>`
}

export function UsersTable() {
  const tableRef = useRef<HTMLDivElement>(null)
  const instanceRef = useRef<any>(null)

  useEffect(() => {
    let cancelled = false
    const el = tableRef.current
    if (!el) return

    import('tabulator-tables').then((mod: any) => {
      if (cancelled || !tableRef.current) return
      const Tabulator = mod.TabulatorFull || mod.default || mod.Tabulator

      const table = new Tabulator(el, {
        data,
        layout: 'fitColumns',
        pagination: true,
        paginationSize: 10,
        paginationSizeSelector: [10, 25, 50, 100],
        movableColumns: true,
        columns: [
          { title: '#', field: 'id', width: 60, headerSort: true },
          { title: 'Name', field: 'name', headerFilter: 'input' },
          { title: 'Email', field: 'email', headerFilter: 'input' },
          { title: 'Role', field: 'role', headerFilter: 'list', headerFilterParams: { values: ['', 'Admin', 'Editor', 'Viewer'] }, width: 120 },
          { title: 'Status', field: 'status', formatter: statusBadge, headerFilter: 'list', headerFilterParams: { values: ['', 'Active', 'Invited', 'Suspended'] }, width: 130, hozAlign: 'center' },
          { title: 'Joined', field: 'joined', sorter: 'date', width: 130 },
        ],
      })
      instanceRef.current = table

      const filter = document.getElementById('table-filter') as HTMLInputElement | null
      const onFilter = (e: Event) => {
        const value = (e.target as HTMLInputElement).value
        if (value) {
          table.setFilter([[
            { field: 'name', type: 'like', value },
            { field: 'email', type: 'like', value },
          ]])
        } else {
          table.clearFilter(true)
        }
      }
      filter?.addEventListener('input', onFilter)

      const csv = document.getElementById('export-csv')
      const json = document.getElementById('export-json')
      const printBtn = document.getElementById('print-table')
      const onCsv = () => table.download('csv', 'users.csv')
      const onJson = () => table.download('json', 'users.json')
      const onPrint = () => table.print(false, true)
      csv?.addEventListener('click', onCsv)
      json?.addEventListener('click', onJson)
      printBtn?.addEventListener('click', onPrint)

      ;(instanceRef.current as any)._cleanup = () => {
        filter?.removeEventListener('input', onFilter)
        csv?.removeEventListener('click', onCsv)
        json?.removeEventListener('click', onJson)
        printBtn?.removeEventListener('click', onPrint)
      }
    })

    return () => {
      cancelled = true
      if (instanceRef.current) {
        instanceRef.current._cleanup?.()
        instanceRef.current.destroy?.()
        instanceRef.current = null
      }
    }
  }, [])

  return <div id="users-table" ref={tableRef}></div>
}
