import { Product } from "@/types/data";
import ProductCard from "../products/product-card";
import Pagination from "../pagination";

export default function ProductsPage({ products, totalPages }: { products: Product[], totalPages: number }) {
    return (
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
    )
}