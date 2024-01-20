import Categories from "@/components/categories";
import ProductsPage from "@/components/all-products-page";
import ProductCard from "@/components/product-card";

export default function Page() {
    return (
        <div className="flex flex-col w-full md:w-10/12 mx-auto">
            <h2 className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-12">
                Todos os Produtos</h2>
            <div className="grid grid-cols-4 gap-12">
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
                <ProductCard />
            </div>
        </div>
    )
}