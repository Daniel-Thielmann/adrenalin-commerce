"use client"
import { useEffect, useRef } from "react"
import { Truck, ShieldCheck, RotateCcw, Medal, Headphones, Package } from "lucide-react"

const benefits = [
  {
    icon: Truck,
    title: "Entrega para Todo Brasil",
    description: "Frete grátis em compras acima de R$ 299",
  },
  {
    icon: ShieldCheck,
    title: "Pagamento Seguro",
    description: "Dados protegidos com criptografia SSL",
  },
  {
    icon: RotateCcw,
    title: "Troca Facilitada",
    description: "30 dias para solicitar troca ou devolução",
  },
  {
    icon: Medal,
    title: "Produtos Originais",
    description: "Garantia e procedência de fábrica",
  },
  {
    icon: Headphones,
    title: "Suporte Especializado",
    description: "Equipe pronta para ajudar você",
  },
  {
    icon: Package,
    title: "Embalagem Premium",
    description: "Seu produto chega em perfeito estado",
  },
]

export default function BenefitsSection() {
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
    <section className="section-spacing">
      <div className="container-premium">
        <div
          ref={ref}
          className="scroll-reveal flex flex-col items-center text-center gap-2 mb-12"
        >
          <h2 className="font-heading text-display-sm md:text-display-md uppercase tracking-wide leading-none">
            Por que escolher a Adrenalin?
          </h2>
          <p className="font-body text-sm md:text-base text-adrenalin-light max-w-lg">
            Qualidade e confiança em cada detalhe
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {benefits.map((item, index) => (
            <BenefitCard key={index} icon={item.icon} title={item.title} description={item.description} index={index} />
          ))}
        </div>
      </div>
    </section>
  )
}

function BenefitCard({
  icon: Icon,
  title,
  description,
  index,
}: {
  icon: React.ElementType
  title: string
  description: string
  index: number
}) {
  const cardRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add("revealed")
      },
      { threshold: 0.1 }
    )
    if (cardRef.current) observer.observe(cardRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={cardRef}
      className="scroll-reveal group flex flex-col items-center text-center p-6 card-premium"
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="w-12 h-12 flex items-center justify-center border border-adrenalin-yellow/30 bg-adrenalin-yellow/5
                      group-hover:bg-adrenalin-yellow/20 transition-all duration-500 mb-4">
        <Icon className="w-6 h-6 text-adrenalin-yellow transition-transform duration-500 group-hover:scale-110" />
      </div>
      <h3 className="font-body font-semibold text-sm text-white mb-2">{title}</h3>
      <p className="font-body text-xs text-adrenalin-light leading-relaxed">{description}</p>
    </div>
  )
}