'use client';

import React from 'react';
import { FileText, Check, GitBranch, Folder } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function FounderProtectionSection() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050810] border-b border-white/5 relative overflow-hidden">
      {/* Background Graphics */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute -top-[30%] -left-[10%] w-[600px] h-[600px] bg-[#0062d1]/10 rounded-full blur-[120px] mix-blend-screen"></div>
          <div className="absolute top-[20%] -right-[20%] w-[500px] h-[500px] bg-[#0062d1]/5 rounded-full blur-[100px] mix-blend-screen"></div>
          <div className="absolute -bottom-[40%] left-[10%] w-[800px] h-[800px] bg-[#0062d1]/5 rounded-full blur-[150px] mix-blend-screen"></div>
      </div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="You Own the Business. We Just Build It." 
          subtitle="Addressing the fear of losing control and IP theft. Our contracts are designed for US/EU jurisdiction."
          badge="Founder Protection Protocol"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
           {/* Card 1: IP Assignment */}
           <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-emerald-500/30 transition-all duration-500 shadow-lg shadow-black/20">
              {/* Graphic Top */}
              <div className="h-44 bg-[#050810] relative flex items-center justify-center overflow-hidden border-b border-white/5">
                  <div className="w-48 bg-[#0B0F19] border border-white/10 rounded-lg p-4 shadow-2xl relative z-10 group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/5">
                      <div className="flex justify-between items-center mb-3">
                          <div className="w-8 h-8 bg-white/5 rounded flex items-center justify-center border border-white/5"><FileText size={14} className="text-slate-400"/></div>
                          <div className="bg-emerald-500/10 text-emerald-400 text-[9px] font-bold px-1.5 py-0.5 rounded border border-emerald-500/20 tracking-wide">SIGNED</div>
                      </div>
                      <div className="space-y-2">
                         <div className="h-1.5 w-2/3 bg-slate-700 rounded-full"></div>
                         <div className="h-1.5 w-full bg-slate-800 rounded-full"></div>
                         <div className="h-1.5 w-4/5 bg-slate-800 rounded-full"></div>
                      </div>
                      <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2">
                          <div className="w-4 h-4 rounded-full bg-emerald-500/20 flex items-center justify-center"><Check size={8} className="text-emerald-400"/></div>
                          <span className="text-[9px] text-slate-500 font-mono">IP_Transfer_v1.pdf</span>
                      </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-8">
                 <h3 className="text-xl font-bold text-white mb-3">IP Assignment</h3>
                 <p className="text-slate-400 text-sm leading-relaxed">
                    Legal contracts ensuring you own 100% of the code, design, and assets from the moment they are created. Work-for-hire terms.
                 </p>
              </div>
           </div>

           {/* Card 2: No Black Box */}
           <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-500 shadow-lg shadow-black/20">
              {/* Graphic Top */}
               <div className="h-44 bg-[#050810] relative flex items-center justify-center overflow-hidden border-b border-white/5">
                  <div className="w-56 bg-[#0B0F19] border border-white/10 rounded-lg p-4 shadow-2xl relative z-10 font-mono text-[9px] group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/5">
                     <div className="flex items-center gap-2 text-slate-500 mb-3 border-b border-white/5 pb-2">
                        <GitBranch size={12} className="text-[#0062d1]" /> <span className="text-white">main branch</span>
                     </div>
                     <div className="space-y-2.5">
                        <div className="flex items-center gap-2">
                           <div className="w-1.5 h-1.5 rounded-full bg-blue-500 shadow-[0_0_5px_rgba(59,130,246,0.5)]"></div>
                           <span className="text-slate-300">feat: auth module impl</span>
                           <span className="text-[8px] text-slate-600 ml-auto">2m ago</span>
                        </div>
                        <div className="flex items-center gap-2 opacity-60">
                           <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                           <span className="text-slate-400">fix: database schema</span>
                           <span className="text-[8px] text-slate-600 ml-auto">1h ago</span>
                        </div>
                         <div className="flex items-center gap-2 opacity-40">
                           <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                           <span className="text-slate-400">chore: update deps</span>
                        </div>
                     </div>
                  </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               </div>
               <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3">No &quot;Black Box&quot;</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                     You are invited to our Jira and GitHub. Watch the commits in real-time. We build in your repository, not ours.
                  </p>
               </div>
           </div>

           {/* Card 3: Handover Ready */}
           <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-purple-500/30 transition-all duration-500 shadow-lg shadow-black/20">
               {/* Graphic Top */}
               <div className="h-44 bg-[#050810] relative flex items-center justify-center overflow-hidden border-b border-white/5">
                   <div className="w-48 bg-[#0B0F19] border border-white/10 rounded-lg p-4 shadow-2xl relative z-10 font-mono text-[10px] group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/5">
                      <div className="flex items-center gap-2 text-slate-400 mb-3">
                         <Folder size={12} className="text-purple-400" /> project-root
                      </div>
                      <div className="pl-2 space-y-2 border-l border-white/5 ml-1.5">
                         <div className="flex items-center gap-2 text-slate-500">
                            <div className="w-3 h-0.5 bg-slate-700"></div>
                            <span className="text-slate-400">/src</span>
                         </div>
                         <div className="flex items-center gap-2 text-slate-500">
                            <div className="w-3 h-0.5 bg-slate-700"></div>
                            <span className="text-slate-400">/docs</span>
                         </div>
                         <div className="flex items-center gap-2 text-white bg-white/5 p-1 rounded border border-white/5 -ml-1">
                            <div className="w-3 h-0.5 bg-purple-400"></div>
                            <span className="text-purple-200">README.md</span>
                         </div>
                      </div>
                   </div>
                   <div className="absolute inset-0 bg-gradient-to-t from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
               </div>
               <div className="p-8">
                  <h3 className="text-xl font-bold text-white mb-3">Handover Ready</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                     We document code assuming you will hire an in-house team tomorrow. Zero lock-in. We help you transition when ready.
                  </p>
               </div>
           </div>
        </div>
      </div>
    </section>
  );
}
