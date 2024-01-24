import { fetchProducts } from "@/actions/allproducts/actions";
import Footer from "@/components/footer";
import Header from "@/components/header";
import ProductCard from "@/components/product-card";
import ProductsPage from "@/components/product-page";

export default async function Page({
    searchParams
}: {
    searchParams: {
        page?: string;
    }
}) {

    const currentPage = Number(searchParams?.page) || 1
    const { products, totalPages } = await fetchProducts(currentPage)

    return (
        <div>
            <Header />
            <div className="flex flex-col w-full md:w-10/12 mx-auto">
                <h2 className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-12">
                    Todos os Produtos</h2>
                <div className="grid grid-cols-4 gap-12">
                    <ProductsPage products={products} totalPages={totalPages} />
                </div>
            </div>
            <Footer />
        </div>
    )
}