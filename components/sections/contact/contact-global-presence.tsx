'use client';

import React, { useState } from 'react';
import { Building2, Check, Clock, Code2, Copy, Server, Shield } from 'lucide-react';

export function ContactGlobalPresenceSection() {
  const [copiedAddress, setCopiedAddress] = useState<string | null>(null);

  const handleCopyAddress = (e: React.MouseEvent, address: string) => {
    e.stopPropagation();
    
    const textArea = document.createElement("textarea");
    textArea.value = address;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopiedAddress(address);
      setTimeout(() => setCopiedAddress(null), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    
    document.body.removeChild(textArea);
  };

  const locations = [
    {
      region: "USA (HQ & Legal)",
      focus: "Legal & Contracts",
      desc: "Our US legal entity for contracting and IP protection.",
      address: "800 N King St, Suite 304 #3789, Wilmington, DE, USA",
      icon: Building2,
      accent: "text-blue-400",
      statusColor: "bg-blue-500"
    },
    {
      region: "LATAM (Nearshore Hub)",
      focus: "Real-Time Collaboration",
      desc: "Strategic hub for synchronous work with US clients (CST/EST).",
      address: "Avenida Adolfo Lopez Mateos Norte 95, Guadalajara, 44648, Mexico",
      icon: Clock,
      accent: "text-amber-400",
      statusColor: "bg-amber-500"
    },
    {
      region: "EMEA (Compliance)",
      focus: "GDPR & Backoffice",
      desc: "EU legal foundation and financial accountability.",
      address: "Katusepapi tn 6-502, 11412, Tallinn, Estonia",
      icon: Shield,
      accent: "text-emerald-400",
      statusColor: "bg-emerald-500"
    },
    {
      region: "EU (Engineering)",
      focus: "Nearshore Talent Hub",
      desc: "Nearshore Talent Hub and collaboration in the European time zone.",
      address: "C/ de Joan Verdeguer, 116, 46024, Valencia, Spain",
      icon: Code2,
      accent: "text-purple-400",
      statusColor: "bg-purple-500"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#050A14] border-t border-white/5 relative overflow-hidden">
      {/* Background - No Grid */}
      <div className="absolute inset-0 bg-[#050A14] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-slate-400 text-xs font-mono uppercase tracking-wider mb-6">
             <Server size={12} className="text-[#0062d1]" />
             <span>Physical Infrastructure</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Our Engineering Network.
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            Verifiable physical presence ensuring legal protection and operational stability.
          </p>
        </div>

        {/* Nodes List / Terminal Style */}
        <div className="flex flex-col gap-4">
          
          {/* Table Header (Desktop) */}
          <div className="hidden md:grid grid-cols-12 gap-4 px-6 py-3 border-b border-white/10 text-[10px] font-mono text-slate-500 uppercase tracking-widest">
            <div className="col-span-3">Network Node</div>
            <div className="col-span-3">Primary Function</div>
            <div className="col-span-5">Physical Coordinates</div>
            <div className="col-span-1 text-right">Status</div>
          </div>

          {/* Rows */}
          {locations.map((loc, index) => (
            <div 
              key={index}
              className="group relative bg-[#0B0F19] border border-white/5 rounded-xl overflow-hidden hover:border-white/10 transition-all hover:bg-[#0F1421]"
            >
              <div className="md:grid md:grid-cols-12 md:gap-4 p-6 flex flex-col gap-4 items-start md:items-center">
                
                {/* Node / Region */}
                <div className="col-span-3 flex items-center gap-4">
                  <div className={`p-2 rounded-lg bg-white/5 border border-white/5 ${loc.accent}`}>
                    <loc.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-white font-bold text-sm md:text-base">{loc.region}</h3>
                    <p className="text-slate-500 text-[10px] md:hidden mt-1">{loc.desc}</p>
                  </div>
                </div>

                {/* Function */}
                <div className="col-span-3">
                  <span className={`inline-block px-2 py-1 rounded text-[10px] font-mono uppercase tracking-wider bg-white/5 border border-white/5 ${loc.accent}`}>
                    {loc.focus}
                  </span>
                  <p className="hidden md:block text-slate-500 text-[10px] mt-2 leading-tight">
                    {loc.desc}
                  </p>
                </div>

                {/* Address */}
                <div className="col-span-5 w-full">
                  <div className="flex items-center justify-between md:justify-start gap-3 bg-[#020408] border border-white/5 rounded-lg p-3 group-hover:border-white/10 transition-colors">
                    <span className="text-[11px] font-mono text-slate-400 truncate w-full select-all">
                      {loc.address}
                    </span>
                    <button 
                      onClick={(e) => handleCopyAddress(e, loc.address)}
                      className="text-slate-500 hover:text-white transition-colors"
                      title="Copy Address"
                    >
                      {copiedAddress === loc.address ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
                    </button>
                  </div>
                </div>

                {/* Status */}
                <div className="col-span-1 flex items-center justify-end w-full md:w-auto mt-2 md:mt-0">
                  <div className="flex items-center gap-2 px-2 py-1 rounded-full bg-white/5 border border-white/5">
                    <div className={`w-1.5 h-1.5 rounded-full ${loc.statusColor} animate-pulse`}></div>
                    <span className="text-[10px] font-bold text-slate-300 uppercase tracking-wider">Online</span>
                  </div>
                </div>

              </div>
              
              {/* Hover Glow */}
              <div className={`absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-transparent via-${loc.accent.split('-')[1]}-500 to-transparent opacity-0 group-hover:opacity-100 transition-opacity`}></div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}
