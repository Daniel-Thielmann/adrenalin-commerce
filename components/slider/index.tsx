'use client'
import { FC, useState } from "react";
import { ArrowLeft, ArrowRight, Dot } from "lucide-react";

interface Slide {
    src: string;
    alt: string;
    text: string;
}

const slides: Slide[] = [
    { src: '/home/best-products-side-image/trek.jpg', alt: 'Imagem em destaque 1', text: 'Soooolta fml' },
    { src: '/home/best-products-side-image/utv.jpg', alt: 'Imagem em destaque 2', text: 'Soooolta fml' },
    { src: '/home/best-products-side-image/original.jpg', alt: 'Imagem em destaque 3', text: 'Soooolta fml' },
    { src: '/home/best-products-side-image/bs.jpg', alt: 'Imagem em destaque 4', text: 'Soooolta fml' },
    { src: '/home/best-products-side-image/friends.jpg', alt: 'Imagem em destaque 5', text: 'Soooolta fml' },
    { src: '/home/best-products-side-image/brandon.jpg', alt: 'Imagem em destaque 6', text: 'Soooolta fml' },
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
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative group">
            <div style={{ backgroundImage: `url(${slides[currentIndex].src})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
                <div className="absolute bottom-0 bg-black bg-opacity-50 text-white p-4 text-center text-xl">
                    {slides[currentIndex].text}
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
    );
}

export default Slider;