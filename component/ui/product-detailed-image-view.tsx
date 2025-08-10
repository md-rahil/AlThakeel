import Image from "next/image";
import type { Product } from "@/types/product";

const ProductDetailedImageView = ({ product }: { product: Product }) => {
    return (
        <div className="relative aspect-square w-full overflow-hidden rounded-lg border bg-white">
          <Image
            src={product.image}
            alt={product.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain p-6"
            priority
          />
        </div>
    )
}

export default ProductDetailedImageView;