'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import {
  ArrowLeft,
  Terminal,
  ShieldAlert,
  Download,
  FileText,
  CheckCircle2,
  Clock,
  Calendar,
  User,
  ChevronRight,
  Mail,
  Send,
  Sparkles,
  BookOpen,
  AlertTriangle,
  Copy,
  Check,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import type { NewsPostCard, LayoutType, TableOfContentsItem } from '@/sanity/sanity-utils';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

export interface ArticleData {
  id: string;
  title: string;
  subtitle?: string;
  slug: string;
  author?: string;
  category: string;
  layoutType: LayoutType;
  date: string;
  readTime?: string;
  description: string;
  tags?: string[];
  body: string; // HTML string after conversion
  // Standard layout
  imageUrl?: string;
  // Technical layout
  tableOfContents?: TableOfContentsItem[];
  version?: string;
  lastUpdated?: string;
  // Magnet layout
  resourceFileUrl?: string;
  magnetBenefits?: string[];
  resourceType?: string;
  fileSize?: string;
  downloadCount?: number;
}

interface ArticleClientProps {
  article: ArticleData;
  relatedPosts: NewsPostCard[];
}

// ═══════════════════════════════════════════════════════════════════════════
// UTILITY COMPONENTS
// ═══════════════════════════════════════════════════════════════════════════

const BackButton = () => (
  <Link
    href="/news"
    className="inline-flex items-center gap-2 text-slate-400 hover:text-white transition-colors group mb-8"
  >
    <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
    <span className="text-sm font-mono uppercase tracking-wider">Back to News</span>
  </Link>
);

const TagList = ({ tags }: { tags: string[] }) => (
  <div className="flex flex-wrap gap-2">
    {tags.map((tag) => (
      <span
        key={tag}
        className="text-[10px] font-mono uppercase tracking-wider text-slate-400 bg-white/5 border border-white/10 px-2.5 py-1 rounded-full hover:border-[#0062d1]/50 hover:text-[#0062d1] transition-colors cursor-pointer"
      >
        {tag}
      </span>
    ))}
  </div>
);

const AuthorCard = ({ 
  author, 
  date, 
  readTime 
}: { 
  author?: string; 
  date: string; 
  readTime?: string;
}) => {
  const authorName = author || 'Gimmir Team';
  
  return (
    <div className="flex items-center gap-4 py-4">
      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#0062d1] to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
        {authorName.charAt(0)}
      </div>
      <div className="flex-1">
        <div className="text-white font-semibold">{authorName}</div>
        <div className="text-slate-500 text-sm">Author</div>
      </div>
      <div className="flex flex-col items-end gap-1 text-xs font-mono text-slate-500">
        <div className="flex items-center gap-1.5">
          <Calendar size={12} />
          {formatDate(date)}
        </div>
        {readTime && (
          <div className="flex items-center gap-1.5">
            <Clock size={12} />
            {readTime}
          </div>
        )}
      </div>
    </div>
  );
};

function formatDate(dateString: string): string {
  try {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric' 
    }).toUpperCase();
  } catch {
    return dateString.toUpperCase();
  }
}

