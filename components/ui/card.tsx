import React, { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  variant?: 'default' | 'bordered' | 'glass';
  hover?: boolean;
  className?: string;
}

export function Card({ 
  children, 
  variant = 'default', 
  hover = true,
  className = '' 
}: CardProps) {
  const baseStyles = 'rounded-2xl transition-all duration-300';
  
  const variants = {
    default: 'bg-[#0B0F19] border border-white/5',
    bordered: 'bg-[#050810]/50 backdrop-blur-sm border border-white/10',
    glass: 'bg-white/[0.02] backdrop-blur-md border border-white/5',
  };
  
  const hoverStyles = hover 
    ? 'hover:border-[#0062d1]/50 hover:shadow-2xl hover:shadow-blue-900/10 hover:bg-white/[0.02]' 
    : '';
  
  return (
    <div className={`${baseStyles} ${variants[variant]} ${hoverStyles} ${className}`}>
      {children}
    </div>
  );
}

interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className = '' }: CardHeaderProps) {
  return (
    <div className={`p-6 sm:p-8 border-b border-white/5 ${className}`}>
      {children}
    </div>
  );
}

interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className = '' }: CardContentProps) {
  return (
    <div className={`p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}

interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className = '' }: CardFooterProps) {
  return (
    <div className={`p-6 sm:p-8 pt-0 mt-auto ${className}`}>
      {children}
    </div>
  );
}
