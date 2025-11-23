'use client';

import React from 'react';
import {
  Zap,
  Mail,
  Linkedin,
  Instagram,
  Facebook,
  Globe,
} from 'lucide-react';

interface Location {
  country: string;
  city: string;
  roles: string;
  color: string;
  shadowColor: string;
}

interface FooterLink {
  name: string;
  id?: string;
  page?: string;
  href?: string;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

interface FooterProps {
  onNavigate?: (page: string, subPage?: string | null) => void;
}

const LOCATIONS: Location[] = [
  {
    country: 'USA',
    city: 'Wilmington, Delaware',
    roles: 'Backoffice',
    color: 'bg-indigo-500',
    shadowColor: 'shadow-indigo-500/50',
  },
  {
    country: 'Estonia',
    city: 'Tallinn',
    roles: 'Backoffice & Development',
    color: 'bg-cyan-500',
    shadowColor: 'shadow-cyan-500/50',
  },
  {
    country: 'Spain',
    city: 'Valencia',
    roles: 'Development',
    color: 'bg-orange-500',
    shadowColor: 'shadow-orange-500/50',
  },
  {
    country: 'Mexico',
    city: 'Mexico City',
    roles: 'Development & Hiring Hub',
    color: 'bg-green-500',
    shadowColor: 'shadow-green-500/50',
  },
  {
    country: 'Ukraine',
    city: 'Lviv',
    roles: 'R&D Center & Development',
    color: 'bg-[#0062D1]',
    shadowColor: 'shadow-blue-600/50',
  },
];

export const Footer: React.FC<FooterProps> = ({ onNavigate = () => {} }) => {
  const footerSections: FooterSection[] = [
    {
      title: 'Services',
      links: [
        { name: 'Mobile Development', id: 'service-mobile' },
        { name: 'Web Platforms', id: 'service-web' },
        { name: 'Cloud & DevOps', id: 'service-cloud' },
        { name: 'Dedicated Teams', id: 'service-teams' },
        { name: 'Product Design', id: 'service-design' },
        { name: 'Quality Assurance', id: 'service-qa' },
      ],
    },
    {
      title: 'Company',
      links: [
        { name: 'About Us', id: 'company-about' },
        { name: 'How We Work', id: 'company-process' },
        { name: 'Careers', id: 'company-careers' },
        { name: 'Success Stories', page: 'cases' },
      ],
    },
    {
      title: 'Resources',
      links: [
        { name: 'Insights', page: 'insights' },
        { name: 'Contact Us', page: 'contact' },
        { name: 'Privacy Policy', href: '#' },
        { name: 'Terms of Service', href: '#' },
      ],
    },
  ];

  const handleFooterLink = (link: FooterLink) => {
    if (link.id) {
      onNavigate(link.id);
    } else if (link.page) {
      onNavigate(link.page);
    } else if (link.href) {
      window.location.href = link.href;
    }
  };

  return (
    <footer className="bg-[#0F172A] text-white border-t border-white/10 font-sans text-sm">
      <div className="container mx-auto px-6 py-12">
        {/* TOP ROW: Brand + Navigation */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-12">
          {/* BRAND & CONTACT (Col 1-4) */}
          <div className="lg:col-span-4 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 font-bold text-2xl tracking-tight text-white mb-4">
                <div className="w-8 h-8 rounded-lg bg-[#0062D1] flex items-center justify-center shadow-lg shadow-blue-900/50 text-base">
                  <Zap size={18} fill="currentColor" />
                </div>
                GIMMIR
              </div>
              <p className="text-gray-400 leading-relaxed mb-6 max-w-sm">
                Engineering the digital future. Precision, scale, and security
                for enterprise leaders.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:hello@gimmir.com"
                  className="flex items-center gap-2 text-white font-bold hover:text-[#0062D1] transition-colors group w-fit"
                >
                  <Mail
                    size={16}
                    className="text-[#0062D1] group-hover:scale-110 transition-transform"
                  />
                  hello@gimmir.com
                </a>
                <div className="flex gap-3 mt-2">
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0062D1] hover:border-[#0062D1] transition-all"
                  >
                    <Linkedin size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0062D1] hover:border-[#0062D1] transition-all"
                  >
                    <Instagram size={16} />
                  </a>
                  <a
                    href="#"
                    className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-[#0062D1] hover:border-[#0062D1] transition-all"
                  >
                    <Facebook size={16} />
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* NAVIGATION LINKS (Col 5-12) */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8 lg:pl-12">
            {footerSections.map((section) => (
              <div key={section.title}>
                <h4 className="font-bold text-white mb-4 uppercase text-xs tracking-wider text-[#0062D1]">
                  {section.title}
                </h4>
                <ul className="space-y-2.5">
                  {section.links.map((item) => (
                    <li key={item.name}>
                      <button
                        onClick={() => handleFooterLink(item)}
                        className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 block text-left"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* MIDDLE ROW: LOCATIONS */}
        <div className="border-y border-white/5 py-8 mb-8">
          <div className="flex flex-col xl:flex-row items-start xl:items-center gap-6 xl:gap-12">
            <div className="flex items-center gap-2 font-bold text-xs uppercase tracking-widest text-gray-500 whitespace-nowrap min-w-fit">
              <Globe size={14} className="text-[#0062D1]" /> Global Hubs
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-y-6 gap-x-4 w-full">
              {LOCATIONS.map((loc) => (
                <div key={loc.country} className="group">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${loc.color} shadow-[0_0_6px] ${loc.shadowColor}`}
                    />
                    <span className="font-bold text-white group-hover:text-[#0062D1] transition-colors text-sm">
                      {loc.country}
                    </span>
                  </div>
                  <div className="pl-3.5 flex flex-col gap-0.5 border-l border-white/5 ml-[3px]">
                    <div className="text-xs text-gray-300 font-medium">
                      {loc.city}
                    </div>
                    <div className="text-[10px] uppercase tracking-wide text-gray-500 font-semibold group-hover:text-[#0062D1] transition-colors">
                      {loc.roles}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* BOTTOM ROW: Copyright & Legal */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600">
          <div>© 2024 Gimmir Inc. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
