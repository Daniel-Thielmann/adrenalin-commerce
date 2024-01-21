import Header from '@/components/header'
import Footer from '@/components/footer'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <div>
            {children}
        </div>
    )
}