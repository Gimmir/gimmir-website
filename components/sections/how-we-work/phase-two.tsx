import React from 'react';
import { MessageSquare, Lock, ShieldCheck, CheckCircle2 } from 'lucide-react';

export function PhaseTwoSection() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-[#080C14] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
            <span className="text-xs font-mono text-slate-400 uppercase tracking-wider">Phase II: The Core</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Quality Gateways: <br />
            <span className="text-emerald-400">Anti-Debt Measures.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Our workflow is designed to prevent the "Maintenance Nightmare".
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Synchronous Collaboration */}
          <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Synchronous Collaboration</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
              Daily standups scheduled within the 4-8 hour overlap window. Real-time problem solving, not email tag.
            </p>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span>Daily Zoom Standups</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span>Slack Connect Channels</span>
              </li>
            </ul>
          </div>

          {/* The Code Review Gateway */}
          <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 group relative overflow-hidden">
             <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 rounded-full blur-[60px] pointer-events-none"></div>
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform relative z-10">
              <Lock size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">The Code Review Gateway</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 relative z-10">
              All Pull Requests (PRs) require two senior approvals and must pass static analysis before merging.
            </p>
            <div className="relative z-10 bg-black/40 rounded-lg p-3 border border-white/5 font-mono text-[10px] text-slate-400">
              <div className="flex justify-between mb-1">
                 <span>PR #402</span>
                 <span className="text-yellow-400">Reviewing...</span>
              </div>
              <div className="flex items-center gap-2 text-emerald-400">
                 <CheckCircle2 size={10} />
                 <span>2 Senior Approvals Required</span>
              </div>
            </div>
          </div>

          {/* Automated QA */}
          <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-8 hover:border-emerald-500/30 transition-all duration-300 group">
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-6 group-hover:scale-110 transition-transform">
              <ShieldCheck size={24} />
            </div>
            <h3 className="text-xl font-bold text-white mb-4">Automated QA</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-6">
               Unit Tests (70%+ coverage), Integration Tests, and E2E Tests (Cypress) must pass.
            </p>
             <ul className="space-y-3">
              <li className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                <div className="w-full bg-white/5 h-1.5 rounded-full overflow-hidden flex-1">
                   <div className="w-[75%] h-full bg-emerald-500 rounded-full"></div>
                </div>
                <span>75% Cov.</span>
              </li>
              <li className="flex items-center gap-3 text-xs text-slate-500 font-mono">
                <CheckCircle2 size={14} className="text-emerald-500" />
                <span>Cypress E2E Suite</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