const RelatedPosts = ({ posts }: { posts: NewsPostCard[] }) => {
  if (!posts || posts.length === 0) return null;
  
  return (
    <section className="border-t border-white/10 pt-16 mt-16">
      <h3 className="text-xl font-bold text-white mb-8 flex items-center gap-3">
        <BookOpen size={20} className="text-[#0062d1]" />
        Related Articles
      </h3>
      <div className="grid md:grid-cols-2 gap-6">
        {posts.map((post) => (
          <Link
            key={post.id}
            href={`/news/${post.slug}`}
            className="group p-6 bg-white/[0.02] border border-white/10 rounded-2xl hover:border-[#0062d1]/50 hover:bg-white/[0.04] transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-[10px] font-mono text-[#0062d1] uppercase tracking-wider">
                {post.category}
              </span>
              <span className="text-[10px] font-mono text-slate-600">{formatDate(post.date)}</span>
            </div>
            <h4 className="text-white font-semibold mb-2 group-hover:text-[#0062d1] transition-colors">
              {post.title}
            </h4>
            <p className="text-slate-500 text-sm line-clamp-2">{post.description}</p>
            <div className="flex items-center gap-2 mt-4 text-xs font-semibold text-slate-400 group-hover:text-[#0062d1] transition-colors">
              <span>Read more</span>
              <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// LAYOUT A: STANDARD (Magazine View)
// ═══════════════════════════════════════════════════════════════════════════

const StandardLayout = ({ article, relatedPosts }: ArticleClientProps) => {
  return (
    <article className="max-w-2xl mx-auto">
      {/* Header */}
      <header className="mb-12">
        <div className="flex items-center gap-3 mb-6">
          <span className="text-xs font-mono text-[#0062d1] bg-[#0062d1]/10 border border-[#0062d1]/20 px-3 py-1 rounded-full uppercase tracking-wider">
            {article.category}
          </span>
        </div>

        <h1 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
          {article.title}
        </h1>

        {article.subtitle && (
          <p className="text-xl text-slate-300 font-medium mb-4">
            {article.subtitle}
          </p>
        )}

        <p className="text-xl text-slate-400 font-light leading-relaxed mb-8">
          {article.description}
        </p>

        <AuthorCard 
          author={article.author} 
          date={article.date} 
          readTime={article.readTime} 
        />

        {article.tags && article.tags.length > 0 && (
          <div className="mt-6">
            <TagList tags={article.tags} />
          </div>
        )}
      </header>

      {/* Hero Image */}
      <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-12 bg-gradient-to-br from-[#0062d1]/20 to-cyan-500/10 border border-white/10">
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
        {article.imageUrl ? (
          <img 
            src={article.imageUrl} 
            alt={article.title}
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-20 h-20 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm">
              <FileText size={40} className="text-slate-400" />
            </div>
          </div>
        )}
      </div>

      {/* Body Content */}
      <div
        className="prose prose-invert prose-lg max-w-none
          prose-headings:font-bold prose-headings:text-white
          prose-h2:text-2xl prose-h2:mt-12 prose-h2:mb-6 prose-h2:border-l-4 prose-h2:border-[#0062d1] prose-h2:pl-4
          prose-h3:text-xl prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-slate-200
          prose-p:text-slate-400 prose-p:leading-relaxed prose-p:font-light
          prose-a:text-[#0062d1] prose-a:no-underline hover:prose-a:underline
          prose-strong:text-white prose-strong:font-semibold
          prose-blockquote:border-l-[#0062d1] prose-blockquote:bg-white/[0.02] prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic
          prose-code:text-cyan-400 prose-code:bg-white/5 prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:before:content-none prose-code:after:content-none
          prose-pre:bg-[#080c14] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-lg
          prose-ul:text-slate-400 prose-ol:text-slate-400
          prose-li:marker:text-[#0062d1]"
        dangerouslySetInnerHTML={{ __html: article.body }}
      />

      {/* Related Posts */}
      <RelatedPosts posts={relatedPosts} />
    </article>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// LAYOUT B: TECHNICAL (Documentation View)
// ═══════════════════════════════════════════════════════════════════════════

const TechnicalLayout = ({ article, relatedPosts }: ArticleClientProps) => {
  const [activeSection, setActiveSection] = useState('');
  const tableOfContents = 'tableOfContents' in article ? article.tableOfContents : [];

  useEffect(() => {
    if (!tableOfContents || tableOfContents.length === 0) return;

    const handleScroll = () => {
      const sections = tableOfContents.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      sections.forEach((section) => {
        if (section) {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.offsetHeight;
          if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            setActiveSection(section.id);
          }
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [tableOfContents]);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const offset = 100;
      const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
      window.scrollTo({ top: elementPosition - offset, behavior: 'smooth' });
    }
  };

  return (
    <div className="grid lg:grid-cols-[280px_1fr] gap-8 lg:gap-12">
      {/* Sidebar - Table of Contents */}
      {tableOfContents && tableOfContents.length > 0 && (
        <aside className="hidden lg:block">
          <div className="sticky top-32">
            <div className="bg-[#080c14] border border-white/10 rounded-2xl p-6">
              {/* Terminal Header */}
              <div className="flex items-center gap-2 mb-6 pb-4 border-b border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
                </div>
                <span className="text-[10px] font-mono text-slate-600 ml-auto uppercase tracking-wider">
                  nav.tsx
                </span>
              </div>

              <h4 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                <Terminal size={12} className="text-emerald-400" />
                Table of Contents
              </h4>

              <nav className="space-y-1">
                {tableOfContents.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className={`
                      w-full text-left py-2 px-3 rounded-lg text-sm font-mono transition-all duration-200
                      ${
                        activeSection === item.id
                          ? 'bg-emerald-500/10 text-emerald-400 border-l-2 border-emerald-500'
                          : 'text-slate-500 hover:text-white hover:bg-white/5'
                      }
                    `}
                  >
                    {item.title}
                  </button>
                ))}
              </nav>

              {/* Meta Info */}
              <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
                {article.readTime && (
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <Clock size={12} />
                    <span>{article.readTime}</span>
                  </div>
                )}
                <div className="flex items-center gap-2 text-xs text-slate-500">
                  <Calendar size={12} />
                  <span>{formatDate(article.date)}</span>
                </div>
                {article.author && (
                  <div className="flex items-center gap-2 text-xs text-slate-500">
                    <User size={12} />
                    <span>{article.author}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </aside>
      )}

      {/* Main Content */}
      <article className={tableOfContents && tableOfContents.length > 0 ? 'max-w-4xl' : 'max-w-3xl mx-auto'}>
        {/* Terminal Style Header */}
        <header className="mb-12">
          <div className="bg-[#080c14] border border-white/10 rounded-2xl overflow-hidden">
            {/* Terminal Bar */}
            <div className="h-10 bg-[#050810] border-b border-white/5 flex items-center px-4 gap-2">
              <div className="flex gap-1.5">
                <div className="w-2.5 h-2.5 rounded-full bg-red-500/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/60"></div>
                <div className="w-2.5 h-2.5 rounded-full bg-green-500/60"></div>
              </div>
              <span className="text-[10px] font-mono text-slate-600 ml-auto uppercase tracking-widest">
                /// GIMMIR_ENGINEERING_DOCS
              </span>
            </div>

            <div className="p-8 md:p-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center">
                  <Terminal size={24} className="text-emerald-400" />
                </div>
                <span className="text-xs font-mono text-emerald-400 uppercase tracking-wider">
                  {article.category} // Protocol Document
                </span>
              </div>

              <h1 className="text-2xl md:text-4xl font-bold text-white mb-4 font-mono leading-tight">
                <span className="text-slate-600">$ </span>
                {article.title}
              </h1>

              <p className="text-slate-400 font-mono text-sm leading-relaxed border-l-2 border-emerald-500/50 pl-4 py-2 bg-emerald-500/5 rounded-r">
                {article.description}
              </p>

              {article.tags && article.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 mt-6">
                  {article.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-mono uppercase tracking-wider text-emerald-400 bg-emerald-500/10 border border-emerald-500/20 px-2.5 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        </header>

        {/* Body Content */}
        <div
          className="prose prose-invert prose-lg max-w-none
            prose-headings:font-mono prose-headings:text-white
            prose-h2:text-xl prose-h2:mt-16 prose-h2:mb-6 prose-h2:pb-3 prose-h2:border-b prose-h2:border-white/10
            prose-h3:text-lg prose-h3:mt-8 prose-h3:mb-4 prose-h3:text-emerald-400
            prose-p:text-slate-400 prose-p:leading-relaxed
            prose-a:text-cyan-400 prose-a:no-underline hover:prose-a:underline
            prose-strong:text-white prose-strong:font-semibold
            prose-blockquote:border-l-emerald-500 prose-blockquote:bg-emerald-500/5 prose-blockquote:py-4 prose-blockquote:px-6 prose-blockquote:rounded-r-lg prose-blockquote:not-italic prose-blockquote:font-mono prose-blockquote:text-sm
            prose-code:text-cyan-300 prose-code:bg-[#0a0e17] prose-code:px-1.5 prose-code:py-0.5 prose-code:rounded prose-code:font-mono prose-code:text-sm prose-code:border prose-code:border-white/5 prose-code:before:content-none prose-code:after:content-none
            prose-pre:bg-[#080c14] prose-pre:border prose-pre:border-white/10 prose-pre:rounded-xl prose-pre:shadow-2xl
            prose-ul:text-slate-400 prose-ol:text-slate-400
            prose-li:marker:text-emerald-500"
          dangerouslySetInnerHTML={{ __html: article.body }}
        />

        {/* Related Posts */}
        <RelatedPosts posts={relatedPosts} />
      </article>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// LAYOUT C: MAGNET (Conversion Gate View)
// ═══════════════════════════════════════════════════════════════════════════

const MagnetLayout = ({ article, relatedPosts }: ArticleClientProps) => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Type assertion for magnet-specific fields
  const magnetBenefits = 'magnetBenefits' in article ? article.magnetBenefits : [];
  const resourceType = 'resourceType' in article ? article.resourceType : '';
  const fileSize = 'fileSize' in article ? article.fileSize : '';
  const resourceFileUrl = 'resourceFileUrl' in article ? article.resourceFileUrl : '';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setSubmitted(true);
    
    // If there's a resource file, open it after form submission
    if (resourceFileUrl) {
      window.open(resourceFileUrl, '_blank');
    }
  };

  return (
    <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
      {/* Left Column - Value Proposition */}
      <div>
        <header className="mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider mb-6">
            <AlertTriangle size={14} />
            <span>Free Resource</span>
          </div>

          <h1 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
            {article.title}
          </h1>

          <p className="text-lg text-slate-400 font-light leading-relaxed">
            {article.description}
          </p>
        </header>

        {/* Benefits Checklist */}
        {magnetBenefits && magnetBenefits.length > 0 && (
          <div className="space-y-4 mb-10">
            <h3 className="text-sm font-mono text-slate-500 uppercase tracking-wider mb-4">
              What's Included:
            </h3>
            {magnetBenefits.map((benefit, index) => (
              <motion.div
                key={benefit}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-start gap-3 group"
              >
                <div className="w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:bg-emerald-500/20 transition-colors">
                  <CheckCircle2 size={12} className="text-emerald-400" />
                </div>
                <span className="text-slate-300 text-sm leading-relaxed">{benefit}</span>
              </motion.div>
            ))}
          </div>
        )}

        {/* Resource Meta */}
        <div className="flex items-center gap-6 py-6 border-t border-white/10">
          {resourceType && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <FileText size={16} className="text-amber-400" />
              <span>{resourceType}</span>
            </div>
          )}
          {fileSize && (
            <div className="flex items-center gap-2 text-sm text-slate-500">
              <Download size={16} className="text-amber-400" />
              <span>{fileSize}</span>
            </div>
          )}
        </div>

        {/* Tags */}
        {article.tags && article.tags.length > 0 && (
          <div className="mt-6">
            <TagList tags={article.tags} />
          </div>
        )}
      </div>

      {/* Right Column - Conversion Form */}
      <div className="lg:sticky lg:top-32">
        <div className="bg-[#080c14] border border-white/10 rounded-3xl overflow-hidden shadow-2xl">
          {/* Form Header */}
          <div className="bg-gradient-to-r from-amber-500/10 to-orange-500/10 border-b border-white/10 p-6">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-amber-500/20 border border-amber-500/30 flex items-center justify-center">
                <Download size={24} className="text-amber-400" />
              </div>
              <div>
                <h3 className="text-white font-bold">Get Instant Access</h3>
                <p className="text-slate-500 text-sm">Free download, no credit card required</p>
              </div>
            </div>
          </div>

          <div className="p-6 md:p-8">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form
                  key="form"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0, y: -20 }}
                  onSubmit={handleSubmit}
                  className="space-y-5"
                >
                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Full Name
                    </label>
                    <div className="relative">
                      <User size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                        placeholder="John Doe"
                        className="w-full bg-[#050810] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/10 transition-all"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-mono text-slate-500 uppercase tracking-wider mb-2">
                      Work Email
                    </label>
                    <div className="relative">
                      <Mail size={16} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-600" />
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        placeholder="you@company.com"
                        className="w-full bg-[#050810] border border-white/10 rounded-xl py-3.5 pl-11 pr-4 text-white placeholder:text-slate-600 focus:border-amber-500/50 focus:outline-none focus:ring-2 focus:ring-amber-500/10 transition-all"
                      />
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 rounded-xl bg-gradient-to-r from-amber-500 to-orange-500 text-black font-bold text-sm uppercase tracking-wider hover:from-amber-400 hover:to-orange-400 transition-all flex items-center justify-center gap-2 shadow-lg shadow-amber-500/20 disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-black/30 border-t-black rounded-full animate-spin"></div>
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send size={16} />
                        <span>Send Me the Resource</span>
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-600 text-center leading-relaxed">
                    By submitting, you agree to receive occasional emails from Gimmir. 
                    Unsubscribe anytime. We respect your privacy.
                  </p>
                </motion.form>
              ) : (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-20 h-20 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center mx-auto mb-6">
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ delay: 0.2, type: 'spring', stiffness: 200 }}
                    >
                      <Sparkles size={36} className="text-emerald-400" />
                    </motion.div>
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">Resource Sent!</h3>
                  <p className="text-slate-400 text-sm mb-6">
                    Check your inbox at <span className="text-white font-mono">{email}</span>
                  </p>
                  <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl">
                    <p className="text-emerald-400 text-sm font-mono">
                      ✓ Download link sent successfully
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>

        {/* Trust Signals */}
        <div className="mt-6 flex items-center justify-center gap-6 text-xs text-slate-600">
          <div className="flex items-center gap-1.5">
            <ShieldAlert size={14} />
            <span>SSL Encrypted</span>
          </div>
          <div className="flex items-center gap-1.5">
            <CheckCircle2 size={14} />
            <span>No Spam</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// ═══════════════════════════════════════════════════════════════════════════
// MAIN CLIENT COMPONENT
// ═══════════════════════════════════════════════════════════════════════════

export default function ArticleClient({ article, relatedPosts }: ArticleClientProps) {
  return (
    <div className="bg-[#050A14] min-h-screen pt-24 sm:pt-32 pb-24 selection:bg-[#0062d1] selection:text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0062d1]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>
      
      {/* Layout-specific background effects */}
      {article.layoutType === 'magnet' && (
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-amber-500/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      )}
      {article.layoutType === 'technical' && (
        <div className="absolute top-1/2 left-0 w-[300px] h-[600px] bg-emerald-500/5 blur-[100px] rounded-full pointer-events-none z-0"></div>
      )}

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Back Button */}
        <BackButton />

        {/* Render Layout Based on Type */}
        <AnimatePresence mode="wait">
          <motion.div
            key={article.layoutType}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4 }}
          >
            {article.layoutType === 'standard' && (
              <StandardLayout article={article} relatedPosts={relatedPosts} />
            )}
            {article.layoutType === 'technical' && (
              <TechnicalLayout article={article} relatedPosts={relatedPosts} />
            )}
            {article.layoutType === 'magnet' && (
              <MagnetLayout article={article} relatedPosts={relatedPosts} />
            )}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
