import React, { Suspense } from "react";
import ToothbrushProductClient from "./ToothbrushProductClient";
import { TOOTHBRUSH_PRODUCTS, PRODUCTS } from "@/data/products";

export const instant = false;

export async function generateStaticParams() {
  const all = [...TOOTHBRUSH_PRODUCTS, ...PRODUCTS];
  const unique = Array.from(new Set(all.map((p) => p.id)));
  return unique.map((id) => ({ id }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

async function ProductContent({ params }: PageProps) {
  const { id } = await params;
  return <ToothbrushProductClient productId={id} />;
}

export default function ProductDisplayPage(props: PageProps) {
  return (
    <Suspense fallback={<div className="min-h-screen bg-white" />}>
      <ProductContent {...props} />
    </Suspense>
  );
}
