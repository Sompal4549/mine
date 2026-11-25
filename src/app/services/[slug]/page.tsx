import React from "react";
import { notFound } from "next/navigation";
import serviceDetailsData from "@/data/service-details.json";
import ServiceDetailView from "@/components/services/ServiceDetailView";

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

export async function generateMetadata({ params }: PageProps) {
  const resolved = await Promise.resolve(params);
  const slug = resolved?.slug;
  const data = slug ? (serviceDetailsData as any)[slug] : null;

  if (!data) {
    return {
      title: "Service Not Found | Shri Swami Jewellers",
    };
  }

  return {
    title: `${data.title} | Shri Swami Jewellers`,
    description: data.heroSubtitle,
    openGraph: {
      title: `${data.title} | Shri Swami Jewellers`,
      description: data.heroSubtitle,
      images: [{ url: data.heroImage }],
    },
  };
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
