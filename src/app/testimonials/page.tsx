import React from "react";
import Image from "next/image";
import { Star, MapPin } from "lucide-react";
import testimonialsData from "@/data/testimonials.json";
import { OrnamentalDivider } from "@/components/common/Ornaments";

export const metadata = {
  title: "Customer Testimonials | Three Generations of Trust | Shri Swami Jewellers",
  description:
    "Read genuine reviews and customer stories from Delhi NCR, Chhapra, and Siwan about our custom jewellery, repairs, and doorstep service.",
};

export default function TestimonialsPage() {
  return (
    <div className="space-y-6 sm:space-y-8 pb-8">
      {/* Hero */}
      <section className="relative w-full pt-5 sm:pt-7 pb-6 sm:pb-8 px-4 sm:px-8 bg-gradient-to-b from-[#FFF8ED] via-[#FAF3E8] to-[#FAF5ED] border-b border-[#E9DAC7]/40">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
                <span className="w-6 h-[1px] bg-[#C18A32]" />
                <span>{testimonialsData.hero.sectionSubtitle}</span>
                <span className="w-6 h-[1px] bg-[#C18A32]" />
              </div>
              <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#650D1B] leading-tight">
                {testimonialsData.hero.title}
              </h1>
              <p className="text-base sm:text-lg text-[#65564E] leading-relaxed max-w-xl">
                {testimonialsData.hero.description}
              </p>
              <OrnamentalDivider className="justify-start my-4" />
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden border-2 border-[#C18A32]/50 shadow-2xl bg-[#4A101B]">
                <Image
                  src={testimonialsData.hero.necklaceImage}
                  alt="Customer Trust Legacy"
                  fill
                  className="object-cover"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Grid */}
      <section className="px-4 sm:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonialsData.testimonials.map((item) => (
            <div
              key={item.id}
              className="bg-[#FFF8ED] rounded-3xl border-2 border-[#C18A32]/35 p-6 sm:p-8 shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between space-y-4"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {/* 5 Stars */}
                  <div className="flex items-center gap-1 text-[#D8A84E]">
                    {[...Array(item.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] text-[#C18A32] font-semibold bg-[#F5EBDD] px-2.5 py-0.5 rounded-full">
                    {item.serviceUsed}
                  </span>
                </div>

                <p className="font-serif italic text-sm sm:text-base text-[#241B19] leading-relaxed">
                  &ldquo;{item.comment}&rdquo;
                </p>
              </div>

              <div className="pt-4 border-t border-[#E9DAC7]/60 flex items-center justify-between text-xs">
                <div>
                  <h4 className="font-serif font-bold text-sm text-[#650D1B]">
                    {item.name}
                  </h4>
                  <div className="flex items-center gap-1 text-[#65564E] mt-0.5">
                    <MapPin className="w-3 h-3 text-[#C18A32]" />
                    <span>{item.location}</span>
                  </div>
                </div>
                <span className="text-[11px] text-[#65564E]">{item.year}</span>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
