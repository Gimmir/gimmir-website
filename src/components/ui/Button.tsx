'use client'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'ghost'
  children: React.ReactNode
  className?: string
}

export const Button = ({ 
  children, 
  variant = 'primary', 
  className = '', 
  ...props 
}: ButtonProps) => {
  const base = "relative px-8 py-3 rounded-lg font-bold text-sm transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden group active:scale-95 cursor-pointer border"
  
  const variants = {
    primary: "bg-[#0062D1] border-[#0062D1] text-white hover:bg-[#0050aa] shadow-lg shadow-blue-900/20 hover:shadow-blue-900/40 disabled:opacity-70 disabled:cursor-not-allowed",
    secondary: "bg-white text-[#0062D1] border border-[#0062D1] hover:bg-blue-50",
    dark: "bg-[#0F172A] border-[#0F172A] text-white hover:bg-[#1e293b] shadow-lg",
    outline: "border-gray-300 text-gray-700 hover:border-[#0062D1] hover:text-[#0062D1] bg-transparent",
    ghost: "border-transparent text-[#0062D1] hover:bg-blue-50 font-semibold px-4"
  }

  return (
    <button 
      className={`${base} ${variants[variant]} ${className}`} 
      {...props}
    >
      <span className="relative z-10 flex items-center gap-2">{children}</span>
    </button>
  )
}
