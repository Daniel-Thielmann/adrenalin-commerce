import Footer from '@/components/footer'
import Header from '@/components/header'
import { fetchMembers } from "@/actions/members/actions";
import MemberPage from '@/components/members-page';


export default async function Page({
    searchParams
}: {
    searchParams: {
        page?: string;
    }
}) {

    const currentPage = Number(searchParams?.page) || 1
    const { members, totalPages, count } = await fetchMembers(currentPage)

    return (
        <div>
            <Header />
            <MemberPage members={members} count={count} totalPages={totalPages} />
            <Footer />
        </div>
    );
}
