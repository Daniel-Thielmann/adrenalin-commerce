import { fetchProducts } from "@/actions/allproducts/actions";
import ProductsPage from "@/components/product-page";
import Header from "@/components/header";
import Footer from "@/components/footer";

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
        <div className="flex flex-col min-h-screen bg-adrenalin-black">
            <Header />
            <main className="flex-1 container-premium py-section">
                <h1 className="font-heading text-display-sm md:text-display-md text-white uppercase tracking-wide leading-none text-center mb-4">
                    Todos os Produtos
                </h1>
                <p className="font-body text-sm text-adrenalin-light text-center max-w-lg mx-auto mb-12">
                    Equipamentos premium para sua próxima aventura
                </p>
                <ProductsPage products={products} totalPages={totalPages} />
            </main>
            <Footer />
        </div>
    )
}