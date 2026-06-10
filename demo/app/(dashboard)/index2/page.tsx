import Image from 'next/image'
import { withBase } from '@/lib/base'
import { AppContent, ApexChart, SparklineChart } from '@colorlib/adminlte-react'

const salesChartConfig = {
  chart: {
    height: 180,
    type: 'area',
    toolbar: { show: false },
  },
  legend: { show: false },
  colors: ['#0d6efd', '#20c997'],
  dataLabels: { enabled: false },
  stroke: { curve: 'smooth' },
  xaxis: {
    type: 'datetime',
    categories: [
      '2023-01-01',
      '2023-02-01',
      '2023-03-01',
      '2023-04-01',
      '2023-05-01',
      '2023-06-01',
      '2023-07-01',
    ],
  },
  tooltip: { x: { format: 'MMMM yyyy' } },
}

const salesChartSeries = [
  { name: 'Digital Goods', data: [28, 48, 40, 19, 86, 27, 90] },
  { name: 'Electronics', data: [65, 59, 80, 81, 56, 55, 40] },
]

const pieChartConfig = {
  chart: { type: 'donut', height: 350 },
  labels: ['Chrome', 'Edge', 'FireFox', 'Safari', 'Opera', 'IE'],
  dataLabels: { enabled: false },
  colors: ['#0d6efd', '#20c997', '#ffc107', '#d63384', '#6f42c1', '#adb5bd'],
}

const pieChartSeries = [700, 500, 400, 600, 300, 100]

const tableSparklines = [
  [25, 66, 41, 89, 63, 25, 44, 12, 36, 9, 54],
  [12, 56, 21, 39, 73, 45, 64, 52, 36, 59, 44],
  [15, 46, 21, 59, 33, 15, 34, 42, 56, 19, 64],
  [30, 56, 31, 69, 43, 35, 24, 32, 46, 29, 64],
  [20, 76, 51, 79, 53, 35, 54, 22, 36, 49, 64],
  [5, 36, 11, 69, 23, 15, 14, 42, 26, 19, 44],
  [12, 56, 21, 39, 73, 45, 64, 52, 36, 59, 74],
]

const latestOrders = [
  { id: 'OR9842', item: 'Call of Duty IV', status: 'Shipped', badge: 'success' },
  { id: 'OR1848', item: 'Samsung Smart TV', status: 'Pending', badge: 'warning' },
  { id: 'OR7429', item: 'iPhone 6 Plus', status: 'Delivered', badge: 'danger' },
  { id: 'OR7429', item: 'Samsung Smart TV', status: 'Processing', badge: 'info' },
  { id: 'OR1848', item: 'Samsung Smart TV', status: 'Pending', badge: 'warning' },
  { id: 'OR7429', item: 'iPhone 6 Plus', status: 'Delivered', badge: 'danger' },
  { id: 'OR9842', item: 'Call of Duty IV', status: 'Shipped', badge: 'success' },
]

const latestMembers = [
  { name: 'Alexander Pierce', img: 'user1-128x128.jpg', date: 'Today' },
  { name: 'Norman', img: 'user1-128x128.jpg', date: 'Yesterday' },
  { name: 'Jane', img: 'user7-128x128.jpg', date: '12 Jan' },
  { name: 'John', img: 'user6-128x128.jpg', date: '12 Jan' },
  { name: 'Alexander', img: 'user2-160x160.jpg', date: '13 Jan' },
  { name: 'Sarah', img: 'user5-128x128.jpg', date: '14 Jan' },
  { name: 'Nora', img: 'user4-128x128.jpg', date: '15 Jan' },
  { name: 'Nadia', img: 'user3-128x128.jpg', date: '15 Jan' },
]

export const metadata = { title: "Dashboard v2" }

