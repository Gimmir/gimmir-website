import React from 'react';
import { Layout, Server, Terminal } from 'lucide-react';
import { SectionHeader } from '@/components/ui/section-header';

const profiles = [
  {
    role: "Senior React Engineer",
    exp: "6 Years",
    english: "C1 (Advanced)",
    stack: ["Next.js", "TypeScript", "GraphQL", "Tailwind"],
    icon: Layout
  },
  {
    role: "DevOps Architect",
    exp: "8 Years",
    english: "C2 (Proficient)",
    stack: ["AWS", "Kubernetes", "Terraform", "CI/CD"],
    icon: Server
  },
  {
    role: "Python Lead",
    exp: "7 Years",
    english: "C1 (Advanced)",
    stack: ["Django", "FastAPI", "PostgreSQL", "Redis"],
    icon: Terminal
  }
];

export function EngineerSpecsSection() {
  return (
    <section className="py-16 sm:py-24 px-6 overflow-hidden relative bg-[#050A14]">
       <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#0062d110_0%,_transparent_70%)] pointer-events-none"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <SectionHeader 
          title="Engineer Specs" 
          subtitle="This is the caliber of talent you can expect. No juniors disguised as seniors."
          badge="Talent Pool"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {profiles.map((profile, i) => (
            <div key={i} className="relative group bg-[#0B0F19]/80 backdrop-blur-md border border-white/10 rounded-2xl p-1 overflow-hidden transition-all hover:border-[#0062d1]/50 hover:-translate-y-1 duration-300 shadow-lg shadow-black/20">
              <div className="bg-[#0B0F19] rounded-xl p-6 h-full">
                <div className="flex justify-between items-start mb-6">
                  <div className="p-3 bg-[#0062d1]/10 rounded-lg text-[#0062d1]">
                    <profile.icon size={24} />
                  </div>
                  <div className="px-2 py-1 bg-white/5 rounded text-[10px] font-mono text-slate-400 border border-white/5">
                    VERIFIED
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white mb-1">{profile.role}</h3>
                <div className="flex items-center gap-2 text-sm text-slate-500 mb-6">
                  <span>{profile.exp} Exp</span>
                  <span>•</span>
                  <span className="text-emerald-400">{profile.english}</span>
                </div>
                <div className="space-y-3">
                  <div className="text-[10px] font-mono text-slate-500 uppercase tracking-wider">Core Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {profile.stack.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/5 border border-white/10 rounded text-xs text-slate-300 font-mono">
                        {tech}
                      </span>
                    ))}
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
