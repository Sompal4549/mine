import React from "react";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import careData from "@/data/jewellery-care.json";
import { OrnamentalDivider } from "@/components/common/Ornaments";

export const metadata = {
  title: "Jewellery Care Guide | Preserving Gold & Gemstones | Shri Swami Jewellers",
  description:
    "Expert goldsmith tips on storing, cleaning and preserving traditional Indian gold, Kundan, Polki, diamonds and precious gemstones.",
};

export default function JewelleryCarePage() {
  return (
    <div className="space-y-6 sm:space-y-8 pb-8">
      {/* Hero */}
      <section className="relative w-full pt-5 sm:pt-7 pb-6 sm:pb-8 px-4 sm:px-8 bg-gradient-to-b from-[#FFF8ED] via-[#FAF3E8] to-[#FAF5ED] border-b border-[#E9DAC7]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
                <span className="w-6 h-[1px] bg-[#C18A32]" />
                <span>{careData.hero.sectionSubtitle}</span>
                <span className="w-6 h-[1px] bg-[#C18A32]" />
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#650D1B] leading-tight">
                {careData.hero.title}
              </h1>
              <p className="text-sm sm:text-base text-black leading-relaxed max-w-md">
                {careData.hero.description}
              </p>
              <OrnamentalDivider className="justify-start my-4" />
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#C18A32]/50 shadow-2xl bg-[#4A101B]">
                <Image
                  src={careData.hero.necklaceImage}
                  alt="Jewellery Care Guide"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sections */}
      <section className="px-4 sm:px-8">
        <div className="max-w-5xl mx-auto space-y-5">
          {careData.sections.map((sec, idx) => (
            <div
              key={sec.title}
              className="bg-[#FFF8ED] rounded-3xl border-2 border-[#C18A32]/35 p-4 sm:p-6 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full bg-[#FAF5ED] border border-[#C18A32] flex items-center justify-center text-[#650D1B] font-serif font-bold text-lg">
                  {idx + 1}
                </div>
                <div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#650D1B]">
                    {sec.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#C18A32] font-semibold italic">
                    {sec.subtitle}
                  </p>
                </div>
              </div>

              <ul className="space-y-3 pt-2 text-xs sm:text-sm text-[#65564E] leading-relaxed">
                {sec.tips.map((tip, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <CheckCircle2 className="w-4 h-4 text-[#C18A32] flex-shrink-0 mt-0.5" />
                    <span>{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
