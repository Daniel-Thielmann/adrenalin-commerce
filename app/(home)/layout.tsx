import Header from '@/components/header'
import Footer from '@/components/footer'

export const dynamic = 'force-dynamic'

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    )
}