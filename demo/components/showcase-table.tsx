'use client'

import { Table, Badge } from 'adminlte-react'

interface Person {
  name: string
  role: string
  status: 'Active' | 'Invited'
}

const people: Person[] = [
  { name: 'Olivia Bennett', role: 'Design Lead', status: 'Active' },
  { name: 'Marcus Reyes', role: 'Engineer', status: 'Active' },
  { name: 'Sara Khan', role: 'PM', status: 'Invited' },
]

/**
 * Table showcase. Lives in a client component because the library bundle is marked
 * `"use client"`, so its function props (`rowKey`, cell `render`) must be passed
 * from within a client boundary, not a Server Component.
 */
export function ShowcaseTable() {
  return (
    <Table<Person>
      striped
      hover
      rowKey={p => p.name}
      columns={[
        { key: 'name', header: 'Name' },
        { key: 'role', header: 'Role' },
        {
          key: 'status',
          header: 'Status',
          align: 'end',
          render: p => (
            <Badge theme={p.status === 'Active' ? 'success' : 'secondary'}>{p.status}</Badge>
          ),
        },
      ]}
      data={people}
    />
  )
}
