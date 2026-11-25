import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  Clock,
  MapPin,
  MessageCircle,
  Calendar,
  Sparkles,
  Users,
  Hammer,
  Diamond,
  CheckCircle,
  Home as HomeIcon,
  Crown,
  Sliders,
  Handshake,
} from "lucide-react";
import { LaurelWreathIcon, CrossedToolsIcon } from "@/components/common/CustomIcons";
import homeData from "@/data/home.json";

export default function HomePage() {
  return (
    <div className="w-full text-[#241B19] bg-[#FAF4E8]">
      {/* 1. HERO SECTION (FULL WIDTH BANNER BACKGROUND) */}
      <section className="relative w-full min-h-[260px] sm:min-h-[300px] lg:min-h-[340px] bg-[#FAF4E8] border-b border-[#E7D6C1] overflow-hidden flex items-center">
        {/* Full-width banner background image matching screenshot exact */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={homeData.hero.image}
            alt={homeData.hero.imageAlt}
            fill
            priority
            className="object-cover object-right"
          />
          {/* Left subtle gradient for small screens & text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF4E8] via-[#FAF4E8]/95 sm:via-[#FAF4E8]/60 lg:via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8 lg:py-10">
          <div className="max-w-xl space-y-4 text-left">
            {/* 60 Years of Trust Gold Laurel Wreath Badge */}
            <div className="inline-flex items-center gap-2">
              <div className="relative flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18">
                <svg className="w-full h-full text-[#C18A32]" viewBox="0 0 100 100" fill="none">
                  {/* Left laurel branch */}
                  <path d="M 32,80 C 18,65 18,35 32,20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 30,22 C 22,18 20,23 26,26" fill="currentColor" />
                  <path d="M 26,33 C 18,31 17,38 23,39" fill="currentColor" />
                  <path d="M 23,46 C 15,45 15,52 21,53" fill="currentColor" />
                  <path d="M 24,60 C 17,61 19,68 25,67" fill="currentColor" />
                  <path d="M 29,72 C 23,75 26,82 31,79" fill="currentColor" />
                  {/* Right laurel branch */}
                  <path d="M 68,80 C 82,65 82,35 68,20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
                  <path d="M 70,22 C 78,18 80,23 74,26" fill="currentColor" />
                  <path d="M 74,33 C 82,31 83,38 77,39" fill="currentColor" />
                  <path d="M 77,46 C 85,45 85,52 79,53" fill="currentColor" />
                  <path d="M 76,60 C 83,61 81,68 75,67" fill="currentColor" />
                  <path d="M 71,72 C 77,75 74,82 69,79" fill="currentColor" />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                  <span className="text-xl sm:text-2xl font-black text-[#650D1B] leading-none">60</span>
                  <span className="text-[9px] sm:text-[10px] font-bold text-[#650D1B] leading-none tracking-tight">Years</span>
                  <span className="text-[7.5px] sm:text-[8px] font-medium text-[#65564E] leading-none tracking-tight">of Trust</span>
                </div>
              </div>
            </div>

            {/* Headline */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-[44px] font-bold text-[#4A101B] leading-[1.15] tracking-tight">
              {homeData.hero.title}
            </h1>

            {/* Subheading with yellow highlight phrase */}
            <p className="text-sm sm:text-[15px] text-black leading-relaxed max-w-md font-normal">
              From timeless traditional patterns to unique custom creations — we{" "}
              <span className="bg-[#F8D261] text-[#1A1311] font-semibold px-1 py-0.5 rounded-xs">
                craft designs that many big brands cannot
              </span>
              , with the same personal attention and craftsmanship as our grandfather did.
            </p>

            {/* Two Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <Link
                href="/gallery"
                className="inline-flex items-center gap-2 bg-[#650D1B] hover:bg-[#4A101B] text-[#FFF9F0] text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm hover:shadow transition-all group"
              >
                <span>Explore Our Collection</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>

              <Link
                href="/services/custom-jewellery-design"
                className="inline-flex items-center gap-2 bg-[#FFF9F0] hover:bg-[#F5EBDD] text-[#4A101B] border border-[#4A101B]/80 text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full transition-all"
              >
                <span>Request Custom Design</span>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. QUICK SERVICES TICKER STRIP (FULL WIDTH) */}
      <section className="w-full bg-[#FFF8ED] border-b border-[#E7D6C1] py-3 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E7D6C1]/70">
            <Link
              href="/services/custom-jewellery-design"
              className="flex items-center justify-center gap-2 py-1 px-2 text-center hover:text-[#650D1B] transition-colors"
            >
              <Diamond className="w-4 h-4 text-[#C18A32] flex-shrink-0" />
              <span className="text-xs font-semibold text-[#241B19]">Custom Design</span>
            </Link>
            <Link
              href="/services/jewellery-repair"
              className="flex items-center justify-center gap-2 py-1 px-2 text-center hover:text-[#650D1B] transition-colors"
            >
              <CrossedToolsIcon className="w-4 h-4 text-[#C18A32] flex-shrink-0" />
              <span className="text-xs font-semibold text-[#241B19]">Jewellery Repair</span>
            </Link>
            <Link
              href="/services/jewellery-customization"
              className="flex items-center justify-center gap-2 py-1 px-2 text-center hover:text-[#650D1B] transition-colors"
            >
              <Sliders className="w-4 h-4 text-[#C18A32] flex-shrink-0" />
              <span className="text-xs font-semibold text-[#241B19]">Customization</span>
            </Link>
            <Link
              href="/services/custom-jewellery-design"
              className="flex items-center justify-center gap-2 py-1 px-2 text-center hover:text-[#650D1B] transition-colors"
            >
              <Crown className="w-4 h-4 text-[#C18A32] flex-shrink-0" />
              <span className="text-xs font-semibold text-[#241B19]">Traditional &amp; Rare Designs</span>
            </Link>
            <Link
              href="/services/jewellery-making"
              className="flex items-center justify-center gap-2 py-1 px-2 text-center hover:text-[#650D1B] transition-colors"
            >
              <Hammer className="w-4 h-4 text-[#C18A32] flex-shrink-0" />
              <span className="text-xs font-semibold text-[#241B19]">Jewellery Making</span>
            </Link>
            <Link
              href="/services/jewellery-repair"
              className="flex items-center justify-center gap-2 py-1 px-2 text-center hover:text-[#650D1B] transition-colors"
            >
              <HomeIcon className="w-4 h-4 text-[#C18A32] flex-shrink-0" />
              <span className="text-xs font-semibold text-[#241B19]">Home Repair Service</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 3. OUR HERITAGE SECTION */}
      <section className="w-full py-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-0">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center bg-[#FFF9F0] rounded-2xl border border-[#D8A84E]/40 py-4 sm:py-6 px-0 shadow-xs">
            {/* Left Vintage Grandfather Photo (4 cols) */}
            <div className="lg:col-span-4 flex justify-center">
              <div className="relative w-full max-w-[280px] sm:max-w-[320px] aspect-[4/3]">
                <Image
                  src={homeData.heritage.grandfatherImage}
                  alt={homeData.heritage.grandfatherAlt}
                  fill
                  className="object-contain"
                  unoptimized
                  priority
                />
              </div>
            </div>

            {/* Center Story (5 cols) */}
            <div className="lg:col-span-5 space-y-3 text-left">
              <div className="flex items-center gap-2 text-xs font-semibold text-[#650D1B] uppercase tracking-wider">
                <span className="h-px w-6 bg-[#650D1B]" />
                <span>Our Heritage</span>
                <span className="h-px w-6 bg-[#650D1B]" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B] leading-tight">
                {homeData.heritage.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#65564E] leading-relaxed">
                {homeData.heritage.description}
              </p>

              {/* Established Pill */}
              <div className="pt-1">
                <span className="inline-block bg-[#E6BE75] text-[#4A101B] text-xs font-bold px-4 py-1 rounded-full shadow-xs">
                  {homeData.heritage.badge}
                </span>
              </div>
            </div>

            {/* Right Ancestral Roots Sketch (3 cols) */}
            <div className="lg:col-span-3 flex flex-col items-center justify-center text-center space-y-2 pt-4 lg:pt-0">
              <div className="w-full flex items-center justify-center">
                <Image
                  src="/images/home/village-sketch.webp"
                  alt="Ancestral Village Shitalpur Ekma"
                  width={280}
                  height={190}
                  unoptimized
                  priority
                  className="w-auto h-28 sm:h-36 max-w-full object-contain mx-auto transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="text-[11px] text-[#65564E] space-y-0.5">
                <div className="flex items-center justify-center gap-1 font-semibold text-[#4A101B]">
                  <MapPin className="w-3.5 h-3.5 text-[#650D1B]" />
                  <span>Shitalpur, Ekma</span>
                </div>
                <p>Saran, Bihar</p>
                <p className="text-[#C18A32] font-semibold text-[10px]">Our Ancestral Roots</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. OUR SERVICES (4 ARCHED CARDS) */}
      <section className="w-full py-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4">
          <div className="text-center space-y-1">
            <div className="flex items-center justify-center gap-2 text-xs font-semibold text-[#650D1B] uppercase tracking-wider">
              <span className="h-px w-8 bg-[#650D1B]" />
              <span>Our Services</span>
              <span className="h-px w-8 bg-[#650D1B]" />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A101B]">
              Complete Jewellery Solutions
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {/* Service 1: Custom Jewellery Design */}
            <Link
              href="/services/custom-jewellery-design"
              className="group bg-[#FFF9F0] rounded-2xl border border-[#D8A84E]/40 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col text-left"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                <Image
                  src="/images/services/service-custom-design.jpg"
                  alt="Custom Jewellery Design"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FAF4E8] border border-[#D8A84E] flex items-center justify-center -mt-8 mb-2 shadow-sm relative z-10">
                    <Diamond className="w-4 h-4 text-[#650D1B]" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#4A101B] group-hover:text-[#650D1B] transition-colors">
                    Custom Jewellery Design
                  </h3>
                  <p className="text-xs text-[#65564E] leading-relaxed mt-1">
                    Bring your ideas to life with personalized jewellery.
                  </p>
                </div>
              </div>
            </Link>

            {/* Service 2: Jewellery Repair */}
            <Link
              href="/services/jewellery-repair"
              className="group bg-[#FFF9F0] rounded-2xl border border-[#D8A84E]/40 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col text-left"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                <Image
                  src="/images/services/service-repair.jpg"
                  alt="Jewellery Repair"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FAF4E8] border border-[#D8A84E] flex items-center justify-center -mt-8 mb-2 shadow-sm relative z-10">
                    <CrossedToolsIcon className="w-4 h-4 text-[#650D1B]" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#4A101B] group-hover:text-[#650D1B] transition-colors">
                    Jewellery Repair
                  </h3>
                  <p className="text-xs text-[#65564E] leading-relaxed mt-1">
                    Fix broken chains, clasps and ornaments with care.
                  </p>
                </div>
              </div>
            </Link>

            {/* Service 3: Jewellery Customization */}
            <Link
              href="/services/jewellery-customization"
              className="group bg-[#FFF9F0] rounded-2xl border border-[#D8A84E]/40 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col text-left"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                <Image
                  src="/images/services/service-customization.jpg"
                  alt="Jewellery Customization"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FAF4E8] border border-[#D8A84E] flex items-center justify-center -mt-8 mb-2 shadow-sm relative z-10">
                    <Sliders className="w-4 h-4 text-[#650D1B]" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#4A101B] group-hover:text-[#650D1B] transition-colors">
                    Jewellery Customization
                  </h3>
                  <p className="text-xs text-[#65564E] leading-relaxed mt-1">
                    Modify, resize or redesign your existing jewellery.
                  </p>
                </div>
              </div>
            </Link>

            {/* Service 4: Traditional Jewellery Making */}
            <Link
              href="/services/jewellery-making"
              className="group bg-[#FFF9F0] rounded-2xl border border-[#D8A84E]/40 overflow-hidden shadow-xs hover:shadow-md transition-all duration-300 flex flex-col text-left"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-t-2xl">
                <Image
                  src="/images/services/service-making.jpg"
                  alt="Traditional Jewellery Making"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-4 space-y-2 flex-1 flex flex-col justify-between">
                <div>
                  <div className="w-9 h-9 rounded-full bg-[#FAF4E8] border border-[#D8A84E] flex items-center justify-center -mt-8 mb-2 shadow-sm relative z-10">
                    <Crown className="w-4 h-4 text-[#650D1B]" />
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#4A101B] group-hover:text-[#650D1B] transition-colors">
                    Jewellery Making
                  </h3>
                  <p className="text-xs text-[#65564E] leading-relaxed mt-1">
                    Handcrafted jewellery with traditional techniques.
                  </p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* 5. TWO FEATURE CARDS (TRADITIONAL DESIGN + URGENT REPAIR) */}
      <section className="w-full py-3 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
            {/* Banner 1: Traditional Design Recreation */}
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
                NEW SERVICE
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

      {/* 6. WHY CHOOSE SHRI SWAMI JEWELLERS (FULL WIDTH MAROON BANNER) */}
      <section className="w-full bg-[#650D1B] text-[#FFF9F0] py-5 border-y border-[#C18A32]/40 shadow-inner">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
            {/* Title Column (3 cols) */}
            <div className="lg:col-span-3 text-center lg:text-left border-b lg:border-b-0 lg:border-r border-[#C18A32]/40 pb-3 lg:pb-0 lg:pr-6 space-y-1">
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FFF9F0] leading-snug">
                Why Choose<br />Shri Swami Jewellers?
              </h3>
              <div className="flex items-center justify-center lg:justify-start gap-1 py-1">
                <span className="w-6 h-px bg-[#D8A84E]" />
                <Sparkles className="w-3 h-3 text-[#D8A84E]" />
                <span className="w-6 h-px bg-[#D8A84E]" />
              </div>
              <p className="text-[11px] text-[#F5EBDD]/80 italic">
                Because your jewellery deserves the best care.
              </p>
            </div>

            {/* 6 Value Pillars (9 cols) */}
            <div className="lg:col-span-9 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 text-center divide-x-0 sm:divide-x divide-[#C18A32]/25">
              <div className="flex flex-col items-center space-y-1">
                <LaurelWreathIcon className="w-7 h-7 text-[#D8A84E]" text="60" subtext="Years" />
                <p className="text-[11px] font-bold text-[#FFF9F0]">60 Years</p>
                <p className="text-[10px] text-[#F5EBDD]/80">of Family Heritage</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Diamond className="w-5 h-5 text-[#D8A84E]" />
                <p className="text-[11px] font-bold text-[#FFF9F0]">Traditional &amp;</p>
                <p className="text-[10px] text-[#F5EBDD]/80">Rare Designs</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <CrossedToolsIcon className="w-5 h-5 text-[#D8A84E]" />
                <p className="text-[11px] font-bold text-[#FFF9F0]">Skilled</p>
                <p className="text-[10px] text-[#F5EBDD]/80">Craftsmanship</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Users className="w-5 h-5 text-[#D8A84E]" />
                <p className="text-[11px] font-bold text-[#FFF9F0]">Personalized</p>
                <p className="text-[10px] text-[#F5EBDD]/80">Service</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <Handshake className="w-5 h-5 text-[#D8A84E]" />
                <p className="text-[11px] font-bold text-[#FFF9F0]">Trusted by</p>
                <p className="text-[10px] text-[#F5EBDD]/80">Generations</p>
              </div>
              <div className="flex flex-col items-center space-y-1">
                <HomeIcon className="w-5 h-5 text-[#D8A84E]" />
                <p className="text-[11px] font-bold text-[#FFF9F0]">Home Repair</p>
                <p className="text-[10px] text-[#F5EBDD]/80">Service</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 7. OUR PRESENCE (SERVING CUSTOMERS ACROSS THREE REGIONS) */}
      <section className="w-full py-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center bg-[#FFF9F0] rounded-2xl border border-[#D8A84E]/40 p-4 sm:p-6 shadow-xs">
            {/* Left Indian Woman Bride Image (3 cols) */}
            <div className="lg:col-span-3 flex justify-center">
              <div className="relative w-full max-w-[220px] aspect-square rounded-2xl overflow-hidden border border-[#D8A84E]/50 shadow-md">
                <Image
                  src="/images/home/presence-woman.jpg"
                  alt="Bride wearing traditional jewellery"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Center Presence Info (6 cols) */}
            <div className="lg:col-span-6 space-y-3 text-center lg:text-left">
              <div className="flex items-center justify-center lg:justify-start gap-2 text-xs font-semibold text-[#650D1B] uppercase tracking-wider">
                <span className="h-px w-6 bg-[#650D1B]" />
                <span>Our Presence</span>
                <span className="h-px w-6 bg-[#650D1B]" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B]">
                Serving Customers Across Three Regions
              </h2>

              {/* 3 Region Boxes */}
              <div className="grid grid-cols-3 gap-2 pt-1">
                <div className="bg-[#FAF4E8] rounded-xl p-2.5 border border-[#E7D6C1] text-center">
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-[#4A101B]">
                    <MapPin className="w-3.5 h-3.5 text-[#C18A32]" />
                    <span>Delhi</span>
                  </div>
                  <p className="text-[10px] text-[#65564E] mt-0.5">NCR</p>
                </div>

                <div className="bg-[#FAF4E8] rounded-xl p-2.5 border border-[#E7D6C1] text-center">
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-[#4A101B]">
                    <MapPin className="w-3.5 h-3.5 text-[#C18A32]" />
                    <span>Chhapra</span>
                  </div>
                  <p className="text-[10px] text-[#65564E] mt-0.5">Bihar</p>
                </div>

                <div className="bg-[#FAF4E8] rounded-xl p-2.5 border border-[#E7D6C1] text-center">
                  <div className="flex items-center justify-center gap-1 text-xs font-bold text-[#4A101B]">
                    <MapPin className="w-3.5 h-3.5 text-[#C18A32]" />
                    <span>Siwan</span>
                  </div>
                  <p className="text-[10px] text-[#65564E] mt-0.5">Bihar</p>
                </div>
              </div>

              <div className="flex items-center justify-center lg:justify-start gap-1.5 text-xs font-semibold text-[#650D1B] pt-1">
                <HomeIcon className="w-3.5 h-3.5 text-[#C18A32]" />
                <span className="text-[11px] sm:text-xs">
                  Shitalpur, Ekma, Saran – Our Ancestral Roots
                </span>
              </div>
            </div>

            {/* Right India Gate Sketch (3 cols) */}
            <div className="lg:col-span-3 flex justify-center lg:justify-end">
              <div className="relative w-36 aspect-[4/3] opacity-85">
                <Image
                  src="/images/home/delhi-sketch.jpg"
                  alt="Delhi Monument Sketch"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. BOTTOM CTA BANNER (FULL WIDTH MAROON BANNER) */}
      <section className="w-full bg-[#650D1B] text-[#FFF9F0] py-4 border-y border-[#C18A32]/40 shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-center md:text-left">
            <div className="w-10 h-10 rounded-full bg-[#FFF9F0]/10 border border-[#D8A84E] flex items-center justify-center flex-shrink-0">
              <Diamond className="w-5 h-5 text-[#D8A84E]" />
            </div>
            <div>
              <h3 className="font-serif text-lg sm:text-xl font-bold text-[#FFF9F0]">
                Have a Custom Design or Repair Need?
              </h3>
              <p className="text-xs sm:text-[13px] text-[#F5EBDD]/85">
                Let's create, repair or redesign it for you — at our store or at your home.
              </p>
            </div>
          </div>

          <a
            href="https://wa.me/919876543210?text=Hello%20Shri%20Swami%20Jewellers,%20I%20have%20an%20enquiry"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#E6BE75] hover:bg-[#D8A84E] text-[#4A101B] font-bold text-xs sm:text-sm px-6 py-2.5 rounded-full shadow-md transition-all flex-shrink-0"
          >
            <MessageCircle className="w-4 h-4 text-[#4A101B]" />
            <span>Contact on WhatsApp →</span>
          </a>
        </div>
      </section>
    </div>
  );
}
