import { fetchProductById } from "@/actions/admin/allproducts/actions";
import EditProduct from "@/components/crud/allproducts/edit";
import DashboardTitle from "@/components/dashboard/dashboard-title";
import { IBM_Plex_Sans } from 'next/font/google'


const ibmplex = IBM_Plex_Sans({
    weight: ['400'],
    style: "normal",
    subsets: ['latin']
})

export default async function Page(
    { params }:
        {
            params: { id: string }
        }
) {

    const id = parseInt(params.id, 10)
    const product = await fetchProductById(id);

    if (!product) {
        return <div>Produto não encontrado</div>;
    }

    return (
        <div className="w-full space-y-12">
            <div className={ibmplex.className}>
                <DashboardTitle title={`Editar Produto ${product?.title}`} description="Edite um produto por aqui" />
                <EditProduct category={product} />
            </div>
        </div>
    )
}
