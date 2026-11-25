import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://shriswamijewellers.com";

  const routes = [
    "",
    "/about",
    "/services",
    "/services/custom-jewellery-design",
    "/services/jewellery-repair",
    "/services/jewellery-customization",
    "/services/jewellery-making",
    "/gallery",
    "/contact",
    "/collections",
    "/testimonials",
    "/faqs",
    "/jewellery-care",
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: route === "" ? "daily" : "weekly",
    priority: route === "" ? 1.0 : route.startsWith("/services") ? 0.9 : 0.8,
  }));
}

