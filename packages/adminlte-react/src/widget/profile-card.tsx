export interface SocialLink {
  icon: string
  url: string
  label?: string
}

export interface ProfileCardProps {
  name: string
  title?: string
  image?: string
  imageAlt?: string
  socials?: SocialLink[]
  description?: string
  className?: string
  children?: React.ReactNode
}

export function ProfileCard({
  name,
  title,
  image,
  imageAlt = 'User',
  socials,
  description,
  className,
  children,
}: ProfileCardProps) {
  return (
    <div className={`card ${className || ''}`}>
      <div className="card-body text-center">
        {image && <img src={image} alt={imageAlt} className="img-fluid rounded-circle mb-3" />}
        <h5 className="card-title">{name}</h5>
        {title && <p className="text-muted">{title}</p>}
        {description && <p className="card-text small">{description}</p>}
        {socials && socials.length > 0 && (
          <div className="mt-3">
            {socials.map((link, idx) => (
              <a
                key={idx}
                href={link.url}
                className="btn btn-sm btn-outline-secondary me-1"
                title={link.label}
              >
                <i className={`bi ${link.icon}`}></i>
              </a>
            ))}
          </div>
        )}
        {children}
      </div>
    </div>
  )
}