export default function Page() {
  return (
    <AppContent
      title="Dashboard v2"
      breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'Dashboard v2' }]}
    >
      {/* Info boxes */}
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box">
            <span className="info-box-icon text-bg-primary shadow-sm">
              <i className="bi bi-gear-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">CPU Traffic</span>
              <span className="info-box-number">
                10
                <small>%</small>
              </span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box">
            <span className="info-box-icon text-bg-danger shadow-sm">
              <i className="bi bi-hand-thumbs-up-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">41,410</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box">
            <span className="info-box-icon text-bg-success shadow-sm">
              <i className="bi bi-cart-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Sales</span>
              <span className="info-box-number">760</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box">
            <span className="info-box-icon text-bg-warning shadow-sm">
              <i className="bi bi-people-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">New Members</span>
              <span className="info-box-number">2,000</span>
            </div>
          </div>
        </div>
      </div>
      {/* /.row */}

      {/* Monthly Recap Report */}
      <div className="row">
        <div className="col-md-12">
          <div className="card mb-4">
            <div className="card-header">
              <h5 className="card-title">Monthly Recap Report</h5>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                  <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                  <i data-lte-icon="collapse" className="bi bi-dash-lg"></i>
                </button>
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-tool dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    <i className="bi bi-wrench"></i>
                  </button>
                  <div className="dropdown-menu dropdown-menu-end" role="menu">
                    <a href="#" className="dropdown-item">Action</a>
                    <a href="#" className="dropdown-item">Another action</a>
                    <a href="#" className="dropdown-item"> Something else here </a>
                    <a className="dropdown-divider"></a>
                    <a href="#" className="dropdown-item">Separated link</a>
                  </div>
                </div>
                <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-md-8">
                  <p className="text-center">
                    <strong>Sales: 1 Jan, 2023 - 30 Jul, 2023</strong>
                  </p>
                  <ApexChart id="sales-chart" series={salesChartSeries} config={salesChartConfig} />
                </div>
                {/* /.col */}
                <div className="col-md-4">
                  <p className="text-center">
                    <strong>Goal Completion</strong>
                  </p>

                  <div className="progress-group">
                    Add Products to Cart
                    <span className="float-end">
                      <b>160</b>/200
                    </span>
                    <div className="progress progress-sm">
                      <div className="progress-bar text-bg-primary" style={{ width: '80%' }}></div>
                    </div>
                  </div>

                  <div className="progress-group">
                    Complete Purchase
                    <span className="float-end">
                      <b>310</b>/400
                    </span>
                    <div className="progress progress-sm">
                      <div className="progress-bar text-bg-danger" style={{ width: '75%' }}></div>
                    </div>
                  </div>

                  <div className="progress-group">
                    <span className="progress-text">Visit Premium Page</span>
                    <span className="float-end">
                      <b>480</b>/800
                    </span>
                    <div className="progress progress-sm">
                      <div className="progress-bar text-bg-success" style={{ width: '60%' }}></div>
                    </div>
                  </div>

                  <div className="progress-group">
                    Send Inquiries
                    <span className="float-end">
                      <b>250</b>/500
                    </span>
                    <div className="progress progress-sm">
                      <div className="progress-bar text-bg-warning" style={{ width: '50%' }}></div>
                    </div>
                  </div>
                </div>
                {/* /.col */}
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer">
              <div className="row">
                <div className="col-md-3 col-6">
                  <div className="text-center border-end">
                    <span className="text-success">
                      <i className="bi bi-caret-up-fill"></i> 17%
                    </span>
                    <h5 className="fw-bold mb-0">$35,210.43</h5>
                    <span className="text-uppercase">TOTAL REVENUE</span>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center border-end">
                    <span className="text-info">
                      <i className="bi bi-caret-left-fill"></i> 0%
                    </span>
                    <h5 className="fw-bold mb-0">$10,390.90</h5>
                    <span className="text-uppercase">TOTAL COST</span>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center border-end">
                    <span className="text-success">
                      <i className="bi bi-caret-up-fill"></i> 20%
                    </span>
                    <h5 className="fw-bold mb-0">$24,813.53</h5>
                    <span className="text-uppercase">TOTAL PROFIT</span>
                  </div>
                </div>
                <div className="col-md-3 col-6">
                  <div className="text-center">
                    <span className="text-danger">
                      <i className="bi bi-caret-down-fill"></i> 18%
                    </span>
                    <h5 className="fw-bold mb-0">1200</h5>
                    <span className="text-uppercase">GOAL COMPLETIONS</span>
                  </div>
                </div>
              </div>
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}

      <div className="row">
        {/* Start col */}
        <div className="col-md-8">
          <div className="row g-4 mb-4">
            <div className="col-md-6">
              {/* DIRECT CHAT */}
              <div className="card direct-chat direct-chat-warning">
                <div className="card-header">
                  <h3 className="card-title">Direct Chat</h3>
                  <div className="card-tools">
                    <span title="3 New Messages" className="badge text-bg-warning">
                      {' '}
                      3{' '}
                    </span>
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                      <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                      <i data-lte-icon="collapse" className="bi bi-dash-lg"></i>
                    </button>
                    <button
                      type="button"
                      className="btn btn-tool"
                      title="Contacts"
                      data-lte-toggle="chat-pane"
                    >
                      <i className="bi bi-chat-text-fill"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body">
                  <div className="direct-chat-messages">
                    <div className="direct-chat-msg">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-start"> Alexander Pierce </span>
                        <span className="direct-chat-timestamp float-end"> 23 Jan 2:00 pm </span>
                      </div>
                      <Image
                        className="direct-chat-img"
                        src={withBase("/assets/img/user1-128x128.jpg")}
                        alt="message user image"
                      width={128} height={128} loading="lazy" />
                      <div className="direct-chat-text">
                        Is this template really for free? That&apos;s unbelievable!
                      </div>
                    </div>

                    <div className="direct-chat-msg end">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-end"> Sarah Bullock </span>
                        <span className="direct-chat-timestamp float-start"> 23 Jan 2:05 pm </span>
                      </div>
                      <Image
                        className="direct-chat-img"
                        src={withBase("/assets/img/user3-128x128.jpg")}
                        alt="message user image"
                      width={128} height={128} loading="lazy" />
                      <div className="direct-chat-text">You better believe it!</div>
                    </div>

                    <div className="direct-chat-msg">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-start"> Alexander Pierce </span>
                        <span className="direct-chat-timestamp float-end"> 23 Jan 5:37 pm </span>
                      </div>
                      <Image
                        className="direct-chat-img"
                        src={withBase("/assets/img/user1-128x128.jpg")}
                        alt="message user image"
                      width={128} height={128} loading="lazy" />
                      <div className="direct-chat-text">
                        Working with AdminLTE on a great new app! Wanna join?
                      </div>
                    </div>

                    <div className="direct-chat-msg end">
                      <div className="direct-chat-infos clearfix">
                        <span className="direct-chat-name float-end"> Sarah Bullock </span>
                        <span className="direct-chat-timestamp float-start"> 23 Jan 6:10 pm </span>
                      </div>
                      <Image
                        className="direct-chat-img"
                        src={withBase("/assets/img/user3-128x128.jpg")}
                        alt="message user image"
                      width={128} height={128} loading="lazy" />
                      <div className="direct-chat-text">I would love to.</div>
                    </div>
                  </div>
                  {/* /.direct-chat-messages */}

                  <div className="direct-chat-contacts">
                    <ul className="contacts-list">
                      <li>
                        <a href="#">
                          <Image
                            className="contacts-list-img"
                            src={withBase("/assets/img/user1-128x128.jpg")}
                            alt="User Avatar"
                          width={128} height={128} loading="lazy" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Count Dracula
                              <small className="contacts-list-date float-end"> 2/28/2023 </small>
                            </span>
                            <span className="contacts-list-msg">How have you been? I was...</span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            className="contacts-list-img"
                            src={withBase("/assets/img/user7-128x128.jpg")}
                            alt="User Avatar"
                          width={128} height={128} loading="lazy" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Sarah Doe
                              <small className="contacts-list-date float-end"> 2/23/2023 </small>
                            </span>
                            <span className="contacts-list-msg"> I will be waiting for... </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            className="contacts-list-img"
                            src={withBase("/assets/img/user3-128x128.jpg")}
                            alt="User Avatar"
                          width={128} height={128} loading="lazy" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Nadia Jolie
                              <small className="contacts-list-date float-end"> 2/20/2023 </small>
                            </span>
                            <span className="contacts-list-msg"> I&apos;ll call you back at... </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            className="contacts-list-img"
                            src={withBase("/assets/img/user5-128x128.jpg")}
                            alt="User Avatar"
                          width={128} height={128} loading="lazy" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Nora S. Vans
                              <small className="contacts-list-date float-end"> 2/10/2023 </small>
                            </span>
                            <span className="contacts-list-msg"> Where is your new... </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            className="contacts-list-img"
                            src={withBase("/assets/img/user6-128x128.jpg")}
                            alt="User Avatar"
                          width={128} height={128} loading="lazy" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              John K.
                              <small className="contacts-list-date float-end"> 1/27/2023 </small>
                            </span>
                            <span className="contacts-list-msg"> Can I take a look at... </span>
                          </div>
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <Image
                            className="contacts-list-img"
                            src={withBase("/assets/img/user8-128x128.jpg")}
                            alt="User Avatar"
                          width={128} height={128} loading="lazy" />
                          <div className="contacts-list-info">
                            <span className="contacts-list-name">
                              Kenneth M.
                              <small className="contacts-list-date float-end"> 1/4/2023 </small>
                            </span>
                            <span className="contacts-list-msg"> Never mind I found... </span>
                          </div>
                        </a>
                      </li>
                    </ul>
                    {/* /.contacts-list */}
                  </div>
                  {/* /.direct-chat-pane */}
                </div>
                {/* /.card-body */}
                <div className="card-footer">
                  <form action="#" method="post">
                    <div className="input-group">
                      <input
                        type="text"
                        name="message"
                        placeholder="Type Message ..."
                        className="form-control"
                      />
                      <span className="input-group-append">
                        <button type="button" className="btn btn-warning">
                          Send
                        </button>
                      </span>
                    </div>
                  </form>
                </div>
                {/* /.card-footer */}
              </div>
              {/* /.direct-chat */}
            </div>
            {/* /.col */}

            <div className="col-md-6">
              {/* USERS LIST */}
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Latest Members</h3>
                  <div className="card-tools">
                    <span className="badge text-bg-danger"> 8 New Members </span>
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                      <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                      <i data-lte-icon="collapse" className="bi bi-dash-lg"></i>
                    </button>
                    <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                      <i className="bi bi-x-lg"></i>
                    </button>
                  </div>
                </div>
                {/* /.card-header */}
                <div className="card-body p-0">
                  <div className="row text-center m-1">
                    {latestMembers.map((member, idx) => (
                      <div className="col-3 p-2" key={idx}>
                        <Image
                          className="img-fluid rounded-circle"
                          src={withBase(`/assets/img/${member.img}`)}
                          alt="User Image"
                          width={128}
                          height={128}
                          loading="lazy"
                        />
                        <a
                          className="btn fw-bold fs-7 text-secondary text-truncate w-100 p-0"
                          href="#"
                        >
                          {member.name}
                        </a>
                        <div className="fs-8">{member.date}</div>
                      </div>
                    ))}
                  </div>
                  {/* /.users-list */}
                </div>
                {/* /.card-body */}
                <div className="card-footer text-center">
                  <a
                    href="#"
                    className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                  >
                    View All Users
                  </a>
                </div>
                {/* /.card-footer */}
              </div>
              {/* /.card */}
            </div>
            {/* /.col */}
          </div>
          {/* /.row */}

          {/* Latest Order Widget */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Latest Orders</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                  <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                  <i data-lte-icon="collapse" className="bi bi-dash-lg"></i>
                </button>
                <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <div className="table-responsive">
                <table className="table m-0">
                  <thead>
                    <tr>
                      <th>Order ID</th>
                      <th>Item</th>
                      <th>Status</th>
                      <th>Popularity</th>
                    </tr>
                  </thead>
                  <tbody>
                    {latestOrders.map((order, idx) => (
                      <tr key={idx}>
                        <td>
                          <a
                            href="#"
                            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
                          >
                            {order.id}
                          </a>
                        </td>
                        <td>{order.item}</td>
                        <td>
                          <span className={`badge text-bg-${order.badge}`}> {order.status} </span>
                        </td>
                        <td>
                          <SparklineChart
                            id={`table-sparkline-${idx + 1}`}
                            data={tableSparklines[idx]}
                          />
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              {/* /.table-responsive */}
            </div>
            {/* /.card-body */}
            <div className="card-footer clearfix">
              <a href="#" className="btn btn-sm btn-primary float-start">
                Place New Order
              </a>
              <a href="#" className="btn btn-sm btn-secondary float-end">
                View All Orders
              </a>
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}

        <div className="col-md-4">
          {/* Info Boxes Style 2 */}
          <div className="info-box mb-3 text-bg-warning">
            <span className="info-box-icon">
              <i className="bi bi-tag-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Inventory</span>
              <span className="info-box-number">5,200</span>
            </div>
          </div>
          {/* /.info-box */}
          <div className="info-box mb-3 text-bg-success">
            <span className="info-box-icon">
              <i className="bi bi-heart-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Mentions</span>
              <span className="info-box-number">92,050</span>
            </div>
          </div>
          {/* /.info-box */}
          <div className="info-box mb-3 text-bg-danger">
            <span className="info-box-icon">
              <i className="bi bi-cloud-download"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Downloads</span>
              <span className="info-box-number">114,381</span>
            </div>
          </div>
          {/* /.info-box */}
          <div className="info-box mb-3 text-bg-info">
            <span className="info-box-icon">
              <i className="bi bi-chat-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Direct Messages</span>
              <span className="info-box-number">163,921</span>
            </div>
          </div>
          {/* /.info-box */}

          <div className="card mb-4">
            <div className="card-header">
              <h3 className="card-title">Browser Usage</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                  <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                  <i data-lte-icon="collapse" className="bi bi-dash-lg"></i>
                </button>
                <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-12">
                  <ApexChart id="pie-chart" series={pieChartSeries} config={pieChartConfig} />
                </div>
                {/* /.col */}
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer p-0">
              <ul className="nav nav-pills flex-column">
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    United States of America
                    <span className="float-end text-danger">
                      <i className="bi bi-arrow-down fs-7"></i>
                      12%
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    India
                    <span className="float-end text-success">
                      <i className="bi bi-arrow-up fs-7"></i> 4%
                    </span>
                  </a>
                </li>
                <li className="nav-item">
                  <a href="#" className="nav-link">
                    China
                    <span className="float-end text-info">
                      <i className="bi bi-arrow-left fs-7"></i> 0%
                    </span>
                  </a>
                </li>
              </ul>
            </div>
            {/* /.footer */}
          </div>
          {/* /.card */}

          {/* PRODUCT LIST */}
          <div className="card">
            <div className="card-header">
              <h3 className="card-title">Recently Added Products</h3>
              <div className="card-tools">
                <button type="button" className="btn btn-tool" data-lte-toggle="card-collapse">
                  <i data-lte-icon="expand" className="bi bi-plus-lg"></i>
                  <i data-lte-icon="collapse" className="bi bi-dash-lg"></i>
                </button>
                <button type="button" className="btn btn-tool" data-lte-toggle="card-remove">
                  <i className="bi bi-x-lg"></i>
                </button>
              </div>
            </div>
            {/* /.card-header */}
            <div className="card-body p-0">
              <div className="px-2">
                <div className="d-flex border-top py-2 px-1">
                  <div className="col-2">
                    <Image
                      src={withBase("/assets/img/default-150x150.png")}
                      alt="Product Image"
                      className="img-size-50"
                    width={150} height={150} loading="lazy" />
                  </div>
                  <div className="col-10">
                    <a href="#" className="fw-bold">
                      Samsung TV
                      <span className="badge text-bg-warning float-end"> $1800 </span>
                    </a>
                    <div className="text-truncate">Samsung 32&quot; 1080p 60Hz LED Smart HDTV.</div>
                  </div>
                </div>
                {/* /.item */}
                <div className="d-flex border-top py-2 px-1">
                  <div className="col-2">
                    <Image
                      src={withBase("/assets/img/default-150x150.png")}
                      alt="Product Image"
                      className="img-size-50"
                    width={150} height={150} loading="lazy" />
                  </div>
                  <div className="col-10">
                    <a href="#" className="fw-bold">
                      Bicycle
                      <span className="badge text-bg-info float-end"> $700 </span>
                    </a>
                    <div className="text-truncate">
                      26&quot; Mongoose Dolomite Men&apos;s 7-speed, Navy Blue.
                    </div>
                  </div>
                </div>
                {/* /.item */}
                <div className="d-flex border-top py-2 px-1">
                  <div className="col-2">
                    <Image
                      src={withBase("/assets/img/default-150x150.png")}
                      alt="Product Image"
                      className="img-size-50"
                    width={150} height={150} loading="lazy" />
                  </div>
                  <div className="col-10">
                    <a href="#" className="fw-bold">
                      Xbox One
                      <span className="badge text-bg-danger float-end"> $350 </span>
                    </a>
                    <div className="text-truncate">
                      Xbox One Console Bundle with Halo Master Chief Collection.
                    </div>
                  </div>
                </div>
                {/* /.item */}
                <div className="d-flex border-top py-2 px-1">
                  <div className="col-2">
                    <Image
                      src={withBase("/assets/img/default-150x150.png")}
                      alt="Product Image"
                      className="img-size-50"
                    width={150} height={150} loading="lazy" />
                  </div>
                  <div className="col-10">
                    <a href="#" className="fw-bold">
                      PlayStation 4
                      <span className="badge text-bg-success float-end"> $399 </span>
                    </a>
                    <div className="text-truncate">PlayStation 4 500GB Console (PS4)</div>
                  </div>
                </div>
                {/* /.item */}
              </div>
            </div>
            {/* /.card-body */}
            <div className="card-footer text-center">
              <a href="#" className="uppercase"> View All Products </a>
            </div>
            {/* /.card-footer */}
          </div>
          {/* /.card */}
        </div>
        {/* /.col */}
      </div>
      {/* /.row */}
    </AppContent>
  )
}
