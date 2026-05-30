# AdminLTE React — Roadmap

Status of the React/Next port relative to the AdminLTE 4 HTML demo, and the work
remaining to reach "1:1 with HTML + perfect Next/React functionality." Checked
items are done; unchecked are planned. See `CLAUDE.md` for architecture.

## ✅ Done
- [x] 100% page parity with AdminLTE v4 HTML (48 pages) + in-app `/docs`
- [x] Per-page metadata/titles (template per route group)
- [x] `not-found` / `error` / `loading` / `sitemap.ts` / `robots.ts`
- [x] Dark mode, ⌘K command palette, RSC shell
- [x] Library: layout, widgets, forms, tools + `Accordion`/`Tabs`/`Toast`/`Tooltip`
- [x] Real ESLint (replaced stub) + fixed conditional-hooks & render-impurity bugs
- [x] RSC async data example (Projects page fetches from a data module)
- [x] Settings persistence (localStorage)
- [x] Live on `adminlte.io/themes/next-react/` (Hetzner + Cloudflare); themed 404
- [x] All deps on latest (React 19, Next 16, TS 6, ApexCharts 5, Quill 2)

## A. Perfect functionality (wire the static controls)
- [ ] A1. Client-side **search + column sort + pagination** for hand-built tables
      (`pages/projects`, `tables/simple`, `pages/pricing`, `index2/3`)
- [ ] A2. Working **filters & search** (projects status filter; mailbox / file-manager / faq search)
- [ ] A3. **Form validation + submit + success toast** (login, register, lockscreen, compose, profile, contact)
- [ ] A4. Inert `href="#"` actions → real handlers or `type="button"` (dropdowns, row actions)

## B. Perfect Next/React integration
- [ ] B1. **`next/link` client-side navigation** in the library nav (Sidebar, AppContent
      breadcrumbs) — keep raw-`<a>` fallback when `next` is absent
- [ ] B2. `next/image` for static assets (lazy-load/sizing; `unoptimized` for export)

## C. 1:1 content fidelity (visual)
- [ ] C1. Side-by-side visual diff of each page vs `adminlte.io/themes/v4`; match any drift

## D. Library completeness (stop hand-writing Bootstrap in pages)
- [ ] D1. Typed components: `Pagination`, `Breadcrumb`, `Badge`, `Dropdown`, `ListGroup`,
      `Spinner`, `Avatar`/`AvatarGroup`, `Table`, `Carousel`, `Offcanvas`, `Stepper`

## A5. Showcase plugin-backed components live (not just docs code)
- [ ] Editor (Quill 2) on `mailbox/compose`; InputFlatpickr + InputTomSelect on
      `forms/elements`; `<Datatable>` (Tabulator) variant on `tables/data`. These are
      currently only in `/docs` code blocks — wiring them live also runtime-tests them.

## E. Post-upgrade runtime smoke-test
- [ ] E1. Verify Quill 2 editor — blocked on A5 (no live editor yet)
- [x] E2. ApexCharts 5 + jsVectorMap render correctly on the dashboard ✓

## F. Quality / infra
- [ ] F1. Tests — Playwright route smoke (every route 200, no console errors) + unit tests
- [ ] F2. Accessibility audit (axe) to back the WCAG-AA claim
- [ ] F3. CHANGELOG: dependency bump + new components + app polish
- [ ] F4. (owner) make repo public · `npm publish` · create `adminlte-django` repo
