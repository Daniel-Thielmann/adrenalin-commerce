import { Bike, Layers3, Zap } from "lucide-react";
import Title from "../title";
import BestProductsCard from "./card";
import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Sans } from 'next/font/google'

const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: "400"
})



export default function BestProducts() {
    return (
        <div>
            <div className="mb-10">
                <Title title="Produtos mais vendidos" subtitle="Em destaque" />
            </div>

            <div className="w-full flex gap-4">

                <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 w-1/2 gap-2">
                    <BestProductsCard />
                    <BestProductsCard />
                </div>


                <Link href='/' className='lg:col-span-3 relative group'>
                    <div className='relative overflow-hidden'>
                        <Image
                            src='/home/best-products-side-image/trek.jpg'
                            alt="imagem em destaque"
                            width={800}
                            height={800}
                            className="cursor-pointer "
                        />
                        <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black lg:opacity-0 lg:group-hover:opacity-100 transition-opacity
                duration-300' />
                    </div>

                    <div className='absolute bottom-0 p-6 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity
                duration-300'>
                        <div className='flex flex-col gap-4'>
                            <div className='flex gap-4 items-center lg:p-4 lg:bg-white/70 lg:w-fit lg:rounded-lg lg:text-black'>
                                <h3 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 
                            uppercase text-white lg:text-black'>Downhill / E-MTB</h3>

                                <Zap className='w-8 h-8 md:h-10 md:w-10' />
                            </div>
                        </div>
                    </div>
                </Link>

            </div>
        </div>
    )
}