"use client";

import React, { useState } from "react";
import { ChevronUp, ChevronDown, Check } from "lucide-react";

export interface FilterState {
  productTypes: string[];
  features: string[];
  maxPrice: number;
  selectedColor: string | null;
}

interface FilterSidebarProps {
  filters: FilterState;
  setFilters: React.Dispatch<React.SetStateAction<FilterState>>;
  counts: {
    productTypes: Record<string, number>;
    features: Record<string, number>;
  };
  onClearAll: () => void;
  className?: string;
}

export default function FilterSidebar({
  filters,
  setFilters,
  counts,
  onClearAll,
  className = "",
}: FilterSidebarProps) {
  // Collapsible accordion section toggles
  const [openSections, setOpenSections] = useState({
    productType: true,
    features: true,
    priceRange: true,
    color: true,
  });

  const toggleSection = (section: keyof typeof openSections) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleProductTypeToggle = (type: string) => {
    setFilters((prev) => {
      const exists = prev.productTypes.includes(type);
      return {
        ...prev,
        productTypes: exists
          ? prev.productTypes.filter((t) => t !== type)
          : [...prev.productTypes, type],
      };
    });
  };

  const handleFeatureToggle = (feature: string) => {
    setFilters((prev) => {
      const exists = prev.features.includes(feature);
      return {
        ...prev,
        features: exists
          ? prev.features.filter((f) => f !== feature)
          : [...prev.features, feature],
      };
    });
  };

  const handleColorToggle = (colorHex: string) => {
    setFilters((prev) => ({
      ...prev,
      selectedColor: prev.selectedColor === colorHex ? null : colorHex,
    }));
  };

  const hasActiveFilters =
    filters.productTypes.length > 0 ||
    filters.features.length > 0 ||
    filters.maxPrice < 2999 ||
    filters.selectedColor !== null;

  return (
    <aside className={`w-full ${className}`}>
      {/* Filter Header */}
      <div className="flex items-center justify-between pb-4 border-b border-gray-200">
        <h2 className="text-lg font-bold text-gray-900 tracking-tight">Filter</h2>
        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClearAll}
            className="text-xs font-semibold text-gray-500 hover:text-gray-900 transition-colors cursor-pointer"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Accordion 1: Product Type */}
      <div className="py-5 border-b border-gray-200">
        <button
          type="button"
          onClick={() => toggleSection("productType")}
          className="w-full flex items-center justify-between text-sm font-bold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
        >
          <span>Product Type</span>
          {openSections.productType ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {openSections.productType && (
          <div className="mt-4 space-y-3">
            {[
              { id: "Electric Toothbrush", label: "Electric Toothbrush" },
              { id: "Brush Heads", label: "Brush Heads" },
            ].map(({ id, label }) => {
              const isChecked = filters.productTypes.includes(id);
              const count = counts.productTypes[id] || 0;
              return (
                <label
                  key={id}
                  className="flex items-center justify-between text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-gray-900 border-gray-900 text-white"
                          : "border-gray-300 bg-white group-hover:border-gray-500"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{label}</span>
                  </div>
                  <span className="text-gray-400 text-xs">({count})</span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isChecked}
                    onChange={() => handleProductTypeToggle(id)}
                  />
                </label>
              );
            })}
          </div>
        )}
      </div>

      {/* Accordion 2: Features */}
      <div className="py-5 border-b border-gray-200">
        <button
          type="button"
          onClick={() => toggleSection("features")}
          className="w-full flex items-center justify-between text-sm font-bold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
        >
          <span>Features</span>
          {openSections.features ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {openSections.features && (
          <div className="mt-4 space-y-3">
            {[
              { id: "Deep Cleaning", label: "Deep Cleaning" },
              { id: "Sensitive Care", label: "Sensitive Care" },
              { id: "Travel Friendly", label: "Travel Friendly" },
              { id: "Multiple Modes", label: "Multiple Modes" },
            ].map(({ id, label }) => {
              const isChecked = filters.features.includes(id);
              const count = counts.features[id] || 0;
              return (
                <label
                  key={id}
                  className="flex items-center justify-between text-xs sm:text-sm text-gray-700 hover:text-gray-900 cursor-pointer select-none group"
                >
                  <div className="flex items-center gap-2.5">
                    <div
                      className={`w-4 h-4 rounded border flex items-center justify-center transition-colors ${
                        isChecked
                          ? "bg-gray-900 border-gray-900 text-white"
                          : "border-gray-300 bg-white group-hover:border-gray-500"
                      }`}
                    >
                      {isChecked && <Check className="w-3 h-3 stroke-[3]" />}
                    </div>
                    <span>{label}</span>
                  </div>
                  <span className="text-gray-400 text-xs">({count})</span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={isChecked}
                    onChange={() => handleFeatureToggle(id)}
                  />
                </label>
              );
            })}
          </div>
        )}
      </div>


      {/* Accordion 3: Price Range */}
      <div className="py-5 border-b border-gray-200">
        <button
          type="button"
          onClick={() => toggleSection("priceRange")}
          className="w-full flex items-center justify-between text-sm font-bold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
        >
          <span>Price Range</span>
          {openSections.priceRange ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {openSections.priceRange && (
          <div className="mt-4">
            {/* Visual Slider */}
            <div className="relative flex items-center w-full my-4">
              <input
                type="range"
                min="599"
                max="2999"
                step="100"
                value={filters.maxPrice}
                onChange={(e) =>
                  setFilters((prev) => ({
                    ...prev,
                    maxPrice: Number(e.target.value),
                  }))
                }
                className="w-full h-1.5 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-gray-900 focus:outline-none"
              />
            </div>

            {/* Price values display */}
            <div className="flex items-center justify-between text-xs sm:text-sm font-semibold text-gray-800">
              <span>₹599</span>
              <span>—</span>
              <span>₹{filters.maxPrice.toLocaleString("en-IN")}</span>
            </div>
          </div>
        )}
      </div>

      {/* Accordion 4: Color */}
      <div className="py-5">
        <button
          type="button"
          onClick={() => toggleSection("color")}
          className="w-full flex items-center justify-between text-sm font-bold text-gray-900 hover:text-gray-700 transition-colors cursor-pointer"
        >
          <span>Color</span>
          {openSections.color ? (
            <ChevronUp className="w-4 h-4 text-gray-500" />
          ) : (
            <ChevronDown className="w-4 h-4 text-gray-500" />
          )}
        </button>

        {openSections.color && (
          <div className="mt-4 flex items-center gap-3">
            {[
              { hex: "#0B3CD5", name: "Royal Blue" },
              { hex: "#111111", name: "Midnight Black" },
              { hex: "#FFFFFF", name: "Crisp White" },
            ].map(({ hex, name }) => {
              const isSelected = filters.selectedColor === hex;
              const isWhite = hex === "#FFFFFF";
              return (
                <button
                  key={hex}
                  type="button"
                  title={name}
                  onClick={() => handleColorToggle(hex)}
                  className={`w-7 h-7 rounded-full transition-all cursor-pointer relative flex items-center justify-center ${
                    isSelected
                      ? "ring-2 ring-offset-2 ring-[#0047FF] scale-110"
                      : "hover:scale-105"
                  } ${isWhite ? "border border-gray-300" : ""}`}
                  style={{ backgroundColor: hex }}
                  aria-label={name}
                >
                  {isSelected && (
                    <span
                      className={`w-1.5 h-1.5 rounded-full ${
                        isWhite ? "bg-gray-900" : "bg-white"
                      }`}
                    />
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>
    </aside>
  );
}
