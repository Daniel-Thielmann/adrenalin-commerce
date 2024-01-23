'use client'
import { FC, useState } from "react";
import { ArrowLeft, ArrowRight, Dot } from "lucide-react";

const slides = [
    '/home/best-products-side-image/trek.jpg',
    '/home/best-products-side-image/utv.jpg',
    '/home/best-products-side-image/original.jpg',
    '/home/best-products-side-image/bs.jpg',
    '/home/best-products-side-image/friends.jpg',
    '/home/best-products-side-image/brandon.jpg',
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
        <div className="max-w-[1200px] h-[780px] w-full m-auto py-16 px-4 relative group">
            <div className="w-full h-full rounded-2xl relative overflow-hidden group-hover:after:opacity-100 group-hover:before:opacity-100 transition-opacity duration-300">
                <div
                    className="w-full h-full rounded-2xl bg-center bg-cover duration-500"
                    style={{ backgroundImage: `url(${slides[currentIndex]})` }}
                ></div>
                {/* Gradiente que escurece a imagem */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black lg:opacity-0 lg:group-hover:opacity-100 transition-opacity
                duration-300 before:content-[''] after:content-[''] group-hover:before:opacity-0 group-hover:after:opacity-0"></div>
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
