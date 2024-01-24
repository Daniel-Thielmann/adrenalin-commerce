'use client'

import { Search as SearchIcon } from "lucide-react"
import { IBM_Plex_Sans } from 'next/font/google'
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"


const ibmplex = IBM_Plex_Sans({
    weight: ['400'],
    style: "normal",
    subsets: ['latin']
})

type SecondarySearchProps = {
    count: number
}

export default function SecondarySearch({ count }: SecondarySearchProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [secondarySearchTerm, setSecondarySearchTerm] = useState<string | ''>(searchParams.get('query') || '')

    const handleSearch = (query: string) => {
        if (!query) {
            return
        }

        const params = new URLSearchParams();
        params.set('query', query)
        router.replace(`/search/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(secondarySearchTerm)
    }

    useEffect(() => {
        setSecondarySearchTerm(searchParams.get('query') || '')
    }, [searchParams])

    return (
        <form
            className="flex w-full lg:w-full"
            id="secondary-search"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col w-full gap-2 my-10">
                <div className="relative flex items-center w-full">
                    <SearchIcon className="w-7 h-7 absolute text-black/50 left-4" />
                    <input
                        id="secondary-search-input"
                        name="secondary-search-input-name"
                        type="text"
                        className="w-full rounded-xl px-16 py-6 text-black border border-gray/50 transition-all duration-300"
                        value={secondarySearchTerm}
                        onChange={(e) => setSecondarySearchTerm(e.target.value)}
                    />
                </div>
                <div className={ibmplex.className}>
                    <span className="text-white/70">Total de {count} produtos encontrados</span>

                </div>
            </div>
        </form>
    )
}