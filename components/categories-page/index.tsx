import { Category } from "@prisma/client";
import CategoriesCard from "../categories-card";
import Pagination from "../pagination";
import Link from "next/link";
import Header from '@/components/header'
import Footer from '@/components/footer'

export default function CategoriesPage({ categories, totalPages }: { categories: Category[], totalPages: number }) {
    return (
        <div>
            <Header />
            <div className="flex flex-col gap-12 space-y-8">
                {categories.map((category, index) => (
                    <CategoriesCard key={index} category={category} />

                ))}

                <div className="flex items-center justify-center m-4">
                    <Link href="/allproducts">
                        <button className='bg-[#E3FC02] w-full text-black px-8 py-4 rounded-md md:text-2xl lg:text-2xl xl:text-4xl duration-200
                        hover:bg-[#a0ab3c]'>
                            Veja todos os Produtos!
                        </button>
                    </Link>
                </div>

                {totalPages > 1 && (
                    <Pagination totalPages={totalPages} />
                )}
            </div>
            <Footer />
        </div>
    )
}