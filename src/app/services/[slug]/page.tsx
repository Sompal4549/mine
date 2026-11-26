import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import serviceDetailsData from "@/data/service-details.json";
import ServiceDetailView from "@/components/services/ServiceDetailView";
import { pageMetadata } from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return [
    { slug: "custom-jewellery-design" },
    { slug: "jewellery-repair" },
    { slug: "jewellery-customization" },
    { slug: "jewellery-making" },
  ];
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolved = await Promise.resolve(params);
  const slug = resolved?.slug;
  const data = slug ? (serviceDetailsData as any)[slug] : null;

  if (!data) {
    return {
      title: "Service Not Found",
      robots: { index: false, follow: false },
    };
  }

  return pageMetadata({
    title: data.title,
    description: data.heroSubtitle,
    path: `/services/${slug}`,
    image: "/images/og/og-services.jpg",
    imageAlt: `${data.title} - Shri Swami Jewellers`,
    keywords: [data.title, "jewellery services Delhi NCR", "Shri Swami Jewellers"],
  });
}

export default async function ServiceDetailPage({ params }: PageProps) {
  const resolved = await Promise.resolve(params);
  const slug = resolved?.slug;
  const data = slug ? (serviceDetailsData as any)[slug] : null;

  if (!data) {
    notFound();
  }

  return <ServiceDetailView data={data} />;
}
