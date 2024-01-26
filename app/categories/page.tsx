import fetchCategories from "@/actions/categories/actions";
import CategoriesPage from "@/components/categories-page";
import Categories from "@/components/categories-page";
import Footer from "@/components/footer";
import Header from "@/components/header";
import Link from "next/link";


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


