import { AppContent } from '@adminlte/react'
import { Faq } from '@/components/faq'

export const metadata = { title: 'FAQ' }

export default function Page() {
  return (
    <AppContent title="FAQ" breadcrumbs={[{ label: 'Home', href: '/' }, { label: 'FAQ' }]}>
      <div className="text-center mb-4">
        <h2 className="mb-2">How can we help?</h2>
        <p className="text-secondary mb-0">Search our knowledge base, or browse the topics below.</p>
      </div>

      <Faq />

      <div className="card mt-4">
        <div className="card-body text-center py-4">
          <i className="bi bi-chat-dots text-primary" style={{ fontSize: '2.5rem' }} aria-hidden="true"></i>
          <h3 className="h5 mt-3 mb-2">Still need help?</h3>
          <p className="text-secondary mb-3">
            Can&rsquo;t find what you&rsquo;re looking for? Our support team is happy to help.
          </p>
          <a href="mailto:support@example.com" className="btn btn-primary">
            <i className="bi bi-envelope me-1" aria-hidden="true"></i>
            Contact support
          </a>
        </div>
      </div>
    </AppContent>
  )
}
