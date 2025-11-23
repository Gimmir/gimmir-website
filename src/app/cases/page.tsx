"use client";

import { useState } from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

// --- CASES DATA (from source/main) ---
import { ALL_CASES, ALL_INDUSTRIES } from './data';

export default function CasesPage() {
  const [filter, setFilter] = useState("All");
  const filtered =
    filter === "All"
      ? ALL_CASES
      : ALL_CASES.filter((c) => c.industry === filter);

  return (
    <div className="min-h-screen bg-white">
      <section className="pt-32 pb-12 text-center">
        <h1 className="text-5xl font-black mb-4">Success Stories</h1>
        <p className="text-gray-500 text-lg mb-10">
          Explore how we help businesses transform and grow.
        </p>
        <div className="flex flex-wrap gap-3 justify-center mb-12">
          {ALL_INDUSTRIES.map((cat) => (
            <button
              key={cat}
              className={`px-6 py-2 rounded-full border text-base font-bold transition-all duration-200 ${
                filter === cat
                  ? "bg-[#0062D1] text-white border-[#0062D1] shadow"
                  : "bg-white text-gray-700 border-gray-200 hover:bg-blue-50"
              }`}
              onClick={() => setFilter(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </section>
      <section className="max-w-7xl mx-auto px-6 pb-24 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {filtered.map((c) => (
          <div
            key={c.id}
            className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow group flex flex-col hover:shadow-xl transition-all duration-300"
          >
            <Link href={`/cases/${c.id}`} className="block relative h-56 overflow-hidden">
              <img
                src={c.image}
                alt={c.title}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-0 left-0 p-5 w-full">
                <div className="flex gap-2 mb-2 flex-wrap">
                  {c.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2 py-0.5 bg-white/20 backdrop-blur border border-white/10 text-white text-[10px] font-bold uppercase tracking-wider rounded"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="text-[11px] font-bold text-blue-200 uppercase tracking-widest mb-1">
                  {c.client}
                </div>
                <h3 className="text-2xl font-bold text-white leading-tight">
                  {c.title}
                </h3>
              </div>
            </Link>
            <div className="p-5 flex-1 flex flex-col">
              <p className="text-gray-600 text-base mb-5 border-b border-gray-100 pb-5 flex-1 line-clamp-3">
                {c.desc}
              </p>
              <div className="mt-auto">
                <Link href={`/cases/${c.id}`}>
                  <button className="w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-[#0062D1] text-white font-bold text-sm hover:bg-[#0050aa] transition-all">
                    Read Case Study <ArrowRight size={16} />
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </section>
    </div>
  );
}
