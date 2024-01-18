import BestProducts from '@/components/best-products'
import HeroSection from '@/components/hero-section'
import KnowAdrenalin from '@/components/know-adrenalin'

export default function Home() {
  return (
    <div className='space-y-24 md:space-y-32 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto'>
      <HeroSection />
      <KnowAdrenalin />
      <BestProducts />
    </div>
  )
}
