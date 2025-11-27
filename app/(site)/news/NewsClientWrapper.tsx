'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  Download, 
  Search, 
  ArrowRight, 
  FileText, 
  FileJson, 
  AlertTriangle, 
  CheckCircle2,
  LucideIcon,
  X,
  ChevronLeft,
  ChevronRight,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

// --- 0. Types ---

type LayoutType = 'standard' | 'technical' | 'magnet';

export interface NewsPost {
  id: string;
  title: string;
  slug: string;
  category: string;
  layoutType: LayoutType;
  date: string;
  readTime?: string;
  description: string;
  imageUrl?: string;
  tags?: string[];
  resourceFileUrl?: string;
}

export interface Category {
  id: string;
  title: string;
  slug: string;
  description?: string;
  order: number;
}

interface NewsClientWrapperProps {
  initialPosts: NewsPost[];
  categories: Category[];
}

// --- 1. Fixed Layout Styles ---
// Colors and icons are determined by layoutType, not stored in CMS

interface LayoutStyles {
  borderHover: string;
  shadowHover: string;
  textAccent: string;
  bgAccent: string;
  iconBg: string;
  glowColor: string;
  buttonHover: string;
}

const LAYOUT_STYLES: Record<LayoutType, LayoutStyles> = {
  standard: {
    borderHover: 'group-hover:border-[#0062d1]/50',
    shadowHover: 'hover:shadow-blue-900/10',
    textAccent: 'text-[#0062d1]',
    bgAccent: 'bg-[#0062d1]/10',
    iconBg: 'bg-[#0062d1]/10',
    glowColor: 'bg-[#0062d1]',
    buttonHover: 'hover:bg-[#0062d1]',
  },
  technical: {
    borderHover: 'group-hover:border-emerald-500/50',
    shadowHover: 'hover:shadow-emerald-900/10',
    textAccent: 'text-emerald-400',
    bgAccent: 'bg-emerald-500/10',
    iconBg: 'bg-emerald-500/10',
    glowColor: 'bg-emerald-500',
    buttonHover: 'hover:bg-emerald-500',
  },
  magnet: {
    borderHover: 'group-hover:border-amber-500/50',
    shadowHover: 'hover:shadow-amber-900/10',
    textAccent: 'text-amber-400',
    bgAccent: 'bg-amber-500/10',
    iconBg: 'bg-amber-500/10',
    glowColor: 'bg-amber-500',
    buttonHover: 'hover:bg-amber-500',
  },
};

function getLayoutStyles(layoutType: LayoutType): LayoutStyles {
  return LAYOUT_STYLES[layoutType] || LAYOUT_STYLES.standard;
}

// --- 2. Section Header ---

interface SectionHeaderProps {
  title: React.ReactNode;
  subtitle: string;
  badge?: string;
  badgeIcon?: LucideIcon;
  align?: 'center' | 'left';
}

