'use client';

import React, { useState } from 'react';
import { Briefcase, Calculator, Check, Copy, Mail, Phone, Scale, Users } from 'lucide-react';

export function ContactDirectAccessSection() {
  const [copiedEmail, setCopiedEmail] = useState<string | null>(null);

  const handleCopy = (e: React.MouseEvent, email: string) => {
    e.stopPropagation();
    
    const textArea = document.createElement("textarea");
    textArea.value = email;
    textArea.style.position = "fixed";
    textArea.style.opacity = "0";
    document.body.appendChild(textArea);
    textArea.select();
    
    try {
      document.execCommand('copy');
      setCopiedEmail(email);
      setTimeout(() => setCopiedEmail(null), 2000);
    } catch (err) {
      console.error('Failed to copy', err);
    }
    
    document.body.removeChild(textArea);
  };

  const contactPoints = [
    {
      title: "Business Inquiries",
      description: "New projects, partnerships & commercial proposals.",
      email: "business@gimmir.com",
      icon: Briefcase,
      accent: "text-[#0062d1]",
      bgAccent: "bg-[#0062d1]/10",
      borderAccent: "border-[#0062d1]/20"
    },
    {
      title: "General / Hello",
      description: "General questions and HR inquiries.",
      email: "hello@gimmir.com",
      icon: Users,
      accent: "text-emerald-400",
      bgAccent: "bg-emerald-400/10",
      borderAccent: "border-emerald-400/20"
    },
    {
      title: "Legal & Compliance",
      description: "Legal questions, compliance & NDA.",
      email: "legal@gimmir.com",
      icon: Scale,
      accent: "text-amber-400",
      bgAccent: "bg-amber-400/10",
      borderAccent: "border-amber-400/20"
    },
    {
      title: "Accounting",
      description: "Financial and billing inquiries.",
      email: "acc@gimmir.com",
      icon: Calculator,
      accent: "text-purple-400",
      bgAccent: "bg-purple-400/10",
      borderAccent: "border-purple-400/20"
    }
  ];

  return (
    <section className="py-24 px-6 bg-[#050A14] border-t border-white/5 relative overflow-hidden">
      {/* Background Decor - No Grid */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#0062d1]/50 to-transparent"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Global Hubs & Direct Contact.
          </h2>
          <p className="text-slate-400 text-lg font-light max-w-2xl mx-auto">
            Our multi-national structure ensures compliance and full timezone coverage.
          </p>
        </div>

        {/* Contact Grid & Phone Line */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Left Column: Email Grid */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {contactPoints.map((point, index) => (
              <div 
                key={index}
                className={`group p-6 rounded-2xl border border-white/10 bg-[#0B0F19] hover:bg-[#0F1421] transition-all hover:scale-[1.02] active:scale-[0.98] relative overflow-hidden`}
              >
                <div className={`absolute top-0 right-0 w-24 h-24 ${point.bgAccent} blur-[40px] rounded-full -translate-y-1/2 translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity`}></div>
                
                <div className="flex items-start gap-4 relative z-10">
                  <div className={`p-3 rounded-xl ${point.bgAccent} ${point.borderAccent} border`}>
                    <point.icon size={24} className={point.accent} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-white font-bold text-lg mb-1 group-hover:text-[#0062d1] transition-colors">
                      {point.title}
                    </h3>
                    <p className="text-slate-500 text-xs mb-3 leading-relaxed">
                      {point.description}
                    </p>
                    <div className="flex items-center gap-2">
                        <a href={`mailto:${point.email}`} className="inline-flex items-center gap-2 text-sm font-mono text-slate-300 group-hover:text-white transition-colors hover:underline">
                            <Mail size={14} />
                            <span>{point.email}</span>
                        </a>
                        <button 
                            onClick={(e) => handleCopy(e, point.email)}
                            className="p-1.5 rounded-md bg-white/5 hover:bg-white/10 text-slate-400 hover:text-white transition-all border border-transparent hover:border-white/10"
                            title="Copy email"
                        >
                            {copiedEmail === point.email ? (
                                <Check size={12} className="text-emerald-400" />
                            ) : (
                                <Copy size={12} />
                            )}
                        </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column: Phone Line & Hub Info */}
          <div className="lg:col-span-1 flex flex-col gap-4">
            
            {/* Phone Card */}
            <div className="p-8 rounded-2xl border border-[#0062d1]/30 bg-[#0062d1]/5 flex flex-col justify-center h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-10 pointer-events-none"></div>
              <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-[#0062d1]/20 rounded-full blur-[50px]"></div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#0062d1]/20 text-[#0062d1] text-xs font-bold uppercase tracking-wider mb-6">
                  <Phone size={12} />
                  <span>Emergency Line</span>
                </div>
                
                <h3 className="text-white font-bold text-xl mb-2">
                  Direct Phone Line
                </h3>
                <p className="text-slate-400 text-sm mb-8">
                  For urgent inquiries and critical escalation. Available 9AM - 6PM EST.
                </p>
                
                <a href="tel:+16509899772" className="text-2xl sm:text-3xl font-mono text-white font-bold tracking-tight hover:text-[#0062d1] transition-colors">
                  +1 650 98 99 772
                </a>
                <span className="block text-slate-500 text-xs font-mono mt-2 uppercase tracking-wider">
                  San Francisco, USA
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
