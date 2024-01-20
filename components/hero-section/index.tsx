import { Boxes, Layers3, HandMetal, Flame } from 'lucide-react';
import Image from "next/image";
import Link from "next/link";
import { IBM_Plex_Sans } from 'next/font/google'

const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: "400"
})


export default function HeroSection() {
    return (
        <div className="w-full flex flex-col lg:grid lg:grid-flow-col lg:grid-cols-6 items-center gap-6">

            <Link href='/categories' className='lg:col-span-3 relative group'>
                <div className='relative rounded-3xl overflow-hidden'>
                    <Image
                        src='/home/placeholder/placeholder.jpg'
                        width={1600}
                        height={1082}
                        alt="imagem em destaque"
                        className='object-cover h-[500px] lg:h-[500px]'
                    />
                    <div className='absolute inset-0 bg-gradient-to-b from-transparent to-black lg:opacity-0 lg:group-hover:opacity-100 transition-opacity
                duration-300' />
                </div>

                <div className='absolute bottom-0 p-6 text-white opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity
                duration-300'>
                    <div className='flex flex-col gap-4'>
                        <div className='flex gap-4 items-center lg:p-4 lg:bg-white/70 lg:w-fit lg:rounded-lg lg:text-black'>
                            <h3 className='text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl 
                            uppercase text-white lg:text-black'>Produtos mais vendidos por categoria</h3>

                            <Layers3 className='w-8 h-8 md:h-10 md:w-10' />
                        </div>
                        <div className={ibm.className}>
                            <p className='text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl line-clamp-6'>
                                Bike, Motocross, UTV, Quadriciclo, Surf, Camping, Pesca, entre outros...
                            </p>
                        </div>
                    </div>
                </div>
            </Link>

            <div className="flex flex-col justify-center gap-12 lg:col-span-3 p-4 h-auto lg:max-h-[700px] overflow-hidden">
                <div className="flex flex-col gap-6 leading-relaxed">
                    <h2 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase">Explore a Adrenalina</h2>
                    <div className={ibm.className}>
                        <div className='space-y-5'>
                            <p className="text-white text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-justify">Onde a diversão é séria e a adrenalina é o nosso sobrenome! 🔥</p>
                            <p className="text-white text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-justify">Desbrave picos de downhill, domine terrenos selvagens no motocross,
                                explore o desconhecido com UTVs e quadriciclos, deslize pelos mares no wind surf e desbrave aventuras no camping. 🏕️</p>
                            <p className="text-white text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-justify">Seja um veterano ou um novato destemido, estamos aqui para garantir que sua jornada seja pura adrenalina! 🤘</p>
                        </div>

                    </div>
                </div>
                <Link href='/allproducts'>
                    <button className='bg-[#E3FC02] w-full md:w-10/12 text-black px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200
                    hover:bg-[#a0ab3c] flex items-center justify-center gap-3'>
                        Veja todos os Produtos!
                        <Boxes className='w-7 h-7' />
                    </button>
                </Link>
            </div>
        </div >
    )
}