import { ArrowRight, Mail } from 'lucide-react'

export default function CTASection() {
  const onSubmit = (e) => {
    e.preventDefault()
    const form = e.currentTarget
    const email = new FormData(form).get('email')
    const subject = encodeURIComponent('Vanish Auth – Early Access')
    const body = encodeURIComponent(`Please add me to the waitlist.\nEmail: ${email ?? ''}`)
    window.location.href = `mailto:founders@vanishauth.com?subject=${subject}&body=${body}`
  }

  return (
    <section id="get-access" className="relative bg-slate-950 py-20">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <h3 className="text-3xl font-semibold text-white">Get on the waitlist</h3>
        <p className="mx-auto mt-3 max-w-prose text-slate-400">
          Be first to try passwordless that feels invisible. Limited design partner slots available.
        </p>

        <form onSubmit={onSubmit} className="mx-auto mt-8 flex max-w-xl items-center gap-3">
          <div className="relative w-full">
            <Mail className="pointer-events-none absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
            <input
              required
              name="email"
              type="email"
              placeholder="you@company.com"
              className="w-full rounded-lg border border-white/10 bg-white/5 px-10 py-3 text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 font-medium text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
          >
            Join
            <ArrowRight className="h-4 w-4" />
          </button>
        </form>

        <p className="mt-4 text-xs text-slate-500">No spam. Unsubscribe anytime.</p>
      </div>
    </section>
  )
}
