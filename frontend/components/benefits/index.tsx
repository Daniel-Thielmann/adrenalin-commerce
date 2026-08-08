import { Truck, ShieldCheck, RotateCcw, Medal, Headphones } from "lucide-react"

const benefits = [
  { icon: Truck, title: "Entrega nacional", text: "Envios para todo o Brasil." },
  { icon: ShieldCheck, title: "Pagamento seguro", text: "Dados protegidos em cada compra." },
  { icon: RotateCcw, title: "Troca facilitada", text: "Processo simples e transparente." },
  { icon: Medal, title: "Produtos originais", text: "Procedência e garantia de fábrica." },
  { icon: Headphones, title: "Suporte especializado", text: "Atendimento de quem entende." },
]

export default function BenefitsSection() {
  return (
    <section className="border-y border-white/10 bg-[#090909] py-16 md:py-24">
      <div className="container-premium">
        <div className="grid gap-x-2 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
          {benefits.map(({ icon: Icon, title, text }, index) => (
            <article key={title} className="relative px-0 sm:px-6 lg:border-l lg:border-white/10 lg:first:border-l-0">
              <span className="mb-9 block font-mono text-[9px] text-white/25">0{index + 1}</span>
              <Icon className="mb-6 h-6 w-6 text-adrenalin-yellow" strokeWidth={1.5} />
              <h3 className="text-base font-semibold text-white">{title}</h3>
              <p className="mt-3 max-w-[210px] text-sm leading-relaxed text-white/45">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
