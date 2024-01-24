'use client'
import { deleteCategory } from "@/actions/admin/categories/actions"
import Link from "next/link"

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
    return (
        <button onClick={() => deleteCategory(id)} className="font-medium text-red-600 hover:underline">
            Deletar
        </button>
    )
}