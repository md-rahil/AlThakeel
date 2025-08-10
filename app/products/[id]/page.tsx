import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import { Product } from '@/types/product'
import ProductDetailedView from '@/component/product-detailed-view'
import { fetchProduct, fetchProducts } from '@/lib/api'
import RecommendedProducts from '@/component/product-card/recommended-products'

export const revalidate = 300

export async function generateStaticParams() {
  try {
    const response = await fetch('https://fakestoreapi.com/products?limit=20', {
      next: { revalidate: 300 },
      cache: 'force-cache',
    })

    if (!response.ok) return []
    const products: Product[] = await response.json()
    return products.map((p) => ({ id: String(p.id) }))
  } catch {
    return []
  }
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const { id } = await params
  const product = await fetchProduct(id)

  if (!product) {
    return {
      title: 'Product | Al Thakeel',
      description: 'Product details',
    }
  }

  return {
    title: `${product.title} | Al Thakeel`,
    description: product.description?.slice(0, 160) || 'Product details',
    openGraph: {
      title: `${product.title} | Al Thakeel`,
      description: product.description?.slice(0, 200) || undefined,
      images: product.image ? [{ url: product.image }] : undefined,
    },
  }
}

export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const [product, recommendedProducts] = await Promise.all([
    fetchProduct(id),
    fetchProducts(5)
  ])

  if (!product) {
    notFound()
  }

  return (
    <main className="mx-auto max-w-5xl p-6">
      <ProductDetailedView product={product} />
      {recommendedProducts.length > 0 && (
        <RecommendedProducts products={recommendedProducts} />
      )}
    </main>
  )
}
