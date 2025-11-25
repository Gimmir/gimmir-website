import React from 'react';
import { Users2, MessageSquare, GitBranch, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function GuaranteeSection() {
  return (
    <section className="py-16 sm:py-24 px-6 border-b border-white/5 bg-[#080C14] overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-5xl h-[400px] bg-[#0062d1] opacity-[0.03] blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="The &quot;Anti-Bait & Switch&quot; Policy" 
          subtitle="Transparency isn't an add-on. It's the default setting."
          badge="Transparency Protocol"
          badgeIcon={ShieldCheck}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: You Interview */}
          <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-[#0062d1]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col shadow-lg shadow-black/20">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0062d1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             {/* Visual UI */}
             <div className="h-44 bg-[#050810] border-b border-white/5 relative overflow-hidden p-6 flex flex-col justify-center">
                <div className="bg-[#0B0F19] border border-white/10 rounded-lg p-3 shadow-lg transform group-hover:scale-105 transition-transform duration-500 relative z-10 w-full max-w-[240px] mx-auto ring-1 ring-white/5">
                   <div className="flex items-center gap-3 mb-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-slate-700 to-slate-800 border border-white/10 flex items-center justify-center text-[10px] font-bold text-slate-400 shadow-inner">IMG</div>
                      <div className="space-y-1.5 flex-grow">
                         <div className="h-2 w-20 bg-slate-700 rounded-full"></div>
                         <div className="h-1.5 w-12 bg-slate-800 rounded-full"></div>
                      </div>
                      <div className="bg-green-500/20 text-green-400 text-[8px] font-bold px-2 py-0.5 rounded border border-green-500/20 tracking-wide">HIRE</div>
                   </div>
                   <div className="space-y-2 pl-1">
                      <div className="flex items-center gap-2 text-[10px] text-slate-400">
                        <div className="w-3 h-3 rounded-full bg-[#0062d1]/20 flex items-center justify-center text-[#0062d1]"><CheckCircle2 size={8} /></div>
                        <span>System Design</span>
                      </div>
                      <div className="flex items-center gap-2 text-[10px] text-slate-400">
                        <div className="w-3 h-3 rounded-full bg-[#0062d1]/20 flex items-center justify-center text-[#0062d1]"><CheckCircle2 size={8} /></div>
                        <span>Live Coding</span>
                      </div>
                   </div>
                </div>
                <div className="absolute top-2 right-10 w-16 h-16 bg-[#0062d1] blur-[40px] opacity-20"></div>
             </div>

             <div className="p-8 relative z-10 flex-grow">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-5 text-white group-hover:bg-[#0062d1] transition-colors">
                  <Users2 size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">You Interview</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                   You conduct the final technical screening. The engineer you interview is the exact person logging into your Slack on Day 1. No last-minute swaps.
                </p>
             </div>
          </div>

          {/* Card 2: Direct Comms */}
          <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-[#0062d1]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col shadow-lg shadow-black/20">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0062d1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

             {/* Visual UI */}
             <div className="h-44 bg-[#050810] border-b border-white/5 relative overflow-hidden p-6 flex flex-col justify-center items-center">
                <div className="w-full max-w-[240px] space-y-3 transform group-hover:translate-y-[-2px] transition-transform duration-500">
                   <div className="flex gap-2">
                      <div className="w-6 h-6 rounded-full bg-slate-800 shrink-0 border border-white/5"></div>
                      <div className="bg-white/5 border border-white/5 rounded-2xl rounded-tl-none px-3 py-2 text-[10px] text-slate-300 shadow-sm">
                         Any blockers on the API?
                      </div>
                   </div>
                   <div className="flex gap-2 flex-row-reverse">
                      <div className="w-6 h-6 rounded-full bg-[#0062d1] shrink-0 flex items-center justify-center text-[8px] text-white font-bold border border-white/10">Dev</div>
                      <div className="bg-[#0062d1]/20 border border-[#0062d1]/30 rounded-2xl rounded-tr-none px-3 py-2 text-[10px] text-white shadow-sm">
                         Nope, PR is ready. Deploying. 🚀
                      </div>
                   </div>
                </div>
             </div>

             <div className="p-8 relative z-10 flex-grow">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-5 text-white group-hover:bg-[#0062d1] transition-colors">
                  <MessageSquare size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Direct Comms</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                   Zero "middle-man" lag. Speak directly to your engineers via Slack, Teams, or Discord. No account managers acting as &quot;translators&quot;.
                </p>
             </div>
          </div>

          {/* Card 3: Code Ownership */}
          <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-[#0062d1]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 flex flex-col shadow-lg shadow-black/20">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0062d1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

             {/* Visual UI */}
             <div className="h-44 bg-[#050810] border-b border-white/5 relative overflow-hidden p-6 flex items-center justify-center">
                 <div className="w-full max-w-[240px] bg-[#0B0F19] border border-white/10 rounded-lg p-4 font-mono text-[10px] shadow-lg group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/5">
                    <div className="flex gap-1.5 mb-3 opacity-50">
                       <div className="w-2 h-2 rounded-full bg-red-500"></div>
                       <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                       <div className="w-2 h-2 rounded-full bg-green-500"></div>
                    </div>
                    <div className="space-y-1.5">
                       <div className="text-slate-500 flex gap-2"><span>$</span> <span className="text-white">git remote -v</span></div>
                       <div className="text-emerald-400 break-all">origin git@github.com:org/repo.git</div>
                       <div className="text-slate-500 mt-2 flex gap-2"><span>$</span> <span className="text-white">git push origin main</span></div>
                       <div className="text-white/70"> <span className="text-[#0062d1]">➜</span> Pushed to production</div>
                    </div>
                 </div>
             </div>

             <div className="p-8 relative z-10 flex-grow">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-5 text-white group-hover:bg-[#0062d1] transition-colors">
                  <GitBranch size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Code Ownership</h3>
                <p className="text-slate-400 text-sm leading-relaxed">
                   We work on your infrastructure. Developers push code directly to your GitHub/GitLab repository from the very first commit. You hold the IP keys.
                </p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
