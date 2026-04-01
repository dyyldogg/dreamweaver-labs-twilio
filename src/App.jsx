import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'

const brandName = 'Dreamweaver Labs'
const legalName = 'Dreamweaver Labs, Inc.'
const contactEmail = 'contact@dreamweaver-labs.com'
const address = '1458 Palisades Drive'

function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-100 bg-white/80 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        <Link to="/" className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-xl font-bold text-transparent">
          {brandName}
        </Link>
        <nav className="hidden items-center gap-8 text-sm font-medium text-gray-700 md:flex">
          <Link to="/platform" className="transition-colors hover:text-purple-600">Platform</Link>
          <Link to="/communications" className="transition-colors hover:text-purple-600">Workflows</Link>
          <Link to="/portal" className="transition-colors hover:text-purple-600">Client Portal</Link>
          <Link to="/privacy" className="transition-colors hover:text-purple-600">Privacy</Link>
          <Link to="/terms" className="transition-colors hover:text-purple-600">Terms</Link>
        </nav>
        <div className="flex items-center gap-4">
          <Link to="/login" className="text-sm font-medium text-gray-700 transition-colors hover:text-purple-600">
            Sign In
          </Link>
          <Link
            to="/signup"
            className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-lg"
          >
            Request Demo
          </Link>
        </div>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gray-50">
      <div className="mx-auto max-w-7xl px-6 py-12">
        <div className="mb-8 grid gap-8 md:grid-cols-4">
          <div>
            <div className="mb-3 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-lg font-bold text-transparent">
              {brandName}
            </div>
            <p className="text-sm leading-relaxed text-gray-600">
              Lead capture, intake automation, and client conversion workflows for modern law firms.
            </p>
          </div>
          <div>
            <div className="mb-3 text-sm font-semibold text-gray-900">Platform</div>
            <div className="space-y-2 text-sm text-gray-600">
              <Link to="/platform" className="block transition-colors hover:text-purple-600">Platform</Link>
              <Link to="/communications" className="block transition-colors hover:text-purple-600">Workflows</Link>
              <Link to="/portal" className="block transition-colors hover:text-purple-600">Client Portal</Link>
            </div>
          </div>
          <div>
            <div className="mb-3 text-sm font-semibold text-gray-900">Legal</div>
            <div className="space-y-2 text-sm text-gray-600">
              <Link to="/privacy" className="block transition-colors hover:text-purple-600">Privacy Policy</Link>
              <Link to="/terms" className="block transition-colors hover:text-purple-600">Terms of Service</Link>
              <Link to="/communications" className="block transition-colors hover:text-purple-600">Messaging Terms</Link>
            </div>
          </div>
          <div>
            <div className="mb-3 text-sm font-semibold text-gray-900">Contact</div>
            <div className="space-y-2 text-sm text-gray-600">
              <div>{address}</div>
              <div>{contactEmail}</div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-200 pt-8 text-sm text-gray-600">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <div>© {new Date().getFullYear()} {legalName}. All rights reserved.</div>
            <div className="text-xs text-gray-500">
              Built for responsive intake and reliable follow-up
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

