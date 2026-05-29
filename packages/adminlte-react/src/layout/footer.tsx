export interface FooterProps {
  children?: React.ReactNode
}

export function Footer({ children }: FooterProps) {
  const year = new Date().getFullYear()

  return (
    <footer className="app-footer fs-7">
      <div className="float-end d-none d-sm-inline">Anything you want</div>
      <strong>
        Copyright &copy; 2014-{year}&nbsp;
        <a href="https://adminlte.io" className="text-decoration-none">
          AdminLTE.io
        </a>
        .
      </strong>
      All rights reserved.
      {children}
    </footer>
  )
}