function SectionHeader({ 
  title, 
  subtitle, 
  badge, 
  badgeIcon: Icon, 
  align = 'center' 
}: SectionHeaderProps) {
  return (
    <div className={`mb-12 md:mb-16 ${align === 'left' ? 'text-left' : 'text-center'} relative z-10`}>
      {badge && (
        <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-white text-xs font-bold tracking-wider uppercase mb-6 ${align === 'center' ? 'mx-auto' : ''}`}>
          {Icon && <Icon size={12} className="text-[#0062d1]" />}
          <span>{badge}</span>
        </div>
      )}
      <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
        {title}
      </h2>
      <p className={`text-slate-400 text-lg max-w-2xl font-light leading-relaxed ${align === 'center' ? 'mx-auto' : ''}`}>
        {subtitle}
      </p>
    </div>
  );
}

// --- 3. Constants ---

const POSTS_PER_PAGE = 12;

// --- 4. Date Formatter ---

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

// --- 5. Sub-Components ---

const SearchBar = ({ 
  value, 
  onChange 
}: { 
  value: string; 
  onChange: (val: string) => void; 
}) => {
  return (
    <div className="relative max-w-md mx-auto mb-8 group">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0062d1]/20 to-emerald-500/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      <div className="relative bg-[#0B0F19] border border-white/10 rounded-full flex items-center px-4 py-3 focus-within:border-[#0062d1]/50 transition-colors shadow-lg">
        <Search size={18} className="text-slate-500 mr-3 group-focus-within:text-[#0062d1] transition-colors" />
        <input 
          type="text" 
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder="Search topics, tags, or keywords..."
          className="bg-transparent border-none outline-none text-white text-sm w-full placeholder:text-slate-600"
        />
        {value && (
          <button 
            onClick={() => onChange('')}
            className="text-slate-600 hover:text-white transition-colors p-1"
          >
            <X size={14} />
          </button>
        )}
      </div>
    </div>
  );
};

const FilterBar = ({
  active,
  onChange,
  categories
}: {
  active: string;
  onChange: (c: string) => void;
  categories: Category[];
}) => {
  // Create category list with "All" option
  const categoryOptions = ['All', ...categories.map(c => c.title)];
  
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
      {categoryOptions.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={`
            px-5 py-2.5 rounded-full text-xs font-mono uppercase tracking-wider border transition-all duration-300
            ${
              active === cat
                ? 'bg-[#0062d1] border-[#0062d1] text-white shadow-[0_0_20px_rgba(0,98,209,0.4)] scale-105'
                : 'bg-white/5 border-white/10 text-slate-400 hover:border-white/20 hover:text-white hover:bg-white/10'
            }
          `}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

const StandardCard = ({ post }: { post: NewsPost }) => (
  <Link href={`/news/${post.slug}`} className="block h-full">
    <div className="group relative flex flex-col h-full bg-[#0B0F19] border border-white/10 rounded-3xl overflow-hidden hover:border-[#0062d1]/50 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-900/10 hover:-translate-y-1">
      {/* Image Area */}
      <div className="h-48 bg-[#050810] relative overflow-hidden group-hover:scale-105 transition-transform duration-700">
        <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F19] to-transparent z-10 opacity-80" />
        
        {post.imageUrl ? (
          <img 
            src={post.imageUrl} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        ) : (
          <div className="w-full h-full bg-[#020408] relative">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#0062d1]/20 via-transparent to-transparent opacity-60"></div>
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
            
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-16 h-16 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center backdrop-blur-sm shadow-xl transform group-hover:scale-110 transition-transform duration-500 group-hover:border-[#0062d1]/30 group-hover:bg-[#0062d1]/10">
                <FileText size={32} className="text-slate-400 group-hover:text-white transition-colors" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-20 -mt-4">
        <div className="flex justify-between items-start mb-4">
          <span className="text-[10px] font-mono text-[#0062d1] border border-[#0062d1]/20 px-2 py-1 rounded bg-[#0062d1]/10 uppercase tracking-wider">
            {post.category}
          </span>
          <div className="flex flex-col items-end">
            <span className="text-[10px] font-mono text-slate-400 font-bold">{formatDate(post.date)}</span>
            {post.readTime && <span className="text-[9px] font-mono text-slate-600">{post.readTime}</span>}
          </div>
        </div>

        <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#0062d1] transition-colors leading-tight">
          {post.title}
        </h3>
        <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-light">
          {post.description}
        </p>

        <div className="flex items-center gap-2 text-xs font-bold text-white group/btn pt-4 border-t border-white/5">
          <span className="group-hover/btn:text-[#0062d1] transition-colors uppercase tracking-wider">Read Article</span>
          <ArrowRight size={14} className="group-hover/btn:translate-x-1 transition-transform text-slate-500 group-hover/btn:text-[#0062d1]" />
        </div>
      </div>
    </div>
  </Link>
);

const TechnicalCard = ({ post }: { post: NewsPost }) => {
  const styles = getLayoutStyles('technical');

  return (
    <Link href={`/news/${post.slug}`} className="block h-full">
      <div className={`group relative flex flex-col h-full bg-[#080C14]/80 border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 font-mono ${styles.borderHover} ${styles.shadowHover}`}>
        {/* Window Header */}
        <div className="h-9 bg-[#020408] border-b border-white/5 flex items-center px-4 gap-2 select-none">
          <div className="flex gap-1.5 opacity-60 group-hover:opacity-100 transition-opacity">
            <div className="w-2 h-2 rounded-full bg-red-500/40 group-hover:bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-yellow-500/40 group-hover:bg-yellow-500"></div>
            <div className="w-2 h-2 rounded-full bg-green-500/40 group-hover:bg-green-500"></div>
          </div>
          <div className="ml-auto text-[9px] text-slate-600 tracking-widest uppercase group-hover:text-slate-400 transition-colors">
            /// SYSTEM_LOG
          </div>
        </div>

        <div className="p-6 sm:p-8 flex flex-col flex-grow relative">
          {/* Background Glow - Always Emerald for Technical */}
          <div className={`absolute top-0 right-0 w-40 h-40 rounded-bl-full blur-[50px] pointer-events-none opacity-0 group-hover:opacity-10 transition-opacity ${styles.glowColor}`}></div>

          <div className="flex items-start justify-between mb-6">
            <div className={`w-14 h-14 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center ${styles.textAccent} group-hover:scale-110 transition-transform duration-300`}>
              <Terminal size={28} strokeWidth={1.5} />
            </div>
            <div className="flex flex-col items-end gap-1">
              <span className="text-[10px] text-slate-500 font-mono border border-white/5 px-2 py-1 rounded bg-white/[0.02]">
                {formatDate(post.date)}
              </span>
            </div>
          </div>

          <h3 className="text-lg font-bold text-white mb-3 group-hover:text-white transition-colors font-sans tracking-tight">
            {post.title}
          </h3>
          
          <div className="space-y-3 mb-6 flex-grow">
            <p className="text-slate-400 text-xs leading-relaxed border-l border-white/10 pl-3 py-1">
              <span className={`${styles.textAccent} mr-2`}>$</span>
              {post.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {post.tags?.map(tag => (
              <span key={tag} className="text-[9px] text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-white/10 transition-colors uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
};

const MagnetCard = ({ post }: { post: NewsPost }) => {
  const styles = getLayoutStyles('magnet');

  const handleDownload = (e: React.MouseEvent) => {
    if (post.resourceFileUrl) {
      e.preventDefault();
      window.open(post.resourceFileUrl, '_blank');
    }
  };

  return (
    <Link href={`/news/${post.slug}`} className="block h-full">
      <div className={`group relative flex flex-col h-full bg-[#0B0F19] border border-white/10 rounded-3xl overflow-hidden transition-all duration-500 hover:shadow-2xl hover:-translate-y-1 ${styles.borderHover}`}>
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
        <div className={`absolute -top-32 -right-32 w-64 h-64 ${styles.glowColor} opacity-10 rounded-full blur-[80px] group-hover:opacity-20 transition-opacity duration-500`}></div>

        <div className="p-6 sm:p-8 flex flex-col flex-grow relative z-10">
          <div className="flex justify-between items-start mb-6">
            <div className={`inline-flex items-center gap-2 px-2.5 py-1 rounded-lg bg-white/5 border border-white/10 ${styles.textAccent} text-[10px] font-bold uppercase tracking-wider`}>
              <AlertTriangle size={12} />
              <span>Resource</span>
            </div>
            <span className="text-[10px] font-mono text-slate-500 bg-white/5 px-2 py-1 rounded border border-white/5">
              {formatDate(post.date)}
            </span>
          </div>

          <h3 className={`text-xl font-bold text-white mb-3 transition-colors group-hover:text-amber-400`}>
            {post.title}
          </h3>
          <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-light">
            {post.description}
          </p>

          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags?.map(tag => (
                <div key={tag} className="flex items-center gap-1.5 text-[10px] font-mono text-slate-500">
                  <CheckCircle2 size={10} className={styles.textAccent} />
                  {tag}
                </div>
              ))}
            </div>

            <button 
              onClick={handleDownload}
              className={`w-full py-3.5 rounded-xl bg-white/5 border border-white/10 text-white font-bold text-xs uppercase tracking-wider ${styles.buttonHover} hover:text-black transition-all flex items-center justify-center gap-2 group/btn shadow-lg`}
            >
              <Download size={16} className="group-hover/btn:-translate-y-0.5 transition-transform" />
              Download Resource
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

const Pagination = ({ 
  currentPage, 
  totalPages, 
  onPageChange 
}: { 
  currentPage: number; 
  totalPages: number; 
  onPageChange: (page: number) => void; 
}) => {
  if (totalPages <= 1) return null;

  // Calculate visible page numbers (show max 5 pages with ellipsis)
  const getVisiblePages = () => {
    const pages: (number | string)[] = [];
    
    if (totalPages <= 5) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    pages.push(1);
    
    if (currentPage > 3) {
      pages.push('...');
    }
    
    for (let i = Math.max(2, currentPage - 1); i <= Math.min(totalPages - 1, currentPage + 1); i++) {
      if (!pages.includes(i)) {
        pages.push(i);
      }
    }
    
    if (currentPage < totalPages - 2) {
      pages.push('...');
    }
    
    if (!pages.includes(totalPages)) {
      pages.push(totalPages);
    }
    
    return pages;
  };

  return (
    <div className="flex items-center justify-center gap-4 mt-16">
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronLeft size={20} />
      </button>
      
      <div className="flex items-center gap-2">
        {getVisiblePages().map((page, index) => (
          typeof page === 'string' ? (
            <span key={`ellipsis-${index}`} className="text-slate-600 px-2">...</span>
          ) : (
            <button
              key={page}
              onClick={() => onPageChange(page)}
              className={`
                w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold transition-all
                ${currentPage === page 
                  ? 'bg-[#0062d1] text-white shadow-[0_0_15px_rgba(0,98,209,0.4)] scale-110' 
                  : 'bg-white/5 text-slate-400 hover:bg-white/10 hover:text-white'
                }
              `}
            >
              {page}
            </button>
          )
        ))}
      </div>

      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="p-2 rounded-full bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-white transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <ChevronRight size={20} />
      </button>
    </div>
  );
};

// --- 6. Main Client Component ---

export default function NewsClientWrapper({ initialPosts, categories }: NewsClientWrapperProps) {
  const [posts] = useState<NewsPost[]>(initialPosts);
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Reset page when filter/search changes
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCategory, searchQuery]);

  // Smooth scroll to top when page changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [currentPage]);

  // Filter logic
  const filteredPosts = posts.filter(post => {
    const categoryMatch = activeCategory === 'All' || post.category === activeCategory;
    const searchLower = searchQuery.toLowerCase();
    const searchMatch = 
      post.title.toLowerCase().includes(searchLower) ||
      post.description.toLowerCase().includes(searchLower) ||
      post.tags?.some(tag => tag.toLowerCase().includes(searchLower));

    return categoryMatch && searchMatch;
  });

  // Pagination logic
  const totalPages = Math.ceil(filteredPosts.length / POSTS_PER_PAGE);
  const currentPosts = filteredPosts.slice(
    (currentPage - 1) * POSTS_PER_PAGE, 
    currentPage * POSTS_PER_PAGE
  );

  return (
    <div className="bg-[#050A14] min-h-screen pt-24 sm:pt-32 pb-24 selection:bg-[#0062d1] selection:text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0"></div>
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#0062d1]/5 blur-[120px] rounded-full pointer-events-none z-0"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Header */}
        <div className="mb-8">
          <SectionHeader 
            title="Engineering Insights"
            subtitle="No fluff. Just architectural patterns, cost analysis, and management protocols we use daily."
            badge="Knowledge Base"
            badgeIcon={FileJson}
            align="center"
          />
        </div>

        {/* Search & Filter */}
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        <FilterBar active={activeCategory} onChange={setActiveCategory} categories={categories} />

        {/* Grid with Framer Motion */}
        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentPage + activeCategory + searchQuery}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
            >
              {currentPosts.map((post) => (
                <React.Fragment key={post.id}>
                  {post.layoutType === 'standard' && <StandardCard post={post} />}
                  {post.layoutType === 'technical' && <TechnicalCard post={post} />}
                  {post.layoutType === 'magnet' && <MagnetCard post={post} />}
                </React.Fragment>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredPosts.length === 0 && (
          <div className="text-center py-24 border border-dashed border-white/10 rounded-3xl bg-white/[0.02]">
            <div className="w-16 h-16 rounded-full bg-white/5 flex items-center justify-center mx-auto mb-4 animate-pulse">
              <Search size={24} className="text-slate-500" />
            </div>
            <h3 className="text-white font-bold text-lg mb-1">No insights found</h3>
            <p className="text-slate-500 text-sm">Try adjusting your search or filters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-6 text-[#0062d1] text-xs font-bold uppercase tracking-wider hover:text-white transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

        {/* Pagination */}
        {filteredPosts.length > 0 && (
          <Pagination 
            currentPage={currentPage} 
            totalPages={totalPages} 
            onPageChange={setCurrentPage} 
          />
        )}

      </div>
    </div>
  );
}
