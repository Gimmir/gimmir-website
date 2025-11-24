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
  Unlock,
  CheckCircle2,
  Box,
  Settings2,
  WifiOff,
  ShieldAlert,
  Activity,
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import GlobalContactSection from '@/components/sections/global-contact';

export default function WebMobilePage() {
  const [activeTab, setActiveTab] = useState<'mobile' | 'web'>('mobile');

  return (
    <div className="min-h-screen bg-[#020408] text-white selection:bg-[#0062d1] selection:text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] sm:w-[80%] h-[400px] sm:h-[600px] bg-[#0062d1] rounded-[100%] blur-[80px] sm:blur-[120px] opacity-[0.15]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-start pt-28 sm:pt-32 md:pt-40 px-4 text-center max-w-5xl mx-auto w-full">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 sm:px-4 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-6 sm:mb-8 animate-fade-in-up">
          <span className="flex h-2 w-2 relative">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#0062d1] opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-[#0062d1]"></span>
          </span>
          <span className="text-[10px] sm:text-xs font-medium tracking-widest uppercase text-slate-300">
            Solution: Web & Mobile
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 sm:mb-8 leading-[1.1] drop-shadow-2xl">
          Build for <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#4da6ff] to-[#0062d1]">Scale</span>.
          <br className="hidden sm:block" />
          Not Just for the Demo.
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-lg md:text-xl text-slate-400 max-w-2xl mb-10 sm:mb-12 font-light leading-relaxed mx-auto px-2">
          We engineer high-performance mobile & web applications with transparent architecture and full IP ownership. No black boxes.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-5 w-full justify-center mb-12 sm:mb-16 px-4">
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-semibold rounded-full shadow-[0_0_40px_-10px_rgba(0,98,209,0.5)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group">
            <Code2 size={18} className="group-hover:rotate-12 transition-transform duration-500" />
            <span>Start Engineering</span>
          </button>
          <button className="w-full sm:w-auto px-8 py-4 bg-[#0f121a] hover:bg-[#1a1f2e] border border-white/10 text-slate-300 font-medium rounded-full transition-all active:scale-95 flex items-center justify-center gap-2 group">
            <Layout size={18} className="text-[#0062d1]" />
            <span>View Architecture</span>
          </button>
        </div>

        {/* Trust Badges */}
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-4 md:gap-12 opacity-60 mb-16 sm:mb-20 px-2">
            <div className="flex items-center gap-2"><Smartphone className="text-[#0062d1]" size={16} /><span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">iOS & Android</span></div>
            <div className="flex items-center gap-2"><Globe2 className="text-[#0062d1]" size={16} /><span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">Next.js Web</span></div>
            <div className="flex items-center gap-2"><Shield className="text-[#0062d1]" size={16} /><span className="text-[10px] sm:text-xs font-medium uppercase tracking-wider">Enterprise Security</span></div>
        </div>

      </section>

      {/* 2. The Quality Gap - System Cards Style */}
      <section className="relative py-24 px-6 border-t border-white/5">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <SectionHeader 
            title="The Engineering Gap" 
            subtitle="Why 60% of agency-built products fail technical due diligence."
          />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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

      {/* 3. Tech Stack Strategy (System Modules - Services Style) */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 gap-6 md:gap-0">
             <div>
                <h2 className="text-3xl font-bold text-white mb-2">Strategic Stack</h2>
                <p className="text-slate-400 text-sm">Selected for performance, not just popularity.</p>
             </div>
             
             <div className="flex bg-white/5 rounded-lg p-1 border border-white/10 mt-6 md:mt-0 w-full md:w-auto">
               <button 
                 onClick={() => setActiveTab('mobile')}
                 className={`flex-1 md:flex-none px-4 py-2 rounded-md text-xs font-bold font-mono transition-all text-center ${activeTab === 'mobile' ? 'bg-[#0062d1] text-white' : 'text-slate-400 hover:text-white'}`}
               >
                 MOBILE_SYS
               </button>
               <button 
                 onClick={() => setActiveTab('web')}
                 className={`flex-1 md:flex-none px-4 py-2 rounded-md text-xs font-bold font-mono transition-all text-center ${activeTab === 'web' ? 'bg-[#0062d1] text-white' : 'text-slate-400 hover:text-white'}`}
               >
                 WEB_SYS
               </button>
             </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activeTab === 'mobile' ? (
              <>
                {/* Card: Native */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-emerald-500/50 transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                   <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-colors"><Smartphone size={24} /></div>
                      <span className="text-[10px] font-mono text-slate-600">LAYER_NATIVE</span>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">Swift & Kotlin</h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-8">Direct hardware access (Bluetooth, AR, NFC). Zero-latency performance for heavy computation.</p>
                   <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                      <span className="text-purple-400">class</span> <span className="text-emerald-400">BankingCore</span> : <span className="text-yellow-200">SecureModule</span> {'{'}<br/>
                      &nbsp;&nbsp;<span className="text-slate-600">// Native Hardware Access</span><br/>
                      {'}'}
                   </div>
                </div>
                
                {/* Card: Flutter */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-sky-500/50 transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                   <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-sky-500 group-hover:bg-sky-500/10 transition-colors"><Layout size={24} /></div>
                      <span className="text-[10px] font-mono text-slate-600">LAYER_CROSS</span>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">Flutter</h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-8">Pixel-perfect rendering engine (Skia). 60fps smooth animations on all devices. Single codebase.</p>
                   <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                      <span className="text-blue-400">Widget</span> build(<span className="text-purple-400">Context</span> c) {'{'}<br/>
                      &nbsp;&nbsp;<span className="text-sky-300">return</span> <span className="text-yellow-200">PixelPerfectUI()</span>;<br/>
                      {'}'}
                   </div>
                </div>

                {/* Card: React Native */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-blue-500/50 transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                   <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-blue-500 group-hover:bg-blue-500/10 transition-colors"><Code2 size={24} /></div>
                      <span className="text-[10px] font-mono text-slate-600">LAYER_HYBRID</span>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">React Native</h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-8">Ideal for teams with existing JS/React infrastructure. Rapid iteration for SaaS products.</p>
                   <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                      <span className="text-purple-400">import</span> <span className="text-yellow-200">{'{'} View {'}'}</span> <span className="text-purple-400">from</span> <span className="text-green-400">'react-native'</span>;<br/>
                      <span className="text-slate-600">// Shared Logic</span>
                   </div>
                </div>
              </>
            ) : (
              <>
                {/* Card: Next.js */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-white/50 transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                   <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-white group-hover:bg-white/10 transition-colors"><Globe2 size={24} /></div>
                      <span className="text-[10px] font-mono text-slate-600">LAYER_FRONT</span>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">Next.js / React</h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-8">Server-side rendering for SEO. Edge computing ready. High performance SaaS frontends.</p>
                   <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                      <span className="text-purple-400">export</span> <span className="text-blue-400">default</span> <span className="text-purple-400">async</span> () =&gt; {'{'}<br/>
                      &nbsp;&nbsp;<span className="text-slate-600">// Server Component</span><br/>
                      {'}'}
                   </div>
                </div>

                {/* Card: Backend */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-yellow-500/50 transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                   <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-yellow-500 group-hover:bg-yellow-500/10 transition-colors"><Database size={24} /></div>
                      <span className="text-[10px] font-mono text-slate-600">LAYER_BACK</span>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">Python / Node.js</h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-8">Asynchronous processing. AI/ML integration ready. Scalable microservices.</p>
                   <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                      <span className="text-purple-400">@app.get</span>(<span className="text-green-400">"/api"</span>)<br/>
                      <span className="text-purple-400">async def</span> <span className="text-blue-300">root</span>():<br/>
                      &nbsp;&nbsp;<span className="text-slate-600"># Fast execution</span>
                   </div>
                </div>

                {/* Card: Cloud */}
                <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-purple-500/50 transition-all duration-300">
                   <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
                   <div className="flex items-start justify-between mb-6">
                      <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-purple-500 group-hover:bg-purple-500/10 transition-colors"><Cloud size={24} /></div>
                      <span className="text-[10px] font-mono text-slate-600">LAYER_INFRA</span>
                   </div>
                   <h3 className="text-xl font-bold text-white mb-3">AWS / Azure</h3>
                   <p className="text-slate-400 text-sm leading-relaxed mb-8">Terraform (IaC). Auto-scaling groups. Kubernetes (EKS/AKS). Secure VPCs.</p>
                   <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
                      <span className="text-purple-400">resource</span> <span className="text-green-400">"aws_instance"</span> {'{'}<br/>
                      &nbsp;&nbsp;<span className="text-sky-300">ami</span> = <span className="text-yellow-200">var.ami</span><br/>
                      {'}'}
                   </div>
                </div>
              </>
            )}
          </div>
        </div>
      </section>

      {/* 4. No Vendor Lock-in (Repo Style) */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#020408]">
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
           <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0062d1]/10 text-[#0062d1] text-xs font-bold uppercase mb-6 border border-[#0062d1]/20">
                 <Unlock size={12} /> No Hostage Situations
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">You Own The Repo. <br/>From Day One.</h2>
              <p className="text-slate-400 text-sm leading-relaxed mb-8">
                 We don't build on proprietary platforms. We build in your GitHub/GitLab organization. You hold the keys to the cloud accounts, app store listings, and source code at all times.
              </p>
              <div className="flex gap-4">
                 <div className="flex items-center gap-2 text-xs font-mono text-slate-500"><CheckCircle2 size={14} className="text-emerald-500"/> Full Admin Access</div>
                 <div className="flex items-center gap-2 text-xs font-mono text-slate-500"><CheckCircle2 size={14} className="text-emerald-500"/> MIT / Proprietary License</div>
              </div>
           </div>
           
           {/* Repo Visual */}
           <div className="bg-[#0B0F19] rounded-xl border border-white/10 overflow-hidden font-mono text-xs">
              <div className="bg-white/5 px-4 py-2 border-b border-white/10 flex items-center gap-2">
                 <FolderGit2 size={14} className="text-slate-400"/>
                 <span className="text-white">gimmir / your-project-name</span>
                 <span className="px-1.5 py-0.5 rounded-full border border-white/10 text-[10px] text-slate-500 ml-auto">Public</span>
              </div>
              <div className="p-4 space-y-2">
                 <div className="flex items-center justify-between text-slate-400 hover:bg-white/5 p-1 rounded cursor-pointer">
                    <div className="flex items-center gap-2"><Box size={14} className="text-blue-400"/> src</div>
                    <span className="text-slate-600">Initial commit</span>
                 </div>
                 <div className="flex items-center justify-between text-slate-400 hover:bg-white/5 p-1 rounded cursor-pointer">
                    <div className="flex items-center gap-2"><FileText size={14} className="text-slate-500"/> README.md</div>
                    <span className="text-slate-600">Update documentation</span>
                 </div>
                 <div className="flex items-center justify-between text-slate-400 hover:bg-white/5 p-1 rounded cursor-pointer">
                    <div className="flex items-center gap-2"><Settings2 size={14} className="text-yellow-500"/> terraform.tf</div>
                    <span className="text-slate-600">Add AWS infrastructure</span>
                 </div>
                 <div className="flex items-center justify-between text-slate-400 hover:bg-white/5 p-1 rounded cursor-pointer">
                    <div className="flex items-center gap-2"><Lock size={14} className="text-emerald-500"/> license.txt</div>
                    <span className="text-slate-600">Transfer IP to Client</span>
                 </div>
              </div>
           </div>
        </div>
      </section>

      {/* 5. Capabilities Grid */}
      <section className="py-24 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader title="Advanced Capabilities" subtitle="Production-grade features, standard." />
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { icon: WifiOff, label: "Offline Mode", desc: "Local-first sync" },
              { icon: Zap, label: "Real-time", desc: "WebSockets" },
              { icon: CreditCard, label: "Payments", desc: "Stripe / Adyen" },
              { icon: Fingerprint, label: "Biometrics", desc: "FaceID / TouchID" },
              { icon: ShieldAlert, label: "Encryption", desc: "AES-256 Data" },
              { icon: Globe2, label: "Localization", desc: "i18n Ready" },
              { icon: Activity, label: "Analytics", desc: "Custom Events" },
              { icon: Server, label: "Serverless", desc: "Auto-scaling" }
            ].map((cap, i) => (
              <div key={i} className="p-4 bg-[#0B0F19] border border-white/10 rounded-lg hover:border-[#0062d1]/50 transition-colors group">
                <cap.icon size={20} className="text-slate-500 group-hover:text-[#0062d1] mb-2 transition-colors" />
                <h4 className="text-white font-bold text-xs mb-1">{cap.label}</h4>
                <p className="text-slate-500 text-[10px] font-mono">{cap.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. FAQ - Terminal Style */}
      <section className="py-24 px-6 border-t border-white/5 bg-[#050810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-8 text-center font-mono">&gt; FAQ --verbose</h2>
          <div className="space-y-4">
            {[
              { q: "Why use Flutter vs Native?", a: "Optimization vector. Flutter = 95% performance for 60% budget. Native is strictly for hardware-intensive tasks (AR/Bluetooth)." },
              { q: "Do you handle App Store rejection risks?", a: "Affirmative. We pre-validate against Apple HIG and Google Play Policy during the design phase. 100% acceptance rate track record." },
              { q: "How do you handle handoff?", a: "No 'zip file' drops. We execute a 2-week pair-programming transition with your internal team." }
            ].map((faq, i) => (
              <div key={i} className="group">
                <div className="text-sm font-mono text-[#0062d1] mb-1 cursor-pointer group-hover:text-white transition-colors">
                   <span className="mr-2">$</span>{faq.q}
                </div>
                <div className="pl-5 text-sm text-slate-400 border-l border-white/10 ml-1.5 py-2 group-hover:border-[#0062d1] transition-colors">
                   {faq.a}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA Section */}
      <section className="relative py-32 px-6 overflow-hidden border-t border-white/5 bg-[#050A14]">
        {/* Background Grid & Glow */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#0062d1]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0062d1]/10 border border-[#0062d1]/20 mb-8">
            <Code2 size={14} className="text-[#0062d1]" />
            <span className="text-xs font-mono text-[#0062d1] tracking-wider uppercase">
              SYSTEM_READY
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build an Asset, <br />
            <span className="text-slate-500">Not a Liability?</span>
          </h2>
          
          <p className="text-lg text-slate-400 mb-12 max-w-2xl mx-auto font-light leading-relaxed">
            Stop guessing. Get a precise engineering roadmap that guarantees scalability and IP ownership from the first commit.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <button className="w-full sm:w-auto px-8 py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-lg transition-all shadow-[0_0_20px_-5px_rgba(0,98,209,0.3)] flex items-center justify-center gap-2 group">
              <span>Simulate Project Cost</span>
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-lg transition-all flex items-center justify-center gap-2 group">
              <span>Book Architecture Review</span>
              <ChevronRightSquare size={18} className="text-slate-400 group-hover:text-white transition-colors" />
            </button>
          </div>

          <div className="inline-flex items-center gap-3 text-xs text-slate-500 font-mono bg-[#0B0F19] border border-white/10 px-4 py-2 rounded-lg">
            <div className="flex items-center gap-2">
              <Lock size={12} className="text-emerald-500" />
              <span>NDA_PROTECTED</span>
            </div>
            <span className="text-slate-700">|</span>
            <span>IP_OWNERSHIP: CLIENT</span>
          </div>
        </div>
      </section>

      <GlobalContactSection />
    </div>
  );
}
