import { updateProduct } from "@/actions/admin/allproducts/actions"
import { Product } from "@/types/data"

export default function EditProduct({ product }: { product: Product }) {

    const updateProductWithId = updateProduct.bind(null, product?.id)

    return (
        <div className="w-full lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <form className="flex flex-col gap-4" autoComplete="off" action={updateProductWithId}>
                <div className="flex flex-col gap-1">
                    <label className="text-white">{product?.title}</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="title"
                        placeholder="Titulo"
                        defaultValue={product?.title}
                    />
                    <label className="text-white">Conteúdo do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="content"
                        placeholder="Conteúdo"
                        defaultValue={product?.content}
                    />
                    <label className="text-white">Imagem do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="image"
                        placeholder="Imagem"
                        defaultValue={product?.image}
                    />
                    <label className="text-white">Categorias associadas ao Produto</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="categories"
                        placeholder="Categorias"
                    />
                    <label className="text-white">Preço do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="price"
                        placeholder="Preço"
                        defaultValue={product?.price}
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