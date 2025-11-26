'use client';

import React from 'react';
import { Cloud, Box, FileCode, Activity, Cpu } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

export function TechStackSection() {
  const stack = [
    {
      category: "Cloud Providers",
      techs: ["AWS", "Google Cloud", "Azure", "DigitalOcean"],
      icon: Cloud,
      color: "text-sky-400",
      bg: "bg-sky-500/10",
      border: "border-sky-500/20"
    },
    {
      category: "Containerization",
      techs: ["Docker", "Kubernetes (K8s)"],
      icon: Box,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      category: "IaC",
      techs: ["Terraform", "Ansible"],
      icon: FileCode,
      color: "text-purple-400",
      bg: "bg-purple-500/10",
      border: "border-purple-500/20"
    },
    {
      category: "Monitoring",
      techs: ["Prometheus", "Grafana", "Datadog"],
      icon: Activity,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto">
          <SectionHeader 
             title="The Cloud Native Stack."
             subtitle="Our preferred toolkit for building resilient infrastructure."
             badge="The Toolkit"
             badgeIcon={Cpu}
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
             {stack.map((item, i) => (
                <div key={i} className={`group bg-[#0B0F19] border border-white/10 hover:border-white/20 p-6 rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-lg shadow-black/20 flex flex-col ${item.border} hover:border-opacity-50`}>
                    <div className="mb-5">
                       <div className={`w-12 h-12 rounded-lg ${item.bg} border ${item.border} flex items-center justify-center text-white group-hover:scale-110 transition-transform`}>
                          <item.icon size={22} className={item.color} />
                       </div>
                    </div>
                    
                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-white transition-colors">{item.category}</h3>
                    
                    <div className="flex flex-wrap gap-2 mt-auto">
                       {item.techs.map((tech, idx) => (
                          <span key={idx} className="text-[10px] font-mono text-slate-400 border border-white/10 bg-white/5 px-2 py-1 rounded hover:text-white hover:border-white/20 transition-colors">
                             {tech}
                          </span>
                       ))}
                    </div>
                </div>
             ))}
          </div>
      </div>
    </section>
  );
}