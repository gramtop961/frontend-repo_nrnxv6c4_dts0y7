import { CheckCircle2, Fingerprint, Shield, Zap } from 'lucide-react'

const points = [
  {
    icon: <Fingerprint className="h-5 w-5 text-blue-400" />,
    title: 'Built on WebAuthn & Passkeys',
    desc: 'Native biometric flows across devices with zero passwords to store.'
  },
  {
    icon: <Shield className="h-5 w-5 text-emerald-400" />,
    title: 'Privacy by design',
    desc: 'End-to-end challenge signing. No secrets in the browser.'
  },
  {
    icon: <Zap className="h-5 w-5 text-amber-400" />,
    title: 'DX that feels invisible',
    desc: 'One line to sign in. Sensible defaults. Clear errors.'
  },
]

const badges = [
  'WebAuthn-ready',
  'FIDO2-compatible',
  'Rate-limited APIs',
  'Audit-friendly logs',
]

export default function TrustSignals() {
  return (
    <section className="relative bg-slate-950 py-14">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold text-white">Security you can explain</h3>
            <p className="mt-3 max-w-prose text-slate-400">
              We focus on fundamentals: strong public-key cryptography, secure device-bound credentials, and clear operational controls. Ship trust without the ceremony.
            </p>

            <ul className="mt-6 space-y-4">
              {points.map((p) => (
                <li key={p.title} className="flex items-start gap-3">
                  <div className="mt-0.5">{p.icon}</div>
                  <div>
                    <p className="font-medium text-slate-200">{p.title}</p>
                    <p className="text-sm text-slate-400">{p.desc}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950 p-6">
            <p className="text-sm font-medium uppercase tracking-wide text-slate-400">Signals</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {badges.map((b) => (
                <span
                  key={b}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-200"
                >
                  <CheckCircle2 className="h-4 w-4 text-emerald-400" /> {b}
                </span>
              ))}
            </div>

            <div className="mt-8 rounded-lg border border-white/10 bg-slate-950 p-4">
              <p className="text-sm text-slate-400">“The quickest way we shipped passkeys without rewriting auth.”</p>
              <p className="mt-2 text-sm font-medium text-slate-300">— Early design partner</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
