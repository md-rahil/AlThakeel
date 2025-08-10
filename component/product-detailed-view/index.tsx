import type { Product } from "@/types/product";
import ProductDetailedImageView from "../ui/product-detailed-image-view";
import RatingSection from "../ui/rating-section";
import QuantityButton from "../ui/quantity-button";

export default function ProductDetailedView({ product }: { product: Product }) {

  return (
    <div className="mx-auto max-w-6xl p-6">
      <div className="grid grid-cols-1 gap-10 md:grid-cols-2">
        <ProductDetailedImageView product={product} />
        <div className="flex flex-col justify-between space-y-5">
          <div className="space-y-5">
            <div>
              <p className="text-xs uppercase tracking-wide text-gray-500">
                {product.category}
              </p>
              <h1 className="mt-1 text-3xl font-semibold leading-tight">
                {product.title}
              </h1>
            </div>

            <div className="flex items-end gap-3">
              <span className="text-2xl font-bold">${product.price}</span>
            </div>

            <RatingSection rating={product.rating} />

            <p className="text-sm leading-6 text-gray-700">
              {product.description}
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
              <QuantityButton />
              <button className="w-full rounded-full bg-gray-900 px-6 py-3 font-medium text-white hover:opacity-90 sm:w-auto sm:flex-1">
                Add to Cart
              </button>
            </div>
            <p className="text-xs text-gray-500">
              Ships for free on the order of $100 and above
            </p>
          </div>
          
        </div>
      </div>
    </div>
  );
}