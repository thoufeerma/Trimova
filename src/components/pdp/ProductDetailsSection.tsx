"use client";

import React from "react";
import { Activity, BatteryCharging, Droplets } from "lucide-react";

export default function ProductDetailsSection() {
  const pillars = [
    {
      icon: <Activity className="w-6 h-6 text-[#0B3CD5] stroke-[2]" />,
      title: "Powerful Sonic Cleaning",
      desc: "40,000 sonic movements per minute to remove more plaque effectively.",
    },
    {
      icon: (
        <svg
          className="w-6 h-6 text-[#0B3CD5] stroke-[2]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4.5 9.5C3.5 13 4 17 6.5 19.5c1.5 1.5 3 1.5 4-0.5l1.5-3 1.5 3c1 2 2.5 2 4 0.5 2.5-2.5 3-6.5 2-10-1-3.5-3.5-5.5-7.5-5.5s-6.5 2-7.5 5.5z" />
        </svg>
      ),
      title: "Multiple Cleaning Modes",
      desc: "Choose from Clean, White, Sensitive, Polish and Massage to match your needs.",
    },
    {
      icon: <BatteryCharging className="w-6 h-6 text-[#0B3CD5] stroke-[2]" />,
      title: "Long-Lasting Battery",
      desc: "Up to 30 days of use on a single charge.",
    },
    {
      icon: <Droplets className="w-6 h-6 text-[#0B3CD5] stroke-[2]" />,
      title: "Waterproof Design",
      desc: "IPX7 rated for safe use in the shower.",
    },
  ];

  return (
    <section className="w-full border-t border-gray-200 pt-16 sm:pt-20 mt-16 sm:mt-24 pb-12">
      {/* 1. Category Eyebrow */}
      <span className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-4 block">
        PRODUCT DETAILS
      </span>

      {/* 2. Two-Column Header */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start mb-16 sm:mb-20">
        <div className="lg:col-span-6">
          <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-bold text-gray-900 leading-[1.15] tracking-tight">
            Designed for <br />
            a cleaner, healthier you.
          </h2>
        </div>

        <div className="lg:col-span-6">
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed max-w-xl">
            Trimova Pro is an advanced electric toothbrush designed to remove plaque, care for your gums and give you a noticeably cleaner, fresher smile. With multiple cleaning modes and a long-lasting battery, it fits seamlessly into your everyday routine.
          </p>
        </div>
      </div>

      {/* 3. 4-Pillar Features Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
        {pillars.map((pillar, idx) => (
          <div
            key={idx}
            className={`flex flex-col items-start ${
              idx !== 0 ? "lg:border-l lg:border-gray-200 lg:pl-6" : ""
            }`}
          >
            <div className="mb-4 p-2.5 rounded-xl bg-blue-50/70 inline-flex items-center justify-center">
              {pillar.icon}
            </div>

            <h3 className="text-base font-bold text-gray-900 mb-2 leading-snug">
              {pillar.title}
            </h3>

            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              {pillar.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
