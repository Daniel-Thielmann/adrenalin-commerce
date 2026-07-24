"use client"
import { useEffect, useRef, useState } from "react"
import { Send, Check } from "lucide-react"

export default function NewsletterSection() {
  const ref = useRef<HTMLDivElement>(null)
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setSubmitted(true)
      setEmail("")
    }
  }

  return (
    <section className="section-spacing">
      <div className="container-premium">
        <div
          ref={ref}
          className="scroll-reveal relative overflow-hidden bg-adrenalin-dark border border-white/5 p-8 md:p-16"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-adrenalin-yellow/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-adrenalin-yellow/5 rounded-full blur-3xl" />

          <div className="relative flex flex-col items-center text-center max-w-2xl mx-auto">
            <h2 className="font-heading text-display-xs md:text-display-sm uppercase tracking-wide leading-none mb-3">
              Fique por Dentro
            </h2>
            <p className="font-body text-sm md:text-base text-adrenalin-light mb-8 max-w-md leading-relaxed">
              Receba novidades, ofertas exclusivas e dicas de aventura direto no seu email
            </p>

            {submitted ? (
              <div className="flex items-center gap-3 text-adrenalin-yellow animate-fade-in">
                <Check className="w-5 h-5" />
                <span className="font-body text-sm">Inscrição realizada com sucesso!</span>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="flex w-full max-w-md gap-2">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Seu melhor email"
                  required
                  className="flex-1 px-4 py-3 bg-adrenalin-black border border-white/10 text-white font-body text-sm
                             placeholder:text-adrenalin-light/50 focus:outline-none focus:border-adrenalin-yellow/50
                             transition-all duration-300"
                />
                <button
                  type="submit"
                  className="px-6 py-3 bg-adrenalin-yellow text-adrenalin-black font-body font-semibold text-sm uppercase tracking-wider
                             hover:bg-white transition-all duration-300 active:scale-95 flex items-center gap-2"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}