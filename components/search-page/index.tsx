import PostCard from "../product-card";
import SecondarySearch from "./secondary-search";
import Link from "next/link";

export default function SearchPage() {
    const count = 0;

    return (
        <div className="w-full">
            <SecondarySearch count={count} />
            {/* depois trocar para === 0 */}
            {count != 0 ? (
                <div className="w-full flex flex-col">
                    <span className="text-2xl text-white/70">
                        Nenhum produto encontrado.
                    </span>
                    <span className="text-xl text-white/70">
                        Tente procurar por outra coisa, ou explore outras <Link href={'/posts'}>categorias</Link>
                    </span>
                </div>
            ) : (
                <div className="w-full flex flex-wrap gap-8">
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                    <PostCard />
                </div>
            )}
        </div>
    )
}