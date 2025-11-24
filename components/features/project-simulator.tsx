'use client';

import { useProjectSimulatorLogic } from '@/lib/hooks/use-project-simulator';
import {
  ChevronRight,
  ArrowLeft,
  RotateCcw,
  AlertTriangle,
  ShieldCheck,
  ChevronRightSquare,
  Cpu,
} from 'lucide-react';
import type { SimulatorOption } from '@/lib/constants';

interface SimulatorProgressBarProps {
  current: number;
  total: number;
  onBack: () => void;
}

function SimulatorProgressBar({ current, total, onBack }: SimulatorProgressBarProps) {
  return (
    <div className="flex justify-between items-center mb-6 sm:mb-8 relative z-10">
      <div className="flex gap-1.5">
        {[...Array(total)].map((_, idx) => (
          <div
            key={idx}
            className={`h-1.5 w-6 sm:w-8 rounded-full transition-all duration-500 ${
              idx <= current ? 'bg-[#0062d1]' : 'bg-white/10'
            }`}
          />
        ))}
      </div>
      <div className="flex items-center gap-3">
        {current > 0 && (
          <button
            onClick={onBack}
            className="text-slate-400 hover:text-white transition-colors p-1 hover:bg-white/5 rounded-full"
          >
            <ArrowLeft size={16} />
          </button>
        )}
        <span className="text-xs font-mono text-slate-500">
          STEP {current + 1}/{total}
        </span>
      </div>
    </div>
  );
}

interface SimulatorStepCardProps {
  question: string;
  options: readonly SimulatorOption[];
  onSelect: (option: SimulatorOption) => void;
}

function SimulatorStepCard({ question, options, onSelect }: SimulatorStepCardProps) {
  return (
    <>
      <h3 className="text-xl sm:text-2xl font-bold text-white mb-6 leading-tight min-h-[3rem]">
        {question}
      </h3>
      <div className="space-y-3">
        {options.map((option) => (
          <button
            key={option.id}
            onClick={() => onSelect(option)}
            className="w-full p-4 rounded-xl bg-white/5 border border-white/10 hover:border-[#0062d1] hover:bg-[#0062d1]/10 text-left transition-all flex items-center justify-between group active:scale-[0.98]"
          >
            <div className="pr-4">
              <span className="font-medium text-slate-200 group-hover:text-white block text-sm sm:text-base">
                {option.label}
              </span>
              {option.sub && (
                <span className="text-xs text-slate-500 mt-1 block leading-snug">{option.sub}</span>
              )}
            </div>
            <ChevronRight
              size={18}
              className="text-slate-500 group-hover:text-[#0062d1] opacity-50 group-hover:opacity-100 shrink-0"
            />
          </button>
        ))}
      </div>
    </>
  );
}

interface SimulatorResultCardProps {
  result: {
    range: string;
    model: string;
    risks: string[];
  };
  onReset: () => void;
}

function SimulatorResultCard({ result, onReset }: SimulatorResultCardProps) {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 h-full flex flex-col">
      <div className="flex justify-between items-start mb-6">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-[10px] font-bold uppercase tracking-wider">
          Strategy Ready
        </div>
        <button
          onClick={onReset}
          className="text-xs text-slate-500 hover:text-white flex items-center gap-1 transition-colors p-1 hover:bg-white/5 rounded"
        >
          <RotateCcw size={12} /> Restart
        </button>
      </div>

      <div className="mb-6 text-center">
        <div className="text-xs text-slate-400 uppercase tracking-widest mb-2">
          Estimated Investment Range
        </div>
        <div className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-1 bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
          {result.range}
        </div>
      </div>

      <div className="bg-[#020408]/50 rounded-xl p-4 border border-white/10 mb-6 flex-grow">
        <div className="mb-4">
          <span className="text-[10px] text-slate-500 uppercase font-bold block mb-1">
            Recommended Engagement
          </span>
          <div className="text-[#0062d1] font-bold text-sm sm:text-lg flex items-center gap-2">
            <Cpu size={18} className="shrink-0" />
            {result.model}
          </div>
        </div>

        <div className="border-t border-white/5 pt-3">
          <span className="text-[10px] text-slate-500 uppercase font-bold block mb-2">
            Risk Assessment
          </span>
          {result.risks.length > 0 ? (
            <ul className="space-y-2">
              {result.risks.map((risk, i) => (
                <li key={i} className="text-xs text-orange-300 flex items-start gap-2">
                  <AlertTriangle size={12} className="mt-0.5 shrink-0" />
                  {risk}
                </li>
              ))}
            </ul>
          ) : (
            <div className="text-xs text-emerald-400 flex items-center gap-2">
              <ShieldCheck size={14} /> Standard Risk Profile. Good to go.
            </div>
          )}
        </div>
      </div>

      <button className="w-full py-4 bg-gradient-to-r from-[#0062d1] to-cyan-600 hover:shadow-lg hover:shadow-cyan-500/20 text-white font-bold rounded-xl transition-all flex items-center justify-center gap-2 group active:scale-[0.98]">
        Book Consultation
        <ChevronRightSquare size={18} className="group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}

export default function ProjectSimulator() {
  const { currentStep, totalSteps, stepData, isFinished, isAnimating, result, handlers } =
    useProjectSimulatorLogic();

  return (
    <div className="w-full bg-[#0f121a]/60 backdrop-blur-xl border border-white/10 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl flex flex-col min-h-[480px]">
      <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#0062d1] rounded-full blur-[100px] opacity-[0.15] pointer-events-none"></div>
      {!isFinished && (
        <SimulatorProgressBar current={currentStep} total={totalSteps} onBack={handlers.back} />
      )}
      <div
        className={`flex-grow flex flex-col relative z-10 transition-opacity duration-300 ${
          isAnimating ? 'opacity-0 translate-x-4' : 'opacity-100 translate-x-0'
        }`}
      >
        {!isFinished ? (
          <SimulatorStepCard
            question={stepData.question}
            options={stepData.options}
            onSelect={handlers.select}
          />
        ) : (
          <SimulatorResultCard result={result} onReset={handlers.reset} />
        )}
      </div>
    </div>
  );
}
