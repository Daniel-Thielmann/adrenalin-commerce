"use client"
import { useEffect, useRef, useState } from "react"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Rafael Silva",
    role: "Trilheiro Profissional",
    text: "Equipamentos de primeira linha. Comprei minha bike e o suporte foi incrível. Entrega super rápida e produto original. Recomendo de olhos fechados!",
    rating: 5,
    avatar: null,
  },
  {
    name: "Camila Oliveira",
    role: "Atleta de Motocross",
    text: "A Adrenalin tem os melhores preços para equipamentos de proteção. O capacete que comprei chegou em 3 dias. Qualidade premium como eu esperava.",
    rating: 5,
    avatar: null,
  },
  {
    name: "Lucas Mendes",
    role: "Aventureiro",
    text: "Comprei uma barraca e equipamentos de camping. Tudo muito bem embalado e com nota fiscal. Site confiável e atendimento nota 10!",
    rating: 5,
    avatar: null,
  },
]

export default function TestimonialSection() {
  const [current, setCurrent] = useState(0)
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

  return (
    <section className="section-spacing bg-adrenalin-dark/30">
      <div className="container-premium">
        <div
          ref={ref}
          className="scroll-reveal flex flex-col items-center text-center gap-2 mb-12"
        >
          <h2 className="font-heading text-display-sm md:text-display-md uppercase tracking-wide leading-none">
            O Que Dizem Nossos Clientes
          </h2>
          <p className="font-body text-sm md:text-base text-adrenalin-light max-w-lg">
            A confiança de quem já comprou
          </p>
        </div>

        <div className="max-w-3xl mx-auto relative">
          <div className="overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((item, index) => (
                <div key={index} className="w-full flex-shrink-0 px-4">
                  <div className="card-premium p-8 md:p-12 text-center">
                    <Quote className="w-10 h-10 text-adrenalin-yellow/30 mx-auto mb-6" />
                    <p className="font-body text-base md:text-lg text-white/80 leading-relaxed mb-8 italic">
                      &ldquo;{item.text}&rdquo;
                    </p>
                    <div className="flex justify-center gap-1 mb-4">
                      {Array.from({ length: item.rating }).map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-adrenalin-yellow text-adrenalin-yellow" />
                      ))}
                    </div>
                    <div className="w-12 h-12 rounded-full bg-adrenalin-gray mx-auto mb-3 flex items-center justify-center">
                      <span className="font-heading text-xl text-adrenalin-yellow">
                        {item.name.charAt(0)}
                      </span>
                    </div>
                    <h4 className="font-body font-semibold text-white text-sm">{item.name}</h4>
                    <p className="font-body text-xs text-adrenalin-light">{item.role}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={() => setCurrent((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60
                         hover:text-white hover:border-white/50 transition-all duration-300"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => setCurrent((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
              className="w-10 h-10 flex items-center justify-center border border-white/20 text-white/60
                         hover:text-white hover:border-white/50 transition-all duration-300"
              aria-label="Próximo depoimento"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <div className="flex justify-center gap-2 mt-4">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`transition-all duration-300 rounded-full ${
                  index === current ? "w-8 h-1.5 bg-adrenalin-yellow" : "w-2 h-1.5 bg-white/20 hover:bg-white/40"
                }`}
                aria-label={`Depoimento ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}