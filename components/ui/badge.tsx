import React, { ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'default' | 'success' | 'warning' | 'error' | 'info' | 'primary';
  icon?: LucideIcon;
  size?: 'sm' | 'md';
  className?: string;
}

export function Badge({ 
  children, 
  variant = 'default',
  icon: Icon,
  size = 'md',
  className = '' 
}: BadgeProps) {
  const baseStyles = 'inline-flex items-center gap-2 rounded-full font-bold uppercase tracking-wider border';
  
  const variants = {
    default: 'bg-white/5 border-white/10 text-slate-400',
    success: 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400',
    warning: 'bg-yellow-500/10 border-yellow-500/20 text-yellow-400',
    error: 'bg-red-500/10 border-red-500/20 text-red-400',
    info: 'bg-blue-500/10 border-blue-500/20 text-blue-400',
    primary: 'bg-[#0062d1]/10 border-[#0062d1]/20 text-[#0062d1]',
  };
  
  const sizes = {
    sm: 'px-2 py-1 text-[9px]',
    md: 'px-3 py-1 text-[10px]',
  };
  
  const iconSizes = {
    sm: 10,
    md: 12,
  };
  
  return (
    <span className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}>
      {Icon && <Icon size={iconSizes[size]} />}
      {children}
    </span>
  );
}
