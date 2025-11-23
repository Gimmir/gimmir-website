'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';
import { Menu, X, ChevronRight, ChevronDown, Zap, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/Button';

interface NavItem {
  title: string;
  type: 'dropdown' | 'link';
  href?: string;
  items?: { label: string; href: string }[];
}

export const Navbar: React.FC = () => {
  const router = useRouter();
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [expandedItem, setExpandedItem] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
      setExpandedItem(null);
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  const handleNavClick = (href: string) => {
    router.push(href);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const toggleAccordion = (title: string) => {
    setExpandedItem(expandedItem === title ? null : title);
  };

  const navItems: NavItem[] = [
    {
      title: 'Services',
      type: 'dropdown',
      items: [
        { label: 'Mobile Development', href: '/services' },
        { label: 'Web Platforms', href: '/services' },
        { label: 'Cloud & DevOps', href: '/services' },
        { label: 'Dedicated Teams', href: '/services' },
        { label: 'Product Design', href: '/services' },
        { label: 'Quality Assurance', href: '/services' },
      ],
    },
    {
      title: 'Success Stories',
      type: 'link',
      href: '/cases',
    },
    {
      title: 'Insights',
      type: 'link',
      href: '/blog',
    },
    {
      title: 'Company',
      type: 'dropdown',
      items: [
        { label: 'About Us', href: '/company/about' },
        { label: 'How We Work', href: '/company/how-we-work' },
        { label: 'Careers', href: '/company/careers' },
      ],
    },
    {
      title: 'Contact',
      type: 'link',
      href: '/contact',
    },
  ];

  const isHome = pathname === '/';
  const isCaseDetail = pathname.startsWith('/cases/') && pathname !== '/cases';
  const isDarkHeroPage =
    isHome ||
    pathname.startsWith('/services') ||
    pathname.startsWith('/company') ||
    pathname.startsWith('/contact') ||
    pathname.startsWith('/blog') ||
    isCaseDetail;
  const isTransparentHeader = isDarkHeroPage;
  const isDarkNav = scrolled || !isTransparentHeader;
  const logoColor = menuOpen || isDarkNav ? 'text-[#0F172A]' : 'text-white';
  const logoBg =
    menuOpen || isDarkNav
      ? 'bg-[#0062D1] text-white'
      : 'bg-white text-[#0062D1]';
  const linkColor = isDarkNav
    ? 'text-gray-600 hover:text-[#0062D1]'
    : 'text-blue-100 hover:text-white';
  const hamburgerColor = menuOpen || isDarkNav ? 'text-[#0F172A]' : 'text-white';

  const bookBtnClass = `!py-2.5 !px-5 !text-xs !rounded-lg border ${
    isDarkNav
      ? 'border-gray-200 text-gray-700 hover:border-[#0062D1]'
      : 'border-white/20 text-white hover:bg-white/10'
  }`;

  const containerClasses = scrolled
    ? 'py-3 px-4 md:px-6 max-w-7xl mx-2 md:mx-4 lg:mx-auto mt-2 md:mt-4 rounded-xl md:rounded-2xl bg-white/90 backdrop-blur-xl border border-white/20 shadow-2xl shadow-black/5'
    : 'py-4 md:py-6 px-4 md:px-6 max-w-7xl mx-auto bg-transparent border-none shadow-none';

  const CAL_LINK = 'nazar-moroz/first-touch';
  const CAL_CONFIG = '{"layout":"month_view"}';

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-500 animate-slide-down">
        <div
          className={`${containerClasses} transition-all duration-500 ease-out flex justify-between items-center relative z-50`}
        >
          {/* Logo */}
          <Link
            href="/"
            className={`flex items-center gap-2.5 font-bold text-xl tracking-tight ${logoColor} cursor-pointer group relative z-50`}
          >
            <div
              className={`w-9 h-9 rounded-lg flex items-center justify-center shadow-lg transition-transform duration-500 group-hover:rotate-12 ${logoBg}`}
            >
              <Zap size={18} fill="currentColor" />
            </div>
            <span className="font-black tracking-tighter">GIMMIR</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item) =>
              item.type === 'dropdown' ? (
                <div key={item.title} className="relative group">
                  <button
                    className={`relative px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg flex items-center gap-1 ${linkColor}`}
                  >
                    <span className="relative z-10 flex items-center gap-1 group-hover:text-[#0062D1] transition-colors">
                      {item.title}
                      <ChevronDown
                        size={12}
                        className="group-hover:rotate-180 transition-transform duration-300 opacity-70"
                      />
                    </span>
                  </button>
                  <div className="absolute top-full left-0 w-full h-6 bg-transparent"></div>
                  <div className="absolute top-[calc(100%+10px)] left-1/2 -translate-x-1/2 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top scale-95 group-hover:scale-100 w-60">
                    <div className="bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden p-2 ring-1 ring-black/5">
                      {item.items?.map((subItem) => (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          onClick={() => setMenuOpen(false)}
                          className="w-full text-left group/item flex items-center justify-between px-4 py-3 rounded-lg hover:bg-gray-50 transition-all duration-200 block"
                        >
                          <span className="text-sm font-medium text-gray-600 group-hover/item:text-[#0F172A] transition-all duration-200">
                            {subItem.label}
                          </span>
                          <ChevronRight
                            size={14}
                            className="text-[#0062D1] opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-200"
                          />
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={item.title}
                  href={item.href!}
                  onClick={() => setMenuOpen(false)}
                  className={`relative px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 group overflow-hidden rounded-lg ${linkColor}`}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#0062D1] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    {item.title}
                  </span>
                  <span
                    className={`absolute inset-0 bg-[#0062D1]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${!isDarkNav ? 'bg-white/10' : ''}`}
                  />
                </Link>
              )
            )}
          </nav>

          {/* Desktop CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Button
              variant="ghost"
              className={bookBtnClass}
              data-cal-link={CAL_LINK}
              data-cal-config={CAL_CONFIG}
            >
              Book a Meet
            </Button>
            <Link href="/contact">
              <Button
                variant="primary"
                className="!py-2.5 !px-6 !text-xs !rounded-lg shadow-md hover:shadow-xl"
              >
                Start Project
              </Button>
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className={`lg:hidden p-2 relative z-50 transition-colors ${hamburgerColor}`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </header>

      {/* Mobile Menu Overlay - FULL SCREEN */}
      <div
        className={`fixed inset-0 z-40 bg-white transition-all duration-500 flex flex-col lg:hidden ${
          menuOpen
            ? 'opacity-100 visible'
            : 'opacity-0 invisible pointer-events-none'
        }`}
        style={{ top: '0' }}
      >
        {/* Header spacer */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100 shrink-0">
          <div className="w-full h-9"></div>
        </div>

        {/* Menu items - scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-8">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <div
                key={item.title}
                className="border-b border-gray-100 pb-4 mb-4 last:border-0 last:mb-0 last:pb-0"
              >
                {item.type === 'dropdown' ? (
                  <div>
                    <button
                      onClick={() => toggleAccordion(item.title)}
                      className="flex items-center justify-between w-full text-left group"
                    >
                      <span
                        className={`text-xl font-bold transition-colors duration-300 ${
                          expandedItem === item.title
                            ? 'text-[#0062D1]'
                            : 'text-[#0F172A]'
                        }`}
                      >
                        {item.title}
                      </span>
                      <ChevronDown
                        size={20}
                        className={`text-gray-300 transition-transform duration-300 ${
                          expandedItem === item.title
                            ? 'rotate-180 text-[#0062D1]'
                            : ''
                        }`}
                      />
                    </button>
                    <div
                      className={`grid transition-all duration-300 ease-[cubic-bezier(0.04,0.62,0.23,0.98)] ${
                        expandedItem === item.title
                          ? 'grid-rows-[1fr] mt-4 opacity-100'
                          : 'grid-rows-[0fr] mt-0 opacity-0'
                      }`}
                    >
                      <div className="overflow-hidden flex flex-col mt-2">
                        {item.items?.map((subItem) => (
                          <Link
                            key={subItem.href}
                            href={subItem.href}
                            onClick={() => setMenuOpen(false)}
                            className="text-base font-medium text-gray-500 hover:text-[#0062D1] hover:bg-blue-50/50 transition-all text-left py-3 px-4 rounded-lg -ml-2"
                          >
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    href={item.href!}
                    onClick={() => setMenuOpen(false)}
                    className="text-xl font-bold text-[#0F172A] hover:text-[#0062D1] transition-colors text-left w-full flex items-center justify-between group"
                  >
                    {item.title}
                    <ArrowRight
                      size={20}
                      className="text-gray-300 -translate-x-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-0 group-hover:text-[#0062D1] transition-all duration-300"
                    />
                  </Link>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile CTA Buttons */}
        <div className="p-6 bg-gray-50 border-t border-gray-100 shrink-0 pb-safe grid grid-cols-2 gap-3">
          <Button
            variant="outline"
            className="w-full justify-center py-4 text-base font-bold border-gray-200 text-gray-700"
            data-cal-link={CAL_LINK}
            data-cal-config={CAL_CONFIG}
          >
            Book a Meet
          </Button>
          <Link href="/contact" className="w-full">
            <Button
              variant="primary"
              className="w-full justify-center py-4 text-base font-bold shadow-lg shadow-blue-900/20"
            >
              Get in Touch
            </Button>
          </Link>
        </div>
      </div>
    </>
  );
};
