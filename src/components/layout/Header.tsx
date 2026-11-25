"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ArrowRight, Menu, X, Phone, MessageCircle } from "lucide-react";
import { LotusLogo } from "@/components/common/Ornaments";
import navData from "@/data/navigation.json";
import siteData from "@/data/site.json";
import EnquiryModal from "@/components/common/EnquiryModal";

export default function Header() {
  const pathname = usePathname();
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [enquiryModalOpen, setEnquiryModalOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile drawer on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setServicesOpen(false);
  }, [pathname]);

  const isActive = (href: string) => {
    if (href === "/") {
      return pathname === "/";
    }
    return pathname.startsWith(href);
  };

  return (
    <>
      <header
        className={`sticky top-0 z-40 bg-[#FFF9F0]/95 backdrop-blur-md transition-all duration-300 border-b border-[#E7D6C1] ${
          isScrolled ? "shadow-sm py-2" : "py-2.5 sm:py-3.5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <LotusLogo />

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-8">
            {navData.mainNav.map((item) => {
              if (item.children) {
                const isServicesActive = pathname.startsWith("/services");
                return (
                  <div
                    key={item.label}
                    className="relative"
                    onMouseEnter={() => setServicesOpen(true)}
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <Link
                      href={item.href}
                      className={`inline-flex items-center gap-1 text-[14px] font-medium transition-colors py-0.5 ${
                        isServicesActive
                          ? "text-[#650D1B] font-bold border-b-2 border-[#650D1B]"
                          : "text-[#241B19] hover:text-[#650D1B]"
                      }`}
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          servicesOpen ? "rotate-180 text-[#650D1B]" : "text-[#65564E]"
                        }`}
                      />
                    </Link>

                    {/* Services Dropdown Menu */}
                    {servicesOpen && (
                      <div className="absolute top-full left-0 mt-2 w-72 bg-[#FFF9F0] border border-[#C18A32]/40 rounded-xl shadow-xl p-2 z-50">
                        <div className="py-1">
                          {item.children.map((child) => (
                            <Link
                              key={child.href}
                              href={child.href}
                              className={`block px-3 py-2 rounded-lg transition-colors group ${
                                pathname === child.href
                                  ? "bg-[#650D1B] text-[#FFF9F0]"
                                  : "hover:bg-[#F5EBDD] text-[#241B19]"
                              }`}
                            >
                              <div
                                className={`text-[13px] font-semibold ${
                                  pathname === child.href
                                    ? "text-[#FFF9F0]"
                                    : "text-[#650D1B] group-hover:text-[#4A101B]"
                                }`}
                              >
                                {child.label}
                              </div>
                              {child.description && (
                                <p
                                  className={`text-[11px] mt-0.5 line-clamp-1 ${
                                    pathname === child.href ? "text-[#FFF9F0]/80" : "text-[#65564E]"
                                  }`}
                                >
                                  {child.description}
                                </p>
                              )}
                            </Link>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              const active = isActive(item.href);
              return (
                <Link
                  key={item.label}
                  href={item.href}
                  className={`text-[14px] transition-colors py-0.5 ${
                    active
                      ? "text-[#650D1B] font-bold border-b-2 border-[#650D1B]"
                      : "text-[#241B19] font-medium hover:text-[#650D1B]"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Enquire Now Button */}
          <div className="hidden lg:flex items-center gap-3">
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#650D1B] hover:bg-[#4A101B] text-[#FFF9F0] text-[13px] font-semibold px-5 py-2 rounded-full shadow-xs hover:shadow transition-all group"
            >
              <span>{navData.enquireButton.label}</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1" />
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setEnquiryModalOpen(true)}
              className="bg-[#650D1B] text-[#FFF8ED] text-[12px] font-semibold px-3 py-1.5 rounded-full"
            >
              Enquire
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Menu"
              className="p-2 text-[#650D1B] rounded-lg hover:bg-[#F5EBDD] transition-colors"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer content */}
          <div className="fixed top-0 right-0 bottom-0 w-5/6 max-w-sm bg-[#FFF8ED] shadow-2xl z-50 flex flex-col p-6 overflow-y-auto animate-slideLeft">
            <div className="flex items-center justify-between pb-4 border-b border-[#E9DAC7]">
              <LotusLogo />
              <button
                onClick={() => setMobileMenuOpen(false)}
                className="p-2 text-[#650D1B] hover:bg-[#F5EBDD] rounded-full"
                aria-label="Close menu"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="py-6 flex-1 space-y-2">
              {navData.mainNav.map((item) => {
                if (item.children) {
                  return (
                    <div key={item.label} className="border-b border-[#E9DAC7]/60 pb-2">
                      <div className="text-[14px] font-bold text-[#650D1B] px-3 py-2 uppercase tracking-wider">
                        {item.label}
                      </div>
                      <div className="pl-4 space-y-1">
                        {item.children.map((child) => (
                          <Link
                            key={child.href}
                            href={child.href}
                            className={`block px-3 py-2 rounded-md text-[14px] font-medium transition-colors ${
                              pathname === child.href
                                ? "bg-[#650D1B] text-white"
                                : "text-[#241B19] hover:bg-[#F5EBDD]"
                            }`}
                          >
                            {child.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  );
                }

                const active = isActive(item.href);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    className={`block px-3 py-2.5 rounded-lg text-[15px] font-medium transition-colors ${
                      active
                        ? "bg-[#650D1B] text-[#FFF8ED] font-semibold"
                        : "text-[#241B19] hover:bg-[#F5EBDD]"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              <div className="pt-4 space-y-2">
                <Link
                  href="/collections"
                  className="block px-3 py-2 text-[14px] font-medium text-[#65564E] hover:text-[#650D1B]"
                >
                  Curated Collections
                </Link>
                <Link
                  href="/jewellery-care"
                  className="block px-3 py-2 text-[14px] font-medium text-[#65564E] hover:text-[#650D1B]"
                >
                  Jewellery Care Guide
                </Link>
                <Link
                  href="/faqs"
                  className="block px-3 py-2 text-[14px] font-medium text-[#65564E] hover:text-[#650D1B]"
                >
                  FAQs
                </Link>
              </div>
            </div>

            {/* Mobile Footer Actions */}
            <div className="pt-4 border-t border-[#E9DAC7] space-y-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setEnquiryModalOpen(true);
                }}
                className="w-full bg-[#650D1B] text-[#FFF8ED] py-3 rounded-full font-semibold text-center text-sm shadow hover:bg-[#4A101B]"
              >
                Enquire Now
              </button>

              <div className="grid grid-cols-2 gap-2 text-center text-xs">
                <a
                  href={`tel:${siteData.phone}`}
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-[#F5EBDD] rounded-lg text-[#650D1B] font-semibold"
                >
                  <Phone className="w-3.5 h-3.5" />
                  <span>Call Us</span>
                </a>
                <a
                  href={siteData.socials.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-1.5 py-2.5 bg-[#25D366]/15 text-[#128C7E] rounded-lg font-semibold"
                >
                  <MessageCircle className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Global Interactive Enquiry Modal */}
      <EnquiryModal isOpen={enquiryModalOpen} onClose={() => setEnquiryModalOpen(false)} />
    </>
  );
}
