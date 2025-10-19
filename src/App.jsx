import Hero from './components/Hero'
import CodeSamples from './components/CodeSamples'
import TrustSignals from './components/TrustSignals'
import CTASection from './components/CTASection'
import { Fingerprint } from 'lucide-react'

function App() {
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100">
      <header className="sticky top-0 z-10 border-b border-white/10 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <div className="inline-flex items-center gap-2">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-blue-500/20">
              <Fingerprint className="h-5 w-5 text-blue-400" />
            </span>
            <span className="text-sm font-semibold tracking-wide text-white">Vanish Auth</span>
          </div>
          <nav className="hidden items-center gap-6 text-sm text-slate-300 md:flex">
            <a href="#code" className="hover:text-white">Docs</a>
            <a href="#get-access" className="hover:text-white">Early access</a>
            <a href="#get-access" className="rounded-md bg-white/5 px-3 py-1.5 text-white hover:bg-white/10">Get started</a>
          </nav>
        </div>
      </header>

      <main>
        <Hero />
        <CodeSamples />
        <TrustSignals />
        <CTASection />
      </main>

      <footer className="border-t border-white/10 bg-slate-950 py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 text-sm text-slate-400 md:flex-row">
          <p>© {new Date().getFullYear()} Vanish Auth. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <a href="#get-access" className="hover:text-slate-200">Contact</a>
            <a href="#" className="hover:text-slate-200">Privacy</a>
            <a href="#" className="hover:text-slate-200">Security</a>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
