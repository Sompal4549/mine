"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronDown, Search } from "lucide-react";
import faqsData from "@/data/faqs.json";
import { OrnamentalDivider } from "@/components/common/Ornaments";

export default function FaqClient() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const filteredFaqs = faqsData.faqs.filter((faq) => {
    const matchesCategory =
      selectedCategory === "All" || faq.category === selectedCategory;
    const matchesSearch =
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="space-y-6 sm:space-y-8 pb-8">
      {/* Hero */}
      <section className="relative w-full pt-5 sm:pt-7 pb-6 sm:pb-8 px-4 sm:px-8 bg-gradient-to-b from-[#FFF8ED] via-[#FAF3E8] to-[#FAF5ED] border-b border-[#E9DAC7]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
                <span className="w-6 h-[1px] bg-[#C18A32]" />
                <span>{faqsData.hero.sectionSubtitle}</span>
                <span className="w-6 h-[1px] bg-[#C18A32]" />
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#650D1B] leading-tight">
                {faqsData.hero.title}
              </h1>
              <p className="text-sm sm:text-base text-black leading-relaxed max-w-md">
                {faqsData.hero.description}
              </p>
              <OrnamentalDivider className="justify-start my-4" />
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#C18A32]/50 shadow-2xl bg-[#4A101B]">
                <Image
                  src={faqsData.hero.necklaceImage}
                  alt="Frequently Asked Questions"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Filter and Search */}
      <section className="px-4 sm:px-8">
        <div className="max-w-4xl mx-auto space-y-4">
          {/* Search bar */}
          <div className="relative">
            <Search className="w-5 h-5 text-[#C18A32] absolute left-4 top-3.5" />
            <input
              type="text"
              placeholder="Search questions by keyword (e.g. repair, hallmark, doorstep, custom)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-full border-2 border-[#C18A32]/40 bg-[#FFF8ED] text-sm text-[#241B19] focus:outline-none focus:border-[#650D1B] shadow-xs"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {faqsData.categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  selectedCategory === cat
                    ? "bg-[#650D1B] text-[#FFF8ED] shadow-sm font-semibold"
                    : "bg-[#FFF8ED] text-[#241B19] border border-[#C18A32]/35 hover:bg-[#F5EBDD]"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Accordion List */}
          <div className="space-y-3 pt-4">
            {filteredFaqs.length > 0 ? (
              filteredFaqs.map((faq, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <div
                    key={faq.question}
                    className="bg-[#FFF8ED] rounded-2xl border-2 border-[#C18A32]/35 shadow-xs overflow-hidden transition-all"
                  >
                    <button
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-serif font-bold text-[#650D1B] text-base sm:text-lg hover:text-[#4A101B]"
                    >
                      <span className="pr-4">{faq.question}</span>
                      <ChevronDown
                        className={`w-5 h-5 text-[#C18A32] flex-shrink-0 transition-transform duration-200 ${
                          isOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-5 pb-5 text-xs sm:text-sm text-[#65564E] leading-relaxed border-t border-[#E9DAC7]/60 pt-3">
                        <p>{faq.answer}</p>
                        <span className="inline-block mt-3 text-[11px] font-semibold text-[#C18A32] bg-[#F5EBDD] px-2.5 py-0.5 rounded-full">
                          Category: {faq.category}
                        </span>
                      </div>
                    )}
                  </div>
                );
              })
            ) : (
              <div className="text-center py-12 text-[#65564E]">
                <p>No questions matched your search query.</p>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

