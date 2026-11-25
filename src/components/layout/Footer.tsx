import React from "react";
import Link from "next/link";
import { Phone, Mail, MapPin, MessageCircle, Clock, ShieldCheck, Award } from "lucide-react";
import { LotusLogo, OrnamentalDivider } from "@/components/common/Ornaments";
import siteData from "@/data/site.json";
import navData from "@/data/navigation.json";

export default function Footer() {
  return (
    <footer className="bg-[#4A101B] text-[#FFF8ED] border-t-2 border-[#C18A32]/40 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#C18A32_1px,transparent_1px)] [background-size:16px_16px]" />

      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 pt-8 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-6">
          {/* Column 1: Brand Info & Heritage (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="bg-[#FFF8ED] p-3 rounded-xl inline-block shadow-sm">
              <LotusLogo />
            </div>
            <p className="text-sm text-[#F5EBDD]/85 leading-relaxed pr-4">
              Established in 1966 by <span className="text-[#D8A84E] font-semibold">Shri Swamy Nath Sah</span> in Shitalpur, Ekma (Saran, Bihar). For 60 years and three generations, we have crafted rare traditional gold designs, exquisite bridal jewellery, and provided trusted repair craftsmanship.
            </p>

            <div className="flex items-center gap-3 pt-2">
              <div className="flex items-center gap-1.5 text-xs text-[#D8A84E] font-semibold bg-[#650D1B] px-3 py-1.5 rounded-full border border-[#C18A32]/40">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D8A84E]" />
                <span>100% BIS Hallmarked</span>
              </div>
              <div className="flex items-center gap-1.5 text-xs text-[#D8A84E] font-semibold bg-[#650D1B] px-3 py-1.5 rounded-full border border-[#C18A32]/40">
                <Award className="w-3.5 h-3.5 text-[#D8A84E]" />
                <span>60 Years Legacy</span>
              </div>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#D8A84E] tracking-wide border-b border-[#C18A32]/30 pb-2">
              Quick Links
            </h4>
            <ul className="space-y-2 text-sm text-[#F5EBDD]/80">
              {navData.footerLinks.quickLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="hover:text-[#D8A84E] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Our Services */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#D8A84E] tracking-wide border-b border-[#C18A32]/30 pb-2">
              Our Services
            </h4>
            <ul className="space-y-2 text-sm text-[#F5EBDD]/80">
              {navData.footerLinks.services.map((service) => (
                <li key={service.label}>
                  <Link
                    href={service.href}
                    className="hover:text-[#D8A84E] hover:translate-x-1 inline-block transition-all duration-200"
                  >
                    {service.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact & Locations */}
          <div className="space-y-3">
            <h4 className="font-serif text-lg font-bold text-[#D8A84E] tracking-wide border-b border-[#C18A32]/30 pb-2">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-[#F5EBDD]/80">
              <a
                href={`tel:${siteData.phone}`}
                className="flex items-start gap-2.5 hover:text-[#D8A84E] transition-colors"
              >
                <Phone className="w-4 h-4 text-[#D8A84E] flex-shrink-0 mt-0.5" />
                <span>{siteData.displayPhone}</span>
              </a>

              <a
                href={siteData.socials.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-start gap-2.5 hover:text-[#D8A84E] transition-colors"
              >
                <MessageCircle className="w-4 h-4 text-[#25D366] flex-shrink-0 mt-0.5" />
                <span>Chat on WhatsApp</span>
              </a>

              <a
                href={`mailto:${siteData.email}`}
                className="flex items-start gap-2.5 hover:text-[#D8A84E] transition-colors"
              >
                <Mail className="w-4 h-4 text-[#D8A84E] flex-shrink-0 mt-0.5" />
                <span>{siteData.email}</span>
              </a>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-[#D8A84E] flex-shrink-0 mt-0.5" />
                <span>{siteData.workingHours}</span>
              </div>

              <div className="pt-2 border-t border-[#C18A32]/20 space-y-1 text-xs">
                <div className="flex items-start gap-2 text-[#D8A84E] font-medium">
                  <MapPin className="w-3.5 h-3.5 flex-shrink-0 mt-0.5" />
                  <span>Delhi NCR • Chhapra • Siwan</span>
                </div>
                <p className="text-[11px] text-[#F5EBDD]/60 pl-5">
                  Roots: Shitalpur, Ekma, Saran, Bihar
                </p>
              </div>
            </div>
          </div>
        </div>

        <OrnamentalDivider className="my-5 text-[#C18A32]/50" />

        {/* Bottom Bar: Copyright & Terms */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#F5EBDD]/70 text-center sm:text-left">
          <p>
            © 1966 – {new Date().getFullYear()} <span className="text-[#D8A84E] font-semibold">Shri Swami Jewellers</span>. All rights reserved. Legacy founded by Shri Swamy Nath Sah.
          </p>
          <div className="flex items-center gap-4 text-[11px]">
            <span>100% Purity Guarantee</span>
            <span>•</span>
            <span>BIS Hallmarking with HUID</span>
            <span>•</span>
            <span>Handcrafted In India</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
