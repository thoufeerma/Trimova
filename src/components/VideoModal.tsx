"use client";

import React from "react";
import { X, Play, Volume2, Sparkles } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function VideoModal() {
  const { isVideoOpen, setIsVideoOpen } = useCart();

  if (!isVideoOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        onClick={() => setIsVideoOpen(false)}
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
      />

      {/* Video Dialog */}
      <div className="relative w-full max-w-4xl bg-[#01030A] text-white rounded-3xl border border-white/15 shadow-2xl overflow-hidden z-10 my-8">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-[#6FC8FF]" />
            <h3 className="font-bold text-base sm:text-lg">
              Trimova — The Art of Confidence (Brand Film)
            </h3>
          </div>
          <button
            onClick={() => setIsVideoOpen(false)}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close video"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Video Canvas / Showcase Screen */}
        <div className="relative aspect-video bg-[#050C1B] flex flex-col items-center justify-center text-center p-8 overflow-hidden group">
          {/* Animated background waves */}
          <div className="absolute inset-0 bg-gradient-to-tr from-[#0047FF]/20 via-transparent to-[#6FC8FF]/10 animate-pulse-glow" />

          {/* Central Film Showcase Graphics */}
          <div className="relative z-10 flex flex-col items-center max-w-lg">
            <div className="w-20 h-20 rounded-full bg-[#0047FF] text-white flex items-center justify-center mb-6 shadow-2xl shadow-[#0047FF]/60 hover:scale-110 transition-transform cursor-pointer">
              <Play className="w-8 h-8 fill-white ml-1" />
            </div>
            <h4 className="text-xl sm:text-2xl font-bold mb-2">
              Engineering Everyday Elegance
            </h4>
            <p className="text-sm text-white/70 max-w-md leading-relaxed">
              Step inside the Trimova design studio. See how aerospace materials, sonic dynamics, and Swedish blade geometry converge to redefine modern grooming.
            </p>
          </div>
        </div>

        {/* Footer controls */}
        <div className="px-6 py-4 bg-[#02050D] border-t border-white/10 flex items-center justify-between text-xs text-white/60">
          <span className="flex items-center gap-2">
            <Volume2 className="w-4 h-4 text-[#6FC8FF]" /> High Definition 4K • Dolby Atmos
          </span>
          <button
            onClick={() => setIsVideoOpen(false)}
            className="text-white hover:underline cursor-pointer"
          >
            Close Viewer
          </button>
        </div>
      </div>
    </div>
  );
}
