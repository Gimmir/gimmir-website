'use client';

import React from 'react';
import { ShieldCheck, CreditCard, Key, FileCode, Lock, Cloud, Database } from 'lucide-react';

export function RootAccessProtocolSection() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-[#080C14] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* Text Content */}
        <div>
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-6">
              <ShieldCheck size={14} className="text-emerald-400" />
              <span className="text-xs font-mono text-emerald-300 uppercase tracking-wider">The Core Guarantee</span>
           </div>
           <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              You Hold the Keys.
           </h2>
           <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              We solve the "Code Hostage" problem by default. We work on your infrastructure, using your credentials. You can revoke our access at any second.
           </p>

           <div className="space-y-6">
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center shrink-0 text-blue-400">
                    <CreditCard size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-bold text-lg">Direct Billing</h4>
                    <p className="text-slate-400 text-sm mt-1">We set up infrastructure on YOUR accounts (AWS/GCP org). You pay the provider directly, ensuring ownership.</p>
                 </div>
              </div>
              
              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 text-emerald-400">
                    <Key size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-bold text-lg">Root Access</h4>
                    <p className="text-slate-400 text-sm mt-1">You maintain root/admin privileges at all times. We are just guests in your house.</p>
                 </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center shrink-0 text-purple-400">
                    <FileCode size={24} />
                 </div>
                 <div>
                    <h4 className="text-white font-bold text-lg">Infrastructure as Code (IaC)</h4>
                    <p className="text-slate-400 text-sm mt-1">We deliver Terraform scripts. Your entire setup is documented code, portable and reproducible. No "magic click-ops".</p>
                 </div>
              </div>
           </div>
        </div>

        {/* Visual Concept: Open Vault / Keys Schematic - Improved Mobile Responsiveness */}
        <div className="relative mt-12 lg:mt-0">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent rounded-3xl blur-2xl -z-10"></div>
            <div className="bg-[#0B0F19] border border-white/10 rounded-3xl p-4 sm:p-8 shadow-2xl relative overflow-hidden group hover:border-emerald-500/30 transition-all duration-500">
                
                {/* Header of the Visual */}
                <div className="flex justify-between items-center mb-6 sm:mb-8 border-b border-white/5 pb-4">
                   <div className="flex items-center gap-2 text-[10px] sm:text-xs font-mono text-slate-400">
                      <Lock size={14} />
                      <span className="tracking-tight">ACCESS_CONTROL_POLICY</span>
                   </div>
                   <div className="flex items-center gap-2 bg-emerald-500/10 border border-emerald-500/20 px-2 py-1 rounded text-[10px] text-emerald-400 font-bold whitespace-nowrap">
                      STATUS: GRANTED
                   </div>
                </div>

                {/* Main Visual Elements */}
                <div className="space-y-3 sm:space-y-4">
                   {/* Item 1 */}
                   <div className="bg-[#050810] rounded-xl p-3 sm:p-4 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/item">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-blue-500/20 rounded text-blue-400 shrink-0"><Cloud size={18} /></div>
                         <div className="text-xs">
                            <div className="text-white font-bold">AWS Organization</div>
                            <div className="text-slate-500 text-[10px] sm:text-xs">ID: 8492-xxxx-xxxx</div>
                         </div>
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400 bg-emerald-400/5 px-2 py-1 rounded border border-emerald-400/10 text-center sm:text-right w-full sm:w-auto">OWNER: CLIENT</div>
                   </div>

                   {/* Item 2 */}
                   <div className="bg-[#050810] rounded-xl p-3 sm:p-4 border border-white/5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 group/item">
                      <div className="flex items-center gap-3">
                         <div className="p-2 bg-purple-500/20 rounded text-purple-400 shrink-0"><Database size={18} /></div>
                         <div className="text-xs">
                            <div className="text-white font-bold">Production DB</div>
                            <div className="text-slate-500 text-[10px] sm:text-xs">Master Credentials</div>
                         </div>
                      </div>
                      <div className="text-[10px] font-mono text-emerald-400 bg-emerald-400/5 px-2 py-1 rounded border border-emerald-400/10 text-center sm:text-right w-full sm:w-auto">VAULT: CLIENT</div>
                   </div>

                   {/* Item 3 - Terraform */}
                   <div className="bg-[#050810] rounded-xl p-3 sm:p-4 border border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 left-0 w-1 h-full bg-emerald-500"></div>
                      <div className="font-mono text-[9px] sm:text-[10px] text-slate-400 leading-relaxed overflow-x-auto">
                         <div className="whitespace-nowrap"><span className="text-purple-400">resource</span> <span className="text-yellow-200">"aws_iam_role"</span> <span className="text-white">"admin"</span> {'{'}</div>
                         <div className="pl-4 whitespace-nowrap"><span className="text-blue-400">name</span> = <span className="text-emerald-300">"ClientAdmin"</span></div>
                         <div className="pl-4 whitespace-nowrap"><span className="text-slate-500"># Full Root Access retained by Client</span></div>
                         <div>{'}'}</div>
                      </div>
                   </div>
                </div>

                {/* Bottom Decoration */}
                <div className="mt-6 sm:mt-8 flex justify-center">
                    <div className="bg-[#050810] border border-white/10 rounded-full px-3 py-1.5 sm:px-4 sm:py-2 flex items-center gap-2 sm:gap-3 shadow-inner max-w-full">
                       <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-emerald-500 animate-pulse shrink-0"></div>
                       <span className="text-[10px] sm:text-xs text-slate-300 font-mono truncate">Secure Handover Protocol Active</span>
                    </div>
                </div>
            </div>
        </div>

      </div>
    </section>
  );
}