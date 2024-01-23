'use client'
import { FC, useState } from "react";
import { ArrowLeft, ArrowRight, Boxes, Dot } from "lucide-react";
import { IBM_Plex_Sans } from 'next/font/google'
import Link from "next/link";

const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: "400"
})


interface Slide {
    src: string;
    alt: string;
    title: string;
    text: string;
}

const slides: Slide[] = [
    { src: '/home/best-products-side-image/trek.jpg', alt: 'Imagem em destaque 1', title: 'Sinta Adrenalina', text: 'Os melhores equipamentos você encontra aqui' },
    { src: '/home/best-products-side-image/utv.jpg', alt: 'Imagem em destaque 2', title: 'Para todos os esportes', text: 'Liberte-se esqueça o medo! A velocidade é sua amiga' },
    { src: '/home/best-products-side-image/original.jpg', alt: 'Imagem em destaque 3', title: 'Aproveite os descontos', text: 'Grandes decontos e frete grátis, use seu cupom' },
    { src: '/home/best-products-side-image/bs.jpg', alt: 'Imagem em destaque 4', title: 'A sua seguranca', text: 'Site blindado para manter suas informações protegidas' },
    { src: '/home/best-products-side-image/friends.jpg', alt: 'Imagem em destaque 5', title: 'As melhores marcas', text: 'Temos as melhores marcas do mercado, qualidade padrão' },
    { src: '/home/best-products-side-image/brandon.jpg', alt: 'Imagem em destaque 6', title: 'A adrenalina te espera', text: 'Viva a sensação de liberdade que só a adrenalina proporciona' },
];

const Slider: FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
        setCurrentIndex(newIndex);
    }

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1;
        setCurrentIndex(newIndex);
    }

    const goToSlide = (slideIndex: number) => {
        setCurrentIndex(slideIndex);
    }

    return (
        <div className="grid xl:grid-cols-2">
            <div className="max-w-[1000px] h-[700px] w-full m-auto py-16 px-4 relative group">

                <div className="w-full h-full relative overflow-hidden transition-opacity duration-500">
                    <div className="w-full h-full rounded-xl bg-center bg-cover inset-0 bg-gradient-to-b from-transparent to-black lg:group-hover:opacity-60 transition-opacity
                duration-500 before:content-[''] after:content-[''] group-hover:before:opacity-0 group-hover:after:opacity-0 z-20"
                        style={{ backgroundImage: `url(${slides[currentIndex].src})` }}>
                    </div>

                    <div className="flex flex-col">
                        <div className="absolute left-1/2 bottom-44 transform -translate-x-1/2 translate-y-1/2 bg-black bg-opacity-50 text-white p-4 text-center text-xl opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                            {slides[currentIndex].title}
                        </div>
                    </div>

                    <div className={ibm.className}>
                        <div className="absolute left-1/2 bottom-24 transform -translate-x-1/2 translate-y-1/2 bg-black bg-opacity-50 text-white p-4 text-center text-xl opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300">
                            {slides[currentIndex].text}
                        </div>
                    </div>


                </div>

                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                    <ArrowLeft onClick={prevSlide} size={30} />
                </div>
                <div className="hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
                    <ArrowRight onClick={nextSlide} size={30} />
                </div>
                <div className="flex top-4 justify-center py-2 text-white">
                    {slides.map((slide, slideIndex) => (
                        <div
                            key={`dot${slideIndex}`}
                            onClick={() => goToSlide(slideIndex)}
                            className="text-2xl cursor-pointer"
                        >
                            <Dot />
                        </div>
                    ))}
                </div>
            </div>

            <div className="flex flex-auto justify-center flex-col" style={{ userSelect: 'none' }}>
                <h1 className="text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl uppercase mb-16">Explore a Adrenalina</h1>
                <div className={ibm.className}>
                    <div className='space-y-12'>
                        <p className="text-white text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-justify">Onde a diversão é séria e a adrenalina é o nosso sobrenome! 🔥</p>
                        <p className="text-white text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-justify">Desbrave picos de downhill, domine terrenos selvagens no motocross,
                            explore o desconhecido com UTVs e quadriciclos, deslize pelos mares no wind surf e desbrave aventuras no camping. 🏕️</p>
                        <p className="text-white text-lg lg:text-xl 2xl:text-2xl 3xl:text-3xl text-justify">Seja um veterano ou um novato destemido, estamos aqui para garantir que sua jornada seja pura adrenalina! 🤘</p>
                    </div>
                </div>
                <Link href='/allproducts'>
                    <button className='bg-[#E3FC02] w-full md:w-10/12 text-black px-6 py-2 rounded-md md:text-lg lg:text-xl xl:text-2xl duration-200
                    hover:bg-[#a0ab3c] flex items-center justify-center gap-3 mt-16'>
                        Veja todos os Produtos!
                        <Boxes className='w-7 h-7' />
                    </button>
                </Link>
            </div>

        </div>
    );
}

export default Slider;