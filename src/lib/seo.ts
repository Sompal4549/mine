import type { Metadata } from "next";

export const SITE_URL = "https://shriswamijewellers.com";
export const SITE_NAME = "Shri Swami Jewellers";

export const DEFAULT_OG_IMAGE = "/images/og/og-default.jpg";
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;

interface PageSEO {
  /** Page title WITHOUT the brand suffix (layout template appends it). */
  title: string;
  description: string;
  /** Route path, e.g. "/about". Root page uses "/". */
  path?: string;
  image?: string;
  imageAlt?: string;
  keywords?: string[];
  type?: "website" | "article";
}

export function pageMetadata({
  title,
  description,
  path = "/",
  image = DEFAULT_OG_IMAGE,
  imageAlt,
  keywords,
  type = "website",
}: PageSEO): Metadata {
  const url = `${SITE_URL}${path}`;
  const socialTitle = `${title} | ${SITE_NAME}`;
  const alt = imageAlt ?? SITE_NAME;

  return {
    title,
    description,
    ...(keywords ? { keywords } : {}),
    alternates: {
      canonical: path,
    },
    openGraph: {
      type,
      url,
      siteName: SITE_NAME,
      locale: "en_IN",
      title: socialTitle,
      description,
      images: [
        {
          url: image,
          width: OG_IMAGE_WIDTH,
          height: OG_IMAGE_HEIGHT,
          alt,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: socialTitle,
      description,
      images: [{ url: image, alt }],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-image-preview": "large",
        "max-snippet": -1,
        "max-video-preview": -1,
      },
    },
  };
}
