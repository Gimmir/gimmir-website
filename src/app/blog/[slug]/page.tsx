'use client';

import React from 'react';
import { useParams } from 'next/navigation';
import { FadeIn, Button } from '@/components/ui';
import {
  Calendar,
  User,
  Clock,
  ArrowLeft,
  ArrowRight,
  Share2,
} from 'lucide-react';
import Link from 'next/link';

interface BlogPostDetail {
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
  content: string;
  tags: string[];
  relatedPosts: { id: string; title: string }[];
}

const BLOG_DETAILS: Record<string, BlogPostDetail> = {
  'microservices-guide': {
    title: 'The Complete Guide to Microservices Architecture',
    excerpt:
      'Learn how to design, build, and deploy microservices at scale. We break down the fundamentals and best practices.',
    author: 'Alex Johnson',
    date: '2024-11-20',
    category: 'Architecture',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&q=80&w=1600',
    readTime: '12 min',
    tags: [
      'Microservices',
      'Architecture',
      'Scalability',
      'Docker',
      'Kubernetes',
    ],
    content: `
      <h2>Introduction to Microservices</h2>
      <p>Microservices architecture is an approach to developing a single application as a suite of small services, each running in its own process and communicating with lightweight mechanisms.</p>
      
      <h2>Key Benefits</h2>
      <ul>
        <li>Independent Scalability</li>
        <li>Technology Flexibility</li>
        <li>Fault Isolation</li>
        <li>Easier Deployment</li>
      </ul>
      
      <h2>Design Patterns</h2>
      <p>When implementing microservices, several design patterns emerge as best practices. These include API Gateway, Service Registry, and Circuit Breaker patterns.</p>
      
      <h2>Challenges</h2>
      <p>While microservices offer many benefits, they also introduce complexity in terms of distributed system challenges, data consistency, and operational overhead.</p>
      
      <h2>Implementation Tips</h2>
      <ol>
        <li>Start with monolith, then migrate</li>
        <li>Define clear service boundaries</li>
        <li>Implement proper monitoring</li>
        <li>Use container orchestration</li>
      </ol>
    `,
    relatedPosts: [
      { id: 'devops-best-practices', title: 'DevOps Best Practices for Enterprise' },
      { id: 'api-security', title: 'Securing Your APIs: A Comprehensive Guide' },
    ],
  },
  'react-performance-optimization': {
    title: 'React Performance Optimization Techniques',
    excerpt:
      'Discover proven techniques to make your React applications lightning-fast and deliver better user experiences.',
    author: 'Sarah Chen',
    date: '2024-11-18',
    category: 'React',
    image:
      'https://images.unsplash.com/photo-1633356427166-bc0eb54d40c3?auto=format&fit=crop&q=80&w=1600',
    readTime: '10 min',
    tags: ['React', 'Performance', 'Optimization', 'Frontend'],
    content: `
      <h2>Why Performance Matters</h2>
      <p>React performance directly impacts user experience and conversion rates. A 1-second delay can result in reduced engagement.</p>
      
      <h2>Code Splitting</h2>
      <p>Code splitting is a technique to break your code into smaller chunks that can be loaded on demand. This reduces initial load time.</p>
      
      <h2>Memoization</h2>
      <p>React provides useMemo and useCallback hooks to prevent unnecessary re-renders of expensive components.</p>
      
      <h2>Lazy Loading</h2>
      <p>Implement lazy loading for images and components to improve initial page load performance.</p>
    `,
    relatedPosts: [
      { id: 'testing-strategies', title: 'Effective Testing Strategies for Modern Apps' },
    ],
  },
  'devops-best-practices': {
    title: 'DevOps Best Practices for Enterprise',
    excerpt:
      'Master CI/CD pipelines, infrastructure as code, and automation to streamline your development workflow.',
    author: 'Michael Roberts',
    date: '2024-11-15',
    category: 'DevOps',
    image:
      'https://images.unsplash.com/photo-1633505305471-75318f0d6f0c?auto=format&fit=crop&q=80&w=1600',
    readTime: '15 min',
    tags: ['DevOps', 'CI/CD', 'Infrastructure', 'Automation'],
    content: `
      <h2>CI/CD Fundamentals</h2>
      <p>Continuous Integration and Continuous Deployment are cornerstone practices of modern DevOps.</p>
      
      <h2>Infrastructure as Code</h2>
      <p>Treat your infrastructure like code. Use tools like Terraform to define and manage your cloud resources.</p>
      
      <h2>Monitoring and Logging</h2>
      <p>Implement comprehensive monitoring and centralized logging to gain visibility into your systems.</p>
    `,
    relatedPosts: [
      { id: 'microservices-guide', title: 'The Complete Guide to Microservices Architecture' },
      { id: 'api-security', title: 'Securing Your APIs: A Comprehensive Guide' },
    ],
  },
  'mobile-first-design': {
    title: 'Mobile-First Design Philosophy',
    excerpt:
      'Understand why mobile-first design is essential in modern web development and how to implement it effectively.',
    author: 'Emily Rodriguez',
    date: '2024-11-12',
    category: 'Design',
    image:
      'https://images.unsplash.com/photo-1633356427199-e3d0da55d7e5?auto=format&fit=crop&q=80&w=1600',
    readTime: '8 min',
    tags: ['Design', 'Mobile', 'Responsive', 'UX'],
    content: `
      <h2>What is Mobile-First Design?</h2>
      <p>Mobile-first design is an approach that prioritizes the mobile user experience first, then progressively enhances for larger screens.</p>
      
      <h2>Benefits</h2>
      <p>This approach ensures your product works well on the most constrained devices first, leading to better overall performance and usability.</p>
    `,
    relatedPosts: [
      { id: 'react-performance-optimization', title: 'React Performance Optimization Techniques' },
    ],
  },
  'api-security': {
    title: 'Securing Your APIs: A Comprehensive Guide',
    excerpt:
      'Learn essential security practices to protect your APIs from vulnerabilities and attacks.',
    author: 'David Kim',
    date: '2024-11-10',
    category: 'Security',
    image:
      'https://images.unsplash.com/photo-1633356395945-5e0acb6bbbfe?auto=format&fit=crop&q=80&w=1600',
    readTime: '11 min',
    tags: ['Security', 'API', 'Authentication', 'Encryption'],
    content: `
      <h2>API Security Risks</h2>
      <p>APIs are common attack vectors. Understanding and mitigating these risks is essential.</p>
      
      <h2>Authentication & Authorization</h2>
      <p>Implement OAuth 2.0, JWT tokens, and proper authorization mechanisms to secure your APIs.</p>
      
      <h2>Rate Limiting</h2>
      <p>Implement rate limiting to prevent abuse and DDoS attacks.</p>
    `,
    relatedPosts: [
      { id: 'microservices-guide', title: 'The Complete Guide to Microservices Architecture' },
      { id: 'devops-best-practices', title: 'DevOps Best Practices for Enterprise' },
    ],
  },
  'testing-strategies': {
    title: 'Effective Testing Strategies for Modern Apps',
    excerpt:
      'Explore unit testing, integration testing, and end-to-end testing strategies for comprehensive coverage.',
    author: 'Lisa Zhang',
    date: '2024-11-08',
    category: 'Testing',
    image:
      'https://images.unsplash.com/photo-1633356395976-2f80d0dcf26c?auto=format&fit=crop&q=80&w=1600',
    readTime: '13 min',
    tags: ['Testing', 'QA', 'Automation', 'Jest'],
    content: `
      <h2>Testing Pyramid</h2>
      <p>The testing pyramid guides us to write many unit tests, some integration tests, and few end-to-end tests.</p>
      
      <h2>Unit Testing</h2>
      <p>Unit tests focus on individual functions and components. They're fast and cheap to run.</p>
      
      <h2>Integration Testing</h2>
      <p>Test how different parts of your system work together.</p>
      
      <h2>End-to-End Testing</h2>
      <p>Test the complete user journey from the user's perspective.</p>
    `,
    relatedPosts: [
      { id: 'react-performance-optimization', title: 'React Performance Optimization Techniques' },
    ],
  },
};

