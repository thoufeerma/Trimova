"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

export default function ToothbrushHero() {
  return (
    <section className="relative w-full bg-[#01030A] text-white pt-24 sm:pt-28 pb-12 lg:pb-16 overflow-hidden">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src="/images/banners/home/bottom_banner.png"
          alt="Trimova Toothbrushes Banner Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center select-none"
        />
        {/* Dark overlays to maintain high contrast and clean edges */}
        <div className="absolute inset-0 bg-[#01030A]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#01030A] via-transparent to-[#01030A]/30" />
      </div>

      {/* Subtle background ambient glow */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[500px] h-[350px] bg-[#0047FF]/20 blur-[120px] rounded-full pointer-events-none z-0" />
      <div className="absolute -bottom-20 left-10 w-[300px] h-[200px] bg-[#0B3CD5]/15 blur-[90px] rounded-full pointer-events-none z-0" />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8 z-10">
        <div className="max-w-2xl flex flex-col items-start">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-1.5 text-xs sm:text-sm text-white/50 mb-6 font-medium">
            <Link
              href="/"
              className="hover:text-white transition-colors cursor-pointer"
            >
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-white/30" />
            <span className="text-white/80">Toothbrushes</span>
          </nav>

          {/* Category Eyebrow */}
          <span className="text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/60 uppercase mb-3">
            TOOTHBRUSHES
          </span>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] sm:leading-[1.08] mb-5">
            A Cleaner
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-sky-300 to-[#6FC8FF]">
              Smile Every Day
            </span>
          </h1>

          {/* Subtitle / Description */}
          <p className="text-base sm:text-lg text-white/75 font-normal max-w-xl leading-relaxed">
            Thoughtfully designed toothbrushes for a deeper clean, healthier gums and a more confident you.
          </p>
        </div>
      </div>
    </section>
  );
}
