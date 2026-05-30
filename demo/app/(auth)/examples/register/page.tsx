import { AuthLayout } from 'adminlte-react'
import { DemoForm } from '@/components/demo-form'

export const metadata = { title: "Register" }

export default function Page() {
  return (
    <AuthLayout authType="register" logo={<><b>Admin</b>LTE</>} logoHref="/">
      <p className="register-box-msg">Register a new membership</p>

      <DemoForm successMessage="Account created — welcome aboard! (demo)">
        <div className="input-group mb-3">
          <input type="text" required className="form-control" placeholder="Full Name" />
          <div className="input-group-text">
            <span className="bi bi-person"></span>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="email" required className="form-control" placeholder="Email" />
          <div className="input-group-text">
            <span className="bi bi-envelope"></span>
          </div>
        </div>
        <div className="input-group mb-3">
          <input type="password" required className="form-control" placeholder="Password" />
          <div className="input-group-text">
            <span className="bi bi-lock-fill"></span>
          </div>
        </div>
        {/* begin::Row */}
        <div className="row">
          <div className="col-8">
            <div className="form-check">
              <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                I agree to the <a href="#">terms</a>
              </label>
            </div>
          </div>
          {/* /.col */}
          <div className="col-4">
            <div className="d-grid gap-2">
              <button type="submit" className="btn btn-primary">Sign In</button>
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

      <p className="mb-0">
        <a href="/examples/login" className="text-center"> I already have a membership </a>
      </p>
    </AuthLayout>
  )
}
