import DashboardTitle from "@/components/dashboard/dashboard-title";
import { IBM_Plex_Sans } from 'next/font/google'
import CreateCategorie from "@/components/crud/categories/create";


const ibmplex = IBM_Plex_Sans({
    weight: ['400'],
    style: "normal",
    subsets: ['latin']
})

export default function Page() {
    return (
        <div className="w-full space-y-12">
            <div className={ibmplex.className}>
                <DashboardTitle title="Criar Categorias" description="Crie uma categoria por aqui" />
                <CreateCategorie />
            </div>
        </div>
    )
}