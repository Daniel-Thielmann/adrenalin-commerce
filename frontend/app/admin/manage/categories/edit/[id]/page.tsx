import { fetchCategoryByIdAdmin } from "@/lib/api";
import EditCategorie from "@/components/crud/categories/edit";
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
    const category = await fetchCategoryByIdAdmin(id);

    if (!category) {
        return <div>Categoria não encontrada</div>;
    }

    return (
        <div className="w-full space-y-12">
            <div className={ibmplex.className}>
                <DashboardTitle title={`Editar Categoria ${category?.name}`} description="Edite uma categoria por aqui" />
                <EditCategorie category={category} />
            </div>
        </div>
    )
}
