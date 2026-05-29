'use client'

import { useEffect, useRef } from 'react'

export interface WorldMapProps {
  id: string
  height?: number
}

export function WorldMap({ id, height = 220 }: WorldMapProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const mapRef = useRef<any>(null)

  useEffect(() => {
    let cancelled = false
    const el = containerRef.current
    if (!el) return

    const initMap = async () => {
      try {
        // jsvectormap v1.7: the default export is the jsVectorMap constructor
        const mod = (await import('jsvectormap' as any)) as any
        // Importing the map file registers 'world' onto the constructor
        await import('jsvectormap/dist/maps/world.js' as any)
        if (cancelled || !containerRef.current) return

        const JsVectorMap = mod.default ?? mod.jsVectorMap ?? mod
        if (typeof JsVectorMap !== 'function') return

        mapRef.current = new JsVectorMap({
          selector: el,
          map: 'world',
        })
      } catch (error) {
        console.error('WorldMap init error:', error)
      }
    }

    initMap()

    return () => {
      cancelled = true
      if (mapRef.current) {
        // jsVectorMap exposes destroy(); guard in case the API differs
        if (typeof mapRef.current.destroy === 'function') {
          mapRef.current.destroy()
        }
        mapRef.current = null
        // Clear any leftover DOM the library injected
        if (containerRef.current) containerRef.current.innerHTML = ''
      }
    }
  }, [id])

  return <div id={id} ref={containerRef} style={{ height: `${height}px` }}></div>
}
