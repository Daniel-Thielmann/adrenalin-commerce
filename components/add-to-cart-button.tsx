"use client"

import { ShoppingCart } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import type { Product } from "@/types/data"

export default function AddToCartButton({ product }: { product: Product }) {
  const { addItem } = useCart()

  return (
    <button
      onClick={() =>
        addItem({
          id: product.id,
          title: product.title,
          price: product.price ?? 0,
          image: product.image ?? "",
        })
      }
      className="btn-primary flex-1 justify-center"
    >
      <ShoppingCart className="w-4 h-4" />
      Adicionar ao Carrinho
    </button>
  )
}