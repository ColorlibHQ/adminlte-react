'use client'

import { AppContent, ApexChart } from 'adminlte-react'

const visitorsChartSeries = [
  { name: 'High - 2023', data: [100, 120, 170, 167, 180, 177, 160] },
  { name: 'Low - 2023', data: [60, 80, 70, 67, 80, 77, 100] },
]

const visitorsChartConfig = {
  chart: {
    height: 200,
    type: 'line',
    toolbar: { show: false },
  },
  colors: ['#0d6efd', '#adb5bd'],
  stroke: { curve: 'smooth' },
  grid: {
    borderColor: '#e7e7e7',
    row: {
      colors: ['#f3f3f3', 'transparent'],
      opacity: 0.5,
    },
  },
  legend: { show: false },
  markers: { size: 1 },
  xaxis: {
    categories: ['22th', '23th', '24th', '25th', '26th', '27th', '28th'],
  },
}

const salesChartSeries = [
  { name: 'Net Profit', data: [44, 55, 57, 56, 61, 58, 63, 60, 66] },
  { name: 'Revenue', data: [76, 85, 101, 98, 87, 105, 91, 114, 94] },
  { name: 'Free Cash Flow', data: [35, 41, 36, 26, 45, 48, 52, 53, 41] },
]

const salesChartConfig = {
  chart: {
    type: 'bar',
    height: 200,
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded',
    },
  },
  legend: { show: false },
  colors: ['#0d6efd', '#20c997', '#ffc107'],
  dataLabels: { enabled: false },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent'],
  },
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  fill: { opacity: 1 },
  tooltip: {
    y: {
      formatter: (val: number) => '$ ' + val + ' thousands',
    },
  },
}

