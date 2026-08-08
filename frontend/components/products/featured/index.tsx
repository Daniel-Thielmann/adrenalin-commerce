import ProductCard from "@/components/products/product-card"
import Link from "next/link"
import type { Product } from "@/types/data"

export default function FeaturedProducts({ products }: { products: Product[] }) {
  if (!products.length) return null

  return (
    <section className="section-spacing bg-[#101010]">
      <div className="container-premium lg:px-8">
        <div className="flex items-end justify-between gap-6 border-b border-white/10 pb-6">
          <div><span className="text-[10px] font-bold uppercase tracking-[0.25em] text-adrenalin-yellow">Curadoria Adrenalin</span><h2 className="mt-2 font-heading text-display-xs uppercase leading-none md:text-display-sm">Produtos em destaque</h2></div>
          <p className="hidden max-w-sm text-right text-sm text-adrenalin-light md:block">Equipamentos para quem exige mais de cada linha, trilha e terreno.</p>
        </div>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 xl:mt-12 xl:gap-5">
          {products.map((product, index) => <ProductCard key={product.id} product={product} index={index} />)}
        </div>
        <div className="mt-8 flex justify-center"><Link href="/allproducts" className="btn-primary">Ver todos os produtos</Link></div>
      </div>
    </section>
  )
}
