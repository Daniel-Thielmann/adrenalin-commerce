import BestProducts from '@/components/best-products'
import BestProductsReverse from '@/components/best-products-reverse'
import HeroSection from '@/components/hero-section'
import KnowAdrenalin from '@/components/know-adrenalin'
import Slider from '@/components/slider'
import Title from '@/components/title'
import WallpaperDivision from '@/components/wallpaper-division'
import Image from "next/image"

export default function Home() {
  return (
    <div>
      <div className='flex flex-col gap-20 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto'>
        <Slider />
        <KnowAdrenalin />
        <Title title="Destaques por categoria" subtitle='' />
        <BestProducts />
        <BestProductsReverse />
        <BestProducts />
      </div>
      <WallpaperDivision />
    </div>
  )
}
