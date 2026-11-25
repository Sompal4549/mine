import React from "react";

interface IconProps {
  className?: string;
  size?: number;
}

// Laurel Wreath Badge with text inside (used in Home, About, Services)
export function LaurelWreathIcon({
  className = "w-8 h-8 text-[#C18A32]",
  text = "60 Years",
  subtext = "of Trust",
}: {
  className?: string;
  text?: string;
  subtext?: string;
}) {
  return (
    <div className={`relative flex items-center justify-center flex-shrink-0 ${className}`}>
      <svg className="w-full h-full" viewBox="0 0 100 100" fill="none" stroke="currentColor">
        {/* Left laurel branch */}
        <path d="M 34,78 C 18,65 18,35 34,22" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 32,24 C 24,20 22,25 28,28" fill="currentColor" stroke="none" />
        <path d="M 28,35 C 20,33 19,40 25,41" fill="currentColor" stroke="none" />
        <path d="M 25,48 C 17,47 17,54 23,55" fill="currentColor" stroke="none" />
        <path d="M 26,62 C 19,63 21,70 27,69" fill="currentColor" stroke="none" />
        <path d="M 31,74 C 25,77 28,84 33,81" fill="currentColor" stroke="none" />
        {/* Right laurel branch */}
        <path d="M 66,78 C 82,65 82,35 66,22" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M 68,24 C 76,20 78,25 72,28" fill="currentColor" stroke="none" />
        <path d="M 72,35 C 80,33 81,40 75,41" fill="currentColor" stroke="none" />
        <path d="M 75,48 C 83,47 83,54 77,55" fill="currentColor" stroke="none" />
        <path d="M 74,62 C 81,63 79,70 73,69" fill="currentColor" stroke="none" />
        <path d="M 69,74 C 75,77 72,84 67,81" fill="currentColor" stroke="none" />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-1">
        <span className="text-[9px] font-black leading-none">{text}</span>
        {subtext && <span className="text-[6.5px] font-bold leading-tight mt-0.5">{subtext}</span>}
      </div>
    </div>
  );
}

// Finger Ring with gemstone on top (Ring Resizing)
export function RingIcon({ className = "w-5 h-5 text-[#C18A32]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Gemstone on top */}
      <polygon points="9.5 3 14.5 3 16 5.5 12 8.5 8 5.5 9.5 3" />
      {/* Ring band circle */}
      <circle cx="12" cy="14" r="7" />
      <circle cx="12" cy="14" r="5" strokeWidth="1.4" opacity="0.6" />
    </svg>
  );
}

// Bangle / Kada bracelet (Bangle Repair)
export function BangleIcon({ className = "w-5 h-5 text-[#C18A32]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <ellipse cx="12" cy="12" rx="9" ry="5.5" />
      <ellipse cx="12" cy="12" rx="6.5" ry="3.5" strokeWidth="1.4" opacity="0.6" />
      <line x1="7" y1="9.5" x2="8" y2="10.5" strokeWidth="1.5" />
      <line x1="16" y1="13.5" x2="17" y2="14.5" strokeWidth="1.5" />
    </svg>
  );
}

// Floral cluster stone setting (Stone Setting & Replacement)
export function StoneSettingIcon({ className = "w-5 h-5 text-[#C18A32]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Center stone */}
      <circle cx="12" cy="12" r="3" />
      {/* Surrounding petals / stones */}
      <circle cx="12" cy="5.5" r="2.2" />
      <circle cx="12" cy="18.5" r="2.2" />
      <circle cx="5.5" cy="12" r="2.2" />
      <circle cx="18.5" cy="12" r="2.2" />
      <circle cx="7.5" cy="7.5" r="1.8" opacity="0.7" />
      <circle cx="16.5" cy="7.5" r="1.8" opacity="0.7" />
      <circle cx="7.5" cy="16.5" r="1.8" opacity="0.7" />
      <circle cx="16.5" cy="16.5" r="1.8" opacity="0.7" />
    </svg>
  );
}

// Polishing sparkling necklace (Polish & Refurbishment)
export function PolishRefurbishIcon({ className = "w-5 h-5 text-[#C18A32]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Necklace arc */}
      <path d="M 5,6 C 7,14 17,14 19,6" />
      {/* Pendant in center */}
      <circle cx="12" cy="13.5" r="2" fill="currentColor" />
      {/* Sparkle rays */}
      <path d="M 12,17.5 L 12,21" strokeWidth="1.5" />
      <path d="M 10,19.5 L 7,21" strokeWidth="1.5" />
      <path d="M 14,19.5 L 17,21" strokeWidth="1.5" />
      <path d="M 4,4 L 5,6" strokeWidth="1.5" />
      <path d="M 20,4 L 19,6" strokeWidth="1.5" />
    </svg>
  );
}

