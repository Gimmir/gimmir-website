import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface CardProps {
  icon?: LucideIcon;
  title: string;
  description: string;
  children?: ReactNode;
  className?: string;
}

export function Card({ icon: Icon, title, description, children, className = '' }: CardProps) {
  return (
    <div className={`group relative flex flex-col h-full bg-[#0B0F19]/60 backdrop-blur-sm border border-white/5 rounded-2xl overflow-hidden hover:border-[#0062d1]/40 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 ${className}`}>
      <div className="p-6 sm:p-8 sm:pb-6 relative flex-grow">
        {Icon && (
          <div className="w-10 h-10 rounded-lg bg-red-500/10 flex items-center justify-center mb-4 border border-red-500/20 group-hover:bg-red-500/20 transition-colors">
            <Icon className="text-red-400" size={20} />
          </div>
        )}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{title}</h3>
        <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
      </div>
      {children && (
        <>
          <div className="w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent my-0 shrink-0"></div>
          <div className="px-6 py-5 sm:px-8 sm:py-6 bg-white/[0.02] group-hover:bg-[#0062d1]/[0.05] transition-colors shrink-0">
            {children}
          </div>
        </>
      )}
    </div>
  );
}
