import { AppContent, Card } from 'adminlte-react'

export default function Page() {
  return (
    <AppContent
      title="Icons"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Icons' }]}
    >
      {/* Icons example */}
      <div className="row">
        <div className="col-12">
          {/* The icons */}
          <div className="col-12">
            <Card title="Icons" theme="primary" variant="outline">
              <p>You can use any font library you like with AdminLTE 4.</p>
              <strong>Recommendations</strong>
              <ul className="mt-1">
                <li>
                  <a href="https://fontawesome.com/" target="_blank" rel="noreferrer">
                    Font Awesome
                  </a>
                </li>
                <li>
                  <a href="https://useiconic.com/open/" target="_blank" rel="noreferrer">
                    Iconic Icons
                  </a>
                </li>
                <li>
                  <a href="https://ionicons.com/" target="_blank" rel="noreferrer">
                    Ion Icons
                  </a>
                </li>
              </ul>
            </Card>
          </div>
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </AppContent>
  )
}
