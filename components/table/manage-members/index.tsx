import React from 'react'
import { Member } from '@prisma/client'
import Pagination from '@/components/pagination';

interface ManageMembersTableProps {
    members: Member[];
    totalPages: number;
}

export default function ManageMembersTable({ members, totalPages }: ManageMembersTableProps) {
    return (
        <div className='flex flex-col justify-center items-center'>
            <h1 className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-12">
                Membros</h1>
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
                    {members && members.map((member: Member, index: number) => (
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
            {totalPages > 1 && (
                <Pagination totalPages={totalPages} />
            )}
        </div>
    )
}
