'use client'
import { Menu, X, ShoppingCart } from "lucide-react"
import { useEffect, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Search as SearchIcon } from "lucide-react"
import Search from '../search';
import { Just_Another_Hand } from 'next/font/google'
import { usePathname, useSearchParams } from "next/navigation"

const jah = Just_Another_Hand({
    subsets: ['latin'],
    weight: "400"
})

const esqlinks = [
    { href: '/', label: 'Home' },
    { href: '/categories', label: 'Categorias' },
    { href: '/admin', label: 'Gerenciamento' },
]

const dirlinks = [
    { href: '/admin', label: 'Membros' },
    { href: '/login', label: 'Login' },
    { href: '/contact', label: 'Contato' },
]

export default function Header() {
    const [navbarAberta, setNavbarAberta] = useState(false)
    const [buscaAberta, setBuscaAberta] = useState(false)

    const pathname = usePathname()
    const searchParams = useSearchParams()


    const abrirBusca = () => {
        setBuscaAberta(true);
    }

    const fecharBusca = () => {
        setBuscaAberta(false);
    }

    const abrirNavbar = () => {
        setNavbarAberta(true);
    }

    const verificarNavbar = () => {
        if (navbarAberta) {
            setNavbarAberta(false);
        } else {
            setNavbarAberta(true);
        }
    }

    useEffect(() => {
        setBuscaAberta(false)
        setNavbarAberta(false)
    }, [pathname, searchParams])

    return (
        <header className="bg-[#1F1F21] sticky top-0 z-20 w-full mb-8 border-b border-gray-300" style={{ userSelect: 'none' }}>

            <div className="bg-[#E3FC02] py-1 sticky top-0 z-20 text-black flex items-center justify-center">
                <span>FRETE GRATIS PARA O BRASIL TODO APROVEITE AS PROMOS!</span>
            </div>

            {/* flex flex-wrap sm:flex-col lg:flex-row items-center justify-around sm:my-6 mt-4 */}
            <div className="flex flex-wrap sm:flex-col lg:flex-row items-center justify-around sm:my-6 mt-4">

                {/* parte esquerda da header */}
                <nav className="hidden sm:flex items-center justify-center">
                    <div className="flex flex-wrap gap-6">
                        {esqlinks.map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:bg-white/20 rounded-xl">{link.label}</span>
                            </Link>
                        )}
                    </div>
                </nav>

                {/* parte central da logo e nome adrenalin */}
                <Link href='/' className='flex items-center justify-center'>
                    <Image
                        src={'/logo/adrenalin1.png'}
                        alt="logo do blog"
                        width={150}
                        height={150}
                        className="h-21 w-21 rounded-xl"
                    />
                    <div className={jah.className}>
                        <span className="text-white text-6xl">Adrenalin</span>
                    </div>
                </Link>

                {
                    buscaAberta && (
                        <div className="flex items-center px-8 gap-4">
                            <Search />
                            <X
                                onClick={fecharBusca}
                                className="w-8 h-8 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 p-1 rounded-xl"
                            />
                            <Menu
                                onClick={verificarNavbar}
                                className="w-8 h-8 text-white text-v cursor-pointer"
                            />
                        </div>
                    )
                }


                {/* menu e searchicon do mobile*/}
                <nav className="flex sm:hidden">
                    {!buscaAberta &&
                        <div className="flex gap-2">
                            <SearchIcon
                                onClick={abrirBusca}
                                className="w-8 h-8 text-white cursor-pointer"
                            />
                            <Menu
                                onClick={verificarNavbar}
                                className="w-8 h-8 text-white text-v cursor-pointer"
                            />
                        </div>
                    }
                </nav>

                {navbarAberta && (
                    <div className="md:hidden flex basis-full flex-col items-center gap-6 my-6">
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
                <nav className="hidden sm:flex items-center">
                    <div className="flex flex-wrap gap-8">
                        {dirlinks.map((link, index) =>
                            <Link href={link.href} key={index}>
                                <span className="text-2xl text-white hover:bg-white/20 rounded-xl">{link.label}</span>
                            </Link>
                        )}

                        <button onClick={verificarNavbar}>
                            {buscaAberta ?
                                <X
                                    onClick={fecharBusca}
                                    className="w-7 h-7 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 rounded-xl"
                                />
                                :
                                <SearchIcon
                                    onClick={abrirBusca}
                                    className="w-7 h-7 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 rounded-xl"
                                />
                            }
                        </button>

                        <button className="w-8 h-8 text-white cursor-pointer hover:bg-white/20 transition-all duration-200 rounded-xl">
                            <ShoppingCart />
                        </button>
                    </div>
                </nav>
            </div>
        </header>
    )
}