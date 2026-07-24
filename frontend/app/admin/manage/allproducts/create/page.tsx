import DashboardTitle from "@/components/dashboard/dashboard-title";
import { IBM_Plex_Sans } from 'next/font/google'
import CreateProduct from "@/components/crud/allproducts/create";


const ibmplex = IBM_Plex_Sans({
    weight: ['400'],
    style: "normal",
    subsets: ['latin']
})

export default function Page() {
    return (
        <div className="w-full space-y-12">
            <div className={ibmplex.className}>
                <DashboardTitle title="Criar Produto" description="Crie um produto por aqui" />
                <CreateProduct />
            </div>
        </div>
    )
}