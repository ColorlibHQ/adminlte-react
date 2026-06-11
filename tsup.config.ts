import { defineConfig } from 'tsup'

// Per-file (unbundled) ESM output. Each source module compiles to its own
// dist file so the 'use client' boundary survives per component: RSC-authored
// components stay server components for consumers, and bundlers can tree-shake
// through the barrel (sideEffects in package.json covers the rest).
//
// Heavy plugins (apexcharts, flatpickr, jsvectormap, quill, sortablejs,
// tabulator-tables, tom-select) are loaded via dynamic import() inside effects;
// in unbundled output those specifiers stay as written and resolve from the
// consumer's node_modules (declared as optional peer dependencies).
//
// fix-dist.js post-processes the output: re-applies 'use client' directives
// (esbuild strips them) and makes relative imports fully specified (.js) so
// the output works under webpack's ESM fullySpecified resolution.
export default defineConfig({
  entry: ['src/**/*.ts', 'src/**/*.tsx', '!src/**/*.test.*'],
  format: ['esm'],
  bundle: false,
  dts: { entry: 'src/index.ts' },
  sourcemap: false,
  clean: true,
})
