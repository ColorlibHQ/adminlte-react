import { AppContent } from '@colorlib/adminlte-react'

export const metadata = { title: "Info Box" }

export default function InfoBoxPage() {
  return (
    <AppContent
      title="Info Box"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Info Box' },
      ]}
    >
      <h5 className="mb-2">Info Box</h5>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box">
            <span className="info-box-icon text-bg-primary shadow-sm">
              <i className="bi bi-gear-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">CPU Traffic</span>
              <span className="info-box-number">10 <small>%</small></span>
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
      </div>

      <h5 className="mb-2">
        Info Box With Custom Shadows <small><i>Using Bootstrap&apos;s Shadow Utility</i></small>
      </h5>
      <div className="row">
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box shadow-none">
            <span className="info-box-icon text-bg-primary shadow-sm">
              <i className="bi bi-gear-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">CPU Traffic</span>
              <span className="info-box-number">10 <small>%</small></span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box shadow-sm">
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
          <div className="info-box shadow">
            <span className="info-box-icon text-bg-warning shadow-sm">
              <i className="bi bi-people-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">New Members</span>
              <span className="info-box-number">2,000</span>
            </div>
          </div>
        </div>
        <div className="col-12 col-sm-6 col-md-3">
          <div className="info-box shadow-lg">
            <span className="info-box-icon text-bg-danger shadow-sm">
              <i className="bi bi-hand-thumbs-up-fill"></i>
            </span>
            <div className="info-box-content">
              <span className="info-box-text">Likes</span>
              <span className="info-box-number">41,410</span>
            </div>
          </div>
        </div>
      </div>

      <h5 className="mt-4 mb-2">Info Box With <code>bg-*</code></h5>
      <div className="row">
        {[
          { theme: 'primary', icon: 'bi-bookmark-fill', text: 'Bookmarks' },
          { theme: 'success', icon: 'bi-hand-thumbs-up', text: 'Likes' },
          { theme: 'warning', icon: 'bi-calendar3', text: 'Events' },
          { theme: 'danger', icon: 'bi-chat-text-fill', text: 'Comments' },
        ].map(({ theme, icon, text }) => (
          <div key={theme} className="col-md-3 col-sm-6 col-12">
            <div className={`info-box text-bg-${theme}`}>
              <span className="info-box-icon">
                <i className={`bi ${icon}`}></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">{text}</span>
                <span className="info-box-number">41,410</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '70%' }}></div>
                </div>
                <span className="progress-description">70% Increase in 30 Days</span>
              </div>
            </div>
          </div>
        ))}
      </div>

      <h5 className="mt-4 mb-2">Info Box With <code>bg-gradient</code></h5>
      <div className="row">
        {[
          { theme: 'primary', icon: 'bi-bookmark-fill', text: 'Bookmarks' },
          { theme: 'success', icon: 'bi-hand-thumbs-up', text: 'Likes' },
          { theme: 'warning', icon: 'bi-calendar3', text: 'Events' },
          { theme: 'danger', icon: 'bi-chat-text-fill', text: 'Comments' },
        ].map(({ theme, icon, text }) => (
          <div key={theme} className="col-md-3 col-sm-6 col-12">
            <div className={`info-box text-bg-${theme} bg-gradient`}>
              <span className="info-box-icon">
                <i className={`bi ${icon}`}></i>
              </span>
              <div className="info-box-content">
                <span className="info-box-text">{text}</span>
                <span className="info-box-number">41,410</span>
                <div className="progress">
                  <div className="progress-bar" style={{ width: '70%' }}></div>
                </div>
                <span className="progress-description">70% Increase in 30 Days</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </AppContent>
  )
}
