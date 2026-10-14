"use client";

import React from "react";
import { Compass, ShieldCheck, Award, Heart } from "lucide-react";

export default function TrustBadges() {
  const badges = [
    {
      icon: Compass,
      title: "Precision Engineered",
      subtitle: "Sonic tech & Swedish steel",
    },
    {
      icon: ShieldCheck,
      title: "Expert Approved",
      subtitle: "Dentist & grooming tested",
    },
    {
      icon: Award,
      title: "Premium Materials",
      subtitle: "Aerospace finish & skin-safe",
    },
    {
      icon: Heart,
      title: "Trusted by Thousands",
      subtitle: "Loved across the country",
    },
  ];

  return (
    <section className="py-10 bg-[#FFFFFF] border-y border-gray-100 text-gray-900">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {badges.map((badge) => {
            const Icon = badge.icon;
            return (
              <div
                key={badge.title}
                className="flex items-center gap-3.5 sm:gap-4 group"
              >
                <div className="w-11 h-11 rounded-2xl bg-[#F4F6F9] group-hover:bg-[#0047FF]/10 text-gray-900 group-hover:text-[#0047FF] flex items-center justify-center shrink-0 transition-colors duration-200">
                  <Icon className="w-5 h-5 stroke-[1.75]" />
                </div>
                <div>
                  <h3 className="font-semibold text-xs sm:text-sm text-gray-900 leading-tight">
                    {badge.title}
                  </h3>
                  <p className="text-[11px] sm:text-xs text-gray-500 mt-0.5 leading-tight">
                    {badge.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
