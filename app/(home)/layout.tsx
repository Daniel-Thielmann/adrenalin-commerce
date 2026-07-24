import Header from '@/components/header'
import Footer from '@/components/footer'

export const dynamic = 'force-dynamic'

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}