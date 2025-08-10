import type { Product } from "@/types/product";

const API_BASE = "https://fakestoreapi.com";
const CACHE_DURATION = 300;

export async function fetchProducts(limit?: number): Promise<Product[]> {
  try {
    const url = limit 
      ? `${API_BASE}/products?limit=${limit}`
      : `${API_BASE}/products`;
    
    const response = await fetch(url, {
      next: { revalidate: CACHE_DURATION },
      cache: "force-cache",
    });

    if (!response.ok) return [];
    const products: Product[] = await response.json();
    return products;
  } catch {
    return [];
  }
}

export async function fetchProduct(id: string): Promise<Product | null> {
  try {
    const response = await fetch(`${API_BASE}/products/${id}`, {
      next: { revalidate: CACHE_DURATION },
      cache: "force-cache",
    });

    if (!response.ok) return null;
    const product: Product = await response.json();
    return product;
  } catch {
    return null;
  }
}