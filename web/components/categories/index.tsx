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

  return (
    <section className="section-spacing">
      <div className="container-premium">
        <div
          ref={ref}
          className="scroll-reveal flex flex-col items-center text-center gap-2 mb-12"
        >
          <h2 className="font-heading text-display-sm md:text-display-md uppercase tracking-wide leading-none">
            Categorias
          </h2>
          <p className="font-body text-sm md:text-base text-adrenalin-light max-w-lg">
            Encontre tudo para o seu esporte favorito
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {mappedCategories.map((category, index) => (
            <CategoryCard key={category.id} category={category} index={index} />
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <Link href="/categories" className="btn-secondary">
            Ver Todas as Categorias
          </Link>
        </div>
      </div>
    </section>
  )
}