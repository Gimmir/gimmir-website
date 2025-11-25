"use client";

import React, { useEffect, useRef, ReactNode } from 'react';
import { Layers } from 'lucide-react';

export function AboutHeroSection() {
    // === ЛОГІКА ПАРАЛАКСУ ===
    const targetX = useRef(0);
    const targetY = useRef(0);
    const currentX = useRef(0);
    const currentY = useRef(0);
    const animationRef = useRef<number | undefined>(undefined);
    const sectionRef = useRef<HTMLElement>(null);

    const animateParallax = () => {
        const smoothing = 0.05; 
        currentX.current += (targetX.current - currentX.current) * smoothing;
        currentY.current += (targetY.current - currentY.current) * smoothing;

        const layers = sectionRef.current?.querySelectorAll('[data-parallax-layer]');
        layers?.forEach((layer) => {
            const depth = parseFloat(layer.getAttribute('data-depth') || '0');
            const translateX = currentX.current * depth * 20;
            const translateY = currentY.current * depth * 20;
            (layer as HTMLElement).style.transform = `translate(${translateX}px, ${translateY}px)`;
        });

        const lightShape = sectionRef.current?.querySelector('.light-shape') as HTMLElement;
        if (lightShape) {
            const depth = -4; 
            const translateX = currentX.current * depth; 
            const translateY = currentY.current * depth;
            lightShape.style.transform = `translate(-50%, 0%) translate(${translateX}px, ${translateY}px)`;
        }

        animationRef.current = requestAnimationFrame(animateParallax);
    };

    const handleMouseMove = (event: MouseEvent) => {
        if (sectionRef.current) {
            const { clientX, clientY } = event;
            const { offsetWidth, offsetHeight } = sectionRef.current;
            targetX.current = (clientX / offsetWidth) * 2 - 1;
            targetY.current = (clientY / offsetHeight) * 2 - 1;
        }
    };

    useEffect(() => {
        window.addEventListener('mousemove', handleMouseMove);
        animationRef.current = requestAnimationFrame(animateParallax);
        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationRef.current) {
                cancelAnimationFrame(animationRef.current);
            }
        };
    }, []);

    // Генеруємо випадкові зірки
    const StarField = ({ layer, opacityMult }: { layer: number, opacityMult: number }) => {
        const stars = Array.from({ length: 120 }).map((_, i) => ({
            id: `${layer}-${i}`,
            x: Math.random() * 100, 
            y: Math.random() * 100,
            size: Math.random() * 1.5 + 1,
            opacity: Math.random() * 0.5 + 0.5,
        }));
        
        return (
            <div 
                data-parallax-layer 
                data-depth={layer}
                className="absolute inset-0" 
            >
                {stars.map(star => (
                    <div
                        key={star.id}
                        className={`absolute rounded-full bg-white`}
                        style={{
                            left: `${star.x}%`,
                            top: `${star.y}%`,
                            width: `${star.size}px`,
                            height: `${star.size}px`,
                            opacity: (star.opacity / layer) * opacityMult, 
                            boxShadow: star.size > 2 ? `0 0 ${star.size / 2}px rgba(255, 255, 255, 0.5)` : 'none',
                        }}
                    ></div>
                ))}
            </div>
        );
    };

    return (
      <section 
        ref={sectionRef}
        className="relative z-10 px-6 overflow-hidden bg-[#050810] text-center min-h-[100dvh] flex flex-col items-center justify-center"
      >
        
        {/* 1. Background Layers (Stars) - Z0 */}
        <div className="absolute inset-0 z-0">
            <StarField layer={0.5} opacityMult={0.4} />
            <StarField layer={1.5} opacityMult={0.7} />
            <StarField layer={2.5} opacityMult={1.0} />
        </div>
        
        {/* 2. Central Light Shape (Кругла Сфера) - Z10 (Behind Stars and Content) */}
        <div 
            className="light-shape absolute top-0 left-1/2 -translate-x-1/2 
                       w-[100vw] h-[100vw] max-w-[1400px] max-h-[1400px] 
                       rounded-full z-10 pointer-events-none 
                       transition-transform duration-100 ease-out"
            style={{ 
                background: 'radial-gradient(circle at center, rgba(30, 144, 255, 0.35) 0%, rgba(30, 144, 255, 0.1) 40%, rgba(5, 8, 16, 0) 65%)',
                boxShadow: '0 0 150px rgba(0, 100, 255, 0.4)',
                top: '-500px',
                transform: `translate(-50%, 0%)`,
            }}
        >
             {/* Внутрішній, яскравіший край (імітація краю купола) */}
             <div 
                className="absolute top-[35%] left-1/2 -translate-x-1/2
                           w-[60%] h-[1px] bg-blue-400/50 opacity-80"
             ></div>
             <div 
                className="absolute top-[35%] left-1/2 -translate-x-1/2 
                           w-[70%] h-[1px] bg-white/10 opacity-50 blur-[2px]"
             ></div>
        </div>
        
        {/* 3. Затемнення для покращення читабельності тексту - Z20 (Overlay on stars and sphere) */}
        <div className="absolute inset-0 bg-[#050810]/70 z-20 pointer-events-none"></div>
        
        {/* 4. Content - Накладаємо контент - Z30 */}
        <div className="max-w-7xl mx-auto relative z-30 w-full pt-20 pb-16"> 
          
          {/* Top Badge (THE ANTI-AGENCY MANIFESTO) */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/20 backdrop-blur-md mb-8 shadow-lg shadow-black/20 mx-auto opacity-0 animate-fade-in-up">
            <Layers size={14} className="text-blue-400" />
            <span className="text-xs font-mono text-white tracking-wider uppercase">THE ANTI-AGENCY MANIFESTO</span>
          </div>

          {/* Headline (Centralized and Powerful) */}
          <h1 className="text-4xl sm:text-7xl font-extrabold text-white mb-6 leading-tight tracking-tighter max-w-5xl mx-auto drop-shadow-2xl opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            Engineered to Fix the <span className="bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-red-500">Broken Outsourcing</span> Model.
          </h1>

          {/* Updated Description with correct bold style */}
          <p className="text-lg text-slate-400 max-w-3xl mx-auto font-light leading-relaxed mb-12 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
             We saw the &quot;bait and switch,&quot; the communication gaps, and the spaghetti code. So we built the antidote: A technical partner that operates with the <span className="font-semibold text-white">precision of an in-house team</span>.
          </p>
          
        </div>
        
        {/* Додаємо вертикальну лінію для плавного переходу */}
        <div className="absolute -bottom-24 left-1/2 -translate-x-1/2 h-48 w-px bg-gradient-to-b from-transparent via-[#0062d1]/50 to-[#080C14] z-30"></div>
      </section>
    );
}
