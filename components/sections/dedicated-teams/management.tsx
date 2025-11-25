import React from 'react';
import { Cpu, Zap } from 'lucide-react';

export function ManagementSection() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050A14]">
      <div className="max-w-6xl mx-auto bg-[#0B0F19] border border-white/10 rounded-3xl p-6 md:p-16 overflow-hidden relative shadow-2xl shadow-black/30">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#0062d1]/5 to-transparent pointer-events-none"></div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <div className="inline-flex items-center gap-2 text-[#0062d1] font-bold mb-4">
              <Cpu size={20} />
              <span className="uppercase tracking-widest text-xs">Management Layer</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Managed by Us, <br/> Directed by You.
            </h2>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Every dedicated unit includes oversight from a <span className="text-white font-medium">Fractional Tech Lead (at no extra cost)</span>. They perform weekly Code Reviews, enforce architectural standards, and ensure your developers never get stuck on technical &quot;blockers&quot;.
            </p>
            <div className="flex flex-wrap gap-3">
               {['Jira', 'Slack', 'GitHub/GitLab', 'Clockify'].map(tool => (
                 <span key={tool} className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs text-slate-300 font-mono flex items-center gap-2">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div> {tool}
                 </span>
               ))}
            </div>
          </div>
          <div className="relative">
             {/* Visual Rep of Management */}
             <div className="bg-[#080C14] border border-white/10 rounded-xl p-4 sm:p-6 font-mono text-xs text-slate-400 shadow-2xl ring-1 ring-white/5">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-white/10 pb-4 mb-4 gap-4 sm:gap-0">
                   <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-[#0062d1] flex items-center justify-center text-white font-bold shrink-0">TL</div>
                      <div>
                        <div className="text-white font-bold">Alex (Tech Lead)</div>
                        <div className="text-[10px]">Code Review • PR #420</div>
                      </div>
                   </div>
                   <span className="text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/10 w-fit">Approved</span>
                </div>
                <div className="space-y-2">
                   <p className="text-slate-500">// Tech Lead Comment:</p>
                   <p className="text-white">&quot;Logic looks solid. Refactored the API utility for better error handling. Merging to staging.&quot;</p>
                </div>
             </div>
             {/* Floating Element */}
             <div className="absolute -bottom-6 -right-6 bg-[#1a1f2e] border border-white/10 p-4 rounded-lg shadow-xl max-w-[200px] hidden sm:block ring-1 ring-white/5">
                <div className="flex items-center gap-2 mb-2">
                   <Zap size={14} className="text-yellow-400" />
                   <span className="text-white font-bold text-xs">Unblock Speed</span>
                </div>
                <div className="text-[10px] text-slate-400">Devs are unblocked in &lt;2 hours on average.</div>
             </div>
          </div>
        </div>
      </div>
    </section>
  );
}
