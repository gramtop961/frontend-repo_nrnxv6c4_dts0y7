import { ArrowRight, Fingerprint } from 'lucide-react'

export default function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(59,130,246,0.15),transparent_60%)]" />

      <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-32 text-center">
        <div className="mx-auto inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300 backdrop-blur">
          <Fingerprint className="h-4 w-4 text-blue-400" />
          <span>Biometric logins in a single line</span>
        </div>

        <h1 className="mt-6 text-5xl font-semibold tracking-tight text-white md:text-6xl">
          Auth that disappears.
        </h1>
        <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-slate-300 md:text-lg">
          Passwordless authentication SDK for developers. Drop-in biometrics and passkeys with battle‑tested security and a developer‑first DX.
        </p>

        <div className="mt-8 flex items-center justify-center gap-4">
          <a
            href="#get-access"
            className="group inline-flex items-center gap-2 rounded-lg bg-blue-500 px-5 py-3 text-white shadow-lg shadow-blue-500/25 transition hover:bg-blue-400"
          >
            Get early access
            <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />
          </a>
          <a
            href="#code"
            className="inline-flex items-center gap-2 rounded-lg border border-white/10 px-5 py-3 text-slate-200 hover:bg-white/5"
          >
            See the code
          </a>
        </div>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent" />
    </section>
  )
}
