import { fetchHomeProducts, fetchCategories } from "@/lib/api"
import type { Product, Category } from "@/types/data"
import Hero from "@/components/hero"
import CategoryShowcase from "@/components/categories"
import FeaturedProducts from "@/components/products/featured"
import KenevoExperience from "@/components/kenevo-experience/KenevoExperience"
import EditorialCampaign from "@/components/home/editorial-campaign"
import NewArrivals from "@/components/home/new-arrivals"
import BenefitsSection from "@/components/benefits"
import NewsletterSection from "@/components/newsletter"
import BrandStatement from "@/components/home/brand-statement"

export const revalidate = 60

export default async function Home() {
  let featured: Product[] = []
  let arrivals: Product[] = []
  let categories: Category[] = []

  const [homeResult, categoriesResult] = await Promise.allSettled([
    fetchHomeProducts({ next: { revalidate } }),
    fetchCategories(1, { next: { revalidate } }),
  ])

  if (homeResult.status === "fulfilled") {
    featured = homeResult.value.bestProducts1
    arrivals = homeResult.value.bestProducts2
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
      <BrandStatement />
      <FeaturedProducts products={featured} />
      <KenevoExperience />
      <EditorialCampaign />
      <NewArrivals products={arrivals} />
      <BenefitsSection />
      <NewsletterSection />
    </div>
  )
}
