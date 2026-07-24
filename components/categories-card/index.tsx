import Link from "next/link";

export default function CategoriesCard({ category }: { category: { id?: number; name?: string; image?: string } }) {
    return (
        <Link href={`/categories/${category.id}`} className="group block relative h-[300px] md:h-[380px] overflow-hidden">
            <div
                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-110"
                style={{ backgroundImage: `url(${category.image || '/home/placeholder/placeholder.jpg'})` }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                <h3 className="font-heading text-3xl md:text-4xl lg:text-5xl text-white uppercase leading-none tracking-wide">
                    {category.name}
                </h3>
                <div className="h-0.5 w-0 bg-adrenalin-yellow mt-3 transition-all duration-500 group-hover:w-full" />
            </div>
        </Link>
    );
}