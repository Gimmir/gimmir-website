import { Server, Cloud, Smartphone, FileCode, Users2 } from 'lucide-react';

export default function ServicesSection() {
  return (
    <section className="relative z-20 py-section md:py-section-md px-6 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-[#0A1435] to-[#020408]"></div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="mb-20 text-center">
          <div className="inline-block px-3 py-1 rounded bg-white/5 border border-white/10 text-xs font-mono text-slate-400 mb-6 tracking-wide">
            // SYSTEM_MODULES
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Comprehensive Engineering{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-slate-500">
              Ecosystem.
            </span>
          </h2>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto font-light">
            Built for scale, security, and full IP ownership.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Backend & High-Load */}
          <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-[#0062d1]/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-[#0062d1]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-[#0062d1] group-hover:bg-[#0062d1]/10 transition-colors">
                <Server size={24} />
              </div>
              <span className="text-[10px] font-mono text-slate-600">LAYER_01</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Backend & High-Load</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Scalable microservices and secure APIs designed to handle growth from Day 1. No "Facade MVPs".
            </p>
            <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
              <span className="text-purple-400">const</span> stack = [<br />
              &nbsp;&nbsp;<span className="text-green-400">&apos;Node.js&apos;</span>,{' '}
              <span className="text-green-400">&apos;Python&apos;</span>,<br />
              &nbsp;&nbsp;<span className="text-green-400">&apos;Microservices&apos;</span>
              <br />
              ];
            </div>
          </div>

          {/* Cloud & DevOps */}
          <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-sky-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-sky-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-sky-500 group-hover:bg-sky-500/10 transition-colors">
                <Cloud size={24} />
              </div>
              <span className="text-[10px] font-mono text-slate-600">LAYER_02</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Cloud & DevOps</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Complete infrastructure ownership. GDPR/HIPAA compliant environments. No vendor lock-in.
            </p>
            <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
              <span className="text-purple-400">import</span>{' '}
              <span className="text-yellow-200">{'{'} AWS, K8s {'}'}</span>{' '}
              <span className="text-purple-400">from</span>{' '}
              <span className="text-green-400">&apos;cloud&apos;</span>;<br />
              <span className="text-slate-600">// Terraformed & Secure</span>
            </div>
          </div>

          {/* Web & Mobile Apps */}
          <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-pink-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-pink-500 group-hover:bg-pink-500/10 transition-colors">
                <Smartphone size={24} />
              </div>
              <span className="text-[10px] font-mono text-slate-600">LAYER_03</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Web & Mobile Apps</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Native performance or strategic cross-platform. We help you avoid dependency hell.
            </p>
            <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
              <span className="text-blue-400">&lt;App</span>
              <br />
              &nbsp;&nbsp;<span className="text-sky-300">platform</span>=
              <span className="text-green-400">&quot;React/Native&quot;</span>
              <br />
              &nbsp;&nbsp;<span className="text-sky-300">performance</span>=
              <span className="text-yellow-200">{'{'}100{'}'}</span>
              <br />
              <span className="text-blue-400">/&gt;</span>
            </div>
          </div>

          {/* Legacy Rescue & Audit */}
          <div className="group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-orange-500/50 transition-all duration-300">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            <div className="flex items-start justify-between mb-6">
              <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-orange-500 group-hover:bg-orange-500/10 transition-colors">
                <FileCode size={24} />
              </div>
              <span className="text-[10px] font-mono text-slate-600">LAYER_04</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-3">Legacy Rescue & Audit</h3>
            <p className="text-slate-400 text-sm leading-relaxed mb-8">
              Inherited a mess? We audit architecture and refactor code for VC due diligence.
            </p>
            <div className="font-mono text-[10px] text-slate-500 bg-[#020408] p-3 rounded border border-white/5">
              <span className="text-purple-400">function</span>{' '}
              <span className="text-blue-300">fixLegacy</span>() {'{'}
              <br />
              &nbsp;&nbsp;<span className="text-yellow-200">refactor</span>.
              <span className="text-blue-300">optimize</span>();<br />
              &nbsp;&nbsp;<span className="text-slate-600">// Debt cleared</span>
              <br />
              {'}'}
            </div>
          </div>

          {/* Dedicated Engineering Teams - Spanning 2 columns */}
          <div className="md:col-span-2 group relative bg-[#050810]/50 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/[0.02] hover:border-emerald-500/50 transition-all duration-300 flex flex-col md:flex-row gap-8 items-start">
            <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl pointer-events-none"></div>
            <div className="flex-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-white/5 rounded-lg text-slate-300 group-hover:text-emerald-500 group-hover:bg-emerald-500/10 transition-colors">
                  <Users2 size={24} />
                </div>
                <span className="text-[10px] font-mono text-slate-600">LAYER_PEOPLE</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-4">Dedicated Engineering Teams</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">
                Stop paying for management layers. Get direct access to Senior Engineers who integrate
                seamlessly into your Slack. No &quot;bait and switch&quot;.
              </p>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] text-emerald-400 font-mono">
                  Staff Augmentation
                </span>
                <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] text-emerald-400 font-mono">
                  Dedicated Squads
                </span>
                <span className="px-2 py-1 bg-emerald-500/10 border border-emerald-500/20 rounded text-[10px] text-emerald-400 font-mono">
                  Direct Comms
                </span>
              </div>
            </div>
            <div className="w-full md:w-64 bg-[#020408] rounded-lg border border-white/10 p-4 font-sans self-stretch flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <div className="w-2 h-2 rounded-full bg-green-500"></div>
                <span className="text-[10px] text-slate-400 font-semibold uppercase">Active Now</span>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-slate-800"></div>
                  <div className="h-2 w-20 bg-slate-800 rounded"></div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-slate-800"></div>
                  <div className="h-2 w-24 bg-slate-800 rounded"></div>
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <div className="w-6 h-6 rounded bg-slate-800"></div>
                  <div className="h-2 w-16 bg-slate-800 rounded"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
