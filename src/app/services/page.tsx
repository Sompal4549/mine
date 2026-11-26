import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Diamond,
  Sliders,
  Crown,
  Home as HomeIcon,
  Clock,
  MapPin,
  Calendar,
  CheckCircle,
  Users,
  ShieldCheck,
  MessageSquare,
  PenTool,
} from "lucide-react";
import { LaurelWreathIcon, AnvilStakeIcon, CrossedToolsIcon } from "@/components/common/CustomIcons";
import servicesData from "@/data/services.json";
import { OrnamentalDivider } from "@/components/common/Ornaments";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Complete Jewellery Solutions",
  description:
    "Explore our complete jewellery services: custom design, repair & restoration, gold customization, traditional making and urgent doorstep repair across Delhi, Chhapra & Siwan.",
  path: "/services",
  image: "/images/og/og-services.jpg",
  imageAlt: "Shri Swami Jewellers jewellery services - design, repair and making",
  keywords: [
    "jewellery services Delhi",
    "custom jewellery design",
    "jewellery repair restoration",
    "doorstep jewellery repair",
    "gold jewellery making",
  ],
});

export default function ServicesPage() {
  return (
    <div className="w-full text-[#241B19] bg-[#FAF4E8]">
      {/* 1. HERO SECTION (FULL WIDTH BANNER) */}
      <section className="relative w-full min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] bg-[#FAF4E8] border-b border-[#E7D6C1] overflow-hidden flex items-center">
        {/* Full-width banner background image matching screenshot exact */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={servicesData.hero.necklaceImage || "/images/banners/hero-necklace.webp"}
            alt="Services Craftsmanship Banner"
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
              <span>{servicesData.hero.sectionSubtitle}</span>
              <span className="w-5 h-[1px] bg-[#C18A32]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A101B] leading-tight">
              {servicesData.hero.title}
            </h1>

            <p className="text-sm sm:text-[15px] text-black leading-relaxed max-w-md">
              {servicesData.hero.description}
            </p>

            <OrnamentalDivider className="justify-start my-2" />
          </div>
        </div>
      </section>

      {/* 2. OUR SERVICES (4 ARCHED CARDS) */}
      <section className="w-full py-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {servicesData.mainServices.map((service) => {
              const icons: Record<string, React.ReactNode> = {
                "custom-jewellery-design": <Diamond className="w-4 h-4 text-[#650D1B]" />,
                "jewellery-repair": <CrossedToolsIcon className="w-4 h-4 text-[#650D1B]" />,
                "jewellery-customization": <Sliders className="w-4 h-4 text-[#650D1B]" />,
                "jewellery-making": <Crown className="w-4 h-4 text-[#650D1B]" />,
              };

              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-[#FFF9F0] rounded-2xl border border-[#D8A84E]/40 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col text-left"
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="w-9 h-9 rounded-full bg-[#FAF4E8] border border-[#D8A84E] flex items-center justify-center -mt-8 mb-2 shadow-sm relative z-10">
                        {icons[service.slug] || <Diamond className="w-4 h-4 text-[#650D1B]" />}
                      </div>
                      <h3 className="font-serif text-base font-bold text-[#4A101B] group-hover:text-[#650D1B] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-[#65564E] leading-relaxed mt-1">
                        {service.description}
                      </p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. TWO FEATURE CARDS */}
      <section className="w-full py-3 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Banner 1: Traditional Design */}
            <div className="relative bg-[#650D1B] text-[#FFF9F0] rounded-2xl border border-[#D8A84E] p-5 shadow-sm overflow-hidden flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex-1 space-y-2 text-left">
                <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#FFF9F0]">
                  Can't Find Your Traditional Design?
                </h3>
                <div className="inline-block bg-[#E6BE75] text-[#4A101B] text-xs font-bold px-3 py-1 rounded-full shadow-xs">
                  We'll Create It for You.
                </div>

                <ul className="space-y-1 text-xs text-[#F5EBDD]/90 pt-1">
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#D8A84E] flex-shrink-0" />
                    <span>Rare &amp; regional designs</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#D8A84E] flex-shrink-0" />
                    <span>Old family jewellery recreation</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#D8A84E] flex-shrink-0" />
                    <span>Traditional &amp; cultural patterns</span>
                  </li>
                  <li className="flex items-center gap-1.5">
                    <CheckCircle className="w-3.5 h-3.5 text-[#D8A84E] flex-shrink-0" />
                    <span>Designs from your photos or sketches</span>
                  </li>
                </ul>
              </div>

              <div className="relative w-28 h-28 flex-shrink-0 bg-[#FFF9F0] rounded-xl p-2 border border-[#C18A32]">
                <Image
                  src="/images/home/traditional-sketch.jpg"
                  alt="Jewellery Design Sketch"
                  fill
                  className="object-contain p-1"
                />
              </div>
            </div>

            {/* Banner 2: Urgent Repair */}
            <div className="relative bg-[#FFF9F0] rounded-2xl border border-[#D8A84E] p-5 shadow-sm flex flex-col sm:flex-row items-center gap-4">
              <div className="absolute top-3 left-3 bg-red-600 text-white text-[9px] font-bold px-2 py-0.5 rounded tracking-wider uppercase">
                SPECIAL SERVICE
              </div>

              <div className="flex-1 space-y-2 pt-4 sm:pt-0 text-left">
                <div className="flex items-center gap-1.5">
                  <HomeIcon className="w-4 h-4 text-[#650D1B]" />
                  <h3 className="font-serif text-lg font-bold text-[#4A101B]">
                    Urgent Jewellery Repair at Your Home
                  </h3>
                </div>

                <p className="text-xs text-[#65564E] leading-relaxed">
                  Jewellery broken at the last moment? Going to a wedding, party or special event? We can come to your place and fix your jewellery quickly and reliably.
                </p>

                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-[#F5EBDD] text-[#650D1B] px-2.5 py-0.5 rounded-full border border-[#C18A32]/40">
                    <Clock className="w-2.5 h-2.5 text-[#C18A32]" />
                    <span>Quick Service</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-[#F5EBDD] text-[#650D1B] px-2.5 py-0.5 rounded-full border border-[#C18A32]/40">
                    <MapPin className="w-2.5 h-2.5 text-[#C18A32]" />
                    <span>At Your Home</span>
                  </span>
                  <span className="inline-flex items-center gap-1 text-[10px] font-semibold bg-[#F5EBDD] text-[#650D1B] px-2.5 py-0.5 rounded-full border border-[#C18A32]/40">
                    <Calendar className="w-2.5 h-2.5 text-[#C18A32]" />
                    <span>Same-Day Repair*</span>
                  </span>
                </div>
              </div>

              <div className="relative w-28 h-28 flex-shrink-0 rounded-xl overflow-hidden border border-[#C18A32]">
                <Image
                  src="/images/home/urgent-repair.jpg"
                  alt="Urgent Repair Hands"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. THE SHRI SWAMI JEWELLERS ADVANTAGE */}
      <section className="w-full py-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="text-center space-y-1">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
              <span className="w-5 h-[1px] bg-[#C18A32]" />
              <span>WHY CHOOSE OUR SERVICES</span>
              <span className="w-5 h-[1px] bg-[#C18A32]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B]">
              The Shri Swami Jewellers Advantage
            </h2>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 text-center">
            <div className="p-4 bg-[#FFF9F0] rounded-xl border border-[#D8A84E]/40 flex flex-col items-center space-y-1.5 shadow-xs">
              <LaurelWreathIcon className="w-7 h-7 text-[#C18A32]" text="60" subtext="Years" />
              <h4 className="font-serif text-sm font-bold text-[#4A101B]">60 Years of Trust</h4>
              <p className="text-[11px] text-[#65564E]">A legacy of craftsmanship since 1966</p>
            </div>
            <div className="p-4 bg-[#FFF9F0] rounded-xl border border-[#D8A84E]/40 flex flex-col items-center space-y-1.5 shadow-xs">
              <Diamond className="w-5 h-5 text-[#C18A32]" />
              <h4 className="font-serif text-sm font-bold text-[#4A101B]">Traditional Expertise</h4>
              <p className="text-[11px] text-[#65564E]">Expertise in regional, cultural and rare designs</p>
            </div>
            <div className="p-4 bg-[#FFF9F0] rounded-xl border border-[#D8A84E]/40 flex flex-col items-center space-y-1.5 shadow-xs">
              <CrossedToolsIcon className="w-5 h-5 text-[#C18A32]" />
              <h4 className="font-serif text-sm font-bold text-[#4A101B]">Skilled Craftsmanship</h4>
              <p className="text-[11px] text-[#65564E]">Experienced artisans with a keen eye for detail</p>
            </div>
            <div className="p-4 bg-[#FFF9F0] rounded-xl border border-[#D8A84E]/40 flex flex-col items-center space-y-1.5 shadow-xs">
              <Users className="w-5 h-5 text-[#C18A32]" />
              <h4 className="font-serif text-sm font-bold text-[#4A101B]">Personalized Service</h4>
              <p className="text-[11px] text-[#65564E]">Designs and solutions as per your needs and budget</p>
            </div>
            <div className="p-4 bg-[#FFF9F0] rounded-xl border border-[#D8A84E]/40 flex flex-col items-center space-y-1.5 shadow-xs">
              <ShieldCheck className="w-5 h-5 text-[#C18A32]" />
              <h4 className="font-serif text-sm font-bold text-[#4A101B]">Trust &amp; Transparency</h4>
              <p className="text-[11px] text-[#65564E]">Honest guidance, quality work and lasting relationships</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. OUR PROCESS (FULL WIDTH BANNER WITH BACKGROUND) */}
      <section className="relative w-full overflow-hidden bg-[#5a0c18] text-[#FFF9F0] py-6 sm:py-8 border-y border-[#C18A32]/40 shadow-inner">
        {/* Full-width banner background image: bangle on left, dark maroon across */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={servicesData.process.bgBanner || "/images/banners/banner-process.webp"}
            alt="Our Process Background"
            fill
            priority
            className="object-cover object-left md:object-center"
          />
          {/* Subtle gradient overlay to ensure perfect text contrast */}
          <div className="absolute inset-0 bg-[#5a0c18]/30" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-8">
          <div className="text-center space-y-1 mb-8">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#D8A84E]">
              <span className="w-5 h-[1px] bg-[#D8A84E]" />
              <span>OUR PROCESS</span>
              <span className="w-5 h-[1px] bg-[#D8A84E]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#FFF9F0]">
              From Your Idea to a Finished Creation
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Left 4 cols transparent allowing the bangle on background to show */}
            <div className="lg:col-span-4 hidden lg:block" />

            <div className="lg:col-span-8">
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 text-center">
                <div className="relative flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#FFF9F0] border-2 border-[#D8A84E] flex items-center justify-center text-[#4A101B] shadow-md">
                    <MessageSquare className="w-5 h-5 text-[#650D1B]" />
                  </div>
                  <span className="hidden lg:block absolute -right-2 top-3 text-[#D8A84E] text-xl font-light pointer-events-none">
                    →
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#FFF9F0]">Consultation</h4>
                  <p className="text-[11px] text-[#F5EBDD]/85">Share your idea, reference or requirement.</p>
                </div>

                <div className="relative flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#FFF9F0] border-2 border-[#D8A84E] flex items-center justify-center text-[#4A101B] shadow-md">
                    <PenTool className="w-5 h-5 text-[#650D1B]" />
                  </div>
                  <span className="hidden lg:block absolute -right-2 top-3 text-[#D8A84E] text-xl font-light pointer-events-none">
                    →
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#FFF9F0]">Design &amp; Planning</h4>
                  <p className="text-[11px] text-[#F5EBDD]/85">We create a design and discuss the details with you.</p>
                </div>

                <div className="relative flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#FFF9F0] border-2 border-[#D8A84E] flex items-center justify-center text-[#4A101B] shadow-md">
                    <AnvilStakeIcon className="w-5 h-5 text-[#650D1B]" />
                  </div>
                  <span className="hidden lg:block absolute -right-2 top-3 text-[#D8A84E] text-xl font-light pointer-events-none">
                    →
                  </span>
                  <h4 className="font-serif text-sm font-bold text-[#FFF9F0]">Crafting</h4>
                  <p className="text-[11px] text-[#F5EBDD]/85">Our skilled artisans bring the design to life.</p>
                </div>

                <div className="relative flex flex-col items-center space-y-2">
                  <div className="w-12 h-12 rounded-full bg-[#FFF9F0] border-2 border-[#D8A84E] flex items-center justify-center text-[#4A101B] shadow-md">
                    <Diamond className="w-5 h-5 text-[#650D1B]" />
                  </div>
                  <h4 className="font-serif text-sm font-bold text-[#FFF9F0]">Final Delivery</h4>
                  <p className="text-[11px] text-[#F5EBDD]/85">Receive your beautifully crafted jewellery.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
