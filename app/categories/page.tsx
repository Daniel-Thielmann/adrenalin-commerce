import Categories from "@/components/categories";
import ProductsPage from "@/components/all-products-page";
import PostCard from "@/components/post-card";
import Link from "next/link";

export default function Page() {
    return (
        <div className="flex flex-col w-full md:w-10/12 mx-auto">
            <h1 className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-12">
                Categorias</h1>
            <Categories />
            <Categories />
            <Categories />
            <Categories />

            <div className="flex items-center justify-center m-4">
                <Link href="/allproducts">
                    <button className='bg-[#E3FC02] w-full text-black px-8 py-4 rounded-md md:text-2xl lg:text-2xl xl:text-4xl duration-200
                        hover:bg-[#a0ab3c]'>
                        Veja todos os Produtos!
                    </button>
                </Link>
            </div>
        </div>
    )
}