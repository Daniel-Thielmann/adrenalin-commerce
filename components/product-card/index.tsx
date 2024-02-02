import Link from "next/link";
import Image from "next/image";
import { CircleDollarSign } from "lucide-react";
import { Product } from "@/types/data";

function truncate(str: string, num: number): string {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + '...';
}

export default function ProductCard({ product }: { product: Product }) {
    return (
        <Link href={`/product/${product?.id}`} className="flex flex-wrap">
            <div className="flex flex-col text-gray-300 shadow-lg rounded-xl group-hover:shadow-2xl duration-300 overflow-hidden w-full lg:flex-col">
                <Image
                    src={product?.image || "/home/placeholder/placeholder.jpg"}
                    width={1920}
                    height={1080}
                    className="max-w-full lg:max-w-[320px] 2xl:max-w[320px]"
                    alt={"placeholder"}
                />
                <div className="flex flex-col justify-between p-6 w-full">
                    <div className="flex flex-col gap-2">
                        <h1 className="flex justify-center items-center line-clamp-1 text-xl 2x:text-2xl 3xl:text-3xl font-semibold text-white">
                            {product?.title}
                        </h1>
                        <div className="flex flex-col items-center gap-6">
                            <div className="flex items-center gap-1 text-yellow-400">
                                <p>⭐⭐⭐⭐⭐</p>
                            </div>
                            <div className="flex items-center gap-1 text-green-400">
                                <CircleDollarSign className="h-5 w-5" />
                                <span className="text-base 2xl:text-xl 3xl:text-2xl font-semibold">
                                    {product?.price}
                                </span>
                            </div>
                        </div>
                    </div>
                    <p className="flex justify-center text-base 2xl:text-xl 3xl:text-2xl">
                        {product?.content ? truncate(product.content, 100) : ''}
                    </p>
                    <div className="flex justify-center flex-wrap items-center gap-2">
                        {product?.categories?.map((category, index) => (
                            <span key={index} className="text-pink-500 text-sm 2xl:text-lg 3xl:text-xl font-semibold uppercase break-words">
                                #{category?.name}
                                {index < product.categories?.length! - 1 && ', '}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </Link>
    );
}
