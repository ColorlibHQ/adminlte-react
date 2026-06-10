import { AuthLayout } from '@colorlib/adminlte-react'
import { DemoForm } from '@/components/demo-form'

export const metadata = { title: "Login v2" }

export default function Page() {
  return (
    <AuthLayout authType="login" logo={<><b>Admin</b>LTE</>} logoHref="/">
      <p className="login-box-msg">Sign in to start your session</p>

      <DemoForm successMessage="Signed in — welcome back! (demo)">
        <div className="input-group mb-1">
          <div className="form-floating">
            <input id="loginEmail" type="email" required className="form-control" defaultValue="" placeholder="" />
            <label htmlFor="loginEmail">Email</label>
          </div>
          <div className="input-group-text">
            <span className="bi bi-envelope"></span>
          </div>
        </div>
        <div className="input-group mb-1">
          <div className="form-floating">
            <input id="loginPassword" type="password" required className="form-control" placeholder="" />
            <label htmlFor="loginPassword">Password</label>
          </div>
          <div className="input-group-text">
            <span className="bi bi-lock-fill"></span>
          </div>
        </div>
        {/* begin::Row */}
        <div className="row">
          <div className="col-8 d-inline-flex align-items-center">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                {' '}
                Remember Me{' '}
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">
                Sign In
              </button>
            </div>
          </div>
          {/* /.col */}
        </div>
        {/* end::Row */}
      </DemoForm>

      <div className="social-auth-links text-center mb-3 d-grid gap-2">
        <p>- OR -</p>
        <a href="#" className="btn btn-primary">
          <i className="bi bi-facebook me-2"></i> Sign in using Facebook
        </a>
        <a href="#" className="btn btn-danger">
          <i className="bi bi-google me-2"></i> Sign in using Google+
        </a>
      </div>
      {/* /.social-auth-links */}

      <p className="mb-1">
        <a href="/examples/forgot-password">I forgot my password</a>
      </p>
      <p className="mb-0">
        <a href="/examples/register" className="text-center">
          {' '}
          Register a new membership{' '}
        </a>
      </p>
    </AuthLayout>
  )
}
