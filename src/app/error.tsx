"use client";

import React, { useEffect } from "react";
import Link from "next/link";
import { AlertCircle, RotateCcw, Home } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application error:", error);
  }, [error]);

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#FAF4E8]">
      <div className="max-w-md w-full bg-[#FFF9F0] border border-[#D8A84E]/50 rounded-2xl p-8 text-center shadow-lg space-y-6">
        <div className="w-16 h-16 rounded-full bg-[#650D1B]/10 border border-[#C18A32] flex items-center justify-center mx-auto text-[#650D1B]">
          <AlertCircle className="w-8 h-8" />
        </div>

        <div className="space-y-2">
          <h1 className="font-serif text-2xl sm:text-3xl font-bold text-[#4A101B]">
            Something Went Wrong
          </h1>
          <p className="text-xs sm:text-sm text-[#65564E] leading-relaxed">
            We encountered an unexpected error while preparing this royal jewellery page. Please try refreshing or return home.
          </p>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <button
            onClick={() => reset()}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#650D1B] hover:bg-[#4A101B] text-[#FFF9F0] text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full shadow-sm transition-all"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Try Again</span>
          </button>

          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF4E8] hover:bg-[#F5EBDD] text-[#4A101B] border border-[#C18A32] text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full transition-all"
          >
            <Home className="w-4 h-4 text-[#C18A32]" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

