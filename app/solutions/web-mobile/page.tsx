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
  GitBranch,
  Eye,
  Star,
  Check,
  Folder,
  FileText,
  FileCode,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export default function WebMobilePage() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'web'>('mobile');

  return (
    <div className="min-h-screen bg-[#020408] text-white selection:bg-[#0062d1] selection:text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[100%] h-[600px] bg-[#0062d1] rounded-[100%] blur-[120px] opacity-[0.12] animate-pulse-slow"></div>
        <div className="absolute bottom-0 right-0 w-[800px] h-[600px] bg-purple-900/20 rounded-full blur-[120px] opacity-20"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.07] mix-blend-overlay"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-20 pb-32 px-4 text-center max-w-7xl mx-auto w-full overflow-hidden">
        
        {/* Floating Elements for depth */}
        <div className="absolute top-1/4 left-10 w-24 h-24 bg-blue-500/10 rounded-full blur-2xl animate-pulse delay-700"></div>
        <div className="absolute bottom-1/4 right-10 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl animate-pulse delay-1000"></div>

        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0B0F19] border border-white/10 backdrop-blur-md mb-8 shadow-xl shadow-blue-900/5 animate-fade-in-up hover:border-blue-500/30 transition-colors cursor-default">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0062d1] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0062d1]"></span>
          </span>
          <span className="text-xs font-mono font-medium tracking-wider uppercase text-slate-300">
            <span className="text-[#0062d1]">sys_status:</span> operational
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-8 leading-[1.1] drop-shadow-2xl max-w-5xl">
          Build for <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4da6ff] via-[#0062d1] to-[#4da6ff] animate-gradient bg-[length:200%_auto]">Scale</span>.
          <br />
          <span className="text-slate-500 text-3xl sm:text-5xl md:text-6xl font-semibold tracking-normal block mt-2">
            Not just for the demo.
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg sm:text-xl text-slate-400 max-w-2xl mb-12 font-light leading-relaxed mx-auto px-4">
          We engineer high-performance mobile & web applications with transparent architecture and full IP ownership. No black boxes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center mb-20">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-xl shadow-[0_0_20px_-5px_rgba(0,98,209,0.5)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group">
            <Code2 size={20} className="group-hover:rotate-12 transition-transform" />
            <span>Start Engineering</span>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0B0F19] hover:bg-[#161B22] border border-white/10 text-slate-300 font-medium rounded-xl transition-all active:scale-95 flex items-center justify-center gap-3 group hover:border-white/20">
            <Layout size={20} className="text-[#0062d1] group-hover:text-white transition-colors" />
            <span>View Architecture</span>
          </button>
        </div>

      </section>

      {/* 2. The Quality Gap Section */}
      <section className="relative z-20 py-16 sm:py-24 px-4 sm:px-6 border-t border-white/5">
        <div className="absolute inset-0 bg-[#060910]">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-3xl h-[400px] bg-[#0062d1] opacity-[0.08] blur-[100px] rounded-full"></div>
          <div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          <SectionHeader
            title="The Quality Gap"
            subtitle="Most agencies optimize for the demo. We optimize for the IPO."
            badge="Market Analysis"
            badgeIcon={ActivitySquare}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 relative z-10">
            {/* Card 1: Agency Legacy */}
            <div className="group relative flex flex-col h-full bg-[#0B0F19]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-red-500/40 transition-all duration-300 hover:shadow-2xl hover:shadow-red-900/10">
              <div className="p-6 sm:p-8 sm:pb-6 relative flex-grow">
                <div className="absolute top-4 right-4 text-slate-700 font-bold text-5xl sm:text-6xl opacity-10 group-hover:opacity-20 transition-opacity select-none">404</div>
                <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
                  <Bug className="text-red-400" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">The "Facade" Approach</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Optimized for demos, not production. Features look complete but lack error handling, tests, and scalability logic.</p>

                <div className="mt-6 p-3 bg-[#020408] rounded border border-white/5 font-mono text-[10px] text-red-400/80">
                  <div className="flex items-center gap-2 mb-1">
                    <XCircle size={10} /> <span>Error: 0% Test Coverage</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <XCircle size={10} /> <span>Error: Hardcoded Secrets</span>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-0 shrink-0"></div>
              <div className="px-6 py-5 sm:px-8 sm:py-6 bg-white/[0.02] group-hover:bg-red-500/[0.05] transition-colors shrink-0">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full border border-red-500/50 flex items-center justify-center mt-0.5 text-red-500 text-[10px]">!</div>
                  <div><h4 className="text-white font-medium text-sm mb-1">Technical Debt</h4><p className="text-slate-500 text-xs">Requires complete rewrite after Series A.</p></div>
                </div>
              </div>
            </div>

            {/* Card 2: Gimmir Core */}
            <div className="group relative flex flex-col h-full bg-[#0B0F19]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-[#0062d1]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10">
              <div className="p-6 sm:p-8 sm:pb-6 relative flex-grow">
                <div className="absolute top-4 right-4 text-slate-700 font-bold text-5xl sm:text-6xl opacity-10 group-hover:opacity-20 transition-opacity select-none">200</div>
                <div className="w-10 h-10 rounded-lg bg-[#0062d1]/10 flex items-center justify-center mb-4 border border-[#0062d1]/20 group-hover:bg-[#0062d1]/20 transition-colors">
                  <Cpu className="text-[#0062d1]" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-white mb-2">Production-Grade Engineering</h3>
                <p className="text-slate-400 text-sm leading-relaxed">We build systems designed to handle 1M+ users from day one. Automated CI/CD, full documentation, and modular code.</p>

                <div className="mt-6 p-3 bg-[#020408] rounded border border-white/5 font-mono text-[10px] text-emerald-400">
                  <div className="flex justify-between mb-1">
                    <span>&gt; running tests...</span>
                    <span className="font-bold">PASSED (142/142)</span>
                  </div>
                  <div className="w-full h-1 bg-white/10 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-full animate-progress-loading"></div>
                  </div>
                </div>
              </div>
              <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-0 shrink-0"></div>
              <div className="px-6 py-5 sm:px-8 sm:py-6 bg-white/[0.02] group-hover:bg-[#0062d1]/[0.05] transition-colors shrink-0">
                <div className="flex items-start gap-3">
                  <div className="w-4 h-4 rounded-full border border-emerald-500/50 flex items-center justify-center mt-0.5 text-emerald-500 text-[10px]">✓</div>
                  <div><h4 className="text-white font-medium text-sm mb-1">Investment Ready</h4><p className="text-slate-500 text-xs">Passes technical due diligence instantly.</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Tech Stack Strategy Section */}
      <section className="relative z-20 py-24 px-6 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0A1435] to-[#020408]"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="mb-20 text-center">
            <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-400 mb-6 tracking-wide">// SYSTEM_ARCHITECTURE</div>
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Tech Stack <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Strategy</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">Native performance or strategic cross-platform. We help you avoid dependency hell.</p>

            {/* Tabs */}
            <div className="flex justify-center mt-8">
              <div className="inline-flex bg-white/5 p-1 rounded-xl border border-white/10 backdrop-blur-sm">
                <button
                  onClick={() => setActiveTab('mobile')}
                  className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'mobile'
                    ? 'bg-[#0062d1] text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  Mobile Solutions
                </button>
                <button
                  onClick={() => setActiveTab('web')}
                  className={`px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300 ${activeTab === 'web'
                    ? 'bg-[#0062d1] text-white shadow-lg'
                    : 'text-slate-400 hover:text-white hover:bg-white/5'
                    }`}
                >
                  Web Platforms
                </button>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {activeTab === 'mobile' ? (
              <>
                {/* React Native Card */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-[#0062d1]/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#0062d1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-[#0062d1] group-hover:bg-[#0062d1]/10 transition-colors">
                      <Smartphone size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_NATIVE</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">React Native</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    95% code sharing between iOS and Android. The standard for modern startups.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-blue-400">&lt;View</span> <span className="text-sky-300">style</span>=<span className="text-yellow-200">{'{'}styles.container{'}'}</span><span className="text-blue-400">&gt;</span><br />
                    &nbsp;&nbsp;<span className="text-slate-600">// Native Performance</span><br />
                    <span className="text-blue-400">&lt;/View&gt;</span>
                  </div>
                </div>

                {/* Flutter Card */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-sky-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-sky-500 group-hover:bg-sky-500/10 transition-colors">
                      <Zap size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_NATIVE</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Flutter</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Pixel-perfect rendering on all devices. Best for complex, custom UI designs.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-purple-400">return</span> <span className="text-yellow-200">Container</span>(<br />
                    &nbsp;&nbsp;<span className="text-sky-300">child:</span> <span className="text-yellow-200">CustomPaint</span>(),<br />
                    );
                  </div>
                </div>

                {/* Native iOS/Android Card */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-emerald-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-colors">
                      <Cpu size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_CORE</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Native Swift/Kotlin</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    For hardware-intensive apps (AR, Bluetooth, Crypto). Maximum performance.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-purple-400">func</span> <span className="text-blue-300">optimize</span>() {'{'}<br />
                    &nbsp;&nbsp;<span className="text-yellow-200">Metal</span>.<span className="text-blue-300">render</span>(texture)<br />
                    {'}'}
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Next.js Card */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-white/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-white group-hover:bg-white/10 transition-colors">
                      <Globe2 size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_WEB</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Next.js (React)</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Server-side rendering for SEO and speed. The enterprise standard for web.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-purple-400">export default</span> <span className="text-purple-400">async</span> <span className="text-purple-400">function</span> <span className="text-blue-300">Page</span>() {'{'}<br />
                    &nbsp;&nbsp;<span className="text-purple-400">await</span> <span className="text-blue-300">getData</span>();<br />
                    {'}'}
                  </div>
                </div>

                {/* Node.js Card */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-green-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-green-500 group-hover:bg-green-500/10 transition-colors">
                      <Server size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_API</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">Node.js / Python</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Scalable microservices. We build APIs that don't break under load.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-purple-400">app</span>.<span className="text-blue-300">post</span>(<span className="text-green-400">'/api'</span>, (req) <span className="text-purple-400">=&gt;</span> {'{'}<br />
                    &nbsp;&nbsp;<span className="text-slate-600">// Secure & Fast</span><br />
                    {'}'});
                  </div>
                </div>

                {/* Cloud Card */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-orange-500/50 transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                  <div className="flex items-start justify-between mb-6">
                    <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-orange-500 group-hover:bg-orange-500/10 transition-colors">
                      <Cloud size={24} />
                    </div>
                    <span className="text-[10px] font-mono text-slate-600">LAYER_OPS</span>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">AWS / Google Cloud</h3>
                  <p className="text-slate-400 text-sm leading-relaxed mb-8">
                    Auto-scaling infrastructure. Pay only for what you use.
                  </p>
                  <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                    <span className="text-purple-400">resource</span> <span className="text-green-400">"aws_instance"</span> {'{'}<br />
                    &nbsp;&nbsp;<span className="text-sky-300">ami</span> = <span className="text-green-400">"ami-123"</span><br />
                    {'}'}
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 4. You Own The Repo Section */}
      <section className="relative z-20 py-24 px-6 overflow-hidden bg-[#0A1435]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-[#050B20] to-[#0A1435]"></div>
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020408] to-transparent pointer-events-none"></div>
        <div className="absolute inset-0 opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-cover pointer-events-none mix-blend-overlay"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader
            title={<span>You Own The <span className="text-[#0062d1]">Repo</span></span>}
            subtitle="No vendor lock-in. No obfuscated code. You get full admin access to the GitHub repository from Day 1."
            badge="Transparency Protocol"
            badgeIcon={GitBranch}
          />

          <div className="mt-12 relative max-w-5xl mx-auto">
            {/* GitHub Mockup */}
            <div className="bg-[#0D1117] rounded-xl border border-white/10 overflow-hidden shadow-2xl">
              {/* Repo Header */}
              <div className="bg-[#161B22] border-b border-white/10 px-4 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-slate-700 flex items-center justify-center text-[10px]">G</div>
                  <span className="font-semibold">gimmir-llc</span>
                  <span className="text-slate-500">/</span>
                  <span className="font-bold text-white">project-core</span>
                  <span className="px-2 py-0.5 rounded-full border border-white/10 text-xs text-slate-400 ml-2">Public</span>
                </div>
                <div className="flex gap-2">
                  <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-[#21262D] border border-white/10 text-xs text-slate-300">
                    <Eye size={14} /> Watch <span className="bg-slate-700 px-1.5 rounded-full text-[10px] ml-1">12</span>
                  </div>
                  <div className="flex items-center gap-1 px-3 py-1 rounded-md bg-[#21262D] border border-white/10 text-xs text-slate-300">
                    <Star size={14} /> Star <span className="bg-slate-700 px-1.5 rounded-full text-[10px] ml-1">48</span>
                  </div>
                </div>
              </div>

              {/* Repo Content */}
              <div className="p-0 md:p-0">
                {/* File List Header */}
                <div className="bg-[#161B22] px-4 py-3 border-b border-white/10 flex items-center justify-between text-xs text-slate-400">
                  <div className="flex items-center gap-2">
                    <div className="w-5 h-5 rounded-full bg-green-500/20 flex items-center justify-center"><Check size={12} className="text-green-400" /></div>
                    <span className="text-white font-medium">feat: initial production release</span>
                  </div>
                  <div className="font-mono">7h ago</div>
                </div>

                {/* Files */}
                <div className="divide-y divide-white/5">
                  {[
                    { name: '.github/workflows', msg: 'ci: add deployment pipeline', time: '2d ago', icon: FolderGit2, color: 'text-blue-400' },
                    { name: 'src', msg: 'feat: implement auth flow', time: '4h ago', icon: Folder, color: 'text-blue-400' },
                    { name: 'tests', msg: 'test: add integration tests', time: '4h ago', icon: Folder, color: 'text-blue-400' },
                    { name: '.env.example', msg: 'chore: update env vars', time: '1d ago', icon: FileText, color: 'text-slate-400' },
                    { name: 'docker-compose.yml', msg: 'ops: add redis service', time: '3d ago', icon: FileCode, color: 'text-slate-400' },
                    { name: 'README.md', msg: 'docs: update setup guide', time: '1w ago', icon: FileText, color: 'text-slate-400' },
                  ].map((file, i) => (
                    <div key={i} className="px-4 py-2.5 flex items-center justify-between hover:bg-white/[0.02] group transition-colors cursor-default">
                      <div className="flex items-center gap-3 w-1/3">
                        <file.icon size={16} className={file.color} />
                        <span className="text-sm text-slate-300 group-hover:text-blue-400 transition-colors">{file.name}</span>
                      </div>
                      <div className="flex-1 text-xs text-slate-500 truncate hidden sm:block">{file.msg}</div>
                      <div className="text-xs text-slate-600 w-16 text-right">{file.time}</div>
                    </div>
                  ))}
                </div>

                {/* Readme Preview */}
                <div className="p-6 border-t border-white/10 bg-[#0D1117]">
                  <div className="border border-white/10 rounded-lg p-6 bg-[#0D1117]">
                    <h3 className="text-xl font-bold text-white mb-4 border-b border-white/10 pb-2">README.md</h3>
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <div className="px-2 py-1 bg-green-500/10 border border-green-500/20 rounded text-xs text-green-400 font-mono">build: passing</div>
                        <div className="px-2 py-1 bg-blue-500/10 border border-blue-500/20 rounded text-xs text-blue-400 font-mono">coverage: 98%</div>
                      </div>
                      <p className="text-slate-400 text-sm leading-relaxed">
                        This repository contains the production-ready source code for the platform.
                        It includes a fully automated CI/CD pipeline, comprehensive test suite, and
                        infrastructure-as-code definitions.
                      </p>
                      <h4 className="text-white font-bold text-sm mt-4 mb-2">Getting Started</h4>
                      <div className="bg-[#161B22] p-3 rounded-md font-mono text-xs text-slate-300 border border-white/5">
                        git clone https://github.com/gimmir-llc/project-core.git<br />
                        cd project-core<br />
                        npm install<br />
                        npm run dev
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Advanced Capabilities Section */}
      <section className="relative z-20 py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Advanced <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">Capabilities</span></h2>
            <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">Production-grade features, standard. We don't charge extra for security.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Row 1 */}
            <div className="group bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-[#0062d1]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:text-[#0062d1] group-hover:bg-[#0062d1]/10 transition-colors">
                <Zap size={24} />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Offline Mode</h3>
              <p className="text-slate-500 text-sm font-mono">Local-first sync engine</p>
            </div>

            <div className="group bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-[#0062d1]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:text-[#0062d1] group-hover:bg-[#0062d1]/10 transition-colors">
                <ActivitySquare size={24} />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Real-time</h3>
              <p className="text-slate-500 text-sm font-mono">WebSockets & PubSub</p>
            </div>

            <div className="group bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-[#0062d1]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:text-[#0062d1] group-hover:bg-[#0062d1]/10 transition-colors">
                <CreditCard size={24} />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Payments</h3>
              <p className="text-slate-500 text-sm font-mono">Stripe / Adyen Integration</p>
            </div>

            <div className="group bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-[#0062d1]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:text-[#0062d1] group-hover:bg-[#0062d1]/10 transition-colors">
                <Fingerprint size={24} />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Biometrics</h3>
              <p className="text-slate-500 text-sm font-mono">FaceID / TouchID Auth</p>
            </div>

            {/* Row 2 */}
            <div className="group bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-[#0062d1]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:text-[#0062d1] group-hover:bg-[#0062d1]/10 transition-colors">
                <Shield size={24} />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Encryption</h3>
              <p className="text-slate-500 text-sm font-mono">AES-256 Data Protection</p>
            </div>

            <div className="group bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-[#0062d1]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:text-[#0062d1] group-hover:bg-[#0062d1]/10 transition-colors">
                <Globe2 size={24} />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Localization</h3>
              <p className="text-slate-500 text-sm font-mono">i18n Multi-language</p>
            </div>

            <div className="group bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-[#0062d1]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:text-[#0062d1] group-hover:bg-[#0062d1]/10 transition-colors">
                <Server size={24} />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Auto-Scaling</h3>
              <p className="text-slate-500 text-sm font-mono">Kubernetes / Serverless</p>
            </div>

            <div className="group bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:bg-white/[0.02] hover:border-[#0062d1]/50 transition-all duration-300">
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:text-[#0062d1] group-hover:bg-[#0062d1]/10 transition-colors">
                <Lock size={24} />
              </div>
              <h3 className="text-white font-bold mb-2 text-lg">Compliance</h3>
              <p className="text-slate-500 text-sm font-mono">GDPR / HIPAA Ready</p>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section - Enhanced Terminal Style */}
      <section className="relative py-32 px-6 bg-[#050810] border-t border-white/5 z-10 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:32px_32px]"></div>
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-[#0062d1]/5 blur-[100px] rounded-full pointer-events-none"></div>

        <div className="max-w-4xl mx-auto relative z-10">
          {/* Terminal Header */}
          <div className="mb-16">
            <div className="inline-flex items-center gap-3 mb-6 px-4 py-2 bg-white/5 border border-white/10 rounded-lg backdrop-blur-sm">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-500/80 shadow-[0_0_8px_rgba(239,68,68,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80 shadow-[0_0_8px_rgba(234,179,8,0.5)]"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80 shadow-[0_0_8px_rgba(34,197,94,0.5)]"></div>
              </div>
              <span className="text-xs font-mono text-slate-500">terminal — FAQ</span>
            </div>
            <div className="font-mono">
              <span className="text-slate-600 text-xl mr-2">&gt;</span>
              <span className="text-white text-3xl md:text-5xl font-bold">FAQ</span>
              <span className="text-[#0062d1] text-3xl md:text-5xl font-bold ml-3">--verbose</span>
              <span className="text-emerald-400 ml-4 text-3xl md:text-5xl animate-pulse">_</span>
            </div>
          </div>

          {/* FAQ Items with Enhanced Terminal Style */}
          <div className="space-y-6">
            {/* Question 1 */}
            <div className="group">
              <div className="bg-[#0B0F19] border border-white/10 rounded-xl overflow-hidden transition-all duration-300 hover:border-[#0062d1]/50 hover:shadow-[0_0_30px_rgba(0,98,209,0.1)]">
                <div className="bg-white/5 px-5 py-3 border-b border-white/10 flex items-center gap-3">
                  <span className="text-[#0062d1] font-mono text-sm font-bold">$</span>
                  <span className="text-white font-mono text-sm md:text-base font-medium">
                    query --topic=&quot;Flutter vs Native&quot;
                  </span>
                  <span className="ml-auto text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    200 OK
                  </span>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-slate-500 font-mono text-xs block mb-2">// User Question:</span>
                    <p className="text-slate-200 text-lg font-medium">
                      Why use Flutter instead of Native Swift/Kotlin?
                    </p>
                  </div>
                  <div className="pl-4 border-l-2 border-[#0062d1]/30 group-hover:border-[#0062d1] transition-colors">
                    <span className="text-emerald-400 font-mono text-xs block mb-3">
                      &lt;response&gt;
                    </span>
                    <p className="text-slate-400 leading-relaxed text-base mb-4">
                      <strong className="text-white">Optimization vector.</strong> Flutter delivers 95% of native performance
                      for 60% of the budget. Single codebase = faster iteration cycles and consistent UX across platforms.
                    </p>
                    <p className="text-slate-400 leading-relaxed text-base">
                      <strong className="text-white">When to use Native:</strong> Hardware-intensive features only
                      (AR/VR, advanced Bluetooth LE, custom camera processing). For 90% of apps, Flutter is the optimal choice.
                    </p>
                    <span className="text-emerald-400 font-mono text-xs block mt-3">
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
                  <span className="ml-auto text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    200 OK
                  </span>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-slate-500 font-mono text-xs block mb-2">// User Question:</span>
                    <p className="text-slate-200 text-lg font-medium">
                      How do you mitigate App Store rejection risks?
                    </p>
                  </div>
                  <div className="pl-4 border-l-2 border-[#0062d1]/30 group-hover:border-[#0062d1] transition-colors">
                    <span className="text-emerald-400 font-mono text-xs block mb-3">
                      &lt;response&gt;
                    </span>
                    <p className="text-slate-400 leading-relaxed text-base mb-4">
                      <strong className="text-white">Pre-validation protocol.</strong> We audit against Apple HIG (Human Interface Guidelines)
                      and Google Play Policy during the design phase—before a single line of code is written.
                    </p>
                    <div className="bg-[#020408] border border-white/5 rounded-lg p-4 my-4 font-mono text-xs">
                      <div className="text-slate-500 mb-2">// Track Record:</div>
                      <div className="text-emerald-400 mb-1">✓ 47/47 apps approved (first submission)</div>
                      <div className="text-slate-500">✓ Zero rejections for policy violations</div>
                    </div>
                    <p className="text-slate-400 leading-relaxed text-base">
                      Common risks we eliminate: Unclear privacy policies, missing data handling disclosures,
                      incomplete metadata, guideline 4.3 (spam) violations.
                    </p>
                    <span className="text-emerald-400 font-mono text-xs block mt-3">
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
                  <span className="ml-auto text-[10px] font-mono text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2 py-0.5 rounded">
                    200 OK
                  </span>
                </div>
                <div className="p-8">
                  <div className="mb-6">
                    <span className="text-slate-500 font-mono text-xs block mb-2">// User Question:</span>
                    <p className="text-slate-200 text-lg font-medium">
                      What does your handoff process look like?
                    </p>
                  </div>
                  <div className="pl-4 border-l-2 border-[#0062d1]/30 group-hover:border-[#0062d1] transition-colors">
                    <span className="text-emerald-400 font-mono text-xs block mb-3">
                      &lt;response&gt;
                    </span>
                    <p className="text-slate-400 leading-relaxed text-base mb-4">
                      <strong className="text-white">No &quot;zip file&quot; drops.</strong> We execute a structured 2-week
                      pair-programming transition with your internal team or new vendor.
                    </p>
                    <div className="space-y-3 my-4">
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
                    <p className="text-slate-400 leading-relaxed text-base">
                      You receive full documentation, runbooks, and a recorded video library covering every system component.
                    </p>
                    <span className="text-emerald-400 font-mono text-xs block mt-3">
                      &lt;/response&gt;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="mt-12 text-center">
            <div className="inline-flex items-center gap-2 text-slate-500 font-mono text-xs bg-white/5 px-4 py-2 rounded-full border border-white/5">
              <span className="text-emerald-400 animate-pulse">●</span>
              <span>3/3 queries executed successfully</span>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden border-t border-white/5 z-10">
        {/* Gradient and Noise Background */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#0a1435_0%,_#020408_100%)]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.05] mix-blend-overlay pointer-events-none"></div>

        {/* Subtle Circuit/Network Pattern Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none opacity-50"></div>
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#020408] to-transparent pointer-events-none"></div>

        <div className="max-w-4xl mx-auto text-center relative z-10">
          {/* Pre-headline Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8 backdrop-blur-sm">
            <Code2 size={16} className="text-[#0062d1]" />
            <span className="text-xs font-mono text-slate-300 tracking-wider uppercase">
              FINAL_CHECKPOINT
            </span>
          </div>

          <h2 className="text-5xl md:text-6xl font-bold text-white mb-8 leading-tight drop-shadow-2xl">
            Ready to Build an Asset, <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] via-cyan-400 to-[#0062d1] bg-[length:200%_auto] animate-gradient">
              Not a Liability?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Stop guessing. Get a precise engineering roadmap that guarantees scalability and IP ownership
            from the first commit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {/* High-Contrast Primary Button */}
            <button className="w-full sm:w-auto px-10 py-5 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-2xl transition-all shadow-[0_0_40px_-10px_rgba(0,98,209,0.5)] hover:shadow-[0_0_50px_-10px_rgba(0,98,209,0.7)] hover:scale-105 active:scale-95 flex flex-col items-center gap-1 group relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent translate-x-[-200%] group-hover:animate-shimmer"></div>
              <div className="flex items-center gap-2 relative z-10">
                <span>Simulate Project Cost & Risk</span>
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </div>
              <span className="text-[10px] opacity-80 font-mono font-normal uppercase tracking-wider relative z-10">
                GET RANGE IN 2 MINS
              </span>
            </button>

            {/* Secondary Outline Button */}
            <button className="w-full sm:w-auto px-10 py-5 bg-transparent border border-white/10 hover:bg-white/5 text-white font-bold rounded-2xl transition-all hover:border-white/20 active:scale-95 flex flex-col items-center gap-1 group backdrop-blur-sm">
              <div className="flex items-center gap-2">
                <span>Book Architecture Review</span>
                <ChevronRightSquare
                  size={20}
                  className="text-slate-400 group-hover:text-white transition-colors"
                />
              </div>
              <span className="text-[10px] text-slate-400 group-hover:text-slate-300 transition-colors font-mono font-normal uppercase tracking-wider">
                SPEAK WITH LEAD ENGINEER
              </span>
            </button>
          </div>

          {/* Trust Footer */}
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-3 text-xs text-slate-500 font-mono bg-[#0A1525]/80 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-md">
            <div className="flex items-center gap-2">
              <Lock size={14} className="text-emerald-500 shrink-0" />
              <span>All discussions are covered by our standard NDA.</span>
            </div>
            <span className="hidden sm:inline text-slate-700">|</span>
            <span>Your idea remains yours.</span>
          </div>
        </div>
      </section>
    </div>
  );
}
