'use client';

import React from 'react';
import { FadeIn, SectionHeading, Button } from '@/components/ui';
import { ArrowRight, Users, Target, Heart, Zap } from 'lucide-react';
import Link from 'next/link';

const COMPANY_PAGES = [
  {
    title: 'About Us',
    description: 'Learn our story and mission',
    icon: <Heart size={32} />,
    slug: 'about',
  },
  {
    title: 'How We Work',
    description: 'Our process and methodology',
    icon: <Zap size={32} />,
    slug: 'how-we-work',
  },
  {
    title: 'Careers',
    description: 'Join our amazing team',
    icon: <Users size={32} />,
    slug: 'careers',
  },
];

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1a2a4a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <SectionHeading
              label="Company"
              title="About GIMMIR"
              subtitle="Engineering excellence, built on trust and innovation."
              light
            />
          </FadeIn>
        </div>
      </section>

      {/* Company Pages Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {COMPANY_PAGES.map((page, index) => (
              <FadeIn key={page.slug} direction="up" delay={index * 0.1}>
                <Link href={`/company/${page.slug}`}>
                  <div className="group h-full bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-[#0062D1]/30 transition-all duration-300 cursor-pointer">
                    <div className="w-12 h-12 rounded-xl bg-[#0062D1]/10 flex items-center justify-center text-[#0062D1] mb-6 group-hover:scale-110 transition-transform duration-300">
                      {page.icon}
                    </div>

                    <h3 className="text-2xl font-bold text-[#0F172A] mb-3">
                      {page.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {page.description}
                    </p>

                    <div className="flex items-center gap-2 text-[#0062D1] font-semibold group-hover:gap-3 transition-all">
                      Learn More
                      <ArrowRight
                        size={18}
                        className="group-hover:translate-x-1 transition-transform"
                      />
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0062D1]/5 to-[#0062D1]/10">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Years in Business', value: '7+' },
              { label: 'Team Members', value: '120+' },
              { label: 'Projects Delivered', value: '300+' },
              { label: 'Global Offices', value: '5' },
            ].map((stat, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div>
                  <div className="text-5xl font-black text-[#0062D1] mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-600 font-semibold">{stat.label}</div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0062D1] to-[#0052A3] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Let's Build Together
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Ready to transform your vision into reality?
            </p>
            <Link href="/contact">
              <Button
                variant="secondary"
                className="px-8 py-3 text-base font-bold"
              >
                Get in Touch
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
