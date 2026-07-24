import { getBestProducts1, getBestProducts2, getBestProducts3 } from '@/actions/home/actions'
import fetchCategories from '@/actions/categories/actions'
import Hero from '@/components/hero'
import CategoryShowcase from '@/components/categories'
import FeaturedProducts from '@/components/products/featured'
import BenefitsSection from '@/components/benefits'
import PromotionalBanner from '@/components/banner'
import TestimonialSection from '@/components/testimonials'
import NewsletterSection from '@/components/newsletter'

export default async function Home() {
  const products1 = await getBestProducts1()
  const products2 = await getBestProducts2()
  const products3 = await getBestProducts3()
  const { categories } = await fetchCategories(1)
  const allProducts = [...products1, ...products2, ...products3]

  return (
    <div>
      <Hero />
      <CategoryShowcase categories={categories} />

      <FeaturedProducts />

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