"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ShoppingBag, Star } from "lucide-react"
import type { Product } from "@/types/data"

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

  const discount = product.price && product.price > 100 ? Math.round(Math.random() * 30 + 10) : null
  const installment = product.price ? (product.price / 12).toFixed(2) : null

  return (
    <div
      ref={ref}
      className="scroll-reveal group card-premium rounded-none overflow-hidden flex flex-col"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <Link href={`/product/${product.id}`} className="block relative aspect-[4/3] overflow-hidden bg-adrenalin-gray">
        <Image
          src={product.image || "/home/placeholder/placeholder.jpg"}
          alt={product.title || "Produto"}
          fill
          className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500" />

        {discount && (
          <span className="absolute top-3 left-3 bg-adrenalin-yellow text-adrenalin-black font-body text-xs font-bold px-3 py-1 uppercase tracking-wider">
            -{discount}%
          </span>
        )}

        <span className="absolute top-3 right-3 w-10 h-10 flex items-center justify-center bg-adrenalin-black/60 backdrop-blur-sm
                        opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
          <ShoppingBag className="w-5 h-5 text-white" />
        </span>
      </Link>

      <div className="flex flex-col p-4 md:p-5 flex-1">
        <div className="flex items-center gap-1 mb-2">
          {[1, 2, 3, 4, 5].map((star) => (
            <Star key={star} className="w-3 h-3 fill-adrenalin-yellow text-adrenalin-yellow" />
          ))}
        </div>

        <Link href={`/product/${product.id}`}>
          <h3 className="font-body font-semibold text-sm md:text-base text-white line-clamp-1 hover:text-adrenalin-yellow transition-colors duration-300 mb-2">
            {product.title}
          </h3>
        </Link>

        <div className="mt-auto">
          {discount && product.price && (
            <span className="font-body text-xs text-adrenalin-light line-through block">
              R$ {(product.price * (1 + discount / 100)).toFixed(2)}
            </span>
          )}
          <div className="flex items-baseline gap-2">
            <span className="font-body text-lg md:text-xl font-bold text-adrenalin-yellow">
              R$ {product.price?.toFixed(2)}
            </span>
          </div>
          {installment && (
            <span className="font-body text-xs text-adrenalin-light block mt-1">
              ou 12x de R$ {installment} sem juros
            </span>
          )}
        </div>

        <button className="mt-3 w-full py-2.5 border border-white/20 text-white font-body text-xs font-semibold uppercase tracking-wider
                         transition-all duration-300 hover:bg-adrenalin-yellow hover:text-adrenalin-black hover:border-adrenalin-yellow
                         active:scale-[0.98]">
          Adicionar
        </button>
      </div>
    </div>
  )
}