"use client";

import React, { useState } from "react";
import Image from "next/image";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  className?: string;
  subtitle?: string;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  className = "",
  subtitle = "Expert Repair. Lasting Beauty.",
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);

  const handleMove = (clientX: number, rect: DOMRect) => {
    const x = clientX - rect.left;
    const pos = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(pos);
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.touches[0].clientX, rect);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const rect = e.currentTarget.getBoundingClientRect();
    handleMove(e.clientX, rect);
  };

  return (
    <div className={`flex flex-col items-center ${className}`}>
      {/* Frame with ornate gold double border */}
      <div
        className="relative w-full max-w-lg aspect-[16/10] sm:aspect-[4/3] rounded-2xl overflow-hidden shadow-xl border-4 border-[#C18A32]/40 select-none cursor-ew-resize bg-[#FAF5ED]"
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchMove={handleTouchMove}
      >
        {/* After Image (Full width background) */}
        <div className="absolute inset-0">
          <Image
            src={afterImage}
            alt="Restored Jewellery After Repair"
            fill
            className="object-cover"
            priority
          />
          {/* After Badge */}
          <span className="absolute top-4 right-4 bg-[#650D1B] text-[#FFF8ED] text-xs font-serif font-bold px-3 py-1 rounded-full shadow-md z-10 border border-[#C18A32]/50">
            After
          </span>
        </div>

        {/* Before Image (Clipped by slider position) */}
        <div
          className="absolute inset-0 overflow-hidden"
          style={{ width: `${sliderPosition}%` }}
        >
          <div className="relative w-full h-full min-w-[320px] sm:min-w-[480px]">
            <Image
              src={beforeImage}
              alt="Damaged Jewellery Before Repair"
              fill
              className="object-cover"
              priority
            />
          </div>
          {/* Before Badge */}
          <span className="absolute top-4 left-4 bg-[#650D1B] text-[#FFF8ED] text-xs font-serif font-bold px-3 py-1 rounded-full shadow-md z-10 border border-[#C18A32]/50">
            Before
          </span>
        </div>

        {/* Slider Divider Line */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#D8A84E] shadow-2xl z-20 pointer-events-none"
          style={{ left: `${sliderPosition}%` }}
        >
          {/* Central Handle Button */}
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#FAF5ED] border-2 border-[#C18A32] shadow-lg flex items-center justify-center text-[#650D1B]">
            <svg
              className="w-4 h-4"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
            >
              <polyline points="15 18 9 12 15 6" />
              <polyline points="9 18 3 12 9 6" />
            </svg>
          </div>
        </div>
      </div>

      {/* Subtitle */}
      {subtitle && (
        <div className="flex items-center gap-3 mt-4 text-[#650D1B] text-sm sm:text-base font-serif italic font-semibold">
          <span className="w-8 h-[1px] bg-[#C18A32]" />
          <span>{subtitle}</span>
          <span className="w-8 h-[1px] bg-[#C18A32]" />
        </div>
      )}
    </div>
  );
}
