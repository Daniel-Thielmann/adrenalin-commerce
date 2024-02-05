import { fetchMemberById } from "@/actions/admin/members/actions";
import EditMember from "@/components/crud/members/edit";
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
    const member = await fetchMemberById(id);

    if (!member) {
        return <div>Membro não encontrado</div>;
    }

    return (
        <div className="w-full space-y-12">
            <div className={ibmplex.className}>
                <DashboardTitle title={`Editar Membro ${member?.name}`} description="Edite um membro por aqui" />
                <EditMember member={member} />
            </div>
        </div>
    )
}
