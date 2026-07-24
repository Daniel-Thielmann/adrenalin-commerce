'use client'
import { deleteProduct, deleteCategory, deleteMember } from "@/lib/api"
import Link from "next/link"
import { useRouter } from "next/navigation"

export function EditButton({ id }: { id: number | undefined }) {
    return (
        <Link href={`/admin/manage/categories/edit/${id}`}>
            <button className="font-medium text-indigo-600 hover:underline">
                Editar
            </button>
        </Link>
    )
}

export function DeleteButton({ id }: { id: number | undefined }) {
    const router = useRouter()
    return (
        <button onClick={async () => { await deleteCategory(id!); router.refresh() }} className="font-medium text-red-600 hover:underline">
            Deletar
        </button>
    )
}

export function DeleteButtonProduct({ id }: { id: number | undefined }) {
    const router = useRouter()
    return (
        <button onClick={async () => { await deleteProduct(id!); router.refresh() }} className="font-medium text-red-600 hover:underline">
            Deletar
        </button>
    )
}

export function EditButtonProduct({ id }: { id: number | undefined }) {
    return (
        <Link href={`/admin/manage/allproducts/edit/${id}`}>
            <button className="font-medium text-indigo-600 hover:underline">
                Editar
            </button>
        </Link>
    )
}

export function EditButtonMember({ id }: { id: number | undefined }) {
    return (
        <Link href={`/admin/manage/members/edit/${id}`}>
            <button className="font-medium text-indigo-600 hover:underline">
                Editar
            </button>
        </Link>
    )
}

export function DeleteButtonMember({ id }: { id: number | undefined }) {
    const router = useRouter()
    return (
        <button onClick={async () => { await deleteMember(id!); router.refresh() }} className="font-medium text-red-600 hover:underline">
            Deletar
        </button>
    )
}