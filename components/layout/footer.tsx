import Link from 'next/link';
import { Linkedin, Github } from 'lucide-react';
import { FOOTER_LINKS } from '@/lib/constants';

export function Footer() {
  return (
    <footer className="relative z-20 bg-[#020408] border-t border-white/5 pt-16 pb-8 px-6 font-mono text-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 mb-16">
          <div className="lg:col-span-2 space-y-4">
            <Link href="/" className="flex items-center gap-2 text-white font-bold tracking-tight text-xl cursor-pointer">
              <div className="w-5 h-5 bg-[#0062d1] rounded-sm"></div>
              Gimmir LLC
            </Link>
            <p className="text-slate-500 text-xs leading-relaxed max-w-xs">
              Engineering digital assets that pass due diligence. <br/>
              Wilmington, DE • USA
            </p>
            <div className="flex items-center gap-4 pt-2">
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Linkedin size={18} /></a>
              <a href="#" className="text-slate-500 hover:text-white transition-colors"><Github size={18} /></a>
            </div>
          </div>

          {FOOTER_LINKS.map((section) => (
            <div key={section.title} className="lg:col-span-1">
              {section.items ? (
                <>
                  <h4 className="text-white font-bold mb-4">{section.title}</h4>
                  <ul className="space-y-2">
                    {section.items.map(item => (
                      <li key={item.name}>
                        <Link href={item.href} className="text-slate-500 hover:text-[#0062d1] transition-colors text-xs text-left">
                          {item.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </>
              ) : (
                <div className="flex flex-col">
                  <Link href={section.href!} className="text-white font-bold mb-4 hover:text-[#0062d1] transition-colors block text-left">{section.title}</Link>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-600">
          <div>2025 © All Rights Reserved.</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white transition-colors">PRIVACY_POLICY</Link>
            <Link href="#" className="hover:text-white transition-colors">TERMS_OF_SERVICE</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
