import Categories from "../categories";
import PostCard from "../product-card";
import Title from "../title";

export default function ProductsPage() {
    return (
        <div className="">
            <h2 className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-12">
                Todos os Produtos</h2>
            <div className="grid grid-cols-4 gap-12">
                <PostCard />
                <PostCard />
                <PostCard />
                <PostCard />
            </div>
        </div>
    )
}