'use client';

import React from 'react';
import { FadeIn, SectionHeading, Button } from '@/components/ui';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      <section className="pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/company">
            <button className="flex items-center gap-2 text-[#0062D1] hover:text-[#0052A3] font-semibold transition-colors">
              <ArrowLeft size={20} />
              Back to Company
            </button>
          </Link>
        </div>
      </section>

      {/* Hero */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1a2a4a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <SectionHeading
              label="Our Story"
              title="About GIMMIR"
              subtitle="Founded on the belief that great engineering transforms businesses."
              light
            />
          </FadeIn>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 md:py-32">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="space-y-8 text-gray-700 leading-relaxed text-lg">
              <p>
                GIMMIR was founded in 2017 with a simple mission: to deliver
                exceptional engineering that drives real business impact. What
                started as a small team of passionate developers has grown into
                a global organization spanning 5 continents.
              </p>

              <p>
                We believe that great software is more than just code. It's
                about understanding your business, your users, and your vision.
                It's about creating solutions that scale, perform, and delight.
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A] mt-12">
                Our Values
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
                {[
                  {
                    title: 'Excellence',
                    description:
                      'We never settle for good enough. Every project gets our best effort.',
                  },
                  {
                    title: 'Integrity',
                    description:
                      'Transparency and honesty in every interaction with clients and team members.',
                  },
                  {
                    title: 'Innovation',
                    description:
                      'We constantly explore new technologies and methodologies to stay ahead.',
                  },
                  {
                    title: 'Collaboration',
                    description:
                      'We work together, with our teams and clients, to achieve shared goals.',
                  },
                ].map((value, i) => (
                  <FadeIn key={i} direction="up" delay={i * 0.1}>
                    <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 border border-blue-100">
                      <h4 className="font-bold text-[#0F172A] mb-2">
                        {value.title}
                      </h4>
                      <p className="text-gray-600">{value.description}</p>
                    </div>
                  </FadeIn>
                ))}
              </div>

              <h3 className="text-2xl font-bold text-[#0F172A] mt-12">
                Our Global Presence
              </h3>
              <p>
                With offices in USA, Estonia, Spain, Mexico, and Ukraine, we
                bring global expertise with local understanding. Our distributed
                team enables us to serve clients across all time zones while
                maintaining our culture and values.
              </p>

              <h3 className="text-2xl font-bold text-[#0F172A] mt-12">
                Our Impact
              </h3>
              <p>
                We've delivered over 300 projects for clients ranging from
                startups to Fortune 500 companies. Our work spans fintech,
                healthcare, e-commerce, and many other industries. But what
                matters most to us is the positive impact our solutions create
                for our clients and their users.
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0062D1] to-[#0052A3] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Partner with Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how we can help transform your vision into reality.
            </p>
            <Link href="/contact">
              <Button
                variant="secondary"
                className="px-8 py-3 text-base font-bold"
              >
                Start a Project
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
