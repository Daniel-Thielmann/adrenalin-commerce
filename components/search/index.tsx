'use client'

import { Search as SearchIcon, X } from "lucide-react"
import { useSearchParams, useRouter } from "next/navigation"
import { useState } from "react"

type SearchProps = {
  onClose?: () => void
}

export default function Search({ onClose }: SearchProps) {
  const searchParams = useSearchParams()
  const router = useRouter()
  const [searchTerm, setSearchTerm] = useState<string>(searchParams.get('query') || '')

  const handleSearch = (query: string) => {
    if (!query) return
    const params = new URLSearchParams()
    params.set('query', query)
    router.push(`/search/?${params.toString()}`)
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    handleSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="w-full" autoComplete="off">
      <div className="relative flex items-center">
        <SearchIcon className="w-5 h-5 absolute left-4 text-adrenalin-light/50" />
        <input
          id="search"
          name="search"
          type="text"
          value={searchTerm}
          className="w-full px-12 py-3 bg-adrenalin-black border border-white/10 text-white font-body text-sm
                     placeholder:text-adrenalin-light/30 focus:outline-none focus:border-adrenalin-yellow/50
                     transition-all duration-300"
          placeholder="Buscar produtos..."
          onChange={(e) => setSearchTerm(e.target.value)}
          maxLength={50}
          autoFocus
        />
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            className="absolute right-3 p-1 text-adrenalin-light/50 hover:text-white transition-colors"
            aria-label="Fechar busca"
          >
            <X className="w-4 h-4" />
          </button>
        )}
      </div>
    </form>
  )
}