import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import type { Product } from "@/types/data";
import Link from "next/link";
import { formatCurrency } from "@/lib/formatters";

export default function IndividualProduct({ product }: { product: Product | null }) {
    if (!product) {
        return (
            <div className="flex flex-col items-center justify-center py-20 text-center">
                <h1 className="font-heading text-4xl text-white/30 uppercase mb-4">Produto não encontrado</h1>
                <Link href="/allproducts" className="btn-primary">
                    Ver Todos os Produtos
                </Link>
            </div>
        );
    }

    return (
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative aspect-square overflow-hidden bg-adrenalin-gray">
                <Image
                    src={product.image || '/home/placeholder/placeholder.jpg'}
                    alt={product.title}
                    fill
                    className="object-contain"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                />
            </div>

            <div className="flex flex-col gap-6">
                <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {product.categories?.map((category) => (
                            <Link
                                key={category.id}
                                href={`/categories/${category.id}`}
                                className="font-body text-xs text-adrenalin-light uppercase tracking-wider hover:text-adrenalin-yellow transition-colors border border-white/10 px-3 py-1"
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>

                    <h1 className="font-heading text-display-xs md:text-display-sm text-white uppercase leading-none tracking-wide mb-4">
                        {product.title}
                    </h1>
                </div>

                <div className="flex items-baseline gap-3">
                    <span className="font-heading text-4xl md:text-5xl text-adrenalin-yellow leading-none">
                        {formatCurrency(product.price)}
                    </span>
                </div>

                <p className="font-body text-sm text-white/60 leading-relaxed">
                    {product.content}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-4 border-t border-white/5">
                    <button className="btn-primary flex-1 justify-center" aria-label="Comprar agora">
                        <ShoppingBag className="w-4 h-4" aria-hidden="true" />
                        Comprar Agora
                    </button>
                    <Link href="/allproducts" className="btn-secondary flex-1 justify-center text-center">
                        Continuar Comprando
                    </Link>
                </div>
            </div>
        </div>
    )
}