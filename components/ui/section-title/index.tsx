"use client"
import { useEffect, useRef } from "react"

type SectionTitleProps = {
  title: string
  subtitle?: string
  align?: "left" | "center"
  light?: boolean
}

export default function SectionTitle({ title, subtitle, align = "center", light = false }: SectionTitleProps) {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      },
      { threshold: 0.1 }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div
      ref={ref}
      className={`scroll-reveal flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"} gap-2`}
    >
      <h2 className="font-heading text-display-sm md:text-display-md lg:text-display uppercase tracking-wide leading-none">
        {title}
      </h2>
      {subtitle && (
        <p className={`font-body text-sm md:text-base max-w-xl ${align === "center" ? "text-center" : ""} ${light ? "text-adrenalin-light" : "text-adrenalin-light"}`}>
          {subtitle}
        </p>
      )}
    </div>
  )
}