export default function Page() {
  return (
    <AppContent
      title="Dashboard v3"
      breadcrumbs={[{ label: 'Home', href: '#' }, { label: 'Dashboard v3' }]}
    >
      {/* begin::Row */}
      <div className="row">
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header border-0">
              <div className="d-flex justify-content-between">
                <h3 className="card-title">Online Store Visitors</h3>
                <a
                  href="#"
                  className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  View Report
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex">
                <p className="d-flex flex-column">
                  <span className="fw-bold fs-5">820</span>
                  <span>Visitors Over Time</span>
                </p>
                <p className="ms-auto d-flex flex-column text-end">
                  <span className="text-success">
                    {' '}
                    <i className="bi bi-arrow-up"></i> 12.5%{' '}
                  </span>
                  <span className="text-secondary">Since last week</span>
                </p>
              </div>
              {/* /.d-flex */}

              <div className="position-relative mb-4">
                <ApexChart
                  id="visitors-chart"
                  series={visitorsChartSeries}
                  config={visitorsChartConfig}
                />
              </div>

              <div className="d-flex flex-row justify-content-end">
                <span className="me-2">
                  <i className="bi bi-square-fill text-primary"></i> This Week
                </span>

                <span>
                  {' '}
                  <i className="bi bi-square-fill text-secondary"></i> Last Week{' '}
                </span>
              </div>
            </div>
          </div>
          {/* /.card */}

          <div className="card mb-4">
            <div className="card-header border-0">
              <h3 className="card-title">Products</h3>
              <div className="card-tools">
                <a href="#" className="btn btn-tool btn-sm">
                  <i className="bi bi-download"></i>
                </a>
                <a href="#" className="btn btn-tool btn-sm">
                  <i className="bi bi-list"></i>
                </a>
              </div>
            </div>
            <div className="card-body table-responsive p-0">
              <table className="table table-striped align-middle">
                <thead>
                  <tr>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Sales</th>
                    <th>More</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>
                      <img
                        src="/assets/img/default-150x150.png"
                        alt="Product 1"
                        className="rounded-circle img-size-32 me-2"
                      />
                      Some Product
                    </td>
                    <td>$13 USD</td>
                    <td>
                      <small className="text-success me-1">
                        <i className="bi bi-arrow-up"></i>
                        12%
                      </small>
                      12,000 Sold
                    </td>
                    <td>
                      <a href="#" className="text-secondary">
                        <i className="bi bi-search"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/assets/img/default-150x150.png"
                        alt="Product 1"
                        className="rounded-circle img-size-32 me-2"
                      />
                      Another Product
                    </td>
                    <td>$29 USD</td>
                    <td>
                      <small className="text-info me-1">
                        <i className="bi bi-arrow-down"></i>
                        0.5%
                      </small>
                      123,234 Sold
                    </td>
                    <td>
                      <a href="#" className="text-secondary">
                        <i className="bi bi-search"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/assets/img/default-150x150.png"
                        alt="Product 1"
                        className="rounded-circle img-size-32 me-2"
                      />
                      Amazing Product
                    </td>
                    <td>$1,230 USD</td>
                    <td>
                      <small className="text-danger me-1">
                        <i className="bi bi-arrow-down"></i>
                        3%
                      </small>
                      198 Sold
                    </td>
                    <td>
                      <a href="#" className="text-secondary">
                        <i className="bi bi-search"></i>
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <img
                        src="/assets/img/default-150x150.png"
                        alt="Product 1"
                        className="rounded-circle img-size-32 me-2"
                      />
                      Perfect Item
                      <span className="badge text-bg-danger">NEW</span>
                    </td>
                    <td>$199 USD</td>
                    <td>
                      <small className="text-success me-1">
                        <i className="bi bi-arrow-up"></i>
                        63%
                      </small>
                      87 Sold
                    </td>
                    <td>
                      <a href="#" className="text-secondary">
                        <i className="bi bi-search"></i>
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* /.card */}
        </div>
        {/* /.col-md-6 */}
        <div className="col-lg-6">
          <div className="card mb-4">
            <div className="card-header border-0">
              <div className="d-flex justify-content-between">
                <h3 className="card-title">Sales</h3>
                <a
                  href="#"
                  className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                >
                  View Report
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex">
                <p className="d-flex flex-column">
                  <span className="fw-bold fs-5">$18,230.00</span>
                  <span>Sales Over Time</span>
                </p>
                <p className="ms-auto d-flex flex-column text-end">
                  <span className="text-success">
                    {' '}
                    <i className="bi bi-arrow-up"></i> 33.1%{' '}
                  </span>
                  <span className="text-secondary">Since Past Year</span>
                </p>
              </div>
              {/* /.d-flex */}

              <div className="position-relative mb-4">
                <ApexChart
                  id="sales-chart"
                  series={salesChartSeries}
                  config={salesChartConfig}
                />
              </div>

              <div className="d-flex flex-row justify-content-end">
                <span className="me-2">
                  <i className="bi bi-square-fill text-primary"></i> This year
                </span>

                <span>
                  {' '}
                  <i className="bi bi-square-fill text-secondary"></i> Last year{' '}
                </span>
              </div>
            </div>
          </div>
          {/* /.card */}

          <div className="card">
            <div className="card-header border-0">
              <h3 className="card-title">Online Store Overview</h3>
              <div className="card-tools">
                <a href="#" className="btn btn-sm btn-tool">
                  <i className="bi bi-download"></i>
                </a>
                <a href="#" className="btn btn-sm btn-tool">
                  <i className="bi bi-list"></i>
                </a>
              </div>
            </div>
            <div className="card-body">
              <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                <p className="text-success fs-2">
                  <svg
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12c0-1.232-.046-2.453-.138-3.662a4.006 4.006 0 00-3.7-3.7 48.678 48.678 0 00-7.324 0 4.006 4.006 0 00-3.7 3.7c-.017.22-.032.441-.046.662M19.5 12l3-3m-3 3l-3-3m-12 3c0 1.232.046 2.453.138 3.662a4.006 4.006 0 003.7 3.7 48.656 48.656 0 007.324 0 4.006 4.006 0 003.7-3.7c.017-.22.032-.441.046-.662M4.5 12l3 3m-3-3l-3 3"
                    ></path>
                  </svg>
                </p>
                <p className="d-flex flex-column text-end">
                  <span className="fw-bold">
                    <i className="bi bi-graph-up-arrow text-success"></i> 12%
                  </span>
                  <span className="text-secondary">CONVERSION RATE</span>
                </p>
              </div>
              {/* /.d-flex */}
              <div className="d-flex justify-content-between align-items-center border-bottom mb-3">
                <p className="text-info fs-2">
                  <svg
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                    ></path>
                  </svg>
                </p>
                <p className="d-flex flex-column text-end">
                  <span className="fw-bold">
                    <i className="bi bi-graph-up-arrow text-info"></i> 0.8%
                  </span>
                  <span className="text-secondary">SALES RATE</span>
                </p>
              </div>
              {/* /.d-flex */}
              <div className="d-flex justify-content-between align-items-center mb-0">
                <p className="text-danger fs-2">
                  <svg
                    height="32"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                    ></path>
                  </svg>
                </p>
                <p className="d-flex flex-column text-end">
                  <span className="fw-bold">
                    <i className="bi bi-graph-down-arrow text-danger"></i>
                    1%
                  </span>
                  <span className="text-secondary">REGISTRATION RATE</span>
                </p>
              </div>
              {/* /.d-flex */}
            </div>
          </div>
        </div>
        {/* /.col-md-6 */}
      </div>
      {/* end::Row */}
    </AppContent>
  )
}
