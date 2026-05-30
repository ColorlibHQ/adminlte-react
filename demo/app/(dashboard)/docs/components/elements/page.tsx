import type { Metadata } from 'next'
import {
  Badge,
  Breadcrumb,
  Spinner,
  Avatar,
  AvatarGroup,
  ListGroup,
  ListGroupItem,
  Dropdown,
  Carousel,
  Offcanvas,
  OffcanvasTrigger,
} from 'adminlte-react'
import { DocsPage } from '@/components/docs/docs-page'
import { ShowcasePrimitives } from '@/components/showcase-primitives'
import { ShowcaseTable } from '@/components/showcase-table'
import { withBase } from '@/lib/base'

export const metadata: Metadata = {
  title: 'UI Elements',
  description:
    'Typed building blocks: Badge, Breadcrumb, Pagination, Spinner, Avatar, ListGroup, Table, Dropdown, Carousel, Offcanvas, and Stepper.',
}

const onThisPage: [string, string][] = [
  ['Badge', 'badge'],
  ['Breadcrumb', 'breadcrumb'],
  ['Pagination & Stepper', 'pagination-stepper'],
  ['Spinner', 'spinner'],
  ['Avatar / AvatarGroup', 'avatar'],
  ['ListGroup', 'list-group'],
  ['Table', 'table'],
  ['Dropdown', 'dropdown'],
  ['Carousel', 'carousel'],
  ['Offcanvas', 'offcanvas'],
]

