import React from "react";
import Link from "next/link";
import { Home as HomeIcon } from "lucide-react";
import { LotusLogo, OrnamentalDivider } from "@/components/common/Ornaments";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16 bg-[#FFF8ED]">
      <div className="max-w-md w-full bg-[#FAF5ED] rounded-3xl border-2 border-[#C18A32]/40 shadow-xl p-8 text-center space-y-6">
        <div className="flex justify-center">
          <LotusLogo />
        </div>

        <div className="space-y-2">
          <span className="font-serif text-6xl font-bold text-[#650D1B] block">
            404
          </span>
          <h2 className="font-serif text-2xl font-bold text-[#650D1B]">
            Page Not Found
          </h2>
          <p className="text-xs sm:text-sm text-[#65564E] leading-relaxed">
            The page you are looking for might have been moved or does not exist. Explore our timeless collections or return to the home page.
          </p>
        </div>

        <OrnamentalDivider className="mx-auto" />

        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
          <Link
            href="/"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#650D1B] text-[#FFF8ED] text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#4A101B] transition-colors"
          >
            <HomeIcon className="w-4 h-4" />
            <span>Return Home</span>
          </Link>
          <Link
            href="/services"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#FAF5ED] border border-[#C18A32] text-[#650D1B] text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#F5EBDD] transition-colors"
          >
            <span>Our Services</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
