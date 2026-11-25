import React from "react";
import { Phone, MapPin, Clock } from "lucide-react";
import siteData from "@/data/site.json";

export default function AnnouncementBar() {
  return (
    <div className="w-full bg-[#520914] text-white text-[11px] sm:text-[12px] py-1.5 px-4 sm:px-8 select-none border-b border-[#C18A32]/30 shadow-xs relative z-30">
      <div className="max-w-7xl mx-auto flex items-center justify-between gap-4">
        {/* LEFT: Serving Locations & Legacy */}
        <div className="flex items-center gap-2 text-[#FFF8ED]/95 text-[11px] sm:text-xs">
          <MapPin className="w-3.5 h-3.5 text-[#D8A84E] flex-shrink-0" />
          <span>Serving Delhi NCR • Chhapra • Siwan</span>
          <span className="text-[#D8A84E]/50 mx-1">|</span>
          <span className="text-[#D8A84E] font-medium hidden sm:inline">Legacy Since 1966</span>
        </div>

        {/* RIGHT: Working Hours & Clean Direct Contact */}
        <div className="flex items-center gap-4 text-[11px] sm:text-xs">
          <div className="hidden md:flex items-center gap-1.5 text-[#F5EBDD]/90">
            <Clock className="w-3.5 h-3.5 text-[#D8A84E]" />
            <span>Mon – Sat: 10:30 AM – 8:30 PM</span>
          </div>
          <a
            href={`tel:${siteData.phone}`}
            className="flex items-center gap-1.5 text-[#F5EBDD] hover:text-[#D8A84E] font-medium transition-colors"
          >
            <Phone className="w-3 h-3 text-[#D8A84E]" />
            <span>{siteData.phone}</span>
          </a>
        </div>
      </div>
    </div>
  );
}
