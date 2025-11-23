'use client';

import React from 'react';
import { FadeIn, SectionHeading } from '@/components/ui';
import { Contact } from '@/components/sections';
import { Mail, Phone, Globe, MapPin } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1a2a4a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <SectionHeading
              label="Get In Touch"
              title="Let's Talk"
              subtitle="Ready to start your next project? Reach out and let's create something amazing together."
              light
            />
          </FadeIn>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 mb-12">
            {/* Contact Information */}
            <div className="space-y-8">
              <FadeIn direction="up">
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0062D1]/10 flex items-center justify-center text-[#0062D1] mb-4">
                    <Mail size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    Email
                  </h3>
                  <a
                    href="mailto:hello@gimmir.com"
                    className="text-gray-600 hover:text-[#0062D1] transition-colors"
                  >
                    hello@gimmir.com
                  </a>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.1}>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0062D1]/10 flex items-center justify-center text-[#0062D1] mb-4">
                    <Phone size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    Phone
                  </h3>
                  <a
                    href="tel:+15551234567"
                    className="text-gray-600 hover:text-[#0062D1] transition-colors"
                  >
                    +1 (555) 123-4567
                  </a>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.2}>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0062D1]/10 flex items-center justify-center text-[#0062D1] mb-4">
                    <Globe size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    Schedule a Call
                  </h3>
                  <a
                    href="https://cal.com/nazar-moroz/first-touch"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-[#0062D1] transition-colors"
                  >
                    Book a meeting
                  </a>
                </div>
              </FadeIn>

              <FadeIn direction="up" delay={0.3}>
                <div>
                  <div className="w-12 h-12 rounded-xl bg-[#0062D1]/10 flex items-center justify-center text-[#0062D1] mb-4">
                    <MapPin size={24} />
                  </div>
                  <h3 className="text-lg font-bold text-[#0F172A] mb-2">
                    Offices
                  </h3>
                  <div className="space-y-2 text-sm text-gray-600">
                    <p>Wilmington, Delaware</p>
                    <p>Tallinn, Estonia</p>
                    <p>Valencia, Spain</p>
                    <p>Mexico City, Mexico</p>
                    <p>Lviv, Ukraine</p>
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <Contact />
            </div>
          </div>
        </div>
      </section>

      {/* Response Time */}
      <section className="py-12 bg-blue-50 rounded-2xl">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <p className="text-gray-700">
              <span className="font-bold text-[#0062D1]">
                Average response time: 2 hours
              </span>
              <br />
              We're committed to getting back to you quickly during business
              hours.
            </p>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
