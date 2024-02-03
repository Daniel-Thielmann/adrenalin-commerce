import AdminSidebar from '@/components/admin-sidebar'
import NextTopLoader from 'nextjs-toploader'


export default function AdminLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <section>
            <AdminSidebar />
            <section className='px-4 py-4 sm:px-20 sm:ml-72'>
                <NextTopLoader
                    color="#fff"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={6}
                    crawl={true}
                    showSpinner={false}
                    easing="ease"
                    speed={200}
                    shadow="0px 5px 15px rgba(0,0,0,0.3)"
                />
                {children}
            </section>
        </section>
    )
}