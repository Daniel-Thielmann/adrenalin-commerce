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


function ContatoPage() {
  return (
    <div className=''>

      <Header />

      <div className='flex flex-items justify-center items-center'>
        <h1 className="flex justify-center items-center text-white text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-12">
          Fale Conosco</h1>
      </div>

      <div className={ibm.className}>
        <form className='grid grid-cols-2 px-24'>
          <input
            id="Nome"
            name="nome"
            type="text"
            className="border border-gray-600 px-8 py-5 text-white bg-zinc-900 hover:bg-zinc-800 caret-white transition-all duration-300"
            placeholder="Nome"
          />
          <input
            id="Celular"
            name="Celular"
            type="text"
            className="border border-gray-600  px-8 py-5 text-white bg-zinc-900 hover:bg-zinc-800 caret-white transition-all duration-300"
            placeholder="Celular"
          />
        </form>
        <form className='px-24'>
          <input
            id="Email"
            name="Email"
            type="text"
            className="border border-gray-600 px-8 py-5 w-full text-white bg-zinc-900 hover:bg-zinc-800 caret-white transition-all duration-300"
            placeholder="Email"
          />
        </form>
        <form className='px-24'>
          <div className="relative">
            <label
              htmlFor="Descrição"
              className="absolute left-8 top-4 text-gray-400 pointer-events-none transition-all duration-300"
            >
              Descrição
            </label>
            <textarea
              id="Descrição"
              name="Descrição"
              className="border border-gray-600 px-8 py-5 w-full text-white bg-zinc-900 hover:bg-zinc-800 caret-white placeholder-left transition-all duration-300"
              placeholder=" "
              style={{ padding: '8rem' }}
            />
          </div>
        </form>

        <div className='flex flex-items justify-center items-center my-8'>
          <button className="bg-[#E3FC02] p-4 rounded-lg w-1/2 hover:bg-green-500">
            <Link href={'/'}>
              Enviar
            </Link>
          </button>
        </div>

        <div className={kl.className}>
          <div className='flex flex-col justify-center items-center'>
            <h1 className="flex justify-center items-center text-gray-400 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mt-12">
              Links Uteis</h1>
            <h2 className="flex justify-center items-center text-gray-300 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-12">
              Clique para Acessar</h2>

            <Link href={'https://api.whatsapp.com/send?phone=5532991468218&text=Boa%20noite!%20Vim%20pela%20Adrenalin'} target='_blank'>
              <h3 className="flex justify-center items-center text-gray-300 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-12">
                Whatsapp</h3>
            </Link>
            <Link href={'https://api.whatsapp.com/send?phone=5532991468218&text=Boa%20noite!%20Vim%20pela%20Adrenalin'} target='_blank'>
              <Image
                src='/logo/zapzap.png'
                alt="imagem em destaque"
                width={300}
                height={300}
                className="cursor-pointer mb-16 text-white"
              />
            </Link>

            <Link href={'https://www.instagram.com/daniel_thielmann/'} target='_blank'>
              <h3 className="flex justify-center items-center text-gray-300 text-xl md:text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl 3xl:text-6xl mb-12">
                Instagram</h3>
            </Link>
            <Link href={'https://www.instagram.com/daniel_thielmann/'} target='_blank'>
              <Image
                src='/logo/insta.png'
                alt="imagem em destaque"
                width={300}
                height={300}
                className="cursor-pointer"
              />
            </Link>

          </div>
          <Footer />
        </div>

      </div>
    </div>
  )

}

export default ContatoPage
