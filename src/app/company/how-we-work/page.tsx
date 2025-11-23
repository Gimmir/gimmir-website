'use client';

import React from 'react';
import { FadeIn, SectionHeading, Button } from '@/components/ui';
import { ArrowRight, ArrowLeft, CheckCircle2 } from 'lucide-react';
import Link from 'next/link';

export default function HowWeWorkPage() {
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
              label="Our Process"
              title="How We Work"
              subtitle="A proven methodology that delivers results consistently."
              light
            />
          </FadeIn>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="space-y-12">
            {[
              {
                number: 1,
                title: 'Discovery & Strategy',
                description:
                  'We start by deeply understanding your business, goals, and challenges. Through workshops and research, we develop a comprehensive strategy.',
                points: [
                  'Stakeholder interviews',
                  'Market analysis',
                  'Competitive research',
                  'Technical assessment',
                ],
              },
              {
                number: 2,
                title: 'Planning & Design',
                description:
                  'We create detailed plans, wireframes, and prototypes. User experience is at the center of everything we do.',
                points: [
                  'Requirement specification',
                  'Architecture planning',
                  'UI/UX design',
                  'Technical roadmap',
                ],
              },
              {
                number: 3,
                title: 'Development',
                description:
                  'Using agile methodologies, we build your solution in sprints with regular feedback and iteration.',
                points: [
                  'Agile sprints',
                  'Daily standups',
                  'Code reviews',
                  'Continuous integration',
                ],
              },
              {
                number: 4,
                title: 'Testing & QA',
                description:
                  'Comprehensive testing ensures quality, performance, and security before launch.',
                points: [
                  'Unit testing',
                  'Integration testing',
                  'Performance testing',
                  'Security audits',
                ],
              },
              {
                number: 5,
                title: 'Launch & Support',
                description:
                  'We manage deployment and provide ongoing support to ensure your success.',
                points: [
                  'Deployment planning',
                  'Production monitoring',
                  'Ongoing maintenance',
                  'Performance optimization',
                ],
              },
            ].map((phase, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                  <div className={`order-2 ${i % 2 === 1 ? 'md:order-1' : ''}`}>
                    <div className="relative">
                      <div className="text-8xl font-black text-[#0062D1]/10 mb-4">
                        {phase.number}
                      </div>
                      <div className="absolute top-0 left-0">
                        <h3 className="text-3xl font-bold text-[#0F172A] mb-3">
                          {phase.title}
                        </h3>
                        <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                          {phase.description}
                        </p>
                        <ul className="space-y-2">
                          {phase.points.map((point, j) => (
                            <li
                              key={j}
                              className="flex items-center gap-3 text-gray-700"
                            >
                              <CheckCircle2
                                size={20}
                                className="text-[#0062D1] flex-shrink-0"
                              />
                              {point}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div
                    className={`order-1 ${i % 2 === 1 ? 'md:order-2' : ''}`}
                  >
                    <div className="h-64 bg-gradient-to-br from-blue-50 to-indigo-100 rounded-2xl border-2 border-blue-100 flex items-center justify-center">
                      <div className="text-6xl font-black text-[#0062D1]/20">
                        Phase {phase.number}
                      </div>
                    </div>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Methodology */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-12">
              Our Methodology
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Agile Development',
                description:
                  'We embrace flexibility and continuous improvement through 2-week sprints.',
              },
              {
                title: 'User-Centric Design',
                description:
                  'Every decision is driven by understanding your users and their needs.',
              },
              {
                title: 'DevOps & Automation',
                description:
                  'Automated testing and deployment ensure quality and speed.',
              },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.1}>
                <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0062D1] transition-colors">
                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Communication */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">
              Communication & Transparency
            </h2>
            <p className="text-gray-700 text-lg mb-8 max-w-2xl">
              We believe in keeping you informed every step of the way. You'll
              have direct access to your team, regular status updates, and
              complete transparency on progress and challenges.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                'Weekly sprint reviews',
                'Daily standups available',
                'Slack/Teams integration',
                'Monthly strategy sessions',
                'Real-time project dashboards',
                'Transparent issue tracking',
              ].map((item, i) => (
                <FadeIn key={i} direction="up" delay={i * 0.05}>
                  <div className="flex items-center gap-4 p-4 bg-blue-50 rounded-lg border border-blue-100">
                    <CheckCircle2 size={24} className="text-[#0062D1] flex-shrink-0" />
                    <span className="font-semibold text-gray-700">{item}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0062D1] to-[#0052A3] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Start?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss your project and see how our process can deliver
              exceptional results.
            </p>
            <Link href="/contact">
              <Button
                variant="secondary"
                className="px-8 py-3 text-base font-bold"
              >
                Schedule a Consultation
                <ArrowRight size={20} className="ml-2" />
              </Button>
            </Link>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
