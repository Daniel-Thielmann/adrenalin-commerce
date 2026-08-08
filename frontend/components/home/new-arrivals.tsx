import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Product } from "@/types/data"
import { formatCurrency } from "@/lib/formatters"

export default function NewArrivals({ products }: { products: Product[] }) {
  if (!products.length) return null
  return (
    <section className="section-spacing bg-[#0d0d0d]">
      <div className="container-premium">
        <div className="mb-10 flex items-end justify-between gap-6 border-b border-white/10 pb-6 md:mb-14">
          <div><span className="text-[10px] font-bold uppercase tracking-[0.25em] text-adrenalin-yellow">Seleção recente</span><h2 className="mt-2 font-heading text-display-xs uppercase leading-none md:text-display-sm">Novidades</h2></div>
          <Link href="/allproducts" className="hidden text-xs font-semibold uppercase tracking-[0.16em] text-white/60 transition-colors hover:text-adrenalin-yellow md:flex">Ver catálogo <ArrowUpRight className="ml-2 h-4 w-4" /></Link>
        </div>
        <div className="divide-y divide-white/10">
          {products.slice(0, 4).map((product, index) => (
            <article key={product.id} className="group grid items-center gap-6 py-8 transition-colors duration-300 hover:bg-white/[0.022] sm:grid-cols-[56px_200px_1fr_auto] md:grid-cols-[72px_minmax(270px,340px)_1fr_auto] md:px-5 md:py-10">
              <span className="hidden font-mono text-xs text-white/25 sm:block">0{index + 1}</span>
              <Link href={`/product/${product.id}`} className="relative block aspect-[4/3] overflow-hidden bg-white/[0.025]"><Image src={product.image || "/home/placeholder/placeholder.jpg"} alt={product.title} fill className="object-contain p-3 transition-transform duration-500 group-hover:scale-[1.03]" sizes="220px" /></Link>
              <div><span className="text-[10px] uppercase tracking-[0.2em] text-adrenalin-yellow/70">{product.categories?.[0]?.name || "Produto"}</span><h3 className="mt-2 text-xl font-semibold text-white transition-colors group-hover:text-adrenalin-yellow md:text-[1.75rem]">{product.title}</h3><p className="mt-3 text-xl font-bold text-adrenalin-yellow md:text-2xl">{formatCurrency(product.price)}</p></div>
              <Link href={`/product/${product.id}`} className="inline-flex h-12 w-12 items-center justify-center border border-white/15 text-white transition-colors hover:border-adrenalin-yellow hover:text-adrenalin-yellow" aria-label={`Ver ${product.title}`}><ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" /></Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
