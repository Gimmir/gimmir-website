import React from 'react';
import { AlertTriangle, CheckCircle2, XCircle, ShieldCheck, Lock, Terminal, MessageSquare } from 'lucide-react';

export function CoreProblemSection() {
  const comparisons = [
    {
      category: "Talent Vetting",
      agency: {
        title: "\"Bait and Switch\"",
        desc: "You are sold seniors but handed off to junior developers.",
        icon: AlertTriangle,
        iconColor: "text-red-400"
      },
      gimmir: {
        title: "Direct Access Guarantee",
        desc: "You personally approve the engineer joining your team.",
        icon: CheckCircle2,
        iconColor: "text-emerald-400"
      }
    },
    {
      category: "Quality",
      agency: {
        title: "Technical Debt",
        desc: "Code is often structurally unsound (\"Facade MVP\").",
        icon: XCircle,
        iconColor: "text-red-400"
      },
      gimmir: {
        title: "Investment-Ready Code",
        desc: "Automated QA, documentation, and architecture that passes VC Due Diligence.",
        icon: ShieldCheck,
        iconColor: "text-emerald-400"
      }
    },
    {
      category: "Control (IP)",
      agency: {
        title: "Vendor Lock-in",
        desc: "They hold cloud accounts/keys for leverage.",
        icon: Lock,
        iconColor: "text-red-400"
      },
      gimmir: {
        title: "Day 1 Ownership",
        desc: "You hold the keys to all Git repositories and cloud accounts.",
        icon: Terminal,
        iconColor: "text-emerald-400"
      }
    },
    {
      category: "Culture",
      agency: {
        title: "\"Yes Culture\"",
        desc: "They agree to all requests, even bad ones, just to bill hours.",
        icon: XCircle,
        iconColor: "text-red-400"
      },
      gimmir: {
        title: "Strategic Pushback",
        desc: "We challenge specifications to protect your budget and architectural integrity.",
        icon: CheckCircle2,
        iconColor: "text-emerald-400"
      }
    },
    {
      category: "Communication",
      agency: {
        title: "Communication Lag",
        desc: "Delays due to time zone differences and middle-men.",
        icon: MessageSquare,
        iconColor: "text-red-400"
      },
      gimmir: {
        title: "Synchronous Workflow",
        desc: "Nearshore alignment allows real-time problem-solving via Zoom.",
        icon: CheckCircle2,
        iconColor: "text-emerald-400"
      }
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#080C14] border-b border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto relative z-10">
        
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            We Are Not a Vendor. <br />
            <span className="text-[#0062d1]">We Are a Partner.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            Your business deserves engineering integrity, not the low-cost liabilities common in the market.
          </p>
        </div>

        {/* Desktop Table Header */}
        <div className="hidden lg:grid grid-cols-12 gap-6 mb-8 px-8 text-xs font-mono uppercase tracking-wider text-slate-500 border-b border-white/10 pb-4">
          <div className="col-span-2">Category</div>
          <div className="col-span-5 text-red-400/80">Typical Agency (The Vendor)</div>
          <div className="col-span-5 text-emerald-400/80">Gimmir (The Engineering Partner)</div>
        </div>

        <div className="space-y-4 lg:space-y-0">
          {comparisons.map((item, index) => (
            <div key={index} className="lg:grid lg:grid-cols-12 lg:gap-6 lg:px-8 lg:py-6 lg:items-center lg:border-b lg:border-white/5 lg:hover:bg-white/[0.02] transition-colors rounded-xl lg:rounded-none bg-[#0B0F19] lg:bg-transparent p-6 border border-white/10 lg:border-0 lg:border-b">
              
              {/* Category - Mobile Only */}
              <div className="lg:hidden text-xs font-mono text-slate-500 uppercase tracking-wider mb-4 pb-2 border-b border-white/5">
                {item.category}
              </div>
              
              {/* Category - Desktop */}
              <div className="hidden lg:block col-span-2 text-sm text-slate-400 font-medium">
                {item.category}
              </div>

              {/* Agency Side */}
              <div className="lg:col-span-5 mb-6 lg:mb-0">
                <div className="flex items-start gap-3">
                  <div className={`mt-1 shrink-0 ${item.agency.iconColor}`}>
                    <item.agency.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{item.agency.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.agency.desc}</p>
                  </div>
                </div>
              </div>

              {/* Divider - Mobile Only */}
              <div className="lg:hidden w-full h-px bg-white/10 my-4 relative">
                 <div className="absolute left-1/2 -top-2.5 -translate-x-1/2 bg-[#0B0F19] px-2 text-[10px] text-slate-600 font-mono uppercase">vs</div>
              </div>

              {/* Gimmir Side */}
              <div className="lg:col-span-5">
                <div className="flex items-start gap-3">
                   <div className={`mt-1 shrink-0 ${item.gimmir.iconColor} bg-emerald-500/10 p-1 rounded-full`}>
                    <item.gimmir.icon size={18} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-base mb-1">{item.gimmir.title}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.gimmir.desc}</p>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
