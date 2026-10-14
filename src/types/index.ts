export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  category: "toothbrush" | "razor" | "accessories";
  productType?: "Electric Toothbrush" | "Brush Heads";
  price: number;
  originalPrice?: number;
  rating?: number;
  reviewsCount?: number;
  image: string;
  tag?: string;
  badge?: string;
  colors?: string[];
  description: string;
  features: string[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}
