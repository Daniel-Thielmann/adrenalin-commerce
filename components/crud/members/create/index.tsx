'use client'
import { createMember } from "@/lib/api";
import { useRouter } from "next/navigation";

export default function CreateMemberr() {
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const data = {
            name: form.get('name') as string,
            email: form.get('email') as string,
            role: form.get('role') as string,
        }
        await createMember(data)
        router.push('/admin/manage/members')
    }

    return (
        <div className="w-full lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label className="text-white">Nome do membro</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="name"
                        placeholder="Nome"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-white">Email do membro</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="email"
                        placeholder="Email"
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-white">Cargo do membro</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="role"
                        placeholder="Cargo"
                    />
                </div>

                <div className="w-full flex justify-end">
                    <button className="w-full lg:w-6/12 xl:w-3/12 2xl:w-2/12 bg-green-100 hover:bg-[#a0ab3c] text-black rounded-md px-6 py-2">
                        Criar
                    </button>
                </div>
            </form>

        </div>
    )
}