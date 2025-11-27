'use client';

import React, { useState, useEffect } from 'react';
import { 
  FileCheck, 
  Copyright, 
  DollarSign, 
  AlertTriangle, 
  Gavel, 
  ShieldAlert, 
  FileText, 
  CheckCircle2, 
  Globe
} from 'lucide-react';

// --- TABLE OF CONTENTS DATA ---
const SECTIONS = [
  { id: 'acceptance', label: '1. Acceptance of Terms' },
  { id: 'intellectual-property', label: '2. Intellectual Property (IP)' },
  { id: 'payment', label: '3. Payment & Refunds' },
  { id: 'termination', label: '4. Termination & Disputes' },
  { id: 'acceptable-use', label: '5. Acceptable Use Policy' },
  { id: 'liability', label: '6. Limitation of Liability' },
];

export default function TermsOfServicePage() {
  const [activeSection, setActiveSection] = useState('acceptance');

  // Smooth scroll handler
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 120;
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

  // Scroll spy
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
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono uppercase tracking-wider mb-6 animate-fade-in-up">
             <FileCheck size={12} />
             <span>// SERVICE_AGREEMENT_STATUS: ACTIVE</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Terms of Service & IP Agreement
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl font-light leading-relaxed mb-8 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            Governing your use of Gimmir services, including payment terms, obligations, and the clear transfer of Intellectual Property rights.
          </p>

          <div className="flex items-center gap-2 text-xs font-mono text-slate-500 uppercase tracking-widest animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
            Last Revision: November 27, 2025
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
                Agreement Sections
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
              
              {/* Trust Badge */}
              <div className="mt-8 pt-6 border-t border-white/5">
                <div className="flex items-center gap-3 opacity-60">
                    <Gavel size={32} className="text-slate-600" />
                    <div>
                        <div className="text-[10px] font-mono text-slate-500 uppercase">Jurisdiction</div>
                        <div className="text-xs text-slate-400 font-bold">Delaware, USA / EU</div>
                    </div>
                </div>
              </div>
            </div>
          </aside>

          {/* RIGHT: CONTENT */}
          <div className="lg:col-span-9 space-y-20">
            
            {/* 1. Acceptance */}
            <section id="acceptance" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">01.</span> Acceptance of Terms
              </h2>
              <div className="prose prose-invert prose-lg max-w-none text-slate-400">
                <p>
                  By accessing the website at <strong>gimmir.com</strong>, using our Project Simulator, or engaging our engineering services, you agree to be bound by these Terms of Service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.
                </p>
                <p>
                  If you are entering into this agreement on behalf of a company or other legal entity, you represent that you have the authority to bind such entity to these terms.
                </p>
              </div>
            </section>

            {/* 2. Intellectual Property (CRITICAL) */}
            <section id="intellectual-property" className="scroll-mt-32">
              <div className="flex items-center gap-3 mb-6">
                 <h2 className="text-2xl font-bold text-white flex items-center gap-3">
                    <span className="text-[#0062d1]">02.</span> Intellectual Property Rights
                 </h2>
                 <span className="px-2 py-1 rounded bg-emerald-500/10 text-emerald-400 text-[10px] font-mono uppercase tracking-wider border border-emerald-500/20">
                    Client Ownership Guaranteed
                 </span>
              </div>
              
              <div className="space-y-6">
                
                {/* Client Ownership Card */}
                <div className="bg-[#0B0F19] p-8 rounded-xl border border-emerald-500/20 relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 blur-3xl rounded-full"></div>
                    <div className="flex items-start gap-4 relative z-10">
                        <div className="p-3 rounded-lg bg-emerald-500/10 text-emerald-400 mt-1">
                            <Copyright size={24} />
                        </div>
                        <div>
                            <h3 className="text-white font-bold text-lg mb-2">100% "Work for Hire" Ownership</h3>
                            <p className="text-slate-400 text-sm leading-relaxed mb-4">
                                Upon full payment of all fees associated with a project milestone, <strong>you (the Client) retain 100% ownership</strong> of all custom source code, documentation, designs, and intellectual property created by Gimmir for that project.
                            </p>
                            <ul className="text-xs text-slate-500 font-mono space-y-1">
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={12} className="text-emerald-500" />
                                    <span>Source Code Transfer</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={12} className="text-emerald-500" />
                                    <span>IP Rights Assignment</span>
                                </li>
                                <li className="flex items-center gap-2">
                                    <CheckCircle2 size={12} className="text-emerald-500" />
                                    <span>No Hidden Licensing Fees</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* Third Party Code */}
                <div className="bg-[#0B0F19] p-6 rounded-xl border border-white/5">
                    <h3 className="text-white font-bold text-base mb-3">Third-Party & Open Source Components</h3>
                    <p className="text-slate-400 text-sm leading-relaxed mb-4">
                        Modern software engineering often relies on open-source libraries. While we ensure that any third-party code used is compatible with commercial use (e.g., MIT, Apache 2.0 licenses):
                    </p>
                    <div className="flex gap-4 items-start p-4 bg-amber-900/10 border border-amber-500/20 rounded-lg">
                        <AlertTriangle size={20} className="text-amber-500 shrink-0 mt-0.5" />
                        <p className="text-xs text-amber-200/80 leading-relaxed">
                            <strong>Client Responsibility:</strong> You are responsible for complying with the licenses of any specific third-party or open-source software you explicitly request us to integrate into the project.
                        </p>
                    </div>
                </div>

              </div>
            </section>

            {/* 3. Payment & Refunds */}
            <section id="payment" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">03.</span> Payment & Refund Policy
              </h2>
              <div className="bg-[#0B0F19] border border-white/10 rounded-xl p-6 mb-6">
                 <div className="flex items-center gap-3 mb-4">
                    <DollarSign size={20} className="text-[#0062d1]" />
                    <h3 className="text-white font-bold">Milestone-Based Billing</h3>
                 </div>
                 <p className="text-slate-400 text-sm mb-4">
                    We operate on a transparent milestone basis. Payments are due upon the successful delivery and approval of each sprint or project phase.
                 </p>
                 <ul className="list-disc list-inside text-sm text-slate-400 space-y-2 marker:text-[#0062d1]">
                    <li><strong>Initial Deposit:</strong> Required to secure engineering resources and start the project.</li>
                    <li><strong>Net-15 / Net-30:</strong> Standard terms for enterprise contracts.</li>
                    <li><strong>Late Fees:</strong> 1.5% interest per month on overdue invoices.</li>
                 </ul>
              </div>
              <p className="text-slate-400 text-sm">
                <strong>Refunds:</strong> Due to the nature of custom engineering services, refunds are not provided for work already completed and approved. If you are unsatisfied with a deliverable, you must notify us within the review period (typically 5 business days) for rectification.
              </p>
            </section>

            {/* 4. Termination & Disputes */}
            <section id="termination" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">04.</span> Termination & Dispute Resolution
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                 <div>
                    <h3 className="text-white font-bold mb-2">Termination</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Either party may terminate the service agreement with <strong>30 days written notice</strong>. Upon termination, the Client shall pay for all work completed up to the termination date, and Gimmir shall transfer all work-in-progress code to the Client.
                    </p>
                 </div>
                 <div>
                    <h3 className="text-white font-bold mb-2">Governing Law</h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                        Any disputes arising out of or related to these Terms shall be governed by the laws of the <strong>State of Delaware, USA</strong>, for US clients, or the laws of <strong>Estonia</strong> for international/EU clients, without regard to conflict of laws rules.
                    </p>
                 </div>
              </div>
            </section>

            {/* 5. Acceptable Use */}
            <section id="acceptable-use" className="scroll-mt-32">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">05.</span> Acceptable Use
              </h2>
              <p className="text-slate-400 mb-4">
                You agree not to use Gimmir's services or the resulting software for:
              </p>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {[
                  "Illegal activities or promotion of illegal acts.",
                  "Violating the intellectual property rights of others.",
                  "Distribution of malware or malicious code.",
                  "Harassment, hate speech, or discrimination."
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 p-3 rounded bg-red-500/5 border border-red-500/10 text-red-200/80 text-sm">
                    <ShieldAlert size={16} className="shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </section>

            {/* 6. Limitation of Liability */}
            <section id="liability" className="scroll-mt-32 pb-12">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <span className="text-[#0062d1]">06.</span> Limitation of Liability
              </h2>
              <div className="bg-[#0B0F19] p-6 rounded-xl border border-white/5 text-slate-400 text-sm leading-relaxed">
                <p className="mb-4">
                    In no event shall Gimmir, its directors, employees, or agents be liable for any indirect, punitive, incidental, special, consequential, or exemplary damages, including without limitation damages for loss of profits, goodwill, use, data, or other intangible losses.
                </p>
                <p>
                    Gimmir's total liability strictly regarding any claim arising out of or relating to these terms or the use of our services shall not exceed the amount paid by you to Gimmir in the six (6) months prior to the event giving rise to the claim.
                </p>
              </div>
            </section>

          </div>
        </div>
      </div>
    </div>
  );
}