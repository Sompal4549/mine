import React from "react";
import Image from "next/image";
import { Store, Users, Wrench, Home as HomeIcon, Diamond } from "lucide-react";
import { LaurelWreathIcon, CrossedToolsIcon } from "@/components/common/CustomIcons";
import aboutData from "@/data/about.json";
import { OrnamentalDivider } from "@/components/common/Ornaments";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "About Our 60-Year Legacy",
  description:
    "Discover the craftsmanship journey of Shri Swami Jewellers, founded in 1966 by Shri Swamy Nath Sah in Shitalpur, Ekma (Saran, Bihar). Three generations of trust.",
  path: "/about",
  image: "/images/og/og-about.jpg",
  imageAlt: "Shri Swami Jewellers 60-year jewellery craftsmanship legacy",
  keywords: [
    "Shri Swami Jewellers about",
    "Shri Swamy Nath Sah",
    "jeweller legacy 1966",
    "Saran Bihar goldsmith",
  ],
});

export default function AboutPage() {
  return (
    <div className="w-full text-[#241B19] bg-[#FAF4E8]">
      {/* 1. HERO SECTION (FULL WIDTH BANNER BACKGROUND) */}
      <section className="relative w-full min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] bg-[#FAF4E8] border-b border-[#E7D6C1] overflow-hidden flex items-center">
        {/* Full-width banner background image matching screenshot exact */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={aboutData.hero.necklaceImage}
            alt="About Our Legacy"
            fill
            priority
            className="object-cover object-right"
          />
          {/* Left subtle gradient for small screens & text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF4E8] via-[#FAF4E8]/95 sm:via-[#FAF4E8]/60 lg:via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
              <span className="w-5 h-[1px] bg-[#C18A32]" />
              <span>{aboutData.hero.sectionSubtitle}</span>
              <span className="w-5 h-[1px] bg-[#C18A32]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A101B] leading-tight">
              {aboutData.hero.title}
            </h1>

            <p className="text-sm sm:text-[15px] text-black leading-relaxed max-w-md">
              {aboutData.hero.description}
            </p>

            <OrnamentalDivider className="justify-start my-2" />
          </div>
        </div>
      </section>

      {/* 2. OUR FOUNDER SECTION */}
      <section className="w-full py-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#FFF9F0] rounded-2xl border border-[#D8A84E]/40 p-4 sm:p-6 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Grandfather Photo (4 cols) */}
              <div className="lg:col-span-4 flex justify-center">
                <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3]">
                  <Image
                    src={aboutData.founder.image}
                    alt={aboutData.founder.name}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>

              {/* Founder Biography (5 cols) */}
              <div className="lg:col-span-5 space-y-3 text-left">
                <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
                  <span className="w-5 h-[1px] bg-[#C18A32]" />
                  <span>{aboutData.founder.sectionSubtitle}</span>
                  <span className="w-5 h-[1px] bg-[#C18A32]" />
                </div>

                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B]">
                  {aboutData.founder.name}
                </h2>

                <p className="text-xs sm:text-sm font-serif italic text-[#C18A32] font-medium">
                  {aboutData.founder.tagline}
                </p>

                <p className="text-xs sm:text-sm text-[#65564E] leading-relaxed">
                  {aboutData.founder.bioParagraphs.join(" ")}
                </p>
              </div>

              {/* Founder Quote (3 cols) */}
              <div className="lg:col-span-3 border-t lg:border-t-0 lg:border-l border-[#C18A32]/40 pt-4 lg:pt-0 lg:pl-6 space-y-2">
                <span className="font-serif text-4xl text-[#C18A32] leading-none block">“</span>
                <p className="font-serif italic text-sm text-[#4A101B] leading-relaxed">
                  {aboutData.founder.quote}
                </p>
                <OrnamentalDivider className="justify-start pt-2" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 3. OUR JOURNEY (TIMELINE) */}
      <section className="w-full py-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="bg-[#FFF9F0] rounded-2xl border border-[#D8A84E]/40 p-4 sm:p-6 shadow-xs space-y-4">
            <div className="text-center space-y-1">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
                <span className="w-5 h-[1px] bg-[#C18A32]" />
                <span>{aboutData.journey.sectionSubtitle}</span>
                <span className="w-5 h-[1px] bg-[#C18A32]" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B]">
                {aboutData.journey.title}
              </h2>
            </div>

            {/* 3 Milestones */}
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-6 pt-4">
              <div className="hidden md:block absolute top-[52px] left-[15%] right-[15%] h-[2px] bg-gradient-to-r from-[#C18A32]/30 via-[#C18A32] to-[#C18A32]/30 -z-0" />

              {aboutData.journey.timeline.map((item, idx) => {
                const icons = [
                  <Store key="1" className="w-5 h-5 text-[#650D1B]" />,
                  <Users key="2" className="w-5 h-5 text-[#650D1B]" />,
                  <Diamond key="3" className="w-5 h-5 text-[#650D1B]" />,
                ];

                return (
                  <div key={item.period} className="relative z-10 flex flex-col items-center text-center space-y-2">
                    <div className="w-12 h-12 rounded-full bg-[#FAF4E8] border-2 border-[#C18A32] flex items-center justify-center shadow-sm">
                      {icons[idx]}
                    </div>

                    <div className="font-serif text-lg font-bold text-[#4A101B]">
                      {item.period}
                    </div>

                    {item.badge && (
                      <span className="bg-[#E6BE75] text-[#4A101B] text-[10px] font-bold px-3 py-0.5 rounded-full">
                        {item.badge}
                      </span>
                    )}

                    <p className="text-xs text-[#65564E] leading-relaxed max-w-xs">
                      {item.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. WHAT MAKES US DIFFERENT */}
      <section className="w-full py-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="text-center space-y-1">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
              <span className="w-5 h-[1px] bg-[#C18A32]" />
              <span>{aboutData.whatMakesUsDifferent.sectionSubtitle}</span>
              <span className="w-5 h-[1px] bg-[#C18A32]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B]">
              What Makes Us Different
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {aboutData.whatMakesUsDifferent.items.map((item, idx) => {
              const icons = [
                <LaurelWreathIcon key="1" className="w-9 h-9 text-[#C18A32]" text="60+" subtext="Years" />,
                <Diamond key="2" className="w-6 h-6 text-[#C18A32]" />,
                <CrossedToolsIcon key="3" className="w-6 h-6 text-[#C18A32]" />,
                <Wrench key="4" className="w-6 h-6 text-[#C18A32]" />,
                <HomeIcon key="5" className="w-6 h-6 text-[#C18A32]" />,
              ];

              return (
                <div
                  key={item.title}
                  className="bg-[#FFF9F0] p-4 rounded-xl border border-[#D8A84E]/40 text-center flex flex-col items-center space-y-2 shadow-xs hover:shadow-md transition-shadow"
                >
                  <div className="w-11 h-11 rounded-full bg-[#FAF4E8] border border-dashed border-[#C18A32] flex items-center justify-center">
                    {icons[idx]}
                  </div>
                  <h3 className="font-serif text-sm font-bold text-[#4A101B]">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-[#65564E] leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 5. OUR VISION (FULL WIDTH SECTION) */}
      <section className="w-full py-6 bg-[#FAF4E8] border-t border-[#E7D6C1]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-[#FFF9F0] rounded-2xl border border-[#D8A84E]/40 p-4 sm:p-6 shadow-xs">
            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[16/10] rounded-xl overflow-hidden border border-[#C18A32] shadow-sm">
                <Image
                  src={aboutData.vision.image}
                  alt="Gold Bangles Traditional Craftsmanship"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="lg:col-span-7 bg-[#FAF4E8] p-6 sm:p-8 rounded-2xl border border-[#C18A32]/40 text-center space-y-3">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
                <span className="w-5 h-[1px] bg-[#C18A32]" />
                <span>{aboutData.vision.sectionSubtitle}</span>
                <span className="w-5 h-[1px] bg-[#C18A32]" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B]">
                {aboutData.vision.title}
              </h2>

              <p className="text-sm text-[#65564E] leading-relaxed max-w-lg mx-auto">
                {aboutData.vision.statement}
              </p>

              <OrnamentalDivider className="mx-auto pt-1" />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
