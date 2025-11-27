import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { InsightCard, type InsightPost } from "@/components/ui/insight-cards";

interface InsightsSectionProps {
  posts?: InsightPost[];
}

export function InsightsSection({ posts = [] }: InsightsSectionProps) {
  return (
    <section className="relative z-20 py-24 px-6 border-t border-white/5 bg-[#050A14] overflow-hidden">
      {/* Subtle Tech Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      <div className="absolute top-0 right-0 w-1/2 h-1/2 bg-[#0062d1]/5 blur-[120px] rounded-full pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-center md:items-end mb-12 md:mb-16 gap-6">
           <div className="text-center md:text-left">
              <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-tight">
                Engineering <span className="text-slate-500">Insights</span>
              </h2>
           </div>
           <Link 
              href="/news"
              className="hidden md:flex group items-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-all duration-300 px-6 py-2.5 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10 shrink-0"
           >
              View All Insights
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

        {/* Content - Dynamic Cards using shared InsightCard component */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"> 
           {posts.map((post) => (
              <InsightCard key={post.id} post={post} />
           ))}

           {/* Fallback if no posts */}
           {posts.length === 0 && (
              <div className="col-span-full text-center py-12">
                <p className="text-slate-500">No insights available yet. Check back soon!</p>
              </div>
           )}
        </div>

        {/* Mobile Button */}
        <div className="mt-12 flex md:hidden justify-center">
           <Link 
              href="/news"
              className="w-full group flex items-center justify-center gap-2 text-sm font-bold text-slate-300 hover:text-white transition-all duration-300 px-6 py-4 rounded-full border border-white/10 hover:border-white/20 bg-white/5 hover:bg-white/10"
           >
              View All Insights
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
           </Link>
        </div>

      </div>
    </section>
  );
}
