import { Product } from "@/types/data";
import ProductCard from "../product-card";
import Pagination from "../pagination";

export default function ProductsPage({ products, totalPages }: { products: Product[], totalPages: number }) {
    return (
        <div className="w-full flex gap-12">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
            {totalPages > 1 && (
                <Pagination totalPages={totalPages} />
            )}
        </div>
    )
}