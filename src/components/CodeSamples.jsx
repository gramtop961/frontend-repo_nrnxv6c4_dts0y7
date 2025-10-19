import { useState } from 'react'
import { Clipboard, ClipboardCheck } from 'lucide-react'

const samples = {
  JavaScript: `import { auth } from 'vanish-auth'\n\nawait auth.login({ biometric: true })\n`,
  React: `import { useEffect } from 'react'\nimport { auth } from 'vanish-auth'\n\nexport default function Login() {\n  useEffect(() => {\n    auth.login({ biometric: true })\n  }, [])\n  return null\n}\n`,
  Node: `import { createClient } from 'vanish-auth/server'\n\nconst client = createClient(process.env.VANISH_KEY)\nconst session = await client.verify(request)\n`,
  cURL: `curl -X POST https://api.vanishauth.com/verify \\\n  -H 'Authorization: Bearer <VANISH_KEY>' \\\n  -d '{"challenge":"<token>"}'\n`,
}

export default function CodeSamples() {
  const tabs = Object.keys(samples)
  const [active, setActive] = useState(tabs[0])
  const [copied, setCopied] = useState(false)

  const code = samples[active]

  const onCopy = async () => {
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      setTimeout(() => setCopied(false), 1200)
    } catch (e) {
      // no-op
    }
  }

  return (
    <section id="code" className="relative bg-slate-950 py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-8 flex flex-wrap items-center justify-between gap-3">
          <div>
            <h2 className="text-2xl font-semibold text-white md:text-3xl">Integrate in seconds</h2>
            <p className="mt-2 text-slate-400">Pick your stack and paste. That’s it.</p>
          </div>

          <div className="flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 p-1">
            {tabs.map((t) => (
              <button
                key={t}
                onClick={() => setActive(t)}
                className={`rounded-md px-3 py-1.5 text-sm transition ${
                  active === t ? 'bg-slate-900 text-white' : 'text-slate-300 hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div className="relative overflow-hidden rounded-xl border border-white/10 bg-gradient-to-b from-slate-900 to-slate-950">
          <div className="flex items-center justify-between border-b border-white/10 px-4 py-2 text-xs text-slate-400">
            <div className="inline-flex items-center gap-2">
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-rose-500" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-amber-400" />
              <span className="inline-block h-2.5 w-2.5 rounded-full bg-emerald-500" />
              <span className="ml-2">{active}</span>
            </div>
            <button
              onClick={onCopy}
              className="inline-flex items-center gap-2 rounded-md border border-white/10 bg-white/5 px-2.5 py-1.5 text-slate-200 hover:bg-white/10"
              aria-label="Copy code"
            >
              {copied ? (
                <>
                  <ClipboardCheck className="h-4 w-4 text-emerald-400" /> Copied
                </>
              ) : (
                <>
                  <Clipboard className="h-4 w-4" /> Copy
                </>
              )}
            </button>
          </div>
          <pre className="overflow-x-auto p-4 text-sm leading-relaxed text-slate-200">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </section>
  )
}
