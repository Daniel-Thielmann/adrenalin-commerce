import { fetchAllCategoriesAdmin } from "@/lib/api"
import DashboardTitle from "@/components/dashboard/dashboard-title"
import ManageCategoriesTable from "@/components/table/manage-categories"
import { IBM_Plex_Sans } from 'next/font/google'


const ibmplex = IBM_Plex_Sans({
    weight: ['400'],
    style: "normal",
    subsets: ['latin']
})

export default async function Page() {
    const { categories, count } = await fetchAllCategoriesAdmin()

    return (
        <div className="w-full space-y-12">
            <div className={ibmplex.className}>
                <DashboardTitle title="Gerenciar Categorias" description="Faça as ações administrativas por aqui" />
                <ManageCategoriesTable categories={categories} count={count} />
            </div>
        </div>
    )
}