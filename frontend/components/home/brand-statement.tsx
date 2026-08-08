"use client"

import { useLayoutEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function BrandStatement() {
  const root = useRef<HTMLElement>(null)

  useLayoutEffect(() => {
    if (!root.current) return
    const context = gsap.context(() => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return
      gsap.from("[data-statement-line]", {
        yPercent: 105, opacity: 0, duration: 1, stagger: 0.12, ease: "power3.out",
        scrollTrigger: { trigger: root.current, start: "top 72%", once: true },
      })
    }, root)
    return () => context.revert()
  }, [])

  return (
    <section ref={root} className="flex min-h-[42svh] items-center overflow-hidden bg-[#050505] py-16 md:min-h-[48svh] md:py-20" aria-label="Manifesto Adrenalin">
      <div className="container-premium">
        <span className="mb-6 block text-[10px] font-bold uppercase tracking-[0.3em] text-white/35">Adrenalin manifesto / 001</span>
        <h2 className="font-heading text-[clamp(3.4rem,7vw,7.6rem)] uppercase leading-[0.79] tracking-[0.005em] text-white">
          <span className="block overflow-hidden"><span data-statement-line className="block">We don&apos;t sell gear.</span></span>
          <span className="block overflow-hidden"><span data-statement-line className="block">We sell what gets you</span></span>
          <span className="block overflow-hidden"><span data-statement-line className="block text-adrenalin-yellow">out there.</span></span>
        </h2>
      </div>
    </section>
  )
}