// Antique chandelier / jhumka pendant (Antique Jewellery Restoration)
export function AntiqueJewelleryIcon({ className = "w-5 h-5 text-[#C18A32]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Top hanger bead */}
      <circle cx="12" cy="4" r="1.5" />
      {/* Main ornate chandelier dome */}
      <path d="M 7,10 C 7,7 17,7 17,10 Z" />
      <line x1="6" y1="11" x2="18" y2="11" strokeWidth="2" />
      {/* 3 Hanging drops */}
      <circle cx="8" cy="16" r="1.5" />
      <line x1="8" y1="11" x2="8" y2="14.5" />
      <circle cx="12" cy="18" r="1.8" fill="currentColor" />
      <line x1="12" y1="11" x2="12" y2="16.2" />
      <circle cx="16" cy="16" r="1.5" />
      <line x1="16" y1="11" x2="16" y2="14.5" />
    </svg>
  );
}

// Hand holding / carefully cupping a diamond (Careful Handling of Every Piece)
export function HandHoldingGemIcon({ className = "w-5 h-5 text-[#D8A84E]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Faceted diamond floating above hand */}
      <polygon points="12,2 15.5,5 12,8.5 8.5,5" />
      <line x1="8.5" y1="5" x2="15.5" y2="5" strokeWidth="1" />
      {/* Hand cupping underneath */}
      <path d="M 2,13 C 4,12 7,12.5 9,14 L 12,16.5 C 13,17.5 15,17.5 16,16.5 L 20,13 C 21,12 22,12.5 22,14 C 21,17 17,21 12,21 C 8,21 4,18 2,15 Z" />
    </svg>
  );
}

// Indian Temple / Mandir Shikhara Shrine Architecture (Traditional Expertise in Customization)
export function TempleShrineIcon({ className = "w-5 h-5 text-[#C18A32]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Kalash on top spire */}
      <circle cx="12" cy="3" r="1" fill="currentColor" />
      <line x1="12" y1="4" x2="12" y2="5.5" strokeWidth="1.5" />
      {/* Tiered temple shikhara dome */}
      <path d="M 12,5.5 L 8,11 L 16,11 Z" />
      <line x1="7" y1="11.5" x2="17" y2="11.5" strokeWidth="1.8" />
      {/* Temple pillars and sanctum entrance */}
      <rect x="7" y="12" width="10" height="7" rx="0.5" />
      <path d="M 10,19 C 10,16 14,16 14,19" />
      {/* Plinth base */}
      <line x1="5" y1="20" x2="19" y2="20" strokeWidth="2" />
    </svg>
  );
}

// Scalloped Award Ribbon Badge with Checkmark (Premium Quality in Customization)
export function ScallopedQualityBadgeIcon({ className = "w-5 h-5 text-[#C18A32]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Scalloped circle rosette */}
      <path d="M 12,2 C 13.5,2 14.5,3 16,3 C 17.5,3 18.5,4 19.5,5.5 C 20.5,7 21,8.5 21,10 C 21,11.5 22,12.5 22,14 C 22,15.5 21,16.5 20,18 C 19,19.5 17.5,20.5 16,21 C 14.5,21.5 13.5,22 12,22 C 10.5,22 9.5,21.5 8,21 C 6.5,20.5 5,19.5 4,18 C 3,16.5 2,15.5 2,14 C 2,12.5 3,11.5 3,10 C 3,8.5 3.5,7 4.5,5.5 C 5.5,4 6.5,3 8,3 C 9.5,3 10.5,2 12,2 Z" />
      {/* Checkmark inside */}
      <polyline points="9 12 11 14 15 10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// Necklace on bust outline (Review & Refine in Custom Design)
export function NecklaceBustIcon({ className = "w-5 h-5 text-[#C18A32]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Bust / neck silhouette */}
      <path d="M 8,4 C 8,2 16,2 16,4 C 16,9 20,14 21,20 L 3,20 C 4,14 8,9 8,4 Z" strokeWidth="1.5" />
      {/* Draped necklace */}
      <path d="M 8,7 C 9,13 15,13 16,7" strokeWidth="1.8" />
      {/* Central sparkling pendant */}
      <circle cx="12" cy="13" r="1.5" fill="currentColor" stroke="none" />
      <polygon points="12,14 13.5,16 12,18 10.5,16" fill="currentColor" stroke="none" />
    </svg>
  );
}

// Goldsmith anvil / stake pedestal (Crafting in Services Process)
export function AnvilStakeIcon({ className = "w-5 h-5 text-[#650D1B]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {/* Anvil working surface */}
      <path d="M 4,7 L 20,7 C 21,7 21,8.5 20,9 L 18,10 L 15,10 C 14.5,12 14,14 15,16 L 18,18 L 6,18 L 9,16 C 10,14 9.5,12 9,10 L 5,10 C 3,10 2,8 4,7 Z" />
      {/* Stand base */}
      <line x1="5" y1="20" x2="19" y2="20" strokeWidth="2.5" strokeLinecap="round" />
    </svg>
  );
}

// Jeweler's Pliers / Crossed Tools (Jewellery Repair & Skilled Craftsmanship)
export function CrossedToolsIcon({ className = "w-5 h-5 text-[#C18A32]" }: IconProps) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 4c1 4 4 7 5 8 1 1 4 4 5 8" />
      <path d="M17 4c-1 4-4 7-5 8-1 1-4 4-5 8" />
      <circle cx="12" cy="12" r="1.5" fill="currentColor" />
      <path d="M6 3.5l2 1" strokeWidth="2" />
      <path d="M18 3.5l-2 1" strokeWidth="2" />
    </svg>
  );
}
