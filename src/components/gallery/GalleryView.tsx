"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play, Image as ImageIcon, PlayCircle, Eye } from "lucide-react";
import galleryData from "@/data/gallery.json";
import GalleryLightbox from "@/components/common/GalleryLightbox";
import VideoModal from "@/components/common/VideoModal";
import SectionHeading from "@/components/common/SectionHeading";
import { OrnamentalDivider } from "@/components/common/Ornaments";

export default function GalleryView() {
  const [activeMediaTab, setActiveMediaTab] = useState<"images" | "videos">("images");
  const [activeCategory, setActiveCategory] = useState("all");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  const [selectedVideo, setSelectedVideo] = useState<any>(null);

  // Filter items based on active category
  const filteredItems = galleryData.items.filter((item) => {
    if (activeCategory === "all") return true;
    return item.tags?.includes(activeCategory) || item.category === activeCategory;
  });

  const lightboxImages = filteredItems.map((item) => ({
    src: item.image,
    alt: item.title,
    title: item.title,
    description: item.description,
  }));

  const handleOpenVideo = (video: any) => {
    setSelectedVideo(video);
    setVideoModalOpen(true);
  };

  return (
    <div className="w-full text-[#241B19] bg-[#FAF4E8]">
      {/* 1. HERO SECTION (FULL WIDTH BANNER BACKGROUND) */}
      <section className="relative w-full min-h-[220px] sm:min-h-[260px] lg:min-h-[300px] bg-[#FAF4E8] border-b border-[#E7D6C1] overflow-hidden flex items-center">
        {/* Full-width banner background image matching screenshot exact */}
        <div className="absolute inset-0 w-full h-full">
          <Image
            src={galleryData.hero.necklaceImage}
            alt="A Glimpse of Our Craftsmanship"
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
              <span>{galleryData.hero.sectionSubtitle}</span>
              <span className="w-5 h-[1px] bg-[#C18A32]" />
            </div>

            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4A101B] leading-tight">
              {galleryData.hero.title}
            </h1>

            <p className="text-sm sm:text-[15px] text-black leading-relaxed max-w-md">
              {galleryData.hero.description}
            </p>

            <OrnamentalDivider className="justify-start my-2" />
          </div>
        </div>
      </section>

      {/* MAIN GALLERY BODY */}
      <div className="max-w-7xl mx-auto px-4 sm:px-8 py-5 space-y-5">

      {/* 2. MEDIA TYPE TOGGLE (IMAGES / VIDEOS) */}
      <section className="px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-center gap-4">
          <span className="hidden sm:block h-[1px] w-20 bg-[#C18A32]/50" />
          <div className="inline-flex items-center p-1.5 bg-[#FFF8ED] rounded-2xl border border-[#C18A32]/40 shadow-sm">
            <button
              onClick={() => setActiveMediaTab("images")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-serif text-sm font-bold transition-all ${
                activeMediaTab === "images"
                  ? "bg-[#650D1B] text-[#FFF8ED] shadow-sm"
                  : "text-[#650D1B] hover:bg-[#F5EBDD]"
              }`}
            >
              <ImageIcon className="w-4 h-4" />
              <span>Images</span>
            </button>

            <button
              onClick={() => setActiveMediaTab("videos")}
              className={`flex items-center gap-2 px-6 py-2.5 rounded-xl font-serif text-sm font-bold transition-all ${
                activeMediaTab === "videos"
                  ? "bg-[#650D1B] text-[#FFF8ED] shadow-sm"
                  : "text-[#650D1B] hover:bg-[#F5EBDD]"
              }`}
            >
              <PlayCircle className="w-4 h-4" />
              <span>Videos</span>
            </button>
          </div>
          <span className="hidden sm:block h-[1px] w-20 bg-[#C18A32]/50" />
        </div>
      </section>

      {/* 3. CATEGORY FILTER PILLS (WHEN IMAGES SELECTED) */}
      {activeMediaTab === "images" && (
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {galleryData.categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-medium transition-all ${
                  activeCategory === cat.id
                    ? "bg-[#650D1B] text-[#FFF8ED] shadow-md font-semibold"
                    : "bg-[#FFF8ED] text-[#241B19] border border-[#C18A32]/35 hover:bg-[#F5EBDD]"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </section>
      )}

      {/* 4. IMAGES GRID */}
      {activeMediaTab === "images" && (
        <section className="px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 sm:gap-6">
              {filteredItems.map((item, idx) => (
                <div
                  key={item.id}
                  onClick={() => {
                    setLightboxIndex(idx);
                    setLightboxOpen(true);
                  }}
                  className="group relative aspect-[4/3] rounded-2xl overflow-hidden border-2 border-[#C18A32]/35 shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer bg-black/10"
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Before / After Tag if applicable */}
                  {item.isBeforeAfter && (
                    <div className="absolute top-2 left-2 flex gap-1 z-10">
                      <span className="bg-[#650D1B] text-white text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        Before
                      </span>
                      <span className="bg-[#D8A84E] text-[#4A101B] text-[10px] font-bold px-2 py-0.5 rounded shadow">
                        After
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4 text-white">
                    <span className="text-[10px] uppercase tracking-wider text-[#D8A84E] font-semibold">
                      {item.category}
                    </span>
                    <h4 className="font-serif text-sm font-bold text-white line-clamp-1">
                      {item.title}
                    </h4>
                    <span className="text-[11px] text-white/80 line-clamp-1 mt-0.5">
                      {item.description}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[11px] text-[#D8A84E] font-semibold mt-1">
                      <Eye className="w-3.5 h-3.5" />
                      <span>Click to view full photo</span>
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* 5. FEATURED VIDEOS SECTION */}
      <section className="px-4 sm:px-6 lg:px-8 pt-6">
        <div className="max-w-7xl mx-auto space-y-10">
          <SectionHeading
            subtitle={galleryData.featuredVideos.sectionSubtitle}
            title={galleryData.featuredVideos.title}
            description={galleryData.featuredVideos.subtitle}
            showDivider
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {galleryData.featuredVideos.videos.map((vid) => (
              <div
                key={vid.id}
                onClick={() => handleOpenVideo(vid)}
                className="bg-[#FFF8ED] rounded-3xl border-2 border-[#C18A32]/40 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group flex flex-col"
              >
                {/* Video Thumbnail with Play Button & Duration */}
                <div className="relative aspect-[16/10] w-full overflow-hidden bg-black/10">
                  <Image
                    src={vid.thumbnail}
                    alt={vid.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Play Button Overlay */}
                  <div className="absolute inset-0 flex items-center justify-center bg-black/30 group-hover:bg-black/20 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-white/90 border-2 border-[#C18A32] shadow-lg flex items-center justify-center text-[#650D1B] group-hover:scale-110 group-hover:bg-[#650D1B] group-hover:text-white transition-all">
                      <Play className="w-5 h-5 ml-0.5 fill-current" />
                    </div>
                  </div>

                  {/* Duration Badge Bottom Right */}
                  <span className="absolute bottom-2 right-2 bg-black/75 text-white text-[11px] font-mono font-semibold px-2 py-0.5 rounded shadow">
                    {vid.duration}
                  </span>
                </div>

                {/* Video Details */}
                <div className="p-5 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-serif text-lg font-bold text-[#650D1B] group-hover:text-[#4A101B]">
                      {vid.title}
                    </h3>
                    <p className="text-xs text-[#65564E] mt-1">{vid.subtitle}</p>
                  </div>
                  <span className="inline-flex items-center gap-1.5 text-xs font-bold text-[#C18A32] mt-3 group-hover:text-[#650D1B]">
                    <span>Watch Video</span>
                    <span>→</span>
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      </div>

      {/* Global Modals */}
      <GalleryLightbox
        isOpen={lightboxOpen}
        onClose={() => setLightboxOpen(false)}
        images={lightboxImages}
        currentIndex={lightboxIndex}
        onNext={() => setLightboxIndex((prev) => (prev + 1) % lightboxImages.length)}
        onPrev={() =>
          setLightboxIndex((prev) => (prev - 1 + lightboxImages.length) % lightboxImages.length)
        }
      />

      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
        video={selectedVideo}
      />
    </div>
  );
}
