"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  productName?: string;
  category?: string;
  mainImage?: string;
  gallery?: string[];
}

const BRUSH_GALLERY = [
  "/brush/pomelli_photoshoot-1.png",
  "/brush/pomelli_photoshoot-2.png",
  "/brush/pomelli_photoshoot-3.png",
];

const RAZOR_GALLERY = [
  "/razor/pomelli_photoshoot-1.png",
  "/razor/pomelli_photoshoot-2.png",
  "/razor/pomelli_photoshoot-3.png",
  "/razor/pomelli_photoshoot-4.png",
];

export default function ProductGallery({
  productName = "Trimova Pro",
  category,
  mainImage,
  gallery,
}: ProductGalleryProps) {
  const isRazor =
    category === "razor" ||
    productName.toLowerCase().includes("razor") ||
    productName.toLowerCase().includes("blade");

  const defaultList = isRazor ? RAZOR_GALLERY : BRUSH_GALLERY;
  const imageList = gallery && gallery.length > 0 ? gallery : defaultList;

  // Determine starting active thumbnail
  const initialIndex = mainImage ? imageList.findIndex((src) => src === mainImage) : 0;
  const [activeThumb, setActiveThumb] = useState(initialIndex >= 0 ? initialIndex : 0);

  // Sync active thumbnail when mainImage, category, or gallery changes
  useEffect(() => {
    if (mainImage) {
      const idx = imageList.findIndex((src) => src === mainImage);
      if (idx >= 0) {
        setActiveThumb(idx);
        return;
      }
    }
    setActiveThumb(0);
  }, [mainImage, category, gallery]);

  const activeSrc = imageList[activeThumb] || imageList[0] || "/brush/pomelli_photoshoot-1.png";

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-6 w-full">
      {/* 1. Vertical Thumbnail Strip (left on desktop, horizontal scroll on mobile) */}
      <div className="flex lg:flex-col gap-3 sm:gap-3.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none shrink-0">
        {imageList.map((imgSrc, idx) => {
          const isSelected = activeThumb === idx;
          return (
            <button
              key={`${imgSrc}-${idx}`}
              type="button"
              onClick={() => setActiveThumb(idx)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[84px] lg:h-[88px] rounded-xl overflow-hidden bg-[#F6F8FB] transition-all duration-200 cursor-pointer flex items-center justify-center border-2 ${
                isSelected
                  ? "border-[#0047FF] shadow-[0_0_12px_rgba(0,71,255,0.25)] scale-[1.02]"
                  : "border-transparent hover:border-gray-300 opacity-80 hover:opacity-100"
              }`}
              aria-label={`${productName} thumbnail ${idx + 1}`}
            >
              <Image
                src={imgSrc}
                alt={`${productName} view ${idx + 1}`}
                fill
                className="object-contain p-1.5"
                sizes="88px"
              />
            </button>
          );
        })}
      </div>

      {/* 2. Main Large Product Display Card */}
      <div className="relative flex-1 aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] bg-[#F6F8FB] rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center group select-none">
        <Image
          key={activeSrc}
          src={activeSrc}
          alt={`${productName} showcase`}
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 50vw"
          className="object-contain transition-transform duration-500 ease-out group-hover:scale-[1.02]"
        />

        {/* Ambient subtle lighting highlight */}
        <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/[0.03] to-transparent" />
      </div>
    </div>
  );
}
