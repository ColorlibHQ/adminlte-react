// Subpath deploy is gated behind EXPORT so local `pnpm demo` (dev) stays at the
// domain root. `EXPORT=true next build` produces a static export configured for
// https://adminlte.io/themes/next-react/.
const isExport = process.env.EXPORT === 'true'
const base = isExport ? '/themes/next-react' : ''

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: { unoptimized: true },
  env: { NEXT_PUBLIC_BASE_PATH: base },
  ...(isExport
    ? { output: 'export', trailingSlash: true, assetPrefix: base }
    : {}),
}

export default nextConfig
