"use client";

import React, { useEffect } from 'react'; // Додано useEffect
import Link from 'next/link'; // Додано Link
import { Calendar, BookOpen } from 'lucide-react';
import { getCalApi } from "@calcom/embed-react"; // Додано getCalApi

export function AboutCTASection() {
  // Ініціалізація Cal.com
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ "namespace": "first-touch" });
      cal("ui", {
        "cssVarsPerTheme": {
          "light": { "cal-brand": "#0162d1" },
          "dark": { "cal-brand": "#0162d1" }
        },
        "hideEventTypeDetails": false,
        "layout": "month_view",
      });
    })();
  }, []);
  
  return (
    <section className="py-16 sm:py-24 px-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-[#0062d1] via-emerald-400 to-[#0062d1] opacity-5 animate-moving-gradient"></div>
      
      <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#0062d1]/20 rounded-full blur-[128px] pointer-events-none"></div>
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-emerald-500/10 rounded-full blur-[128px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-8 sm:mb-10 leading-tight tracking-tight">
          Finally, a partner you <br className="hidden md:block" />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#0062d1] to-emerald-400">
            don't have to micromanage.
          </span>
        </h2>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          {/* Кнопка 1: Book a Culture Fit Call (Cal.com) */}
          <button 
            data-cal-namespace="first-touch"
            data-cal-link="nazar-moroz/first-touch"
            data-cal-config='{"layout":"month_view"}'
            className="px-6 py-3 sm:px-8 sm:py-4 bg-[#0062d1] hover:bg-[#0052b3] text-white font-bold rounded-full transition-all shadow-[0_0_20px_-5px_rgba(0,98,209,0.5)] hover:shadow-[0_0_30px_-5px_rgba(0,98,209,0.6)] flex items-center justify-center gap-2 w-full sm:w-auto text-base sm:text-lg"
          >
            <Calendar size={20} className="shrink-0" />
            <span>Book a Culture Fit Call</span>
          </button>
          
          {/* Кнопка 2: Read Engineering Insights (Link до /news) */}
          <Link 
            href="/news"
            className="px-6 py-3 sm:px-8 sm:py-4 bg-transparent border border-white/20 hover:border-white/50 text-white font-medium rounded-full transition-all flex items-center justify-center gap-2 w-full sm:w-auto text-base sm:text-lg group"
          >
            <BookOpen size={20} className="shrink-0 text-slate-400 group-hover:text-white transition-colors" />
            <span>Read Engineering Insights</span>
          </Link>
        </div>
      </div>

      <style jsx>{`
        @keyframes moving-gradient {
            0% { background-position: 0% 50%; }
            50% { background-position: 100% 50%; }
            100% { background-position: 0% 50%; }
        }
        :global(.animate-moving-gradient) {
            background-size: 400% 400%;
            animation: moving-gradient 10s ease infinite;
        }
      `}</style>
    </section>
  );
}