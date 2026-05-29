export interface PropRow {
  name: string
  type: string
  default?: string
  required?: boolean
  description?: string
}

/**
 * Renders a component prop reference as a Bootstrap table.
 */
export function PropsTable({ rows }: { rows: PropRow[] }) {
  return (
    <div className="table-responsive">
      <table className="table table-sm table-striped align-middle docs-props">
        <thead>
          <tr>
            <th style={{ minWidth: '9rem' }}>Prop</th>
            <th>Type</th>
            <th>Default</th>
            <th style={{ minWidth: '14rem' }}>Description</th>
          </tr>
        </thead>
        <tbody>
          {rows.map(row => (
            <tr key={row.name}>
              <td>
                <code>{row.name}</code>
                {row.required && <span className="badge text-bg-danger ms-1 fw-normal">required</span>}
              </td>
              <td>
                <code className="text-primary">{row.type}</code>
              </td>
              <td>
                {row.default ? <code>{row.default}</code> : <span className="text-secondary">—</span>}
              </td>
              <td>{row.description || <span className="text-secondary">—</span>}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
