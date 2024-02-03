import Footer from '@/components/footer'
import Header from '@/components/header'
import React from 'react'
import { IBM_Plex_Sans, Koulen } from 'next/font/google'
import Link from 'next/link'
import Image from 'next/image'

const ibm = IBM_Plex_Sans({
    subsets: ['latin'],
    weight: "400"
})


const kl = Koulen({
    subsets: ['latin'],
    weight: "400"
})


function MemberPage() {
    return (
        <div className=''>

            <Header />

            <div className='flex flex-items justify-center items-center'>
                <h1 className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-12">
                    Membros</h1>
            </div>


            <Footer />
        </div>

    )

}

export default MemberPage
