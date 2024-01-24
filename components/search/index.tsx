'use client'

import { Search as SearchIcon } from "lucide-react";
import { useSearchParams, useRouter } from "next/navigation";
import { useState } from "react";

export default function Search() {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [searchTerm, setSearchTerm] = useState<string | ''>(searchParams.get('query') || '')

    const handleSearch = (query: string) => {
        if (!query) {
            return
        }

        const params = new URLSearchParams();
        params.set('query', query)
        router.push(`/search/?${params.toString()}`)
    }

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        handleSearch(searchTerm)
    }

    return (
        <form onSubmit={handleSubmit} className="flex basis-full" autoComplete="off">
            <div className="flex flex-col items-center my-8">
                <div className="relative flex items-center">
                    <SearchIcon className="w-7 h-7 absolute text-white/50 left-4" />
                    <input
                        id="search"
                        name="search"
                        type="text"
                        className="rounded-xl w-full px-16 py-5 text-white bg-zinc-900 hover:bg-zinc-800 caret-white transition-all duration-300"
                        placeholder="Busque Algo!"
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
            </div>
        </form>
    )
}