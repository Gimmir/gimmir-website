import { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface SectionHeaderProps {
  title: ReactNode;
  subtitle: string;
  badge?: string;
  badgeIcon?: LucideIcon;
  align?: 'center' | 'left';
}

export function SectionHeader({ 
  title, 
  subtitle, 
  badge, 
  badgeIcon: Icon, 
  align = 'center' 
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'left' ? 'text-left' : 'text-center'} relative px-4 z-10`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6 ${align === 'center' ? 'mx-auto' : ''}`}>
          {Icon && <Icon size={12} className="text-[#0062d1]" />}
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight text-balance">
        {title}
      </h2>
      <p className="text-slate-400 text-lg max-w-2xl font-light leading-relaxed mx-auto text-balance">
        {subtitle}
      </p>
    </div>
  );
}
