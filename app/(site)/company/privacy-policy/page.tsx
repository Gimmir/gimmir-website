'use client';

import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  Lock, 
  FileText, 
  Globe, 
  ChevronRight, 
  Eye, 
  Database, 
  Server,
  Scale,
  MapPin,
  Fingerprint,
  Activity
} from 'lucide-react';

// --- TABLE OF CONTENTS DATA ---
const SECTIONS = [
  { id: 'introduction', label: '1. Introduction' },
  { id: 'sovereignty', label: '2. Data Sovereignty' },
  { id: 'data-collection', label: '3. Information We Collect' },
  { id: 'data-usage', label: '4. Usage & Transfer' },
  { id: 'security', label: '5. Security Protocols' },
  { id: 'gdpr-rights', label: '6. Your GDPR Rights' },
  { id: 'cookies', label: '7. Cookies & Tracking' },
  { id: 'contact', label: '8. Contact DPO' },
];

export default function PrivacyPolicyPage() {
  const [activeSection, setActiveSection] = useState('introduction');

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120; // Increased offset for better spacing
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
      setActiveSection(id);
    }
  };

  // Scroll spy to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 200;

      for (const section of SECTIONS) {
        const element = document.getElementById(section.id);
        if (element && element.offsetTop <= scrollPosition && (element.offsetTop + element.offsetHeight > scrollPosition)) {
          setActiveSection(section.id);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-[#050A14] min-h-screen text-slate-300 selection:bg-[#0062d1] selection:text-white">
      
      {/* --- HERO SECTION --- */}
      <section className="relative pt-32 pb-20 px-6 border-b border-white/5 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#0062d1]/5 rounded-full blur-[120px] pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-6 animate-fade-in-up">
             <ShieldCheck size={12} />
             <span>// LEGAL_PROTOCOL_ACTIVATED</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Global Privacy Policy
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl font-light leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Our commitment to your data sovereignty and privacy, compliant with GDPR, CCPA, and international standards.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Last Updated: November 27, 2025
          </div>
        </div>
      </section>

      {/* --- MAIN CONTENT LAYOUT --- */}
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* LEFT: STICKY TOC SIDEBAR */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-32 p-6 rounded-2xl bg-[#0B0F19] border border-white/10">
              <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-6 flex items-center gap-2">
                <FileText size={16} className="text-[#0062d1]" />
                Table of Contents
              </h3>
              <nav className="flex flex-col space-y-1">
                {SECTIONS.map((section) => (
                  <button
                    key={section.id}
                    onClick={() => scrollToSection(section.id)}
                    className={`text-left px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 border-l-2
                      ${activeSection === section.id 
                        ? 'bg-[#0062d1]/10 text-white border-[#0062d1]' 
                        : 'text-slate-500 hover:text-slate-300 hover:bg-white/5 border-transparent'}
                    `}
                  >
                    {section.label}
                  </button>
                ))}
              </nav>
              
              {/* Trust Badge Small */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 opacity-60">
                    <Scale size={32} className="text-slate-600" />
                    <div>
                        <div className="text-[10px] font-mono text-slate-500 uppercase">Compliance</div>
                        <div className="text-xs text-slate-400 font-bold">GDPR & CCPA Ready</div>
                    </div>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-9 space-y-20">
            
            {/* 1. Introduction */}
            <section id="introduction" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">01.</span> Introduction
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-slate-400">
                <p>
                  At Gimmir (hereinafter "We," "Us," or "Our"), we recognize that in the era of digital engineering, data is a critical asset. We treat your privacy not just as a compliance requirement, but as a core component of our system architecture.
                </p>
                <div className="bg-[#0B0F19] border-l-4 border-[#0062d1] p-6 my-6 rounded-r-xl">
                  <p className="text-sm text-white m-0 font-medium">
                    <strong>Transparency Statement:</strong> We operate with full transparency regarding data collection protocols. This policy details the technical and legal frameworks governing your information.
                  </p>
                </div>
              </div>
            </section>

            {/* 2. Data Sovereignty */}
            <section id="sovereignty" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">02.</span> Data Sovereignty & Jurisdiction
              </h2>
              <p className="text-slate-400 mb-6">
                Your data is processed under strict legal frameworks depending on your region. We maintain distinct legal entities to ensure compliance with local regulations.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-[#0B0F19] p-6 rounded-xl border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-blue-500/5 blur-2xl rounded-full"></div>
                    <div className="flex items-center gap-3 mb-4 text-white relative z-10">
                        <MapPin size={20} className="text-blue-400" />
                        <h3 className="font-bold">USA Jurisdiction</h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-2 font-mono uppercase tracking-wider">Governing Law: Delaware State Law</p>
                    <p className="text-sm text-slate-400">
                        For clients in North America, contracting and data processing are handled by our US entity in Wilmington, DE. Compliant with CCPA.
                    </p>
                </div>
                <div className="bg-[#0B0F19] p-6 rounded-xl border border-white/10 relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-emerald-500/5 blur-2xl rounded-full"></div>
                    <div className="flex items-center gap-3 mb-4 text-white relative z-10">
                        <MapPin size={20} className="text-emerald-400" />
                        <h3 className="font-bold">EU Jurisdiction</h3>
                    </div>
                    <p className="text-xs text-slate-500 mb-2 font-mono uppercase tracking-wider">Governing Law: Estonian & EU Law</p>
                    <p className="text-sm text-slate-400">
                        For global and EU clients, operations are governed by our entity in Tallinn, Estonia. Fully GDPR compliant regarding data portability and privacy.
                    </p>
                </div>
              </div>
            </section>

            {/* 3. Information We Collect */}
            <section id="data-collection" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">03.</span> Information We Collect
              </h2>
              <div className="space-y-6">
                
                {/* Explicit Data */}
                <div className="bg-[#0B0F19] p-6 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 mb-4 text-white border-b border-white/5 pb-3">
                        <Database size={20} className="text-[#0062d1]" />
                        <h3 className="font-bold text-lg">Explicit Data (Input)</h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">Data you voluntarily provide through our Inquiry Forms, Project Simulator, or direct correspondence.</p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <ul className="list-disc list-inside text-sm text-slate-400 space-y-2 marker:text-[#0062d1]">
                            <li>Full Name & Job Title</li>
                            <li>Corporate Email Address</li>
                            <li>Direct Phone Number</li>
                        </ul>
                        <ul className="list-disc list-inside text-sm text-slate-400 space-y-2 marker:text-[#0062d1]">
                            <li>Project Briefs & Technical Specs</li>
                            <li>Budget Constraints</li>
                            <li>Uploaded RFPs / Architecture Docs</li>
                        </ul>
                    </div>
                </div>

                {/* Implicit Data */}
                <div className="bg-[#0B0F19] p-6 rounded-xl border border-white/5">
                    <div className="flex items-center gap-3 mb-4 text-white border-b border-white/5 pb-3">
                        <Fingerprint size={20} className="text-amber-400" />
                        <h3 className="font-bold text-lg">Implicit Data (Telemetry)</h3>
                    </div>
                    <p className="text-slate-400 text-sm mb-4">Technical data automatically collected to optimize system performance and security.</p>
                    <ul className="list-disc list-inside text-sm text-slate-400 space-y-2 marker:text-amber-500">
                        <li>IP Address & Geolocation (for regional compliance)</li>
                        <li>Browser Type & Version</li>
                        <li>Session Duration & Simulator Interaction Metrics</li>
                    </ul>
                </div>
              </div>
            </section>

            {/* 4. Data Usage & Transfer */}
            <section id="data-usage" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">04.</span> Usage & International Transfer
              </h2>
              <div className="prose prose-invert max-w-none text-slate-400 mb-6">
                <p>
                  We operate a global engineering network. Data collected in the EEA may be transferred to, and stored at, a destination outside the EEA (e.g., our US HQ or LATAM hubs) for processing.
                </p>
              </div>
              <div className="bg-emerald-900/10 border border-emerald-500/20 rounded-lg p-4 flex gap-4">
                <ShieldCheck className="text-emerald-500 shrink-0" size={24} />
                <div>
                    <h4 className="text-emerald-400 font-bold text-sm mb-1">GDPR Compliance Guarantee</h4>
                    <p className="text-xs text-emerald-100/70 leading-relaxed">
                        Any transfer of data outside the EEA is protected by Standard Contractual Clauses (SCCs) approved by the European Commission, ensuring your data rights travel with your data.
                    </p>
                </div>
              </div>
            </section>

            {/* 5. Security */}
            <section id="security" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">05.</span> Security Protocols
              </h2>
              <div className="bg-[#0B0F19] border border-white/10 rounded-xl p-8 text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-[#0062d1]/10 mb-6">
                    <Lock size={32} className="text-[#0062d1]" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Enterprise-Grade Encryption</h3>
                <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed mb-6">
                    We adhere to a "Security by Design" philosophy. All sensitive project data is treated as high-value intellectual property.
                </p>
                <div className="flex flex-wrap justify-center gap-4 text-xs font-mono text-slate-500">
                    <span className="px-3 py-1 bg-white/5 rounded border border-white/10">AES-256 Data at Rest</span>
                    <span className="px-3 py-1 bg-white/5 rounded border border-white/10">TLS 1.3 Data in Transit</span>
                    <span className="px-3 py-1 bg-white/5 rounded border border-white/10">MFA Access Control</span>
                </div>
              </div>
            </section>

            {/* 6. GDPR Rights */}
            <section id="gdpr-rights" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">06.</span> Your GDPR Rights
              </h2>
              <p className="text-slate-400 mb-6">
                We empower you with full control over your digital footprint. You have the right to:
              </p>
              <div className="grid gap-4">
                {[
                  { title: "Right to Access", desc: "Request a complete export of the personal and project data we hold about you." },
                  { title: "Right to Rectification", desc: "Correct any inaccurate or incomplete data in our CRM systems." },
                  { title: "Right to Erasure ('Right to be Forgotten')", desc: "Request permanent deletion of your data from our servers, subject to legal retention obligations." },
                  { title: "Right to Restriction", desc: "Request a temporary halt to the processing of your data." },
                ].map((right, idx) => (
                  <div key={idx} className="group flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-colors border border-transparent hover:border-white/5">
                    <div className="p-2 rounded bg-[#0062d1]/10 text-[#0062d1] mt-1">
                      <ShieldCheck size={18} />
                    </div>
                    <div>
                      <h4 className="text-white font-bold text-sm">{right.title}</h4>
                      <p className="text-slate-500 text-xs mt-1">{right.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* 7. Cookies */}
            <section id="cookies" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">07.</span> Cookies & Tracking
              </h2>
              <p className="text-slate-400 mb-4">
                We utilize minimal cookies strictly necessary for system operation.
              </p>
              <ul className="list-disc list-inside text-slate-400 space-y-2 ml-4 mb-6">
                <li><strong>Session Cookies:</strong> Essential for maintaining your state in the Project Simulator.</li>
                <li><strong>Analytics Cookies:</strong> Anonymized telemetry to help us improve system response times.</li>
              </ul>
            </section>

            {/* 8. Contact */}
            <section id="contact" className="scroll-mt-32 pb-12">
              <div className="bg-gradient-to-r from-[#0062d1]/20 to-transparent border border-[#0062d1]/30 rounded-2xl p-8">
                <h2 className="text-2xl font-bold text-white mb-4">Contact Data Protection Officer</h2>
                <p className="text-slate-300 mb-6">
                  To exercise your rights or report a vulnerability, initiate a secure channel with our DPO.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <a href="mailto:privacy@gimmir.com" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-lg transition-colors">
                    <Server size={18} />
                    <span>privacy@gimmir.com</span>
                  </a>
                  <a href="/contact-us" className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 text-white font-medium rounded-lg transition-colors border border-white/10">
                    <span>Visit Accountability Hub</span>
                    <ChevronRight size={16} />
                  </a>
                </div>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}