import Link from "next/link";
import Image from "next/image";
import { CircleDollarSign, ShoppingBasket } from "lucide-react";

export default function BestProductsCardReverse() {
    return (
        <Link href={'/'} className="group">
            <div className="flex group-hover:shadow-2xl rounded-xl duration-300">
                <div className="flex w-full flex-col rounded-xl shadow-lg">
                    <div className="rounded-xl cursor-pointer">
                        <Image
                            src='/home/placeholder/placeholder.jpg'
                            alt="placeholder"
                            width={500}
                            height={500}
                            className=""
                        />
                    </div>
                    <div className="p-4 flex flex-col justify-center items-center">
                        <h1 className="text-xl 2xl:text-2xl 3xl:text-3xl text-gray-200 line-clamp-2">Specialized Kenevo</h1>
                        <div className="flex gap-2 items-center text-lg text-green-600">
                            <CircleDollarSign className="h-7 w-7" />
                            <span className="text-lg 2xl:text-xl 3xl:text-2xl">20k</span>
                        </div>

                        <div className="flex items-center text-lg text-white">
                            <ShoppingBasket className="h-7 w-7" />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    )
}