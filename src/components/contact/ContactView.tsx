"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Phone,
  MessageCircle,
  MapPin,
  Mail,
  User,
  Send,
  CheckCircle2,
  Diamond,
  ShieldCheck,
  Handshake,
  LayoutGrid,
  ArrowRight,
  ExternalLink,
  Loader2,
  Clock,
} from "lucide-react";
import contactData from "@/data/contact.json";
import { OrnamentalDivider } from "@/components/common/Ornaments";

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: contactData.form.services[0],
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.email.trim() || !formData.phone.trim() || !formData.message.trim()) {
      setError("Please fill out your Name, Email, Phone Number, and Message.");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to send message. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to send message. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: contactData.form.services[0],
      message: "",
    });
    setIsSubmitted(false);
  };

  return (
    <div className="w-full text-[#241B19] bg-[#FAF4E8]">
      {/* 1. HERO SECTION (FULL WIDTH BANNER BACKGROUND) */}
      <section className="relative w-full min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] bg-[#FAF4E8] border-b border-[#E7D6C1] overflow-hidden flex items-center">
        {/* Full-width banner background image matching screenshot exact */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={contactData.hero.necklaceImage}
            alt="Contact Us"
            fill
            priority
            className="object-cover object-right"
          />
          {/* Left subtle gradient for small screens & text legibility */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#FAF4E8] via-[#FAF4E8]/95 sm:via-[#FAF4E8]/60 lg:via-transparent to-transparent" />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-8 py-6 sm:py-8">
          <div className="max-w-xl space-y-3 text-left">
            <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
              <span className="w-5 h-[1px] bg-[#C18A32]" />
              <span>{contactData.hero.sectionSubtitle}</span>
              <span className="w-5 h-[1px] bg-[#C18A32]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A101B] leading-tight">
              {contactData.hero.title}
            </h1>

            <p className="text-sm sm:text-[15px] text-black leading-relaxed max-w-md">
              {contactData.hero.description}
            </p>

            <OrnamentalDivider className="justify-start my-2" />
          </div>
        </div>
      </section>

      {/* 2. TWO-COLUMN CONTACT SECTION (GET IN TOUCH + SEND US A MESSAGE) */}
      <section className="w-full py-6 bg-[#FAF4E8]">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
          {/* Left Column: GET IN TOUCH (5 cols) */}
          <div className="lg:col-span-5 space-y-6 text-left">
            <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
              <span className="w-5 h-[1px] bg-[#C18A32]" />
              <span>{contactData.getInTouch.sectionSubtitle}</span>
              <span className="w-5 h-[1px] bg-[#C18A32]" />
            </div>

            <div className="space-y-4">
              {contactData.getInTouch.channels.map((ch) => {
                const isPhone = ch.type === "phone";
                const isWhatsapp = ch.type === "whatsapp";
                const isAddress = ch.type === "address";
                const isEmail = ch.type === "email";

                return (
                  <div
                    key={ch.title}
                    className="flex items-start gap-4 p-4 rounded-2xl bg-[#FFF8ED] border border-[#C18A32]/35 shadow-xs hover:shadow-sm transition-all"
                  >
                    <div className="w-12 h-12 rounded-full bg-[#FAF5ED] border border-[#C18A32] flex items-center justify-center flex-shrink-0 text-[#650D1B] mt-0.5">
                      {isPhone && <Phone className="w-5 h-5 text-[#650D1B]" />}
                      {isWhatsapp && <MessageCircle className="w-5 h-5 text-[#25D366]" />}
                      {isAddress && <MapPin className="w-5 h-5 text-[#650D1B]" />}
                      {isEmail && <Mail className="w-5 h-5 text-[#650D1B]" />}
                    </div>

                    <div className="flex-1">
                      <h4 className="font-serif text-base font-bold text-[#650D1B]">
                        {ch.title}
                      </h4>
                      <p className="text-sm font-semibold text-[#241B19] mt-0.5">
                        {ch.primary}
                      </p>
                      {ch.secondary && (
                        <p className="text-xs text-[#65564E] mt-0.5">{ch.secondary}</p>
                      )}

                      {isWhatsapp && (
                        <div className="pt-2">
                          <a
                            href={ch.actionUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 text-xs font-bold text-[#650D1B] bg-[#F5EBDD] px-3.5 py-1 rounded-full border border-[#C18A32]/40 hover:bg-[#650D1B] hover:text-white transition-colors"
                          >
                            <span>{ch.actionText}</span>
                            <ArrowRight className="w-3 h-3" />
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: SEND US A MESSAGE FORM (7 cols) */}
          <div className="lg:col-span-7 bg-[#FFF8ED] rounded-3xl border-2 border-[#C18A32]/40 shadow-xl p-5 sm:p-7 text-left">
            <div className="text-center mb-6">
              <div className="inline-flex items-center gap-2 text-[12px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
                <span className="w-5 h-[1px] bg-[#C18A32]" />
                <span>{contactData.form.sectionSubtitle}</span>
                <span className="w-5 h-[1px] bg-[#C18A32]" />
              </div>
              <p className="text-xs sm:text-sm text-[#65564E] mt-1">
                {contactData.form.subtitle}
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-xl text-xs text-red-700">
                {error}
              </div>
            )}

            {!isSubmitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="relative">
                    <User className="w-4 h-4 text-[#C18A32] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="text"
                      name="name"
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E9DAC7] bg-[#FAF5ED] text-sm text-[#241B19] focus:outline-none focus:border-[#C18A32]"
                    />
                  </div>

                  {/* Email */}
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#C18A32] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="email"
                      name="email"
                      placeholder="Your Email *"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E9DAC7] bg-[#FAF5ED] text-sm text-[#241B19] focus:outline-none focus:border-[#C18A32]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Phone */}
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#C18A32] absolute left-3.5 top-3.5 pointer-events-none" />
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Your Phone Number *"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E9DAC7] bg-[#FAF5ED] text-sm text-[#241B19] focus:outline-none focus:border-[#C18A32]"
                    />
                  </div>

                  {/* Service dropdown */}
                  <div className="relative">
                    <LayoutGrid className="w-4 h-4 text-[#C18A32] absolute left-3.5 top-3.5 pointer-events-none" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl border border-[#E9DAC7] bg-[#FAF5ED] text-sm text-[#241B19] focus:outline-none focus:border-[#C18A32]"
                    >
                      {contactData.form.services.map((srv) => (
                        <option key={srv} value={srv}>
                          {srv}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <textarea
                    rows={4}
                    name="message"
                    placeholder="Your Message *"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full p-4 rounded-xl border border-[#E9DAC7] bg-[#FAF5ED] text-sm text-[#241B19] focus:outline-none focus:border-[#C18A32]"
                  />
                </div>

                {/* Submit button */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-[#650D1B] hover:bg-[#4A101B] disabled:opacity-75 disabled:cursor-not-allowed text-[#FFF8ED] py-3.5 rounded-full font-semibold text-sm sm:text-base transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 group active:scale-98"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-[#D8A84E]" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4 text-[#D8A84E] transition-transform group-hover:translate-x-1" />
                      <span>{contactData.form.buttonText} →</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="text-center py-10 space-y-4">
                <CheckCircle2 className="w-16 h-16 text-[#C18A32] mx-auto animate-bounce" />
                <h3 className="font-serif text-2xl font-bold text-[#650D1B]">
                  Thank You, {formData.name}!
                </h3>
                <p className="text-sm text-[#65564E] max-w-md mx-auto leading-relaxed">
                  We have received your message regarding{" "}
                  <span className="font-semibold text-[#650D1B]">{formData.service}</span>. Our team will contact you shortly on {formData.phone}.
                </p>
                <div className="pt-2">
                  <button
                    onClick={handleReset}
                    className="bg-[#650D1B] text-[#FFF8ED] px-8 py-2.5 rounded-full text-xs font-semibold hover:bg-[#4A101B]"
                  >
                    Send Another Message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 3. FIND US SECTION (VISIT OUR STORE SHOWCASE & LIVE INTERACTIVE MAP) */}
      <section className="w-full py-3 sm:py-4 bg-[#FAF4E8] space-y-4 sm:space-y-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 space-y-4 sm:space-y-5">
          {/* A. VISIT OUR STORE SHOWCASE BANNER (CONTENT ON LEFT, STOREFRONT ARTWORK ON RIGHT & BACKGROUND) */}
          <div className="relative w-full rounded-3xl overflow-hidden bg-[#FFF9F0] border-2 border-[#D8A84E]/40 px-5 sm:px-8 py-3.5 sm:py-4 shadow-xs min-h-[170px] sm:min-h-[190px] flex items-center">
            {/* Storefront Building Artwork positioned on the right & background */}
            <div className="absolute right-0 bottom-0 top-0 w-full sm:w-3/5 lg:w-1/2 pointer-events-none">
              <Image
                src="/images/contact/storefront-building.webp"
                alt="Shri Swami Jewellers Heritage Storefront"
                fill
                priority
                className="object-contain object-right-bottom"
              />
            </div>
            {/* Subtle soft gradient overlay so text is 100% readable on all screen sizes */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#FFF9F0] via-[#FFF9F0]/95 sm:via-[#FFF9F0]/80 to-transparent pointer-events-none" />

            {/* Content on the Left */}
            <div className="relative z-10 max-w-xl space-y-2 sm:space-y-2.5 text-left">
              <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
                <span className="w-5 h-[1px] bg-[#C18A32]" />
                <span>{contactData.findUs.sectionSubtitle}</span>
                <span className="w-5 h-[1px] bg-[#C18A32]" />
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-[#4A101B] leading-tight">
                {contactData.findUs.title}
              </h2>

              <p className="text-xs sm:text-sm text-[#65564E] leading-relaxed max-w-md">
                {contactData.findUs.description}
              </p>

              <div className="pt-1 flex flex-wrap items-center gap-2.5">
                <a
                  href={contactData.findUs.mapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-[#650D1B] hover:bg-[#4A101B] text-[#FFF8ED] text-xs sm:text-sm font-bold px-5 py-2 rounded-full shadow-md hover:shadow-lg transition-all group"
                >
                  <MapPin className="w-4 h-4 text-[#D8A84E] transition-transform group-hover:scale-110" />
                  <span>{contactData.findUs.buttonText} →</span>
                </a>

                <div className="flex items-center gap-2 text-xs text-[#65564E] bg-[#FAF4E8] px-3 py-1.5 rounded-full border border-[#D8A84E]/40 font-medium">
                  <Clock className="w-3.5 h-3.5 text-[#C18A32]" />
                  <span>Mon – Sat: 10:30 AM – 8:30 PM</span>
                </div>
              </div>
            </div>
          </div>

          {/* B. PROPER LIVE INTERACTIVE GOOGLE MAP & STORE LOCATIONS */}
          <div className="bg-[#FFF9F0] rounded-3xl border-2 border-[#D8A84E]/40 p-4 sm:p-6 shadow-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left: Proper Live Interactive Google Map (7 cols) */}
              <div className="lg:col-span-7 flex flex-col justify-between space-y-3">
                <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] min-h-[320px] rounded-2xl overflow-hidden border border-[#D8A84E]/50 shadow-md bg-[#FAF4E8]">
                  <iframe
                    title="Shri Swami Jewellers Live Google Maps Location"
                    src="https://maps.google.com/maps?q=123+Heritage+Market+Delhi&t=&z=14&ie=UTF8&iwloc=&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="flex items-center justify-between text-xs text-[#65564E] px-1">
                  <span className="flex items-center gap-1.5 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#C18A32]" />
                    Interactive Map (Zoom &amp; Pan enabled)
                  </span>
                  <a
                    href={contactData.findUs.mapUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#650D1B] hover:underline inline-flex items-center gap-1"
                  >
                    <span>Open in Google Maps App</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Right: Regional Store Showrooms (5 cols) */}
              <div className="lg:col-span-5 space-y-4 text-left flex flex-col justify-between">
                <div className="space-y-1">
                  <div className="inline-flex items-center gap-2 text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B]">
                    <span className="w-4 h-[1px] bg-[#C18A32]" />
                    <span>OUR SHOWROOMS</span>
                    <span className="w-4 h-[1px] bg-[#C18A32]" />
                  </div>
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#4A101B]">
                    Visit Our Locations
                  </h3>
                </div>

                <div className="space-y-3">
                  {contactData.findUs.regionalBranches.map((branch: any) => (
                    <div
                      key={branch.city}
                      className="p-3.5 bg-[#FAF4E8] rounded-xl border border-[#D8A84E]/30 space-y-1 hover:border-[#C18A32] transition-colors"
                    >
                      <div className="flex items-center justify-between">
                        <h4 className="font-serif text-sm font-bold text-[#650D1B]">
                          {branch.city}
                        </h4>
                        <a
                          href={`tel:${branch.phone}`}
                          className="text-xs text-[#65564E] hover:text-[#650D1B] font-semibold"
                        >
                          {branch.phone}
                        </a>
                      </div>
                      <p className="text-xs text-[#65564E] leading-relaxed">
                        {branch.address}
                      </p>
                    </div>
                  ))}
                </div>

                <div className="p-3.5 bg-[#650D1B] text-[#FFF8ED] rounded-xl text-xs flex items-center justify-between gap-2 shadow-xs">
                  <span>Doorstep Repair available in Delhi NCR, Chhapra &amp; Siwan</span>
                  <a
                    href="https://wa.me/919876543210?text=Hello%20Shri%20Swami%20Jewellers,%20I%20want%20to%20book%20a%20doorstep%20repair"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-bold text-[#D8A84E] hover:underline flex-shrink-0"
                  >
                    Book Visit →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. BOTTOM 4 TRUST BADGES (FULL WIDTH) */}
      <section className="w-full bg-[#F5EBDD] border-t border-b border-[#E7D6C1] py-5 select-none">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-4 divide-y sm:divide-y-0 sm:divide-x divide-[#C18A32]/30 text-center">
            {contactData.trustBadges.map((badge, idx) => {
              const icons = [
                <Diamond key={1} className="w-6 h-6 text-[#C18A32]" />,
                <ShieldCheck key={2} className="w-6 h-6 text-[#C18A32]" />,
                <Handshake key={3} className="w-6 h-6 text-[#C18A32]" />,
                <Diamond key={4} className="w-6 h-6 text-[#C18A32]" />,
              ];

              return (
                <div key={badge.title} className="flex flex-col items-center pt-4 sm:pt-0 px-2 space-y-1.5">
                  <div className="w-11 h-11 rounded-full bg-[#FFF8ED] border border-[#C18A32] flex items-center justify-center">
                    {icons[idx]}
                  </div>
                  <h4 className="font-serif text-sm sm:text-base font-bold text-[#4A101B]">
                    {badge.title}
                  </h4>
                  <p className="text-xs text-[#65564E]">{badge.subtitle}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
