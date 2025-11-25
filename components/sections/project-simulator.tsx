import ProjectSimulator from '@/components/features/project-simulator';
import { Activity, PieChart, AlertTriangle } from 'lucide-react';
import { SectionHeader } from '../ui/section-header';

export function ProjectSimulatorSection() {
  return (
    <section className="relative z-20 py-16 sm:py-24 px-6 border-t border-white/5 overflow-hidden">
      <div className="absolute inset-0 bg-[#020408]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      </div>
      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <SectionHeader 
              title={<span>Curious about the investment? <br /><span className="text-[#0062d1]">Simulate your project.</span></span>}
              subtitle="Get a preliminary estimate and a risk assessment based on our 2025 market data. Understand potential bottlenecks before writing a single line of code."
              badge="Interactive Estimate"
              badgeIcon={Activity}
              align="left"
            />
            <div className="space-y-6 -mt-6">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 text-[#0062d1] flex items-center justify-center shrink-0">
                  <PieChart size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Budget Forecasting</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    Realistic ranges based on actual project data, not guesswork.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-white/5 border border-white/10 text-orange-400 flex items-center justify-center shrink-0">
                  <AlertTriangle size={24} />
                </div>
                <div>
                  <h4 className="text-white font-bold text-lg mb-2">Risk Assessment</h4>
                  <p className="text-sm text-slate-400 leading-relaxed">
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
