'use client'
import { updateMember } from "@/lib/api"
import { Member } from "@/types/data"
import { useRouter } from "next/navigation"

export default function EditCategorie({ member }: { member: Member }) {
    const router = useRouter()

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault()
        const form = e.currentTarget
        const data = {
            name: (new FormData(form).get('name') as string) || member.name,
            email: (new FormData(form).get('email') as string) || member.email,
            role: (new FormData(form).get('role') as string) || member.role,
        }
        await updateMember(member.id, data)
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
                        defaultValue={member?.name}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-white">Email do membro</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="email"
                        placeholder="Email"
                        defaultValue={member?.email}
                    />
                </div>

                <div className="flex flex-col gap-1">
                    <label className="text-white">Cargo do Membro</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="role"
                        placeholder="Cargo"
                        defaultValue={member?.role}
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