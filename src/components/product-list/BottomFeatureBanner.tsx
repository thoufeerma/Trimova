"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function BottomFeatureBanner() {
  const { setIsVideoOpen } = useCart();

  return (
    <div className="relative w-full rounded-2xl sm:rounded-3xl bg-[#01040D] border border-white/10 overflow-hidden shadow-2xl text-white my-12 lg:my-16 min-h-[360px] sm:min-h-[420px] lg:min-h-[450px] flex items-center">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/banners/engineered for deeper clean.png"
          alt="Trimova engineered for a deeper clean"
          fill
          priority
          sizes="(max-width: 1280px) 100vw, 1280px"
          className="object-cover object-left lg:object-center select-none"
        />
        {/* Subtle overlays to enhance text contrast on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#01040D]/30 to-[#01040D]/85 hidden lg:block pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01040D] via-[#01040D]/60 to-transparent lg:hidden pointer-events-none" />
      </div>

      {/* Feature Content on the Right */}
      <div className="relative z-10 w-full px-6 py-10 sm:px-10 sm:py-14 lg:px-14 flex justify-end">
        <div className="w-full lg:max-w-lg flex flex-col items-start bg-[#01040D]/40 lg:bg-transparent backdrop-blur-sm lg:backdrop-blur-none p-6 sm:p-8 lg:p-0 rounded-2xl border border-white/10 lg:border-none">
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/60 uppercase mb-3">
            ADVANCED BRISTLES
          </span>

          <h2 className="text-2xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-white leading-[1.1] mb-4">
            Engineered <br className="hidden sm:inline" />
            for a Deeper Clean
          </h2>

          <p className="text-sm sm:text-base text-white/75 font-normal leading-relaxed max-w-md mb-8">
            High-density, end-rounded bristles designed to remove plaque effectively while being gentle on gums.
          </p>

          <button
            onClick={() => setIsVideoOpen(true)}
            className="inline-flex items-center gap-2 bg-white text-gray-900 font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 text-xs sm:text-sm shadow-lg shadow-white/10 group cursor-pointer"
          >
            <span>Learn More</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>
      </div>
    </div>
  );
}
