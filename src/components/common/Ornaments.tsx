import React from "react";
import Link from "next/link";

export function LotusLogo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center gap-3 group ${className}`}>
      <div className="relative w-11 h-11 flex-shrink-0 flex items-center justify-center">
        <svg
          viewBox="0 0 100 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full text-[#C18A32] drop-shadow-sm transition-transform duration-300 group-hover:scale-105"
        >
          {/* Central Petal */}
          <path
            d="M50 8 C46 25 43 45 50 65 C57 45 54 25 50 8 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.5"
            strokeLinejoin="round"
          />
          {/* Inner Left Petal */}
          <path
            d="M50 65 C41 48 31 32 30 18 C39 25 46 42 50 65 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          {/* Inner Right Petal */}
          <path
            d="M50 65 C59 48 69 32 70 18 C61 25 54 42 50 65 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3.2"
            strokeLinejoin="round"
          />
          {/* Outer Left Petal */}
          <path
            d="M50 65 C34 56 18 45 12 32 C24 35 38 48 50 65 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Outer Right Petal */}
          <path
            d="M50 65 C66 56 82 45 88 32 C76 35 62 48 50 65 Z"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinejoin="round"
          />
          {/* Base Calyx Curves */}
          <path
            d="M26 65 C36 71 64 71 74 65"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            d="M34 71 C44 76 56 76 66 71"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <div className="flex flex-col text-left">
        <span className="font-serif text-[22px] sm:text-[24px] font-bold text-[#650D1B] leading-tight tracking-tight">
          Shri Swami
        </span>
        <span className="font-serif text-[18px] sm:text-[20px] font-semibold text-[#650D1B] leading-none tracking-normal">
          Jewellers
        </span>
        <span className="text-[9.5px] sm:text-[10px] text-[#65564E] font-medium tracking-tight mt-0.5 whitespace-nowrap">
          Legacy of Trust. Art of Craftsmanship.
        </span>
      </div>
    </Link>
  );
}

export function OrnamentalDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center gap-3 my-3 text-[#C18A32] select-none ${className}`}>
      <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-r from-transparent via-[#C18A32]/60 to-[#C18A32]" />
      <span className="text-sm font-serif">❖</span>
      <span className="h-[1px] w-12 sm:w-20 bg-gradient-to-l from-transparent via-[#C18A32]/60 to-[#C18A32]" />
    </div>
  );
}

export function FiligreeCorner({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none select-none text-[#C18A32]/30 ${className}`}>
      <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
        <path
          d="M4 44 V12 C4 7.58172 7.58172 4 12 4 H44"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
        />
        <path
          d="M10 40 V16 C10 12.6863 12.6863 10 16 10 H40"
          stroke="currentColor"
          strokeWidth="1"
          strokeDasharray="2 2"
        />
        <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.4" />
      </svg>
    </div>
  );
}

export function GoldSealBadge({ className = "" }: { className?: string }) {
  return (
    <div
      className={`inline-flex flex-col items-center justify-center p-2 rounded-full border-2 border-[#D8A84E] bg-gradient-to-b from-[#FFFDF9] via-[#FAF3E8] to-[#F3E5D0] shadow-sm select-none ${className}`}
    >
      <div className="w-14 h-14 rounded-full border border-dashed border-[#C18A32] flex flex-col items-center justify-center text-center p-1">
        <span className="font-serif text-lg font-bold text-[#650D1B] leading-none">60</span>
        <span className="text-[8px] font-semibold tracking-wider uppercase text-[#C18A32] leading-tight">
          Years
        </span>
        <span className="text-[7.5px] text-[#65564E] leading-none">of Trust</span>
      </div>
    </div>
  );
}
