import { fetchHomeProducts, fetchCategories } from '@/lib/api'
import type { Product, Category } from '@/types/data'
import Hero from '@/components/hero'
import CategoryShowcase from '@/components/categories'
import FeaturedProducts from '@/components/products/featured'
import BenefitsSection from '@/components/benefits'
import PromotionalBanner from '@/components/banner'
import TestimonialSection from '@/components/testimonials'
import NewsletterSection from '@/components/newsletter'

export const revalidate = 60

export default async function Home() {
  let bestProducts1: Product[] = []
  let bestProducts2: Product[] = []
  let bestProducts3: Product[] = []
  let categories: Category[] = []

  const [homeResult, categoriesResult] = await Promise.allSettled([
    fetchHomeProducts({ next: { revalidate } }),
    fetchCategories(1, { next: { revalidate } }),
  ])

  if (homeResult.status === "fulfilled") {
    const homeData = homeResult.value
    bestProducts1 = homeData.bestProducts1
    bestProducts2 = homeData.bestProducts2
    bestProducts3 = homeData.bestProducts3
  } else {
    console.error("Erro ao carregar produtos da home:", homeResult.reason)
  }

  if (categoriesResult.status === "fulfilled") {
    categories = categoriesResult.value.categories
  } else {
    console.error("Erro ao carregar categorias da home:", categoriesResult.reason)
  }

  return (
    <div>
      <Hero />
      <CategoryShowcase categories={categories} />

      <FeaturedProducts products={bestProducts1} />

      <PromotionalBanner
        image="/home/best-products-side-image/quad.jpg"
        title="Potência sem Limites"
        subtitle="Motocross, UTV e Quadriciclos com desempenho profissional para os maiores desafios"
        cta="Conferir Linha Off-Road"
        ctaLink="/allproducts"
      />

      <BenefitsSection />

      <PromotionalBanner
        image="/home/best-products-side-image/camp.jpg"
        title="Aventura ao Ar Livre"
        subtitle="Equipamentos de camping e trekking para explorar a natureza com segurança e conforto"
        cta="Ver Equipamentos"
        ctaLink="/allproducts"
        invert
      />

      <TestimonialSection />
      <NewsletterSection />
    </div>
  )
}
