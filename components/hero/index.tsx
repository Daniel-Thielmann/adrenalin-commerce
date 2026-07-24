"use client"
import { useState, useEffect, useCallback } from "react"
import Link from "next/link"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface Slide {
  src: string
  title: string
  subtitle: string
  cta?: string
  ctaLink?: string
}

const slides: Slide[] = [
  {
    src: "/home/best-products-side-image/brandon.jpg",
    title: "Viva a Adrenalina",
    subtitle: "Equipamentos premium para quem não tem medo de desafios",
    cta: "Explorar Produtos",
    ctaLink: "/allproducts",
  },
  {
    src: "/home/best-products-side-image/trek.jpg",
    title: "Domine a Montanha",
    subtitle: "Do downhill ao camping, o melhor equipamento para sua aventura",
    cta: "Ver Categorias",
    ctaLink: "/categories",
  },
  {
    src: "/home/best-products-side-image/utv.jpg",
    title: "Velocidade Sem Limites",
    subtitle: "Motocross, UTV e Quadriciclos com performance extrema",
    cta: "Descobrir",
    ctaLink: "/allproducts",
  },
  {
    src: "/home/best-products-side-image/chama.png",
    title: "Explore o Impossível",
    subtitle: "Sua jornada começa com equipamentos que você pode confiar",
    cta: "Começar Agora",
    ctaLink: "/categories",
  },
]

export default function Hero() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = useCallback((index: number) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setCurrent(index)
    setTimeout(() => setIsTransitioning(false), 700)
  }, [isTransitioning])

  const next = useCallback(() => {
    goTo((current + 1) % slides.length)
  }, [current, goTo])

  const prev = useCallback(() => {
    goTo((current - 1 + slides.length) % slides.length)
  }, [current, goTo])

  useEffect(() => {
    const timer = setInterval(next, 6000)
    return () => clearInterval(timer)
  }, [next])

  return (
    <section className="relative w-full h-screen max-h-[900px] min-h-[600px] overflow-hidden bg-adrenalin-black">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-out ${
            index === current
              ? "opacity-100 scale-100"
              : "opacity-0 scale-105"
          }`}
        >
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${slide.src})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
        </div>
      ))}

      <div className="relative h-full container-premium flex items-center">
        <div className="max-w-3xl">
          <div
            key={`title-${current}`}
            className="animate-fade-in-up"
          >
            <span className="inline-block font-body text-xs tracking-[0.3em] uppercase text-adrenalin-yellow mb-4">
              Extreme Sports Equipment
            </span>
            <h1 className="font-heading text-display-md md:text-display lg:text-display-xl text-white leading-none mb-6">
              {slides[current].title}
            </h1>
            <p className="font-body text-base md:text-lg text-white/70 max-w-xl mb-10 leading-relaxed">
              {slides[current].subtitle}
            </p>
          </div>
          <div
            key={`cta-${current}`}
            className="flex flex-wrap gap-4 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            <Link href={slides[current].ctaLink || "/allproducts"} className="btn-primary">
              {slides[current].cta || "Explorar"}
            </Link>
            <Link href="/categories" className="btn-secondary">
              Ver Categorias
            </Link>
          </div>
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                   border border-white/20 text-white/60 hover:text-white hover:border-white/50
                   transition-all duration-300 rounded-full backdrop-blur-sm bg-black/20
                   hover:bg-black/40 z-10"
        aria-label="Slide anterior"
      >
        <ChevronLeft className="w-5 h-5" />
      </button>
      <button
        onClick={next}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 w-10 h-10 md:w-12 md:h-12 flex items-center justify-center
                   border border-white/20 text-white/60 hover:text-white hover:border-white/50
                   transition-all duration-300 rounded-full backdrop-blur-sm bg-black/20
                   hover:bg-black/40 z-10"
        aria-label="Próximo slide"
      >
        <ChevronRight className="w-5 h-5" />
      </button>

      <div className="absolute bottom-8 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goTo(index)}
            className={`transition-all duration-500 rounded-full ${
              index === current
                ? "w-12 h-1.5 bg-adrenalin-yellow"
                : "w-3 h-1.5 bg-white/30 hover:bg-white/50"
            }`}
            aria-label={`Ir para slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}