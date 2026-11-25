import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import AnnouncementBar from "@/components/layout/AnnouncementBar";
import FloatingWhatsApp from "@/components/common/FloatingWhatsApp";

export const metadata: Metadata = {
  metadataBase: new URL("https://shriswamijewellers.com"),
  title: {
    default: "Shri Swami Jewellers | Legacy of Trust, Art of Craftsmanship Since 1966",
    template: "%s | Shri Swami Jewellers",
  },
  description:
    "Shri Swami Jewellers - Over 60 years of heritage jewellery craftsmanship. Custom jewellery design, repair & restoration, doorstep repair in Delhi NCR, Chhapra & Siwan, Bihar.",
  keywords: [
    "Shri Swami Jewellers",
    "Custom Jewellery Design",
    "Jewellery Repair Delhi",
    "Jewellery Repair Chhapra",
    "Jewellery Repair Siwan",
    "Urgent Doorstep Jewellery Repair",
    "Traditional Indian Gold Jewellery",
    "Antique Jewellery Restoration",
    "Shri Swamy Nath Sah",
  ],
  authors: [{ name: "Shri Swami Jewellers" }],
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://shriswamijewellers.com",
    siteName: "Shri Swami Jewellers",
    title: "Shri Swami Jewellers | Legacy of Trust, Art of Craftsmanship",
    description:
      "Crafting rare traditional, custom gold designs and doorstep jewellery repair across Delhi NCR, Chhapra and Siwan.",
    images: [
      {
        url: "/images/home/hero-necklace.jpg",
        width: 1200,
        height: 630,
        alt: "Shri Swami Jewellers Craftsmanship",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;0,700;1,400;1,600;1,700&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,600;1,700&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;1,400&family=Inter:wght@300;400;500;600;700&family=Lato:ital,wght@0,300;0,400;0,700;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#FAF4E8] text-[#241B19] antialiased selection:bg-[#C18A32] selection:text-white">
        <AnnouncementBar />
        <Header />
        <main className="flex-1 w-full">{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
