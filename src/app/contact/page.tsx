import React from "react";
import ContactView from "@/components/contact/ContactView";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact Us & Visit Our Store",
  description:
    "Get in touch with Shri Swami Jewellers. Contact our Delhi showroom, visit our Bihar stores, or request urgent doorstep jewellery repair via WhatsApp.",
  path: "/contact",
  image: "/images/og/og-contact.jpg",
  imageAlt: "Shri Swami Jewellers showroom storefront",
  keywords: [
    "jewellery shop Delhi contact",
    "jewellery repair Chhapra",
    "jewellery repair Siwan",
    "doorstep jewellery repair Delhi NCR",
  ],
});

export default function ContactPage() {
  return <ContactView />;
}

