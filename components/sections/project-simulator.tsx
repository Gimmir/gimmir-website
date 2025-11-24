import ProjectSimulator from '@/components/features/project-simulator';
import { Activity, PieChart, AlertTriangle } from 'lucide-react';

export default function ProjectSimulatorSection() {
  return (
    <section className="relative z-20 py-24 px-6 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[#020408]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6">
              <Activity size={12} className="text-[#0062d1]" />
              <span>Interactive Estimate</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              Curious about the investment? <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-cyan-400">
                Simulate your project.
              </span>
            </h2>
            <p className="text-slate-400 text-lg font-light mb-8 leading-relaxed">
              Get a preliminary estimate and a risk assessment based on our 2025 market data. Understand
              potential bottlenecks before writing a single line of code.
            </p>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 text-[#0062d1] shrink-0">
                  <PieChart size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Budget Forecasting</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Realistic ranges based on actual project data, not guesswork.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="mt-1 p-2 rounded-lg bg-white/5 border border-white/10 text-orange-400 shrink-0">
                  <AlertTriangle size={20} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-sm mb-1">Risk Assessment</h4>
                  <p className="text-sm text-slate-500 leading-relaxed">
                    Identify scalability and technical debt risks early.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <ProjectSimulator />
          </div>
        </div>
      </div>
    </section>
  );
}
