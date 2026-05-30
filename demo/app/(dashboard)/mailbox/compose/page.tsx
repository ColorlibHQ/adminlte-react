import { AppContent, Card, Editor } from 'adminlte-react'

export const metadata = { title: "Compose" }

export default function ComposeMessagePage() {
  return (
    <AppContent
      title="Compose Message"
      breadcrumbs={[
        { label: 'Home', href: '/' },
        { label: 'Mailbox', href: '/mailbox/inbox' },
        { label: 'Compose' },
      ]}
    >
      <Card
        title="New Message"
        footerClass="d-flex gap-2"
        footer={
          <>
            <button className="btn btn-primary" type="button">
              <i className="bi bi-send me-1" aria-hidden="true"></i>Send
            </button>
            <button className="btn btn-outline-secondary" type="button">
              <i className="bi bi-file-earmark me-1" aria-hidden="true"></i>
              Save draft
            </button>
            <button className="btn btn-outline-danger ms-auto" type="button">
              <i className="bi bi-x-lg me-1" aria-hidden="true"></i>Discard
            </button>
          </>
        }
      >
        <form className="row g-3">
          <div className="col-12">
            <label className="form-label" htmlFor="mail-to">
              To
            </label>
            <input
              type="email"
              className="form-control"
              id="mail-to"
              placeholder="recipient@example.com"
            />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="mail-cc">
              Cc
            </label>
            <input type="text" className="form-control" id="mail-cc" />
          </div>
          <div className="col-md-6">
            <label className="form-label" htmlFor="mail-bcc">
              Bcc
            </label>
            <input type="text" className="form-control" id="mail-bcc" />
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="mail-subject">
              Subject
            </label>
            <input type="text" className="form-control" id="mail-subject" />
          </div>
          <div className="col-12">
            <Editor name="body" label="Message" placeholder="Write your message…" />
          </div>
          <div className="col-12">
            <label className="form-label" htmlFor="mail-attach">
              Attachments
            </label>
            <input type="file" className="form-control" id="mail-attach" multiple />
          </div>
        </form>
      </Card>
    </AppContent>
  )
}
