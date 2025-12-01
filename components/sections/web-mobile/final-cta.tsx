"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";
import { getCalApi } from "@calcom/embed-react";

// Назвали компонент FinalCTA, щоб він відповідав імпорту в page.tsx
export function FinalCTA() {
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
    <section className="py-24 bg-[#020408] relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-[#0062d1] opacity-10 blur-[120px] rounded-full pointer-events-none" />
      
      <div className="container px-4 mx-auto relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Ready to Build Your <span className="text-[#0062d1]">Mobile Solution?</span>
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Let's discuss your project architecture, tech stack, and roadmap. 
            Schedule a call directly with our engineering team—no sales fluff.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            {/* Button 1: Cal.com Integration */}
            <button
              data-cal-namespace="first-touch"
              data-cal-link="nazar-moroz/first-touch"
              data-cal-config='{"layout":"month_view"}'
              className="group w-full sm:w-auto px-8 py-4 bg-[#0062d1] text-white rounded-full font-bold text-lg hover:bg-[#0052b3] transition-all shadow-[0_0_20px_rgba(0,98,209,0.3)] flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
              Book a Meet
            </button>

            {/* Button 2: Alternative Action (Estimate or Contact) */}
            <Link
              href="/contact-us"
              className="w-full sm:w-auto px-8 py-4 bg-transparent border border-white/20 text-white rounded-full font-bold text-lg hover:bg-white/5 transition-colors flex items-center justify-center gap-2"
            >
              Estimate Project
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}