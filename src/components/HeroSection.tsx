"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Play, Sparkles, ShieldCheck, Award, ArrowDown } from "lucide-react";
import FibreArc from "@/components/FibreArc";
import { useCart } from "@/context/CartContext";

export default function HeroSection() {
  const { setIsVideoOpen } = useCart();
  const [activeSlide, setActiveSlide] = useState(0);

  const heroSlides = [
    {
      tag: "TRIMOVA —",
      title: "Enhance",
      subtitle: "Your Confidence",
      desc: "Thoughtfully designed oral and grooming essentials for a cleaner, sharper, more confident you.",
    },
    {
      tag: "ORAL CARE —",
      title: "Sonic Precision",
      subtitle: "For Healthier Gums",
      desc: "40,000 sonic vibrations per minute designed for deeper, gentle, restorative cleaning.",
    },
    {
      tag: "GROOMING —",
      title: "Closer Shave",
      subtitle: "Zero Irritation",
      desc: "Swedish stainless steel five-blade geometry crafted for effortless everyday glide.",
    },
  ];

  return (
    <section className="relative min-h-[92vh] lg:min-h-screen w-full bg-[#01030A] flex flex-col justify-between overflow-hidden pt-20 lg:pt-0">
      {/* 1. Full Hero Banner Image (Banners/Home/hero.png) */}
      <div className="absolute inset-0 z-0 pointer-events-auto">
        <Image
          src="/images/banners/home/hero_clean_v2.png"
          alt="Trimova Hero Background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[22%_center] sm:object-[28%_center] lg:object-center select-none"
        />

        {/* Slight tiny dark tint overlay over hero image */}
        <div className="absolute inset-0 bg-black/25 pointer-events-none" />

        {/* 2. WebGL Fibre Arc (Behind / Overlaying with Screen blend for interactive cursor response) */}
        <div className="absolute inset-0 opacity-70 mix-blend-screen pointer-events-none">
          <FibreArc
            style={{ width: "100%", height: "100%", minWidth: "100%", minHeight: "100%" }}
          />
        </div>

        {/* Radial vignette for depth and text legibility on right */}
        <div className="absolute inset-0 bg-radial-gradient from-transparent via-transparent to-[#01030A]/60 pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#01030A]/70 hidden lg:block pointer-events-none" />
        <div className="absolute bottom-0 left-0 right-0 h-36 bg-gradient-to-t from-[#01030A] to-transparent pointer-events-none" />
      </div>

      {/* 3. Hero Content Grid */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full my-auto py-12 lg:py-20 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center pointer-events-none">
        {/* Left Column: Spacer letting the 4K products on rocks in hero.png shine through */}
        <div className="lg:col-span-6 min-h-[260px] sm:min-h-[380px] lg:min-h-[540px] flex items-center justify-center relative order-2 lg:order-1 pointer-events-auto">
          {/* Ambient electric blue atmospheric glow */}
          <div className="w-72 h-72 sm:w-96 sm:h-96 bg-[#0047FF]/20 rounded-full blur-[100px] pointer-events-none" />
        </div>

        {/* Right Column: Hero Typography & CTAs */}
        <div className="lg:col-span-6 flex flex-col items-start lg:pl-6 xl:pl-10 order-1 lg:order-2">
          {/* Subtitle / Brand Tag */}
          <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-medium tracking-[0.25em] text-white/60 uppercase mb-3">
            <span>{heroSlides[activeSlide].tag}</span>
            <span className="w-8 h-[1px] bg-white/30" />
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-white leading-[1.05] sm:leading-[1.08] mb-5 select-none">
            {heroSlides[activeSlide].title}
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-blue-100 to-[#6FC8FF]">
              {heroSlides[activeSlide].subtitle}
            </span>
          </h1>

          {/* Description */}
          <p className="text-base sm:text-lg text-white/75 font-normal max-w-lg leading-relaxed mb-8">
            {heroSlides[activeSlide].desc}
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-4 mb-12 sm:mb-14 pointer-events-auto">
            <Link
              href="/toothbrushes"
              className="inline-flex items-center gap-2 bg-white text-black text-sm sm:text-base font-semibold px-7 py-3.5 rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-lg shadow-white/10 group cursor-pointer"
            >
              Explore Collection
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>

            <button
              onClick={() => setIsVideoOpen(true)}
              className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/15 active:bg-white/20 text-white text-sm sm:text-base font-medium px-6 py-3.5 rounded-full border border-white/20 backdrop-blur-md transition-all duration-200 hover:border-white/40 cursor-pointer"
            >
              <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                <Play className="w-3 h-3 fill-white ml-0.5" />
              </div>
              Watch the Film
            </button>
          </div>

          {/* Mini Features Grid */}
          <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-white/10 w-full max-w-lg">
            <div className="flex items-center gap-2.5">
              <Sparkles className="w-4 h-4 text-[#6FC8FF] shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-white/90 leading-tight">
                Modern Design
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-[#6FC8FF] shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-white/90 leading-tight">
                Everyday Confidence
              </span>
            </div>
            <div className="flex items-center gap-2.5">
              <Award className="w-4 h-4 text-[#6FC8FF] shrink-0" />
              <span className="text-xs sm:text-sm font-medium text-white/90 leading-tight">
                Premium Quality
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* 3. Bottom Bar: Slider Navigation & Scroll Down Indicator */}
      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full pb-6 lg:pb-8 flex items-center justify-between text-xs font-mono tracking-wider text-white/50 pointer-events-none">
        {/* Slider Controls */}
        <div className="flex items-center gap-3 pointer-events-auto">
          <span className="text-white/80 font-bold">
            0{activeSlide + 1} <span className="text-white/40 font-normal">/ 03</span>
          </span>
          <div className="flex items-center gap-1.5 ml-2">
            {[0, 1, 2].map((idx) => (
              <button
                key={idx}
                onClick={() => setActiveSlide(idx)}
                className={`h-1 transition-all duration-300 rounded-full ${
                  activeSlide === idx
                    ? "w-8 bg-[#0047FF] shadow-[0_0_8px_#0047FF]"
                    : "w-4 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Scroll Indicator */}
        <a
          href="#products"
          className="flex items-center gap-2 text-white/60 hover:text-white transition-colors cursor-pointer group pointer-events-auto"
        >
          <span className="tracking-[0.2em] uppercase text-[11px]">SCROLL</span>
          <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
        </a>
      </div>
    </section>
  );
}
