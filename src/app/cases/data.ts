export const ALL_CASES = [
  {
    id: 'neobank',
    client: 'NeoBank Corp',
    industry: 'Fintech',
    title: 'Banking Ecosystem Transformation',
    desc: 'Complete re-engineering of a legacy banking core to a microservices architecture.',
    aboutClient: 'NeoBank Corp is a leading Tier-1 financial institution serving over 5 million customers across Europe.',
    challenge: "The client's monolithic architecture was stifling innovation. New feature deployment took weeks, and high-traffic events caused downtime.",
    solution: 'We migrated the core to a microservices architecture using Java Spring Boot and Kubernetes.',
    process: [
      { title: 'Discovery & Audit', desc: 'Analyzed 2M+ lines of legacy code and mapped critical dependencies.' },
      { title: 'Architecture Design', desc: 'Designed a domain-driven microservices layout.' },
      { title: 'Migration', desc: 'Executed a strangler-fig pattern migration with zero downtime.' },
      { title: 'Optimization', desc: 'Implemented AI-based fraud detection and real-time analytics.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1556742049-0cfed4f7a07d?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=1600',
    ],
    techStack: ['Java','Spring Boot','Kubernetes','Kafka','Flutter','AWS','PostgreSQL'],
    tags: ['Fintech','Mobile','Security'],
    metrics: [ { label: 'User Growth', value: '+240%' }, { label: 'Uptime', value: '99.99%' }, { label: 'Tx/Second', value: '15k+' } ],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?auto=format&fit=crop&q=80&w=1600',
    testimonial: { text: 'Gimmir transformed our technical debt into a competitive advantage.', author: 'Alex V., CTO at NeoBank Corp' }
  },
  {
    id: 'fitpulse',
    client: 'FitPulse Inc.',
    industry: 'Wellness',
    title: 'Holistic Wellness App',
    desc: 'Developed a comprehensive fitness ecosystem integrating real-time wearable data with AI-personalized nutrition and workout plans.',
    aboutClient: 'FitPulse is a rapidly growing startup focused on data-driven health.',
    challenge: 'FitPulse struggled to retain users due to generic workout plans. They wanted to leverage data from wearables to provide hyper-personalized coaching.',
    solution: 'Built data ingestion pipelines, AI personalization and native apps.',
    process: [
      { title: 'UX Research', desc: 'User interviews with fitness enthusiasts.' },
      { title: 'Prototyping', desc: 'High-fidelity clickable prototypes.' },
      { title: 'Development', desc: 'React Native implementation.' },
    ],
    gallery: [
      'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&q=80&w=1600',
      'https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?auto=format&fit=crop&q=80&w=1600'
    ],
    techStack: ['React Native','Node.js','TensorFlow','HealthKit','MongoDB'],
    tags: ['Wellness','Mobile','AI/ML'],
    metrics: [ { label: 'Daily Active Users', value: '500k+' }, { label: 'User Retention', value: '78%' }, { label: 'App Rating', value: '4.8★' } ],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?auto=format&fit=crop&q=80&w=1600',
    testimonial: { text: 'The AI integration is seamless. Our users feel like they have a personal trainer in their pocket.', author: 'Sarah J., Product Lead' }
  },
  {
    id: 'medconnect',
    client: 'MedConnect',
    industry: 'Healthcare',
    title: 'Telehealth Portal',
    desc: 'Secure, HIPAA-compliant platform connecting patients with specialists worldwide. Seamless EHR integration and video streaming.',
    aboutClient: 'A network of 30+ clinics aiming to digitize patient interactions.',
    challenge: 'Scaling secure video consultations while maintaining strict HIPAA compliance and integrating with legacy EHR systems.',
    solution: 'Developed a WebRTC-based video platform with end-to-end encryption and EHR middleware.',
    process: [],
    gallery: [],
    techStack: ['React','WebRTC','Python/Django','Redis','Azure'],
    tags: ['Healthcare','Web','Cloud'],
    metrics: [ { label: 'Consultations', value: '10k/Day' }, { label: 'Compliance', value: '100%' }, { label: 'Avg Wait', value: '<2min' } ],
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=1000',
    testimonial: { text: 'Reliability was our #1 concern. Gimmir delivered a platform that simply never fails.', author: 'Dr. Mark R., Medical Director' }
  },
  {
    id: 'logichain',
    client: 'LogiChain Solutions',
    industry: 'Logistics',
    title: 'Supply Chain AI',
    desc: 'AI-driven logistics dashboard for real-time fleet tracking.',
    tags: ['Logistics','Web','IoT'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'edumaster',
    client: 'EduMaster Global',
    industry: 'EdTech',
    title: 'LMS Platform',
    desc: 'Cloud-native learning management system.',
    tags: ['EdTech','Cloud','React'],
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000'
  },
  {
    id: 'shopifyplus',
    client: 'ShopifyPlus Partner',
    industry: 'Retail',
    title: 'E-Commerce Headless',
    desc: 'High-performance headless storefront.',
    tags: ['Retail','E-Commerce','Next.js'],
    image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=1000'
  }
];

export const ALL_INDUSTRIES = ['All', ...new Set(ALL_CASES.map(c => c.industry))];
