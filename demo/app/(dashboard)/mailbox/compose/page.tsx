import { AppContent, Card } from 'adminlte-react'

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
            <label className="form-label" htmlFor="mail-body">
              Message
            </label>
            <textarea
              id="mail-body"
              className="form-control"
              rows={12}
              placeholder="Write your message…"
              style={{ minHeight: '16rem' }}
            ></textarea>
            <small className="text-secondary">
              Hook up a rich-text editor such as{' '}
              <a href="https://quilljs.com/" target="_blank" rel="noopener">
                Quill
              </a>{' '}
              or{' '}
              <a
                href="https://github.com/Ionaru/easy-markdown-editor"
                target="_blank"
                rel="noopener"
              >
                EasyMDE
              </a>{' '}
              to upgrade this textarea.
            </small>
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
