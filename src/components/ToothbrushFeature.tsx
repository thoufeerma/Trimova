"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Shield, Cpu, Activity } from "lucide-react";
import { PRODUCTS } from "@/data/products";

// Bespoke clean vector icons matching reference design
const BristlesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Base bracket */}
    <path d="M9 20h6" />
    <path d="M12 20v-3" />
    <path d="M6 14h12" />
    {/* Bristle filaments */}
    <path d="M12 17V6" />
    <path d="M10 17l-3-8" />
    <path d="M14 17l3-8" />
    <path d="M8 17l-4-6" />
    <path d="M16 17l4-6" />
    {/* Rounded bristle tips */}
    <circle cx="12" cy="5" r="0.9" fill="currentColor" />
    <circle cx="7" cy="8.5" r="0.9" fill="currentColor" />
    <circle cx="17" cy="8.5" r="0.9" fill="currentColor" />
    <circle cx="4" cy="11" r="0.8" fill="currentColor" />
    <circle cx="20" cy="11" r="0.8" fill="currentColor" />
  </svg>
);

const GumsIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Tooth crown with molar lobes and root contour */}
    <path d="M12 4.5c-1.5-1.5-4-1.5-5.5.5C5 7 4.5 10.5 5.5 14c1 3.5 3 6.5 4.5 6.5 1 0 1.2-2 2-2s1 2 2 2c1.5 0 3.5-3 4.5-6.5 1-3.5.5-7-1-9-1.5-2-4-2-5.5-.5z" />
    {/* Inner protective gumline arch */}
    <path d="M8.5 11c2-1 5-1 7 0" />
    {/* Gentle pulse indicator */}
    <circle cx="12" cy="3" r="1" fill="currentColor" />
  </svg>
);

const GripIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Rounded ergonomic handle cap */}
    <path d="M10 4a2 2 0 0 1 4 0v3h-4V4z" />
    {/* Ergonomic handle body flare */}
    <path d="M10 7L6.5 18.5A2 2 0 0 0 8.4 21h7.2a2 2 0 0 0 1.9-2.5L14 7" />
    {/* Tactile grip diagonal & ridges */}
    <path d="M8.5 17.5l6-6" />
    <circle cx="12" cy="10" r="1" fill="currentColor" />
  </svg>
);

const ModesIcon = ({ className = "w-6 h-6" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    {/* Center core */}
    <circle cx="12" cy="12" r="1.5" fill="currentColor" />
    {/* 4 diagonal vibration frequency lobes */}
    <path d="M13.5 10.5c1.8-1.8 3.5-3.5 4.8-2.2 1.3 1.3-.4 3-2.2 4.8" />
    <path d="M13.5 13.5c1.8 1.8 3.5 3.5 2.2 4.8-1.3 1.3-3-.4-4.8-2.2" />
    <path d="M10.5 13.5c-1.8 1.8-3.5 3.5-4.8 2.2-1.3-1.3.4-3 2.2-4.8" />
    <path d="M10.5 10.5c-1.8-1.8-3.5-3.5-2.2-4.8 1.3-1.3 3 .4 4.8 2.2" />
  </svg>
);

interface ToothbrushFeatureProps {
  backgroundImage?: string;
}

export default function ToothbrushFeature({
  backgroundImage = "/images/banners/home/toothbrush_banner.png",
}: ToothbrushFeatureProps) {
  const toothbrushProduct = PRODUCTS[0]; // Trimova Pro

  const features = [
    {
      title: "Deep Cleaning Bristles",
      icon: BristlesIcon,
      desc: "Ultra-dense end-rounded bristles remove up to 10x more plaque.",
    },
    {
      title: "Gentle on Gums",
      icon: GumsIcon,
      desc: "Pressure sensor pulses if you press too firmly.",
    },
    {
      title: "Ergonomic Grip",
      icon: GripIcon,
      desc: "Balanced tactile finish engineered for effortless handling.",
    },
    {
      title: "Multiple Modes",
      icon: ModesIcon,
      desc: "5 tailored vibration modes from Sensitive to Deep Polish.",
    },
  ];

  return (
    <section
      id="toothbrushes"
      className="relative py-20 lg:py-32 bg-[#02050E] text-white overflow-hidden min-h-[640px] flex items-center"
    >
      {/* 1. Full Widescreen Background Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={backgroundImage}
          alt="Trimova Toothbrush Banner"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[20%_center] sm:object-[25%_center] lg:object-center select-none"
        />
        {/* Slight dark overlay over section image */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Subtle dark gradient on the right to guarantee text readability across all viewport widths */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#02050E]/40 to-[#02050E]/90 hidden lg:block" />
        <div className="absolute inset-0 bg-[#02050E]/75 lg:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Natural spacer so the high-res angled toothbrush head in the banner is completely visible */}
        <div className="hidden lg:block lg:col-span-5 min-h-[380px]" />

        {/* Right Column: Copy & Feature Grid */}
        <div className="lg:col-span-7 flex flex-col items-start lg:pl-4">
          <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/50 uppercase mb-3">
            <span>TOOTHBRUSHES</span>
            <span className="w-8 h-[1px] bg-white/30" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-5">
            A Deeper Clean for a{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6FC8FF] to-[#0047FF]">
              Healthier
            </span>{" "}
            You
          </h2>

          <p className="text-base sm:text-lg text-white/75 font-normal max-w-xl leading-relaxed mb-8">
            Engineered to remove plaque, care for your gums and give you a noticeably cleaner, fresher smile.
          </p>

          {/* 2x2 Feature Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 w-full max-w-xl mb-10">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-full bg-[#101D36]/85 border border-white/15 flex items-center justify-center shrink-0 text-[#E1F0FF] shadow-lg shadow-[#0047FF]/10 group-hover:border-white/30 group-hover:bg-[#152545] transition-colors">
                    <Icon className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-sm sm:text-base text-white leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-white/60 mt-1 leading-snug">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA Link */}
          <Link
            href="/toothbrushes"
            className="inline-flex items-center gap-2 bg-white text-black text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-white/10 group cursor-pointer"
          >
            Explore Toothbrushes
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
