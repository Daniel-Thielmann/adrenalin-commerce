import { fetchMembers } from "@/lib/api";
import MemberPage from '@/components/members-page';
import Header from "@/components/header";
import Footer from "@/components/footer";

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
    const { members, totalPages, count } = await fetchMembers(currentPage, query)

    return (
        <div className="flex flex-col min-h-screen bg-adrenalin-black">
            <Header />
            <main className="container-premium flex-1 py-section">
                <h1 className="font-heading text-display-sm md:text-display-md text-white uppercase tracking-wide leading-none text-center mb-12">
                    Membros
                </h1>
                <div className="max-w-5xl mx-auto">
                    <MemberPage members={members} count={count} totalPages={totalPages} query={query} />
                </div>
            </main>
            <Footer />
        </div>
    );
}