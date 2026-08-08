"use client"

import { useState } from "react"
import { ArrowRight, Check } from "lucide-react"

export default function NewsletterSection() {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  function submit(event: React.FormEvent) {
    event.preventDefault()
    if (!email) return
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="relative overflow-hidden bg-adrenalin-yellow py-20 text-adrenalin-black md:py-28">
      <div className="absolute -right-10 top-1/2 -translate-y-1/2 font-heading text-[32vw] leading-none text-black/[0.045]" aria-hidden="true">LINE</div>
      <div className="container-premium relative grid items-end gap-10 lg:grid-cols-[1fr_480px]">
        <div><span className="text-[10px] font-bold uppercase tracking-[0.25em]">Adrenalin dispatch</span><h2 className="mt-3 font-heading text-[clamp(4rem,8vw,8rem)] uppercase leading-[0.8]">Stay in<br />the line.</h2><p className="mt-5 max-w-md text-sm leading-relaxed text-black/65">Receba novidades, lançamentos e equipamentos selecionados.</p></div>
        {submitted ? <div className="flex items-center gap-3 border-b border-black/30 py-5 text-sm font-semibold"><Check className="h-5 w-5" /> Inscrição realizada com sucesso.</div> : (
          <form onSubmit={submit} className="flex border-b-2 border-black">
            <label htmlFor="newsletter-email" className="sr-only">Seu melhor email</label>
            <input id="newsletter-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="SEU MELHOR EMAIL" className="min-w-0 flex-1 bg-transparent px-0 py-5 text-xs font-semibold tracking-[0.1em] placeholder:text-black/45 focus:outline-none" />
            <button type="submit" className="flex items-center gap-3 px-4 text-xs font-bold uppercase tracking-[0.15em] transition-transform hover:translate-x-1">Inscrever <ArrowRight className="h-4 w-4" /></button>
          </form>
        )}
      </div>
    </section>
  )
}
