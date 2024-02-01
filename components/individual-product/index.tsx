import Image from "next/image";
import { IBM_Plex_Sans } from 'next/font/google'
import Link from "next/link";
import { DollarSign } from "lucide-react";
import { IndividualProduct } from "@/types/data";
import React from "react";

const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: "400"
})


export default function IndividualProduct({ product }: { product: IndividualProduct }) {

    console.log(product);


    return (
        <div className="w-full flex flex-col lg:grid lg:grid-cols-8 gap-8">
            <div className="lg:col-span-4">
                <Image
                    src={product?.image || '/home/placeholder/placeholder.jpg'}
                    alt="Placeholder"
                    width={1920}
                    height={1080}
                    className="lg:h-[400px] object-cover aspect-video w-full rounded-xl"
                />
            </div>
            <div className="lg:col-span-4 lg:max-h-[700px] 3xl:max-h-max lg:px-4 overflow-auto flex flex-col gap-8 lg:gap-4">
                <div className="flex flex-wrap items-center gap-4 justify-between font-semibold text-gray-300">
                    <h1 className="text-2xl md:text-3xl 2xl:text-4xl 3xl:text-5xl line-clamp-2">
                        {product?.title}
                    </h1>
                    <div className="flex flex-items justify-center items-center gap-1 text-green-400">
                        <DollarSign /> {product?.price}
                    </div>
                </div>
                <p className="text-base 2xl:text-lg 3xl:text-xl text-justify text-gray-300">
                    {product?.categories?.map((category, index) => (
                        <React.Fragment key={index}>
                            <span>{category.name}</span>
                            <br />
                        </React.Fragment>
                    ))}
                </p>
                <div className={ibm.className}>
                    <div className="flex flex-wrap justify-center items-center">
                        <p className="text-base 2xl:text-lg 3xl:text-xl text-justify text-gray-300 mb-8">
                            {product?.content}
                        </p>
                        <button className="bg-[#E3FC02] p-4 rounded-lg flex flex-items justify-center items-center w-4/5 hover:bg-green-500">
                            <Link href={'/'}>
                                Comprar
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}