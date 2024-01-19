import Image from "next/image";
import Link from "next/link";
import { Just_Another_Hand } from 'next/font/google'

const jah = Just_Another_Hand({
    subsets: ['latin'],
    weight: '400'
})


export default function Footer() {
    return (
        <div className="bg-[#E3FC02] text-center w-full mt-20 pt-4 min-h-[250px] gap-8 items-center justify-center">
            <div className="flex flex-col">
                <div className="flex flex-col gap-0">
                    <div className={jah.className}>
                        <span className="text-6xl text-center">Adrenalin</span>
                    </div>
                    <span className="text-sm text-center text-">2024 Adrenalin Todos os direitos reservados.</span>
                    <span className="text-sm text-center text-">Desenvolvedor: Daniel Thielmann</span>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-8">
                <Image
                    src='/home/tech/tailwind.png'
                    width={300}
                    height={200}
                    alt=''
                    className="max-w-[14rem] lg:max-w-sm opacity-80 hover:opacity-100 transition-all"
                />

                <Image
                    src='/home/tech/next.png'
                    width={300}
                    height={200}
                    alt=''
                    className="max-w-[14rem] lg:max-w-sm opacity-80 hover:opacity-100 transition-all"
                />

                <Image
                    src='/home/tech/prisma.png'
                    width={200}
                    height={200}
                    alt=''
                    className="max-w-[14rem] lg:max-w-sm opacity-80 hover:opacity-100 transition-all"
                />

                <Link href='https://www.codejr.com.br' target="_blank">
                    <Image
                        src='/logo/code.png'
                        width={300}
                        height={200}
                        alt='logo da codejr'
                        className="max-w-[14rem] lg:max-w-sm opacity-80 hover:opacity-100 transition-all"
                    />
                </Link>
            </div>
        </div>
    )
}