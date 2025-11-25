export interface SimulatorOption {
  id: string;
  label: string;
  sub?: string;
  multiplier: number;
  model?: string;
  risk?: string;
}

export const NAV_LINKS = [
  { 
    title: 'Solutions', 
    items: [
      { name: 'Web & Mobile Engineering', href: '/solutions/web-mobile' }, 
      { name: 'MVP Development', href: '/solutions/mvp-development' },
      { name: 'Dedicated Teams', href: '/solutions/dedicated-teams' },
      { name: 'Code Rescue & Audits', href: '/solutions/code-rescue' },
      { name: 'Cloud & DevOps', href: '/solutions/cloud-devops' }
    ] 
  },
  { title: 'Success Stories', href: '/success-stories', items: undefined },
  { 
    title: 'Resources', 
    items: [
      { name: 'Insights', href: '/resources/insights' },
      { name: 'Calculators', href: '/resources/calculators' }
    ] 
  },
  { 
    title: 'Company', 
    items: [
      { name: 'About Us', href: '/company/about' },
      { name: 'How We Work', href: '/company/how-we-work' },
      { name: 'Global Hubs', href: '/#global-contact' }
    ] 
  },
  { title: 'Contact Us', href: '/contact-us', items: undefined }
] as const;

export const FOOTER_LINKS = [
  { 
    title: 'Solutions', 
    items: [
      { name: 'Web & Mobile Engineering', href: '/solutions/web-mobile' },
      { name: 'MVP Development', href: '/solutions/mvp-development' },
      { name: 'Dedicated Teams', href: '/solutions/dedicated-teams' },
      { name: 'Code Rescue & Audits', href: '/solutions/code-rescue' },
      { name: 'Cloud & DevOps', href: '/solutions/cloud-devops' }
    ] 
  },
  { 
    title: 'Resources', 
    items: [
      { name: 'Insights', href: '/resources/insights' },
      { name: 'Calculators', href: '/resources/calculators' }
    ] 
  },
  { 
    title: 'Company', 
    items: [
      { name: 'About Us', href: '/company/about' },
      { name: 'Success Stories', href: '/success-stories' },
      { name: 'How We Work', href: '/company/how-we-work' },
      { name: 'Global Hubs', href: '/#global-contact' },
      { name: 'Contact Us', href: '/contact-us' }
    ] 
  }
] as const;

export const SIMULATOR_CONFIG = {
  basePrice: 30000,
  steps: [
    {
      id: 'stage',
      question: "What describes your current situation best?",
      options: [
        { id: 'validating', label: "Validating an Idea", sub: "I need an MVP fast.", multiplier: 1.0, model: "Scalable MVP Development" },
        { id: 'scaling', label: "Scaling an Existing Product", sub: "We have traction, need growth.", multiplier: 1.5, model: "Dedicated Team / Staff Augmentation" },
        { id: 'fixing', label: "Fixing/Rescuing a Product", sub: "Codebase issues or vendor trouble.", multiplier: 1.2, model: "Technical Audit & Refactoring" }
      ]
    },
    {
      id: 'platform',
      question: "What platform are we building for?",
      options: [
        { id: 'web', label: "Web Platform / SaaS", sub: "React, Next.js, Node.", multiplier: 1.0 },
        { id: 'mobile_native', label: "Mobile (Native iOS/Android)", sub: "High performance Swift/Kotlin.", multiplier: 1.8 },
        { id: 'mobile_cross', label: "Mobile (Cross-Platform)", sub: "Flutter/React Native efficiency.", multiplier: 1.3, risk: "Dependency Lock-in Risk" }
      ]
    },
    {
      id: 'industry',
      question: "Does your project handle sensitive data?",
      options: [
        { id: 'fintech', label: "Yes, Fintech / Banking", sub: "PCI DSS, High Security required.", multiplier: 1.5, risk: "High Compliance Risk (PCI DSS)" },
        { id: 'medtech', label: "Yes, Healthcare / MedTech", sub: "HIPAA/GDPR compliance is must.", multiplier: 1.5, risk: "High Compliance Risk (HIPAA)" },
        { id: 'standard', label: "No, Standard E-commerce / Lifestyle", sub: "Standard security protocols.", multiplier: 1.0 }
      ]
    },
    {
      id: 'state',
      question: "Do you have an existing codebase?",
      options: [
        { id: 'scratch', label: "No, starting from scratch", sub: "Greenfield project.", multiplier: 1.0 },
        { id: 'unstable', label: "Yes, but it's unstable/legacy", sub: "Needs refactoring or rewrite.", multiplier: 1.4, risk: "Technical Debt Alert" },
        { id: 'solid', label: "Yes, it's solid", sub: "Just need more hands.", multiplier: 0.8 }
      ]
    }
  ]
} as const;
