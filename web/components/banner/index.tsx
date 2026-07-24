"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowRight } from "lucide-react"

type BannerProps = {
  image: string
  title: string
  subtitle?: string
  cta?: string
  ctaLink?: string
  invert?: boolean
}

export default function PromotionalBanner({
  image,
  title,
  subtitle,
  cta = "Conferir Ofertas",
  ctaLink = "/allproducts",
  invert = false,
}: BannerProps) {
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
          className="scroll-reveal relative h-[300px] md:h-[420px] overflow-hidden"
        >
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out hover:scale-105"
            style={{ backgroundImage: `url(${image})` }}
          />
          <div className={`absolute inset-0 ${invert ? "bg-gradient-to-l" : "bg-gradient-to-r"} from-black/80 via-black/40 to-black/20`} />

          <div className={`relative h-full flex items-center ${invert ? "justify-end" : "justify-start"} p-8 md:p-16`}>
            <div className={`max-w-lg ${invert ? "text-right" : "text-left"}`}>
              <h2 className="font-heading text-display-xs md:text-display-sm lg:text-display-md text-white uppercase leading-none mb-4">
                {title}
              </h2>
              {subtitle && (
                <p className="font-body text-sm md:text-base text-white/70 mb-8 max-w-md leading-relaxed">
                  {subtitle}
                </p>
              )}
              <Link href={ctaLink} className="btn-primary inline-flex">
                {cta}
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}