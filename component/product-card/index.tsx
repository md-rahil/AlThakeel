"use client";

import Link from "next/link";
import Image from "next/image";
import type { Product } from "@/types/product";
import RatingSection from "@/component/ui/rating-section";

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link href={`/products/${product.id}`} className="group h-full">
      <div className="flex h-full flex-col overflow-hidden rounded-lg border border-gray-200 bg-white shadow-sm transition-all hover:shadow-lg">
        <div className="relative aspect-square overflow-hidden bg-gray-50">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 25vw"
            className="object-contain p-4 transition-transform group-hover:scale-105"
          />
        </div>
        
        <div className="flex flex-1 flex-col justify-between p-4 space-y-3">
          <div className="flex-1">
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
              {product.category}
            </p>
            <h3 className="font-medium text-gray-900 line-clamp-2 group-hover:text-gray-700">
              {product.title}
            </h3>
          </div>
          
          <div className="space-y-3">
            <RatingSection rating={product.rating} />
            
            <div className="flex items-center justify-between">
              <span className="text-lg font-bold text-gray-900">
                ${product.price}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}