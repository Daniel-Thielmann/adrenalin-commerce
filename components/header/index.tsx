'use client'
import { Menu, X } from "lucide-react"
import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search as SearchIcon } from "lucide-react"
import Search from '../search';
import { Just_Another_Hand } from 'next/font/google'

const jah = Just_Another_Hand({
    subsets: ['latin'],
    weight: "400"
})

const esqlinks = [
    { href: '/posts', label: 'Home' },
    { href: '/admin', label: 'Contato' },
    { href: '/admin', label: 'Membros' },
]

const dirlinks = [
    { href: '/admin', label: 'Gerenciamento' },
    { href: '/admin', label: 'Login' },
    { href: '/admin', label: 'FAQ' },
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
        <header className="bg-[#1F1F21] sticky top-0 z-20 w-full mb-8 border-b border-gray-300">

            <div className="bg-[#E3FC02] py-1 sticky top-0 z-20 text-black flex items-center justify-center">
                <span>FRETE GRATIS PARA O BRASIL TODO APROVEITE AS PROMOS!</span>
            </div>

            <div className="flex sm:flex-col md:flex-row items-center justify-center gap-8">

                {/* parte esquerda da header */}
                {/* flex wrap para quebrar as linhas automaticamente */}
                <nav className="hidden sm:flex">
                    <div className="flex flex-wrap gap-6">
                        {esqlinks.map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:bg-white/20 rounded-xl">{link.label}</span>
                            </Link>
                        )}
                    </div>
                </nav>

                {/* parte central da logo e nome adrenalin */}
                <Link href='/' className='flex items-center justify-center ml-8'>
                    <Image
                        src={'/logo/logo.png'}
                        alt="logo do blog"
                        width={904}
                        height={904}
                        className="h-20 w-20 rounded-xl"
                    />
                    <div className={jah.className}>
                        <span className="text-white text-6xl">Adrenalin</span>
                    </div>
                </Link>


                {/* menu e searchicon do mobile*/}
                <nav className="flex">
                    <div className="sm:hidden">
                        {isNavOpen || isSearchOpen ?
                            <X
                                onClick={toggleNavSearch}
                                className="w-8 h-8 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                            />
                            :
                            <div className="flex gap-2">
                                <SearchIcon
                                    onClick={toggleSearch}
                                    className="w-8 h-8 text-white cursor-pointer"
                                />
                                <Menu
                                    onClick={toggleNav}
                                    className="w-8 h-8 text-white text-v cursor-pointer"
                                />
                            </div>
                        }
                    </div>
                </nav>
                {isNavOpen && (
                    <Search />
                )}
                {isNavOpen && (
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 mt-10">
                        {esqlinks.map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:bg-white/20 rounded-xl">{link.label}</span>
                            </Link>
                        )}

                        {dirlinks.map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:bg-white/20 rounded-xl">{link.label}</span>
                            </Link>
                        )}
                    </div>
                )}

                {/* parte direita da header */}
                <nav className="hidden sm:flex">
                    <div className="flex flex-wrap gap-8">
                        {dirlinks.map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:bg-white/20 rounded-xl">{link.label}</span>
                            </Link>
                        )}

                        <button onClick={toggleNav}>
                            {isSearchOpen ?
                                <X
                                    onClick={toggleSearch}
                                    className="w-8 h-8 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                                />
                                :
                                <SearchIcon
                                    onClick={toggleSearch}
                                    className="w-8 h-8 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                                />
                            }
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}