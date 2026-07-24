'use client'
import { Search as SearchIcon } from "lucide-react"
import { useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

type TertiarySearchProps = {
    count: number
    query: string
}

export default function TertiarySearch({ count, query }: TertiarySearchProps) {
    const searchParams = useSearchParams()
    const router = useRouter()
    const [tertiarySearchTerm, setTertiarySearchTerm] = useState<string>(query || '')

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
        <form className="w-full mb-8" autoComplete="off" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2">
                <div className="relative">
                    <SearchIcon className="w-5 h-5 absolute left-4 top-1/2 -translate-y-1/2 text-adrenalin-light/50" />
                    <input
                        id="tertiary-search-input"
                        name="tertiary-search-input-name"
                        type="text"
                        className="w-full pl-12 pr-4 py-3 bg-adrenalin-black border border-white/10 text-white font-body text-sm
                                   placeholder:text-adrenalin-light/30 focus:outline-none focus:border-adrenalin-yellow/50 transition-all duration-300"
                        placeholder="Buscar membros..."
                        value={tertiarySearchTerm}
                        onChange={(e) => setTertiarySearchTerm(e.target.value)}
                    />
                </div>
                <span className="font-body text-xs text-adrenalin-light/60">Total de {count} membros encontrados</span>
            </div>
        </form>
    )
}