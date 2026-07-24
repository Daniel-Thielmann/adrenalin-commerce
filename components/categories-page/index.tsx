import { Category } from "@prisma/client";
import CategoriesCard from "../categories-card";
import Pagination from "../pagination";
import Link from "next/link";
import { mapCategory } from "@/lib/category-map";

export default function CategoriesPage({ categories, totalPages }: { categories: Category[], totalPages: number }) {
    const mappedCategories = categories.map(mapCategory);

    return (
        <div className="flex flex-col min-h-screen bg-adrenalin-black">
            <div className="container-premium flex-1 py-section">
                <h1 className="font-heading text-display-sm md:text-display-md text-white uppercase tracking-wide leading-none text-center mb-4">
                    Categorias
                </h1>
                <p className="font-body text-sm text-adrenalin-light text-center max-w-lg mx-auto mb-16">
                    Explore nossa seleção de equipamentos para cada modalidade
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {mappedCategories.map((category, index) => (
                        <CategoriesCard key={index} category={category} />
                    ))}
                </div>

                <div className="flex justify-center mt-12">
                    <Link href="/allproducts" className="btn-primary">
                        Ver Todos os Produtos
                    </Link>
                </div>

                {totalPages > 1 && (
                    <div className="mt-8">
                        <Pagination totalPages={totalPages} />
                    </div>
                )}
            </div>
        </div>
    )
}