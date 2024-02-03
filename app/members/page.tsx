import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import { IBM_Plex_Sans, Koulen } from 'next/font/google'
import { Member as PrismaMember } from '@prisma/client'

interface MemberProps {
    members: PrismaMember[];
}

const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: "400"
})


const kl = Koulen({
    subsets: ['latin'],
    weight: "400"
})


export default function MemberPage({ members }: MemberProps) {
    return (
        <div className=''>

            <Header />

            <div className='flex flex-items justify-center items-center'>
                <h1 className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-12">
                    Membros</h1>
                <table className="w-full text-base text-left">
                    <thead className="uppercase bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3">
                                ID
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Nome
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Email
                            </th>
                            <th scope="col" className="px-6 py-3">
                                Cargo
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {members.map((member: PrismaMember, index: number) => (
                            <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                <th className="px-6 py-6 font-medium">
                                    {member.id}
                                </th>
                                <th className="px-6 py-6 font-medium">
                                    {member.name}
                                </th>
                                <th className="px-6 py-6 font-medium">
                                    {member.email}
                                </th>
                                <th className="px-6 py-6 font-medium">
                                    {member.role}
                                </th>
                            </tr>
                        ))}
                    </tbody>
                </table>

            </div>

            <Footer />
        </div>
    )
}

