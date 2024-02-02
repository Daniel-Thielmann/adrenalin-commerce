import { Product } from "@/types/data";
import ProductCard from "../product-card";
import Pagination from "../pagination";

export default function ProductsPage({ products, totalPages }: { products: Product[], totalPages: number }) {
    return (
        <div className="grid grid-cols-4">
            {products.map((product, index) => (
                <ProductCard key={index} product={product} />
            ))}
            {totalPages > 1 && (
                <Pagination totalPages={totalPages} />
            )}
        </div>
    )
}