export default function ElementsPage() {
  return (
    <DocsPage
      title="UI Elements"
      lead="Typed, declarative building blocks so pages stop hand-writing Bootstrap markup. Most are Server Components; Dropdown, Carousel, and Offcanvas are driven by the Bootstrap JS bundle."
    >
      <p className="mb-1">
        <strong>On this page</strong>
      </p>
      <ul style={{ columnCount: 2 }}>
        {onThisPage.map(([label, id]) => (
          <li key={id}>
            <a href={`#${id}`}>{label}</a>
          </li>
        ))}
      </ul>

      {/* Badge */}
      <h2 id="badge">Badge</h2>
      <p>Contrast-aware labels via <code>text-bg-*</code>, optionally pill-shaped.</p>
      <div className="docs-example">
        <div className="d-flex flex-wrap gap-2 align-items-center">
          <Badge theme="primary">Primary</Badge>
          <Badge theme="success">Success</Badge>
          <Badge theme="danger">Danger</Badge>
          <Badge theme="warning">Warning</Badge>
          <Badge theme="info" pill>
            Pill
          </Badge>
          <span className="position-relative">
            <i className="bi bi-bell fs-4" aria-hidden="true"></i>
            <Badge theme="danger" pill positioned>
              9
            </Badge>
          </span>
        </div>
      </div>

      {/* Breadcrumb */}
      <h2 id="breadcrumb">Breadcrumb</h2>
      <p>Data-driven trail; the last item renders as the active page.</p>
      <div className="docs-example">
        <Breadcrumb
          items={[
            { label: 'Home', href: '/' },
            { label: 'Library', href: '/docs' },
            { label: 'UI Elements' },
          ]}
        />
      </div>

      {/* Pagination & Stepper */}
      <h2 id="pagination-stepper">Pagination &amp; Stepper</h2>
      <p>
        Both are controlled. <code>Pagination</code> renders buttons when given{' '}
        <code>onPageChange</code>; <code>Stepper</code> marks earlier steps complete.
      </p>
      <div className="docs-example">
        <ShowcasePrimitives />
      </div>

      {/* Spinner */}
      <h2 id="spinner">Spinner</h2>
      <p>Border and grow variants with an accessible status label.</p>
      <div className="docs-example">
        <div className="d-flex gap-3 align-items-center">
          <Spinner theme="primary" />
          <Spinner theme="success" small />
          <Spinner theme="danger" variant="grow" />
          <Spinner theme="info" variant="grow" small />
        </div>
      </div>

      {/* Avatar */}
      <h2 id="avatar">Avatar / AvatarGroup</h2>
      <p>Image or initials fallback, optional presence dot, and overlapping groups.</p>
      <div className="docs-example">
        <div className="d-flex gap-3 align-items-center">
          <Avatar src={withBase('/assets/img/user1-128x128.jpg')} alt="User 1" status="online" />
          <Avatar initials="OB" theme="primary" />
          <Avatar initials="SK" theme="success" rounded status="away" />
          <AvatarGroup>
            <Avatar src={withBase('/assets/img/user2-160x160.jpg')} alt="User 2" size={36} />
            <Avatar src={withBase('/assets/img/user3-128x128.jpg')} alt="User 3" size={36} />
            <Avatar src={withBase('/assets/img/user4-128x128.jpg')} alt="User 4" size={36} />
            <Avatar initials="+5" theme="secondary" size={36} />
          </AvatarGroup>
        </div>
      </div>

      {/* ListGroup */}
      <h2 id="list-group">ListGroup</h2>
      <p><code>ListGroupItem</code> becomes an <code>{'<a>'}</code>, <code>{'<button>'}</code>, or <code>{'<div>'}</code> based on its props.</p>
      <div className="docs-example">
        <div className="row g-3">
          <div className="col-md-6">
            <ListGroup>
              <ListGroupItem active>Dashboard</ListGroupItem>
              <ListGroupItem href="#">Reports</ListGroupItem>
              <ListGroupItem href="#">Settings</ListGroupItem>
              <ListGroupItem disabled>Archived</ListGroupItem>
            </ListGroup>
          </div>
          <div className="col-md-6">
            <ListGroup>
              <ListGroupItem theme="success">Deploy succeeded</ListGroupItem>
              <ListGroupItem theme="warning">Quota at 80%</ListGroupItem>
              <ListGroupItem theme="danger">Build failed</ListGroupItem>
            </ListGroup>
          </div>
        </div>
      </div>

      {/* Table */}
      <h2 id="table">Table</h2>
      <p>Declarative table driven by <code>columns</code> + <code>data</code> with custom cell renderers.</p>
      <div className="docs-example">
        <ShowcaseTable />
      </div>

      {/* Dropdown */}
      <h2 id="dropdown">Dropdown</h2>
      <p>Bootstrap dropdown with items, dividers, headers, and a split variant.</p>
      <div className="docs-example">
        <div className="d-flex flex-wrap gap-2">
          <Dropdown
            label="Actions"
            items={[
              { label: 'Edit', icon: 'bi-pencil', href: '#' },
              { label: 'Duplicate', icon: 'bi-files', href: '#' },
              { divider: true },
              { header: true, label: 'Danger' },
              { label: 'Delete', icon: 'bi-trash', href: '#' },
            ]}
          />
          <Dropdown
            label="Filter"
            theme="secondary"
            variant="outline"
            align="end"
            items={[
              { label: 'All', active: true, href: '#' },
              { label: 'Active', href: '#' },
              { label: 'Archived', disabled: true },
            ]}
          />
          <Dropdown
            label="Split"
            theme="success"
            split
            items={[{ label: 'Save', href: '#' }, { label: 'Save as…', href: '#' }]}
          />
        </div>
      </div>

      {/* Carousel */}
      <h2 id="carousel">Carousel</h2>
      <p>Bootstrap carousel — pass a unique <code>id</code>; controls and indicators are built in.</p>
      <div className="docs-example">
        <div style={{ maxWidth: 480 }}>
          <Carousel
            id="docs-carousel"
            ride="carousel"
            slides={[
              {
                content: (
                  <div className="d-flex align-items-center justify-content-center bg-primary-subtle text-primary-emphasis" style={{ height: 220 }}>
                    <span className="fs-4">Slide one</span>
                  </div>
                ),
                caption: { title: 'First slide', text: 'With a caption.' },
              },
              {
                content: (
                  <div className="d-flex align-items-center justify-content-center bg-success-subtle text-success-emphasis" style={{ height: 220 }}>
                    <span className="fs-4">Slide two</span>
                  </div>
                ),
              },
              {
                content: (
                  <div className="d-flex align-items-center justify-content-center bg-warning-subtle text-warning-emphasis" style={{ height: 220 }}>
                    <span className="fs-4">Slide three</span>
                  </div>
                ),
              },
            ]}
          />
        </div>
      </div>

      {/* Offcanvas */}
      <h2 id="offcanvas">Offcanvas</h2>
      <p>A slide-in panel. Pair <code>OffcanvasTrigger</code> (or any <code>data-bs-toggle</code> element) with an <code>Offcanvas</code> by id.</p>
      <div className="docs-example">
        <OffcanvasTrigger target="docs-offcanvas">
          <i className="bi bi-layout-sidebar me-1" aria-hidden="true"></i>
          Open panel
        </OffcanvasTrigger>
        <Offcanvas
          id="docs-offcanvas"
          title="Settings"
          placement="end"
          footer={
            <button type="button" className="btn btn-primary w-100" data-bs-dismiss="offcanvas">
              Done
            </button>
          }
        >
          <p className="text-secondary">
            Offcanvas panels are great for filters, details, and mobile navigation.
          </p>
          <ListGroup flush>
            <ListGroupItem href="#">Profile</ListGroupItem>
            <ListGroupItem href="#">Preferences</ListGroupItem>
            <ListGroupItem href="#">Sign out</ListGroupItem>
          </ListGroup>
        </Offcanvas>
      </div>
    </DocsPage>
  )
}
