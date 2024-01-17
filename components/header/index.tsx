'use client'
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search as SearchIcon } from "lucide-react"
import Search from '../search';

const links = [
    { href: '/posts', label: 'Publicações' },
    { href: '/admin', label: 'Admin' }
]

export default function Header() {
    const [isNavOpen, setIsNavOpen] = useState(false)
    const [isSearchOpen, setIsSearchOpen] = useState(false)

    const toggleNav = () => setIsNavOpen(!isNavOpen)
    const toggleSearch = () => setIsSearchOpen(!isSearchOpen)

    const toggleNavSearch = () => {
        if (isSearchOpen) {
            toggleSearch()
        }
        else {
            toggleNav()
        }
    }

    return (
        <header className="bg-indigo-950 sticky top-0 z-20 mx-auto w-full py-8 px-4 md:p-0 mb-8">
            <div className="flex flex-wrap items-center justify-between w-full md:w-10/12 mx-auto">
                <Link href='/' className='flex gap-4 items-center'>
                    <Image
                        src={'/logo/logo.png'}
                        alt="logo do blog"
                        width={904}
                        height={904}
                        className="h-20 w-20 rounded-xl"
                    />
                    <span className="text-white hidden md:block text-3xl font-semibold"></span>
                    <span className="text-white hidden md:block text-3xl font-semibold">Adrenalin</span>
                </Link>
                <nav className="flex justify-end">
                    <div className="hidden w-full md:flex justify-end items-center gap-16">
                        <button onClick={toggleNav}>
                            {isSearchOpen ?
                                <X
                                    onClick={toggleSearch}
                                    className="w-10 h-10 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                                />
                                :
                                <SearchIcon
                                    onClick={toggleSearch}
                                    className="w-10 h-10 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                                />
                            }
                        </button>
                        {links.map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:bg-white/20 p-2 rounded-xl">{link.label}</span>
                            </Link>
                        )}
                    </div>
                    <div className="md:hidden">
                        {isNavOpen || isSearchOpen ?
                            <X
                                onClick={toggleNavSearch}
                                className="w-10 h-10 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                            />
                            :
                            <div className="flex gap-4">
                                <SearchIcon
                                    onClick={toggleSearch}
                                    className="w-12 h-12 text-white cursor-pointer"
                                />
                                <Menu
                                    onClick={toggleNav}
                                    className="w-12 h-12 text-white cursor-pointer"
                                />
                            </div>
                        }
                    </div>
                </nav>
                {isSearchOpen && (
                    <Search />
                )}

                {isNavOpen && (
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-10">
                        {links.map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:bg-white/20 p-2 rounded-xl">{link.label}</span>
                            </Link>
                        )}
                    </div>
                )}
            </div>
        </header>
    )
}