import type { Metadata } from 'next'
import { IBM_Plex_Sans, Just_Another_Hand, Koulen } from 'next/font/google'
import './globals.css'

const koulen = Koulen({
  weight: ['400'],
  style: "normal",
  subsets: ['latin']
})
const jah = Just_Another_Hand({
  weight: ['400'],
  style: "normal",
  subsets: ['latin']
})
const ibmplex = IBM_Plex_Sans({
  weight: ['400'],
  style: "normal",
  subsets: ['latin']
})

export const metadata: Metadata = {
  title: 'Adrenalin',
  description: 'A sua loja de esportes radicais',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className='scroll-smooth scrollbar-thumb-[#E3FC02] scrollbar-track-slate-800 scrollbar-thin'>
      <body className={koulen.className}>
        {children}
      </body>
    </html>
  )
}
