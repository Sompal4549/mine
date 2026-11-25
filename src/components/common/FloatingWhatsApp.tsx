"use client";

import React, { useState, useEffect } from "react";
import { MessageCircle, Phone, ArrowUp } from "lucide-react";
import siteData from "@/data/site.json";

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="2.5" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
    </svg>
  );
}

function YoutubeIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor">
      <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
    </svg>
  );
}

export default function FloatingActions() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* ========================================================= */}
      {/* LEFT FLOATING ACTIONS: WhatsApp & Direct Call Buttons       */}
      {/* ========================================================= */}
      <div className="fixed bottom-6 left-5 sm:left-6 z-50 flex flex-col items-start gap-3 select-none">
        {/* 1. Floating WhatsApp Button */}
        <a
          href={siteData.socials.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with Shri Swami Jewellers on WhatsApp"
          className="group relative flex items-center justify-center w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#2ecc71] text-white shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.7)] animate-pulse-green transform hover:scale-110 active:scale-95 transition-all duration-300"
        >
          {/* Notification Ping Badge */}
          <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-80" />
            <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#D8A84E] border-2 border-white shadow-xs" />
          </span>

          <MessageCircle className="w-7 h-7 text-white fill-current transition-transform duration-300 group-hover:rotate-12" />

          {/* Left Hover Tooltip */}
          <span className="absolute left-16 sm:left-18 bg-[#128C7E] text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 border border-white/25 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
            Chat on WhatsApp
          </span>
        </a>

        {/* 2. Floating Call Button */}
        <a
          href={`tel:${siteData.phone}`}
          aria-label="Call Shri Swami Jewellers"
          className="phone-icon-wiggle group relative flex items-center justify-center w-12 h-12 sm:w-13 sm:h-13 rounded-full bg-gradient-to-tr from-[#B37B24] via-[#F3CE7B] to-[#D8A84E] text-[#4A101B] shadow-[0_8px_25px_rgba(216,168,78,0.45)] hover:shadow-[0_12px_32px_rgba(216,168,78,0.7)] animate-pulse-gold transform hover:scale-110 active:scale-95 transition-all duration-300"
        >
          <Phone className="phone-wiggle-target w-5 h-5 sm:w-6 sm:h-6 text-[#4A101B] fill-[#4A101B] transition-transform duration-300" />

          {/* Left Hover Tooltip */}
          <span className="absolute left-15 sm:left-17 bg-[#4A101B] text-[#FFF8ED] text-xs font-bold py-1.5 px-3 rounded-xl shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 transform -translate-x-2 group-hover:translate-x-0 border border-[#D8A84E]/50 flex items-center gap-1.5">
            <Phone className="w-3 h-3 text-[#D8A84E]" />
            Call: +91 98765 43210
          </span>
        </a>
      </div>

      {/* ========================================================= */}
      {/* RIGHT FLOATING ACTIONS: Social Icons & Scroll-To-Top       */}
      {/* ========================================================= */}
      <div className="fixed bottom-6 right-5 sm:right-6 z-50 flex flex-col items-end gap-2.5 select-none">
        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            aria-label="Scroll to top"
            className="w-10 h-10 rounded-full bg-[#FFF9F0] border border-[#C18A32]/60 text-[#650D1B] shadow-md hover:bg-[#FAF4E8] hover:-translate-y-1 hover:shadow-lg transition-all duration-300 flex items-center justify-center mb-1 group"
          >
            <ArrowUp className="w-5 h-5 transition-transform duration-300 group-hover:-translate-y-0.5" />
          </button>
        )}

        {/* 1. Instagram Floating Button */}
        <a
          href={siteData.socials.instagram}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(220,39,67,0.4)] hover:shadow-[0_10px_28px_rgba(220,39,67,0.7)] transform hover:scale-115 hover:-translate-y-1 hover:rotate-6 active:scale-95 transition-all duration-300"
        >
          <InstagramIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

          {/* Right Tooltip */}
          <span className="absolute right-14 sm:right-15 bg-gradient-to-r from-[#dc2743] to-[#bc1888] text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 border border-white/20">
            Instagram
          </span>
        </a>

        {/* 2. Facebook Floating Button */}
        <a
          href={siteData.socials.facebook}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Facebook"
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#1877F2] to-[#0A54C2] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(24,119,242,0.4)] hover:shadow-[0_10px_28px_rgba(24,119,242,0.7)] transform hover:scale-115 hover:-translate-y-1 hover:-rotate-6 active:scale-95 transition-all duration-300"
        >
          <FacebookIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

          {/* Right Tooltip */}
          <span className="absolute right-14 sm:right-15 bg-[#1877F2] text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 border border-white/20">
            Facebook
          </span>
        </a>

        {/* 3. YouTube Floating Button */}
        <a
          href={siteData.socials.youtube}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="YouTube"
          className="group relative w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-gradient-to-tr from-[#FF0000] to-[#B30000] text-white flex items-center justify-center shadow-[0_6px_20px_rgba(255,0,0,0.4)] hover:shadow-[0_10px_28px_rgba(255,0,0,0.7)] transform hover:scale-115 hover:-translate-y-1 hover:rotate-6 active:scale-95 transition-all duration-300"
        >
          <YoutubeIcon className="w-5 h-5 transition-transform duration-300 group-hover:scale-110" />

          {/* Right Tooltip */}
          <span className="absolute right-14 sm:right-15 bg-[#FF0000] text-white text-xs font-bold py-1.5 px-3 rounded-xl shadow-xl whitespace-nowrap opacity-0 pointer-events-none group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0 border border-white/20">
            YouTube
          </span>
        </a>
      </div>
    </>
  );
}
