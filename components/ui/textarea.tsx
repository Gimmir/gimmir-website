import React, { forwardRef } from 'react';

interface TextareaProps extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label?: string;
  error?: string;
  fullWidth?: boolean;
}

export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ label, error, fullWidth = true, className = '', ...props }, ref) => {
    return (
      <div className={`space-y-1.5 ${fullWidth ? 'w-full' : ''}`}>
        {label && (
          <label className="text-[10px] uppercase tracking-wider font-semibold text-slate-500 ml-1">
            {label}
          </label>
        )}
        <textarea
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
            placeholder:text-slate-700 
            resize-none
            ${fullWidth ? 'w-full' : ''}
            ${className}
          `}
          {...props}
        />
        {error && (
          <p className="text-xs text-red-400 ml-1">{error}</p>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
