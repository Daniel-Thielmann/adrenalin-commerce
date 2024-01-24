'use client'
import { Product } from "@/types/data";
import SecondarySearch from "./secondary-search";
import Link from "next/link";
import ProductCard from "../product-card";
import Pagination from "../pagination";

export default function SearchPage({ products, count, totalPages }: { products: Product[], count: number, totalPages: number }) {
    return (
        <div className="w-full">
            <SecondarySearch count={count} />
            {count === 0 ? (
                <div className="w-full flex flex-col">
                    <span className="text-2xl text-white/70">
                        Nenhum produto encontrado.
                    </span>
                    <span className="text-xl text-white/70">
                        Tente procurar por outra coisa, ou explore outras <Link href={'/products'}>categorias</Link>
                    </span>
                </div>
            ) : (
                <div className="w-full flex flex-wrap gap-8">
                    {products.map((product, index) => (
                        <ProductCard key={index} product={product} />
                    ))}
                    {totalPages > 1 && (
                        <Pagination totalPages={totalPages} />
                    )}
                </div>
            )}
        </div>
    )
}