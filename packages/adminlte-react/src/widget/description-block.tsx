export interface DescriptionBlockProps {
  title: string
  text?: string
  items?: Record<string, string>
  className?: string
}

export function DescriptionBlock({
  title,
  text,
  items,
  className,
}: DescriptionBlockProps) {
  return (
    <div className={`description-block ${className || ''}`}>
      <h5 className="description-header">{title}</h5>
      {text && <p className="description-text">{text}</p>}
      {items && Object.entries(items).length > 0 && (
        <dl className="dl-horizontal">
          {Object.entries(items).map(([label, value]) => (
            <div key={label}>
              <dt>{label}</dt>
              <dd>{value}</dd>
            </div>
          ))}
        </dl>
      )}
    </div>
  )
}
