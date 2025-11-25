import React, { forwardRef } from 'react';
import { LucideIcon } from 'lucide-react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  icon?: LucideIcon;
  fullWidth?: boolean;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, icon: Icon, fullWidth = true, className = '', ...props }, ref) => {
    return (
      <div className={`space-y-1.5 ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">
            {label}
          </label>
        )}
        <div className="relative">
          <input
            ref={ref}
            className={`
              bg-[#0B0F19] 
              border 
              ${error ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#0062d1]'} 
              rounded-lg 
              ${Icon ? 'pr-4 py-3 pl-11' : 'px-4 py-3'} 
              text-white 
              text-sm 
              outline-none 
              transition-all 
              placeholder:text-slate-700
              ${fullWidth ? 'w-full' : ''}
              ${className}
            `}
            {...props}
          />
          {Icon && (
            <Icon 
              size={16} 
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" 
            />
          )}
        </div>
        {error && (
          <p className="text-xs text-red-400 ml-1">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
