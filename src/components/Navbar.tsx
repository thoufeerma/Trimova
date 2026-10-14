"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, User, LayoutGrid, Menu, X } from "lucide-react";
import { useCart } from "@/context/CartContext";

import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();
  const { setIsSearchOpen } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let prev = typeof window !== "undefined" ? window.scrollY > 20 : false;
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== prev) {
        prev = isScrolled;
        setScrolled(isScrolled);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Toothbrushes", href: "/toothbrushes" },
    { label: "Razors", href: "/#razors" },
    { label: "Our Story", href: "/#our-story" },
    { label: "Support", href: "#footer" },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#02050D]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-xl shadow-black/40"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-5 sm:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-2.5 group cursor-pointer"
          >
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 transition-transform duration-300 group-hover:scale-105">
              <Image
                src="/images/trimova_logo_icon.png"
                alt="Trimova Emblem"
                fill
                className="object-contain drop-shadow-[0_0_12px_rgba(0,71,255,0.7)]"
                priority
              />
            </div>
            <span className="text-xl sm:text-2xl font-bold tracking-tight text-white flex items-center gap-1">
              Trimova
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => {
              const isActive =
                link.href === "/toothbrushes"
                  ? pathname === "/toothbrushes"
                  : pathname === "/" && link.href === "/";
              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium transition-colors duration-200 tracking-wide relative py-1 ${
                    isActive
                      ? "text-white font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-[2px] after:bg-[#0047FF] after:rounded-full after:shadow-[0_0_8px_#0047FF]"
                      : "text-white/70 hover:text-white"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Action Icons */}
          <div className="flex items-center gap-4 sm:gap-5">
            {/* Search Button */}
            <button
              onClick={() => setIsSearchOpen(true)}
              className="text-white/80 hover:text-white p-1.5 transition-colors duration-200 hover:scale-110"
              aria-label="Search"
            >
              <Search className="w-5 h-5" strokeWidth={1.75} />
            </button>

            {/* Account Button */}
            <button
              className="text-white/80 hover:text-white p-1.5 transition-colors duration-200 hover:scale-110 hidden sm:block"
              aria-label="User Account"
            >
              <User className="w-5 h-5" strokeWidth={1.75} />
            </button>

            {/* Product Catalog Link */}
            <Link
              href="/toothbrushes"
              className="text-white/80 hover:text-white p-1.5 transition-colors duration-200 hover:scale-110"
              aria-label="Catalog"
              title="Product Catalog"
            >
              <LayoutGrid className="w-5 h-5" strokeWidth={1.75} />
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-white/80 hover:text-white p-1.5"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#02050D]/95 backdrop-blur-xl md:hidden pt-24 px-6 flex flex-col justify-between pb-8">
          <nav className="flex flex-col gap-6 text-lg font-medium">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-white/90 hover:text-[#6FC8FF] transition-colors py-2 border-b border-white/10"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex flex-col gap-4 text-sm text-white/60">
            <p>Thoughtfully designed oral and grooming essentials.</p>
            <div className="flex items-center gap-4">
              <Link
                href="/toothbrushes"
                onClick={() => setMobileMenuOpen(false)}
                className="flex items-center gap-2 bg-[#0047FF] text-white py-2.5 px-6 rounded-full font-semibold"
              >
                Explore Catalog
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
