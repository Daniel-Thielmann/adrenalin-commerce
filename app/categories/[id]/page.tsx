import { fetchCategoryById } from "@/lib/api";
import { categoryThemeMap } from "@/lib/category-map";
import { fetchProductsByCategory } from "@/lib/api";
import Header from "@/components/header"
import Footer from "@/components/footer"
import ProductCard from "@/components/products/product-card"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import Image from "next/image"

export default async function CategoryPage({ params }: { params: { id: string } }) {
    const id = parseInt(params.id, 10)
    const category = await fetchCategoryById(id)
    const products = await fetchProductsByCategory(id)

    const theme = categoryThemeMap[category?.name || ""]
    const displayName = theme?.displayName || category?.name || "Categoria"
    const description = theme?.description || ""
    const bannerImage = theme?.image || category?.image || ""

    return (
        <div className="flex flex-col min-h-screen bg-adrenalin-black">
            <Header />
            <main className="flex-1">
                <section className="relative h-[40vh] md:h-[50vh] overflow-hidden">
                    {bannerImage && (
                        <Image
                            src={bannerImage}
                            alt={displayName}
                            fill
                            className="object-cover opacity-60"
                            priority
                        />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-adrenalin-black via-adrenalin-black/60 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 container-premium">
                        <Link href="/categories" className="inline-flex items-center gap-2 font-body text-xs text-adrenalin-light hover:text-white uppercase tracking-wider transition-colors mb-4">
                            <ArrowLeft className="w-4 h-4" />
                            Todas as Categorias
                        </Link>
                        <h1 className="font-heading text-display-sm md:text-display-md text-white uppercase tracking-wide leading-none">
                            {displayName}
                        </h1>
                        {description && (
                            <p className="font-body text-sm md:text-base text-adrenalin-light mt-2 max-w-xl">
                                {description}
                            </p>
                        )}
                    </div>
                </section>

                <section className="section-spacing">
                    <div className="container-premium">
                        {products.length === 0 ? (
                            <div className="text-center py-20">
                                <p className="font-body text-white/40 text-sm uppercase tracking-wider">
                                    Nenhum produto encontrado nesta categoria
                                </p>
                                <Link href="/allproducts" className="btn-primary inline-flex mt-6">
                                    Ver Todos os Produtos
                                </Link>
                            </div>
                        ) : (
                            <>
                                <p className="font-body text-sm text-adrenalin-light mb-8">
                                    {products.length} {products.length === 1 ? "produto encontrado" : "produtos encontrados"}
                                </p>
                                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                                    {products.map((product, index) => (
                                        <ProductCard key={product.id} product={product} index={index} />
                                    ))}
                                </div>
                            </>
                        )}
                    </div>
                </section>
            </main>
            <Footer />
        </div>
    )
}