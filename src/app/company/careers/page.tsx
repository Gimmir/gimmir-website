'use client';

import React from 'react';
import { FadeIn, SectionHeading, Button } from '@/components/ui';
import { ArrowRight, ArrowLeft, MapPin, Briefcase } from 'lucide-react';
import Link from 'next/link';

interface JobOpening {
  id: string;
  title: string;
  location: string;
  type: string;
  department: string;
  description: string;
}

const OPENINGS: JobOpening[] = [
  {
    id: 'senior-backend-engineer',
    title: 'Senior Backend Engineer',
    location: 'Estonia / Remote',
    type: 'Full-time',
    department: 'Engineering',
    description:
      'Lead backend development for enterprise-scale applications using Node.js and AWS.',
  },
  {
    id: 'frontend-engineer',
    title: 'Frontend Engineer (React)',
    location: 'Spain / Remote',
    type: 'Full-time',
    department: 'Engineering',
    description:
      'Build beautiful, performant web applications with React and modern frontend technologies.',
  },
  {
    id: 'devops-engineer',
    title: 'DevOps Engineer',
    location: 'USA / Remote',
    type: 'Full-time',
    department: 'Infrastructure',
    description:
      'Design and maintain Kubernetes infrastructure supporting our global operations.',
  },
  {
    id: 'product-manager',
    title: 'Product Manager',
    location: 'Ukraine / Remote',
    type: 'Full-time',
    department: 'Product',
    description:
      'Lead product strategy and vision for our client-facing projects.',
  },
  {
    id: 'ux-designer',
    title: 'UX/UI Designer',
    location: 'Mexico / Remote',
    type: 'Full-time',
    department: 'Design',
    description:
      'Create exceptional user experiences for web and mobile applications.',
  },
  {
    id: 'qa-engineer',
    title: 'QA Engineer (Automation)',
    location: 'Remote',
    type: 'Full-time',
    department: 'Quality',
    description:
      'Build and maintain automated testing frameworks for enterprise applications.',
  },
];

export default function CareersPage() {
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
              label="Join Our Team"
              title="Careers at GIMMIR"
              subtitle="Help us build amazing products that transform businesses around the world."
              light
            />
          </FadeIn>
        </div>
      </section>

      {/* Why Join Us */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-12">
              Why Join GIMMIR?
            </h2>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Global Team',
                description:
                  'Work with talented engineers from around the world.',
              },
              {
                title: 'Continuous Learning',
                description:
                  'Grow your skills with training, conferences, and mentorship.',
              },
              {
                title: 'Cutting-Edge Tech',
                description:
                  'Work with modern technologies and best practices.',
              },
              {
                title: 'Flexible Work',
                description:
                  'Remote-friendly culture with flexible working arrangements.',
              },
              {
                title: 'Impact',
                description:
                  'Build products that matter and solve real problems.',
              },
              {
                title: 'Competitive Pay',
                description:
                  'Market-competitive salaries and comprehensive benefits.',
              },
            ].map((item, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-8 border border-blue-100">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                    {item.title}
                  </h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-12">
              Open Positions
            </h2>
          </FadeIn>

          <div className="space-y-4">
            {OPENINGS.map((job, i) => (
              <FadeIn key={job.id} direction="up" delay={i * 0.05}>
                <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-[#0062D1] hover:shadow-lg transition-all group">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                    <div>
                      <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0062D1] transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-gray-600 mb-4">{job.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm">
                        <div className="flex items-center gap-2 text-gray-600">
                          <MapPin size={16} className="text-[#0062D1]" />
                          {job.location}
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Briefcase size={16} className="text-[#0062D1]" />
                          {job.type}
                        </div>
                        <div className="px-3 py-1 bg-blue-100 text-[#0062D1] text-xs font-bold rounded-full">
                          {job.department}
                        </div>
                      </div>
                    </div>
                    <Button
                      variant="primary"
                      className="flex-shrink-0"
                    >
                      Apply Now
                      <ArrowRight size={16} className="ml-2" />
                    </Button>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Culture */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-3xl font-bold text-[#0F172A] mb-8">
              Our Culture
            </h2>
            <div className="prose prose-lg max-w-none prose-headings:text-[#0F172A] prose-headings:font-bold text-gray-700">
              <p>
                At GIMMIR, we believe that great work comes from great people
                working together. We foster a culture of:
              </p>
              <ul>
                <li>
                  <strong>Ownership:</strong> You own your work and its
                  outcomes
                </li>
                <li>
                  <strong>Collaboration:</strong> We succeed together, not in
                  silos
                </li>
                <li>
                  <strong>Excellence:</strong> We push for the best in
                  everything we do
                </li>
                <li>
                  <strong>Growth:</strong> We invest in our people and their
                  development
                </li>
                <li>
                  <strong>Balance:</strong> We value work-life balance and
                  well-being
                </li>
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0062D1] to-[#0052A3] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Don't See Your Role?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Send us your resume and let us know what interests you.
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
