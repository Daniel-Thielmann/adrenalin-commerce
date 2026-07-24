import type { Metadata } from 'next'
import './globals.css'
import NextTopLoader from 'nextjs-toploader'
import CartProviderWrapper from '@/components/cart-provider-wrapper'
import CartDrawer from '@/components/cart-modal'

export const metadata: Metadata = {
  title: 'ADRENALIN | Extreme Sports Equipment',
  description: 'Equipamentos premium para esportes radicais. Bike, Motocross, Surf, Camping e mais. Sua aventura começa aqui.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-adrenalin-black text-adrenalin-white antialiased">
        <NextTopLoader
          color="#E3FC02"
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={true}
          showSpinner={false}
          easing="ease"
          speed={200}
        />
        <CartProviderWrapper>
          {children}
          <CartDrawer />
        </CartProviderWrapper>
      </body>
    </html>
  )
}