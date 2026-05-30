export interface FaqItem {
  q: string
  a: React.ReactNode
}

export interface FaqCategory {
  icon: string
  title: string
  items: FaqItem[]
}

export const faqCategories: FaqCategory[] = [
  {
    icon: 'bi-rocket-takeoff',
    title: 'Getting started',
    items: [
      {
        q: 'How do I create an account?',
        a: (
          <>
            Click <strong>Sign up</strong> in the top-right corner, enter your email and a strong
            password, then verify your email to activate your workspace.
          </>
        ),
      },
      {
        q: 'Can I try the product before paying?',
        a: 'Yes. Every paid plan includes a 14-day free trial. No credit card is required to start.',
      },
      {
        q: 'How do I invite teammates?',
        a: (
          <>
            From <strong>Settings &rarr; Team</strong>, click <strong>Invite member</strong> and enter
            their email. They&rsquo;ll receive an invitation link valid for seven days.
          </>
        ),
      },
    ],
  },
  {
    icon: 'bi-credit-card',
    title: 'Billing & plans',
    items: [
      {
        q: 'Which payment methods do you accept?',
        a: 'We accept all major credit and debit cards. Annual Enterprise plans can be paid by invoice.',
      },
      {
        q: 'Can I change my plan later?',
        a: 'Yes. Upgrades take effect immediately and are pro-rated. Downgrades take effect at the end of the current billing cycle.',
      },
      {
        q: 'Do you offer refunds?',
        a: 'We offer a full refund within 30 days of your first paid invoice, no questions asked.',
      },
    ],
  },
  {
    icon: 'bi-shield-lock',
    title: 'Security & privacy',
    items: [
      {
        q: 'Where is my data stored?',
        a: 'Data is stored in encrypted form in SOC 2-certified data centers. You can choose your region (US or EU) when you set up your workspace.',
      },
      {
        q: 'Do you support SSO?',
        a: 'Yes, on the Enterprise plan. We support SAML 2.0 and OIDC with providers including Okta, Azure AD, and Google Workspace.',
      },
      {
        q: 'How can I export or delete my data?',
        a: (
          <>
            You can export your data at any time from <strong>Settings &rarr; Data</strong>. Deletion
            requests are honored within 30 days per our DPA.
          </>
        ),
      },
    ],
  },
]
