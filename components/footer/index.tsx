import Image from "next/image";
import Link from "next/link";

export default function Footer() {
    return (
        <div className="bg-[#E3FC02] text-center w-full mt-24 py-8 min-h-[250px] flex flex-col gap-12 items-center justify-center">
            <div className="flex flex-col gap-4 px-4">
                <span className="text-2xl text-center">Adrenalin</span>
                <span className="text-sm text-center text-">2024 Adrenalin. Todos os direitos reservados. Dev: Daniel Thielmann Code JR</span>
            </div>
            <Link href='https://www.codejr.com.br' target="_blank">
                <Image
                    src='/logo/code.png'
                    width={1920}
                    height={1080}
                    alt='logo da codejr'
                    className="max-w-[14rem] lg:max-w-sm opacity-80 hover:opacity-100 transition-all"
                />
            </Link>
        </div>
    )
}