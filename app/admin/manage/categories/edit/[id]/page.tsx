import EditCategorie from "@/components/crud/categories/edit";
import DashboardTitle from "@/components/dashboard/dashboard-title";
import { IBM_Plex_Sans } from 'next/font/google'


const ibmplex = IBM_Plex_Sans({
    weight: ['400'],
    style: "normal",
    subsets: ['latin']
})

export default function Page() {
    return (
        <div className="w-full space-y-12">
            <div className={ibmplex.className}>
                <DashboardTitle title="Editar Categoria X" description="Edite uma categoria por aqui" />
                <EditCategorie />
            </div>
        </div>
    )
}