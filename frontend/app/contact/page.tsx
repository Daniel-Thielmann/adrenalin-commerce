import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Phone, Mail, MapPin, ArrowRight, MessageCircle, Instagram } from 'lucide-react'
import Header from '@/components/header'
import Footer from '@/components/footer'

export const dynamic = 'force-dynamic'

function ContatoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-adrenalin-black">
      <Header />
      <main className="flex-1">
        <section className="section-spacing">
          <div className="container-premium">
            <div className="flex flex-col items-center text-center gap-2 mb-16">
              <h1 className="font-heading text-display-sm md:text-display-md uppercase tracking-wide leading-none">
                Fale Conosco
              </h1>
              <p className="font-body text-sm md:text-base text-adrenalin-light max-w-lg">
                Estamos prontos para ajudar você na sua próxima aventura
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 max-w-5xl mx-auto">
              <div className="card-premium p-8 md:p-10">
                <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-white mb-8">
                  Envie sua Mensagem
                </h2>
                <form className="space-y-5">
                  <div className="grid grid-cols-2 gap-4">
                    <input
                      id="Nome"
                      name="nome"
                      type="text"
                      className="w-full px-4 py-3 bg-adrenalin-black border border-white/10 text-white font-body text-sm
                                 placeholder:text-adrenalin-light/30 focus:outline-none focus:border-adrenalin-yellow/50 transition-all duration-300"
                      placeholder="Nome"
                    />
                    <input
                      id="Celular"
                      name="Celular"
                      type="text"
                      className="w-full px-4 py-3 bg-adrenalin-black border border-white/10 text-white font-body text-sm
                                 placeholder:text-adrenalin-light/30 focus:outline-none focus:border-adrenalin-yellow/50 transition-all duration-300"
                      placeholder="Celular"
                    />
                  </div>
                  <input
                    id="Email"
                    name="Email"
                    type="email"
                    className="w-full px-4 py-3 bg-adrenalin-black border border-white/10 text-white font-body text-sm
                               placeholder:text-adrenalin-light/30 focus:outline-none focus:border-adrenalin-yellow/50 transition-all duration-300"
                    placeholder="Email"
                  />
                  <textarea
                    id="Descrição"
                    name="Descrição"
                    rows={5}
                    className="w-full px-4 py-3 bg-adrenalin-black border border-white/10 text-white font-body text-sm
                               placeholder:text-adrenalin-light/30 focus:outline-none focus:border-adrenalin-yellow/50 transition-all duration-300 resize-none"
                    placeholder="Sua mensagem"
                  />
                  <button type="submit" className="btn-primary w-full justify-center">
                    Enviar Mensagem
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </form>
              </div>

              <div className="flex flex-col gap-6">
                <h2 className="font-heading text-3xl md:text-4xl uppercase tracking-wide text-white">
                  Informações de Contato
                </h2>
                <p className="font-body text-sm text-adrenalin-light leading-relaxed">
                  Site desenvolvido por Daniel Thielmann
                </p>
                <div>
                  <Image 
                    src={'/categorieslogo/gap.png'} 
                    alt={'Daniel Thielmann'} 
                    width={400} 
                    height={400} 
                  />                  
                </div>

                <div className="space-y-4 mt-4">
                  <div className="flex items-center gap-4 p-4 card-premium">
                    <div className="w-10 h-10 flex items-center justify-center bg-adrenalin-yellow/10 border border-adrenalin-yellow/20 shrink-0">
                      <Phone className="w-5 h-5 text-adrenalin-yellow" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-xs text-white/60 uppercase tracking-wider">WhatsApp</h4>
                      <Link href="https://api.whatsapp.com/send?phone=5532991468218" target="_blank" className="font-body text-sm text-white hover:text-adrenalin-yellow transition-colors">
                        (32) 99146-8218
                      </Link>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 card-premium">
                    <div className="w-10 h-10 flex items-center justify-center bg-adrenalin-yellow/10 border border-adrenalin-yellow/20 shrink-0">
                      <Mail className="w-5 h-5 text-adrenalin-yellow" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-xs text-white/60 uppercase tracking-wider">Email</h4>
                      <span className="font-body text-sm text-white">thielmanndan@gmail.com</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-4 p-4 card-premium">
                    <div className="w-10 h-10 flex items-center justify-center bg-adrenalin-yellow/10 border border-adrenalin-yellow/20 shrink-0">
                      <MapPin className="w-5 h-5 text-adrenalin-yellow" />
                    </div>
                    <div>
                      <h4 className="font-body font-semibold text-xs text-white/60 uppercase tracking-wider">Localização</h4>
                      <span className="font-body text-sm text-white">Brasil</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 p-6 card-premium border border-adrenalin-yellow/10">
                  <h3 className="font-heading text-2xl uppercase tracking-wide text-adrenalin-yellow mb-4">
                    Redes Sociais
                  </h3>
                  <div className="flex gap-3">
                    <Link href="https://api.whatsapp.com/send?phone=5532991468218" target="_blank"
                      className="flex items-center gap-2 px-4 py-2.5 border border-white/10 text-white/70 hover:text-adrenalin-yellow hover:border-adrenalin-yellow/30 transition-all duration-300">
                      <MessageCircle className="w-4 h-4" />
                      <span className="font-body text-xs uppercase tracking-wider">WhatsApp</span>
                    </Link>
                    <Link href="https://www.instagram.com/daniel_thielmann/" target="_blank"
                      className="flex items-center gap-2 px-4 py-2.5 border border-white/10 text-white/70 hover:text-adrenalin-yellow hover:border-adrenalin-yellow/30 transition-all duration-300">
                      <Instagram className="w-4 h-4" />
                      <span className="font-body text-xs uppercase tracking-wider">Instagram</span>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}

export default ContatoPage