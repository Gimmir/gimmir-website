import { BrainCircuit, Network, GitPullRequest, CheckCircle2, Cpu } from 'lucide-react';
import { SectionHeader } from '../ui/section-header';

export function ValuePropSection() {
  return (
    <section className="relative z-24 px-6 overflow-hidden bg-[#0A1435]">
      <div className="absolute inset-0 bg-gradient-to-b from-[#020408] via-[#050B20] to-[#0A1435]"></div>
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-[#020408] to-transparent pointer-events-none"></div>
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/ec/World_map_blank_without_borders.svg')] bg-no-repeat bg-center bg-cover pointer-events-none mix-blend-overlay"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 py-24">
        {/* Connecting line from previous section */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 h-24 w-px bg-[#0062d1]"></div>

        <SectionHeader 
          title={<span>How We Do It <span className="text-[#0062d1]">Differently</span></span>}
          subtitle="We don't act like a vendor. We operate as your dedicated CTO office, integrating strategy, talent, and compliance into one seamless workflow."
          badge="The Gimmir Standard"
          badgeIcon={Cpu}
        />
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Strategy */}
          <div className="group bg-[#0B1229]/80 backdrop-blur-md border border-[#1E2945] hover:border-[#0062d1] rounded-xl p-0 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,98,209,0.15)] flex flex-col h-full">
            <div className="bg-[#111A38] px-6 py-4 border-b border-[#1E2945] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-[#0062d1] text-white"><BrainCircuit size={18} /></div>
                <span className="font-bold text-sm tracking-wide text-white">STRATEGY.sys</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div className="p-6 md:p-8 flex-grow">
              <h3 className="text-xl font-bold text-white mb-3">Fractional CTO Model</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">We act as your technical partner ensuring alignment between business goals and code architecture.</p>
              <div className="mt-auto bg-[#080C1B] rounded border border-[#1E2945] p-3 font-mono text-[10px] text-slate-400">
                <div className="flex justify-between mb-1"><span>Architecture_Audit</span> <span className="text-green-400">Passed</span></div>
                <div className="w-full bg-[#1E2945] h-1 rounded overflow-hidden"><div className="bg-[#0062d1] w-full h-full"></div></div>
              </div>
            </div>
          </div>

          {/* Hubs */}
          <div className="group bg-[#0B1229]/80 backdrop-blur-md border border-[#1E2945] hover:border-[#0062d1] rounded-xl p-0 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,98,209,0.15)] flex flex-col h-full">
            <div className="bg-[#111A38] px-6 py-4 border-b border-[#1E2945] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-[#0062d1] text-white"><Network size={18} /></div>
                <span className="font-bold text-sm tracking-wide text-white">NETWORK.net</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div className="p-6 md:p-8 flex-grow">
              <h3 className="text-xl font-bold text-white mb-3">Transparent Hubs</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Distributed teams across Spain, Ukraine, and Mexico. Perfect timezone overlap with US & EU.</p>
              <div className="mt-auto grid grid-cols-3 gap-2">
                <div className="bg-[#080C1B] rounded border border-[#1E2945] p-2 text-center">
                  <div className="text-[10px] text-slate-500 font-mono mb-1">US</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0062d1] mx-auto"></div>
                </div>
                <div className="bg-[#080C1B] rounded border border-[#1E2945] p-2 text-center">
                  <div className="text-[10px] text-slate-500 font-mono mb-1">EU</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0062d1] mx-auto"></div>
                </div>
                <div className="bg-[#080C1B] rounded border border-[#1E2945] p-2 text-center">
                  <div className="text-[10px] text-slate-500 font-mono mb-1">UA</div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#0062d1] mx-auto"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Quality */}
          <div className="group bg-[#0B1229]/80 backdrop-blur-md border border-[#1E2945] hover:border-[#0062d1] rounded-xl p-0 overflow-hidden transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,98,209,0.15)] flex flex-col h-full">
            <div className="bg-[#111A38] px-6 py-4 border-b border-[#1E2945] flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-1.5 rounded bg-[#0062d1] text-white"><GitPullRequest size={18} /></div>
                <span className="font-bold text-sm tracking-wide text-white">QUALITY.io</span>
              </div>
              <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
            </div>
            <div className="p-6 md:p-8 flex-grow">
              <h3 className="text-xl font-bold text-white mb-3">Investment-Ready</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-6">Automated testing and documentation are standard. Your code passes VC Due Diligence.</p>
              <div className="mt-auto bg-[#080C1B] rounded border border-[#1E2945] p-2 flex items-center gap-3">
                <div className="font-mono text-[10px] text-slate-400 flex-grow">&gt; running tests... <br/><span className="text-green-400">√ all passed (142)</span></div>
                <CheckCircle2 size={16} className="text-green-500" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
