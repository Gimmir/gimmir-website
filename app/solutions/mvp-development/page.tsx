'use client';

import {
  Rocket,
  ShieldCheck,
  FileText,
  Layout,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Users,
  TrendingUp,
  Lock,
  ChevronRightSquare,
  Zap,
  Smartphone,
  Globe2,
  Database,
  Layers,
  FileCheck,
  Eye,
  Code2,
  Server,
  Cpu
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import GlobalContactSection from '@/components/sections/global-contact';
import Link from 'next/link';

export default function MVPDevelopmentPage() {
  return (
    <div className="min-h-screen bg-[#020408] text-white selection:bg-[#0062d1] selection:text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#0062d1] rounded-full blur-[120px] opacity-[0.08]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* 1. Hero Section - Redesigned for Impact */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-28 md:pt-48 pb-16 md:pb-20 px-4 text-center max-w-6xl mx-auto w-full">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 md:mb-10 animate-fade-in-up hover:bg-white/10 transition-colors cursor-default">
          <Rocket size={14} className="text-[#0062d1]" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate-300">
            MVP Development Program
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.1] drop-shadow-2xl">
          Launch Your Vision. <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Keep Your Equity.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-400 max-w-3xl mb-10 md:mb-12 font-light leading-relaxed mx-auto px-2">
          We build MVPs that act like mature products. Scalable architecture from Day 1, so you don't have to rebuild when you grow.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-center mb-16 md:mb-20 px-4">
          <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold text-lg rounded-full shadow-[0_0_40px_-10px_rgba(0,98,209,0.5)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group">
            <TrendingUp size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            <span>Calculate MVP Budget</span>
          </button>
          <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg rounded-full transition-all active:scale-95 flex items-center justify-center gap-3 group backdrop-blur-sm">
            <Users size={20} className="text-slate-400 group-hover:text-white transition-colors" />
            <span>Book Strategy Call</span>
          </button>
        </div>

        {/* Social Proof - Redesigned */}
        <div className="grid grid-cols-3 gap-4 sm:gap-16 border-t border-white/10 pt-8 md:pt-10 w-full max-w-4xl">
          <div className="text-center group">
            <div className="text-2xl sm:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:text-[#0062d1] transition-colors">10 Weeks</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-mono">Avg. Launch Time</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl sm:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:text-emerald-500 transition-colors">100%</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-mono">Success Rate</div>
          </div>
          <div className="text-center group">
            <div className="text-2xl sm:text-4xl font-bold text-white mb-1 md:mb-2 group-hover:text-purple-500 transition-colors">0%</div>
            <div className="text-[10px] sm:text-xs text-slate-500 uppercase tracking-wider font-mono">Equity Taken</div>
          </div>
        </div>
      </section>

      {/* 2. The "Founder's Nightmare" - Split View Redesign */}
      <section className="relative py-20 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">The Rewrite Trap</h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto">Most MVPs are built to be thrown away. We build assets that appreciate in value.</p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 rounded-3xl overflow-hidden border border-white/10">
            {/* The Trap */}
            <div className="relative p-8 md:p-16 bg-[#0B0F19] border-b lg:border-b-0 lg:border-r border-white/10 group">
              <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <XCircle className="text-red-500 w-32 h-32 md:w-48 md:h-48" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-red-500/10 text-red-400 text-xs font-bold uppercase mb-6 md:mb-8 border border-red-500/20">
                  The "Cheap" MVP
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">The $20k Dead End</h3>
                <p className="text-slate-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
                  It looks okay on day one, but crashes at 1,000 users. The code is spaghetti, security is non-existent, and investors reject it because the IP ownership is messy.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start md:items-center gap-4 text-slate-400">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 mt-0.5 md:mt-0">
                      <XCircle size={14} className="text-red-500" />
                    </div>
                    <span className="text-sm md:text-base">Requires complete rewrite to scale</span>
                  </li>
                  <li className="flex items-start md:items-center gap-4 text-slate-400">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 mt-0.5 md:mt-0">
                      <XCircle size={14} className="text-red-500" />
                    </div>
                    <span className="text-sm md:text-base">No documentation for Due Diligence</span>
                  </li>
                  <li className="flex items-start md:items-center gap-4 text-slate-400">
                    <div className="w-6 h-6 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20 mt-0.5 md:mt-0">
                      <XCircle size={14} className="text-red-500" />
                    </div>
                    <span className="text-sm md:text-base">Vendor lock-in (you don't own the code)</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* The Gimmir Asset */}
            <div className="relative p-8 md:p-16 bg-[#050A14] group">
              <div className="absolute inset-0 bg-[radial-gradient(#0062d1_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
              <div className="absolute top-0 right-0 p-4 md:p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                <CheckCircle2 className="text-[#0062d1] w-32 h-32 md:w-48 md:h-48" />
              </div>
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#0062d1]/10 text-[#0062d1] text-xs font-bold uppercase mb-6 md:mb-8 border border-[#0062d1]/20">
                  The Gimmir Standard
                </div>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">The Scalable Foundation</h3>
                <p className="text-slate-400 mb-8 md:mb-10 leading-relaxed text-base md:text-lg">
                  Built to handle 100k+ users from the start. Clean, modular architecture that grows with you. Documentation ready for VC Due Diligence.
                </p>
                <ul className="space-y-4">
                  <li className="flex items-start md:items-center gap-4 text-white">
                    <div className="w-6 h-6 rounded-full bg-[#0062d1]/20 flex items-center justify-center shrink-0 border border-[#0062d1]/50 mt-0.5 md:mt-0">
                      <CheckCircle2 size={14} className="text-[#0062d1]" />
                    </div>
                    <span className="text-sm md:text-base">Scales to Series A and beyond</span>
                  </li>
                  <li className="flex items-start md:items-center gap-4 text-white">
                    <div className="w-6 h-6 rounded-full bg-[#0062d1]/20 flex items-center justify-center shrink-0 border border-[#0062d1]/50 mt-0.5 md:mt-0">
                      <CheckCircle2 size={14} className="text-[#0062d1]" />
                    </div>
                    <span className="text-sm md:text-base">Full Technical Due Diligence Pack</span>
                  </li>
                  <li className="flex items-start md:items-center gap-4 text-white">
                    <div className="w-6 h-6 rounded-full bg-[#0062d1]/20 flex items-center justify-center shrink-0 border border-[#0062d1]/50 mt-0.5 md:mt-0">
                      <CheckCircle2 size={14} className="text-[#0062d1]" />
                    </div>
                    <span className="text-sm md:text-base">100% IP Ownership Transfer</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Founder Protection - Bento Grid Style */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Founder Protection Package" 
            subtitle="We mitigate the risks so you can focus on growth."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 auto-rows-[minmax(250px,auto)]">
            {/* Card 1 - Large */}
            <div className="md:col-span-2 bg-[#0B0F19] p-6 md:p-10 rounded-3xl border border-white/5 hover:border-[#0062d1]/30 transition-all group relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0062d1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="w-12 h-12 md:w-14 md:h-14 bg-[#0062d1]/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                  <FileCheck className="text-[#0062d1]" size={24} />
                </div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">IP Ownership Certificate</h3>
                <p className="text-slate-400 text-base md:text-lg leading-relaxed max-w-lg">
                  You legally own every line of code, design asset, and database schema. No "hostage" situations. We sign over rights immediately upon delivery.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-[#0B0F19] p-6 md:p-10 rounded-3xl border border-white/5 hover:border-[#0062d1]/30 transition-all group relative overflow-hidden">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-emerald-500/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <ShieldCheck className="text-emerald-500" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Investment Ready</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                Technical documentation, architecture diagrams, and security audits that VCs demand.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-[#0B0F19] p-6 md:p-10 rounded-3xl border border-white/5 hover:border-[#0062d1]/30 transition-all group relative overflow-hidden">
              <div className="w-12 h-12 md:w-14 md:h-14 bg-purple-500/10 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                <Eye className="text-purple-500" size={24} />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Transparent Roadmap</h3>
              <p className="text-slate-400 leading-relaxed text-sm md:text-base">
                No "black box". Weekly progress updates via live staging environments.
              </p>
            </div>

            {/* Card 4 - Large */}
            <div className="md:col-span-2 bg-[#0B0F19] p-6 md:p-10 rounded-3xl border border-white/5 hover:border-[#0062d1]/30 transition-all group relative overflow-hidden">
               <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
               <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center gap-8">
                  <div className="flex-1">
                    <div className="w-12 h-12 md:w-14 md:h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-6 md:mb-8 group-hover:scale-110 transition-transform duration-500">
                      <Lock className="text-white" size={24} />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white mb-3 md:mb-4">Enterprise Security Standard</h3>
                    <p className="text-slate-400 text-base md:text-lg leading-relaxed">
                      We implement OWASP Top 10 protection, encrypted databases, and secure authentication flows by default. Your users' data is safe from day one.
                    </p>
                  </div>
                  <div className="w-full md:w-1/3 bg-[#020408] rounded-xl border border-white/10 p-4 font-mono text-xs text-slate-500">
                    <div className="flex items-center gap-2 mb-2 text-emerald-500"><CheckCircle2 size={12}/> SSL/TLS Encryption</div>
                    <div className="flex items-center gap-2 mb-2 text-emerald-500"><CheckCircle2 size={12}/> GDPR Compliant</div>
                    <div className="flex items-center gap-2 mb-2 text-emerald-500"><CheckCircle2 size={12}/> SOC2 Ready Infra</div>
                    <div className="flex items-center gap-2 text-emerald-500"><CheckCircle2 size={12}/> Auto-Backups</div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. The Process - Horizontal Timeline */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12 md:mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 md:mb-6">From Concept to Launch</h2>
            <p className="text-slate-400 text-base md:text-lg">No jargon. Just results.</p>
          </div>

          <div className="relative">
            {/* Line */}
            <div className="hidden md:block absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0062d1]/50 to-transparent"></div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">
              {[
                { step: "01", title: "Discovery", desc: "We refine your business logic and create a technical roadmap.", weeks: "Weeks 1-2" },
                { step: "02", title: "Prototype", desc: "Clickable visual prototypes. See it before we code it.", weeks: "Weeks 3-4" },
                { step: "03", title: "Build", desc: "Rapid development with weekly demos. You see progress.", weeks: "Weeks 5-9" },
                { step: "04", title: "Launch", desc: "Deployment, handover, and transfer of all assets.", weeks: "Week 10" }
              ].map((phase, i) => (
                <div key={i} className="relative group flex flex-col items-center md:block">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-[#0B0F19] border border-white/10 rounded-full flex items-center justify-center text-xl md:text-2xl font-bold text-slate-700 group-hover:text-[#0062d1] group-hover:border-[#0062d1] transition-all duration-300 mb-6 md:mb-8 relative z-10 shadow-xl">
                    {phase.step}
                  </div>
                  <div className="text-center md:text-left">
                    <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-400 mb-3 md:mb-4">
                      {phase.weeks}
                    </div>
                    <h3 className="text-lg md:text-xl font-bold text-white mb-2 md:mb-3">{phase.title}</h3>
                    <p className="text-slate-400 text-sm leading-relaxed max-w-xs mx-auto md:mx-0">{phase.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 5. Tech Stack - Modern Grid */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Built on Unicorn Standards</h2>
              <p className="text-slate-400 max-w-xl text-sm md:text-base">
                We use the same technologies as Uber, Airbnb, and Netflix. No "No-Code" limitations.
              </p>
            </div>
            <div className="flex gap-2">
               <div className="w-3 h-3 rounded-full bg-red-500"></div>
               <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
               <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="p-6 md:p-8 bg-[#0B0F19] rounded-2xl border border-white/5 hover:border-[#0062d1]/30 transition-all group">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <Globe2 size={28} className="text-[#0062d1] md:w-8 md:h-8" />
                <span className="text-[10px] md:text-xs font-mono text-slate-500 border border-white/10 px-2 py-1 rounded">FRONTEND</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">React / Next.js</h3>
              <p className="text-slate-400 text-sm mb-6">The industry standard for scalable, high-performance web applications.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300">TypeScript</span>
                <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300">Tailwind</span>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0F19] rounded-2xl border border-white/5 hover:border-yellow-500/30 transition-all group">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <Server size={28} className="text-yellow-500 md:w-8 md:h-8" />
                <span className="text-[10px] md:text-xs font-mono text-slate-500 border border-white/10 px-2 py-1 rounded">BACKEND</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Python / Node</h3>
              <p className="text-slate-400 text-sm mb-6">Secure, scalable APIs that can handle millions of requests.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300">FastAPI</span>
                <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300">PostgreSQL</span>
              </div>
            </div>

            <div className="p-6 md:p-8 bg-[#0B0F19] rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="flex items-center justify-between mb-6 md:mb-8">
                <Smartphone size={28} className="text-purple-500 md:w-8 md:h-8" />
                <span className="text-[10px] md:text-xs font-mono text-slate-500 border border-white/10 px-2 py-1 rounded">MOBILE</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-white mb-2">Swift / Kotlin</h3>
              <p className="text-slate-400 text-sm mb-6">Native performance for the best possible user experience.</p>
              <div className="flex gap-2">
                <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300">iOS</span>
                <span className="px-2 py-1 bg-white/5 rounded text-[10px] text-slate-300">Android</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. FAQ - Clean Accordion Style */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#050810]">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">Common Founder Questions</h2>
          <div className="space-y-4 md:space-y-6">
            {[
              { q: "I'm non-technical. How do I manage you?", a: "You don't. We provide a dedicated Project Manager who speaks plain English, not code. They translate your business goals into technical tasks and keep you updated on progress." },
              { q: "What happens if I want to move development in-house later?", a: "We help you hire your own team and hand over everything. We build to be handed over. Our code is documented and standard-compliant, so any competent developer can pick it up." },
              { q: "Do you take equity?", a: "No. We are a service partner, not a co-founder. You pay for the development, and you keep 100% of your company's equity." }
            ].map((faq, i) => (
              <div key={i} className="bg-[#0B0F19] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Final CTA - High Impact */}
      <section className="relative py-16 md:py-40 px-4 md:px-6 overflow-hidden border-t border-white/5 bg-[#050A14]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0062d1]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-3xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
            Don't just build an app. <br />
            <span className="text-slate-500">Build a business.</span>
          </h2>
          
          <p className="text-base md:text-xl text-slate-400 mb-8 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Get a precise engineering roadmap and budget estimate in minutes.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <button className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold text-lg md:text-xl rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(0,98,209,0.4)] flex items-center justify-center gap-3 group hover:scale-105">
              <span>Simulate Project Cost</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </section>

      <GlobalContactSection />
    </div>
  );
}

