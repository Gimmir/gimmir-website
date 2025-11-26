import React from 'react';
import { Server, ShieldAlert, Database, GitPullRequest, Search } from 'lucide-react';

export function ForensicAuditSection() {
  const pillars = [
    {
      id: 1,
      title: "Architecture & Design",
      items: [
        "Monolith coupling analysis and decoupling strategy.",
        "API efficiency and data flow analysis.",
        "Scalability bottleneck identification."
      ],
      icon: Server,
      color: "text-blue-400",
      bg: "bg-blue-500/10",
      border: "border-blue-500/20"
    },
    {
      id: 2,
      title: "Security & IP (Critical)",
      items: [
        "OWASP Top 10 mitigation.",
        "Hardcoded secrets review.",
        "Legal IP Chain-of-Title: Verification that no freelancers own your code or keys."
      ],
      icon: ShieldAlert,
      color: "text-red-400",
      bg: "bg-red-500/10",
      border: "border-red-500/20"
    },
    {
      id: 3,
      title: "Performance & Data",
      items: [
        "Database schema normalization.",
        "N+1 query identification.",
        "Review of Caching strategy (Redis/Memcached)."
      ],
      icon: Database,
      color: "text-emerald-400",
      bg: "bg-emerald-500/10",
      border: "border-emerald-500/20"
    },
    {
      id: 4,
      title: "DevOps & Testing",
      items: [
        "CI/CD pipeline health check.",
        "Automated testing coverage analysis (Unit/E2E).",
        "Infrastructure cost optimization."
      ],
      icon: GitPullRequest,
      color: "text-amber-400",
      bg: "bg-amber-500/10",
      border: "border-amber-500/20"
    }
  ];

  return (
    <section className="py-16 sm:py-24 px-6 bg-[#050A14] border-b border-white/5 relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] from-[#0062d1]/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
            <Search size={14} className="text-[#0062d1]" />
            <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">Technical Detail</span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Our Protocol: <br />
            <span className="text-[#0062d1]">A Surgeon's View of Your Architecture.</span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light leading-relaxed">
            We audit not just the code, but the financial and legal liquidity of your asset.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {pillars.map((pillar) => (
            <div 
                key={pillar.id} 
                className={`group bg-[#0B0F19] border border-white/10 hover:border-white/20 p-8 rounded-2xl relative transition-all duration-300 hover:-translate-y-1 shadow-xl shadow-black/20 flex flex-col overflow-hidden`}
            >
              {/* Large Background Number */}
              <div className="absolute -right-4 -top-4 text-9xl font-extrabold text-white/[0.02] select-none pointer-events-none transition-colors group-hover:text-white/[0.04]">
                0{pillar.id}
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.02] to-transparent rounded-2xl pointer-events-none"></div>
              
              <div className="flex items-center gap-4 mb-6 relative z-10">
                <div className={`w-14 h-14 rounded-xl ${pillar.bg} border ${pillar.border} flex items-center justify-center text-white shadow-lg transition-transform group-hover:scale-110`}>
                  <pillar.icon size={28} className={pillar.color} />
                </div>
                <h3 className={`text-xl font-bold text-white group-hover:${pillar.color} transition-colors`}>{pillar.title}</h3>
              </div>

              <div className="relative z-10 flex-grow">
                  <ul className="space-y-4">
                    {pillar.items.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-3 text-slate-400 text-sm leading-relaxed group/item">
                        <div className={`mt-1.5 w-1.5 h-1.5 rounded-full ${pillar.bg.replace('/10', '')} shrink-0 group-hover/item:scale-125 transition-transform`}></div>
                        <span className="group-hover/item:text-slate-300 transition-colors">{item}</span>
                      </li>
                    ))}
                  </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
