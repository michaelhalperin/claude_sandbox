import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Separator } from "@/components/ui/separator"

// ─── Icons ────────────────────────────────────────────────────────────────────
const ZapIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
  </svg>
)
const ShieldIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
  </svg>
)
const GitBranchIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="6" y1="3" x2="6" y2="15"/><circle cx="18" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><circle cx="6" cy="6" r="3"/>
    <path d="M18 9a9 9 0 0 1-9 9"/>
  </svg>
)
const BarChartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="12" y1="20" x2="12" y2="10"/><line x1="18" y1="20" x2="18" y2="4"/><line x1="6" y1="20" x2="6" y2="16"/>
  </svg>
)
const UsersIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/>
    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>
  </svg>
)
const GlobeIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/>
    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
  </svg>
)
const CheckIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <polyline points="20 6 9 17 4 12"/>
  </svg>
)
const ArrowRightIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <line x1="5" y1="12" x2="19" y2="12"/><polyline points="12 5 19 12 12 19"/>
  </svg>
)

// ─── Data ─────────────────────────────────────────────────────────────────────
const features = [
  { icon: <ZapIcon />, title: "Blazing fast deploys", desc: "Ship in seconds with zero-downtime deployments. Our edge network handles the rest.", color: "text-violet-400", bg: "bg-violet-500/10" },
  { icon: <ShieldIcon />, title: "Enterprise security", desc: "SOC 2 Type II, GDPR compliant. End-to-end encryption by default.", color: "text-cyan-400", bg: "bg-cyan-500/10" },
  { icon: <GitBranchIcon />, title: "Git-native workflow", desc: "Push to deploy. Every branch gets a preview URL. Rollback in one click.", color: "text-indigo-400", bg: "bg-indigo-500/10" },
  { icon: <BarChartIcon />, title: "Real-time analytics", desc: "Know exactly what's happening. Live dashboards, custom alerts, full audit logs.", color: "text-emerald-400", bg: "bg-emerald-500/10" },
  { icon: <UsersIcon />, title: "Team collaboration", desc: "Roles, permissions, shared environments. Built for teams of 1 to 10,000.", color: "text-rose-400", bg: "bg-rose-500/10" },
  { icon: <GlobeIcon />, title: "Global edge network", desc: "99.99% uptime SLA. 40+ regions. Your users always get the fastest response.", color: "text-amber-400", bg: "bg-amber-500/10" },
]

const testimonials = [
  { name: "Sarah Chen", role: "CTO @ Luminary", quote: "Forge cut our deployment time from 20 minutes to under 30 seconds. It's the only platform I'd recommend to any serious team.", avatar: "SC" },
  { name: "Marcus Webb", role: "Lead Eng @ Stackr", quote: "The git-native workflow just makes sense. Our whole team adopted it in a day — no docs needed.", avatar: "MW" },
  { name: "Priya Nair", role: "Founder @ Driftly", quote: "I was skeptical about yet another deploy platform. Now I can't imagine shipping without Forge.", avatar: "PN" },
]

const plans = [
  { name: "Starter", price: "$0", period: "forever", features: ["3 projects", "1 team member", "100 deploys / mo", "Community support"], cta: "Start free", highlighted: false },
  { name: "Pro", price: "$29", period: "per seat / mo", features: ["Unlimited projects", "20 team members", "Unlimited deploys", "Priority support", "Analytics"], cta: "Start free trial", highlighted: true },
  { name: "Enterprise", price: "Custom", period: "contact us", features: ["Unlimited everything", "SSO / SAML", "SLA guarantee", "Dedicated CSM", "Custom contracts"], cta: "Contact sales", highlighted: false },
]

