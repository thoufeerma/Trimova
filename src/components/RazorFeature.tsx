"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Layers, Droplets, HeartHandshake, Sparkles } from "lucide-react";
import { PRODUCTS } from "@/data/products";

interface RazorFeatureProps {
  backgroundImage?: string;
}

export default function RazorFeature({
  backgroundImage = "/images/banners/home/razor_banner.png",
}: RazorFeatureProps) {
  const razorProduct = PRODUCTS[2]; // Trimova Precision Razor

  const razorFeatures = [
    {
      title: "Multi-Blade Technology",
      icon: Layers,
      desc: "5 diamond-coated Swedish steel blades.",
    },
    {
      title: "Smooth Glide Strip",
      icon: Droplets,
      desc: "Lubricating strip infused with aloe & Vitamin E.",
    },
    {
      title: "Skin Friendly",
      icon: HeartHandshake,
      desc: "Engineered to eliminate friction, bumps and burn.",
    },
    {
      title: "Ergonomic Handle",
      icon: Sparkles,
      desc: "Balanced weighted core with non-slip silicone grip.",
    },
  ];

  return (
    <section
      id="razors"
      className="relative py-20 lg:py-32 bg-[#F8FAFC] text-[#0A0D14] overflow-hidden min-h-[640px] flex items-center"
    >
      {/* 1. Full Widescreen Background Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={backgroundImage}
          alt="Razor section background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[78%_center] sm:object-[75%_center] lg:object-center select-none"
        />
        {/* Slight subtle dark overlay over section image */}
        <div className="absolute inset-0 bg-black/10" />
        {/* Soft white gradient on the left to guarantee optimal readability of dark text */}
        <div className="absolute inset-0 bg-gradient-to-r from-white via-white/85 to-transparent w-full lg:w-3/5 hidden lg:block" />
        <div className="absolute inset-0 bg-white/80 lg:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Copy & Feature Grid */}
        <div className="lg:col-span-7 flex flex-col items-start">
          <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-gray-500 uppercase mb-3">
            <span>RAZORS</span>
            <span className="w-8 h-[1px] bg-gray-300" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 leading-tight mb-5">
            A Smoother Shave, Every Day
          </h2>

          <p className="text-base sm:text-lg text-gray-600 font-normal max-w-xl leading-relaxed mb-8">
            Precision-engineered blades and a comfortable grip deliver a closer, smoother shave with less irritation.
          </p>

          {/* 4 Feature Cards (2x2 on small, 4 in grid on larger) */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-2xl mb-10">
            {razorFeatures.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="flex flex-col items-start p-3 sm:p-4 rounded-2xl bg-white/85 backdrop-blur-sm border border-gray-100 hover:border-gray-200 shadow-sm hover:shadow-md transition-all duration-200"
                >
                  <div className="w-9 h-9 rounded-xl bg-blue-50 text-[#0047FF] flex items-center justify-center shrink-0 border border-blue-100/50 mb-2">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="font-semibold text-xs sm:text-sm text-gray-900 leading-tight">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 mt-1 leading-snug">
                    {item.desc}
                  </p>
                </div>
              );
            })}
          </div>

          {/* CTA Link */}
          <Link
            href={`/toothbrushes/${razorProduct.id}`}
            className="inline-flex items-center gap-2 bg-[#06102B] text-white text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full hover:bg-[#0047FF] hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-gray-900/10 group cursor-pointer"
          >
            Explore Razors
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        {/* Right Column: Natural spacer allowing the 4K razor with droplets and fibre waves to be seen */}
        <div className="hidden lg:block lg:col-span-5 min-h-[380px]" />
      </div>
    </section>
  );
}
