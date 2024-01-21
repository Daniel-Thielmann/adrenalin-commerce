import DashboardCard from "../dashboard-card";

export default function DashboardPage() {
    return (
        <div className="flex flex-col space-y-12">
            <div className="flex flex-col sm:flex-row sm:flex-wrap gap-8 w-full">
                <DashboardCard title="Categorias" description="Gerenciar" href="/admin/manage/categories" />
                <DashboardCard title="Produtos" description="Gerenciar" href="/admin/manage/products" />
            </div>
        </div>
    )
}