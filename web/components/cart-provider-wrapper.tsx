"use client"

import type { ReactNode } from "react"
import { CartProvider } from "@/contexts/cart-context"

export default function CartProviderWrapper({ children }: { children: ReactNode }) {
  return <CartProvider>{children}</CartProvider>
}