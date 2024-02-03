import { NextPageContext } from 'next';
import { Category } from "@prisma/client";
import CategoriesPage from "@/components/categories-page";
import fetchCategories from "@/actions/categories/actions";

interface CategoriesProps {
    categories: Category[];
    totalPages: number;
}

const CategoryPage = ({ categories, totalPages }: CategoriesProps) => {
    return (
        <div className="">
            <CategoriesPage categories={categories} totalPages={totalPages} />
        </div>
    )
}

CategoryPage.getInitialProps = async ({ query }: NextPageContext): Promise<CategoriesProps> => {
    const currentPage = Number(query.page as string) || 1;
    const { categories, totalPages } = await fetchCategories(currentPage);

    return {
        categories,
        totalPages
    }
}

export default CategoryPage;
