"use client"
import { useEffect, useRef } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import type { Category } from "@/types/data"

type CategoryCardProps = {
  category: Category
  index: number
}

export default function CategoryCard({ category, index }: CategoryCardProps) {
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
    <div
      ref={ref}
      className="scroll-reveal group relative h-[320px] md:h-[400px] overflow-hidden cursor-pointer"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <Link href={`/categories/${category.id}`} className="block w-full h-full">
        <div
          className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
          style={{ backgroundImage: `url(${category.image || "/home/placeholder/placeholder.jpg"})` }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent transition-opacity duration-500" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
          <div className="flex items-center justify-between">
            <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase leading-none tracking-wide">
              {category.name}
            </h3>
            <span className="w-10 h-10 flex items-center justify-center rounded-full bg-adrenalin-yellow/20 border border-adrenalin-yellow/40
                           opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-y-2 group-hover:translate-y-0">
              <ArrowUpRight className="w-5 h-5 text-adrenalin-yellow" />
            </span>
          </div>
          <div className="h-0.5 w-0 bg-adrenalin-yellow mt-3 transition-all duration-500 group-hover:w-full" />
        </div>
      </Link>
    </div>
  )
}