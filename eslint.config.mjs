import js from '@eslint/js'
import tseslint from 'typescript-eslint'
import reactHooks from 'eslint-plugin-react-hooks'

// Lint config for the library source (src/). Type-unaware (fast); the strict
// type gate is `pnpm type-check`. Noisy/intentional patterns are warnings so
// `pnpm lint` reports without failing the build.
export default tseslint.config(
  { ignores: ['dist/**', 'demo/**', '**/node_modules/**'] },
  js.configs.recommended,
  ...tseslint.configs.recommended,
  {
    files: ['src/**/*.{ts,tsx}'],
    plugins: { 'react-hooks': reactHooks },
    rules: {
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      '@typescript-eslint/ban-ts-comment': 'off',
      // react-hooks v7 opinionated rules → warnings (intentional state-sync patterns)
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/set-state-in-effect': 'warn',
      'react-hooks/refs': 'warn',
      // false-positive on dependency-injected components (e.g. the sidebar's
      // `useLinkComponent()`, a stable component pulled from context)
      'react-hooks/static-components': 'warn',
      'no-empty': ['warn', { allowEmptyCatch: true }],
    },
  }
)
