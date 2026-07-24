'use client'
import { updateCategory } from "@/lib/api"
import { Category } from "@/types/data"
import { useRouter } from "next/navigation"

export default function EditCategorie({ category }: { category: Category }) {
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name') as string
        const image = form.get('image') as string
        await updateCategory(category.id, { name: name || category.name, image: image || category.image })
        router.push('/admin/manage/categories')
    }

    return (
        <div className="w-full lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label className="text-white">Nome da Categoria</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="name"
                        placeholder="Nome"
                        defaultValue={category?.name}
                    />
                </div>
                <div className="flex flex-col gap-1">
                    <label className="text-white">Imagem da categoria</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="image"
                        placeholder="Imagem"
                        defaultValue={category?.image}
                    />
                </div>
                <div className="w-full flex justify-end">
                    <button className="w-full lg:w-6/12 xl:w-3/12 2xl:w-2/12 bg-green-100 hover:bg-[#a0ab3c] text-black rounded-md px-0 py-2">
                        Salvar
                    </button>
                </div>
            </form>

        </div>
    )
}