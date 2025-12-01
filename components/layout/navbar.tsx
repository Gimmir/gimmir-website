"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ChevronDown, Linkedin, Github, Globe } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { getCalApi } from "@calcom/embed-react"; // Імпорт бібліотеки
import { NAV_LINKS } from '@/lib/constants';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeMobileDropdown, setActiveMobileDropdown] = useState<string | null>(null);
  const [activeDesktopDropdown, setActiveDesktopDropdown] = useState<string | null>(null);
  const pathname = usePathname();

  // Ініціалізація Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "first-touch" });
      cal("ui", { 
        "cssVarsPerTheme": { 
          "light": { "cal-brand": "#0162d1" },
          "dark": { "cal-brand": "#0162d1" }
        }, 
        "hideEventTypeDetails": false, 
        "layout": "month_view" 
      });
    })();
  }, []);

  // Close menus on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setActiveDesktopDropdown(null);
  }, [pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      // Prevent scrolling while maintaining position
      const scrollY = window.scrollY;
      document.body.style.position = 'fixed';
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = '100%';
    } else {
      // Restore scrolling and position
      const scrollY = document.body.style.top;
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      
      // Temporarily disable smooth scrolling to prevent "swiping" effect
      document.documentElement.style.scrollBehavior = 'auto';
      window.scrollTo(0, parseInt(scrollY || '0') * -1);
      // Restore smooth scrolling after a brief delay
      setTimeout(() => {
        document.documentElement.style.scrollBehavior = '';
      }, 50);
    }
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileDropdown = (title: string) => {
    setActiveMobileDropdown(activeMobileDropdown === title ? null : title);
  };

  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50 px-4 pt-4 sm:pt-6 flex justify-center pointer-events-none animate-fade-in-up">
        <nav className={`pointer-events-auto w-full max-w-7xl backdrop-blur-xl border rounded-full px-4 py-3 sm:px-6 sm:py-4 flex justify-between items-center transition-all duration-300 ${scrolled ? 'bg-[#0f121a]/95 border-white/10 shadow-2xl scale-[0.98]' : 'bg-[#0f121a]/60 border-white/5 shadow-lg'}`}>
          <Link href="/" className="flex items-center gap-2 cursor-pointer group shrink-0">
            <div className="relative w-8 h-8 group-hover:scale-105 transition-transform">
              <Image 
                src="/logo.svg" 
                alt="Gimmir Logo" 
                fill 
                className="object-contain"
              />
            </div>
            <span className="text-lg font-bold tracking-tight text-white">GIMMIR</span>
          </Link>
          
          <div className="hidden lg:flex items-center gap-6 text-sm font-medium text-slate-300/90">
            {NAV_LINKS.map((link) => (
              <div 
                key={link.title} 
                className="relative"
                onMouseEnter={() => setActiveDesktopDropdown(link.title)}
                onMouseLeave={() => setActiveDesktopDropdown(null)}
              >
                {link.items ? (
                  <>
                    <button className={`hover:text-white transition-colors flex items-center gap-1 py-2 ${activeDesktopDropdown === link.title ? 'text-white' : ''}`}>
                      {link.title}
                      <ChevronDown size={12} className={`opacity-50 transition-transform duration-300 ${activeDesktopDropdown === link.title ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`absolute top-full left-1/2 -translate-x-1/2 pt-6 transition-all duration-200 transform w-64 ${activeDesktopDropdown === link.title ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible translate-y-2'}`}>
                      <div className="bg-[#0B0F19] border border-white/10 rounded-xl p-2 shadow-xl backdrop-blur-md overflow-hidden ring-1 ring-white/5 relative">
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0B0F19] border-t border-l border-white/10 rotate-45 transform"></div>
                        {link.items.map((item) => (
                          <Link 
                            key={item.name} 
                            href={item.href}
                            className="block w-full text-left px-4 py-2.5 text-sm text-slate-400 hover:text-white hover:bg-white/5 rounded-lg transition-colors relative z-10"
                            onClick={() => setActiveDesktopDropdown(null)}
                          >
                            {item.name}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </>
                ) : (
                  <Link href={link.href || '#'} className="hover:text-white transition-colors relative group py-2">
                    {link.title}
                    <span className="absolute bottom-0 left-0 w-0 h-px bg-[#0062d1] transition-all group-hover:w-full"></span>
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="hidden lg:flex items-center gap-3 shrink-0">
             {/* Desktop Button: Оновлено для Cal.com */}
             <button 
               data-cal-namespace="first-touch"
               data-cal-link="nazar-moroz/first-touch"
               data-cal-config='{"layout":"month_view"}'
               className="px-5 py-2 text-white text-sm font-semibold rounded-full border border-white/20 hover:bg-white/10 transition-colors whitespace-nowrap"
             >
               Book a Meet
             </button>
             <button className="px-5 py-2 bg-white text-black text-sm font-semibold rounded-full hover:bg-slate-200 transition-colors shadow-[0_0_15px_rgba(255,255,255,0.1)] whitespace-nowrap">Estimate Project</button>
          </div>
          
          {!isMenuOpen && (
            <button className="lg:hidden p-2 text-slate-300 active:text-white transition-colors hover:bg-white/5 rounded-full" onClick={() => setIsMenuOpen(true)}>
              <Menu size={24} />
            </button>
          )}
        </nav>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 z-[100] bg-[#020408] flex flex-col"
          >
            <div className="px-6 py-5 flex justify-between items-center border-b border-white/5 bg-[#020408]">
               <div className="flex items-center gap-2">
                  <div className="relative w-8 h-8">
                    <Image 
                      src="/logo.svg" 
                      alt="Gimmir Logo" 
                      fill 
                      className="object-contain"
                    />
                  </div>
                  <span className="text-lg font-bold tracking-tight text-white">GIMMIR</span>
               </div>
               <button onClick={() => setIsMenuOpen(false)} className="p-2 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition-colors">
                 <X size={28} />
               </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 flex flex-col">
              <div className="flex flex-col gap-2 mb-8">
                {NAV_LINKS.map((link, index) => (
                  <motion.div 
                    key={link.title} 
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + index * 0.05 }}
                    className="border-b border-white/5 last:border-0 pb-2"
                  >
                    {link.items ? (
                      <>
                        <button onClick={() => toggleMobileDropdown(link.title)} className="flex items-center justify-between w-full py-4 text-2xl font-bold text-slate-200 hover:text-white transition-colors text-left">
                          {link.title}
                          <ChevronDown size={20} className={`transition-transform duration-300 text-slate-500 ${activeMobileDropdown === link.title ? 'rotate-180 text-[#0062d1]' : ''}`} />
                        </button>
                        <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeMobileDropdown === link.title ? 'max-h-[500px] opacity-100 mb-4' : 'max-h-0 opacity-0'}`}>
                          <div className="pl-4 flex flex-col gap-3 border-l-2 border-[#0062d1]/20 ml-2">
                            {link.items.map((item) => (
                              <Link 
                                key={item.name} 
                                href={item.href} 
                                className="block w-full text-left text-base text-slate-400 hover:text-[#0062d1] py-1 font-medium"
                                onClick={() => setIsMenuOpen(false)}
                              >
                                {item.name}
                              </Link>
                            ))}
                          </div>
                        </div>
                      </>
                    ) : (
                      <Link 
                        href={link.href || '#'} 
                        className="block py-4 text-2xl font-bold text-slate-200 hover:text-white transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {link.title}
                      </Link>
                    )}
                  </motion.div>
                ))}
              </div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-auto space-y-4 pb-8"
              >
                {/* Mobile Button: Оновлено для Cal.com */}
                <button 
                  data-cal-namespace="first-touch"
                  data-cal-link="nazar-moroz/first-touch"
                  data-cal-config='{"layout":"month_view"}'
                  className="w-full py-4 text-white font-bold text-lg rounded-xl border border-white/20 hover:bg-white/10 transition-colors"
                >
                  Book a Meet
                </button>
                <button className="w-full py-4 bg-[#0062d1] rounded-xl font-bold text-lg text-white active:bg-[#0052b3] shadow-lg shadow-blue-900/20">Estimate Project</button>
                <div className="flex justify-center gap-8 pt-6 opacity-60">
                   <a href="#" className="text-slate-400 hover:text-white"><Linkedin size={24} /></a>
                   <a href="#" className="text-slate-400 hover:text-white"><Github size={24} /></a>
                   <a href="#" className="text-slate-400 hover:text-white"><Globe size={24} /></a>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}