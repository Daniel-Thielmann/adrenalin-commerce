import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const slides = [
    <Image
        src='/home/best-products-side-image/trek.jpg'
        alt="Imagem em destaque 1"
        width={950}
        height={950}
        className="cursor-pointer"
        key='slide1'
    />,
    <Image
        src='/home/best-products-side-image/utv.jpg'
        alt="Imagem em destaque 2"
        width={950}
        height={950}
        className="cursor-pointer"
        key='slide2'
    />,
    <Image
        src='/home/best-products-side-image/original.jpg'
        alt="Imagem em destaque 3"
        width={950}
        height={950}
        className="cursor-pointer "
        key='slide3'
    />,
    <Image
        src='/home/best-products-side-image/bs.jpg'
        alt="Imagem em destaque 4"
        width={950}
        height={950}
        className="cursor-pointer "
        key='slide4'
    />,
    <Image
        src='/home/best-products-side-image/friends.jpg'
        alt="Imagem em destaque 5"
        width={950}
        height={950}
        className="cursor-pointer "
        key='slide5'
    />,
    <Image
        src='/home/best-products-side-image/brandon.jpg'
        alt="Imagem em destaque 6"
        width={950}
        height={950}
        className="cursor-pointer "
        key='slide6'
    />,
];

export default function Slider() {
    return (
        <div className="max-w-[1400px] h-[780px] w-full m-auto py-16 px-4 relative">
            <div style={{ backgroundImage: `url(${slides[3].props.src})` }} className="w-full h-full rounded-2xl bg-center bg-cover duration-500">
            </div>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer">
                <ArrowLeft size={30} />
            </div>
            <div className="absolute top-[50%] -translate-x-0 translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer ">
                <ArrowRight size={30} />
            </div>
        </div>
    );
}
