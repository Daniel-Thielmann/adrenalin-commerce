import React from 'react'
import { Member } from '@prisma/client'
import Pagination from "../pagination";
import TertiarySearch from './tertiary-search';
import Link from 'next/link';

export default function MemberPage({ members, count, totalPages, query }: { members: Member[], count: number, totalPages: number, query: string }) {
    return (
        <div>
            <TertiarySearch count={count} query={query} />
            {count === 0 ? (
                <div className="flex flex-col items-center py-16">
                    <span className="font-body text-lg text-white/50 mb-2">
                        Nenhum membro encontrado.
                    </span>
                    <Link href="/members" className="font-body text-sm text-adrenalin-yellow hover:underline">
                        Ver todos os membros
                    </Link>
                </div>
            ) : (
                <div className="card-premium overflow-hidden">
                    <div className="p-4 border-b border-white/5 flex items-center justify-between">
                        <span className="font-body text-sm text-adrenalin-light">
                            {count} membros encontrados
                        </span>
                    </div>
                    <div className="overflow-x-auto">
                        <table className="w-full text-left">
                            <thead>
                                <tr className="border-b border-white/5 bg-adrenalin-black/50">
                                    <th className="font-body text-xs uppercase tracking-wider text-adrenalin-light/60 px-6 py-4">ID</th>
                                    <th className="font-body text-xs uppercase tracking-wider text-adrenalin-light/60 px-6 py-4">Nome</th>
                                    <th className="font-body text-xs uppercase tracking-wider text-adrenalin-light/60 px-6 py-4">Email</th>
                                    <th className="font-body text-xs uppercase tracking-wider text-adrenalin-light/60 px-6 py-4">Cargo</th>
                                </tr>
                            </thead>
                            <tbody>
                                {members.map((member: Member, index: number) => (
                                    <tr key={index} className="border-b border-white/5 hover:bg-white/[0.02] transition-colors">
                                        <td className="font-body text-sm text-white/70 px-6 py-4">{member?.id}</td>
                                        <td className="font-body text-sm text-white px-6 py-4">{member?.name}</td>
                                        <td className="font-body text-sm text-white/70 px-6 py-4">{member?.email}</td>
                                        <td className="font-body text-sm text-white/70 px-6 py-4">{member?.role}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            )}
            {totalPages > 1 && (
                <div className="mt-8">
                    <Pagination totalPages={totalPages} />
                </div>
            )}
        </div>
    )
}