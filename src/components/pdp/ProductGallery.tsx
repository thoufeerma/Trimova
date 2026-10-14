"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Play } from "lucide-react";
import { useCart } from "@/context/CartContext";

interface ProductGalleryProps {
  productName?: string;
  mainImage?: string;
}

export default function ProductGallery({
  productName = "Trimova Pro",
  mainImage,
}: ProductGalleryProps) {
  const { setIsVideoOpen } = useCart();
  const [activeThumb, setActiveThumb] = useState(0);

  const images = [
    {
      id: 0,
      src: mainImage || "/images/pdp_main_display.png",
      alt: `${productName} showcase`,
    },
    { id: 1, src: "/images/pdp_thumb_2.png", alt: "Close-up macro of dense DuPont bristles" },
    { id: 2, src: "/images/pdp_thumb_3.png", alt: "Trimova Pro handle showing 5 sonic cleaning modes" },
    { id: 3, src: "/images/pdp_thumb_4.png", alt: "Trimova Pro with sleek matte black travel case" },
    { id: 4, src: "/images/pdp_thumb_5.png", alt: "Watch Trimova Pro cinematic film", isVideo: true },
  ];

  const handleThumbClick = (index: number) => {
    if (images[index].isVideo) {
      setIsVideoOpen(true);
      return;
    }
    setActiveThumb(index);
  };

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-4 sm:gap-6 w-full">
      {/* 1. Vertical Thumbnail Strip (5 items on left) */}
      <div className="flex lg:flex-col gap-3 sm:gap-3.5 overflow-x-auto lg:overflow-visible pb-2 lg:pb-0 scrollbar-none shrink-0">
        {images.map((item, idx) => {
          const isSelected = activeThumb === idx && !item.isVideo;
          return (
            <button
              key={item.id}
              type="button"
              onClick={() => handleThumbClick(idx)}
              className={`relative w-16 h-16 sm:w-20 sm:h-20 lg:w-[84px] lg:h-[88px] rounded-xl overflow-hidden bg-[#F6F8FB] transition-all duration-200 cursor-pointer flex items-center justify-center border-2 ${
                isSelected
                  ? "border-[#0047FF] shadow-[0_0_12px_rgba(0,71,255,0.25)]"
                  : "border-transparent hover:border-gray-300"
              }`}
              aria-label={item.alt}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-contain p-1"
                sizes="88px"
              />

              {/* Play icon overlay on thumbnail 5 */}
              {item.isVideo && (
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center transition-colors hover:bg-black/40">
                  <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/40">
                    <Play className="w-3.5 h-3.5 fill-white text-white ml-0.5" />
                  </div>
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* 2. Main Large Product Display Card */}
      <div className="relative flex-1 aspect-[4/5] sm:aspect-[1/1] lg:aspect-[4/5] bg-[#F6F8FB] rounded-2xl lg:rounded-3xl overflow-hidden border border-gray-100 flex items-center justify-center group select-none">
        <Image
          src={images[activeThumb].src}
          alt={images[activeThumb].alt}
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
