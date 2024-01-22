'use client'
import Link from "next/link"

export function EditButton({ id }: { id: number }) {
    return (
        <Link href={`/admin/manage/categories/edit/${id}`}>
            <button className="font-medium text-indigo-600 hover:underline">
                Editar
            </button>
        </Link>
    )
}

export function DeleteButton({ id }: { id: number }) {
    return (
        <button className="font-medium text-red-600 hover:underline">
            Deletar
        </button>
    )
}