import { AppContent } from 'adminlte-react'

const taskRows = (
  <>
    <tr className="align-middle">
      <td>1.</td>
      <td>Update software</td>
      <td>
        <div className="progress progress-xs">
          <div className="progress-bar progress-bar-danger" style={{ width: '55%' }}></div>
        </div>
      </td>
      <td>
        <span className="badge text-bg-danger">55%</span>
      </td>
    </tr>
    <tr className="align-middle">
      <td>2.</td>
      <td>Clean database</td>
      <td>
        <div className="progress progress-xs">
          <div className="progress-bar text-bg-warning" style={{ width: '70%' }}></div>
        </div>
      </td>
      <td>
        <span className="badge text-bg-warning">70%</span>
      </td>
    </tr>
    <tr className="align-middle">
      <td>3.</td>
      <td>Cron job running</td>
      <td>
        <div className="progress progress-xs progress-striped active">
          <div className="progress-bar text-bg-primary" style={{ width: '30%' }}></div>
        </div>
      </td>
      <td>
        <span className="badge text-bg-primary">30%</span>
      </td>
    </tr>
    <tr className="align-middle">
      <td>4.</td>
      <td>Fix and squish bugs</td>
      <td>
        <div className="progress progress-xs progress-striped active">
          <div className="progress-bar text-bg-success" style={{ width: '90%' }}></div>
        </div>
      </td>
      <td>
        <span className="badge text-bg-success">90%</span>
      </td>
    </tr>
  </>
)

const tableHead = (
  <thead>
    <tr>
      <th style={{ width: '10px' }}>#</th>
      <th>Task</th>
      <th>Progress</th>
      <th style={{ width: '40px' }}>Label</th>
    </tr>
  </thead>
)

export default function Page() {
  return (
    <AppContent
      title="Simple Tables"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Simple Tables' }]}
    >
      {/* begin::Row */}
      <div className="row">
        <div className="col-md-6">
          {/* Bordered Table */}
          <div className="card mb-4">
            <div className="card-header">
              <h3 className="card-title">Bordered Table</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <table className="table table-bordered">
                {tableHead}
                <tbody>{taskRows}</tbody>
              </table>
            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">
              <ul className="pagination pagination-sm m-0 float-end">
                <li className="page-item">
                  <a className="page-link" href="#">
                    &laquo;
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    1
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    2
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    3
                  </a>
                </li>
                <li className="page-item">
                  <a className="page-link" href="#">
                    &raquo;
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* /.card */}

          {/* Condensed Full Width Table */}
          <div className="card mb-4">
            <div className="card-header">
              <h3 className="card-title">Condensed Full Width Table</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <table className="table table-sm">
                {tableHead}
                <tbody>{taskRows}</tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
        <div className="col-md-6">
          {/* Simple Full Width Table */}
          <div className="card mb-4">
            <div className="card-header">
              <h3 className="card-title">Simple Full Width Table</h3>

              <div className="card-tools">
                <ul className="pagination pagination-sm float-end">
                  <li className="page-item">
                    <a className="page-link" href="#">
                      &laquo;
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      1
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      2
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      3
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      &raquo;
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <table className="table">
                {tableHead}
                <tbody>{taskRows}</tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}

          {/* Striped Full Width Table */}
          <div className="card mb-4">
            <div className="card-header">
              <h3 className="card-title">Striped Full Width Table</h3>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <table className="table table-striped">
                {tableHead}
                <tbody>{taskRows}</tbody>
              </table>
            </div>
            {/* /.card-body */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* end::Row */}
    </AppContent>
  )
}
