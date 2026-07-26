"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { User, ShieldCheck, ShoppingBag } from "lucide-react"

interface WelcomeModalProps {
  user: { name: string; email: string; role: string }
  onClose: () => void
}

export default function WelcomeModal({ user, onClose }: WelcomeModalProps) {
  const router = useRouter()
  const isAdmin = user.role === "admin" && user.email === "admin@adrenalin.com"

  useEffect(() => {
    document.body.style.overflow = "hidden"
    return () => { document.body.style.overflow = "" }
  }, [])

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") onClose()
    }
    document.addEventListener("keydown", handleKeyDown)
    return () => document.removeEventListener("keydown", handleKeyDown)
  }, [onClose])

  function handleNavigate(href: string) {
    onClose()
    router.push(href)
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center bg-black/80 backdrop-blur-sm">
      <div className="w-full max-w-sm mx-4 card-premium p-8 md:p-10 text-center animate-fade-in">
        <div className="mx-auto w-14 h-14 rounded-full bg-adrenalin-yellow/10 flex items-center justify-center mb-6">
          <User className="w-7 h-7 text-adrenalin-yellow" />
        </div>

        <h2 className="font-heading text-3xl text-white tracking-wide mb-2">
          Bem-vindo
        </h2>
        <p className="font-body text-sm text-adrenalin-light mb-1">{user.name}</p>
        <p className="font-body text-xs text-white/40 mb-8">{user.email}</p>

        {isAdmin ? (
          <button
            onClick={() => handleNavigate("/admin")}
            className="btn-primary w-full justify-center gap-2"
          >
            <ShieldCheck className="w-4 h-4" />
            Ir para Admin
          </button>
        ) : (
          <button
            onClick={() => handleNavigate("/allproducts")}
            className="btn-primary w-full justify-center gap-2"
          >
            <ShoppingBag className="w-4 h-4" />
            Ver Produtos
          </button>
        )}
      </div>
    </div>
  )
}
