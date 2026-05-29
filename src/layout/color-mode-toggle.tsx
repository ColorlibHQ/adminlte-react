'use client'

import { useColorModeContext } from '../context/color-mode-context'
import type { ColorMode } from '../types/theme'

export function ColorModeToggle() {
  const { colorMode, setColorMode } = useColorModeContext()

  const toggleMode = (mode: ColorMode) => {
    setColorMode(mode)
  }

  return (
    <li className="nav-item dropdown">
      <button
        className="nav-link"
        id="bd-theme"
        type="button"
        aria-label="Toggle color scheme"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <i className={`bi bi-${colorMode === 'light' ? 'sun-fill' : colorMode === 'dark' ? 'moon-fill' : 'circle-half'}`}></i>
      </button>
      <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="bd-theme">
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${colorMode === 'light' ? 'active' : ''}`}
            onClick={() => toggleMode('light')}
          >
            <i className="bi bi-sun-fill me-2"></i>
            Light
            {colorMode === 'light' && <i className="bi bi-check-lg ms-auto"></i>}
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${colorMode === 'dark' ? 'active' : ''}`}
            onClick={() => toggleMode('dark')}
          >
            <i className="bi bi-moon-fill me-2"></i>
            Dark
            {colorMode === 'dark' && <i className="bi bi-check-lg ms-auto"></i>}
          </button>
        </li>
        <li>
          <button
            type="button"
            className={`dropdown-item d-flex align-items-center ${colorMode === 'auto' ? 'active' : ''}`}
            onClick={() => toggleMode('auto')}
          >
            <i className="bi bi-circle-half me-2"></i>
            Auto
            {colorMode === 'auto' && <i className="bi bi-check-lg ms-auto"></i>}
          </button>
        </li>
      </ul>
    </li>
  )
}
