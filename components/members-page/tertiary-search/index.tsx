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

type TertiarySearchProps = {
    count: number
    query: string
}

export default function TertiarySearch({ count, query }: TertiarySearchProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [tertiarySearchTerm, setTertiarySearchTerm] = useState<string | ''>(query || '')

    const handleSearch = (query: string) => {
        if (!query) {
            router.replace(`/members?page=1`);
            return;
        }

        const params = new URLSearchParams();
        params.set('query', query);
        router.replace(`/members?${params.toString()}&page=1`);
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(tertiarySearchTerm)
    }

    useEffect(() => {
        setTertiarySearchTerm(query || '');
    }, [query]);

    return (
        <form
            className="flex w-full lg:w-full"
            id="tertiary-search"
            autoComplete="off"
            onSubmit={handleSubmit}
        >
            <div className="flex flex-col w-full gap-2 my-10">
                <div className="relative flex items-center w-full">
                    <SearchIcon className="w-7 h-7 absolute text-black/50 left-4" />
                    <input
                        id="tertiary-search-input"
                        name="tertiary-search-input-name"
                        type="text"
                        className="w-full rounded-xl px-16 py-6 text-black border border-gray/50 transition-all duration-300"
                        value={tertiarySearchTerm}
                        onChange={(e) => setTertiarySearchTerm(e.target.value)}
                    />
                </div>
                <div className={ibmplex.className}>
                    <span className="text-white/70">Total de {count} membros encontrados</span>

                </div>
            </div>
        </form>
    )
}