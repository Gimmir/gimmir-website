'use client';

import React from 'react';
import { FadeIn, SectionHeading, Button } from '@/components/ui';
import {
  Calendar,
  User,
  ArrowRight,
  Search,
  Filter,
} from 'lucide-react';
import Link from 'next/link';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  category: string;
  image: string;
  readTime: string;
}

const BLOG_POSTS: BlogPost[] = [
  {
    id: 'microservices-guide',
    title: 'The Complete Guide to Microservices Architecture',
    excerpt:
      'Learn how to design, build, and deploy microservices at scale. We break down the fundamentals and best practices.',
    author: 'Alex Johnson',
    date: '2024-11-20',
    category: 'Architecture',
    image:
      'https://images.unsplash.com/photo-1633356122544-f134324ef6db?auto=format&fit=crop&q=80&w=1600',
    readTime: '12 min',
  },
  {
    id: 'react-performance-optimization',
    title: 'React Performance Optimization Techniques',
    excerpt:
      'Discover proven techniques to make your React applications lightning-fast and deliver better user experiences.',
    author: 'Sarah Chen',
    date: '2024-11-18',
    category: 'React',
    image:
      'https://images.unsplash.com/photo-1633356427166-bc0eb54d40c3?auto=format&fit=crop&q=80&w=1600',
    readTime: '10 min',
  },
  {
    id: 'devops-best-practices',
    title: 'DevOps Best Practices for Enterprise',
    excerpt:
      'Master CI/CD pipelines, infrastructure as code, and automation to streamline your development workflow.',
    author: 'Michael Roberts',
    date: '2024-11-15',
    category: 'DevOps',
    image:
      'https://images.unsplash.com/photo-1633505305471-75318f0d6f0c?auto=format&fit=crop&q=80&w=1600',
    readTime: '15 min',
  },
  {
    id: 'mobile-first-design',
    title: 'Mobile-First Design Philosophy',
    excerpt:
      'Understand why mobile-first design is essential in modern web development and how to implement it effectively.',
    author: 'Emily Rodriguez',
    date: '2024-11-12',
    category: 'Design',
    image:
      'https://images.unsplash.com/photo-1633356427199-e3d0da55d7e5?auto=format&fit=crop&q=80&w=1600',
    readTime: '8 min',
  },
  {
    id: 'api-security',
    title: 'Securing Your APIs: A Comprehensive Guide',
    excerpt:
      'Learn essential security practices to protect your APIs from vulnerabilities and attacks.',
    author: 'David Kim',
    date: '2024-11-10',
    category: 'Security',
    image:
      'https://images.unsplash.com/photo-1633356395945-5e0acb6bbbfe?auto=format&fit=crop&q=80&w=1600',
    readTime: '11 min',
  },
  {
    id: 'testing-strategies',
    title: 'Effective Testing Strategies for Modern Apps',
    excerpt:
      'Explore unit testing, integration testing, and end-to-end testing strategies for comprehensive coverage.',
    author: 'Lisa Zhang',
    date: '2024-11-08',
    category: 'Testing',
    image:
      'https://images.unsplash.com/photo-1633356395976-2f80d0dcf26c?auto=format&fit=crop&q=80&w=1600',
    readTime: '13 min',
  },
];

const CATEGORIES = ['All', ...new Set(BLOG_POSTS.map((p) => p.category))];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = React.useState('All');

  const filteredPosts =
    selectedCategory === 'All'
      ? BLOG_POSTS
      : BLOG_POSTS.filter((post) => post.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0F172A] to-[#1a2a4a] text-white">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <SectionHeading
              label="Insights & Resources"
              title="Blog & Articles"
              subtitle="Deep-dive articles on engineering, design, and building products that matter."
              light
            />
          </FadeIn>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <FadeIn direction="up">
            <div className="flex flex-wrap gap-3">
              {CATEGORIES.map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-6 py-2.5 rounded-full font-semibold transition-all ${
                    selectedCategory === category
                      ? 'bg-[#0062D1] text-white shadow-lg'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 md:py-32">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, index) => (
              <FadeIn key={post.id} direction="up" delay={index * 0.05}>
                <Link href={`/blog/${post.id}`}>
                  <div className="group h-full bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#0062D1] hover:shadow-xl transition-all duration-300">
                    {/* Image */}
                    <div className="relative h-48 overflow-hidden bg-gray-200">
                      <img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    </div>

                    {/* Content */}
                    <div className="p-6">
                      <div className="flex items-center gap-3 mb-4">
                        <span className="inline-block px-3 py-1 bg-[#0062D1]/10 text-[#0062D1] text-xs font-bold uppercase rounded-full">
                          {post.category}
                        </span>
                        <span className="text-xs text-gray-500 font-semibold">
                          {post.readTime}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-[#0F172A] mb-3 group-hover:text-[#0062D1] transition-colors line-clamp-2">
                        {post.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-6 line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                        <div className="flex items-center gap-2 text-xs text-gray-500">
                          <Calendar size={14} />
                          {new Date(post.date).toLocaleDateString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                          })}
                        </div>
                        <ArrowRight
                          size={16}
                          className="text-[#0062D1] opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all"
                        />
                      </div>
                    </div>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>

          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-600 text-lg">
                No posts found in this category.
              </p>
            </div>
          )}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-[#0062D1] to-[#0052A3] text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn direction="up">
            <h2 className="text-4xl md:text-5xl font-black mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Get weekly insights on engineering, design, and building products.
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
