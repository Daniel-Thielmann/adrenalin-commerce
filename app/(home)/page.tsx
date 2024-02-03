import { getBestProducts1, getBestProducts2, getBestProducts3 } from '@/actions/home/actions'
import BestProducts1 from '@/components/best-products-section/best-products(1)'
import BestProducts3 from '@/components/best-products-section/best-products(3)'
import BestProductsReverse2 from '@/components/best-products-section/best-products-reverse(2)'
import KnowAdrenalin from '@/components/know-adrenalin'
import Slider from '@/components/slider'
import Title from '@/components/title'
import WallpaperDivision from '@/components/wallpaper-division'

export default async function Home() {
  const products1 = await getBestProducts1()
  const products2 = await getBestProducts2()
  const products3 = await getBestProducts3()


  return (
    <div>
      <div className='flex flex-col gap-20 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto'>
        <Slider />
        <KnowAdrenalin />
        <Title title="Destaques por categoria" subtitle='' />
        <BestProducts1 products={products1} />
        <BestProductsReverse2 products={products2} />
        <BestProducts3 products={products3} />
      </div>
      <WallpaperDivision />
    </div>
  )
}