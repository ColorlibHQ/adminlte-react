import type { ReactNode, Key } from 'react'
import { cn } from '../lib/class-name'

export interface TableColumn<T> {
  /** Key into the row, or a unique id when using `render`. */
  key: string
  header: ReactNode
  /** Custom cell renderer; defaults to `String(row[key])`. */
  render?: (row: T, index: number) => ReactNode
  align?: 'start' | 'center' | 'end'
  className?: string
  headerClassName?: string
}

export interface TableProps<T> {
  columns: TableColumn<T>[]
  data: T[]
  rowKey?: (row: T, index: number) => Key
  striped?: boolean
  hover?: boolean
  bordered?: boolean
  borderless?: boolean
  small?: boolean
  /** Wrap in a `.table-responsive` scroll container. */
  responsive?: boolean
  /** `table-dark` / coloured table variant. */
  theme?: 'dark' | 'light'
  caption?: ReactNode
  emptyMessage?: ReactNode
  className?: string
}

/** A typed, declarative table driven by `columns` + `data`. */
export function Table<T>({
  columns,
  data,
  rowKey,
  striped,
  hover,
  bordered,
  borderless,
  small,
  responsive,
  theme,
  caption,
  emptyMessage = 'No data',
  className,
}: TableProps<T>) {
  const table = (
    <table
      className={cn(
        'table',
        striped && 'table-striped',
        hover && 'table-hover',
        bordered && 'table-bordered',
        borderless && 'table-borderless',
        small && 'table-sm',
        theme && `table-${theme}`,
        className
      )}
    >
      {caption && <caption>{caption}</caption>}
      <thead>
        <tr>
          {columns.map(col => (
            <th
              key={col.key}
              scope="col"
              className={cn(col.align && `text-${col.align}`, col.headerClassName)}
            >
              {col.header}
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {data.length === 0 ? (
          <tr>
            <td colSpan={columns.length} className="text-center text-secondary py-3">
              {emptyMessage}
            </td>
          </tr>
        ) : (
          data.map((row, i) => (
            <tr key={rowKey ? rowKey(row, i) : i}>
              {columns.map(col => (
                <td key={col.key} className={cn(col.align && `text-${col.align}`, col.className)}>
                  {col.render ? col.render(row, i) : String((row as Record<string, unknown>)[col.key] ?? '')}
                </td>
              ))}
            </tr>
          ))
        )}
      </tbody>
    </table>
  )

  return responsive ? <div className="table-responsive">{table}</div> : table
}
