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
- [x] A1. Client-side **search + column sort + pagination** for hand-built tables
      (`pages/projects` → `ProjectsTable`; `tables/data` → Tabulator UsersTable)
- [x] A2. Working **filters & search** (projects status filter; mailbox-inbox / file-manager / faq search)
- [x] A3. **Form validation + submit + success toast** (login, register, login-v2, register-v2,
      lockscreen, compose, profile, settings: account/notifications/security) via `DemoForm`
- [x] A4. Inert `href="#"` links no longer jump to top (`InertLinks` island; preventDefault on
      exactly `a[href="#"]`, leaving Bootstrap `href="#tab"` toggles + real links untouched).
      Library controls (fullscreen/sidebar/⌘K) and demo row actions are already `type="button"`.

## B. Perfect Next/React integration
- [x] B1. **`next/link` client-side navigation** in the sidebar nav via an injectable Link
      (`LinkProvider`/`useLinkComponent` + `DashboardLayout linkComponent`); raw-`<a>` fallback
      keeps the library framework-agnostic. Demo `NavLink` uses `next/link` at the domain root
      (verified: 0 full reloads) and a plain `<a>` under the subpath export (no Next `basePath`
      there). Breadcrumbs stay `<a>` (AppContent is an RSC; can't consume context).
- [x] B2. `next/image` for demo static assets (23 imgs across index2/index3/timeline/lockscreen):
      `unoptimized` for export, lazy-load, intrinsic `width`/`height` (CLS), `src` via `withBase`
      so the prefixed src is baked at build (no SubpathLinks revert). Verified live: all 200, no CLS.

## C. 1:1 content fidelity (visual)
- [ ] C1. Side-by-side visual diff of each page vs `adminlte.io/themes/v4`; match any drift

## D. Library completeness (stop hand-writing Bootstrap in pages)
- [x] D1. Typed components: `Badge`, `Breadcrumb`, `Pagination`, `Spinner`, `Avatar`/`AvatarGroup`,
      `ListGroup`/`ListGroupItem`, `Table` (generic, column-driven), `Dropdown`, `Carousel`,
      `Offcanvas`/`OffcanvasTrigger`, `Stepper`. All exported + typed; Dropdown/Carousel/Offcanvas
      use the Bootstrap JS bundle (data attributes). Live showcase at `/docs/components/elements`
      (verified: all render, dropdown/offcanvas/pagination interactive, no console errors).

## A5. Showcase plugin-backed components live (not just docs code)
- [x] Editor (Quill 2) on `mailbox/compose`; InputFlatpickr + InputTomSelect on
      `forms/elements`. Tabulator was already live on `tables/data` (UsersTable). Plugin
      CSS (Quill/Flatpickr/Tom Select) added to the layout. (The thin `<Datatable>`
      wrapper itself remains docs-only — Tabulator is exercised directly.)

## E. Post-upgrade runtime smoke-test
- [x] E1. Quill 2 editor renders/works on `mailbox/compose` ✓
- [x] E2. ApexCharts 5 + jsVectorMap render correctly on the dashboard ✓
- [x] E3. Tabulator + Flatpickr + Tom Select verified rendering under the new stack ✓

## F. Quality / infra
- [x] F1. Tests — **Vitest** unit tests (19: `cn`, `Pagination`, `Badge`, `Breadcrumb`, `Spinner`,
      `Avatar`, `ListGroupItem`) + **Playwright** route smoke (all 62 routes: 200 + no console
      errors). The smoke run caught two real bugs — a broken kanban add-card attribute
      (`data-add-card-htmlFor` → `data-add-card-for`) and a controlled radio missing `onChange`.
- [x] F2. Accessibility audit (**axe** via Playwright on 5 representative pages). Gate = zero
      **critical** violations (green): fixed `button-name` (card tool, Stepper markers),
      `aria-allowed-attr` (sortable `<th>` no longer `role=button`), `label`/`select-name`
      (Tom Select control + native select aria-label).
- [x] F2a. **Contrast pass (WCAG-AA), both themes:** eliminated all `color-contrast` violations —
      **light 49→0, dark 31→0** across the audited pages. `bg-*-subtle text-*` circles →
      `text-*-emphasis` (the intended BS 5.3 pairing). A theme-scoped token layer in `globals.css`:
      light darkens links (`#0d6efd`→`#0b5ed7`), inline `code` (`#d63384`→`#a4276a`) and muted text
      (`#6c757d`→`#565e64`); dark lifts the fixed-gray muted text + `.btn-outline-secondary` label
      (`#6c757d`→`#adb5bd`). Demo carousel captions made dark (they sit on light slides).
- [x] F3. CHANGELOG: new UI-element components + injectable Link documented under Unreleased.
- [ ] F4. (owner) make repo public · `npm publish` · create `adminlte-django` repo
