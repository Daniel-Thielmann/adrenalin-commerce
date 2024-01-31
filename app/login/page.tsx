'use client'
import React from 'react'
import { IBM_Plex_Sans, Koulen } from 'next/font/google'
import Link from 'next/link'
import { MoveLeft } from 'lucide-react'


const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: "400"
})


const kl = Koulen({
    subsets: ['latin'],
    weight: "400"
})


export default function LoginPage() {
    return (
        <div className={ibm.className}>

            <div className="p-10 xs:p-0 mx-auto md:w-full md:max-w-md">
                <div className={kl.className}>
                    <h1 className="text-center text-3xl mb-5 mt-24 text-black p-3 bg-[#E3FC02]">Adrenalin</h1>
                </div>

                <div className="bg-gray-200 shadow w-full rounded-lg divide-y divide-gray-200">

                    <div className="px-5 py-7">
                        <label className="text-sm text-black pb-1 block">E-mail</label>
                        <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                        <label className="text-sm text-black pb-1 block">Senha</label>
                        <input type="text" className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full" />
                        <Link href={"/admin"}>
                            <button type="button" className="transition duration-200 bg-[#E3FC02] hover:bg-green-400 focus:bg-green-300 focus:shadow-sm focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 text-white w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md text-center inline-block">
                                <span className="inline-block mr-2 text-black">Login</span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block text-black">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                </svg>
                            </button>
                        </Link>
                    </div>

                    <div className="p-5">
                        <div className="grid grid-cols-3 gap-1">
                            <button type="button" className="transition duration-200 border border-gray-200 text-black w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md text-center inline-block">Facebook</button>
                            <button type="button" className="transition duration-200 border border-gray-200 text-black w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md text-center inline-block">Google</button>
                            <button type="button" className="transition duration-200 border border-gray-200 text-black w-full py-2.5 rounded-lg text-sm shadow-sm hover:shadow-md text-center inline-block">Github</button>
                        </div>
                    </div>

                    <div className="py-5">
                        <div className="grid grid-cols-2 gap-1">
                            <div className="text-center sm:text-left whitespace-nowrap ">
                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block text-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z" />
                                    </svg>
                                    <span className="inline-block ml-1 text-black ">Esqueci a senha</span>
                                </button>
                            </div>
                            <div className="text-center sm:text-right whitespace-nowrap">
                                <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer text-sm rounded-lg text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-200 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-4 h-4 inline-block text-black">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                                    </svg>
                                    <span className="inline-block ml-1 text-black">Ajuda</span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="py-5 flex justify-center items-center">
                    <div className="flex items-center justify-center sm:justify-start ">
                        <Link href={'/'}>
                            <button className="transition duration-200 mx-5 px-5 py-4 cursor-pointer text-sm rounded-lg text-gray-300 hover:text-black hover:bg-gray-200 focus:outline-none focus:bg-gray-300 focus:ring-2 focus:ring-gray-400 focus:ring-opacity-50 ring-inset">
                                <div className='flex items-center align-items-center'>
                                    <MoveLeft />
                                    <div className={ibm.className}>
                                        <span className="ml-1">Voltar para página inicial</span>
                                    </div>
                                </div>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}