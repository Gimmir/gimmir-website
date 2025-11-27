'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Terminal, 
  Download, 
  ArrowRight, 
  FileText, 
  AlertTriangle, 
  CheckCircle2,
} from 'lucide-react';

// ═══════════════════════════════════════════════════════════════════════════
// TYPES
// ═══════════════════════════════════════════════════════════════════════════

export type LayoutType = 'standard' | 'technical' | 'magnet';

export interface InsightPost {
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

// ═══════════════════════════════════════════════════════════════════════════
// LAYOUT STYLES
// ═══════════════════════════════════════════════════════════════════════════

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

export function getLayoutStyles(layoutType: LayoutType): LayoutStyles {
  return LAYOUT_STYLES[layoutType] || LAYOUT_STYLES.standard;
}

// ═══════════════════════════════════════════════════════════════════════════
// UTILITIES
// ═══════════════════════════════════════════════════════════════════════════

export function formatDate(dateString: string): string {
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

// ═══════════════════════════════════════════════════════════════════════════
// STANDARD CARD (Magazine View)
// ═══════════════════════════════════════════════════════════════════════════

export function StandardCard({ post }: { post: InsightPost }) {
  return (
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
          <p className="text-slate-400 text-sm leading-relaxed mb-6 flex-grow font-light line-clamp-3">
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
}

// ═══════════════════════════════════════════════════════════════════════════
// TECHNICAL CARD (Documentation View)
// ═══════════════════════════════════════════════════════════════════════════

export function TechnicalCard({ post }: { post: InsightPost }) {
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
            <p className="text-slate-400 text-xs leading-relaxed border-l border-white/10 pl-3 py-1 line-clamp-3">
              <span className={`${styles.textAccent} mr-2`}>$</span>
              {post.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-2 mt-auto">
            {post.tags?.slice(0, 3).map(tag => (
              <span key={tag} className="text-[9px] text-slate-400 bg-white/5 px-2 py-1 rounded border border-white/5 group-hover:border-white/10 transition-colors uppercase tracking-wider">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Link>
  );
}

// ═══════════════════════════════════════════════════════════════════════════
// MAGNET CARD (Lead Magnet / Download View)
// ═══════════════════════════════════════════════════════════════════════════

export function MagnetCard({ post }: { post: InsightPost }) {
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
          <p className="text-slate-400 text-sm leading-relaxed mb-8 flex-grow font-light line-clamp-3">
            {post.description}
          </p>

          <div className="mt-auto space-y-4">
            <div className="flex flex-wrap gap-2">
              {post.tags?.slice(0, 3).map(tag => (
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
}

// ═══════════════════════════════════════════════════════════════════════════
// INSIGHT CARD (Auto-selects based on layoutType)
// ═══════════════════════════════════════════════════════════════════════════

export function InsightCard({ post }: { post: InsightPost }) {
  switch (post.layoutType) {
    case 'technical':
      return <TechnicalCard post={post} />;
    case 'magnet':
      return <MagnetCard post={post} />;
    case 'standard':
    default:
      return <StandardCard post={post} />;
  }
}