function Home() {
  const featureCards = [
    {
      name: 'Lead Capture',
      description: 'Capture every inquiry from ads, landing pages, referrals, and website forms into a single intake pipeline.',
    },
    {
      name: 'Fast Follow-Up',
      description: 'Send immediate replies, consultation reminders, and nurture sequences so high-intent prospects do not go cold.',
    },
    {
      name: 'Intake Qualification',
      description: 'Collect practice area, urgency, case details, and referral source data before your team spends time on outreach.',
    },
  ]

  const platformFeatures = [
    { name: 'Lead Intake Forms', desc: 'Custom forms for firm and campaign pages' },
    { name: 'Consultation Routing', desc: 'Direct leads to the right team or practice area' },
    { name: 'Automated Messaging', desc: 'Email and SMS reminders with consent tracking' },
    { name: 'Conflict Check Prep', desc: 'Collect the details your intake team needs early' },
    { name: 'Lead Scoring', desc: 'Surface urgent and high-fit opportunities first' },
    { name: 'Pipeline Reporting', desc: 'Track source, conversion, and response time' },
    { name: 'Client Portal', desc: 'Share forms, docs, and next steps securely' },
    { name: 'Audit Trails', desc: 'Maintain records of outreach and submissions' },
  ]

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50">
        <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
          <div className="mx-auto max-w-4xl text-center">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-purple-100 bg-white/60 px-4 py-2 text-sm font-medium text-purple-700 backdrop-blur-sm">
              <span className="h-2 w-2 animate-pulse rounded-full bg-purple-600"></span>
              Lawyer Lead Capture Platform
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-gray-900 md:text-7xl">
              Convert More Qualified Leads for{' '}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
                Law Firms
              </span>
            </h1>
            <p className="mx-auto mb-10 max-w-3xl text-xl leading-relaxed text-gray-600 md:text-2xl">
              {brandName} helps firms capture inquiries, qualify cases, automate follow-up, and book more consultations from every marketing channel.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                to="/signup"
                className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-105 hover:shadow-xl"
              >
                Request a Demo
              </Link>
              <Link
                to="/platform"
                className="rounded-lg border-2 border-gray-200 bg-white px-8 py-4 text-base font-semibold text-gray-900 transition-all duration-200 hover:border-purple-300 hover:shadow-lg"
              >
                Explore the Platform
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="mb-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
            Intake Built to Capture Demand, Not Lose It
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600">
            Everything your firm needs to respond quickly, organize inquiries, and turn lead volume into retained clients.
          </p>
        </div>
        <div className="grid gap-8 md:grid-cols-3">
          {featureCards.map((card) => (
            <div key={card.name} className="rounded-2xl border border-gray-100 bg-white p-8 transition-all duration-300 hover:border-purple-200 hover:shadow-xl">
              <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-purple-500 to-blue-500">
                <svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
              </div>
              <h3 className="mb-3 text-xl font-bold text-gray-900">{card.name}</h3>
              <p className="leading-relaxed text-gray-600">{card.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-gray-50 py-20">
        <div className="mx-auto max-w-7xl px-6">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-3xl font-bold text-gray-900 md:text-4xl">
              Platform Features
            </h2>
            <p className="mx-auto max-w-2xl text-lg text-gray-600">
              A conversion-focused toolkit for law firms that need faster intake, cleaner routing, and better visibility into pipeline performance.
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {platformFeatures.map((feature) => (
              <div key={feature.name} className="rounded-xl border border-gray-100 bg-white p-6">
                <div className="mb-2 text-base font-semibold text-gray-900">{feature.name}</div>
                <div className="text-sm text-gray-600">{feature.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20">
        <div className="grid items-center gap-16 md:grid-cols-2">
          <div>
            <h2 className="mb-6 text-3xl font-bold text-gray-900 md:text-4xl">
              From First Click to Signed Client
            </h2>
            <p className="mb-8 text-lg leading-relaxed text-gray-600">
              {brandName} gives your intake team a consistent process for new inquiries, consultation scheduling, document requests, and follow-up.
            </p>
            <div className="space-y-6">
              {[
                ['Instant inquiry response', 'Acknowledge every lead right away and tell them what happens next.'],
                ['Consultation scheduling', 'Route prospects to the right attorney or intake specialist by practice area and urgency.'],
                ['Follow-up sequences', 'Keep promising leads engaged with reminders and next-step prompts until they convert.'],
              ].map(([title, text]) => (
                <div key={title} className="flex gap-4">
                  <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <svg className="h-5 w-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <div className="mb-1 font-semibold text-gray-900">{title}</div>
                    <div className="text-gray-600">{text}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-2xl border border-purple-100 bg-gradient-to-br from-purple-50 to-blue-50 p-8">
            <div className="mb-4 text-sm font-semibold text-purple-900">Sample Outreach</div>
            <div className="space-y-4">
              <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <div className="text-sm text-gray-900">"Hi Jamie, thanks for contacting {brandName}. We received your inquiry and an intake specialist will review it shortly."</div>
              </div>
              <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <div className="text-sm text-gray-900">"Your consultation is confirmed for Thursday at 2:30 PM. Reply YES to confirm or call us if you need to reschedule."</div>
              </div>
              <div className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm">
                <div className="text-sm text-gray-900">"Before your call, please upload any documents related to your matter so our team can prepare."</div>
              </div>
            </div>
            <div className="mt-6 text-xs text-gray-600">
              Every workflow is designed around quick response, clear consent, and auditable lead handling.
            </div>
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-600 py-20">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-5xl">
            Turn Marketing Spend Into Retained Clients
          </h2>
          <p className="mb-10 text-xl text-white/90">
            Launch a better intake experience for your firm with {brandName}.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              to="/signup"
              className="rounded-lg bg-white px-8 py-4 text-base font-semibold text-purple-600 transition-all duration-200 hover:scale-105 hover:shadow-2xl"
            >
              Request a Demo
            </Link>
            <Link
              to="/communications"
              className="rounded-lg border-2 border-white px-8 py-4 text-base font-semibold text-white transition-all duration-200 hover:bg-white/10"
            >
              Review Messaging Workflows
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

function Platform() {
  const modules = [
    {
      title: 'Lead Capture Workspace',
      description: 'Centralize website forms, ad campaign inquiries, referral submissions, and call requests in one dashboard.',
      bullets: ['Source attribution by campaign', 'Lead status tracking', 'Firm and contact profiles'],
    },
    {
      title: 'Practice Area Routing',
      description: 'Automatically assign leads by matter type, location, urgency, or intake team capacity.',
      bullets: ['Custom assignment rules', 'Priority routing', 'Team handoff visibility'],
    },
    {
      title: 'Automated Intake Outreach',
      description: 'Launch email and SMS sequences that move prospects toward a scheduled consultation.',
      bullets: ['Instant acknowledgment', 'Consultation reminders', 'Document request follow-up'],
    },
    {
      title: 'Reporting and Visibility',
      description: 'See where leads come from, how fast your team responds, and which channels convert best.',
      bullets: ['Lead-to-consult metrics', 'Source performance', 'Response time reporting'],
    },
  ]

  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="max-w-3xl">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          The Platform
        </h1>
        <p className="mb-12 text-xl leading-relaxed text-gray-600">
          {brandName} is the operating system for lead capture and intake. Track every inquiry, qualify matters faster, and give your team the workflows they need to convert demand efficiently.
        </p>
      </div>

      <div className="space-y-16">
        <div>
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Core Modules</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {modules.map((module) => (
              <div key={module.title} className="rounded-xl border border-gray-200 bg-white p-6">
                <h3 className="mb-3 text-lg font-semibold text-gray-900">{module.title}</h3>
                <p className="mb-4 text-gray-600">{module.description}</p>
                <ul className="space-y-2 text-sm text-gray-600">
                  {module.bullets.map((bullet) => (
                    <li key={bullet}>• {bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-gray-200 bg-gray-50 p-8">
          <h2 className="mb-6 text-2xl font-bold text-gray-900">Data You Can Act On</h2>
          <div className="grid gap-8 md:grid-cols-3">
            <div>
              <div className="mb-3 text-sm font-semibold text-purple-600">Pipeline Insights</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Open leads by stage</li>
                <li>Qualified matter counts</li>
                <li>Consultation booking rate</li>
                <li>Follow-up completion trends</li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold text-blue-600">Marketing Performance</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Lead source ROI</li>
                <li>Campaign conversion rates</li>
                <li>Landing page performance</li>
                <li>Response speed by channel</li>
              </ul>
            </div>
            <div>
              <div className="mb-3 text-sm font-semibold text-cyan-600">Intake Operations</div>
              <ul className="space-y-2 text-sm text-gray-700">
                <li>Team workload visibility</li>
                <li>Time-to-first-response</li>
                <li>Matter qualification trends</li>
                <li>Retained client reporting</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function Communications() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
        Intake and Messaging Workflows
      </h1>
      <p className="mb-12 text-xl leading-relaxed text-gray-600">
        {brandName} supports consent-based outreach for law firm intake teams. Every message flow is built to help firms respond faster and document communications clearly.
      </p>

      <div className="space-y-12">
        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Message Types</h2>
          <p className="mb-6 text-gray-600">
            Use messaging to acknowledge new inquiries, confirm consultations, request documents, and keep prospective clients moving through intake.
          </p>
          <div className="space-y-4">
            {[
              ['New Inquiry Response', '"Thanks for contacting Dreamweaver Labs. We received your request and will follow up shortly."'],
              ['Consultation Reminder', '"This is a reminder for your consultation on [Date] at [Time]. Reply YES to confirm."'],
              ['Document Request', '"Please upload any documents relevant to your matter before your scheduled intake call."'],
              ['Follow-Up Reminder', '"We wanted to follow up on your inquiry. If you are still looking for counsel, reply here and our team can help."'],
            ].map(([title, message]) => (
              <div key={title} className="rounded-xl border border-gray-200 bg-gray-50 p-6">
                <div className="mb-2 text-sm font-semibold text-gray-900">{title}</div>
                <div className="rounded border border-gray-200 bg-white p-4 font-mono text-sm text-gray-700">
                  {message}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-2xl border border-blue-200 bg-blue-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Consent and Logging</h2>
          <p className="mb-6 text-gray-700">
            Firms can collect communication preferences during intake and maintain records of form submissions, replies, and message history for operational visibility.
          </p>
          <div className="rounded-lg border border-blue-200 bg-white p-6">
            <div className="mb-3 text-sm font-semibold text-gray-900">Workflow Controls</div>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• Consent capture on forms</li>
              <li>• Timestamped submission records</li>
              <li>• Opt-out language in SMS workflows</li>
              <li>• Centralized conversation history</li>
              <li>• Intake activity audit trail</li>
            </ul>
          </div>
        </div>

        <div>
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Operational Standards</h2>
          <div className="prose prose-gray max-w-none">
            <p className="leading-relaxed text-gray-700">
              {brandName} is designed to help firms run cleaner intake operations with clear messaging rules, structured data collection, and documented follow-up activity.
            </p>
            <ul className="space-y-2 text-gray-700">
              <li>Consent-aware outreach before recurring SMS messages</li>
              <li>Centralized lead and conversation records</li>
              <li>Structured intake questions and routing</li>
              <li>Clear next-step communications for prospects</li>
              <li>Searchable history for team handoffs</li>
            </ul>
          </div>
        </div>

        <div className="rounded-2xl border border-purple-200 bg-purple-50 p-8">
          <h2 className="mb-4 text-2xl font-bold text-gray-900">Message Frequency</h2>
          <p className="text-gray-700">
            Message frequency varies based on inquiry activity, consultation status, and whether a prospect has requested updates from your firm.
          </p>
        </div>
      </div>
    </div>
  )
}

function Portal() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-20">
      <div className="mx-auto mb-16 max-w-3xl text-center">
        <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">
          Client Portal
        </h1>
        <p className="text-xl leading-relaxed text-gray-600">
          Give prospective and active clients a secure place to complete intake, upload documents, and stay aligned on next steps.
        </p>
      </div>

      <div className="mb-16 grid gap-8 md:grid-cols-3">
        {[
          ['Consultation Requests', 'Allow prospective clients to request appointments and share intake details before the first call.'],
          ['Digital Intake Forms', 'Collect practice area questions, contact details, and supporting information in one structured experience.'],
          ['Document Sharing', 'Provide a simple workflow for uploading documents and reviewing next steps.'],
        ].map(([title, text], index) => (
          <div key={title} className="rounded-2xl border border-gray-200 bg-white p-8 text-center">
            <div className={`mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl ${index === 0 ? 'bg-gradient-to-br from-purple-500 to-blue-500' : index === 1 ? 'bg-gradient-to-br from-blue-500 to-cyan-500' : 'bg-gradient-to-br from-cyan-500 to-teal-500'}`}>
              <svg className="h-8 w-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
            </div>
            <h3 className="mb-3 text-xl font-bold text-gray-900">{title}</h3>
            <p className="text-gray-600">{text}</p>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-gray-100 p-12 text-center">
        <h2 className="mb-4 text-2xl font-bold text-gray-900">Portal Access</h2>
        <p className="mx-auto mb-8 max-w-2xl text-gray-600">
          The client portal is designed for frictionless intake and communication, so firms can move prospects toward consultation without losing context.
        </p>
        <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Link
            to="/login"
            className="rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 px-8 py-3 text-base font-semibold text-white transition-all hover:shadow-xl"
          >
            Sign In to Portal
          </Link>
          <Link
            to="/signup"
            className="rounded-lg border-2 border-gray-200 bg-white px-8 py-3 text-base font-semibold text-gray-900 transition-all hover:border-purple-300"
          >
            Request a Demo
          </Link>
        </div>
      </div>
    </div>
  )
}

function Signup() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-20">
      <div className="mx-auto max-w-2xl px-6">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Request a Demo</h1>
          <p className="text-lg text-gray-600">
            See how {brandName} can improve lead capture and intake for your firm
          </p>
        </div>

        <form name="demoRequest" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:p-10">
          <input type="hidden" name="form-name" value="demoRequest" />
          <input type="hidden" name="bot-field" />

          <div className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900">First Name</label>
                <input name="firstName" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-purple-500 focus:outline-none" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900">Last Name</label>
                <input name="lastName" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-purple-500 focus:outline-none" required />
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-900">Firm Name</label>
              <input name="firmName" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-purple-500 focus:outline-none" required />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900">Email Address</label>
                <input type="email" name="email" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-purple-500 focus:outline-none" required />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900">Phone Number</label>
                <input type="tel" name="phone" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-purple-500 focus:outline-none" required />
              </div>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900">Primary Practice Area</label>
                <input name="practiceArea" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-purple-500 focus:outline-none" placeholder="Personal injury, family law, immigration..." />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-gray-900">Monthly Lead Volume</label>
                <select name="leadVolume" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-purple-500 focus:outline-none">
                  <option value="">Select</option>
                  <option value="1-25">1-25 leads</option>
                  <option value="26-100">26-100 leads</option>
                  <option value="101-250">101-250 leads</option>
                  <option value="250+">250+ leads</option>
                </select>
              </div>
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-900">What are you trying to improve?</label>
              <textarea name="message" rows="4" className="w-full resize-none rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-purple-500 focus:outline-none"></textarea>
            </div>

            <div className="rounded-xl border border-blue-100 bg-blue-50 p-6">
              <p className="mb-4 text-sm font-semibold text-gray-900">
                Would you like to receive SMS updates about your demo request?
              </p>
              <div className="mb-4 space-y-3">
                <label className="has-[:checked]:border-purple-500 has-[:checked]:bg-purple-50 flex cursor-pointer items-center gap-3 rounded-lg border-2 border-gray-200 bg-white p-3 transition-colors hover:border-purple-300">
                  <input type="radio" name="smsConsent" value="yes" className="h-5 w-5 border-gray-300 text-purple-600 focus:ring-purple-500" required />
                  <span className="text-sm font-medium text-gray-900">Yes, send me SMS updates</span>
                </label>
                <label className="has-[:checked]:border-gray-400 has-[:checked]:bg-gray-50 flex cursor-pointer items-center gap-3 rounded-lg border-2 border-gray-200 bg-white p-3 transition-colors hover:border-gray-300">
                  <input type="radio" name="smsConsent" value="no" className="h-5 w-5 border-gray-300 text-gray-600 focus:ring-gray-500" />
                  <span className="text-sm font-medium text-gray-700">No thanks</span>
                </label>
              </div>
              <p className="text-xs leading-relaxed text-gray-600">
                By selecting "Yes", you consent to receive transactional service messages from {legalName} about your demo request and related follow-up. Consent is not a condition of purchase. Message frequency varies. Message and data rates may apply. <strong>Reply STOP to cancel at any time.</strong> <strong>Reply HELP</strong> for assistance. See our{' '}
                <Link to="/privacy" className="font-medium text-purple-600 hover:underline">Privacy Policy</Link> and{' '}
                <Link to="/terms" className="font-medium text-purple-600 hover:underline">Terms of Service</Link>.
              </p>
            </div>

            <button type="submit" className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
              Request Demo
            </button>

            <p className="text-center text-sm text-gray-600">
              Already have access?{' '}
              <Link to="/login" className="font-medium text-purple-600 hover:underline">Sign in</Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 via-blue-50 to-cyan-50 py-20">
      <div className="mx-auto max-w-md px-6">
        <div className="mb-10 text-center">
          <h1 className="mb-4 text-4xl font-bold text-gray-900">Welcome Back</h1>
          <p className="text-lg text-gray-600">
            Sign in to access your Dreamweaver Labs workspace
          </p>
        </div>

        <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-xl md:p-10">
          <div className="space-y-6">
            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-900">Email Address</label>
              <input type="email" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-purple-500 focus:outline-none" />
            </div>

            <div>
              <label className="mb-2 block text-sm font-semibold text-gray-900">Password</label>
              <input type="password" className="w-full rounded-lg border-2 border-gray-200 px-4 py-3 transition-colors focus:border-purple-500 focus:outline-none" />
            </div>

            <button className="w-full rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 py-4 text-base font-semibold text-white transition-all duration-200 hover:scale-[1.02] hover:shadow-xl">
              Sign In
            </button>

            <p className="text-center text-sm text-gray-600">
              Need a walkthrough?{' '}
              <Link to="/signup" className="font-medium text-purple-600 hover:underline">Request a demo</Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

function Privacy() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Privacy Policy</h1>
      <div className="prose prose-lg max-w-none">
        <p className="mb-8 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="mb-6 leading-relaxed text-gray-700">
          {legalName} ("{brandName}", "we", "us") provides lead capture, intake, and communication software for law firms. This policy explains how we collect, use, and share information.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Information We Collect</h2>
        <ul className="space-y-2 text-gray-700">
          <li>Contact information submitted through website forms</li>
          <li>Firm details, intake notes, and requested services</li>
          <li>Communication preferences and consent records</li>
          <li>Website analytics and form submission metadata</li>
          <li>Account activity and authentication logs</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">How We Use Information</h2>
        <ul className="space-y-2 text-gray-700">
          <li>To respond to inquiries and deliver requested demos or services</li>
          <li>To operate lead capture, intake, and messaging workflows</li>
          <li>To maintain consent and communication records</li>
          <li>To monitor performance, security, and service reliability</li>
          <li>To improve the platform experience and workflow automation</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">SMS Communications</h2>
        <p className="mb-4 leading-relaxed text-gray-700">
          We may use SMS to deliver transactional updates related to your demo request, onboarding, or service activity. Key details:
        </p>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Consent:</strong> We collect explicit consent before sending recurring SMS messages.</li>
          <li><strong>Message Types:</strong> Demo scheduling, follow-up updates, and service notifications.</li>
          <li><strong>Frequency:</strong> Message frequency varies based on your request and account activity.</li>
          <li><strong>Opt-Out:</strong> <strong>Reply STOP to cancel at any time.</strong></li>
          <li><strong>Help:</strong> <strong>Reply HELP</strong> for assistance or contact {contactEmail}.</li>
          <li><strong>Records:</strong> We store consent records and message history for operational purposes.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Data Sharing</h2>
        <p className="leading-relaxed text-gray-700">
          We share necessary data with trusted service providers that help us operate our website, communications, infrastructure, and analytics. We do not sell personal information.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Data Retention</h2>
        <p className="leading-relaxed text-gray-700">
          We retain information for as long as needed to provide services, support intake workflows, resolve disputes, and satisfy legal or operational requirements.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Your Rights and Choices</h2>
        <ul className="space-y-2 text-gray-700">
          <li><strong>Opt-Out:</strong> Reply <strong>STOP</strong> to discontinue SMS updates.</li>
          <li><strong>Access:</strong> You may request access to information we hold about you.</li>
          <li><strong>Correction:</strong> You may ask us to update inaccurate information.</li>
          <li><strong>Deletion:</strong> You may request deletion, subject to legal and operational obligations.</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Security</h2>
        <p className="leading-relaxed text-gray-700">
          We use administrative, technical, and organizational safeguards intended to protect the information we process.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Changes to This Policy</h2>
        <p className="leading-relaxed text-gray-700">
          We may update this policy from time to time. Material changes will be reflected on this page with an updated effective date.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Contact Us</h2>
        <div className="leading-relaxed text-gray-700">
          <p>{legalName}</p>
          <p>{address}</p>
          <p>Email: {contactEmail}</p>
        </div>
      </div>
    </div>
  )
}

function Terms() {
  return (
    <div className="mx-auto max-w-4xl px-6 py-20">
      <h1 className="mb-6 text-4xl font-bold text-gray-900 md:text-5xl">Terms of Service</h1>
      <div className="prose prose-lg max-w-none">
        <p className="mb-8 text-gray-600">Last updated: {new Date().toLocaleDateString()}</p>

        <p className="mb-6 leading-relaxed text-gray-700">
          By using {brandName} services, you agree to these Terms of Service.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Services</h2>
        <p className="leading-relaxed text-gray-700">
          {legalName} provides lead capture, intake automation, messaging, and client communication workflows for law firms and legal service teams.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">SMS/Mobile Terms</h2>
        <div className="my-6 rounded-xl border border-blue-200 bg-blue-50 p-6">
          <h3 className="mb-4 text-lg font-semibold text-gray-900">Program Information</h3>
          <ul className="space-y-3 text-gray-700">
            <li><strong>Program Name:</strong> {brandName} Communications</li>
            <li><strong>Description:</strong> Transactional messages related to demo requests, onboarding, service updates, and intake workflows.</li>
            <li><strong>Opt-In:</strong> Subscribe through our website forms or other explicit consent flows.</li>
            <li><strong>Frequency:</strong> Recurring; message frequency varies based on your activity.</li>
            <li><strong>Cost:</strong> Message and data rates may apply according to your carrier plan.</li>
            <li><strong>Consent:</strong> Consent to receive SMS is not a condition of purchase.</li>
            <li><strong>Opt-Out:</strong> <strong>Reply STOP to cancel at any time.</strong></li>
            <li><strong>Help:</strong> <strong>Reply HELP</strong> for assistance or contact {contactEmail}.</li>
          </ul>
        </div>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">User Responsibilities</h2>
        <ul className="space-y-2 text-gray-700">
          <li>You must provide accurate and current contact information</li>
          <li>You are responsible for maintaining the confidentiality of your login credentials</li>
          <li>You must use the services in compliance with applicable laws and regulations</li>
          <li>You may not use the services for unlawful, abusive, or deceptive purposes</li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Consent and Data Usage</h2>
        <ul className="space-y-2 text-gray-700">
          <li>You authorize us to process submitted information to provide the requested services</li>
          <li>If you opt into SMS, we may store your phone number and consent details</li>
          <li>We may use service providers to deliver infrastructure, hosting, and communications</li>
          <li>You may withdraw SMS consent at any time by replying <strong>STOP</strong></li>
        </ul>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Service Availability</h2>
        <p className="leading-relaxed text-gray-700">
          We strive to maintain reliable service but do not guarantee uninterrupted availability. Maintenance, updates, or third-party outages may affect the platform from time to time.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Limitation of Liability</h2>
        <p className="leading-relaxed text-gray-700">
          To the fullest extent permitted by law, {legalName} shall not be liable for indirect, incidental, special, consequential, or punitive damages arising from your use of the services.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Termination</h2>
        <p className="leading-relaxed text-gray-700">
          We may suspend or terminate access to the services if you violate these Terms or use the platform in a way that creates risk for us or other users.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Changes to Terms</h2>
        <p className="leading-relaxed text-gray-700">
          We may update these Terms from time to time. Changes become effective when posted to this page.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Governing Law</h2>
        <p className="leading-relaxed text-gray-700">
          These Terms are governed by the laws of the State of California, without regard to conflict of law principles.
        </p>

        <h2 className="mb-4 mt-12 text-2xl font-bold text-gray-900">Contact</h2>
        <div className="leading-relaxed text-gray-700">
          <p>{legalName}</p>
          <p>{address}</p>
          <p>Email: {contactEmail}</p>
        </div>

        <p className="mt-8 leading-relaxed text-gray-700">
          For more information about our data practices, see our{' '}
          <Link to="/privacy" className="font-medium text-purple-600 hover:underline">Privacy Policy</Link>.
        </p>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen flex flex-col bg-white">
        <Header />
        <div className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/platform" element={<Platform />} />
            <Route path="/communications" element={<Communications />} />
            <Route path="/portal" element={<Portal />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  )
}
