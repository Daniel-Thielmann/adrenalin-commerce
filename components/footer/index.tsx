import Image from "next/image";
import Link from "next/link";
import { Just_Another_Hand } from 'next/font/google'

const jah = Just_Another_Hand({
    subsets: ['latin'],
    weight: '400'
})


export default function Footer() {
    return (
        <div className="bg-[#E3FC02] text-center w-full mt-24 py-4 min-h-[250px] flex flex-col gap-8 items-center justify-center">
            <div className="flex flex-col gap-4 px-4">
                <div className={jah.className}>
                    <span className="text-6xl text-center">Adrenalin</span>
                </div>
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