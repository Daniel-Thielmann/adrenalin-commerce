import Image from "next/image";
import Link from "next/link";
import { Just_Another_Hand } from 'next/font/google';

const jah = Just_Another_Hand({
    subsets: ['latin'],
    weight: '400'
});

export default function Footer() {
    return (
        <div className="bg-[#E3FC02] text-center w-full mt-20 pt-4 min-h-[250px] gap-8 items-center justify-center" style={{ userSelect: 'none' }}>
            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className={jah.className}>
                        <span className="text-6xl text-center">Adrenalin</span>
                    </div>
                    <span className="text- text-center">2024 Adrenalin Todos os direitos reservados.</span>
                    <span className="text-lg text-center">Desenvolvedor: Daniel Thielmann</span>
                </div>
            </div>

            <div className="flex flex-row items-center justify-center space-x-8">
                <div className="max-w-[14rem]">
                    <Image
                        src='/home/tech/tailwind.png'
                        width={200}
                        height={200}
                        alt=''
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                    />
                </div>

                <div className="max-w-[14rem]">
                    <Image
                        src='/home/tech/next.png'
                        width={200}
                        height={200}
                        alt=''
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                    />
                </div>

                <div className="max-w-[14rem]">
                    <Image
                        src='/home/tech/prisma.png'
                        width={125}
                        height={150}
                        alt=''
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                    />
                </div>

                <Link href='https://www.codejr.com.br' target="_blank">
                    <div className="max-w-[14rem]">
                        <Image
                            src='/logo/code.png'
                            width={200}
                            height={200}
                            alt='logo da codejr'
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}
