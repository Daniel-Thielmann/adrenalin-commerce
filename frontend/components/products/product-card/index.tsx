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
      className="scroll-reveal group card-premium overflow-hidden flex flex-col h-full"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Link
        href={`/product/${product.id}`}
        className="block relative aspect-[4/3] overflow-hidden bg-adrenalin-gray"
        aria-label={`Ver ${product.title}`}
      >
        <Image
          src={product.image || "/home/placeholder/placeholder.jpg"}
          alt={product.title || "Produto"}
          fill
          className="object-contain transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

        <span className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-adrenalin-black/60 backdrop-blur-sm
                        opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <Eye className="w-5 h-5 text-white" />
        </span>
      </Link>

      <div className="flex flex-col p-4 md:p-5 flex-1">
        {categoryName && (
          <span className="font-body text-[10px] uppercase tracking-[0.2em] text-adrenalin-yellow/70 mb-2">
            {categoryName}
          </span>
        )}

        <Link href={`/product/${product.id}`}>
          <h3 className="font-body font-semibold text-sm md:text-base text-white line-clamp-2 hover:text-adrenalin-yellow transition-colors duration-300 mb-2">
            {product.title}
          </h3>
        </Link>

        <div className="mt-auto pt-3">
          <span className="font-body text-lg md:text-xl font-bold text-adrenalin-yellow">
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