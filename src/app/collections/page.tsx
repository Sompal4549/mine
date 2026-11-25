import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import collectionsData from "@/data/collections.json";
import { OrnamentalDivider } from "@/components/common/Ornaments";

export const metadata = {
  title: "Curated Jewellery Collections | Shri Swami Jewellers",
  description:
    "Explore curated collections: Heritage Bridal, Rare & Regional Traditions, Hand-forged Kadas, and Bespoke Gemstone Rings.",
};

export default function CollectionsPage() {
  return (
    <div className="space-y-6 sm:space-y-8 pb-8">
      {/* Hero */}
      <section className="relative w-full pt-5 sm:pt-7 pb-6 sm:pb-8 px-4 sm:px-8 bg-gradient-to-b from-[#FFF8ED] via-[#FAF3E8] to-[#FAF5ED] border-b border-[#E9DAC7]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
                <span className="w-6 h-[1px] bg-[#C18A32]" />
                <span>{collectionsData.hero.sectionSubtitle}</span>
                <span className="w-6 h-[1px] bg-[#C18A32]" />
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#650D1B] leading-tight">
                {collectionsData.hero.title}
              </h1>
              <p className="text-sm sm:text-base text-black leading-relaxed max-w-md">
                {collectionsData.hero.description}
              </p>
              <OrnamentalDivider className="justify-start my-4" />
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#C18A32]/50 shadow-2xl bg-[#4A101B]">
                <Image
                  src={collectionsData.hero.necklaceImage}
                  alt="Collections Showcase"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {collectionsData.collections.map((col) => (
            <div
              key={col.id}
              className="bg-[#FFF8ED] rounded-3xl border-2 border-[#C18A32]/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col group"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/10">
                <Image
                  src={col.image}
                  alt={col.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-4 left-4 bg-[#650D1B] text-[#FFF8ED] text-xs font-serif font-bold px-3 py-1 rounded-full shadow border border-[#C18A32]/50">
                  {col.tag}
                </span>
                <span className="absolute bottom-4 right-4 bg-black/75 text-white text-xs px-2.5 py-1 rounded-md">
                  {col.itemsCount}
                </span>
              </div>

              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-4">
                <div className="space-y-1.5">
                  <h3 className="font-serif text-2xl font-bold text-[#650D1B]">
                    {col.name}
                  </h3>
                  <p className="font-serif text-sm italic text-[#C18A32] font-semibold">
                    {col.subtitle}
                  </p>
                  <p className="text-xs sm:text-sm text-[#65564E] leading-relaxed pt-1">
                    {col.description}
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href={`/gallery?cat=${col.id}`}
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold text-[#650D1B] hover:text-[#4A101B] group-hover:gap-2.5 transition-all"
                  >
                    <span>View Collection Pieces</span>
                    <ArrowRight className="w-4 h-4 text-[#C18A32]" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
