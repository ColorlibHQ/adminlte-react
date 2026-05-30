'use client'

import Image from 'next/image'
import { withBase } from '@/lib/base'
import { useEffect } from 'react'

export default function Page() {
  useEffect(() => {
    const cls = ['lockscreen', 'bg-body-secondary']
    document.body.classList.add(...cls)
    return () => document.body.classList.remove(...cls)
  }, [])

  return (
    <div className="lockscreen-wrapper">
      <div className="lockscreen-logo">
        <a href="/">
          <b>Admin</b>LTE
        </a>
      </div>

      <div className="lockscreen-name">John Doe</div>

      <div className="lockscreen-item">
        <div className="lockscreen-image">
          <Image src={withBase("/assets/img/user1-128x128.jpg")} alt="User Image" width={128} height={128} loading="lazy" />
        </div>

        <form className="lockscreen-credentials">
          <div className="input-group">
            <input type="password" className="form-control shadow-none" placeholder="password" />
            <div className="input-group-text border-0 bg-transparent px-1">
              <button type="button" className="btn shadow-none">
                <i className="bi bi-box-arrow-right text-body-secondary" />
              </button>
            </div>
          </div>
        </form>
      </div>

      <div className="help-block text-center">Enter your password to retrieve your session</div>
      <div className="text-center">
        <a href="/examples/login" className="text-decoration-none">
          Or sign in as a different user
        </a>
      </div>
      <div className="lockscreen-footer text-center">
        Copyright © 2014-2026 &nbsp;
        <b>
          <a
            href="https://adminlte.io"
            className="link-primary link-offset-2 link-underline-opacity-25 link-underline-opacity-100-hover"
          >
            AdminLTE.io
          </a>
        </b>
        <br />
        All rights reserved
      </div>
    </div>
  )
}
