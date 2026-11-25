"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  MessageCircle,
  MessageSquare,
  Pencil,
  ShieldCheck,
  Diamond,
  Crown,
  Infinity as InfinityIcon,
  Hammer,
  ChevronDown,
  Camera,
  Search,
  Gift,
  Handshake,
  Users,
} from "lucide-react";
import {
  RingIcon,
  BangleIcon,
  StoneSettingIcon,
  PolishRefurbishIcon,
  AntiqueJewelleryIcon,
  HandHoldingGemIcon,
  TempleShrineIcon,
  ScallopedQualityBadgeIcon,
  NecklaceBustIcon,
  CrossedToolsIcon,
} from "@/components/common/CustomIcons";
import { OrnamentalDivider } from "@/components/common/Ornaments";
import BeforeAfterSlider from "@/components/common/BeforeAfterSlider";
import EnquiryModal from "@/components/common/EnquiryModal";
import GalleryLightbox from "@/components/common/GalleryLightbox";

interface ServiceDetailViewProps {
  data: any;
}

export default function ServiceDetailView({ data }: ServiceDetailViewProps) {
  const [enquiryOpen, setEnquiryOpen] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);

  const isCustomDesign = data.slug === "custom-jewellery-design";
  const isRepair = data.slug === "jewellery-repair";
  const isCustomization = data.slug === "jewellery-customization";
  const isMaking = data.slug === "jewellery-making";

  const galleryImagesForLightbox = (data.galleryImages || []).map((img: any) => ({
    src: img.src,
    alt: img.alt,
    title: img.title,
  }));

  const getRepairOfferingIcon = (title: string) => {
    const t = title.toLowerCase();
    if (t.includes("chain")) return <Diamond className="w-5 h-5 text-[#C18A32]" />;
    if (t.includes("ring")) return <RingIcon className="w-5 h-5 text-[#C18A32]" />;
    if (t.includes("bangle")) return <BangleIcon className="w-5 h-5 text-[#C18A32]" />;
    if (t.includes("stone")) return <StoneSettingIcon className="w-5 h-5 text-[#C18A32]" />;
    if (t.includes("polish")) return <PolishRefurbishIcon className="w-5 h-5 text-[#C18A32]" />;
    if (t.includes("antique")) return <AntiqueJewelleryIcon className="w-5 h-5 text-[#C18A32]" />;
    return <Diamond className="w-5 h-5 text-[#C18A32]" />;
  };

  const getRepairProcessIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <Camera className="w-5 h-5 text-[#FFF8ED]" />;
      case 1:
        return <Search className="w-5 h-5 text-[#FFF8ED]" />;
      case 2:
        return <CrossedToolsIcon className="w-5 h-5 text-[#FFF8ED]" />;
      case 3:
        return <ShieldCheck className="w-5 h-5 text-[#FFF8ED]" />;
      case 4:
        return <Gift className="w-5 h-5 text-[#FFF8ED]" />;
      default:
        return <Camera className="w-5 h-5 text-[#FFF8ED]" />;
    }
  };

  const getCustomDesignProcessIcon = (idx: number) => {
    switch (idx) {
      case 0:
        return <MessageSquare className="w-5 h-5 text-[#C18A32]" />;
      case 1:
        return <Diamond className="w-5 h-5 text-[#C18A32]" />;
      case 2:
        return <NecklaceBustIcon className="w-5 h-5 text-[#C18A32]" />;
      case 3:
        return <Hammer className="w-5 h-5 text-[#C18A32]" />;
      case 4:
        return <Gift className="w-5 h-5 text-[#C18A32]" />;
      default:
        return <MessageSquare className="w-5 h-5 text-[#C18A32]" />;
    }
  };

  const getWhyChooseIcon = (title: string, iconKey?: string) => {
    const t = title.toLowerCase();
    if (t.includes("craftsmanship") || t.includes("bespoke") || iconKey === "gem" || iconKey === "diamond") {
      return <Diamond className="w-5 h-5 text-[#D8A84E]" />;
    }
    if (t.includes("trusted") || t.includes("transparent gold") || t.includes("density") || iconKey === "shield") {
      return <ShieldCheck className="w-5 h-5 text-[#D8A84E]" />;
    }
    if (t.includes("handling") || t.includes("careful")) {
      return <HandHoldingGemIcon className="w-5 h-5 text-[#D8A84E]" />;
    }
    if (t.includes("pricing") || iconKey === "handshake") {
      return <Handshake className="w-5 h-5 text-[#D8A84E]" />;
    }
    if (t.includes("regional") || iconKey === "crown") {
      return <Crown className="w-5 h-5 text-[#D8A84E]" />;
    }
    if (t.includes("polish") || t.includes("care") || iconKey === "award") {
      return <PolishRefurbishIcon className="w-5 h-5 text-[#D8A84E]" />;
    }
    if (t.includes("heritage") || iconKey === "users") {
      return <Users className="w-5 h-5 text-[#D8A84E]" />;
    }
    return <Diamond className="w-5 h-5 text-[#D8A84E]" />;
  };

  return (
    <div className="w-full text-[#241B19] bg-[#FAF4E8]">
      {/* 1. SERVICE HERO SECTION (FULL WIDTH BANNER) */}
      <section className="relative w-full min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] bg-[#FAF4E8] border-b border-[#E7D6C1] overflow-hidden flex items-center">
        {/* Full-width banner background image */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={data.heroBanner || "/images/banners/hero-craftsmanship.webp"}
            alt={data.title}
            fill
            priority
            className="object-cover object-right"
          />
          {/* Soft left gradient for mobile and small screens */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF4E8] via-[#FAF4E8]/95 sm:via-[#FAF4E8]/60 lg:via-transparent to-transparent" />
        </div>

        {/* Content overlaid on the left */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
              <span className="w-5 h-[1px] bg-[#C18A32]" />
              <span>{data.badge || data.category}</span>
              <span className="w-5 h-[1px] bg-[#C18A32]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A101B] leading-tight">
              {data.title}
            </h1>

            <p className="text-sm sm:text-[15px] text-black leading-relaxed max-w-md">
              {data.heroSubtitle}
            </p>

            <OrnamentalDivider className="justify-start my-2" />
          </div>
        </div>
      </section>

      {/* 2. SPECIFIC SERVICE CONTENT */}

      {/* 2A: CUSTOM JEWELLERY DESIGN SPECIFIC SECTION */}
      {isCustomDesign && (
        <section className="w-full py-6 bg-[#FAF4E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left (6 cols): Copy & 4 checks */}
            <div className="lg:col-span-6 space-y-4 text-left">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A101B]">
                {data.introHeading}
              </h2>

              <p className="text-sm sm:text-base text-[#65564E] leading-relaxed">
                {data.introDescription[0]}
              </p>

              <div className="space-y-2 pt-1">
                {data.features.map((feat: string) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#241B19]">
                    <CheckCircle2 className="w-4 h-4 text-[#C18A32] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>

              <div className="pt-2">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#650D1B] hover:bg-[#4A101B] text-[#FFF8ED] text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-all active:scale-95 group"
                >
                  <Pencil className="w-4 h-4 text-[#D8A84E]" />
                  <span>{data.ctaButtonText}</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </div>

            {/* Right (6 cols): Framed Velvet Necklace Image */}
            <div className="lg:col-span-6 flex justify-center">
              <div className="relative w-full max-w-md aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#C18A32] shadow-xl p-1 bg-[#4A101B]">
                <div className="relative w-full h-full rounded-xl overflow-hidden">
                  <Image
                    src={data.featureImage}
                    alt="Custom Necklace on Velvet Bust"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 2B: JEWELLERY REPAIR SPECIFIC SECTION (OFFERINGS + BEFORE/AFTER SLIDER) */}
      {isRepair && (
        <section className="w-full py-6 bg-[#FAF4E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left (6 cols): 6 circular repair offerings */}
            <div className="lg:col-span-6 space-y-5 text-left">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A101B]">
                  {data.introHeading}
                </h2>
                <p className="text-xs sm:text-sm text-[#65564E] mt-1.5">
                  {data.introDescription[0]}
                </p>
              </div>

              {/* 3x2 Grid of Circular Icon Cards */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {data.repairOfferings.map((item: any) => (
                  <div
                    key={item.title}
                    className="bg-[#FFF9F0] p-3 rounded-xl border border-[#D8A84E]/40 shadow-xs text-center space-y-1.5 flex flex-col items-center"
                  >
                    <div className="w-10 h-10 rounded-full bg-[#FAF4E8] border border-[#C18A32] flex items-center justify-center text-[#C18A32]">
                      {getRepairOfferingIcon(item.title)}
                    </div>
                    <span className="font-serif text-xs font-bold text-[#4A101B] leading-tight block">
                      {item.title}
                    </span>
                  </div>
                ))}
              </div>

              <div>
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#650D1B] hover:bg-[#4A101B] text-[#FFF8ED] text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-all active:scale-95"
                >
                  <span>{data.ctaButtonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right (6 cols): Interactive Before / After Slider */}
            <div className="lg:col-span-6 flex justify-center">
              <BeforeAfterSlider
                beforeImage={data.beforeAfter.beforeImage}
                afterImage={data.beforeAfter.afterImage}
                subtitle={data.beforeAfter.subtitle}
              />
            </div>
          </div>
        </section>
      )}

      {/* 2C: JEWELLERY CUSTOMIZATION SPECIFIC SECTION (4 PILLARS) */}
      {isCustomization && (
        <section className="w-full py-6 bg-[#FAF4E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
                <span className="w-5 h-[1px] bg-[#C18A32]" />
                <span>WHY CHOOSE OUR CUSTOMIZATION SERVICE?</span>
                <span className="w-5 h-[1px] bg-[#C18A32]" />
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B] mt-1">
                {data.whyChooseCustomization.title}
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 text-center">
              {data.whyChooseCustomization.pillars.map((pillar: any, idx: number) => {
                const icons = [
                  <Diamond key={1} className="w-5 h-5 text-[#C18A32]" />,
                  <TempleShrineIcon key={2} className="w-6 h-6 text-[#C18A32]" />,
                  <ScallopedQualityBadgeIcon key={3} className="w-6 h-6 text-[#C18A32]" />,
                  <InfinityIcon key={4} className="w-5 h-5 text-[#C18A32]" />,
                ];

                return (
                  <div
                    key={pillar.title}
                    className="bg-[#FFF9F0] p-5 rounded-2xl border border-[#D8A84E]/40 shadow-xs flex flex-col items-center space-y-2"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#FAF4E8] border-2 border-dashed border-[#C18A32] flex items-center justify-center">
                      {icons[idx]}
                    </div>
                    <h3 className="font-serif text-base font-bold text-[#4A101B]">
                      {pillar.title}
                    </h3>
                    <p className="text-xs text-[#65564E] leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 2D: TRADITIONAL MAKING SPECIFIC SECTION */}
      {isMaking && (
        <section className="w-full py-6 bg-[#FAF4E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-left">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B]">
                {data.introHeading}
              </h2>
              <p className="text-sm text-[#65564E] leading-relaxed">
                {data.introDescription[0]}
              </p>
              <div className="space-y-2 pt-1">
                {data.features.map((feat: string) => (
                  <div key={feat} className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold text-[#241B19]">
                    <CheckCircle2 className="w-4 h-4 text-[#C18A32] flex-shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
              <div className="pt-2">
                <button
                  onClick={() => setEnquiryOpen(true)}
                  className="inline-flex items-center gap-2 bg-[#650D1B] hover:bg-[#4A101B] text-[#FFF8ED] text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-md transition-all"
                >
                  <Hammer className="w-4 h-4 text-[#D8A84E]" />
                  <span>{data.ctaButtonText}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-[#C18A32] shadow-lg">
                <Image
                  src={data.featureImage}
                  alt="Traditional Gold Making"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. STEP-BY-STEP PROCESS SECTION */}
      <section className="w-full py-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 bg-[#FFF9F0] rounded-2xl border border-[#D8A84E]/40 shadow-xs p-6 sm:p-8">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B]">
              {data.processTitle}
            </h2>
            <p className="font-serif text-xs sm:text-sm italic text-[#C18A32] font-semibold mt-1">
              {data.processSubtitle}
            </p>
          </div>

          {/* 5 Process Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 relative text-center">
            {data.processSteps.map((step: any, idx: number) => {
              return (
                <div key={step.title} className="flex flex-col items-center space-y-2 relative group">
                  {/* Step Image or Round Number / Icon Badge */}
                  {step.image ? (
                    <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden border border-[#C18A32] shadow-xs mb-1 bg-black/10">
                      <Image
                        src={step.image}
                        alt={step.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform"
                      />
                      <span className="absolute top-2 left-2 w-5 h-5 rounded-full bg-[#650D1B] text-[#FFF8ED] text-[10px] font-bold flex items-center justify-center">
                        {step.step}
                      </span>
                    </div>
                  ) : isRepair ? (
                    <div className="w-12 h-12 rounded-full bg-[#650D1B] flex items-center justify-center text-[#FFF8ED] shadow-xs">
                      {getRepairProcessIcon(idx)}
                    </div>
                  ) : isCustomDesign ? (
                    <div className="w-12 h-12 rounded-full bg-[#FAF4E8] border border-[#C18A32] flex items-center justify-center text-[#C18A32] shadow-xs">
                      {getCustomDesignProcessIcon(idx)}
                    </div>
                  ) : (
                    <div className="w-12 h-12 rounded-full bg-[#FAF4E8] border border-[#C18A32] flex items-center justify-center text-[#650D1B] shadow-xs">
                      <span className="font-serif text-base font-bold">{step.step}</span>
                    </div>
                  )}

                  {/* Horizontal Arrow between steps on large screens */}
                  {idx < data.processSteps.length - 1 && (
                    <span
                      className={`hidden lg:block absolute -right-2 text-[#C18A32] text-xl font-light pointer-events-none z-10 ${step.image ? "top-1/3 -translate-y-1/2" : "top-3"
                        }`}
                    >
                      →
                    </span>
                  )}

                  <h3 className="font-serif text-sm font-bold text-[#4A101B]">
                    {step.title}
                  </h3>

                  <p className="text-[11px] text-[#65564E] leading-relaxed">
                    {step.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. GALLERY SECTION */}
      {data.galleryImages && data.galleryImages.length > 0 && (
        <section className="w-full py-6 bg-[#FAF4E8]">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-6">
            <div className="text-center">
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B]">
                {data.galleryTitle}
              </h2>
              <p className="font-serif text-xs sm:text-sm italic text-[#C18A32] font-semibold mt-1">
                {data.gallerySubtitle}
              </p>
            </div>

            <div
              className={`grid gap-4 ${data.galleryImages.length === 5
                ? "grid-cols-2 sm:grid-cols-3 lg:grid-cols-5"
                : "grid-cols-2 lg:grid-cols-4"
                }`}
            >
              {data.galleryImages.map((img: any, idx: number) => (
                <div
                  key={img.src}
                  onClick={() => {
                    setLightboxIndex(idx);
                    setLightboxOpen(true);
                  }}
                  className="relative aspect-[4/3] rounded-xl overflow-hidden border border-[#D8A84E]/40 shadow-xs hover:shadow-md cursor-pointer group bg-black/10"
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-2.5">
                    <span className="text-xs font-serif font-bold text-[#FFF8ED]">
                      {img.title}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. WHY CHOOSE SHRI SWAMI JEWELLERS PILLARS (FULL WIDTH MAROON BANNER) */}
      {data.whyChoosePillars && (
        <section className="w-full bg-[#650D1B] text-[#FFF9F0] py-5 border-y border-[#C18A32]/40 shadow-inner">
          <div className="max-w-7xl mx-auto px-4 sm:px-8">
            <div className="text-center mb-6">
              <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF9F0]">
                {data.whyChooseHeading}
              </h3>
              {data.whyChooseSubtitle && (
                <p className="font-serif italic text-xs text-[#F5EBDD]/80 mt-1">
                  {data.whyChooseSubtitle}
                </p>
              )}
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#C18A32]/30 text-center">
              {data.whyChoosePillars.map((p: any) => (
                <div key={p.title} className="flex flex-col items-center pt-3 sm:pt-0 px-2 space-y-1.5">
                  <div className="w-10 h-10 rounded-full bg-[#4A101B] border border-[#D8A84E] flex items-center justify-center">
                    {getWhyChooseIcon(p.title, p.icon)}
                  </div>
                  <div>
                    <h4 className="font-serif text-sm font-bold text-[#FFF9F0]">{p.title}</h4>
                    {p.description && (
                      <p className="text-[11px] text-[#F5EBDD]/80 font-normal mt-0.5 leading-relaxed">
                        {p.description}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 6. SERVICE FAQS ACCORDION */}
      {data.faqs && data.faqs.length > 0 && (
        <section className="w-full py-6 bg-[#FAF4E8]">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-4">
            <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B] text-center mb-4">
              Frequently Asked Questions
            </h3>

            <div className="space-y-3">
              {data.faqs.map((faq: any, idx: number) => {
                const isOpen = activeFaq === idx;
                return (
                  <div
                    key={faq.question}
                    className="bg-[#FFF9F0] rounded-xl border border-[#D8A84E]/40 shadow-xs overflow-hidden"
                  >
                    <button
                      onClick={() => setActiveFaq(isOpen ? null : idx)}
                      className="w-full flex items-center justify-between p-4 text-left font-serif font-bold text-[#4A101B] text-sm sm:text-base hover:text-[#650D1B]"
                    >
                      <span>{faq.question}</span>
                      <ChevronDown
                        className={`w-4 h-4 text-[#C18A32] transition-transform ${isOpen ? "rotate-180" : ""
                          }`}
                      />
                    </button>
                    {isOpen && (
                      <div className="px-4 pb-4 text-xs text-[#65564E] leading-relaxed border-t border-[#E7D6C1] pt-3">
                        {faq.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </section>
      )}

      {/* 7. BOTTOM CTA BANNER (FULL WIDTH MAROON BANNER WITH BACKGROUND) */}
      <section className="relative w-full overflow-hidden bg-[#650D1B] text-[#FFF9F0] py-5 sm:py-6 border-y border-[#C18A32]/40 shadow-md">
        {data.bottomCta?.bgBanner && (
          <div className="absolute inset-0 w-full h-full">
            <Image
              src={data.bottomCta.bgBanner}
              alt={data.bottomCta.title}
              fill
              className="object-cover object-center"
            />
            {/* Subtle overlay for text clarity on mobile */}
            <div className="absolute inset-0 bg-[#650D1B]/30 sm:bg-transparent" />
          </div>
        )}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left space-y-1">
            <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF9F0] tracking-wide">
              {data.bottomCta.title}
            </h3>
            <p className="text-xs sm:text-[14px] text-[#F5EBDD]/90 italic font-light">
              {data.bottomCta.subtitle}
            </p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-1.5 flex-shrink-0">
            <a
              href={`https://wa.me/919876543210?text=${encodeURIComponent(
                data.bottomCta.whatsappMessage
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#FFF9F0] hover:bg-[#F5EBDD] text-[#4A101B] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md border border-[#D8A84E]/40 transition-all flex-shrink-0"
            >
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
              <span>{data.bottomCta.buttonText} →</span>
            </a>

            {data.bottomCta.subtext ? (
              <button
                onClick={() => setEnquiryOpen(true)}
                className="text-[11px] text-[#F5EBDD]/90 hover:underline tracking-tight"
              >
                {data.bottomCta.subtext}
              </button>
            ) : null}
          </div>
        </div>
      </section>

      {/* Global Interactive Modals */}
      <EnquiryModal
        isOpen={enquiryOpen}
        onClose={() => setEnquiryOpen(false)}
        defaultService={data.title}
      />

      <GalleryLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={galleryImagesForLightbox}
        currentIndex={lightboxIndex}
        onNext={() =>
          setLightboxIndex((prev) => (prev + 1) % galleryImagesForLightbox.length)
        }
        onPrev={() =>
          setLightboxIndex(
            (prev) => (prev - 1 + galleryImagesForLightbox.length) % galleryImagesForLightbox.length
          )
        }
      />
    </div>
  );
}
