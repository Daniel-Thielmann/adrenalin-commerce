'use client'
import { deleteProduct } from "@/actions/admin/allproducts/actions"
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

export function DeleteButtonProduct({ id }: { id: number | undefined }) {
    return (
        <button onClick={() => deleteProduct(id)} className="font-medium text-red-600 hover:underline">
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