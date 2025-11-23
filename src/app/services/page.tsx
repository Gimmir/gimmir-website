'use client';

import React from 'react';
import { FadeIn, SectionHeading, Button } from '@/components/ui';
import {
  Smartphone,
  Globe,
  Database,
  Shield,
  Layers,
  Code2,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react';

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  features: string[];
  benefits: string[];
  technologies: string[];
  caseStudies: string[];
}

const SERVICES: Service[] = [
  {
    id: 'mobile',
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications built with cutting-edge technologies for iOS, Android, and beyond.',
    icon: <Smartphone size={32} />,
    features: [
      'Native iOS & Android Development',
      'React Native & Flutter',
      'Progressive Web Apps',
      'Wearable & IoT Apps',
    ],
    benefits: [
      'Fast Time-to-Market',
      'High Performance & UX',
      'Cross-Platform Efficiency',
      'Seamless Platform Integration',
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'TypeScript'],
    caseStudies: ['fitpulse', 'medconnect'],
  },
  {
    id: 'web',
    title: 'Web Platforms',
    description:
      'Scalable, responsive web applications and platforms using modern frameworks and architectures.',
    icon: <Globe size={32} />,
    features: [
      'Single Page Applications (SPA)',
      'Server-Side Rendering (SSR)',
      'Progressive Web Apps',
      'E-Commerce Platforms',
    ],
    benefits: [
      'SEO-Optimized',
      'Lightning-Fast Performance',
      'Mobile-First Design',
      'Real-Time Capabilities',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    caseStudies: ['neobank', 'fitpulse'],
  },
  {
    id: 'cloud',
    title: 'Cloud & DevOps',
    description:
      'Infrastructure automation, CI/CD pipelines, and cloud architecture for enterprise-scale applications.',
    icon: <Database size={32} />,
    features: [
      'Kubernetes Orchestration',
      'Serverless Architecture',
      'Infrastructure as Code',
      'Microservices Design',
    ],
    benefits: [
      'Auto-Scaling',
      'High Availability',
      'Cost Optimization',
      'Security Compliance',
    ],
    technologies: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'Terraform'],
    caseStudies: ['neobank', 'medconnect'],
  },
  {
    id: 'teams',
    title: 'Dedicated Teams',
    description:
      'Build your engineering capacity with skilled, dedicated teams seamlessly integrated with your organization.',
    icon: <Layers size={32} />,
    features: [
      'Remote Team Augmentation',
      'Full Project Ownership',
      'Flexible Scaling',
      '24/7 Support Coverage',
    ],
    benefits: [
      'Cost-Effective',
      'Cultural Fit',
      'Time Zone Advantage',
      'Long-Term Partnership',
    ],
    technologies: ['All Tech Stacks', 'Agile Methodologies', 'DevOps'],
    caseStudies: [],
  },
  {
    id: 'design',
    title: 'Product Design',
    description:
      'User-centric design strategy, UX/UI design, and design systems that drive engagement and conversion.',
    icon: <Code2 size={32} />,
    features: [
      'User Research & Interviews',
      'Wireframing & Prototyping',
      'Design Systems',
      'Accessibility (WCAG)',
    ],
    benefits: [
      'Improved User Satisfaction',
      'Faster Development',
      'Brand Consistency',
      'A/B Testing Ready',
    ],
    technologies: ['Figma', 'Adobe XD', 'Prototyping Tools'],
    caseStudies: ['fitpulse', 'medconnect'],
  },
  {
    id: 'qa',
    title: 'Quality Assurance',
    description:
      'Comprehensive testing strategies, automation, and continuous quality monitoring to ensure excellence.',
    icon: <Shield size={32} />,
    features: [
      'Manual & Automated Testing',
      'Performance Testing',
      'Security Testing',
      'Load & Stress Testing',
    ],
    benefits: [
      'Zero Critical Bugs',
      'Faster Release Cycles',
      'Cost Reduction',
      'User Confidence',
    ],
    technologies: ['Selenium', 'Jest', 'Cypress', 'LoadRunner'],
    caseStudies: ['neobank', 'fitpulse'],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1a2a4a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <SectionHeading
              label="Our Expertise"
              title="Comprehensive Digital Solutions"
              subtitle="From mobile apps to enterprise cloud infrastructure, we deliver end-to-end engineering excellence."
              light
            />
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service, index) => (
              <FadeIn key={service.id} direction="up" delay={index * 0.1}>
                <div className="group h-full bg-gradient-to-br from-gray-50 to-white border border-gray-100 rounded-2xl p-8 hover:shadow-xl hover:border-[#0062D1]/30 transition-all duration-300">
                  <div className="w-12 h-12 rounded-xl bg-[#0062D1]/10 flex items-center justify-center text-[#0062D1] mb-6 group-hover:scale-110 transition-transform duration-300">
                    {service.icon}
                  </div>

                  <h3 className="text-xl font-bold text-[#0F172A] mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  <div className="space-y-4 mb-8">
                    <div>
                      <h4 className="text-xs font-bold text-[#0062D1] uppercase tracking-widest mb-2">
                        Key Features
                      </h4>
                      <ul className="space-y-2">
                        {service.features.slice(0, 3).map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-gray-600"
                          >
                            <CheckCircle2
                              size={14}
                              className="text-[#0062D1] flex-shrink-0"
                            />
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <Button
                    variant="outline"
                    className="w-full justify-center group/btn"
                  >
                    Learn More
                    <ArrowRight
                      size={16}
                      className="ml-2 -translate-x-1 group-hover/btn:translate-x-1 transition-transform"
                    />
                  </Button>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <SectionHeading
              label="Tech Stack"
              title="Modern Technologies"
              subtitle="We leverage the latest tools and frameworks to build scalable solutions."
              center
            />
          </FadeIn>

          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'React',
              'Next.js',
              'TypeScript',
              'Kubernetes',
              'AWS',
              'PostgreSQL',
              'Firebase',
              'GraphQL',
              'Docker',
              'Node.js',
              'Python',
              'Flutter',
            ].map((tech, i) => (
              <FadeIn key={tech} direction="up" delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-gray-200 px-6 py-4 text-center text-sm font-semibold text-[#0F172A] hover:border-[#0062D1] hover:text-[#0062D1] transition-all">
                  {tech}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0062D1] to-[#0052A3] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Ready to Transform Your Ideas?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Let's discuss how our engineering expertise can accelerate your
              digital transformation journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                variant="secondary"
                className="px-8 py-3 text-base font-bold"
              >
                Start a Project
              </Button>
              <Button
                variant="ghost"
                className="px-8 py-3 text-base font-bold border border-white text-white hover:bg-white/10"
              >
                Book a Consultation
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
