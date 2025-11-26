'use client';

import React from 'react';
import { ShieldCheck, Lock, FileCode } from 'lucide-react';

export function ComplianceShieldSection() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-[#080C14] relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Left: Text & Badges */}
            <div>
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6">
                    <ShieldCheck size={14} className="text-blue-400" />
                    <span className="text-xs font-mono text-blue-300 uppercase tracking-wider">Trust Signal</span>
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                    Regulatory Compliance <br/> <span className="text-[#0062d1]">by Design.</span>
                </h2>
                <p className="text-slate-400 text-lg mb-10 leading-relaxed">
                    We don't patch security in later. We build compliant environments from the first line of Terraform code. Ready for MedTech, FinTech, and Enterprise audits.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#0062d1]/50 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-[#0062d1]/10 flex items-center justify-center text-[#0062d1] font-bold text-xs group-hover:scale-110 transition-transform">
                            GDPR
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Europe</h4>
                            <p className="text-xs text-slate-500">Data Privacy & Sovereignty</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-emerald-500/50 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold text-xs group-hover:scale-110 transition-transform">
                            HIPAA
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Healthcare</h4>
                            <p className="text-xs text-slate-500">PHI Protection & Audit Logs</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-purple-500/50 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold text-xs group-hover:scale-110 transition-transform">
                            PCI-DSS
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Fintech</h4>
                            <p className="text-xs text-slate-500">Secure Payment Processing</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 border border-white/10 hover:border-orange-500/50 transition-colors group">
                        <div className="w-10 h-10 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-500 font-bold text-xs group-hover:scale-110 transition-transform">
                            SOC 2
                        </div>
                        <div>
                            <h4 className="text-white font-bold text-sm">Enterprise</h4>
                            <p className="text-xs text-slate-500">Security & Availability Controls</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Right: Visual Shield */}
            <div className="relative flex items-center justify-center h-[400px] lg:h-[500px]">
                {/* Animated Rings */}
                <div className="absolute w-[300px] h-[300px] rounded-full border border-white/5 animate-[spin_20s_linear_infinite]"></div>
                <div className="absolute w-[400px] h-[400px] rounded-full border border-white/5 animate-[spin_25s_linear_infinite_reverse]"></div>
                <div className="absolute w-[500px] h-[500px] rounded-full border border-white/5 animate-[spin_30s_linear_infinite]"></div>
                
                {/* Glow */}
                <div className="absolute inset-0 bg-[#0062d1]/10 blur-[80px] rounded-full pointer-events-none"></div>

                {/* Central Shield */}
                <div className="relative z-10 w-64 h-72 bg-gradient-to-b from-[#0B0F19] to-[#050810] border border-white/10 rounded-[3rem] flex flex-col items-center justify-center shadow-2xl shadow-blue-900/20">
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay rounded-[3rem]"></div>
                    
                    {/* Shield Logo / Icon */}
                    <div className="w-20 h-20 bg-[#0062d1] rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/30 mb-6 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-tr from-white/20 to-transparent"></div>
                        <ShieldCheck size={40} className="text-white" />
                    </div>

                    <div className="text-center px-6">
                        <div className="text-white font-bold text-lg mb-1">Secure Core</div>
                        <div className="text-slate-500 text-xs">Automated Compliance Checks</div>
                    </div>

                    {/* Floating Orbiting Items */}
                    <div className="absolute -top-4 -right-4 bg-[#1a1f2e] border border-white/10 p-2 rounded-lg shadow-xl animate-float-slow">
                        <Lock size={16} className="text-emerald-400" />
                    </div>
                     <div className="absolute -bottom-2 -left-4 bg-[#1a1f2e] border border-white/10 p-2 rounded-lg shadow-xl animate-float-delayed">
                        <FileCode size={16} className="text-purple-400" />
                    </div>
                </div>
            </div>

        </div>
      </div>
    </section>
  );
}