"use client";

import React, { useState } from "react";
import { X, Upload, CheckCircle2, MessageSquare, Phone, Mail, User, Sparkles, Loader2 } from "lucide-react";

interface EnquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
}

export default function EnquiryModal({
  isOpen,
  onClose,
  defaultService = "Custom Jewellery Design",
}: EnquiryModalProps) {
  const [service, setService] = useState(defaultService);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  if (!isOpen) return null;

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 5 * 1024 * 1024) {
        setError("Please upload an image under 5MB");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImagePreview(reader.result as string);
        setError("");
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !message.trim()) {
      setError("Please fill in all required fields (Name, Phone, and Message).");
      return;
    }
    setError("");
    setIsSubmitting(true);

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: name.trim(),
          email: email.trim() || undefined,
          phone: phone.trim(),
          service,
          message: message.trim(),
          imagePreview,
        }),
      });

      const data = await res.json();
      if (!res.ok) {
        throw new Error(data.error || "Failed to submit enquiry. Please try again.");
      }

      setIsSubmitted(true);
    } catch (err: any) {
      setError(err.message || "Failed to submit enquiry. Please try again or reach out on WhatsApp.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
    setImagePreview(null);
    setIsSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
      <div className="relative w-full max-w-lg bg-[#FFF8ED] rounded-2xl border-2 border-[#C18A32]/40 shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto">
        {/* Close Button */}
        <button
          onClick={handleReset}
          className="absolute top-4 right-4 p-2 text-[#650D1B] hover:bg-[#F5EBDD] rounded-full transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {!isSubmitted ? (
          <div>
            <div className="text-center mb-6">
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-[#650D1B] flex items-center justify-center gap-2">
                <span className="w-4 h-[1px] bg-[#C18A32]" />
                ENQUIRE NOW
                <span className="w-4 h-[1px] bg-[#C18A32]" />
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-bold text-[#650D1B] mt-1">
                Begin Your Journey With Us
              </h3>
              <p className="text-xs sm:text-sm text-[#65564E] mt-1.5">
                Share your requirements, sketch, or broken jewellery photo with our master artisans.
              </p>
            </div>

            {error && (
              <div className="mb-4 p-3 bg-red-100 border border-red-300 rounded-lg text-xs text-red-700">
                {error}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#241B19] mb-1">
                  Select Service *
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-xl border border-[#E9DAC7] bg-[#FAF5ED] text-sm text-[#241B19] focus:outline-none focus:border-[#C18A32]"
                >
                  <option value="Custom Jewellery Design">Custom Jewellery Design</option>
                  <option value="Jewellery Repair & Restoration">Jewellery Repair & Restoration</option>
                  <option value="Jewellery Customization">Jewellery Customization</option>
                  <option value="Traditional Jewellery Making">Traditional Jewellery Making</option>
                  <option value="Urgent Doorstep Jewellery Repair">Urgent Doorstep Jewellery Repair</option>
                  <option value="Rare Traditional Recreation">Rare Traditional Recreation</option>
                </select>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-xs font-semibold text-[#241B19] mb-1">
                    Your Name *
                  </label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#C18A32] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="text"
                      placeholder="Full Name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E9DAC7] bg-[#FAF5ED] text-sm text-[#241B19] focus:outline-none focus:border-[#C18A32]"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#241B19] mb-1">
                    Phone Number *
                  </label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#C18A32] absolute left-3 top-3 pointer-events-none" />
                    <input
                      type="tel"
                      placeholder="+91 98765 43210"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                      className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E9DAC7] bg-[#FAF5ED] text-sm text-[#241B19] focus:outline-none focus:border-[#C18A32]"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#241B19] mb-1">
                  Email Address (Optional)
                </label>
                <div className="relative">
                  <Mail className="w-4 h-4 text-[#C18A32] absolute left-3 top-3 pointer-events-none" />
                  <input
                    type="email"
                    placeholder="email@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-[#E9DAC7] bg-[#FAF5ED] text-sm text-[#241B19] focus:outline-none focus:border-[#C18A32]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#241B19] mb-1">
                  Your Message or Requirement *
                </label>
                <div className="relative">
                  <MessageSquare className="w-4 h-4 text-[#C18A32] absolute left-3 top-3 pointer-events-none" />
                  <textarea
                    rows={3}
                    placeholder="Tell us about your jewellery requirement, metal preference (22K/18K), or issue..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    className="w-full pl-9 pr-3 py-2 rounded-xl border border-[#E9DAC7] bg-[#FAF5ED] text-sm text-[#241B19] focus:outline-none focus:border-[#C18A32]"
                  />
                </div>
              </div>

              {/* Image Upload for Reference / Repair */}
              <div>
                <label className="block text-xs font-semibold text-[#241B19] mb-1">
                  Attach Photo / Reference Sketch (Optional)
                </label>
                <div className="border border-dashed border-[#C18A32] rounded-xl p-3 text-center bg-[#FAF5ED]">
                  {imagePreview ? (
                    <div className="flex items-center justify-between gap-3">
                      <div className="flex items-center gap-2">
                        <img
                          src={imagePreview}
                          alt="Preview"
                          className="w-12 h-12 object-cover rounded-lg border border-[#C18A32]"
                        />
                        <span className="text-xs text-[#65564E] font-medium">Photo Attached</span>
                      </div>
                      <button
                        type="button"
                        onClick={() => setImagePreview(null)}
                        className="text-xs text-red-600 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  ) : (
                    <label className="cursor-pointer flex flex-col items-center justify-center gap-1">
                      <Upload className="w-5 h-5 text-[#C18A32]" />
                      <span className="text-xs font-medium text-[#650D1B]">
                        Click to upload photo or sketch
                      </span>
                      <span className="text-[10px] text-[#65564E]">PNG, JPG up to 5MB</span>
                      <input
                        type="file"
                        accept="image/*"
                        onChange={handleImageChange}
                        className="hidden"
                      />
                    </label>
                  )}
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#650D1B] hover:bg-[#4A101B] disabled:opacity-75 disabled:cursor-not-allowed text-[#FFF8ED] py-3 rounded-full font-semibold text-sm transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-4 h-4 animate-spin text-[#D8A84E]" />
                    <span>Submitting Enquiry...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Enquiry</span>
                    <Sparkles className="w-4 h-4 text-[#D8A84E]" />
                  </>
                )}
              </button>

              <div className="text-center pt-1">
                <a
                  href={`https://wa.me/919876543210?text=${encodeURIComponent(
                    `Hello Shri Swami Jewellers, I have an enquiry regarding ${service}. My name is ${name || "a customer"}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-[#25D366] hover:underline font-semibold"
                >
                  Or Click to Send via WhatsApp directly →
                </a>
              </div>
            </form>
          </div>
        ) : (
          <div className="text-center py-8 space-y-4">
            <CheckCircle2 className="w-16 h-16 text-[#C18A32] mx-auto animate-bounce" />
            <h3 className="font-serif text-2xl font-bold text-[#650D1B]">
              Thank You, {name}!
            </h3>
            <p className="text-sm text-[#65564E] max-w-sm mx-auto leading-relaxed">
              Your enquiry for <span className="font-semibold text-[#650D1B]">{service}</span> has been received. Our master artisans will connect with you shortly on <span className="font-semibold">{phone}</span>.
            </p>
            <div className="pt-4">
              <button
                onClick={handleReset}
                className="bg-[#650D1B] text-[#FFF8ED] px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-[#4A101B]"
              >
                Done
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
