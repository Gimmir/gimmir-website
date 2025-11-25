'use client';

import React from 'react';
import { FileKey, GitBranch, Cloud, Layout } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function DeliverablesSection() {
  return (
    <section className="py-24 px-6 border-b border-white/5 bg-[#080C14] overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="The 'Anti-Lock-in' Deliverables" 
          subtitle="You Own The Source. All of It. We eliminate the risk of 'Hostage Code'."
          badge="IP Ownership"
          badgeIcon={FileKey}
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Source Code */}
          <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-[#0062d1]/50 transition-all duration-500 flex flex-col shadow-lg shadow-black/20">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0062d1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
             
             {/* Visual: Terminal */}
             <div className="h-48 bg-[#050810] border-b border-white/5 relative overflow-hidden p-6 flex items-center justify-center">
                 <div className="w-full max-w-[260px] bg-[#0B0F19] border border-white/10 rounded-lg p-4 font-mono text-[10px] shadow-xl transform group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/5">
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
                <h3 className="text-xl font-bold text-white mb-3">Source Code</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Full Git history (not just a zip file). You see every commit, branch, and pull request.</p>
             </div>
          </div>

          {/* Card 2: Infrastructure as Code */}
          <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-[#0062d1]/50 transition-all duration-500 flex flex-col shadow-lg shadow-black/20">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0062d1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

             {/* Visual: Terraform/Config */}
             <div className="h-48 bg-[#050810] border-b border-white/5 relative overflow-hidden p-6 flex items-center justify-center">
                <div className="w-full max-w-[260px] bg-[#0B0F19] border border-white/10 rounded-lg p-4 font-mono text-[10px] shadow-xl transform group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/5 relative">
                   <div className="absolute top-3 right-3 text-[8px] text-slate-600 border border-white/5 px-1.5 py-0.5 rounded">TF</div>
                   <div className="space-y-1">
                      <div><span className="text-purple-400">resource</span> <span className="text-green-400">&quot;aws_s3_bucket&quot;</span> <span className="text-white">&quot;b&quot;</span> {'{'}</div>
                      <div className="pl-4"><span className="text-blue-300">bucket</span> = <span className="text-yellow-200">&quot;my-tf-bucket&quot;</span></div>
                      <div className="pl-4"><span className="text-blue-300">acl</span>    = <span className="text-yellow-200">&quot;private&quot;</span></div>
                      <div className="pl-4 mb-1"><span className="text-slate-500"># Infrastructure as Code</span></div>
                      <div>{'}'}</div>
                   </div>
                </div>
             </div>

             <div className="p-8 relative z-10 flex-grow">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-5 text-white group-hover:bg-[#0062d1] transition-colors">
                   <Cloud size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Infrastructure as Code</h3>
                <p className="text-slate-400 text-sm leading-relaxed">Terraform/CloudFormation scripts. Recreate your entire server infrastructure with one click.</p>
             </div>
          </div>

          {/* Card 3: Design Assets */}
          <div className="group relative bg-[#0B0F19] border border-white/10 rounded-2xl overflow-hidden hover:border-[#0062d1]/50 transition-all duration-500 flex flex-col shadow-lg shadow-black/20">
             <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0062d1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

             {/* Visual: Figma UI */}
             <div className="h-48 bg-[#050810] border-b border-white/5 relative overflow-hidden p-6 flex items-center justify-center">
                 <div className="w-full max-w-[260px] h-full bg-[#0B0F19] border border-white/10 rounded-lg shadow-xl transform group-hover:scale-105 transition-transform duration-500 ring-1 ring-white/5 flex overflow-hidden">
                    {/* Sidebar */}
                    <div className="w-16 border-r border-white/5 bg-white/[0.02] p-2 space-y-2">
                       <div className="w-8 h-1 bg-white/10 rounded-full mb-3"></div>
                       <div className="w-full h-1.5 bg-blue-500/20 rounded"></div>
                       <div className="w-3/4 h-1.5 bg-white/5 rounded"></div>
                       <div className="w-full h-1.5 bg-white/5 rounded"></div>
                       <div className="w-1/2 h-1.5 bg-white/5 rounded"></div>
                    </div>
                    {/* Main Canvas */}
                    <div className="flex-1 p-3 relative">
                       <div className="absolute top-3 left-3 right-3 h-24 border border-white/5 border-dashed rounded flex items-center justify-center">
                          <div className="flex gap-2">
                             <div className="w-4 h-4 rounded-full bg-purple-500/20"></div>
                             <div className="w-4 h-4 rounded-full bg-emerald-500/20"></div>
                             <div className="w-4 h-4 rounded-full bg-orange-500/20"></div>
                          </div>
                       </div>
                       <div className="absolute bottom-3 right-3 flex gap-1">
                          <div className="w-2 h-2 rounded-full bg-white/20"></div>
                          <div className="w-2 h-2 rounded-full bg-[#0062d1]"></div>
                       </div>
                    </div>
                 </div>
             </div>

             <div className="p-8 relative z-10 flex-grow">
                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center mb-5 text-white group-hover:bg-[#0062d1] transition-colors">
                   <Layout size={20} />
                </div>
                <h3 className="text-xl font-bold text-white mb-3">Design Assets</h3>
                <p className="text-slate-400 text-sm leading-relaxed">All Figma files and Design Systems. No missing layers. You get the raw editable files.</p>
             </div>
          </div>

        </div>
      </div>
    </section>
  );
}
