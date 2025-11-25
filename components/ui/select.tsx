import React, { forwardRef } from 'react';
import { ChevronDown } from 'lucide-react';

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
  options: { value: string; label: string }[];
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ label, error, fullWidth = true, options, className = '', ...props }, ref) => {
    return (
      <div className={`space-y-1.5 ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">
            {label}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            className={`
              bg-[#0B0F19] 
              border 
              ${error ? 'border-red-500/50 focus:border-red-500' : 'border-white/10 focus:border-[#0062d1]'} 
              rounded-lg 
              px-4 
              py-3 
              text-white 
              text-sm 
              outline-none 
              transition-all 
              appearance-none 
              cursor-pointer
              ${fullWidth ? 'w-full' : ''}
              ${className}
            `}
            {...props}
          >
            {options.map((option) => (
              <option 
                key={option.value} 
                value={option.value}
                className="bg-[#0B0F19] text-slate-300"
              >
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown 
            size={14} 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-500 pointer-events-none" 
          />
        </div>
        {error && (
          <p className="text-xs text-red-400 ml-1">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = 'Select';
