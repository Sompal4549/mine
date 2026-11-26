import React from "react";
import GalleryView from "@/components/gallery/GalleryView";
import type { Metadata } from "next";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Gallery & Videos",
  description:
    "Explore our handcrafted gold jewellery gallery, bridal sets, jhumkas, antique kadas, repair before & after comparisons and workshop videos.",
  path: "/gallery",
  imageAlt: "Shri Swami Jewellers gold jewellery gallery and workshop videos",
  keywords: [
    "gold jewellery gallery",
    "bridal set photos",
    "jewellery repair before after",
    "jewellery making videos",
  ],
});

export default function GalleryPage() {
  return <GalleryView />;
}
