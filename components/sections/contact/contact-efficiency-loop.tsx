import { Calendar, Calculator, Zap } from 'lucide-react';

export function ContactEfficiencyLoopSection() {
  return (
    <section className="relative py-24 px-6 border-t border-white/5 bg-[#050A14] overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-6">
                <Zap size={12} />
                <span>Instant Access</span>
            </div>
            
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
                Prefer self-service estimation?
            </h2>
            
            <p className="text-slate-400 text-lg font-light mb-10 max-w-2xl mx-auto">
                Get an instant budget and risk assessment for your project without waiting for an email.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <a 
                    href="/estimate" 
                    className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-600 text-white font-bold rounded-full transition-all shadow-lg shadow-emerald-500/20 hover:scale-105 active:scale-95 flex items-center justify-center gap-2 group"
                >
                    <Calculator size={18} />
                    <span>Start Project Simulator</span>
                </a>
                
                <a 
                    href="https://cal.com/" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="w-full sm:w-auto px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium rounded-full transition-all active:scale-95 flex items-center justify-center gap-2 group"
                >
                    <Calendar size={18} className="text-slate-400 group-hover:text-white transition-colors" />
                    <span>Book a Meeting Now</span>
                </a>
            </div>
        </div>
    </section>
  );
}
