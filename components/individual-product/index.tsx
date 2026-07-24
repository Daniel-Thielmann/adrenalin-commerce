import Image from "next/image";
import { DollarSign, ShoppingBag, Star, Truck, ShieldCheck } from "lucide-react";
import { IndividualProduct } from "@/types/data";
import Link from "next/link";

export default function IndividualProduct({ product }: { product: IndividualProduct }) {
    const installment = product?.price ? (product.price / 12).toFixed(2) : null;

    return (
        <div className="grid lg:grid-cols-2 gap-8 md:gap-12 items-start">
            <div className="relative aspect-square overflow-hidden bg-adrenalin-gray">
                <Image
                    src={product?.image || '/home/placeholder/placeholder.jpg'}
                    alt={product?.title || "Produto"}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                />
            </div>

            <div className="flex flex-col gap-6">
                <div>
                    <div className="flex flex-wrap gap-2 mb-3">
                        {product?.categories?.map((category, index) => (
                            <Link
                                key={index}
                                href={`/categories/${category.id}`}
                                className="font-body text-xs text-adrenalin-light uppercase tracking-wider hover:text-adrenalin-yellow transition-colors border border-white/10 px-3 py-1"
                            >
                                {category.name}
                            </Link>
                        ))}
                    </div>

                    <h1 className="font-heading text-display-xs md:text-display-sm text-white uppercase leading-none tracking-wide mb-2">
                        {product?.title}
                    </h1>

                    <div className="flex items-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                            <Star key={star} className="w-4 h-4 fill-adrenalin-yellow text-adrenalin-yellow" />
                        ))}
                    </div>
                </div>

                <div className="flex items-baseline gap-3">
                    <span className="font-heading text-4xl md:text-5xl text-adrenalin-yellow leading-none">
                        R$ {product?.price?.toFixed(2)}
                    </span>
                    {product?.price && product.price > 100 && (
                        <span className="font-body text-sm text-adrenalin-light line-through">
                            R$ {(product.price * 1.3).toFixed(2)}
                        </span>
                    )}
                </div>

                {installment && (
                    <p className="font-body text-sm text-adrenalin-light">
                        ou <span className="text-white font-semibold">12x de R$ {installment}</span> sem juros
                    </p>
                )}

                <p className="font-body text-sm text-white/60 leading-relaxed">
                    {product?.content}
                </p>

                <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <button className="btn-primary flex-1 justify-center">
                        <ShoppingBag className="w-4 h-4" />
                        Comprar Agora
                    </button>
                    <button className="btn-secondary flex-1 justify-center">
                        Adicionar ao Carrinho
                    </button>
                </div>

                <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/5">
                    <div className="flex items-center gap-3 p-3 card-premium">
                        <Truck className="w-5 h-5 text-adrenalin-yellow shrink-0" />
                        <div>
                            <span className="font-body text-xs text-white font-semibold block">Frete Grátis</span>
                            <span className="font-body text-[10px] text-adrenalin-light">Acima de R$ 299</span>
                        </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 card-premium">
                        <ShieldCheck className="w-5 h-5 text-adrenalin-yellow shrink-0" />
                        <div>
                            <span className="font-body text-xs text-white font-semibold block">Compra Segura</span>
                            <span className="font-body text-[10px] text-adrenalin-light">Dados protegidos</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}