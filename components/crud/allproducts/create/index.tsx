'use client'
import { fetchAllCategories, createProduct } from "@/actions/admin/allproducts/actions";
import { useEffect, useState } from "react";
import Select from "react-select";

type OptionType = { value: number; label: string };


export default function CreateProduct() {

    const [categories, setCategories] = useState<OptionType[]>([]);

    useEffect(() => {
        const getCategories = async () => {
            const categoriesFromDb = await fetchAllCategories();
            setCategories(categoriesFromDb.map(category => ({ value: category.id, label: category.name })));
        };

        getCategories();
    }, []);

    const [selectedCategories, setSelectedCategories] = useState<readonly OptionType[] | null>(null);

    const handleCategoryChange = (selectedOptions: readonly OptionType[] | null) => {
        setSelectedCategories(selectedOptions || []);
    };

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        if (selectedCategories) {
            formData.set('categories', selectedCategories.map(option => option.label).join(','));
        }
        await createProduct(formData);
    };

    return (
        <div className="w-full lg:w-9/12 xl:w-7/12 2xl:w-5/12 p-4 border-2 rounded-md flex flex-col gap-6">
            <form className="flex flex-col gap-4" autoComplete="off" onSubmit={handleSubmit}>
                <div className="flex flex-col gap-1">
                    <label className="text-white">Nome do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="title"
                        placeholder="Titulo"
                    />
                    <label className="text-white">Conteúdo do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="content"
                        placeholder="Conteúdo"
                    />
                    <label className="text-white">Imagem do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="image"
                        placeholder="Imagem"
                    />
                    <label className="text-white">Categorias associadas ao Produto</label>
                    <Select
                        isMulti
                        name="categories"
                        options={categories}
                        className="basic-multi-select"
                        classNamePrefix="select"
                        value={selectedCategories}
                        onChange={handleCategoryChange}
                    />
                    <label className="text-white">Preço do Produto</label>
                    <input
                        className="border-2 p-2 rounded-md"
                        name="price"
                        placeholder="Preço"
                    />
                </div>
                <div className="w-full flex justify-end">
                    <button type="submit" className="w-full lg:w-6/12 xl:w-3/12 2xl:w-2/12 bg-green-100 hover:bg-[#a0ab3c] text-black rounded-md px-6 py-2">
                        Criar
                    </button>
                </div>
            </form>
        </div>
    )
}