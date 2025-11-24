/**
 * Reusable Background Effects Component
 * Reduces code duplication across pages and improves performance
 * by centralizing background rendering logic
 */

interface BackgroundEffectsProps {
  variant?: 'default' | 'dark' | 'gradient';
  className?: string;
}

export function BackgroundEffects({ 
  variant = 'default',
  className = ''
}: BackgroundEffectsProps) {
  if (variant === 'dark') {
    return (
      <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#0062d1] rounded-full blur-[120px] opacity-[0.08]"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-purple-600 rounded-full blur-[120px] opacity-[0.05]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>
    );
  }

  if (variant === 'gradient') {
    return (
      <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
        <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[120%] sm:w-[80%] h-[400px] sm:h-[600px] bg-[#0062d1] rounded-[100%] blur-[80px] sm:blur-[120px] opacity-[0.15]"></div>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`fixed inset-0 pointer-events-none z-0 ${className}`}>
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-[#0062d1] rounded-full blur-[120px] opacity-[0.08]"></div>
      <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-emerald-600 rounded-full blur-[120px] opacity-[0.05]"></div>
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
    </div>
  );
}
