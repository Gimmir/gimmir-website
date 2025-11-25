'use client';

import React from 'react';
import { ShieldCheck, CheckCircle2 } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function SecuritySection() {
  const steps = [
    { name: "OWASP Top 10", desc: "Built-in mitigation for SQL Injection, XSS, CSRF." },
    { name: "Data Encryption", desc: "AES-256 for rest, TLS 1.3 for transit." },
    { name: "Secrets Mgmt", desc: "Vault / AWS Secrets. No hardcoded keys." },
    { name: "GDPR/CCPA", desc: "\"Privacy by Design\" architecture." }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#080C14] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="Security & Compliance" 
          subtitle="The 'Bank-Grade' Checklist. We assume you will be audited."
          badge="Audit Ready"
          badgeIcon={ShieldCheck}
        />
        
        <div className="relative">
          {/* Desktop Line */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-white/10 z-0"></div>
          
          {/* Mobile Vertical Line - Visible on small screens */}
          <div className="md:hidden absolute top-6 bottom-6 left-6 w-px bg-gradient-to-b from-emerald-500/0 via-emerald-500/50 to-emerald-500/0 -translate-x-1/2 z-0"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex md:flex-col items-start md:items-center text-left md:text-center">
                {/* Icon Container */}
                <div className="w-12 h-12 rounded-full bg-[#050810] border-2 border-emerald-500 text-emerald-400 font-bold flex items-center justify-center mb-4 shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.4)] mx-0 md:mx-auto mr-5 relative z-10">
                  <CheckCircle2 size={24} />
                </div>
                {/* Content Card */}
                <div className="flex-1 bg-[#0B0F19] md:bg-transparent p-5 md:p-0 rounded-xl border border-white/10 md:border-none shadow-lg md:shadow-none relative w-full md:w-auto -top-2 md:top-0">
                  <h3 className="text-white font-bold mb-1 text-lg md:text-base">{step.name}</h3>
                  <p className="text-slate-400 text-sm md:text-xs leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
