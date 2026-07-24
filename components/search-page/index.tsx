'use client'
import { Product } from "@/types/data";
import SecondarySearch from "./secondary-search";
import Link from "next/link";
import ProductCard from "../products/product-card";
import Pagination from "../pagination";

export default function SearchPage({ products, count, totalPages }: { products: Product[], count: number, totalPages: number }) {
    return (
        <div className="w-full">
            <SecondarySearch count={count} />
            {count === 0 ? (
                <div className="flex flex-col items-center py-16">
                    <span className="font-body text-lg text-white/50 mb-2">
                        Nenhum produto encontrado.
                    </span>
                    <Link href="/allproducts" className="font-body text-sm text-adrenalin-yellow hover:underline">
                        Ver todos os produtos
                    </Link>
                </div>
            ) : (
                <div className="w-full">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-6">
                        {products.map((product, index) => (
                            <ProductCard key={index} product={product} index={index} />
                        ))}
                    </div>
                    {totalPages > 1 && (
                        <div className="mt-10">
                            <Pagination totalPages={totalPages} />
                        </div>
                    )}
                </div>
            )}
        </div>
    )
}