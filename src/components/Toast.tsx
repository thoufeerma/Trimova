"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { useCart } from "@/context/CartContext";

export default function Toast() {
  const { toastMessage } = useCart();

  if (!toastMessage) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 animate-bounce">
      <div className="flex items-center gap-3 bg-[#0B1528] text-white px-5 py-3 rounded-full border border-white/15 shadow-2xl shadow-blue-900/50">
        <CheckCircle2 className="w-4 h-4 text-[#6FC8FF]" />
        <span className="text-xs sm:text-sm font-medium">{toastMessage}</span>
      </div>
    </div>
  );
}
