import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"

export default function EditorialCampaign() {
  return (
    <section className="relative min-h-[76svh] overflow-hidden bg-black lg:min-h-[82svh]">
      <Image src="/home/best-products-side-image/quad.jpg" alt="Atleta conduzindo quadriciclo em terreno extremo" fill className="object-cover object-center" sizes="100vw" />
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/65 to-black/10" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/55 via-transparent to-black/20" />
      <div className="container-premium relative flex min-h-[76svh] items-end py-16 md:items-center md:py-24 lg:min-h-[82svh]">
        <div className="max-w-3xl border-l-2 border-adrenalin-yellow pl-6 md:pl-10">
          <span className="text-[10px] font-bold uppercase tracking-[0.28em] text-adrenalin-yellow">Adrenalin / Off-road</span>
          <h2 className="mt-4 font-heading text-[clamp(4rem,9vw,9rem)] uppercase leading-[0.78] text-white">Built for<br />the extreme.</h2>
          <p className="mt-6 max-w-md text-sm leading-relaxed text-white/60 md:text-base">Performance, proteção e controle para quando o terreno deixa de ser previsível.</p>
          <Link href="/allproducts" className="btn-primary mt-8">Explorar produtos <ArrowUpRight className="h-4 w-4" /></Link>
        </div>
      </div>
    </section>
  )
}
