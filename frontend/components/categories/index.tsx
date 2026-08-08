"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import CategoryCard from "./card"
import { mapCategory } from "@/lib/category-map"
import type { Category } from "@/types/data"

type CategoryShowcaseProps = {
  categories: Category[]
}

export default function CategoryShowcase({ categories }: CategoryShowcaseProps) {
  const ref = useRef<HTMLDivElement>(null)
  const mappedCategories = categories.map(mapCategory)

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

  if (!mappedCategories.length) return null

  const editorialLayout = [
    "lg:col-span-6 lg:row-span-2",
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-3 lg:row-span-1",
    "lg:col-span-4 lg:row-span-1",
    "lg:col-span-4 lg:row-span-1",
    "lg:col-span-4 lg:row-span-1",
  ]

  return (
    <section className="section-spacing bg-[#080808]">
      <div className="container-premium">
        <div
          ref={ref}
          className="scroll-reveal mb-12 flex items-end justify-between gap-6 border-b border-white/10 pb-6 text-left"
        >
          <div><span className="text-[10px] font-bold uppercase tracking-[0.25em] text-adrenalin-yellow">Escolha seu terreno</span><h2 className="mt-2 font-heading text-display-sm md:text-display-md uppercase tracking-wide leading-none">Categorias</h2></div>
          <p className="hidden max-w-sm font-body text-sm text-adrenalin-light md:block">Equipamentos selecionados para cada forma de viver o extremo.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-12 lg:auto-rows-[230px]">
          {mappedCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} className={editorialLayout[index] || "lg:col-span-4"} />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link href="/categories" className="btn-secondary">
            Ver Todas as Categorias
          </Link>
        </div>
      </div>
    </section>
  )
}
