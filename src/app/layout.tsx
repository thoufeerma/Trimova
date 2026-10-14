import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Trimova | Enhance Your Confidence",
  description:
    "Thoughtfully designed oral and grooming essentials for a cleaner, sharper, more confident you. Featuring high-performance electric toothbrushes and precision razors.",
  icons: {
    icon: "/images/trimova_logo_icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`} data-scroll-behavior="smooth">
      <body className="min-h-screen bg-[#020408] text-white font-sans antialiased selection:bg-[#0047FF] selection:text-white">
        {children}
      </body>
    </html>
  );
}
