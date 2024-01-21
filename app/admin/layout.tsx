import AdminSidebar from '@/components/admin-sidebar'

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <AdminSidebar />
            <section className='px-4 py-4 sm:px-20 sm:ml-72'>
                {children}
            </section>
        </section>
    )
}