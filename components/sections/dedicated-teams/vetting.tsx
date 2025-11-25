import React from 'react';
import { SectionHeader } from '@/components/ui/section-header';

const steps = [
  { name: "Screening", rate: "40% Pass", desc: "English Fluency & Soft Skills Check" },
  { name: "Tech Challenge", rate: "10% Pass", desc: "Live Coding Session & Architecture" },
  { name: "Culture Fit", rate: "5% Pass", desc: "\"No Ego\" & Problem Solving" },
  { name: "Final Offer", rate: "1.5% Hire", desc: "Hiring & Onboarding" }
];

export function VettingSection() {
  return (
    <section className="py-16 sm:py-24 px-6 bg-[#080C14] border-y border-white/5">
      <div className="max-w-5xl mx-auto">
        <SectionHeader 
          title="Top 1.5% Talent Pipeline" 
          subtitle="We reject 98.5% of applicants so you don't have to."
          badge="The Vetting Pipeline"
        />
        
        {/* Responsive Grid/Timeline */}
        <div className="relative">
          {/* Desktop Connecting Line (Horizontal) */}
          <div className="hidden md:block absolute top-6 left-0 right-0 h-0.5 bg-white/10 z-0"></div>
          
          {/* Mobile Connecting Line (Vertical) */}
          <div className="md:hidden absolute top-6 bottom-6 left-[23px] w-0.5 bg-white/10 z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-4 relative">
            {steps.map((step, i) => (
              <div key={i} className="relative z-10 flex md:flex-col items-start md:items-center text-left md:text-center">
                
                {/* Number Circle */}
                <div className="w-12 h-12 rounded-full bg-[#050810] border-2 border-[#0062d1] text-white font-bold flex items-center justify-center mb-4 shrink-0 shadow-[0_0_15px_rgba(0,98,209,0.3)] mx-0 md:mx-auto mr-5 relative z-10">
                  {i + 1}
                </div>
                
                {/* Content Card (Mobile) / Plain Text (Desktop) */}
                <div className="flex-1 bg-[#0B0F19] md:bg-transparent p-5 md:p-0 rounded-xl border border-white/10 md:border-none shadow-lg md:shadow-none relative w-full md:w-auto -top-2 md:top-0">
                  {/* Mobile Arrow Pointer */}
                  <div className="md:hidden absolute top-5 -left-1.5 w-3 h-3 bg-[#0B0F19] border-t border-l border-white/10 transform -rotate-45"></div>

                  <h3 className="text-white font-bold mb-1 text-lg md:text-base">{step.name}</h3>
                  <div className="text-[#0062d1] text-xs font-bold mb-2 uppercase bg-[#0062d1]/10 inline-block px-2 py-0.5 rounded md:bg-transparent md:px-0 md:py-0">{step.rate}</div>
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
