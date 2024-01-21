import { Settings } from "lucide-react";
import Link from "next/link";

type DashboardCardProps = {
    title: string;
    href: string;
    description: string;
}

export default function DashboardCard({ title, href, description }: DashboardCardProps) {
    return (
        <Link
            href={href}
            className="hover:scale-[1.02] transition-all duration-200 w-11/12 sm:w-72 sm:min-h-[96px] bg-gradient-to-r
            from-[#E3FC02] to-green-900 rounded-lg p-4"
        >
            <div className="flex flex-col justify-center font-semibold">
                <div className="flex justify-between text-black">
                    <h3 className="text-xl">{title}</h3>
                    <Settings />
                </div>
                <span className="text-black-300 text-sm">{description}</span>
            </div>
        </Link>
    )
}