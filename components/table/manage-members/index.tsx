import React from 'react'
import { Member } from '@prisma/client'
import { DeleteButtonMember, EditButtonMember } from '../buttons';
import Link from 'next/link';

export default function ManageMembersTable({ members, count }: { members: Member[], count: number }) {
    return (
        <div className="w-full p-4 border-2 rounded-md flex flex-col gap-4">
            <div className="flex flex-wrap items-center w-full justify-between">
                <span className="text-base self-end text-gray-100">
                    {count} membros encontrados...
                </span>
                <Link
                    href={'/admin/manage/members/create'}
                >
                    <button className="py-2 px-6 w-full md:w-52 border-2 rounded-md text-white bg-green-600 transition-all hover:bg-green-700">
                        +Criar membro
                    </button>
                </Link>
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
                            <th scope="col" className="px-6 py-3">
                                Ações
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
                                <th className="px-6 py-6 flex items-center gap-4">
                                    <EditButtonMember id={member?.id} />
                                    <DeleteButtonMember id={member?.id} />
                                </th>
                            </tr>
                        ))}

                    </tbody>
                </table>
            </div>
        </div>
    )
}
