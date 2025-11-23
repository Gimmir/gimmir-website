'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { FadeIn, Button } from '@/components/ui';
import {
  Smartphone,
  Globe,
  Database,
  Shield,
  Layers,
  Code2,
  ArrowRight,
  CheckCircle2,
  ArrowLeft,
} from 'lucide-react';
import Link from 'next/link';

const SERVICE_DETAILS: Record<
  string,
  {
    title: string;
    description: string;
    icon: React.ReactNode;
    features: string[];
    benefits: string[];
    technologies: string[];
    process: { title: string; description: string }[];
    caseStudies: string[];
  }
> = {
  mobile: {
    title: 'Mobile Development',
    description:
      'Native and cross-platform mobile applications built with cutting-edge technologies for iOS, Android, and beyond.',
    icon: <Smartphone size={40} />,
    features: [
      'Native iOS & Android Development',
      'React Native & Flutter',
      'Progressive Web Apps',
      'Wearable & IoT Apps',
      'Push Notifications & Real-time Sync',
      'Offline-First Architecture',
    ],
    benefits: [
      'Fast Time-to-Market',
      'High Performance & UX',
      'Cross-Platform Efficiency',
      'Seamless Platform Integration',
      'Native OS Features Access',
      'Excellent Battery Performance',
    ],
    technologies: ['Swift', 'Kotlin', 'React Native', 'Flutter', 'TypeScript'],
    process: [
      {
        title: 'Discovery & Planning',
        description: 'Understand your vision and market requirements',
      },
      {
        title: 'Design & Prototyping',
        description: 'Create intuitive UI/UX with user testing',
      },
      {
        title: 'Development',
        description: 'Build production-ready native apps',
      },
      {
        title: 'Testing & Launch',
        description: 'Comprehensive testing and App Store deployment',
      },
    ],
    caseStudies: ['fitpulse', 'medconnect'],
  },
  web: {
    title: 'Web Platforms',
    description:
      'Scalable, responsive web applications and platforms using modern frameworks and architectures.',
    icon: <Globe size={40} />,
    features: [
      'Single Page Applications (SPA)',
      'Server-Side Rendering (SSR)',
      'Progressive Web Apps',
      'E-Commerce Platforms',
      'Real-Time Collaboration Tools',
      'Advanced Analytics Integration',
    ],
    benefits: [
      'SEO-Optimized',
      'Lightning-Fast Performance',
      'Mobile-First Design',
      'Real-Time Capabilities',
      'Search Engine Visibility',
      'Responsive Across Devices',
    ],
    technologies: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'Tailwind CSS'],
    process: [
      {
        title: 'Requirements Gathering',
        description: 'Define scope and technical specifications',
      },
      {
        title: 'Architecture Design',
        description: 'Plan scalable, performant infrastructure',
      },
      {
        title: 'Development Sprints',
        description: 'Agile development with continuous integration',
      },
      {
        title: 'Optimization & Deployment',
        description: 'Performance tuning and production launch',
      },
    ],
    caseStudies: ['neobank', 'fitpulse'],
  },
  cloud: {
    title: 'Cloud & DevOps',
    description:
      'Infrastructure automation, CI/CD pipelines, and cloud architecture for enterprise-scale applications.',
    icon: <Database size={40} />,
    features: [
      'Kubernetes Orchestration',
      'Serverless Architecture',
      'Infrastructure as Code',
      'Microservices Design',
      'Automated Scaling',
      'Disaster Recovery Planning',
    ],
    benefits: [
      'Auto-Scaling',
      'High Availability',
      'Cost Optimization',
      'Security Compliance',
      'Reduced Operational Overhead',
      '99.99% Uptime SLA',
    ],
    technologies: ['Kubernetes', 'Docker', 'AWS', 'GCP', 'Terraform'],
    process: [
      {
        title: 'Infrastructure Assessment',
        description: 'Analyze current infrastructure and identify improvements',
      },
      {
        title: 'Architecture Design',
        description: 'Design cloud-native, scalable infrastructure',
      },
      {
        title: 'Migration Planning',
        description: 'Plan zero-downtime migration strategy',
      },
      {
        title: 'Automation & Monitoring',
        description: 'Implement CI/CD and continuous monitoring',
      },
    ],
    caseStudies: ['neobank', 'medconnect'],
  },
  teams: {
    title: 'Dedicated Teams',
    description:
      'Build your engineering capacity with skilled, dedicated teams seamlessly integrated with your organization.',
    icon: <Layers size={40} />,
    features: [
      'Remote Team Augmentation',
      'Full Project Ownership',
      'Flexible Scaling',
      '24/7 Support Coverage',
      'Time Zone Advantage',
      'Agile Methodology',
    ],
    benefits: [
      'Cost-Effective',
      'Cultural Fit',
      'Time Zone Advantage',
      'Long-Term Partnership',
      'Reduced HR Overhead',
      'Access to Global Talent',
    ],
    technologies: ['All Tech Stacks', 'Agile Methodologies', 'DevOps'],
    process: [
      {
        title: 'Team Assessment',
        description: 'Understand your team needs and skill requirements',
      },
      {
        title: 'Talent Matching',
        description: 'Match engineers with your project requirements',
      },
      {
        title: 'Onboarding',
        description: 'Seamless integration with your team and processes',
      },
      {
        title: 'Ongoing Management',
        description: 'Regular feedback and performance reviews',
      },
    ],
    caseStudies: [],
  },
  design: {
    title: 'Product Design',
    description:
      'User-centric design strategy, UX/UI design, and design systems that drive engagement and conversion.',
    icon: <Code2 size={40} />,
    features: [
      'User Research & Interviews',
      'Wireframing & Prototyping',
      'Design Systems',
      'Accessibility (WCAG)',
      'Interaction Design',
      'Design Documentation',
    ],
    benefits: [
      'Improved User Satisfaction',
      'Faster Development',
      'Brand Consistency',
      'A/B Testing Ready',
      'Higher Conversion Rates',
      'Reduced Support Tickets',
    ],
    technologies: ['Figma', 'Adobe XD', 'Prototyping Tools', 'Accessibility'],
    process: [
      {
        title: 'User Research',
        description: 'Conduct interviews and user testing',
      },
      {
        title: 'Design Exploration',
        description: 'Create wireframes and design concepts',
      },
      {
        title: 'Design System',
        description: 'Build reusable component library',
      },
      {
        title: 'Handoff & Iteration',
        description: 'Developer handoff and continuous refinement',
      },
    ],
    caseStudies: ['fitpulse', 'medconnect'],
  },
  qa: {
    title: 'Quality Assurance',
    description:
      'Comprehensive testing strategies, automation, and continuous quality monitoring to ensure excellence.',
    icon: <Shield size={40} />,
    features: [
      'Manual & Automated Testing',
      'Performance Testing',
      'Security Testing',
      'Load & Stress Testing',
      'Regression Testing',
      'Continuous Monitoring',
    ],
    benefits: [
      'Zero Critical Bugs',
      'Faster Release Cycles',
      'Cost Reduction',
      'User Confidence',
      'Improved Reliability',
      'Compliance Assurance',
    ],
    technologies: ['Selenium', 'Jest', 'Cypress', 'LoadRunner', 'OWASP'],
    process: [
      {
        title: 'Test Strategy',
        description: 'Define testing approach and test cases',
      },
      {
        title: 'Automation Setup',
        description: 'Implement automated testing framework',
      },
      {
        title: 'Continuous Testing',
        description: 'Run tests on every build and deployment',
      },
      {
        title: 'Reporting & Analysis',
        description: 'Track metrics and continuous improvement',
      },
    ],
    caseStudies: ['neobank', 'fitpulse'],
  },
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const service = SERVICE_DETAILS[slug];

  if (!service) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Service Not Found</h1>
          <p className="text-gray-600 mb-8">
            The service you're looking for doesn't exist.
          </p>
          <Link href="/services">
            <Button>Back to Services</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <section className="pt-12 pb-6">
        <div className="max-w-6xl mx-auto px-6">
          <Link href="/services">
            <button className="flex items-center gap-2 text-[#0062D1] hover:text-[#0052A3] font-semibold transition-colors">
              <ArrowLeft size={20} />
              Back to Services
            </button>
          </Link>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1a2a4a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="flex items-start gap-6 mb-8">
              <div className="w-16 h-16 rounded-xl bg-[#0062D1]/20 flex items-center justify-center text-[#0062D1] flex-shrink-0">
                {service.icon}
              </div>
              <div>
                <h1 className="text-5xl md:text-6xl font-black mb-6">
                  {service.title}
                </h1>
                <p className="text-xl text-blue-100/80 max-w-2xl">
                  {service.description}
                </p>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Key Features */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold mb-4 text-[#0F172A]">
              Key Features
            </h2>
            <p className="text-gray-600 mb-12">
              Everything you need to succeed with our {service.title.toLowerCase()}{' '}
              solutions.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {service.features.map((feature, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div className="flex gap-4 p-6 bg-gray-50 rounded-xl border border-gray-200 hover:border-[#0062D1] transition-colors">
                  <CheckCircle2
                    size={24}
                    className="text-[#0062D1] flex-shrink-0 mt-1"
                  />
                  <div>
                    <h3 className="font-semibold text-[#0F172A] mb-2">
                      {feature}
                    </h3>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold mb-4 text-[#0F172A]">Benefits</h2>
            <p className="text-gray-600 mb-12">
              Real advantages that make a difference for your business.
            </p>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {service.benefits.map((benefit, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div className="bg-white rounded-xl border border-blue-100 p-8 hover:shadow-lg transition-shadow">
                  <h3 className="text-lg font-bold text-[#0F172A] mb-3">
                    {benefit}
                  </h3>
                  <div className="w-1 h-8 bg-gradient-to-b from-[#0062D1] to-transparent rounded"></div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold mb-4 text-[#0F172A]">Our Process</h2>
            <p className="text-gray-600 mb-12">
              How we deliver exceptional results every single time.
            </p>
          </FadeIn>

          <div className="space-y-4">
            {service.process.map((step, i) => (
              <FadeIn key={i} direction="up" delay={i * 0.05}>
                <div className="flex gap-6 items-start">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-12 w-12 rounded-full bg-[#0062D1] text-white font-bold text-lg">
                      {i + 1}
                    </div>
                  </div>
                  <div className="flex-grow pt-1">
                    <h3 className="text-xl font-bold text-[#0F172A] mb-2">
                      {step.title}
                    </h3>
                    <p className="text-gray-600">{step.description}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies */}
      <section className="py-20 md:py-32 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <h2 className="text-4xl font-bold mb-4 text-[#0F172A]">
              Technologies We Use
            </h2>
            <p className="text-gray-600 mb-12">
              Cutting-edge tools and frameworks for optimal results.
            </p>
          </FadeIn>

          <div className="flex flex-wrap gap-4">
            {service.technologies.map((tech, i) => (
              <FadeIn key={tech} direction="up" delay={i * 0.02}>
                <div className="bg-white rounded-full px-6 py-3 border border-gray-200 font-semibold text-[#0F172A] hover:border-[#0062D1] hover:text-[#0062D1] transition-all">
                  {tech}
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
              Ready to Get Started?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let's discuss how our {service.title.toLowerCase()} expertise can
              help your business grow.
            </p>
            <Button
              variant="secondary"
              className="px-8 py-4 text-base font-bold"
            >
              Schedule a Consultation
              <ArrowRight size={20} className="ml-2" />
            </Button>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
