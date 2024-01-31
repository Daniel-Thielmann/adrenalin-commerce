'use client'

import { Home, Layers, LayoutDashboard, Menu, ScrollText, X } from "lucide-react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"

const LinksSidebar = [
    { href: '/', label: 'Pagina Inicial', icon: Home },
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/manage/categories', label: 'Categorias', icon: Layers },
    { href: '/admin/manage/allproducts', label: 'Produtos', icon: ScrollText },
]

export default function AdminSidebar() {
    const [isAdminSideBarOpen, setIsAdminSidebarOpen] = useState(false)

    const toggleAdminSidebar = () => setIsAdminSidebarOpen(!isAdminSideBarOpen)
    return (
        <div>
            <div className="bg-green-600 sm:hidden flex flex-wrap items-center justify-between px-3 py-4">
                <div className="flex items-center gap-2 cursor-default">
                    <Image
                        src={'/logo/adrenalin1.png'}
                        alt="logo do blog"
                        width={150}
                        height={150}
                        className="h-21 w-21 rounded-xl"
                    />
                    <span className="text-2xl text-black">
                        Adrenalin
                    </span>
                </div>
                <Menu
                    className="w-8 h-8 text-black"
                    onClick={toggleAdminSidebar}
                />
            </div>
            <aside className={`fixed top-0 left-0 z-40 w-full sm:w-72 h-screen transition-transform ${isAdminSideBarOpen ? ''
                : '-translate-x-full'} sm:translate-x-0`}>
                <div className="bg-green-600 h-full px-3 py-4 overflow-y-auto">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 cursor-default">
                            <Image
                                src={'/logo/adrenalin1.png'}
                                alt="logo do blog"
                                width={150}
                                height={150}
                                className="h-21 w-21 rounded-xl"
                            />
                            <span className="text-2xl text-black">
                                Adrenalin
                            </span>
                        </div>
                        <X
                            className="w-8 h-8 text-black sm:hidden"
                            onClick={toggleAdminSidebar}
                        />
                    </div>
                    <div className="h-[1px] w-full bg-gray-300 my-4" />
                    <ul className="space-y-8">
                        {LinksSidebar.map(({ href, label, icon: Icon }, index) => (
                            <li key={index}>
                                <Link href={href} className="flex items-center px-2 py-3 rounded-lg hover:bg-black/20">
                                    <Icon className="w-6 h-6 text-gray-300" />
                                    <span className="ms-3 text-xl text-black">{label}</span>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </aside>
        </div >
    )
}