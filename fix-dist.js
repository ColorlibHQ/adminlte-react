// Post-build fixes for the unbundled per-file dist/ output:
//
// 1. Re-apply 'use client' to every dist file whose source module declares it
//    (esbuild does not reliably preserve directives during transform).
// 2. Make relative import/export specifiers fully specified ('./foo' →
//    './foo.js'): the package is ESM ("type": "module"), and webpack enforces
//    fully-specified specifiers for ESM files inside node_modules.
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const SRC = path.join(__dirname, 'src')
const DIST = path.join(__dirname, 'dist')

function walk(dir, ext) {
  const out = []
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name)
    if (entry.isDirectory()) out.push(...walk(full, ext))
    else if (ext.some(e => entry.name.endsWith(e))) out.push(full)
  }
  return out
}

// --- 1. Restore 'use client' directives per file ---
let directives = 0
for (const srcFile of walk(SRC, ['.ts', '.tsx'])) {
  if (srcFile.includes('.test.')) continue
  const source = fs.readFileSync(srcFile, 'utf8')
  if (!/^['"]use client['"]/.test(source)) continue

  const rel = path.relative(SRC, srcFile).replace(/\.tsx?$/, '.js')
  const distFile = path.join(DIST, rel)
  if (!fs.existsSync(distFile)) {
    console.error(`fix-dist: missing dist file for client module: ${rel}`)
    process.exitCode = 1
    continue
  }
  const compiled = fs.readFileSync(distFile, 'utf8')
  if (!compiled.startsWith('"use client"')) {
    fs.writeFileSync(distFile, '"use client";\n' + compiled)
    directives++
  }
}

// --- 2. Fully specify relative import/export paths ---
let rewritten = 0
const SPECIFIER = /((?:import|export)[^'"]*?from\s*|import\s*\(\s*)(['"])(\.\.?\/[^'"]+)\2/g
for (const distFile of walk(DIST, ['.js'])) {
  const code = fs.readFileSync(distFile, 'utf8')
  let changed = false
  const next = code.replace(SPECIFIER, (match, prefix, quote, spec) => {
    if (/\.(js|mjs|cjs|json|css)$/.test(spec)) return match
    const base = path.resolve(path.dirname(distFile), spec)
    let resolved
    if (fs.existsSync(base + '.js')) resolved = spec + '.js'
    else if (fs.existsSync(path.join(base, 'index.js'))) resolved = spec + '/index.js'
    else {
      console.error(`fix-dist: cannot resolve '${spec}' from ${path.relative(DIST, distFile)}`)
      process.exitCode = 1
      return match
    }
    changed = true
    return `${prefix}${quote}${resolved}${quote}`
  })
  if (changed) {
    fs.writeFileSync(distFile, next)
    rewritten++
  }
}

console.log(`fix-dist: ${directives} 'use client' directives applied, ${rewritten} files with specifiers rewritten`)
