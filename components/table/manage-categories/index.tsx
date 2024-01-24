import Link from "next/link";
import { DeleteButton, EditButton } from "../buttons";
import { Category } from "@/types/data";


export default function ManageCategoriesTable({ categories, count }: { categories: Category[], count: number }) {

    console.log(categories)

    return (
        <div className="w-full p-4 border-2 rounded-md flex flex-col gap-4">
            <div className="flex flex-wrap items-center w-full justify-between">
                <span className="text-base self-end text-gray-100">
                    27 categorias encontradas...
                </span>
                <Link
                    href={'/admin/manage/categories/create'}
                >
                    <button className="py-2 px-6 w-full md:w-52 border-2 rounded-md text-white bg-green-600 transition-all hover:bg-green-700">
                        +Criar categoria
                    </button>
                </Link>
            </div>
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-base text-left">
                    <thead className="uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nome
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Produtos associados
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Ações
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {categories.map((category: Category, index: number) => (
                            <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                <th className="px-6 py-6 font-medium">
                                    {category?.id}
                                </th>
                                <th className="px-6 py-6 font-medium">
                                    {category?.name}
                                </th>
                                <th className="px-6 py-6 font-medium">
                                    {category?.products?.map((product, index: number) => (
                                        <>
                                            <Link href={product ? `/product/${product?.id}` : '/admin/manage/categories'}>
                                                <span className="hover:underline">
                                                    {product?.title
                                                        ? product.title.length > 25 ? product.title.slice(0, 15) + '...'
                                                            : product.title
                                                        : 'Título não existente'}
                                                </span>
                                                {index < (category?.products?.length || 0) - 1 ? '|' : ''}
                                            </Link>
                                            {(index + 1) % 4 === 0 && index !== (category.products?.length || 0) - 1 && <br />}
                                        </>
                                    ))}

                                </th >
                                <th className="px-6 py-6 flex items-center gap-4">
                                    <EditButton id={category?.id} />
                                    <DeleteButton id={category?.id} />
                                </th>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}