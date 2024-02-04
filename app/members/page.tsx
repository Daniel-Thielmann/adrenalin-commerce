import Footer from '@/components/footer'
import Header from '@/components/header'
import ManageMembersTable from "@/components/table/manage-members";
import { fetchMembers } from "@/actions/members/actions";
import { count } from 'console';

export default async function MemberPage({
    searchParams
}: {
    searchParams: {
        page?: string;
    }
}) {

    const currentPage = Number(searchParams?.page) || 1
    const { members, totalPages } = await fetchMembers(currentPage)

    return (
        <div>
            <Header />
            <h2 className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-20">
                Todos os Membros</h2>
            <ManageMembersTable members={members} totalPages={totalPages} />
            <Footer />
        </div>
    );
}
