import { Product } from "@/types/product";
import ProductCard from "..";

const RecommendedProducts = ({ products }: { products: Product[] }) => {
    return (
        <div>
            <h2>Recommended Products</h2>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr">
                {products.map((product) => (
                    <ProductCard key={product.id} product={product} />
                ))}
            </div>
        </div>
    )
}
export default RecommendedProducts;