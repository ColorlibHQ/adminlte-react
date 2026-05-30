import { AuthLayout } from 'adminlte-react'
import { DemoForm } from '@/components/demo-form'

export const metadata = { title: "Login" }

export default function Page() {
  return (
    <AuthLayout authType="login" logo={<><b>Admin</b>LTE</>} logoHref="/">
      <p className="login-box-msg">Sign in to start your session</p>

      <DemoForm successMessage="Signed in — welcome back! (demo)">
        <div className="input-group mb-3 has-validation">
          <input type="email" required className="form-control" placeholder="Email" aria-label="Email" />
          <div className="input-group-text">
            <span className="bi bi-envelope"></span>
          </div>
          <div className="invalid-feedback">Please enter a valid email address.</div>
        </div>
        <div className="input-group mb-3 has-validation">
          <input type="password" required minLength={6} className="form-control" placeholder="Password" aria-label="Password" />
          <div className="input-group-text">
            <span className="bi bi-lock-fill"></span>
          </div>
          <div className="invalid-feedback">Password must be at least 6 characters.</div>
        </div>
        {/* begin::Row */}
        <div className="row">
          <div className="col-8">
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
