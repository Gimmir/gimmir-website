import { ButtonHTMLAttributes, forwardRef, ReactNode } from 'react';
import { LucideIcon } from 'lucide-react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  icon?: LucideIcon;
  children: ReactNode;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', icon: Icon, children, className = '', ...props }, ref) => {
    const baseStyles = 'font-bold rounded-full transition-all flex items-center justify-center gap-2 group';
    
    const variants = {
      primary: 'bg-[#0062d1] hover:bg-[#0052b3] text-white shadow-[0_0_40px_-10px_rgba(0,98,209,0.5)]',
      secondary: 'bg-white text-black hover:bg-slate-200 shadow-[0_0_15px_rgba(255,255,255,0.1)]',
      outline: 'bg-[#0f121a] hover:bg-[#1a1f2e] border border-white/10 text-slate-300'
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm',
      md: 'px-8 py-4 text-base',
      lg: 'px-10 py-5 text-lg'
    };

    return (
      <button
        ref={ref}
        className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
        {...props}
      >
        {children}
        {Icon && <Icon size={18} className="group-hover:translate-x-1 transition-transform" />}
      </button>
    );
  }
);

Button.displayName = 'Button';
