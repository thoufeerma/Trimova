"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, Activity, BatteryCharging, Layers, Droplets, Sparkles } from "lucide-react";
import { Product } from "@/types";

interface ProductInfoProps {
  product: Product;
}

export default function ProductInfo({ product }: ProductInfoProps) {
  const isRazor =
    product.category === "razor" ||
    product.name.toLowerCase().includes("razor") ||
    product.name.toLowerCase().includes("blade");

  const colors = isRazor
    ? [
        { id: "silver", name: "Matte Silver", hex: "#E5E7EB" },
        { id: "black", name: "Midnight Black", hex: "#111111" },
        { id: "gunmetal", name: "Gunmetal Blue", hex: "#1E293B" },
      ]
    : [
        { id: "blue", name: "Midnight Blue", hex: "#0B3CD5" },
        { id: "black", name: "Midnight Black", hex: "#111111" },
        { id: "white", name: "Crisp White", hex: "#FFFFFF" },
      ];

  const [selectedColor, setSelectedColor] = useState(colors[0]);

  const includedItems = isRazor
    ? [
        {
          name: "Precision Razor Handle",
          image: "/razor/pomelli_photoshoot-1.png",
        },
        {
          name: "5-Blade Cartridge",
          image: "/razor/pomelli_photoshoot-2.png",
        },
        {
          name: "Magnetic Stand / Dock",
          image: "/razor/pomelli_photoshoot-3.png",
        },
        {
          name: "Travel Blade Shield",
          image: "/razor/pomelli_photoshoot-4.png",
        },
      ]
    : [
        {
          name: "Trimova Pro Handle",
          image: "/brush/pomelli_photoshoot-1.png",
        },
        {
          name: "Brush Head (1 attached)",
          image: "/brush/pomelli_photoshoot-2.png",
        },
        {
          name: "Travel Case",
          image: "/brush/pomelli_photoshoot-3.png",
        },
        {
          name: "USB-C Charging Cable",
          image: "/images/pdp_inc_cable.png",
        },
      ];

  return (
    <div className="flex flex-col text-gray-900">
      {/* 1. Category Eyebrow */}
      <span className="text-xs font-semibold tracking-[0.25em] text-gray-400 uppercase mb-2">
        {product.category || (isRazor ? "RAZOR" : "TOOTHBRUSH")}
      </span>

      {/* 2. Product Title */}
      <h1 className="text-3xl sm:text-4xl lg:text-[42px] font-bold tracking-tight text-gray-900 leading-tight mb-2.5">
        {product.name}
      </h1>

      {/* 3. Star Rating Row */}
      <div className="flex items-center gap-1.5 mb-4">
        <div className="flex items-center gap-1 text-[#0B3CD5]">
          {[...Array(5)].map((_, i) => (
            <Star key={i} className="w-4 h-4 fill-[#0B3CD5] text-[#0B3CD5]" />
          ))}
        </div>
        <span className="text-xs sm:text-sm font-medium text-gray-500 ml-1">
          4.8 (1.2K reviews)
        </span>
      </div>

      {/* 4. Description */}
      <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed max-w-xl mb-4">
        {product.description}
      </p>

      {/* 5. Price Display */}
      <div className="flex items-baseline gap-3 mb-6">
        <span className="text-3xl sm:text-4xl font-extrabold text-gray-900 tracking-tight">
          ₹{product.price.toLocaleString("en-IN")}
        </span>
        {product.originalPrice && (
          <>
            <span className="text-lg text-gray-400 line-through">
              ₹{product.originalPrice.toLocaleString("en-IN")}
            </span>
            <span className="text-xs font-bold text-emerald-700 bg-emerald-50 border border-emerald-200/60 px-2.5 py-0.5 rounded-full uppercase tracking-wider">
              Save {Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)}%
            </span>
          </>
        )}
      </div>

      {/* 6. Color Selection */}
      <div className="mb-8">
        <div className="text-xs sm:text-sm font-semibold text-gray-900 mb-3">
          Color: <span className="font-normal text-gray-600">{selectedColor.name}</span>
        </div>
        <div className="flex items-center gap-3">
          {colors.map((color) => {
            const isSelected = selectedColor.id === color.id;
            const isWhite = color.hex === "#FFFFFF";
            return (
              <button
                key={color.id}
                type="button"
                onClick={() => setSelectedColor(color)}
                className={`w-7 h-7 rounded-full transition-all cursor-pointer relative flex items-center justify-center ${
                  isSelected
                    ? "ring-2 ring-offset-2 ring-[#0047FF] scale-110"
                    : "hover:scale-105 opacity-85 hover:opacity-100"
                } ${isWhite ? "border border-gray-300" : ""}`}
                style={{ backgroundColor: color.hex }}
                aria-label={color.name}
              />
            );
          })}
        </div>
      </div>

      {/* 7. Key Specs Bar (3 Columns with Dividers) */}
      <div className="grid grid-cols-3 border-y border-gray-200 py-6 mb-8 text-center sm:text-left">
        {/* Col 1 */}
        <div className="flex flex-col items-center sm:items-start px-2 sm:px-4 border-r border-gray-200 first:pl-0">
          {isRazor ? (
            <Layers className="w-5 h-5 text-gray-800 mb-2 stroke-[1.75]" />
          ) : (
            <Activity className="w-5 h-5 text-gray-800 mb-2 stroke-[1.75]" />
          )}
          <span className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
            {isRazor ? "5 Blades" : "40,000"}
          </span>
          <span className="text-[11px] sm:text-xs text-gray-500 leading-tight mt-1">
            {isRazor ? (
              <>Swedish diamond <br className="hidden sm:inline" />steel</>
            ) : (
              <>sonic movements <br className="hidden sm:inline" />per minute</>
            )}
          </span>
        </div>

        {/* Col 2 */}
        <div className="flex flex-col items-center sm:items-start px-2 sm:px-4 border-r border-gray-200">
          {isRazor ? (
            <Droplets className="w-5 h-5 text-gray-800 mb-2 stroke-[1.75]" />
          ) : (
            <svg
              className="w-5 h-5 text-gray-800 mb-2 stroke-[1.75]"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.75"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4.5 9.5C3.5 13 4 17 6.5 19.5c1.5 1.5 3 1.5 4-0.5l1.5-3 1.5 3c1 2 2.5 2 4 0.5 2.5-2.5 3-6.5 2-10-1-3.5-3.5-5.5-7.5-5.5s-6.5 2-7.5 5.5z" />
            </svg>
          )}
          <span className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
            {isRazor ? "Aloe & Vit E" : "5"}
          </span>
          <span className="text-[11px] sm:text-xs text-gray-500 leading-tight mt-1">
            {isRazor ? (
              <>comfort glide <br className="hidden sm:inline" />strip</>
            ) : (
              <>cleaning <br className="hidden sm:inline" />modes</>
            )}
          </span>
        </div>

        {/* Col 3 */}
        <div className="flex flex-col items-center sm:items-start px-2 sm:px-4 last:pr-0">
          {isRazor ? (
            <Sparkles className="w-5 h-5 text-gray-800 mb-2 stroke-[1.75]" />
          ) : (
            <BatteryCharging className="w-5 h-5 text-gray-800 mb-2 stroke-[1.75]" />
          )}
          <span className="text-base sm:text-lg font-bold text-gray-900 leading-tight">
            {isRazor ? "Weighted" : "Up to 30 days"}
          </span>
          <span className="text-[11px] sm:text-xs text-gray-500 leading-tight mt-1">
            {isRazor ? (
              <>aircraft-grade <br className="hidden sm:inline" />aluminum core</>
            ) : (
              <>battery <br className="hidden sm:inline" />life</>
            )}
          </span>
        </div>
      </div>


      {/* 9. "What's included" Section */}
      <div>
        <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-4">
          What&apos;s included
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4">
          {includedItems.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col items-center text-center p-3 sm:p-4 rounded-2xl bg-[#F6F8FB] border border-gray-100"
            >
              <div className="relative w-12 h-14 sm:w-14 sm:h-16 mb-2">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-[11px] sm:text-xs font-semibold text-gray-800 leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
