import siteData from "@/data/site.json";
import { SITE_URL, SITE_NAME, DEFAULT_OG_IMAGE } from "@/lib/seo";

const OPENING_HOURS = {
  "@type": "OpeningHoursSpecification",
  dayOfWeek: [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  opens: "10:00",
  closes: "20:00",
};

function store(name: string, streetAddress: string, locality: string, region: string, postalCode?: string) {
  return {
    "@type": "LocalBusiness",
    name: `${SITE_NAME} ${name}`,
    image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
    url: SITE_URL,
    telephone: siteData.phone,
    email: siteData.email,
    parentOrganization: { "@type": "Organization", name: SITE_NAME },
    address: {
      "@type": "PostalAddress",
      streetAddress,
      addressLocality: locality,
      addressRegion: region,
      ...(postalCode ? { postalCode } : {}),
      addressCountry: "IN",
    },
    openingHoursSpecification: [OPENING_HOURS],
  };
}

export const organizationJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Organization", "JewelryStore"],
      "@id": `${SITE_URL}/#organization`,
      name: SITE_NAME,
      alternateName: "Shri Swami Jewellers",
      url: SITE_URL,
      logo: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      image: `${SITE_URL}${DEFAULT_OG_IMAGE}`,
      description:
        "Heritage jewellery house since 1966 founded by Shri Swamy Nath Sah. Custom jewellery design, repair, restoration and urgent doorstep service across Delhi NCR, Chhapra and Siwan.",
      foundingDate: String(siteData.foundingYear),
      founder: {
        "@type": "Person",
        name: siteData.founder,
      },
      slogan: siteData.tagline,
      telephone: siteData.phone,
      email: siteData.email,
      areaServed: siteData.regions.map((r) => ({
        "@type": "City",
        name: r.name,
      })),
      sameAs: Object.values(siteData.socials).filter((v) =>
        v.startsWith("http"),
      ),
      openingHoursSpecification: [OPENING_HOURS],
      address: {
        "@type": "PostalAddress",
        streetAddress: siteData.address.delhi,
        addressLocality: "Delhi",
        addressRegion: "Delhi",
        postalCode: siteData.address.delhiPincode,
        addressCountry: "IN",
      },
    },
    store("Showroom", siteData.address.delhi, "Delhi", "Delhi", siteData.address.delhiPincode),
    store("Bihar Branch", siteData.address.chhapra, "Chhapra", "Bihar"),
    store("Bihar Branch", siteData.address.siwan, "Siwan", "Bihar"),
  ],
};

export function faqJsonLd(
  faqs: { question: string; answer: string }[],
) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };
}
