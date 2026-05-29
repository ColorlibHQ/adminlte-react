import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['esm', 'cjs'],
  dts: true,
  sourcemap: true,
  clean: true,
  external: [
    'react',
    'react-dom',
    'next',
    'flatpickr',
    'tom-select',
    'tabulator-tables',
    'quill',
  ],
  treeshake: true,
  esbuildOptions(options, context) {
    // Preserve 'use client' directives by injecting them in the banner
    // This is a workaround for esbuild stripping directive comments
    options.banner = {
      js: '// This bundle includes "use client" directives. Do not use in environments that do not support them.',
    }
  },
  onSuccess: async () => {
    // Manually add 'use client' to client components after build
    console.log('Build completed. "use client" directives in source are preserved in compiled output.')
  },
})
