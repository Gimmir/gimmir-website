'use client';

import { useState } from 'react';
import {
  Code2,
  ArrowRight,
  Bug,
  XCircle,
  Cpu,
  Smartphone,
  Layout,
  Globe2,
  Database,
  Cloud,
  Lock,
  ChevronRightSquare,
  FolderGit2,
  Shield,
  Zap,
  CreditCard,
  Fingerprint,
  Server,
  ActivitySquare,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export default function WebMobilePage() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'web'>('mobile');

  return (
    <div className="min-h-screen bg-[#020408] text-white">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] sm:w-[80%] h-[400px] sm:h-[600px] bg-[#0062d1] rounded-[100%] blur-[80px] sm:blur-[120px] opacity-[0.15]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-[#0062d1] rounded-full blur-[150px] opacity-[0.1] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
            <Code2 size={14} className="text-[#0062d1]" />
            <span className="text-xs font-mono text-slate-300 tracking-wider uppercase">
              Solution: Web & Mobile
            </span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.1] text-balance">
            Products Built to{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-cyan-400">
              Scale
            </span>
            , <br className="hidden md:block" />
            Not Just to Demo.
          </h1>
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12 text-balance">
            Native Mobile & Enterprise Web Engineering. We build assets that pass technical due
            diligence, avoiding the "rewrite trap" of cheap MVPs.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-full transition-all shadow-[0_0_30px_-5px_rgba(0,98,209,0.4)]">
              Consult on Architecture
            </button>
            <button className="px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all flex items-center gap-2 group">
              View Tech Stack{' '}
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      {/* 2. The Quality Gap */}
      <section className="relative py-24 px-6 bg-[#050810] border-t border-white/5 z-10">
        <div className="max-w-7xl mx-auto">
          <SectionHeader
            title="The Engineering Gap"
            subtitle="Why 60% of agency-built products fail technical due diligence."
            align="center"
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Card 1: AGENCY_LEGACY */}
            <div className="group bg-[#0B1229]/80 backdrop-blur-md border border-red-900/30 hover:border-red-500/50 rounded-xl p-0 overflow-hidden transition-all duration-300 flex flex-col h-full">
              <div className="bg-[#1A0B0B] px-6 py-4 border-b border-red-900/30 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-red-500/20 text-red-500">
                    <Bug size={18} />
                  </div>
                  <span className="font-bold text-sm tracking-wide text-white">AGENCY_LEGACY.exe</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">The &quot;Facade&quot; Approach</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  Optimized for demos, not production. Features look complete but lack error handling,
                  tests, and scalability logic.
                </p>
                <div className="mt-auto bg-[#080202] rounded border border-red-900/30 p-3 font-mono text-[10px] text-red-400">
                  <div className="flex justify-between mb-1">
                    <span>&gt; running audit...</span>
                    <span className="text-red-500 font-bold">
                      <XCircle size={12} className="inline mr-1" />
                      FAILED
                    </span>
                  </div>
                  <div className="opacity-70 ml-2 border-l border-red-900/50 pl-2 mt-2">
                    Error: 0% Test Coverage
                    <br />
                    Error: Hardcoded Secrets
                    <br />
                    Error: Spaghetti Architecture
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2: GIMMIR_CORE */}
            <div className="group bg-[#0B1229]/80 backdrop-blur-md border border-[#1E2945] hover:border-[#0062d1] rounded-xl p-0 overflow-hidden transition-all duration-300 flex flex-col h-full hover:shadow-[0_0_30px_rgba(0,98,209,0.15)]">
              <div className="bg-[#111A38] px-6 py-4 border-b border-[#1E2945] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded bg-[#0062d1] text-white">
                    <Cpu size={18} />
                  </div>
                  <span className="font-bold text-sm tracking-wide text-white">GIMMIR_CORE.sys</span>
                </div>
                <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
              </div>
              <div className="p-6 md:p-8 flex-grow flex flex-col">
                <h3 className="text-xl font-bold text-white mb-3">Production-Grade Engineering</h3>
                <p className="text-slate-400 text-sm leading-relaxed mb-6">
                  We build systems designed to handle 1M+ users from day one. Automated CI/CD, full
                  documentation, and modular code.
                </p>
                <div className="mt-auto bg-[#080C1B] rounded border border-[#1E2945] p-3 font-mono text-[10px] text-slate-400">
                  <div className="flex justify-between mb-1">
                    <span>&gt; running tests...</span>
                    <span className="text-green-400">√ PASSED (142/142)</span>
                  </div>
                  <div className="w-full bg-[#1E2945] h-1 rounded overflow-hidden mt-2">
                    <div className="bg-[#0062d1] w-full h-full"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech Stack Strategy */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 md:gap-0">
            <div>
              <h2 className="text-3xl font-bold text-white mb-2">Strategic Stack</h2>
              <p className="text-slate-400 text-sm">Selected for performance, not just popularity.</p>
            </div>

            <div className="flex bg-white/5 rounded-lg p-1 border border-white/10 mt-6 md:mt-0 w-full md:w-auto">
              <button
                onClick={() => setActiveTab('mobile')}
                className={`flex-1 md:flex-none px-4 py-2 rounded-md text-xs font-bold font-mono transition-all text-center ${
                  activeTab === 'mobile'
                    ? 'bg-[#0062d1] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                MOBILE_SYS
              </button>
              <button
                onClick={() => setActiveTab('web')}
                className={`flex-1 md:flex-none px-4 py-2 rounded-md text-xs font-bold font-mono transition-all text-center ${
                  activeTab === 'web'
                    ? 'bg-[#0062d1] text-white'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                WEB_SYS
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeTab === 'mobile' ? (
              <>
                {/* Native */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-emerald-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-colors">
                      <Smartphone size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_NATIVE</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Swift & Kotlin</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Direct hardware access (Bluetooth, AR, NFC). Zero-latency performance for heavy
                    computation.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-purple-400">class</span>{' '}
                    <span className="text-emerald-400">BankingCore</span> :{' '}
                    <span className="text-yellow-200">SecureModule</span> {'{'}
                    <br />
                    &nbsp;&nbsp;<span className="text-slate-600">// Native Hardware Access</span>
                    <br />
                    {'}'}
                  </div>
                </div>

                {/* Flutter */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-sky-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-sky-500 group-hover:bg-sky-500/10 transition-colors">
                      <Layout size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_CROSS</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Flutter</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Pixel-perfect rendering engine (Skia). 60fps smooth animations on all devices. Single
                    codebase.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-blue-400">Widget</span> build(
                    <span className="text-purple-400">Context</span> c) {'{'}
                    <br />
                    &nbsp;&nbsp;<span className="text-sky-300">return</span>{' '}
                    <span className="text-yellow-200">PixelPerfectUI()</span>;<br />
                    {'}'}
                  </div>
                </div>

                {/* React Native */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-blue-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-colors">
                      <Code2 size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_HYBRID</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">React Native</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Ideal for teams with existing JS/React infrastructure. Rapid iteration for SaaS
                    products.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-purple-400">import</span>{' '}
                    <span className="text-yellow-200">{'{'} View {'}'}</span>{' '}
                    <span className="text-purple-400">from</span>{' '}
                    <span className="text-green-400">&apos;react-native&apos;</span>;<br />
                    <span className="text-slate-600">// Shared Logic</span>
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Next.js */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-white/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <Globe2 size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_FRONT</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Next.js / React</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Server-side rendering for SEO. Edge computing ready. High performance SaaS frontends.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-purple-400">export</span>{' '}
                    <span className="text-blue-400">default</span>{' '}
                    <span className="text-purple-400">async</span> () =&gt; {'{'}
                    <br />
                    &nbsp;&nbsp;<span className="text-slate-600">// Server Component</span>
                    <br />
                    {'}'}
                  </div>
                </div>

                {/* Backend */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-yellow-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-yellow-500 group-hover:bg-yellow-500/10 transition-colors">
                      <Database size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_BACK</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Python / Node.js</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Asynchronous processing. AI/ML integration ready. Scalable microservices.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-purple-400">@app.get</span>(
                    <span className="text-green-400">&quot;/api&quot;</span>)<br />
                    <span className="text-purple-400">async def</span>{' '}
                    <span className="text-blue-300">root</span>():<br />
                    &nbsp;&nbsp;<span className="text-slate-600"># Fast execution</span>
                  </div>
                </div>

                {/* Cloud */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-cyan-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-cyan-500 group-hover:bg-cyan-500/10 transition-colors">
                      <Cloud size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_INFRA</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AWS / GCP</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Auto-scaling infrastructure. Multi-region deployments. 99.99% uptime SLA.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-yellow-200">terraform</span> apply<br />
                    &nbsp;&nbsp;<span className="text-green-400">✓</span> Infrastructure Ready
                    <br />
                    &nbsp;&nbsp;<span className="text-slate-600"># Production Grade</span>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 4. You Own The Repo Section */}
      <section className="relative py-24 px-6 bg-[#0B1221] border-t border-white/5 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Column */}
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8">
                <Shield size={12} className="text-[#0062d1]" />
                <span className="text-xs font-mono text-slate-300 tracking-wider uppercase">
                  NO HOSTAGE SITUATIONS
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
                You Own The Repo.
                <br />
                From Day One.
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed mb-8">
                We don&apos;t build on proprietary platforms. We build in your GitHub/GitLab
                organization. You hold the keys to the cloud accounts, app store listings, and source
                code at all times.
              </p>
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-slate-300">Full Admin Access</span>
                </div>
                <div className="flex items-center gap-3 text-sm">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                    <div className="w-2 h-2 rounded-full bg-emerald-500"></div>
                  </div>
                  <span className="text-slate-300">MIT / Proprietary License</span>
                </div>
              </div>
            </div>

            {/* Right Column - GitHub Repo Mock */}
            <div className="relative">
              <div className="bg-[#0D1B2A] border border-white/10 rounded-xl overflow-hidden shadow-2xl">
                {/* Header */}
                <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between bg-[#0A1525]">
                  <div className="flex items-center gap-2">
                    <FolderGit2 size={16} className="text-slate-400" />
                    <span className="text-sm font-mono text-white">
                      gimmir / your-project-name
                    </span>
                  </div>
                  <span className="px-2 py-1 text-[10px] font-mono text-slate-400 bg-white/5 rounded border border-white/10">
                    Public
                  </span>
                </div>

                {/* File List */}
                <div className="p-4 space-y-2 font-mono text-sm">
                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-[#0062d1]/20 flex items-center justify-center">
                        <div className="w-2 h-2 rounded-sm bg-[#0062d1]"></div>
                      </div>
                      <span className="text-slate-300">src</span>
                    </div>
                    <span className="text-slate-500 text-xs">Initial commit</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-white/5 flex items-center justify-center">
                        <div className="w-2 h-2 bg-slate-500 rounded-sm"></div>
                      </div>
                      <span className="text-slate-300">README.md</span>
                    </div>
                    <span className="text-slate-500 text-xs">Update documentation</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-yellow-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-yellow-500 rounded-sm"></div>
                      </div>
                      <span className="text-slate-300">terraform.tf</span>
                    </div>
                    <span className="text-slate-500 text-xs">Add AWS infrastructure</span>
                  </div>

                  <div className="flex items-center justify-between p-3 rounded-lg bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded bg-emerald-500/20 flex items-center justify-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-sm"></div>
                      </div>
                      <span className="text-slate-300">license.txt</span>
                    </div>
                    <span className="text-slate-500 text-xs">Transfer IP to Client</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Advanced Capabilities Section */}
      <section className="relative py-24 px-6 z-10">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Advanced Capabilities</h2>
            <p className="text-slate-400 text-lg">Production-grade features, standard.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Row 1 */}
            <div className="bg-[#0A1525] border border-white/10 rounded-xl p-6 hover:border-[#0062d1]/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-slate-400">
                <Zap size={20} />
              </div>
              <h3 className="text-white font-bold mb-2">Offline Mode</h3>
              <p className="text-slate-500 text-xs font-mono">Local-first sync</p>
            </div>

            <div className="bg-[#0A1525] border border-white/10 rounded-xl p-6 hover:border-[#0062d1]/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-slate-400">
                <Zap size={20} />
              </div>
              <h3 className="text-white font-bold mb-2">Real-time</h3>
              <p className="text-slate-500 text-xs font-mono">WebSockets</p>
            </div>

            <div className="bg-[#0A1525] border border-white/10 rounded-xl p-6 hover:border-[#0062d1]/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-slate-400">
                <CreditCard size={20} />
              </div>
              <h3 className="text-white font-bold mb-2">Payments</h3>
              <p className="text-slate-500 text-xs font-mono">Stripe / Adyen</p>
            </div>

            <div className="bg-[#0A1525] border border-white/10 rounded-xl p-6 hover:border-[#0062d1]/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-slate-400">
                <Fingerprint size={20} />
              </div>
              <h3 className="text-white font-bold mb-2">Biometrics</h3>
              <p className="text-slate-500 text-xs font-mono">FaceID / TouchID</p>
            </div>

            {/* Row 2 */}
            <div className="bg-[#0A1525] border border-white/10 rounded-xl p-6 hover:border-[#0062d1]/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-slate-400">
                <Shield size={20} />
              </div>
              <h3 className="text-white font-bold mb-2">Encryption</h3>
              <p className="text-slate-500 text-xs font-mono">AES-256 Data</p>
            </div>

            <div className="bg-[#0A1525] border border-white/10 rounded-xl p-6 hover:border-[#0062d1]/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-slate-400">
                <Globe2 size={20} />
              </div>
              <h3 className="text-white font-bold mb-2">Localization</h3>
              <p className="text-slate-500 text-xs font-mono">i18n Ready</p>
            </div>

            <div className="bg-[#0A1525] border border-white/10 rounded-xl p-6 hover:border-[#0062d1]/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-slate-400">
                <ActivitySquare size={20} />
              </div>
              <h3 className="text-white font-bold mb-2">Analytics</h3>
              <p className="text-slate-500 text-xs font-mono">Custom Events</p>
            </div>

            <div className="bg-[#0A1525] border border-white/10 rounded-xl p-6 hover:border-[#0062d1]/50 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center mb-4 text-slate-400">
                <Server size={20} />
              </div>
              <h3 className="text-white font-bold mb-2">Serverless</h3>
              <p className="text-slate-500 text-xs font-mono">Auto-scaling</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section - Enhanced Terminal Style */}
      <section className="relative py-24 px-6 bg-[#050810] border-t border-white/5 z-10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0062d1]/5 blur-[100px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          {/* Terminal Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-3 mb-4 px-4 py-2 bg-white/5 border border-white/10 rounded-lg">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              <span className="text-xs font-mono text-slate-500">terminal — FAQ</span>
            </div>
            <div className="font-mono">
              <span className="text-slate-600 text-xl mr-2">&gt;</span>
              <span className="text-white text-2xl md:text-4xl font-bold">FAQ</span>
              <span className="text-[#0062d1] text-2xl md:text-4xl font-bold ml-3">--verbose</span>
              <span className="text-emerald-400 ml-4 text-sm animate-pulse">█</span>
            </div>
          </div>

          {/* FAQ Items with Enhanced Terminal Style */}
          <div className="space-y-8">
            {/* Question 1 */}
            <div className="group">
              <div className="bg-[#0B0F19] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#0062d1]/50 hover:shadow-[0_0_30px_rgba(0,98,209,0.1)]">
                <div className="bg-white/5 px-5 py-3 border-b border-white/10 flex items-center gap-3">
                  <span className="text-[#0062d1] font-mono text-sm font-bold">$</span>
                  <span className="text-white font-mono text-sm md:text-base font-medium">
                    query --topic=&quot;Flutter vs Native&quot;
                  </span>
                  <span className="ml-auto text-[10px] font-mono text-slate-600 bg-white/5 px-2 py-0.5 rounded">
                    ANSWERED
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-slate-500 font-mono text-xs">&gt;&gt; Question:</span>
                    <p className="text-slate-300 mt-1 font-medium">
                      Why use Flutter instead of Native Swift/Kotlin?
                    </p>
                  </div>
                  <div className="pl-4 border-l-2 border-[#0062d1]/30 group-hover:border-[#0062d1] transition-colors">
                    <span className="text-emerald-400 font-mono text-xs block mb-2">
                      &lt;response status=&quot;200&quot;&gt;
                    </span>
                    <p className="text-slate-400 leading-relaxed text-sm mb-3">
                      <strong className="text-white">Optimization vector.</strong> Flutter delivers 95% of native performance 
                      for 60% of the budget. Single codebase = faster iteration cycles and consistent UX across platforms.
                    </p>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      <strong className="text-white">When to use Native:</strong> Hardware-intensive features only 
                      (AR/VR, advanced Bluetooth LE, custom camera processing). For 90% of apps, Flutter is the optimal choice.
                    </p>
                    <span className="text-emerald-400 font-mono text-xs block mt-2">
                      &lt;/response&gt;
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 2 */}
            <div className="group">
              <div className="bg-[#0B0F19] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#0062d1]/50 hover:shadow-[0_0_30px_rgba(0,98,209,0.1)]">
                <div className="bg-white/5 px-5 py-3 border-b border-white/10 flex items-center gap-3">
                  <span className="text-[#0062d1] font-mono text-sm font-bold">$</span>
                  <span className="text-white font-mono text-sm md:text-base font-medium">
                    query --topic=&quot;App Store Risks&quot;
                  </span>
                  <span className="ml-auto text-[10px] font-mono text-slate-600 bg-white/5 px-2 py-0.5 rounded">
                    ANSWERED
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-slate-500 font-mono text-xs">&gt;&gt; Question:</span>
                    <p className="text-slate-300 mt-1 font-medium">
                      How do you mitigate App Store rejection risks?
                    </p>
                  </div>
                  <div className="pl-4 border-l-2 border-[#0062d1]/30 group-hover:border-[#0062d1] transition-colors">
                    <span className="text-emerald-400 font-mono text-xs block mb-2">
                      &lt;response status=&quot;200&quot;&gt;
                    </span>
                    <p className="text-slate-400 leading-relaxed text-sm mb-3">
                      <strong className="text-white">Pre-validation protocol.</strong> We audit against Apple HIG (Human Interface Guidelines) 
                      and Google Play Policy during the design phase—before a single line of code is written.
                    </p>
                    <div className="bg-[#020408] border border-white/5 rounded-lg p-3 my-3 font-mono text-xs">
                      <div className="text-slate-500 mb-1">// Track Record:</div>
                      <div className="text-emerald-400">✓ 47/47 apps approved (first submission)</div>
                      <div className="text-slate-500 mt-1">✓ Zero rejections for policy violations</div>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      Common risks we eliminate: Unclear privacy policies, missing data handling disclosures, 
                      incomplete metadata, guideline 4.3 (spam) violations.
                    </p>
                    <span className="text-emerald-400 font-mono text-xs block mt-2">
                      &lt;/response&gt;
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Question 3 */}
            <div className="group">
              <div className="bg-[#0B0F19] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#0062d1]/50 hover:shadow-[0_0_30px_rgba(0,98,209,0.1)]">
                <div className="bg-white/5 px-5 py-3 border-b border-white/10 flex items-center gap-3">
                  <span className="text-[#0062d1] font-mono text-sm font-bold">$</span>
                  <span className="text-white font-mono text-sm md:text-base font-medium">
                    query --topic=&quot;Knowledge Transfer&quot;
                  </span>
                  <span className="ml-auto text-[10px] font-mono text-slate-600 bg-white/5 px-2 py-0.5 rounded">
                    ANSWERED
                  </span>
                </div>
                <div className="p-6">
                  <div className="mb-4">
                    <span className="text-slate-500 font-mono text-xs">&gt;&gt; Question:</span>
                    <p className="text-slate-300 mt-1 font-medium">
                      What does your handoff process look like?
                    </p>
                  </div>
                  <div className="pl-4 border-l-2 border-[#0062d1]/30 group-hover:border-[#0062d1] transition-colors">
                    <span className="text-emerald-400 font-mono text-xs block mb-2">
                      &lt;response status=&quot;200&quot;&gt;
                    </span>
                    <p className="text-slate-400 leading-relaxed text-sm mb-3">
                      <strong className="text-white">No &quot;zip file&quot; drops.</strong> We execute a structured 2-week 
                      pair-programming transition with your internal team or new vendor.
                    </p>
                    <div className="space-y-2 my-3">
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded bg-[#0062d1]/10 border border-[#0062d1]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#0062d1] font-mono text-xs font-bold">1</span>
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">Architecture Walkthrough</div>
                          <div className="text-slate-500 text-xs">System diagrams, API flows, database schemas</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded bg-[#0062d1]/10 border border-[#0062d1]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#0062d1] font-mono text-xs font-bold">2</span>
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">Live Code Sessions</div>
                          <div className="text-slate-500 text-xs">Debugging, deployment, monitoring</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded bg-[#0062d1]/10 border border-[#0062d1]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <span className="text-[#0062d1] font-mono text-xs font-bold">3</span>
                        </div>
                        <div>
                          <div className="text-white text-sm font-medium">90-Day Support Window</div>
                          <div className="text-slate-500 text-xs">Post-handoff Slack channel access</div>
                        </div>
                      </div>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-sm">
                      You receive full documentation, runbooks, and a recorded video library covering every system component.
                    </p>
                    <span className="text-emerald-400 font-mono text-xs block mt-2">
                      &lt;/response&gt;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-slate-500 font-mono text-xs">
              <span className="text-emerald-400">●</span>
              <span>3/3 queries executed successfully</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="relative py-16 md:py-24 px-6 overflow-hidden border-t border-white/5 z-10">
        {/* Gradient and Noise Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a1435_0%,_#020408_100%)]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay pointer-events-none"></div>

        {/* Subtle Circuit/Network Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Pre-headline Tag */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 mb-8">
            <Code2 size={14} className="text-[#0062d1]" />
            <span className="text-xs font-mono text-slate-300 tracking-wider uppercase">
              FINAL_CHECKPOINT
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight drop-shadow-xl">
            Ready to Build an Asset, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-cyan-400">
              Not a Liability?
            </span>
          </h2>
          <p className="text-lg text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Stop guessing. Get a precise engineering roadmap that guarantees scalability and IP ownership
            from the first commit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            {/* High-Contrast Primary Button */}
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-xl transition-all shadow-[0_0_40px_-10px_rgba(0,98,209,0.5)] hover:shadow-[0_0_50px_-10px_rgba(0,98,209,0.7)] hover:scale-105 active:scale-95 flex flex-col items-center gap-1 group">
              <div className="flex items-center gap-2">
                <span>Simulate Project Cost & Risk</span>
                <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="text-[10px] opacity-80 font-mono font-normal uppercase tracking-wider">
                GET RANGE IN 2 MINS
              </span>
            </button>

            {/* Secondary Outline Button */}
            <button className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 hover:bg-white/10 text-white font-bold rounded-xl transition-all hover:border-white/40 active:scale-95 flex flex-col items-center gap-1 group">
              <div className="flex items-center gap-2">
                <span>Book Architecture Review</span>
                <ChevronRightSquare
                  size={18}
                  className="text-slate-400 group-hover:text-white transition-colors"
                />
              </div>
              <span className="text-[10px] text-slate-400 group-hover:text-slate-300 transition-colors font-mono font-normal uppercase tracking-wider">
                SPEAK WITH LEAD ENGINEER
              </span>
            </button>
          </div>

          {/* Trust Footer */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-2 text-xs text-slate-500 font-mono bg-white/5 border border-white/10 px-4 py-2 rounded-2xl sm:rounded-full text-center">
            <div className="flex items-center gap-2">
              <Lock size={12} className="text-emerald-500 shrink-0" />
              <span>All discussions are covered by our standard NDA.</span>
            </div>
            <span>Your idea remains yours.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
