import Link from "next/link"
import Image from "next/image"
import { Instagram, Facebook, Twitter, Send, Mail, MapPin } from "lucide-react"

const footerLinks = {
  categorias: [
    { href: "/categories/1", label: "Bikes" },
    { href: "/categories/2", label: "Motocross" },
    { href: "/categories/3", label: "Surf" },
    { href: "/categories/4", label: "Camping" },
    { href: "/categories/5", label: "Pesca" },
  ],
  institucional: [
    { href: "/about", label: "Sobre Nós" },
    { href: "/contact", label: "Contato" },
    { href: "/members", label: "Membros" },
    { href: "/login", label: "Login" },
  ],
  suporte: [
    { href: "/", label: "Troca e Devolução" },
    { href: "/", label: "Política de Privacidade" },
    { href: "/", label: "Termos de Uso" },
    { href: "/", label: "FAQ" },
  ],
}

export default function Footer() {
  return (
    <footer className="bg-adrenalin-black border-t border-white/5">
      <div className="container-premium py-16 md:py-20">
        <div className="grid grid-cols-2 md:grid-cols-6 lg:grid-cols-12 gap-8 md:gap-12">
          <div className="col-span-2 md:col-span-6 lg:col-span-4">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/logo/adrenalin1.png"
                alt="Adrenalin"
                width={48}
                height={48}
                className="w-10 h-10 object-contain"
              />
              <span className="font-heading text-3xl text-white tracking-wider">ADRENALIN</span>
            </Link>
            <p className="font-body text-sm text-adrenalin-light leading-relaxed max-w-sm mb-6">
              Sua loja premium de equipamentos para esportes radicais. 
              Bike, motocross, surf, camping e muito mais.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Instagram, href: "/", label: "Instagram" },
                { icon: Facebook, href: "/", label: "Facebook" },
                { icon: Twitter, href: "/", label: "Twitter" },
                { icon: Send, href: "/", label: "Telegram" },
              ].map(({ icon: Icon, href, label }) => (
                <Link
                  key={label}
                  href={href}
                  className="w-10 h-10 flex items-center justify-center border border-white/10 text-adrenalin-light
                             hover:text-adrenalin-yellow hover:border-adrenalin-yellow/30 transition-all duration-300"
                  aria-label={label}
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </div>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="font-body font-semibold text-xs uppercase tracking-[0.2em] text-white mb-5">
              Categorias
            </h4>
            <ul className="space-y-3">
              {footerLinks.categorias.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-adrenalin-light hover:text-adrenalin-yellow transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-1 md:col-span-3 lg:col-span-2">
            <h4 className="font-body font-semibold text-xs uppercase tracking-[0.2em] text-white mb-5">
              Institucional
            </h4>
            <ul className="space-y-3">
              {footerLinks.institucional.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-adrenalin-light hover:text-adrenalin-yellow transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-3 lg:col-span-2">
            <h4 className="font-body font-semibold text-xs uppercase tracking-[0.2em] text-white mb-5">
              Suporte
            </h4>
            <ul className="space-y-3">
              {footerLinks.suporte.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="font-body text-sm text-adrenalin-light hover:text-adrenalin-yellow transition-colors duration-300"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="col-span-2 md:col-span-6 lg:col-span-2">
            <h4 className="font-body font-semibold text-xs uppercase tracking-[0.2em] text-white mb-5">
              Contato
            </h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-adrenalin-light">
                <Mail className="w-4 h-4 shrink-0" />
                <span className="font-body text-sm">contato@adrenalin.com.br</span>
              </li>
              <li className="flex items-center gap-3 text-adrenalin-light">
                <MapPin className="w-4 h-4 shrink-0" />
                <span className="font-body text-sm">Brasil</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="border-t border-white/5 py-6">
        <div className="container-premium flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body text-xs text-adrenalin-light/60">
            2024 Adrenalin. Todos os direitos reservados.
          </p>
          <p className="font-body text-xs text-adrenalin-light/60">
            Desenvolvido por Daniel Thielmann
          </p>
        </div>
      </div>
    </footer>
  )
}