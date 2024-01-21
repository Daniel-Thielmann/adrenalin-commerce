type DashboardTitleProps = {
    title: string;
    description: string;
}

export default function DashboardTitle({ title, description }: DashboardTitleProps) {
    return (
        <div className="mb-2">
            <h1 className="text-4xl mb-2 text-green-600">{title}</h1>
            <span className="text-green-600">{description}</span>
        </div>
    )
}