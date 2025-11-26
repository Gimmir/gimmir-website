import React from 'react';
import { Zap, Gauge, Activity } from 'lucide-react';

export function ForensicToolkitSection() {
  const tools = [
    { 
      name: 'SonarQube', 
      type: 'Static Analysis', 
      logo: 'https://cdn.worldvectorlogo.com/logos/sonarqube-1.svg', 
      icon: null, 
      color: '' 
    },
    { 
      name: 'Sentry', 
      type: 'Error Tracking', 
      logo: 'https://cdn.worldvectorlogo.com/logos/sentry-3.svg', 
      icon: null, 
      color: '' 
    },
    { 
      name: 'OWASP ZAP', 
      type: 'Security Scanning', 
      logo: null, 
      icon: Zap, 
      color: 'text-yellow-400' 
    },
    { 
      name: 'JMeter', 
      type: 'Load Testing', 
      logo: null, 
      icon: Gauge, 
      color: 'text-emerald-400' 
    },
  ];

  return (
    <section className="py-16 px-6 border-b border-white/5 bg-[#050A14] relative overflow-hidden">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#0062d1]/5 via-transparent to-transparent pointer-events-none"></div>
      
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-12">
           <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 mb-6">
              <Activity size={14} className="text-[#0062d1]" />
              <span className="text-xs font-mono text-slate-300 uppercase tracking-wider">Social Proof</span>
           </div>
           <h2 className="text-3xl md:text-4xl font-bold text-white">
              Hospital-Grade <span className="text-[#0062d1]">Diagnostics.</span>
           </h2>
           <p className="text-slate-400 text-sm mt-4 max-w-xl mx-auto">
              We don&apos;t guess. We use industry-standard forensic tools to X-Ray your code.
           </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-12 items-center justify-center">
           {tools.map((tool) => (
              <div key={tool.name} className="flex flex-col items-center gap-4 group cursor-default">
                 <div className="w-20 h-20 bg-white/5 border border-white/10 rounded-2xl flex items-center justify-center p-4 transition-all duration-300 group-hover:border-white/20 group-hover:bg-white/10 group-hover:-translate-y-1 shadow-lg">
                    {tool.logo ? (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain opacity-80 group-hover:opacity-100 transition-opacity" />
                    ) : (
                        // @ts-ignore
                        <tool.icon size={32} className={`text-slate-400 group-hover:${tool.color} transition-colors duration-300`} />
                    )}
                 </div>
                 <div className="text-center">
                    <div className="text-white font-bold text-sm group-hover:text-[#0062d1] transition-colors">{tool.name}</div>
                    <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">{tool.type}</div>
                 </div>
              </div>
           ))}
        </div>
      </div>
    </section>
  );
}
