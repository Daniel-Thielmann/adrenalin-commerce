import { fetchFilteredProducts } from "@/actions/search/actions";
import SearchPage from "@/components/search-page";

export default async function Page({
    searchParams,
}: {
    searchParams: {
        query?: string;
        page?: string;
    }
}) {

    const query = searchParams?.query || ''
    const currentPage = Number(searchParams?.page) || 1

    const { products, count, totalPages } = await fetchFilteredProducts(query, currentPage)

    return (
        <div className='flex flex-col gap-20 w-full md:w-10/12 py-8 px-4 md:p-0 min-h-screen mx-auto'>
            <SearchPage products={products} count={count} totalPages={totalPages} />
        </div>
    )
}