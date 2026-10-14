import { redirect } from "next/navigation";
import { TOOTHBRUSH_PRODUCTS } from "@/data/products";

export const instant = false;

export async function generateStaticParams() {
  return TOOTHBRUSH_PRODUCTS.map((p) => ({
    id: p.id,
  }));
}

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function ProductRedirect({ params }: PageProps) {
  const { id } = await params;
  redirect(`/toothbrushes/${id}`);
}
