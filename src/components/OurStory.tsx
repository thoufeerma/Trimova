"use client";

import React from "react";
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface OurStoryProps {
  backgroundImage?: string;
}

export default function OurStory({
  backgroundImage = "/images/banners/home/our_story_banner.png",
}: OurStoryProps) {
  return (
    <section
      id="our-story"
      className="relative py-20 lg:py-32 bg-[#02050D] text-white overflow-hidden min-h-[600px] flex items-center"
    >
      {/* 1. Full Widescreen Background Artwork */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Image
          src={backgroundImage}
          alt="Trimova Our Story background"
          fill
          priority
          sizes="100vw"
          className="object-cover object-[80%_center] sm:object-[75%_center] lg:object-center select-none"
        />
        {/* Slight dark overlay over section image */}
        <div className="absolute inset-0 bg-black/25" />
        {/* Soft dark gradient on the left so copy is ultra legible */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#02050D] via-[#02050D]/85 to-transparent w-full lg:w-3/5 hidden lg:block" />
        <div className="absolute inset-0 bg-[#02050D]/80 lg:hidden" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-8 w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
        {/* Left Column: Story Copy */}
        <div className="lg:col-span-6 flex flex-col items-start">
          <div className="inline-flex items-center gap-3 text-xs sm:text-sm font-semibold tracking-[0.25em] text-white/50 uppercase mb-3">
            <span>OUR STORY</span>
            <span className="w-8 h-[1px] bg-white/30" />
          </div>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight mb-6">
            More Than <br />Just Essentials
          </h2>

          <p className="text-base sm:text-lg text-white/75 font-normal max-w-xl leading-relaxed mb-10">
            At Trimova, we believe everyday grooming is a powerful part of self-confidence.
            Our range of toothbrushes and razors are thoughtfully designed to help you
            look, feel and perform your best — every day.
          </p>

          <a
            href="#footer"
            className="inline-flex items-center gap-2 bg-white text-black text-sm sm:text-base font-semibold px-8 py-3.5 rounded-full hover:bg-white/90 hover:scale-105 active:scale-95 transition-all duration-200 shadow-xl shadow-white/10 group cursor-pointer"
          >
            Our Story
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        </div>

        {/* Right Column: Natural spacer allowing the fresh shaved male profile in the banner to shine through */}
        <div className="hidden lg:block lg:col-span-6 min-h-[380px]" />
      </div>
    </section>
  );
}