// ─── App ──────────────────────────────────────────────────────────────────────
export default function App() {
  return (
    <div className="min-h-screen bg-[#080810] text-slate-200 antialiased overflow-x-hidden">

      {/* Nav */}
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-[#080810]/80 backdrop-blur-md">
        <div className="mx-auto max-w-6xl px-6 flex h-14 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span className="font-semibold text-white tracking-tight">Forge</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm text-slate-400">
            <a href="#features" className="hover:text-white transition-colors">Features</a>
            <a href="#testimonials" className="hover:text-white transition-colors">Customers</a>
            <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>
            <a href="#" className="hover:text-white transition-colors">Docs</a>
          </nav>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" className="hidden sm:flex text-slate-400 hover:text-white hover:bg-white/5">Sign in</Button>
            <Button size="sm" className="bg-violet-600 hover:bg-violet-500 text-white">Get started</Button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section className="relative pt-32 pb-20 px-6 text-center overflow-hidden">
          <div className="pointer-events-none absolute inset-0 flex items-start justify-center">
            <div className="h-[500px] w-[800px] rounded-full bg-violet-600/10 blur-[120px] -translate-y-1/4" />
          </div>
          <div className="relative mx-auto max-w-3xl">
            <Badge className="mb-6 border-violet-500/30 bg-violet-500/10 text-violet-300 hover:bg-violet-500/10 cursor-default">
              <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-violet-400 inline-block animate-pulse" />
              Now with AI-assisted rollbacks
            </Badge>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold text-white leading-[1.08] tracking-tight mb-6">
              Deploy faster.{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                Ship with confidence.
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-slate-400 max-w-xl mx-auto leading-relaxed mb-10">
              Forge is the deployment platform that gets out of your way. From push to live in under 30 seconds — every time.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              <Button size="lg" className="w-full sm:w-auto bg-violet-600 hover:bg-violet-500 text-white min-h-[44px] px-8 gap-2">
                Start for free <ArrowRightIcon />
              </Button>
              <Button size="lg" variant="outline" className="w-full sm:w-auto border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white min-h-[44px] px-8">
                View live demo
              </Button>
            </div>
            <p className="mt-4 text-xs text-slate-600">No credit card required · Free tier, always</p>
          </div>

          {/* Fake terminal */}
          <div className="relative mx-auto mt-16 max-w-2xl text-left">
            <div className="rounded-xl border border-white/8 bg-white/[0.03] overflow-hidden shadow-2xl shadow-violet-900/20">
              <div className="flex items-center gap-1.5 px-4 py-3 border-b border-white/6">
                <div className="h-3 w-3 rounded-full bg-red-500/60" />
                <div className="h-3 w-3 rounded-full bg-yellow-500/60" />
                <div className="h-3 w-3 rounded-full bg-green-500/60" />
                <span className="ml-3 text-xs text-slate-600 font-mono">forge deploy</span>
              </div>
              <div className="px-4 py-4 font-mono text-sm space-y-1.5">
                <p className="text-slate-500"><span className="text-slate-600">$</span> forge deploy --prod</p>
                <p className="text-slate-400">&nbsp; Building…&nbsp;&nbsp;<span className="text-cyan-400">✓</span> done <span className="text-slate-600">(2.3s)</span></p>
                <p className="text-slate-400">&nbsp; Uploading…&nbsp;<span className="text-cyan-400">✓</span> done <span className="text-slate-600">(4.1s)</span></p>
                <p className="text-slate-400">&nbsp; Propagating edge… <span className="text-cyan-400">✓</span> 42 regions</p>
                <p className="text-emerald-400 font-medium">&nbsp; Deployed to production in <span className="text-white font-bold">28s</span></p>
                <p className="text-slate-500">&nbsp; <span className="text-slate-600">→</span> https://myapp.forge.dev</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social proof */}
        <div className="border-y border-white/5 py-6 px-6">
          <div className="mx-auto max-w-4xl flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-sm text-slate-600">
            <span>Trusted by teams at</span>
            {["Stripe", "Vercel", "Linear", "Notion", "Figma", "Planetscale"].map(co => (
              <span key={co} className="text-slate-400 font-medium">{co}</span>
            ))}
          </div>
        </div>

        {/* Features */}
        <section id="features" className="py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-white/10 text-slate-400">Features</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">
                Everything your team needs
              </h2>
              <p className="text-slate-400 max-w-lg mx-auto">
                Built for developers who care about speed, reliability, and staying in flow.
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {features.map((f) => (
                <Card key={f.title} className="border-white/6 bg-white/[0.02] hover:bg-white/[0.04] hover:border-white/10 transition-all duration-200 hover:scale-[1.02]">
                  <CardHeader className="pb-3">
                    <div className={`w-10 h-10 rounded-xl ${f.bg} ${f.color} flex items-center justify-center mb-3`}>
                      {f.icon}
                    </div>
                    <CardTitle className="text-white text-base font-semibold">{f.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-400 leading-relaxed text-sm">{f.desc}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Metrics */}
        <section className="py-16 px-6 border-y border-white/5 bg-white/[0.01]">
          <div className="mx-auto max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "28s", label: "avg deploy time" },
              { value: "99.99%", label: "uptime SLA" },
              { value: "40+", label: "edge regions" },
              { value: "50K+", label: "teams shipping" },
            ].map((s) => (
              <div key={s.label}>
                <div className="text-3xl font-bold bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent mb-1">{s.value}</div>
                <div className="text-sm text-slate-500">{s.label}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Testimonials */}
        <section id="testimonials" className="py-24 px-6">
          <div className="mx-auto max-w-6xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-white/10 text-slate-400">Customers</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight">Teams love Forge</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {testimonials.map((t) => (
                <Card key={t.name} className="border-white/6 bg-white/[0.02] flex flex-col">
                  <CardContent className="pt-6 flex-1 flex flex-col">
                    <p className="text-slate-300 leading-relaxed text-sm flex-1 mb-6">"{t.quote}"</p>
                    <Separator className="bg-white/6 mb-4" />
                    <div className="flex items-center gap-3">
                      <div className="h-9 w-9 rounded-full bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center text-xs font-bold text-white flex-shrink-0">
                        {t.avatar}
                      </div>
                      <div>
                        <p className="text-sm font-medium text-white">{t.name}</p>
                        <p className="text-xs text-slate-500">{t.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing */}
        <section id="pricing" className="py-24 px-6 border-t border-white/5">
          <div className="mx-auto max-w-5xl">
            <div className="text-center mb-16">
              <Badge variant="outline" className="mb-4 border-white/10 text-slate-400">Pricing</Badge>
              <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Simple, transparent pricing</h2>
              <p className="text-slate-400">Start free. No surprises.</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 items-stretch">
              {plans.map((plan) => (
                <Card key={plan.name} className={`flex flex-col relative ${plan.highlighted ? "border-violet-500/40 bg-violet-500/5 ring-1 ring-violet-500/20" : "border-white/6 bg-white/[0.02]"}`}>
                  {plan.highlighted && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-violet-600 text-white border-0 text-xs px-3">Most popular</Badge>
                    </div>
                  )}
                  <CardHeader className="pb-4">
                    <p className="text-sm text-slate-400 font-medium">{plan.name}</p>
                    <div className="mt-2 flex items-baseline gap-1.5">
                      <span className="text-4xl font-bold text-white">{plan.price}</span>
                      <span className="text-slate-500 text-sm">{plan.period}</span>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-1 flex flex-col gap-6">
                    <ul className="space-y-2.5 flex-1">
                      {plan.features.map((f) => (
                        <li key={f} className="flex items-center gap-2 text-sm text-slate-300">
                          <span className="text-emerald-400 flex-shrink-0"><CheckIcon /></span>
                          {f}
                        </li>
                      ))}
                    </ul>
                    <Button
                      variant={plan.highlighted ? "default" : "outline"}
                      className={`w-full min-h-[44px] ${plan.highlighted ? "bg-violet-600 hover:bg-violet-500 text-white" : "border-white/10 bg-transparent text-slate-300 hover:bg-white/5 hover:text-white"}`}
                    >
                      {plan.cta}
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-24 px-6">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Ready to ship faster?</h2>
            <p className="text-slate-400 mb-8">Join 50,000+ teams already using Forge. Takes 2 minutes to set up.</p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-sm mx-auto">
              <Input
                type="email"
                placeholder="you@company.com"
                className="bg-white/[0.04] border-white/10 text-white placeholder:text-slate-600 focus-visible:ring-violet-500"
              />
              <Button className="bg-violet-600 hover:bg-violet-500 text-white flex-shrink-0 min-h-[44px]">
                Get started
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 px-6 py-10">
        <div className="mx-auto max-w-6xl flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="h-6 w-6 rounded-md bg-gradient-to-br from-violet-500 to-cyan-500 flex items-center justify-center">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="white" aria-hidden="true">
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
            <span className="text-white font-semibold text-sm">Forge</span>
          </div>
          <div className="flex items-center gap-6 text-sm text-slate-600">
            {["Privacy", "Terms", "Status", "Docs", "GitHub"].map(l => (
              <a key={l} href="#" className="hover:text-slate-400 transition-colors">{l}</a>
            ))}
          </div>
          <p className="text-slate-700 text-xs">© 2026 Forge · Built with shadcn/ui + UI/UX Pro Max</p>
        </div>
      </footer>
    </div>
  )
}
