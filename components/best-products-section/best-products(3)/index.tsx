import { TentTree, Zap } from "lucide-react";
import BestProductsCard from "./card";
import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Sans } from 'next/font/google'
import { Product } from "@/types/data";


type BestProductsProps = {
    products: Product[];
}

const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: "400"
})

export default function BestProducts3({ products }: BestProductsProps) {
    return (
        <div className="w-full flex gap-4 flex-wrap sm:flex-nowrap">

            <div className="grid grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-2 w-full md:w-4/6">
                {products.map((product, index) => (
                    <BestProductsCard key={index} product={product} />
                ))}
            </div>

            <Link href='/' className='lg:col-span-3 relative group'>
                <div className='relative overflow-hidden'>
                    <Image
                        src='/home/best-products-side-image/camp.jpg'
                        alt="imagem em destaque"
                        width={950}
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
                            uppercase text-white lg:text-black '>Camping / Pesca / Surf</h3>
                            <TentTree className='w-8 h-8 md:h-10 md:w-10 mb-2' />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}