'use client'
import React from 'react'
import Link from 'next/link'
import { MoveLeft, Mail, Lock } from 'lucide-react'

export default function LoginPage() {
    return (
        <div className="min-h-screen bg-adrenalin-black flex items-center justify-center px-4">
            <div className="w-full max-w-md">
                <Link href="/" className="inline-flex items-center gap-2 font-body text-xs text-adrenalin-light hover:text-white uppercase tracking-wider transition-colors mb-12">
                    <MoveLeft className="w-4 h-4" />
                    Voltar para página inicial
                </Link>

                <div className="card-premium p-8 md:p-10">
                    <div className="text-center mb-8">
                        <h1 className="font-heading text-5xl md:text-6xl text-white tracking-wide leading-none">ADRENALIN</h1>
                        <p className="font-body text-sm text-adrenalin-light mt-3">Acesse sua conta</p>
                    </div>

                    <form className="space-y-5">
                        <div>
                            <label className="font-body text-xs text-white/60 uppercase tracking-wider block mb-2">E-mail</label>
                            <div className="relative">
                                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-adrenalin-light/50" />
                                <input type="email" className="w-full pl-10 pr-4 py-3 bg-adrenalin-black border border-white/10 text-white font-body text-sm
                                           placeholder:text-adrenalin-light/30 focus:outline-none focus:border-adrenalin-yellow/50 transition-all duration-300" placeholder="seu@email.com" />
                            </div>
                        </div>

                        <div>
                            <label className="font-body text-xs text-white/60 uppercase tracking-wider block mb-2">Senha</label>
                            <div className="relative">
                                <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-adrenalin-light/50" />
                                <input type="password" className="w-full pl-10 pr-4 py-3 bg-adrenalin-black border border-white/10 text-white font-body text-sm
                                           placeholder:text-adrenalin-light/30 focus:outline-none focus:border-adrenalin-yellow/50 transition-all duration-300" placeholder="••••••••" />
                            </div>
                        </div>

                        <Link href="/admin">
                            <button type="button" className="btn-primary w-full justify-center mt-2">
                                Entrar
                            </button>
                        </Link>
                    </form>

                    <div className="mt-8 pt-6 border-t border-white/5">
                        <div className="grid grid-cols-3 gap-3">
                            <button type="button" className="py-2.5 border border-white/10 text-adrenalin-light hover:text-white hover:border-white/30 font-body text-xs uppercase tracking-wider transition-all duration-300">
                                Facebook
                            </button>
                            <button type="button" className="py-2.5 border border-white/10 text-adrenalin-light hover:text-white hover:border-white/30 font-body text-xs uppercase tracking-wider transition-all duration-300">
                                Google
                            </button>
                            <button type="button" className="py-2.5 border border-white/10 text-adrenalin-light hover:text-white hover:border-white/30 font-body text-xs uppercase tracking-wider transition-all duration-300">
                                Github
                            </button>
                        </div>
                    </div>

                    <div className="mt-6 flex justify-between">
                        <button className="font-body text-xs text-adrenalin-light hover:text-white transition-colors">
                            Esqueci a senha
                        </button>
                        <button className="font-body text-xs text-adrenalin-light hover:text-white transition-colors">
                            Ajuda
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}