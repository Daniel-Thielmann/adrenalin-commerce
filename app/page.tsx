import BestProducts from '@/components/best-products'
import BestProductsReverse from '@/components/best-products-reverse'
import HeroSection from '@/components/hero-section'
import KnowAdrenalin from '@/components/know-adrenalin'
import Title from '@/components/title'

export default function Home() {
  return (
    <div className='flex flex-col gap-20 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto'>
      <HeroSection />
      <KnowAdrenalin />
      <Title title="Em destaque" subtitle="Produtos mais vendidos" />
      <BestProducts />
      <BestProductsReverse />
      <BestProducts />
    </div>
  )
}
