import { Search as SearchIcon } from "lucide-react";

export default function Search() {
    return (
        <form className="flex basis-full" autoComplete="off">
            <div className="flex flex-col items-center my-8">
                <div className="relative flex items-center">
                    <SearchIcon className="w-7 h-7 absolute text-white/50 left-4" />
                    <input
                        id="search"
                        name="search"
                        type="text"
                        className="rounded-xl w-full px-16 py-5 text-white bg-zinc-900 hover:bg-zinc-800 caret-white transition-all duration-300"
                        placeholder="Busque Algo!"
                    />
                </div>
            </div>
        </form>
    )
}