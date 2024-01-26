import getBestProducts from '@/actions/home/actions'
import BestProducts1 from '@/components/best-products-section/best-products(1)'
import BestProducts3 from '@/components/best-products-section/best-products(3)'
import BestProductsReverse2 from '@/components/best-products-section/best-products-reverse(2)'
import KnowAdrenalin from '@/components/know-adrenalin'
import Slider from '@/components/slider'
import Title from '@/components/title'
import WallpaperDivision from '@/components/wallpaper-division'

export default async function Home() {
  const products = await getBestProducts()

  return (
    <div>
      <div className='flex flex-col gap-20 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto'>
        <Slider />
        <KnowAdrenalin />
        <Title title="Destaques por categoria" subtitle='' />
        <BestProducts1 products={products} />
        <BestProductsReverse2 products={products} />
        <BestProducts3 products={products} />
      </div>
      <WallpaperDivision />
    </div>
  )
}