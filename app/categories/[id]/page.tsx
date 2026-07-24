import Header from "@/components/header"
import Footer from "@/components/footer"

export default function CategoryPage() {
    return (
        <div className="flex flex-col min-h-screen bg-adrenalin-black">
            <Header />
            <main className="flex-1 container-premium py-section">
                <h1 className="font-heading text-display-md text-white uppercase tracking-wide leading-none text-center">
                    Categoria
                </h1>
                <p className="font-body text-sm text-adrenalin-light text-center mt-4 max-w-lg mx-auto">
                    Em breve - Produtos desta categoria
                </p>
            </main>
            <Footer />
        </div>
    )
}