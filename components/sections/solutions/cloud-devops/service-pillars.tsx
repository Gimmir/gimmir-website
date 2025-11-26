'use client';

import React from 'react';
import { Layers, Repeat, DollarSign, ShieldCheck, Server, TrendingDown } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function ServicePillarsSection() {
  const pillars = [
    {
      title: "Cloud Migration & Architecture",
      desc: "Moving from legacy on-premise or chaotic VPS to structured Cloud (AWS/Azure/GCP). Focus on High Availability (Multi-AZ) and Disaster Recovery.",
      icon: Layers,
      stats: "99.99% Uptime Design",
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20"
    },
    {
      title: "CI/CD & Automation",
      desc: "Building \"One-Click Deploy\" pipelines via GitHub Actions/GitLab CI. Eliminating human error in deployments.",
      icon: Repeat,
      stats: "Zero-Touch Deploy",
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      title: "Cost Optimization (FinOps)",
      desc: "Analyzing hidden cloud costs and optimizing resources (Spot Instances, Auto-scaling).",
      val: "We typically lower cloud bills by 30-40%.",
      icon: DollarSign,
      stats: "-35% Avg Savings",
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      title: "Security & Compliance (DevSecOps)",
      desc: "Implementing WAF, DDoS protection, and automated vulnerability scanning.",
      icon: ShieldCheck,
      stats: "Automated Audits",
      color: "text-orange-400",
      bg: "bg-orange-500/10",
      border: "border-orange-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5 relative overflow-hidden">
       {/* Background decoration */}
       <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#0062d1]/5 blur-[120px] rounded-full pointer-events-none"></div>

       <div className="max-w-6xl mx-auto relative z-10">
          <SectionHeader 
             title="Technical Detalization" 
             subtitle="We cover the entire lifecycle of your infrastructure. From the first migration script to cost optimization at scale."
             badge="Service Pillars"
             badgeIcon={Server}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 lg:gap-6">
             {pillars.map((pillar, i) => (
                <div key={i} className={`group bg-[#0B0F19] border border-white/10 hover:border-white/20 p-6 rounded-xl transition-all duration-300 hover:shadow-lg shadow-black/20 flex flex-col sm:flex-row gap-5 items-start ${pillar.border} hover:border-opacity-50`}>
                   
                   {/* Icon - Compact */}
                   <div className={`w-12 h-12 rounded-lg ${pillar.bg} border ${pillar.border} flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform`}>
                      <pillar.icon size={22} className={pillar.color} />
                   </div>

                   <div className="flex-1">
                      <div className="flex flex-wrap justify-between items-start mb-2 gap-2">
                         <h3 className={`text-lg font-bold text-white group-hover:${pillar.color} transition-colors`}>{pillar.title}</h3>
                         <span className="text-[10px] font-mono text-slate-500 border border-white/10 bg-white/5 px-1.5 py-0.5 rounded whitespace-nowrap">{pillar.stats}</span>
                      </div>
                      
                      <p className="text-slate-400 text-sm leading-relaxed mb-3">
                         {pillar.desc}
                      </p>

                      {pillar.val && (
                         <div className="inline-flex items-center gap-1.5 text-xs font-medium text-emerald-400 bg-emerald-400/5 px-2 py-1 rounded border border-emerald-400/10">
                            <TrendingDown size={12} />
                            <span>{pillar.val}</span>
                         </div>
                      )}
                   </div>
                </div>
             ))}
          </div>
       </div>
    </section>
  );
}