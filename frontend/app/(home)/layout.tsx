import Header from '@/components/header'
import Footer from '@/components/footer'
import GoogleAuthHandler from '@/components/google-auth-handler'

export const dynamic = 'force-dynamic'

export default function HomeLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div className="flex flex-col min-h-screen">
            <GoogleAuthHandler />
            <Header />
            <main className="flex-1">
                {children}
            </main>
            <Footer />
        </div>
    )
}