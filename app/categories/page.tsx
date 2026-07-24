import { fetchCategories } from "@/lib/api";
import CategoriesPage from "@/components/categories-page";


export default async function Page({
    searchParams
}: {
    searchParams: {
        page?: string;
    }
}) {

    const currentPage = Number(searchParams?.page) || 1
    const { categories, totalPages } = await fetchCategories(currentPage)

    return (
        <div className="">
            <CategoriesPage categories={categories} totalPages={totalPages} />
        </div>
    )
}


