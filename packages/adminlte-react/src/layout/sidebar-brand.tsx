export interface SidebarBrandProps {
  logo?: React.ReactNode
  href?: string
}

export function SidebarBrand({ logo = <><b>Admin</b>LTE</>, href = '/' }: SidebarBrandProps) {
  return (
    <div className="sidebar-brand">
      <a href={href} className="brand-link">
        {typeof logo === 'string' ? (
          <>
            <img src={logo} alt="Logo" className="brand-image opacity-75 shadow" />
            <span className="brand-text fw-light">AdminLTE 4</span>
          </>
        ) : (
          <>
            <span className="brand-image opacity-75 shadow"></span>
            <span className="brand-text fw-light">{logo}</span>
          </>
        )}
      </a>
    </div>
  )
}
