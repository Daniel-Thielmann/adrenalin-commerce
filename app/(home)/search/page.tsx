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
        <div className="container-premium py-section min-h-screen">
            <SearchPage products={products} count={count} totalPages={totalPages} />
        </div>
    )
}