export default function BlogDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const post = BLOG_DETAILS[slug];

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Post Not Found</h1>
          <p className="text-gray-600 mb-8">
            The blog post you're looking for doesn't exist.
          </p>
          <Link href="/blog">
            <Button>Back to Blog</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <section className="pt-12 pb-6">
        <div className="max-w-4xl mx-auto px-6">
          <Link href="/blog">
            <button className="flex items-center gap-2 text-[#0062D1] hover:text-[#0052A3] font-semibold transition-colors">
              <ArrowLeft size={20} />
              Back to Blog
            </button>
          </Link>
        </div>
      </section>

      {/* Header */}
      <section className="py-12">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn direction="up">
            <span className="inline-block px-4 py-1.5 bg-[#0062D1]/10 text-[#0062D1] text-xs font-bold uppercase tracking-widest rounded-full mb-6">
              {post.category}
            </span>
            <h1 className="text-5xl md:text-6xl font-black text-[#0F172A] mb-6">
              {post.title}
            </h1>
            <p className="text-xl text-gray-600 mb-8">{post.excerpt}</p>

            {/* Meta Information */}
            <div className="flex flex-wrap gap-6 pb-12 border-b border-gray-200">
              <div className="flex items-center gap-2 text-gray-600">
                <User size={16} />
                <span className="font-semibold">{post.author}</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Calendar size={16} />
                <span className="font-semibold">
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </span>
              </div>
              <div className="flex items-center gap-2 text-gray-600">
                <Clock size={16} />
                <span className="font-semibold">{post.readTime} read</span>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Featured Image */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="rounded-2xl overflow-hidden shadow-2xl h-96 md:h-[500px]">
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="prose prose-lg max-w-none prose-headings:text-[#0F172A] prose-headings:font-bold prose-a:text-[#0062D1] prose-strong:text-[#0F172A]">
              <div
                dangerouslySetInnerHTML={{ __html: post.content }}
                className="text-gray-700 leading-relaxed space-y-6"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Tags */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn direction="up">
            <h3 className="text-lg font-bold text-[#0F172A] mb-6">Tags</h3>
            <div className="flex flex-wrap gap-3">
              {post.tags.map((tag, i) => (
                <span
                  key={i}
                  className="px-4 py-2 bg-white border border-gray-200 rounded-full text-[#0062D1] font-semibold hover:border-[#0062D1] transition-colors"
                >
                  #{tag}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Share Section */}
      <section className="py-12 bg-white">
        <div className="max-w-4xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="flex items-center gap-4">
              <span className="font-semibold text-[#0F172A]">Share:</span>
              <div className="flex gap-3">
                <button className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-blue-700 transition-colors">
                  f
                </button>
                <button className="w-10 h-10 rounded-full bg-sky-500 text-white flex items-center justify-center hover:bg-sky-600 transition-colors">
                  𝕏
                </button>
                <button className="w-10 h-10 rounded-full bg-blue-700 text-white flex items-center justify-center hover:bg-blue-800 transition-colors">
                  in
                </button>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Related Posts */}
      {post.relatedPosts.length > 0 && (
        <section className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <FadeIn direction="up">
              <h3 className="text-3xl font-bold text-[#0F172A] mb-12">
                Related Articles
              </h3>
            </FadeIn>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {post.relatedPosts.map((related, i) => (
                <FadeIn key={related.id} direction="up" delay={i * 0.1}>
                  <Link href={`/blog/${related.id}`}>
                    <div className="group bg-white rounded-xl p-6 border border-gray-200 hover:border-[#0062D1] hover:shadow-lg transition-all">
                      <h4 className="font-bold text-lg text-[#0F172A] group-hover:text-[#0062D1] transition-colors mb-4">
                        {related.title}
                      </h4>
                      <div className="flex items-center gap-2 text-[#0062D1] font-semibold">
                        Read More
                        <ArrowRight
                          size={16}
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
      )}

      {/* Newsletter CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0062D1] to-[#0052A3] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Subscribe for More Insights
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get the latest articles delivered to your inbox weekly.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-grow px-6 py-3 rounded-lg text-[#0F172A] font-semibold focus:outline-none"
              />
              <Button
                variant="secondary"
                className="px-8 py-3 font-bold whitespace-nowrap"
              >
                Subscribe
              </Button>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
