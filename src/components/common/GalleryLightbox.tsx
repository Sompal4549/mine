"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  images: { src: string; alt: string; title: string; description?: string }[];
  currentIndex: number;
  onNext: () => void;
  onPrev: () => void;
}

export default function GalleryLightbox({
  isOpen,
  onClose,
  images,
  currentIndex,
  onNext,
  onPrev,
}: GalleryLightboxProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") onNext();
      if (e.key === "ArrowLeft") onPrev();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose, onNext, onPrev]);

  if (!isOpen || images.length === 0) return null;

  const current = images[currentIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-8 animate-fadeIn">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
        aria-label="Close Lightbox"
      >
        <X className="w-6 h-6" />
      </button>

      {/* Prev button */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
        aria-label="Previous image"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      {/* Next button */}
      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 p-3 text-white/80 hover:text-white rounded-full bg-white/10 hover:bg-white/20 transition-colors z-50"
        aria-label="Next image"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Image Container */}
      <div className="relative max-w-4xl max-h-[85vh] flex flex-col items-center">
        <div className="relative w-full max-h-[70vh] aspect-[4/3] rounded-xl overflow-hidden border-2 border-[#C18A32]/40 shadow-2xl">
          <Image
            src={current.src}
            alt={current.alt || "Shri Swami Jewellers piece"}
            fill
            className="object-contain"
            priority
          />
        </div>

        {/* Caption */}
        <div className="text-center mt-4 text-[#FFF8ED]">
          <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#D8A84E]">
            {current.title}
          </h3>
          {current.description && (
            <p className="text-xs sm:text-sm text-[#F5EBDD]/80 mt-1 max-w-lg">
              {current.description}
            </p>
          )}
          <span className="text-[11px] text-[#C18A32] mt-2 block">
            {currentIndex + 1} of {images.length}
          </span>
        </div>
      </div>
    </div>
  );
}
