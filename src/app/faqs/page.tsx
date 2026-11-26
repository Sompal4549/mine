import React from "react";
import FaqClient from "./FaqClient";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";
import { faqJsonLd } from "@/lib/structured-data";
import faqData from "@/data/faqs.json";

export const metadata: Metadata = pageMetadata({
  title: "Frequently Asked Questions",
  description:
    "Common questions answered about custom jewellery design, repair charges, urgent doorstep service, and BIS Hallmarked gold purity.",
  path: "/faqs",
  imageAlt: "Shri Swami Jewellers frequently asked questions",
  keywords: [
    "jewellery design FAQ",
    "jewellery repair charges",
    "doorstep repair questions",
    "BIS hallmark gold purity",
  ],
});

export default function FaqsPage() {
  const jsonLd = faqJsonLd(
    faqData.faqs.map((faq) => ({ question: faq.question, answer: faq.answer })),
  );

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <FaqClient />
    </>
  );
}

