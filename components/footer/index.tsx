import Image from "next/image";
import Link from "next/link";
import { Just_Another_Hand } from 'next/font/google';

const jah = Just_Another_Hand({
    subsets: ['latin'],
    weight: '400'
});

export default function Footer() {
    return (
        <div className="bg-[#E3FC02] flex text-center w-full mt-20 min-h-[250px] items-center justify-around lg:justify-center lg:gap-40 xl:gap-72" style={{ userSelect: 'none' }}>

            <div className="flex flex-col">
                <div className="flex flex-col">
                    <div className={jah.className}>
                        <span className="text-5xl xl:text-6xl text-center">Adrenalin</span>
                    </div>
                    <span className="text-lg md:text-2xl lg:text-3xl xl:text-4xl  text-center">Dev:</span>
                    <span className="text-lg md:text-2xl lg:text-2xl xl:text-3xl  text-center">Daniel Thielmann</span>
                </div>

                <div className="mt-2 flex space-x-1 flex-wrap items-center justify-around rounded-xl lg:w-full lg:space-x-2">
                    <Link href={"/"}>
                        <Image
                            src={'/footer/fb.png'}
                            alt="logo do blog"
                            width={35}
                            height={35}
                            className=""
                        />
                    </Link>
                    <Link href={"/"}>
                        <Image
                            src={'/footer/zap.png'}
                            alt="logo do blog"
                            width={35}
                            height={35}
                            className=""
                        />
                    </Link>
                    <Link href={"/"}>
                        <Image
                            src={'/footer/insta.png'}
                            alt="logo do blog"
                            width={35}
                            height={35}
                            className=""
                        />
                    </Link>
                    <Link href={"/"}>
                        <Image
                            src={'/footer/tw.png'}
                            alt="logo do blog"
                            width={35}
                            height={35}
                            className=""
                        />
                    </Link>
                </div>
            </div>



            <div className="flex flex-col justify-center items-center">
                <Link href={"/"}>
                    <Image
                        src={'/logo/adrenalin1.png'}
                        alt="logo do blog"
                        width={150}
                        height={150}
                        className="flex items-center rounded-xl object-cover transition-all cursor-pointer"
                    />
                </Link>
                <span className="text-sm md:text-lg lg:text-2xl xl:text-3xl text-center mt-2">2024 Adrenalin.</span>
                <span className="text-sm md:text-lg lg:text-xl xl:text-2xl text-center mt-2">Todos os direitos reservados.</span>
            </div>






            <div className="flex flex-col space-y-4 items-center">

                <div className="max-w-[14rem] ">
                    <Image
                        src='/home/tech/next.png'
                        width={100}
                        height={100}
                        alt=''
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                    />
                </div>

                <div className="max-w-[14rem] ">
                    <Image
                        src='/home/tech/prisma.png'
                        width={100}
                        height={100}
                        alt=''
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                    />
                </div>

                <div className="max-w-[14rem] ">
                    <Image
                        src='/home/tech/tailwind.png'
                        width={125}
                        height={125}
                        alt=''
                        className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                    />
                </div>

                <Link href='https://www.codejr.com.br' target="_blank">
                    <div className="max-w-[14rem]">
                        <Image
                            src='/logo/code.png'
                            width={100}
                            height={100}
                            alt='logo da codejr'
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-all"
                        />
                    </div>
                </Link>
            </div>
        </div>
    )
}
