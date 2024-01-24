import { fetchProductById } from "@/actions/product-individual/actions";
import IndividualProduct from "@/components/individual-product";

export default async function Page({ params }: { params: { id: string } }) {

    const id = parseInt(params.id, 10)
    const product = await fetchProductById(id);

    return (
        <div className="w-full md:w-10/12 m-auto py-8 px-4 md:p-0 min-h-screen">
            <IndividualProduct product={product} />
        </div>
    )
}