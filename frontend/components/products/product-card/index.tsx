"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { Eye } from "lucide-react"
import type { Product } from "@/types/data"
import { formatCurrency } from "@/lib/formatters"

type ProductCardProps = {
  product: Product
  index?: number
}

export default function ProductCard({ product, index = 0 }: ProductCardProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("revealed")
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  const categoryName = product.categories?.[0]?.name

  return (
    <div
      ref={ref}
      className="scroll-reveal group card-premium flex h-full flex-col overflow-hidden transition-transform duration-500 hover:-translate-y-1"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Link
        href={`/product/${product.id}`}
        className="relative block aspect-[4/3] overflow-hidden bg-[#171717] xl:aspect-square"
        aria-label={`Ver ${product.title}`}
      >
        <Image
          src={product.image || "/home/placeholder/placeholder.jpg"}
          alt={product.title || "Produto"}
          fill
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-[1.03]"
          sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, (max-width: 1600px) 25vw, 390px"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

        <span className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-adrenalin-black/60 backdrop-blur-sm
                        opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <Eye className="w-5 h-5 text-white" />
        </span>
      </Link>

      <div className="flex flex-1 flex-col p-5 xl:p-7">
        {categoryName && (
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-adrenalin-yellow/70 mb-2">
            {categoryName}
          </span>
        )}

        <Link href={`/product/${product.id}`}>
          <h3 className="mb-2 line-clamp-2 font-body text-base font-semibold text-white transition-colors duration-300 hover:text-adrenalin-yellow xl:text-xl">
            {product.title}
          </h3>
        </Link>

        <div className="mt-auto pt-3">
          <span className="font-body text-xl font-bold text-adrenalin-yellow xl:text-[1.65rem]">
            {formatCurrency(product.price)}
          </span>
        </div>

        <Link
          href={`/product/${product.id}`}
          className="mt-3 w-full py-2.5 border border-white/20 text-white font-body text-xs font-semibold uppercase tracking-wider text-center block
                   transition-all duration-300 hover:bg-adrenalin-yellow hover:text-adrenalin-black hover:border-adrenalin-yellow
                   active:scale-[0.98]"
        >
          Ver Produto
        </Link>
      </div>
    </div>
  )
}
