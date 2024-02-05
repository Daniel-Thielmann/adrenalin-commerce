import Footer from '@/components/footer'
import Header from '@/components/header'
import { searchMembers } from "@/actions/members/actions";
import MemberPage from '@/components/members-page';


export default async function Page({
    searchParams
}: {
    searchParams: {
        page?: string;
        query?: string;
    }
}) {

    const currentPage = Number(searchParams?.page) || 1
    const query = searchParams?.query || '';
    const { members, totalPages, count } = await searchMembers(query, currentPage)

    return (
        <div className='flex flex-col justify-center items-center'>
            <Header />
            <h2 className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-5">
                Todos os Membros</h2>
            <div className='w-4/5'>
                <MemberPage members={members} count={count} totalPages={totalPages} query={query} />
            </div>
            <Footer />
        </div>
    );
}
