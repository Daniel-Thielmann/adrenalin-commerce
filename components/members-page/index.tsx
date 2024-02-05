import React from 'react'
import { Member } from '@prisma/client'
import Pagination from "../pagination";
import { IBM_Plex_Sans } from 'next/font/google'
import TertiarySearch from './tertiary-search';
import Link from 'next/link';

const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: "400"
})

export default function MemberPage({ members, count, totalPages, query }: { members: Member[], count: number, totalPages: number, query: string }) {
    return (
        <div className={ibm.className}>
            <div className="">
                <TertiarySearch count={count} query={query} />
                {count === 0 ? (
                    <div className="w-full flex flex-col">
                        <span className="text-2xl text-white/70">
                            Nenhum membro encontrado.
                        </span>
                        <span className="text-xl text-white/70">
                            Tente procurar por outro membro, ou veja mais <Link href={'/members'}>membros</Link>
                        </span>
                    </div>
                ) : (
                    <div className="w-full p-4 border-2 rounded-md flex flex-col gap-4">
                        <div className="flex flex-wrap items-center w-full justify-between">
                            <span className="text-base self-end text-gray-100">
                                {count} membros encontrados...
                            </span>
                        </div>
                        <div className='flex flex-col justify-center items-center'>
                            <table className="text-base text-left w-4/5">
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
                                    {members.map((member: Member, index: number) => (
                                        <tr key={index} className="bg-white border-b hover:bg-gray-50">
                                            <th className="px-6 py-6 font-medium">
                                                {member?.id}
                                            </th>
                                            <th className="px-6 py-6 font-medium">
                                                {member?.name}
                                            </th>
                                            <th className="px-6 py-6 font-medium">
                                                {member?.email}
                                            </th>
                                            <th className="px-6 py-6 font-medium">
                                                {member?.role}
                                            </th>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                )}
                {totalPages > 1 && (
                    <Pagination totalPages={totalPages} />
                )}
            </div>
        </div>
    )
}

