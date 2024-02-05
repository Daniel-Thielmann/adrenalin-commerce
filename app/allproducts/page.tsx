import { fetchProducts } from "@/actions/allproducts/actions";
import Footer from "@/components/footer";
import Header from "@/components/header";
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
            <h2 className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-20">
                Todos os Produtos</h2>

            <div className="flex justify-center items-center">
                <ProductsPage products={products} totalPages={totalPages} />
            </div>

            <Footer />
        </div>
    )
}