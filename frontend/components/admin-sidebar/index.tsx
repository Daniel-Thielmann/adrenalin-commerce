'use client'

import { Home, Layers, LayoutDashboard, LogOut, Menu, ScrollText, X, User } from "lucide-react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"

const LinksSidebar = [
    { href: '/', label: 'Pagina Inicial', icon: Home },
    { href: '/admin', label: 'Dashboard', icon: LayoutDashboard },
    { href: '/admin/manage/categories', label: 'Categorias', icon: Layers },
    { href: '/admin/manage/allproducts', label: 'Produtos', icon: ScrollText },
    { href: '/admin/manage/members', label: 'Membros', icon: ScrollText },
]

export default function AdminSidebar() {
    const [isAdminSideBarOpen, setIsAdminSidebarOpen] = useState(false)
    const [user, setUser] = useState<{ name: string; email: string; role: string } | null>(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        if (!token) return
        fetch(`${process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3333/api'}/auth/me`, {
            headers: { Authorization: `Bearer ${token}` },
        })
            .then((res) => res.ok ? res.json() : null)
            .then((data) => setUser(data))
            .catch(() => {})
    }, [])

    const toggleAdminSidebar = () => setIsAdminSidebarOpen(!isAdminSideBarOpen)

    async function handleLogout() {
        localStorage.removeItem('token')
        document.cookie = 'session=; path=/; max-age=0'
        window.location.href = '/login'
    }

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
                    {user && (
                        <div className="px-2 py-3 mb-4 bg-black/10 rounded-lg">
                            <div className="flex items-center gap-2">
                                <User className="w-5 h-5 text-gray-300" />
                                <div className="min-w-0">
                                    <p className="text-sm font-medium text-black truncate">{user.name}</p>
                                    <p className="text-xs text-gray-600 truncate">{user.email}</p>
                                    <p className="text-[10px] text-gray-500 uppercase">{user.role}</p>
                                </div>
                            </div>
                        </div>
                    )}
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
                    <div className="h-[1px] w-full bg-gray-300 my-4" />
                    <button onClick={handleLogout} className="flex items-center w-full px-2 py-3 rounded-lg hover:bg-black/20">
                        <LogOut className="w-6 h-6 text-gray-300" />
                        <span className="ms-3 text-xl text-black">Sair</span>
                    </button>
                </div>
            </aside>
        </div >
    )
}