import ProductCard from "@/components/products/product-card"
import SectionTitle from "@/components/ui/section-title"
import Link from "next/link"
import type { Product } from "@/types/data"

export default function FeaturedProducts({ products }: { products: Product[] }) {
  return (
    <section className="section-spacing bg-adrenalin-dark/50">
      <div className="container-premium">
        <SectionTitle
          title="Produtos em Destaque"
          subtitle="Equipamentos para quem vive além dos limites"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mt-12">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/allproducts" className="btn-primary">
            Ver Todos os Produtos
          </Link>
        </div>
      </div>
    </section>
  )
}
