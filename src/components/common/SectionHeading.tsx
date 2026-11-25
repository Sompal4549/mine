import React from "react";
import { OrnamentalDivider } from "./Ornaments";

interface SectionHeadingProps {
  subtitle?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  showDivider?: boolean;
  className?: string;
  titleClassName?: string;
}

export default function SectionHeading({
  subtitle,
  title,
  description,
  align = "center",
  showDivider = false,
  className = "",
  titleClassName = "",
}: SectionHeadingProps) {
  const isCenter = align === "center";

  return (
    <div className={`mb-8 sm:mb-12 ${isCenter ? "text-center mx-auto" : "text-left"} ${className}`}>
      {subtitle && (
        <div className={`inline-flex items-center gap-2 mb-2 text-[12px] sm:text-[13px] font-bold tracking-[0.2em] uppercase text-[#650D1B] ${isCenter ? "justify-center" : ""}`}>
          <span className="w-5 sm:w-8 h-[1px] bg-[#C18A32]" />
          <span>{subtitle}</span>
          <span className="w-5 sm:w-8 h-[1px] bg-[#C18A32]" />
        </div>
      )}
      <h2
        className={`font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#650D1B] leading-tight ${titleClassName}`}
      >
        {title}
      </h2>
      {description && (
        <p className={`mt-3 text-sm sm:text-base text-[#65564E] leading-relaxed max-w-2xl ${isCenter ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
      {showDivider && <OrnamentalDivider className={isCenter ? "mx-auto" : "justify-start"} />}
    </div>
  );
}
