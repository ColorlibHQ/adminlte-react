import { readdirSync, statSync } from 'fs'
import { join, relative, sep } from 'path'

const APP_DIR = join(process.cwd(), 'app')

function walk(dir: string, acc: string[] = []): string[] {
  for (const entry of readdirSync(dir)) {
    const full = join(dir, entry)
    if (statSync(full).isDirectory()) walk(full, acc)
    else if (entry === 'page.tsx') acc.push(full)
  }
  return acc
}

/** Every static route in the App Router, derived from `app/**​/page.tsx`. */
export function getRoutes(): string[] {
  const seen = walk(APP_DIR)
    .map(f => relative(APP_DIR, f).replace(/page\.tsx$/, ''))
    .map(p =>
      p
        .split(sep)
        .filter(seg => seg && !/^\(.*\)$/.test(seg)) // drop route groups
        .join('/')
    )
    .filter(p => !p.includes('[')) // skip dynamic routes
    .map(p => '/' + p.replace(/\/+$/, ''))
    .map(p => p || '/')
  return [...new Set(seen)].sort()
}
