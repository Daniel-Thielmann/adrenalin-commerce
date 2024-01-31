import Image from "next/image";
import Link from "next/link";
import { Just_Another_Hand } from 'next/font/google';

const jah = Just_Another_Hand({
    subsets: ['latin'],
    weight: '400'
});

export default function Footer() {
    return (
        <div className="bg-[#E3FC02] flex text-center w-full mt-20 min-h-[250px] gap-8 items-center justify-center" style={{ userSelect: 'none' }}>

            <div className="flex flex-col justify-center items-center">
                <Link href={"/"}>
                    <Image
                        src={'/logo/adrenalin1.png'}
                        alt="logo do blog"
                        width={180}
                        height={180}
                        className="flex items-center h-25 w-25 rounded-xl object-cover transition-all cursor-pointer"
                    />
                </Link>
                <span className="text- text-center mt-2">2024 Adrenalin Todos os direitos reservados.</span>
            </div>


            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className={jah.className}>
                        <span className="text-6xl text-center">Adrenalin</span>
                    </div>
                    <span className="text-lg text-center">Desenvolvedor: Daniel Thielmann</span>
                </div>

                <div className="mt-2 flex flex-wrap space-x-4 items-center justify-center">
                    <Link href={"/"}>
                        <Image
                            src={'/footer/fb.png'}
                            alt="logo do blog"
                            width={150}
                            height={150}
                            className="h-12 w-12 rounded-xl"
                        />
                    </Link>
                    <Link href={"/"}>
                        <Image
                            src={'/footer/zap.png'}
                            alt="logo do blog"
                            width={150}
                            height={150}
                            className="h-12 w-12 rounded-xl"
                        />
                    </Link>
                    <Link href={"/"}>
                        <Image
                            src={'/footer/insta.png'}
                            alt="logo do blog"
                            width={150}
                            height={150}
                            className="h-12 w-12 rounded-xl"
                        />
                    </Link>
                    <Link href={"/"}>
                        <Image
                            src={'/footer/tw.png'}
                            alt="logo do blog"
                            width={150}
                            height={150}
                            className="h-12 w-12 rounded-xl"
                        />
                    </Link>
                </div>
            </div>



            <div className="flex flex-row items-center justify-center space-x-8">
                <div className="max-w-[14rem]">
                    <Image
                        src='/home/tech/tailwind.png'
                        width={130}
                        height={200}
                        alt=''
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                    />
                </div>

                <div className="max-w-[14rem]">
                    <Image
                        src='/home/tech/next.png'
                        width={130}
                        height={130}
                        alt=''
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                    />
                </div>

                <div className="max-w-[14rem]">
                    <Image
                        src='/home/tech/prisma.png'
                        width={110}
                        height={140}
                        alt=''
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                    />
                </div>

                <Link href='https://www.codejr.com.br' target="_blank">
                    <div className="max-w-[14rem]">
                        <Image
                            src='/logo/code.png'
                            width={180}
                            height={180}
                            alt='logo da codejr'
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}
