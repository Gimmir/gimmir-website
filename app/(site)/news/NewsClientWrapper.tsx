'use client';

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  FileJson, 
  X,
  ChevronLeft,
  ChevronRight,
  LucideIcon,
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { InsightCard, type InsightPost } from '@/components/ui/insight-cards';

// --- 0. Types ---

export interface Category {
  id: string;
  title: string;
  slug: string;
  description?: string;
  order: number;
}

interface NewsClientWrapperProps {
  initialPosts: InsightPost[];
  categories: Category[];
}

// --- 1. Section Header ---

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

// --- 4. Sub-Components ---

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
  const [posts] = useState<InsightPost[]>(initialPosts);
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
                <InsightCard key={post.id} post={post} />
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
