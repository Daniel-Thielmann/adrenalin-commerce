import { fetchAllProducts } from "@/actions/admin/allproducts/actions"
import DashboardTitle from "@/components/dashboard/dashboard-title"
import ManageProductsTable from "@/components/table/manage-allProducts"
import { IBM_Plex_Sans } from 'next/font/google'


const ibmplex = IBM_Plex_Sans({
    weight: ['400'],
    style: "normal",
    subsets: ['latin']
})

export default async function Page() {
    const { products, count } = await fetchAllProducts()

    return (
        <div className="w-full space-y-12">
            <div className={ibmplex.className}>
                <DashboardTitle title="Gerenciar Produtos" description="Faça as ações administrativas por aqui" />
                <ManageProductsTable products={products} count={count} />
            </div>
        </div>
    )
}