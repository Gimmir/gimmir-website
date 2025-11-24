'use client';

import {
  Users,
  ShieldCheck,
  Globe2,
  Zap,
  ArrowRight,
  CheckCircle2,
  XCircle,
  Clock,
  Code2,
  Terminal,
  MessageSquare,
  Briefcase,
  Lock,
  Search,
  FileCode,
  Cpu,
  Filter,
  Award,
  GitBranch,
  RefreshCcw,
  LayoutGrid,
  Hash,
  BarChart3,
  Eye,
  FileCheck
} from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';
import GlobalContactSection from '@/components/sections/global-contact';
import Link from 'next/link';

export default function DedicatedTeamsPage() {
  return (
    <div className="min-h-screen bg-[#020408] text-white selection:bg-[#0062d1] selection:text-white overflow-x-hidden">
      {/* Background effects */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#0062d1] rounded-full blur-[120px] opacity-[0.08]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-600 rounded-full blur-[120px] opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>

      {/* 1. Hero Section */}
      <section className="relative z-10 min-h-screen flex flex-col items-center justify-center pt-28 md:pt-48 pb-16 md:pb-20 px-4 text-center max-w-6xl mx-auto w-full">
        
        {/* Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-8 md:mb-10 animate-fade-in-up hover:bg-white/10 transition-colors cursor-default">
          <Users size={14} className="text-[#0062d1]" />
          <span className="text-xs font-bold tracking-widest uppercase text-slate-300">
            Average Retention: 2.8 Years per Developer
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-4xl sm:text-6xl md:text-8xl font-bold tracking-tight text-white mb-6 md:mb-8 leading-[1.1] drop-shadow-2xl">
          Direct Access to <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-500">Senior Talent.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-base sm:text-xl md:text-2xl text-slate-400 max-w-3xl mb-10 md:mb-12 font-light leading-relaxed mx-auto px-2">
          Scale your engineering capacity with developers who integrate directly into your Slack, Jira, and culture. No "broken telephone" communication.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 w-full justify-center mb-16 md:mb-20 px-4">
          <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold text-lg rounded-full shadow-[0_0_40px_-10px_rgba(0,98,209,0.5)] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-3 group">
            <Search size={20} className="group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-transform" />
            <span>View Developer Profiles</span>
          </button>
          <button className="w-full sm:w-auto px-8 md:px-10 py-4 md:py-5 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-lg rounded-full transition-all active:scale-95 flex items-center justify-center gap-3 group backdrop-blur-sm">
            <FileCode size={20} className="text-slate-400 group-hover:text-white transition-colors" />
            <span>Compare Cost Models</span>
          </button>
        </div>
      </section>

      {/* 2. The "Top 1% Talent Funnel" */}
      <section className="relative py-20 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="The 1.5% Acceptance Rate" 
            subtitle="We don't just hire anyone. Our vetting process is rigorous, so you don't have to worry about quality."
          />
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 relative">
            {/* Connecting Line (Desktop) */}
            <div className="hidden md:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-[#0062d1]/30 to-transparent -translate-y-1/2 z-0"></div>

            {[
              {
                icon: Filter,
                step: "01",
                title: "Soft Skills & English",
                desc: "C1/C2 verified. We filter out 60% of applicants instantly.",
                color: "text-slate-400"
              },
              {
                icon: Code2,
                step: "02",
                title: "Hard Skills Challenge",
                desc: "Live coding sessions, not just take-home tests. 30% cut.",
                color: "text-slate-300"
              },
              {
                icon: Users,
                step: "03",
                title: "Culture Fit Check",
                desc: "'No Ego' policy. We ensure they can collaborate effectively.",
                color: "text-white"
              },
              {
                icon: Award,
                step: "04",
                title: "The Bar Raiser",
                desc: "Final approval by a Lead Engineer. Only 1.5% get hired.",
                color: "text-[#0062d1]"
              }
            ].map((item, i) => (
              <div key={i} className="relative z-10 bg-[#0B0F19] p-6 rounded-2xl border border-white/10 hover:border-[#0062d1]/50 transition-all group h-full flex flex-col">
                <div className="flex items-center justify-between mb-6">
                  <div className="w-12 h-12 bg-white/5 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                    <item.icon className={item.color} size={24} />
                  </div>
                  <span className="text-4xl font-bold text-white/5 font-mono">{item.step}</span>
                </div>
                <h3 className={`text-lg font-bold mb-3 ${item.color}`}>{item.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Retention & Stability Stats */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-[#0B0F19] p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-emerald-500 transition-colors">94%</div>
                <div className="text-lg font-bold text-white mb-2">Retention Rate</div>
                <p className="text-slate-400 text-sm">Industry average is ~70%. Our developers stay because we treat them well.</p>
              </div>
            </div>

            <div className="bg-[#0B0F19] p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#0062d1]/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-[#0062d1] transition-colors">2.8</div>
                <div className="text-lg font-bold text-white mb-2">Years Avg. Tenure</div>
                <p className="text-slate-400 text-sm">Long-term stability. You won't be retraining new people every 6 months.</p>
              </div>
            </div>

            <div className="bg-[#0B0F19] p-8 rounded-3xl border border-white/5 relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative z-10">
                <div className="text-5xl md:text-6xl font-bold text-white mb-2 group-hover:text-purple-500 transition-colors">&lt; 2</div>
                <div className="text-lg font-bold text-white mb-2">Weeks Replacement</div>
                <p className="text-slate-400 text-sm">If someone does leave, we fill the seat immediately. Zero downtime guarantee.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Engineer Spec Sheet (Existing) */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Engineering Grade Talent" 
            subtitle="We provide high-specs talent, not just bodies. Check the specs."
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              {
                role: "Senior React Engineer",
                exp: "7 Years",
                english: "C1 (Advanced)",
                timezone: "UTC-5 (EST)",
                stack: ["Next.js", "TypeScript", "GraphQL", "Tailwind"],
                id: "DEV-0842"
              },
              {
                role: "DevOps Architect",
                exp: "9 Years",
                english: "C2 (Fluent)",
                timezone: "UTC-3 (BRT)",
                stack: ["AWS", "Kubernetes", "Terraform", "Python"],
                id: "OPS-1103"
              },
              {
                role: "Full Stack Lead",
                exp: "6 Years",
                english: "C1 (Advanced)",
                timezone: "UTC-6 (CST)",
                stack: ["Node.js", "React", "PostgreSQL", "Redis"],
                id: "DEV-0921"
              }
            ].map((profile, i) => (
              <div key={i} className="bg-[#0B0F19] rounded-xl border border-white/10 overflow-hidden hover:border-[#0062d1]/50 transition-all group relative">
                {/* Technical Header */}
                <div className="bg-white/5 px-4 md:px-6 py-3 border-b border-white/10 flex justify-between items-center">
                  <div className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 md:w-2 md:h-2 rounded-full bg-emerald-500 animate-pulse"></div>
                    <span className="text-[10px] md:text-xs font-mono text-emerald-500">AVAILABLE</span>
                  </div>
                  <span className="text-[10px] md:text-xs font-mono text-slate-500">{profile.id}</span>
                </div>

                <div className="p-5 md:p-8">
                  {/* Avatar Placeholder */}
                  <div className="flex items-center gap-4 mb-6 md:mb-8">
                    <div className="w-12 h-12 md:w-16 md:h-16 rounded-lg bg-gradient-to-br from-slate-700 to-slate-900 border border-white/10 flex items-center justify-center shrink-0">
                      <Users className="text-slate-500" size={24} />
                    </div>
                    <div>
                      <h3 className="text-base md:text-lg font-bold text-white leading-tight">{profile.role}</h3>
                      <div className="text-[10px] md:text-xs text-slate-500 font-mono mt-1">VERIFIED PROFILE</div>
                    </div>
                  </div>

                  {/* Metrics Grid */}
                  <div className="grid grid-cols-3 gap-2 mb-6 md:mb-8">
                    <div className="bg-white/5 rounded p-2 text-center border border-white/5">
                      <div className="text-[8px] md:text-[10px] text-slate-500 font-mono uppercase mb-1">EXP</div>
                      <div className="text-xs md:text-sm font-bold text-white">{profile.exp}</div>
                    </div>
                    <div className="bg-white/5 rounded p-2 text-center border border-white/5">
                      <div className="text-[8px] md:text-[10px] text-slate-500 font-mono uppercase mb-1">ENGLISH</div>
                      <div className="text-xs md:text-sm font-bold text-white leading-tight">{profile.english}</div>
                    </div>
                    <div className="bg-white/5 rounded p-2 text-center border border-white/5">
                      <div className="text-[8px] md:text-[10px] text-slate-500 font-mono uppercase mb-1">ZONE</div>
                      <div className="text-xs md:text-sm font-bold text-white">{profile.timezone}</div>
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-1.5 md:gap-2">
                    {profile.stack.map((tech, t) => (
                      <span key={t} className="px-1.5 py-0.5 md:px-2 md:py-1 bg-[#0062d1]/10 border border-[#0062d1]/20 rounded text-[9px] md:text-[10px] font-mono text-[#0062d1]">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. The "Bridge Layer" (Management) */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0062d1]/10 border border-[#0062d1]/20 text-[#0062d1] text-xs font-bold tracking-wider uppercase mb-6">
                Management Layer
              </div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Managed by Us, <br /> Directed by You.</h2>
              <p className="text-slate-400 text-lg mb-8 leading-relaxed">
                Research shows clients struggle to manage remote devs directly. That's why every Dedicated Team comes with a <strong>Fractional Tech Lead</strong> included in the margin.
              </p>
              
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center shrink-0 border border-white/10">
                    <Users size={24} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">You (The Client)</h4>
                    <p className="text-slate-400 text-sm">You define the product roadmap, priorities, and business logic. You treat them like your own employees.</p>
                  </div>
                </div>
                <div className="w-px h-8 bg-white/10 ml-6"></div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-full bg-[#0062d1]/10 flex items-center justify-center shrink-0 border border-[#0062d1]/20">
                    <ShieldCheck size={24} className="text-[#0062d1]" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-lg mb-1">Gimmir (The Bridge)</h4>
                    <p className="text-slate-400 text-sm">We handle code reviews, architecture standards, performance monitoring, and HR. No micromanagement needed.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-[#0B0F19] p-8 rounded-3xl border border-white/10 relative">
              <div className="absolute inset-0 bg-[radial-gradient(#0062d1_1px,transparent_1px)] [background-size:20px_20px] opacity-10"></div>
              <h3 className="text-xl font-bold text-white mb-6 relative z-10">The "Fractional Lead" Role</h3>
              <ul className="space-y-4 relative z-10">
                {[
                  "Performs weekly code reviews",
                  "Enforces coding standards & best practices",
                  "Mentors junior/mid developers",
                  "Unblocks technical hurdles",
                  "Ensures security compliance"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-300">
                    <CheckCircle2 size={18} className="text-[#0062d1]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 6. The "Transparency Stack" (Tooling) */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="The Transparency Stack" 
            subtitle="We don't hide behind account managers. You get full access to the tools we use."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#0B0F19] p-6 rounded-2xl border border-white/5 hover:border-[#0062d1]/30 transition-all group">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <LayoutGrid className="text-blue-500" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Jira / Linear</h3>
              <p className="text-slate-400 text-sm">See ticket movement in real-time. Track velocity and sprint progress.</p>
            </div>

            <div className="bg-[#0B0F19] p-6 rounded-2xl border border-white/5 hover:border-purple-500/30 transition-all group">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Hash className="text-purple-500" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Slack / Teams</h3>
              <p className="text-slate-400 text-sm">Direct DM access to developers. No "broken telephone" via managers.</p>
            </div>

            <div className="bg-[#0B0F19] p-6 rounded-2xl border border-white/5 hover:border-white/30 transition-all group">
              <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <GitBranch className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">GitHub / GitLab</h3>
              <p className="text-slate-400 text-sm">Full commit history ownership. You own the repo from day one.</p>
            </div>

            <div className="bg-[#0B0F19] p-6 rounded-2xl border border-white/5 hover:border-emerald-500/30 transition-all group">
              <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Clock className="text-emerald-500" size={24} />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">Clockify / Harvest</h3>
              <p className="text-slate-400 text-sm">Transparent time-tracking reports. Pay only for hours worked.</p>
            </div>
          </div>
        </div>
      </section>

      {/* 7. Nearshore Advantage (Existing) */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">We Work While You Work.</h2>
              <p className="text-slate-400 text-base md:text-lg mb-8 leading-relaxed">
                Solve problems in minutes via Zoom, not days via Email. Our developers are in your timezone, ready to collaborate in real-time.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center shrink-0 border border-red-500/20">
                    <Clock size={20} className="text-red-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Traditional Offshore (Asia)</h4>
                    <p className="text-slate-400 text-sm">12h delay. You sleep, they work. Feedback loop = 24h.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-emerald-500/10 flex items-center justify-center shrink-0 border border-emerald-500/20">
                    <Zap size={20} className="text-emerald-500" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-1">Gimmir Nearshore (LatAm/EU)</h4>
                    <p className="text-slate-400 text-sm">4-8h overlap. Real-time collaboration. Agile ready.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Visual Timeline Comparison */}
            <div className="bg-[#0B0F19] p-5 md:p-8 rounded-3xl border border-white/10 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#0062d1]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
              
              <div className="space-y-6 md:space-y-8 relative z-10">
                {/* US Time */}
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="w-12 md:w-16 text-right text-xs md:text-sm font-mono text-slate-500">US (EST)</div>
                  <div className="flex-1 h-6 md:h-8 bg-white/5 rounded-full overflow-hidden flex">
                    <div className="w-1/3 h-full bg-slate-800"></div>
                    <div className="w-1/3 h-full bg-emerald-500/20 border-x border-emerald-500/30 flex items-center justify-center text-[8px] md:text-[10px] text-emerald-500 font-bold tracking-wider">WORK DAY</div>
                    <div className="w-1/3 h-full bg-slate-800"></div>
                  </div>
                </div>

                {/* Gimmir Time */}
                <div className="flex items-center gap-2 md:gap-4">
                  <div className="w-12 md:w-16 text-right text-xs md:text-sm font-mono text-[#0062d1]">Gimmir</div>
                  <div className="flex-1 h-6 md:h-8 bg-white/5 rounded-full overflow-hidden flex">
                    <div className="w-1/4 h-full bg-slate-800"></div>
                    <div className="w-1/3 h-full bg-[#0062d1]/20 border-x border-[#0062d1]/30 flex items-center justify-center text-[8px] md:text-[10px] text-[#0062d1] font-bold tracking-wider">OVERLAP</div>
                    <div className="w-5/12 h-full bg-slate-800"></div>
                  </div>
                </div>

                {/* Asia Time */}
                <div className="flex items-center gap-2 md:gap-4 opacity-50">
                  <div className="w-12 md:w-16 text-right text-xs md:text-sm font-mono text-slate-500">Asia</div>
                  <div className="flex-1 h-6 md:h-8 bg-white/5 rounded-full overflow-hidden flex">
                    <div className="w-2/3 h-full bg-slate-800"></div>
                    <div className="w-1/3 h-full bg-red-500/10 border-l border-red-500/20 flex items-center justify-center text-[8px] md:text-[10px] text-red-500 font-bold tracking-wider">SLEEP</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Integration Process (Existing) */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5 bg-[#050810]">
        <div className="max-w-7xl mx-auto">
          <SectionHeader 
            title="Seamless Onboarding" 
            subtitle="From first contact to first commit in less than 2 weeks."
          />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Culture Match", desc: "We understand your stack and team culture to find the perfect fit." },
              { step: "02", title: "Technical Interview", desc: "You grill them. Test their code, logic, and communication skills." },
              { step: "03", title: "Legal & Security", desc: "NDA signing, device setup, and access provisioning." },
              { step: "04", title: "Day 1 Deploy", desc: "They join your repo, attend standup, and start coding." }
            ].map((phase, i) => (
              <div key={i} className="relative group">
                <div className="w-14 h-14 md:w-16 md:h-16 bg-[#0B0F19] border border-white/10 rounded-2xl flex items-center justify-center text-lg md:text-xl font-bold text-slate-700 group-hover:text-[#0062d1] group-hover:border-[#0062d1] transition-all duration-300 mb-6 shadow-lg">
                  {phase.step}
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{phase.title}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{phase.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 9. FAQ (Expanded) */}
      <section className="py-20 md:py-32 px-4 md:px-6 border-t border-white/5">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-8 md:mb-12 text-center">Common Founder Questions</h2>
          <div className="space-y-4 md:space-y-6">
            {[
              { q: "What if the developer isn't a culture fit?", a: "We replace them for free in the first 2 weeks. No questions asked. We maintain a bench of pre-vetted talent so replacements are fast." },
              { q: "Do you charge for Project Management?", a: "Basic oversight and the 'Fractional Tech Lead' are included in the margin. If you need a dedicated full-time Project Manager, that is an optional add-on." },
              { q: "How do you handle timezones?", a: "We align working hours to overlap at least 4-6 hours with your HQ. Our developers in LatAm and Europe work during your business day." },
              { q: "I'm non-technical. How do I manage them?", a: "You don't have to. Our Fractional Tech Lead handles the code quality and technical direction. You just focus on the product vision." },
              { q: "Do you take equity?", a: "No. We are a service partner. You keep 100% of your company's equity and IP." }
            ].map((faq, i) => (
              <div key={i} className="bg-[#0B0F19] p-6 md:p-8 rounded-2xl border border-white/5 hover:border-white/10 transition-colors">
                <h3 className="text-base md:text-lg font-bold text-white mb-2 md:mb-3">{faq.q}</h3>
                <p className="text-slate-400 text-sm leading-relaxed">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 10. CTA Section */}
      <section className="relative py-16 md:py-40 px-4 md:px-6 overflow-hidden border-t border-white/5 bg-[#050A14]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0062d1]/10 blur-[120px] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <h2 className="text-4xl md:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight tracking-tight">
            Stop Searching. <br />
            <span className="text-slate-500">Start Coding.</span>
          </h2>
          
          <p className="text-base md:text-xl text-slate-400 mb-8 md:mb-16 max-w-2xl mx-auto font-light leading-relaxed">
            Get a custom team proposal and cost estimate today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <Link href="/estimate?mode=dedicated" className="w-full sm:w-auto px-8 md:px-12 py-4 md:py-6 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold text-lg md:text-xl rounded-xl transition-all shadow-[0_0_30px_-5px_rgba(0,98,209,0.4)] flex items-center justify-center gap-3 group hover:scale-105">
              <span>Calculate Team Cost</span>
              <ArrowRight size={24} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>

      <GlobalContactSection />
    </div>
  );
}
