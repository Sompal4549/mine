export interface SiteConfig {
  name: string;
  tagline: string;
  foundingYear: number;
  founder: string;
  phone: string;
  displayPhone: string;
  whatsapp: string;
  displayWhatsapp: string;
  email: string;
  address: {
    delhi: string;
    delhiPincode: string;
    chhapra: string;
    siwan: string;
    ancestral: string;
  };
  workingHours: string;
  socials: {
    instagram: string;
    facebook: string;
    youtube: string;
    whatsapp: string;
  };
}

export interface NavItem {
  label: string;
  href: string;
  badge?: string;
  children?: {
    label: string;
    href: string;
    description?: string;
  }[];
}

export interface ServiceSummary {
  id: string;
  title: string;
  shortDescription: string;
  image: string;
  icon: string;
  slug: string;
}

export interface ServiceDetail {
  slug: string;
  badge: string;
  title: string;
  heroSubtitle: string;
  heroImage: string;
  introHeading: string;
  introDescription: string[];
  features: string[];
  featureImage: string;
  ctaButtonText: string;
  processTitle: string;
  processSubtitle: string;
  processSteps: {
    step: number;
    title: string;
    description: string;
    image?: string;
    icon?: string;
  }[];
  galleryTitle: string;
  gallerySubtitle: string;
  galleryImages: {
    src: string;
    alt: string;
    title: string;
  }[];
  whyChooseHeading: string;
  whyChooseSubtitle?: string;
  whyChoosePillars: {
    title: string;
    description?: string;
    icon: string;
  }[];
  bottomCta: {
    title: string;
    subtitle: string;
    buttonText: string;
    whatsappMessage: string;
  };
  faqs?: {
    question: string;
    answer: string;
  }[];
}

export interface GalleryItem {
  id: string;
  title: string;
  category: "necklaces" | "earrings" | "bangles" | "rings" | "bridal" | "custom" | "repair";
  type: "image" | "video";
  image: string;
  videoUrl?: string;
  duration?: string;
  description: string;
  isBeforeAfter?: boolean;
  beforeImage?: string;
  afterImage?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  location: string;
  rating: number;
  comment: string;
  serviceUsed: string;
  year?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
  category: "General" | "Custom Design" | "Jewellery Repair" | "Doorstep Service" | "Purity & Hallmarking";
}
