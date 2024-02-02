import { Product } from "@/types/data";
import ProductCard from "../product-card";
import Pagination from "../pagination";

export default function ProductsPage({ products, totalPages }: { products: Product[], totalPages: number }) {
    return (
        <div>
            <div className="grid grid-cols-4 space-y-6">
                {products.map((product, index) => (
                    <ProductCard key={index} product={product} />
                ))}
            </div>
            {totalPages > 1 && (
                <Pagination totalPages={totalPages} />
            )}
        </div>
    )
}