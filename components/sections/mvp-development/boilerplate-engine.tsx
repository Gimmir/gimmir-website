'use client';

import React from 'react';
import { Lock, CreditCard, LayoutDashboard, Server } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function BoilerplateEngineSection() {
  const modules = [
    {
      id: 'MODULE_AUTH',
      icon: Lock,
      title: 'Secure Auth System',
      desc: 'Pre-built secure login (SSO, 2FA, Biometrics).',
      color: 'text-blue-400',
      bg: 'bg-blue-500/10',
      border: 'border-blue-500/20'
    },
    {
      id: 'MODULE_PAY',
      icon: CreditCard,
      title: 'Payments Infrastructure',
      desc: 'Stripe/Adyen/LemonSqueezy integration ready.',
      color: 'text-purple-400',
      bg: 'bg-purple-500/10',
      border: 'border-purple-500/20'
    },
    {
      id: 'MODULE_ADMIN',
      icon: LayoutDashboard,
      title: 'Admin Dashboard',
      desc: 'Role-based dashboards for your operations team.',
      color: 'text-emerald-400',
      bg: 'bg-emerald-500/10',
      border: 'border-emerald-500/20'
    },
    {
      id: 'MODULE_INFRA',
      icon: Server,
      title: 'Cloud Infrastructure',
      desc: 'Auto-scaling AWS/Terraform setup out of the box.',
      color: 'text-orange-400',
      bg: 'bg-orange-500/10',
      border: 'border-orange-500/20'
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050810] border-b border-white/5">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Speed via Architecture, Not Shortcuts." 
          subtitle="We start every project at 40% completion using our proprietary, battle-tested boilerplates. We spend budget on your USP, not on re-inventing the login form."
          badge="The Boilerplate Engine"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {modules.map((mod) => (
            <div key={mod.id} className="bg-[#0B0F19] border border-white/5 rounded-xl p-6 hover:border-white/20 transition-all group">
               <div className="flex justify-between items-start mb-4">
                  <div className={`p-2 rounded-lg ${mod.bg} ${mod.color} ${mod.border} border`}>
                     <mod.icon size={20} />
                  </div>
                  <span className="text-[10px] font-mono text-slate-600">{mod.id}</span>
               </div>
               <h3 className="text-white font-bold mb-2 group-hover:text-[#0062d1] transition-colors">{mod.title}</h3>
               <p className="text-slate-400 text-sm leading-relaxed">{mod.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
