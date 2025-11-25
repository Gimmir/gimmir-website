'use client';

import React from 'react';
import { Layers, AlertTriangle, Database, Smartphone, Code2 } from 'lucide-react';

export function TechStackSection() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5">
      <div className="max-w-7xl mx-auto">
         {/* Header Area */}
         <div className="mb-12 text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6">
               <Layers size={12} className="text-[#0062d1]" />
               <span>Our Tech Stack</span>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Our &quot;Future-Proof&quot; Stack</h2>
            <p className="text-slate-400 text-lg">We choose technologies that scale. No vendor lock-in.</p>
         </div>

         <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            
            {/* Warning Card - Takes 4 columns on large screens */}
            <div className="lg:col-span-4 h-full">
               <div className="bg-yellow-500/5 border border-yellow-500/20 rounded-2xl p-8 h-full relative overflow-hidden group">
                  <div className="absolute right-0 top-0 w-32 h-32 bg-yellow-500/10 blur-[60px] rounded-full pointer-events-none"></div>
                  <div className="flex items-center gap-3 mb-6">
                     <AlertTriangle className="text-yellow-500" size={24} />
                     <h3 className="text-xl font-bold text-white">Why We Avoid &quot;No-Code&quot;</h3>
                  </div>
                  <p className="text-slate-400 text-sm leading-relaxed mb-6">
                     No-Code platforms create <strong>Vendor Lock-in</strong> and limit intellectual property ownership. You can&apos;t export the code, you can&apos;t host it yourself, and you hit limits fast.
                  </p>
                  <div className="text-xs font-mono text-yellow-500/80 bg-yellow-500/10 p-3 rounded border border-yellow-500/10">
                     WARNING: Investors often consider No-Code apps as &quot;Prototypes&quot;, not &quot;Product Assets&quot;.
                  </div>
               </div>
            </div>

            {/* Stack Cards - Takes 8 columns */}
            <div className="lg:col-span-8">
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  
                  {/* Card 1: Web Platform */}
                  <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-6 hover:border-[#0062d1]/50 transition-all group relative overflow-hidden">
                     <div className="relative z-10">
                        <div className="mb-4 text-[#0062d1] bg-[#0062d1]/10 w-fit p-3 rounded-lg"><Database size={24} /></div>
                        <h4 className="text-white font-bold mb-2 text-lg">Web Platform</h4>
                        <div className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">Next.js + Supabase</div>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-[260px]">Speed of No-Code, power of Enterprise. Server-side rendering for SEO.</p>
                     </div>
                     <div className="absolute -right-2 -bottom-6 w-32 h-24 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-2 group-hover:-translate-x-2">
                        <div className="w-full h-full bg-[#0B0F19] border border-white/10 rounded-tl-xl border-r-0 border-b-0 p-2 relative overflow-hidden">
                           <div className="absolute top-0 left-0 w-full h-6 bg-white/5 border-b border-white/5 flex items-center gap-1 px-2">
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                              <div className="w-1.5 h-1.5 rounded-full bg-slate-600"></div>
                              <div className="w-12 h-1.5 bg-white/10 rounded ml-2"></div>
                           </div>
                           <div className="mt-8 space-y-2 px-1">
                              <div className="w-3/4 h-2 bg-[#0062d1]/20 rounded animate-pulse"></div>
                              <div className="w-1/2 h-2 bg-slate-700/30 rounded"></div>
                              <div className="w-full h-16 bg-white/5 rounded border border-white/5 mt-2 flex items-center justify-center">
                                 <Database size={12} className="text-slate-600" />
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Card 2: Mobile App */}
                  <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-6 hover:border-purple-500/50 transition-all group relative overflow-hidden">
                     <div className="relative z-10">
                        <div className="mb-4 text-purple-500 bg-purple-500/10 w-fit p-3 rounded-lg"><Smartphone size={24} /></div>
                        <h4 className="text-white font-bold mb-2 text-lg">Mobile App</h4>
                        <div className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">React Native (Expo)</div>
                        <p className="text-xs text-slate-400 leading-relaxed max-w-[260px]">One codebase, two native apps (iOS & Android). Native performance.</p>
                     </div>
                     <div className="absolute -right-4 -bottom-8 w-24 h-32 opacity-40 group-hover:opacity-100 transition-all duration-500 group-hover:-translate-y-4 group-hover:-translate-x-2 rotate-12 group-hover:rotate-0">
                        <div className="w-full h-full bg-[#050810] border border-white/10 rounded-xl p-2 relative">
                           <div className="w-8 h-1 bg-white/10 rounded-full mx-auto mb-2"></div>
                           <div className="w-full h-20 bg-purple-500/10 rounded border border-purple-500/20 flex items-center justify-center">
                              <Code2 size={16} className="text-purple-400" />
                           </div>
                           <div className="mt-2 flex justify-around">
                              <div className="w-4 h-4 rounded-full bg-white/5"></div>
                              <div className="w-4 h-4 rounded-full bg-white/5"></div>
                              <div className="w-4 h-4 rounded-full bg-white/5"></div>
                           </div>
                        </div>
                     </div>
                  </div>

                  {/* Card 3: Backend Core */}
                  <div className="bg-[#0B0F19] border border-white/10 rounded-2xl p-6 hover:border-emerald-500/50 transition-all group relative overflow-hidden md:col-span-2">
                     <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-6">
                        <div className="flex-1">
                           <div className="mb-4 text-emerald-500 bg-emerald-500/10 w-fit p-3 rounded-lg"><Code2 size={24} /></div>
                           <h4 className="text-white font-bold mb-2 text-lg">Backend Core</h4>
                           <div className="text-xs font-mono text-slate-500 mb-3 uppercase tracking-wider">Python / Node.js</div>
                           <p className="text-xs text-slate-400 leading-relaxed">FastAPI or NestJS. Ready for complex logic and AI integration.</p>
                        </div>
                        <div className="w-full md:w-1/2 h-24 relative">
                           <div className="absolute right-0 bottom-0 w-full h-20 opacity-30 group-hover:opacity-80 transition-all duration-500 overflow-hidden">
                              <div className="w-full h-full bg-black/40 border-t border-emerald-500/20 p-3 font-mono text-[8px] text-emerald-500/80">
                                 <div className="animate-pulse">Starting backend services...</div>
                                 <div className="text-slate-500">[INFO] Database connected (0.02s)</div>
                                 <div className="text-slate-500">[INFO] Redis cache ready</div>
                                 <div className="text-emerald-400">[SUCCESS] Listening on :8080</div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>

               </div>
            </div>
         </div>
      </div>
    </section>
  );
}
