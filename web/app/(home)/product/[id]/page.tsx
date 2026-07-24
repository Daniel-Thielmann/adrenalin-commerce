import { fetchProductById } from "@/lib/api";
import IndividualProduct from "@/components/individual-product";

export default async function Page({ params }: { params: { id: string } }) {
    const id = parseInt(params.id, 10)
    const product = await fetchProductById(id);

    return (
        <div className="container-premium py-section min-h-screen">
            <IndividualProduct product={product} />
        </div>
    )
}