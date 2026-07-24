"use client";

import { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { X, Plus, Minus, Trash2, ShoppingBag } from "lucide-react";
import { useCart } from "@/contexts/cart-context";
import { formatCurrency } from "@/lib/formatters";

export default function CartDrawer() {
  const { items, removeItem, updateQuantity, totalPrice, isOpen, closeCart } = useCart();

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") closeCart();
    }
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeCart]);

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm"
          onClick={closeCart}
        />
      )}

      <div
        className={`fixed right-0 top-0 z-[70] h-dvh w-full sm:w-[420px] bg-adrenalin-black border-l border-white/10 shadow-2xl transition-transform duration-300 ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-4 border-b border-white/10">
          <h2 className="font-heading text-xl text-white uppercase tracking-wide">
            Carrinho ({items.length})
          </h2>
          <button
            onClick={closeCart}
            className="w-10 h-10 flex items-center justify-center text-white/60 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {items.length === 0 ? (
          <div className="flex flex-col items-center justify-center text-center gap-4 py-20 px-4">
            <ShoppingBag className="w-12 h-12 text-white/20" />
            <p className="font-body text-white/40">Carrinho vazio</p>
            <Link
              href="/allproducts"
              onClick={closeCart}
              className="btn-primary text-sm"
            >
              Ver Produtos
            </Link>
          </div>
        ) : (
          <>
            <div
              className="flex-1 overflow-y-auto p-4 space-y-3"
              style={{ height: "calc(100% - 180px)" }}
            >
              {items.map((item) => (
                <div
                  key={item.id}
                  className="flex gap-3 bg-white/5 rounded-lg p-3"
                >
                  <div className="relative w-16 h-16 shrink-0 bg-adrenalin-gray rounded-md overflow-hidden">
                    <Image
                      src={item.image || "/home/placeholder/placeholder.jpg"}
                      alt={item.title}
                      fill
                      className="object-contain"
                      sizes="64px"
                    />
                  </div>

                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/product/${item.id}`}
                      onClick={closeCart}
                      className="font-body text-sm text-white hover:text-adrenalin-yellow transition-colors line-clamp-1"
                    >
                      {item.title}
                    </Link>
                    <p className="font-heading text-adrenalin-yellow text-base mt-0.5">
                      {formatCurrency(item.price)}
                    </p>

                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center border border-white/10 rounded">
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="w-6 h-6 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <Minus className="w-2.5 h-2.5" />
                        </button>
                        <span className="w-8 text-center font-body text-xs text-white">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="w-6 h-6 flex items-center justify-center text-white/60 hover:text-white hover:bg-white/5 transition-colors"
                        >
                          <Plus className="w-2.5 h-2.5" />
                        </button>
                      </div>
                      <button
                        onClick={() => removeItem(item.id)}
                        className="w-6 h-6 flex items-center justify-center text-red-400 hover:text-red-300 transition-colors"
                      >
                        <Trash2 className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 border-t border-white/10 bg-adrenalin-black p-4 space-y-3">
              <div className="flex justify-between items-baseline">
                <span className="font-body text-sm text-white/60">Total</span>
                <span className="font-heading text-xl text-adrenalin-yellow">
                  {formatCurrency(totalPrice)}
                </span>
              </div>
              <Link
                href="/cart"
                onClick={closeCart}
                className="btn-primary w-full justify-center"
              >
                Ver Carrinho
              </Link>
            </div>
          </>
        )}
      </div>
    </>
  );
}