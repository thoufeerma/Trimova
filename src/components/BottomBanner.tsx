"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface BottomBannerProps {
  backgroundImage?: string;
}

export default function BottomBanner({
  backgroundImage = "/images/banners/home/bottom_banner.png",
}: BottomBannerProps) {
  return (
    <section className="py-12 sm:py-16 bg-[#FFFFFF]">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="relative rounded-3xl sm:rounded-[32px] overflow-hidden bg-[#030712] min-h-[220px] sm:min-h-[260px] flex items-center justify-between p-6 sm:p-10 lg:p-14 shadow-2xl shadow-blue-950/20">
          {/* Full background image with blue fibre splash on left */}
          <div className="absolute inset-0 z-0 pointer-events-none">
            <Image
              src={backgroundImage}
              alt="Electric blue fibre splash background"
              fill
              sizes="(max-width: 1280px) 100vw, 1280px"
              className="object-cover object-left select-none"
            />
            {/* Slight dark overlay over banner image */}
            <div className="absolute inset-0 bg-black/25" />
            {/* Subtle dark gradient overlay on the right for text contrast */}
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#030712]/50 to-[#030712]/95 hidden sm:block" />
            <div className="absolute inset-0 bg-[#030712]/75 sm:hidden" />
          </div>

          {/* Electric blue glow highlight */}
          <div className="absolute -left-10 top-1/2 -translate-y-1/2 w-72 h-72 bg-[#0047FF]/35 rounded-full blur-[90px] pointer-events-none" />

          {/* Content (Right aligned in the banner matching mockup) */}
          <div className="relative z-10 ml-auto flex flex-col items-start lg:items-end text-left lg:text-right max-w-md">
            <div className="inline-flex items-center gap-2 text-xs font-semibold tracking-[0.25em] text-white/50 uppercase mb-2">
              <span>TRIMOVA</span>
              <span className="w-6 h-[1px] bg-white/30" />
            </div>

            <h2 className="text-2xl sm:text-4xl font-bold tracking-tight text-white leading-tight mb-5">
              Enhance Your <br className="hidden sm:block" />Everyday Routine
            </h2>

            <Link
              href="/toothbrushes"
              className="inline-flex items-center gap-2 bg-white text-black text-sm sm:text-base font-semibold px-7 py-3 rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-black/40 group cursor-pointer"
            >
              Explore Catalog
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
