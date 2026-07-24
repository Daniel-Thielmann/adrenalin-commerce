"use client"

import Image from "next/image"
import Link from "next/link"
import { Trash2, Plus, Minus, ShoppingBag, ArrowLeft } from "lucide-react"
import { useCart } from "@/contexts/cart-context"
import { formatCurrency } from "@/lib/formatters"

export default function CartPage() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  if (items.length === 0) {
    return (
      <div className="container-premium py-20">
        <div className="flex flex-col items-center justify-center text-center gap-6">
          <ShoppingBag className="w-16 h-16 text-white/20" />
          <h1 className="font-heading text-4xl text-white/30 uppercase">Carrinho Vazio</h1>
          <p className="font-body text-white/40">Você ainda não adicionou nenhum item ao carrinho.</p>
          <Link href="/allproducts" className="btn-primary">
            Ver Produtos
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="container-premium py-8 md:py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="font-heading text-3xl md:text-4xl text-white uppercase tracking-wide">Carrinho</h1>
        <button onClick={clearCart} className="font-body text-xs text-red-400 hover:text-red-300 uppercase tracking-wider transition-colors">
          Limpar Carrinho
        </button>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        <div className="flex-1 flex flex-col gap-4">
          {items.map((item) => (
            <div key={item.id} className="flex gap-4 bg-white/5 p-4 rounded-lg">
              <div className="relative w-20 h-20 md:w-24 md:h-24 shrink-0 bg-adrenalin-gray rounded-md overflow-hidden">
                <Image
                  src={item.image || "/home/placeholder/placeholder.jpg"}
                  alt={item.title}
                  fill
                  className="object-contain"
                  sizes="96px"
                />
              </div>

              <div className="flex-1 flex flex-col justify-between min-w-0">
                <div>
                  <Link href={`/product/${item.id}`} className="font-heading text-white text-lg hover:text-adrenalin-yellow transition-colors line-clamp-1">
                    {item.title}
                  </Link>
                  <p className="font-heading text-adrenalin-yellow text-xl mt-1">
                    {formatCurrency(item.price)}
                  </p>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center border border-white/10 rounded">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <Minus className="w-3 h-3" />
                    </button>
                    <span className="w-10 text-center font-body text-sm text-white">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                    >
                      <Plus className="w-3 h-3" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeItem(item.id)}
                    className="w-8 h-8 flex items-center justify-center text-red-400 hover:text-red-300 transition-colors"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="lg:w-80 shrink-0">
          <div className="bg-white/5 rounded-lg p-6 sticky top-28">
            <h2 className="font-heading text-xl text-white uppercase tracking-wide mb-4">Resumo</h2>
            <div className="space-y-2 mb-4">
              {items.map((item) => (
                <div key={item.id} className="flex justify-between font-body text-sm text-white/60">
                  <span className="truncate mr-2">{item.title} x{item.quantity}</span>
                  <span className="shrink-0">{formatCurrency(item.price * item.quantity)}</span>
                </div>
              ))}
            </div>
            <div className="border-t border-white/10 pt-4 flex justify-between items-baseline">
              <span className="font-heading text-lg text-white uppercase">Total</span>
              <span className="font-heading text-2xl text-adrenalin-yellow">{formatCurrency(totalPrice)}</span>
            </div>
            <button className="btn-primary w-full justify-center mt-6">
              Finalizar Pedido
            </button>
            <Link href="/allproducts" className="btn-secondary w-full justify-center mt-3">
              <ArrowLeft className="w-4 h-4" />
              Continuar Comprando
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}